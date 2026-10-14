const Recommendation = require('../models/Recommendation');
const StudyTask = require('../models/StudyTask');

class RecommendationService {
  async generateForWeakTopics(userId, weakTopicList, subjectName = 'Science') {
    const createdRecs = [];
    for (const topic of weakTopicList) {
      // Check if active recommendation already exists
      const existing = await Recommendation.findOne({
        user: userId,
        title: { $regex: new RegExp(topic, 'i') },
        isDismissed: false,
      });

      if (!existing) {
        const title = `Targeted Revision: ${topic}`;
        const titleOdia = `ଲକ୍ଷ୍ୟଧାର୍ଯ୍ୟ ପୁନରାବୃତ୍ତି: ${topic}`;
        const reason = `Your score on '${topic}' indicated difficulty. A short review will boost your concept clarity.`;
        const reasonOdia = `'${topic}' କୁଇଜ୍ ରେ ଆପଣଙ୍କ ଉତ୍ତରରୁ ଏହି ବିଷୟରେ ଦ୍ୱନ୍ଦ ଥିବା ଜଣାପଡିଛି । ଥରେ ପୁନରାବୃତ୍ତି କଲେ ଆପଣ ସମ୍ପୂର୍ଣ୍ଣ ସ୍ପଷ୍ଟ ହୋଇଯିବେ ।`;

        const rec = new Recommendation({
          user: userId,
          title,
          titleOdia,
          reason,
          reasonOdia,
          type: 'revision',
          subject: subjectName,
          priority: 'High',
        });
        await rec.save();
        createdRecs.push(rec);

        // Also add an automated high-priority task to the student's study planner!
        const existingTask = await StudyTask.findOne({
          user: userId,
          topic: topic,
          completed: false,
        });

        if (!existingTask) {
          const task = new StudyTask({
            user: userId,
            title: `Revise: ${topic}`,
            subject: subjectName,
            topic: topic,
            priority: 'High',
            isAiRecommended: true,
            recommendedReason: reason,
          });
          await task.save();
        }
      }
    }
    return createdRecs;
  }

  async getUserRecommendations(userId) {
    let recs = await Recommendation.find({ user: userId, isDismissed: false }).sort({ createdAt: -1 }).limit(6);

    // If student has no weak topics yet, provide motivating baseline recommendations
    if (!recs || recs.length === 0) {
      recs = [
        {
          _id: 'rec_default_1',
          title: 'Explore Photosynthesis in Simple Odia',
          titleOdia: 'ସରଳ ଓଡ଼ିଆରେ ଆଲୋକ ଶ୍ଳେଷଣ ପ୍ରକ୍ରିୟା ବୁଝନ୍ତୁ',
          reason: 'Recommended starter lesson for Class 8 Life Science curriculum.',
          reasonOdia: 'ଅଷ୍ଟମ ଶ୍ରେଣୀ ଜୀବବିଜ୍ଞାନ ପାଇଁ ସର୍ବାଧିକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପ୍ରଥମ ପାଠ ।',
          type: 'lesson',
          subject: 'Science',
          priority: 'Medium',
        },
        {
          _id: 'rec_default_2',
          title: 'Try Interactive Newton Laws Practice Quiz',
          titleOdia: 'ନ୍ୟୁଟନଙ୍କ ଗତି ନିୟମ ଅଭ୍ୟାସ କୁଇଜ୍ ଦିଅନ୍ତୁ',
          reason: 'Tests core understanding of force, velocity, and inertia.',
          reasonOdia: 'ବଳ ଏବଂ ଜଡ଼ତା ବିଷୟରେ ବୁଝାମଣା ପରୀକ୍ଷା କରନ୍ତୁ ।',
          type: 'quiz',
          subject: 'Science',
          priority: 'Medium',
        },
      ];
    }
    return recs;
  }
}

module.exports = new RecommendationService();
