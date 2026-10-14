const aiTutoringService = require('../services/aiTutoringService');
const Conversation = require('../models/Conversation');

exports.chat = async (req, res) => {
  try {
    const {
      message,
      language = 'or',
      classLevel = req.user?.classLevel || 'Class 8',
      subject = 'Science',
      conversationId,
    } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ message: 'Query message is required' });
    }

    const trimmedMsg = message.trim();
    // Auto-detect Santali (Ol Chiki script or Santali keywords)
    const hasOlChiki = /[\u1C50-\u1C7F]/.test(trimmedMsg);
    const requestsSantali = /santali|santhali|ol\s*chiki|ᱥᱟᱱᱛᱟᱲᱤ|ᱥᱟᱱᱛᱟᱞᱤ|santali\s+te|olchiki/i.test(trimmedMsg);
    const targetLanguage = (hasOlChiki || requestsSantali) ? 'sat' : language;

    const aiResult = await aiTutoringService.generateChatExplanation({
      message: trimmedMsg,
      language: targetLanguage,
      classLevel,
      subject,
    });

    // Save or update conversation if user is logged in
    let savedConvId = conversationId;
    if (req.user) {
      try {
        let conv;
        if (conversationId) {
          conv = await Conversation.findOne({ _id: conversationId, user: req.user._id });
        }
        if (!conv) {
          conv = new Conversation({
            user: req.user._id,
            title: message.slice(0, 40) + '...',
            subject,
            classLevel,
            messages: [],
          });
        }

        conv.messages.push({
          role: 'user',
          content: message,
          language,
        });

        conv.messages.push({
          role: 'assistant',
          content: aiResult.explanation,
          language,
          workflowSteps: aiResult.workflowSteps,
        });

        await conv.save();
        savedConvId = conv._id;
      } catch (saveErr) {
        console.warn('Could not persist conversation history:', saveErr.message);
      }
    }

    res.json({
      ...aiResult,
      conversationId: savedConvId,
    });
  } catch (error) {
    console.error('AI Chat Controller Error:', error);
    res.status(500).json({ message: 'Failed to process AI tutoring request', error: error.message });
  }
};

exports.explainImage = async (req, res) => {
  try {
    let base64Image = '';
    let mimeType = 'image/jpeg';

    if (req.file) {
      base64Image = req.file.buffer.toString('base64');
      mimeType = req.file.mimetype || 'image/jpeg';
    } else if (req.body.image) {
      const img = req.body.image;
      if (img.startsWith('data:')) {
        const matches = img.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          mimeType = matches[1];
          base64Image = matches[2];
        } else {
          base64Image = img.replace(/^data:[^;]+;base64,/, '');
        }
      } else {
        base64Image = img;
      }
    }

    if (!base64Image) {
      return res.status(400).json({ message: 'No image provided for analysis or translation.' });
    }

    const {
      prompt = '',
      language = 'or',
      targetLanguage = 'or',
      classLevel = req.user?.classLevel || 'Class 8',
      mode = 'translate'
    } = req.body;

    const result = await aiTutoringService.explainImage({
      base64Image,
      mimeType,
      optionalPrompt: prompt,
      language: targetLanguage || language,
      classLevel,
      mode
    });

    return res.json({
      success: true,
      ...result
    });
  } catch (error) {
    console.error('Explain/Translate Image Controller Error:', error);
    return res.status(500).json({
      message: 'Failed to translate and analyze image',
      error: error.message
    });
  }
};

exports.generateDiagram = async (req, res) => {
  try {
    const {
      topic,
      subject = 'Science',
      classLevel = req.user?.classLevel || 'Class 8',
      language = 'or'
    } = req.body;

    if (!topic || topic.trim() === '') {
      return res.status(400).json({ message: 'Topic is required for diagram generation' });
    }

    const result = await aiTutoringService.generateEducationalDiagram({
      topic: topic.trim(),
      subject,
      classLevel,
      language
    });

    return res.json(result);
  } catch (error) {
    console.error('Generate Diagram Controller Error:', error);
    return res.status(500).json({
      message: 'Failed to generate educational diagram',
      error: error.message
    });
  }
};

exports.textToSpeech = async (req, res) => {
  try {
    const text = req.query.text || req.body?.text;
    const lang = req.query.lang || req.body?.lang || 'or';

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ message: 'Valid text is required for audio playback' });
    }

    const audioBuffer = await aiTutoringService.synthesizeSpeech({
      text: text.trim(),
      lang
    });

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length,
      'Cache-Control': 'public, max-age=86400',
      'Accept-Ranges': 'bytes'
    });

    return res.send(audioBuffer);
  } catch (error) {
    console.error('Text to Speech Controller Error:', error);
    return res.status(500).json({
      message: 'Failed to synthesize speech audio',
      error: error.message
    });
  }
};


