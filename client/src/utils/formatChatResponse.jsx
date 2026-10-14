import React from 'react';

/**
 * Strips all unnecessary symbols like --, ---, /#, #, ##, ###, **, _, `
 * Returns clean, polished text free of markdown syntax debris.
 */
export function cleanChatbotText(rawText) {
  if (!rawText || typeof rawText !== 'string') return '';

  return rawText
    // Remove markdown code fences
    .replace(/```(?:markdown|json|html|text)?/gi, '')
    .replace(/```/g, '')
    // Remove markdown header hashes (#, ##, ###, ####)
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/#{1,6}/g, '')
    // Remove horizontal rules & repetitive dashes (---, --, ___, ===)
    .replace(/^[-=_]{2,}\s*$/gm, '')
    .replace(/--+/g, ' ')
    // Remove /# and stray symbol combinations
    .replace(/\/#+/g, '')
    .replace(/#+\//g, '')
    .replace(/\[\/?point\]/gi, '')
    // Remove bold/italic markdown asterisks & underscores (**bold** -> bold)
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim();
}

/**
 * Renders chatbot response strictly on a point-to-point basis with clean UI badges,
 * ensuring zero raw symbols like --, /#, #, ** are shown to the student.
 */
export function PointToPointResponse({ content }) {
  if (!content) return null;

  const cleaned = cleanChatbotText(content);
  const rawLines = cleaned.split('\n').map((l) => l.trim()).filter(Boolean);

  const points = [];
  let headerTitle = '';
  let pointCounter = 1;

  rawLines.forEach((line, index) => {
    // Check if line is already numbered: 1., 2), ୧., ᱑., etc.
    const numMatch = line.match(/^(\d+|[୧-୯]+|[᱐-᱙]+)[\.\)]\s*(.*)$/);
    // Check if line starts with "Point X:" or "ପଏଣ୍ଟ X:" or "ᱯᱚᱭᱮᱱᱴ X:" or "ᱵᱤᱱᱫᱩ X:"
    const pointMatch = line.match(/^(?:point|ପଏଣ୍ଟ|ବିନ୍ଦୁ|ᱯᱚᱭᱮᱱᱴ|ᱵᱤᱱᱫᱩ)\s*(\d+|[୧-୯]+|[᱐-᱙]+)?[:\-]?\s*(.*)$/i);
    // Check bullet markers like -, *, •, >
    const bulletMatch = line.match(/^[-*•>]\s*(.*)$/);

    if (numMatch && numMatch[2].trim()) {
      points.push({
        num: pointCounter++,
        text: numMatch[2].trim(),
      });
    } else if (pointMatch && pointMatch[2].trim()) {
      points.push({
        num: pointCounter++,
        text: pointMatch[2].trim(),
      });
    } else if (bulletMatch && bulletMatch[1].trim()) {
      points.push({
        num: pointCounter++,
        text: bulletMatch[1].trim(),
      });
    } else {
      if (index === 0 && line.length < 90 && !line.endsWith('.')) {
        headerTitle = line;
      } else {
        points.push({
          num: pointCounter++,
          text: line,
        });
      }
    }
  });

  return (
    <div className="space-y-3 text-slate-800">
      {headerTitle && (
        <div className="font-extrabold text-brand-navy text-sm sm:text-base pb-1.5 flex items-center gap-2 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
          <span>{headerTitle}</span>
        </div>
      )}

      {points.length > 0 ? (
        <div className="space-y-2.5">
          {points.map((pt, pIdx) => {
            // Check if there is a colon separating a label and detail: e.g. "Core Concept: ..." or "ମୁଖ୍ୟ ଧାରଣା: ..."
            const colonSplit = pt.text.split(/:\s*(.*)/);
            const hasLabel = colonSplit.length > 1 && colonSplit[0].length < 35;

            return (
              <div
                key={pIdx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/90 hover:bg-slate-50 border border-slate-200/80 transition-colors shadow-2xs"
              >
                <span className="w-6 h-6 rounded-xl bg-brand-navy text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  {pt.num}
                </span>
                <div className="text-sm sm:text-base leading-relaxed flex-1">
                  {hasLabel ? (
                    <>
                      <strong className="text-brand-navy font-bold">{colonSplit[0]}: </strong>
                      <span className="text-slate-800">{colonSplit[1]}</span>
                    </>
                  ) : (
                    <span className="text-slate-800">{pt.text}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm sm:text-base leading-relaxed text-slate-800">{cleaned}</p>
      )}
    </div>
  );
}
