const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/User');
const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');
const Lesson = require('../models/Lesson');
const Quiz = require('../models/Quiz');
const LearningProgress = require('../models/LearningProgress');
const StudyTask = require('../models/StudyTask');
const Recommendation = require('../models/Recommendation');
const { subjectsData } = require('./seedData');

const autoSeedIfEmpty = async () => {
  try {
    const subjectCount = await Subject.countDocuments();
    if (subjectCount > 0) {
      console.log(`[Vidyora Seed] Database already seeded (${subjectCount} subjects). Skipping auto-seed.`);
      return;
    }

    console.log('[Vidyora Seed] Empty database detected. Seeding initial curriculum data...');

    // 1. Create Subjects
    const createdSubjects = await Subject.insertMany(subjectsData);
    const sciSub = createdSubjects.find((s) => s.code === 'SCI');
    const mathSub = createdSubjects.find((s) => s.code === 'MATH');
    const csSub = createdSubjects.find((s) => s.code === 'CS');

    // 2. Create Chapters
    const chaptersData = [
      {
        title: 'Photosynthesis & Plant Nutrition',
        titleOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ ଏବଂ ଉଦ୍ଭିଦ ପୋଷଣ',
        subject: sciSub._id,
        classLevel: 'Class 8',
        order: 1,
        description: 'Understand how green plants synthesize glucose using sunlight, water, and carbon dioxide.',
        descriptionOdia: 'ସବୁଜ ଉଦ୍ଭିଦମାନେ କିପରି ସୂର୍ଯ୍ୟାଲୋକ, ଜଳ ଓ ଅଙ୍ଗାରକାମ୍ଳ ବ୍ୟବହାର କରି ଖାଦ୍ୟ ପ୍ରସ୍ତୁତ କରନ୍ତି ବୁଝନ୍ତୁ ।',
      },
      {
        title: 'Force and Laws of Motion',
        titleOdia: 'ବଳ ଏବଂ ଗତିର ନିୟମାବଳୀ',
        subject: sciSub._id,
        classLevel: 'Class 8',
        order: 2,
        description: 'Explore Isaac Newton’s 3 fundamental physical laws governing motion and forces.',
        descriptionOdia: 'ବଳ ଏବଂ ଗତିକୁ ପରିଚାଳିତ କରୁଥିବା ନ୍ୟୁଟନଙ୍କ ୩ଟି ମୌଳିକ ନିୟମ ଶିଖନ୍ତୁ ।',
      },
      {
        title: 'Triangles & Pythagorean Theorem',
        titleOdia: 'ତ୍ରିଭୁଜ ଏବଂ ପିଥାଗୋରାସ୍ ଉପପାଦ୍ୟ',
        subject: mathSub._id,
        classLevel: 'Class 8',
        order: 1,
        description: 'Master right-angled triangles, calculating hypotenuse length, and geometric proofs.',
        descriptionOdia: 'ସମକୋଣୀ ତ୍ରିଭୁଜ, କର୍ଣ୍ଣ ନିର୍ଣ୍ଣୟ ସୂତ୍ର ଏବଂ ଜ୍ୟାମିତିକ ପ୍ରମାଣ ଶିଖନ୍ତୁ ।',
      },
      {
        title: 'Introduction to Artificial Intelligence',
        titleOdia: 'କୃତ୍ରିମ ବୁଦ୍ଧିମତା (AI) ପରିଚୟ',
        subject: csSub._id,
        classLevel: 'Class 8',
        order: 1,
        description: 'Learn how smart machines think, process regional languages, and assist humans.',
        descriptionOdia: 'କମ୍ପ୍ୟୁଟର କିପରି ଚିନ୍ତା କରେ, ଆଞ୍ଚଳିକ ଭାଷା ବୁଝେ ଏବଂ ମଣିଷକୁ ସାହାଯ୍ୟ କରେ ଜାଣନ୍ତୁ ।',
      },
    ];

    const createdChapters = await Chapter.insertMany(chaptersData);
    const photoChapter = createdChapters[0];
    const newtonChapter = createdChapters[1];
    const pythagorasChapter = createdChapters[2];

    // 3. Create Lessons
    const lessonsData = [
      {
        title: 'Mechanism of Photosynthesis & Light Reactions',
        titleOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ ପ୍ରକ୍ରିୟା ଏବଂ ଆଲୋକ ପର୍ଯ୍ୟାୟ',
        subject: sciSub._id,
        chapter: photoChapter._id,
        classLevel: 'Class 8',
        order: 1,
        durationMinutes: 15,
        learningObjectives: [
          'Define the biochemical process of photosynthesis',
          'Write and balance the chemical equation',
          'Distinguish between light-dependent and dark reactions',
        ],
        learningObjectivesOdia: [
          'ଆଲୋକ ଶ୍ଳେଷଣର ଜୈବ-ରାସାୟନିକ ପ୍ରକ୍ରିୟା ବୁଝିବା',
          'ଏହାର ରାସାୟନିକ ସମୀକରଣ ଲେଖିବା ଓ ବୁଝିବା',
          'ଆଲୋକ ପ୍ରକ୍ରିୟା ଏବଂ ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ ଜାଣିବା',
        ],
        content: `Photosynthesis is the fundamental biological process that sustains almost all aerobic life on Earth. 

Green plants contain specialized organelles called chloroplasts inside their mesophyll cells. Inside the chloroplasts is the green pigment chlorophyll, which possesses the unique ability to absorb photon energy from sunlight.

The overall chemical equation is:
6CO₂ + 6H₂O + Sunlight ➔ C₆H₁₂O₆ + 6O₂

The process occurs in two primary stages:
1. Light Reactions (Thylakoids): Sunlight splits water molecules (photolysis) to release oxygen gas and generate energy carriers (ATP and NADPH).
2. Calvin Cycle / Dark Reactions (Stroma): Carbon dioxide is reduced and converted into glucose sugar without requiring direct sunlight.`,
        contentOdia: `ଆଲୋକ ଶ୍ଳେଷଣ ହେଉଛି ପୃଥିବୀର ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଜୈବ-ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଯାହା ସମଗ୍ର ଜୀବଜଗତକୁ ଖାଦ୍ୟ ଓ ଅମ୍ଳଜାନ ଯୋଗାଇଥାଏ ।

ସବୁଜ ଉଦ୍ଭିଦର ପତ୍ର କୋଷ ମଧ୍ୟରେ 'କ୍ଲୋରୋପ୍ଲାଷ୍ଟ' ବା ହରିତକଣିକା ଥାଏ । ଏହି ହରିତକଣିକାରେ ଥିବା ପତ୍ରହରିତ୍ (କ୍ଲୋରୋଫିଲ୍) ସୂର୍ଯ୍ୟାଲୋକର ଫୋଟୋନ୍ ଶକ୍ତି ଶୋଷଣ କରିବାର କ୍ଷମତା ରଖେ ।

ମୁଖ୍ୟ ରାସାୟନିକ ସମୀକରଣ:
୬ CO₂ + ୬ H₂O + ସୂର୍ଯ୍ୟାଲୋକ ➔ C₆H₁₂O₆ (ଗ୍ଲୁକୋଜ୍) + ୬ O₂ (ଅମ୍ଳଜାନ)

ଏହି ପ୍ରକ୍ରିୟା ଦୁଇଟି ମୁଖ୍ୟ ପର୍ଯ୍ୟାୟରେ ସମ୍ପାଦିତ ହୁଏ:
୧. ଆଲୋକ ପର୍ଯ୍ୟାୟ (ଥାଇଲାକଏଡ୍): ସୂର୍ଯ୍ୟାଲୋକ ଜଳ ଅଣୁକୁ ବିଭାଜିତ କରି ଅମ୍ଳଜାନ ବାଷ୍ପ ମୁକ୍ତ କରେ ।
୨. ଅନ୍ଧକାର ପର୍ଯ୍ୟାୟ (ଷ୍ଟ୍ରୋମା): ଅଙ୍ଗାରକାମ୍ଳ ବାଷ୍ପ ବିଜାରିତ ହୋଇ ଖାଦ୍ୟ (ଗ୍ଲୁକୋଜ୍) ରେ ପରିଣତ ହୁଏ ।`,
        keyTakeaways: [
          'Chlorophyll absorbs blue and red wavelengths and reflects green light.',
          'Water splitting produces Oxygen gas as a vital byproduct.',
          'Stomata on leaf surfaces regulate gas exchange (CO₂ in, O₂ out).',
        ],
        keyTakeawaysOdia: [
          'ପତ୍ରହରିତ୍ ନୀଳ ଏବଂ ଲାଲ୍ ଆଲୋକ ଶୋଷଣ କରେ ଓ ସବୁଜ ଆଲୋକ ପ୍ରତିଫଳିତ କରେ ।',
          'ଜଳ ଅଣୁ ବିଭାଜନ ଦ୍ୱାରା ଅମ୍ଳଜାନ ଗ୍ୟାସ୍ ପରିବେଶକୁ ନିର୍ଗତ ହୁଏ ।',
          'ପତ୍ରରେ ଥିବା ଷ୍ଟୋମାଟା ବା ସ୍ତୋମ ଦ୍ୱାରା ଗ୍ୟାସ୍ ବିନିମୟ ନିୟନ୍ତ୍ରିତ ହୁଏ ।',
        ],
        realWorldExample:
          'Consider a rooftop solar kitchen: panels catch rays (chlorophyll), well water flows in (H₂O), air enters (CO₂), and cooked meals (glucose) are stored for the entire family!',
        realWorldExampleOdia:
          'ଉଦାହରଣ ସ୍ୱରୂପ: ଯେପରି ଗ୍ରାମାଞ୍ଚଳରେ ସୋଲାର ଚୁଲିରେ ସୂର୍ଯ୍ୟ କିରଣ, ପାଣି ଏବଂ ଚାଉଳ ମିଶାଇ ଭାତ ରନ୍ଧାଯାଏ, ସେହିପରି ଗଛ ପତ୍ରରେ ସୂର୍ଯ୍ୟାଲୋକ ଓ ପାଣି ସାହାଯ୍ୟରେ ସମଗ୍ର ଜୀବଜଗତ ପାଇଁ ଖାଦ୍ୟ ରନ୍ଧାଯାଏ ।',
      },
      {
        title: "Newton's Three Laws of Motion & Momentum",
        titleOdia: 'ନ୍ୟୁଟନଙ୍କ ତିନୋଟି ଗତି ନିୟମ ଏବଂ ସଂବେଗ',
        subject: sciSub._id,
        chapter: newtonChapter._id,
        classLevel: 'Class 8',
        order: 1,
        durationMinutes: 18,
        learningObjectives: [
          'Explain inertia and Newton’s First Law',
          'Calculate force using F = mass × acceleration',
          'Understand action-reaction pairs in Newton’s Third Law',
        ],
        learningObjectivesOdia: [
          'ଜଡ଼ତା ଏବଂ ନ୍ୟୁଟନଙ୍କ ପ୍ରଥମ ନିୟମ ବୁଝିବା',
          'F = ma ସୂତ୍ର ବ୍ୟବହାର କରି ବଳର ମାପ ଗଣନା କରିବା',
          'ନ୍ୟୁଟନଙ୍କ ତୃତୀୟ ନିୟମରେ କ୍ରିୟା-ପ୍ରତିକ୍ରିୟା ବୁଝିବା',
        ],
        content: `Sir Isaac Newton revolutionized classical physics by formulating three laws that dictate how objects move when forces act upon them.

1. First Law (Law of Inertia): An object continues in its state of rest or uniform motion in a straight line unless an external unbalanced force acts upon it.
2. Second Law: Force is proportional to the rate of change of momentum: F = m × a.
3. Third Law: To every action there is an equal and opposite reaction.`,
        contentOdia: `ସାର୍ ଆଇଜାକ୍ ନ୍ୟୁଟନ୍ ପଦାର୍ଥ ବିଜ୍ଞାନରେ ତିନୋଟି ଯୁଗାନ୍ତକାରୀ ନିୟମ ପ୍ରଦାନ କରିଥିଲେ ।

୧. ପ୍ରଥମ ନିୟମ (ଜଡ଼ତା): ବାହାରୁ ବଳ ପ୍ରୟୋଗ ନହେବା ଯାଏଁ ସ୍ଥିର ବସ୍ତୁ ସ୍ଥିର ରହେ ଏବଂ ଗତିଶୀଳ ବସ୍ତୁ ସମବେଗରେ ଗତି କରିଚାଲେ ।
୨. ଦ୍ୱିତୀୟ ନିୟମ: ବଳ (F) = ବସ୍ତୁତ୍ୱ (m) × ତ୍ୱରଣ (a) ।
୩. ତୃତୀୟ ନିୟମ: ପ୍ରତ୍ୟେକ କ୍ରିୟାର ଏକ ସମାନ ଓ ବିପରୀତ ପ୍ରତିକ୍ରିୟା ରହିଥାଏ ।`,
        keyTakeaways: [
          'Inertia depends directly on the mass of the body.',
          'Unit of Force is Newton (N), where 1 N = 1 kg·m/s².',
          'Action and reaction act on two different bodies simultaneously.',
        ],
        keyTakeawaysOdia: [
          'ବସ୍ତୁର ଜଡ଼ତା ତାହାର ବସ୍ତୁତ୍ୱ ଉପରେ ନିର୍ଭର କରେ ।',
          'ବଳର ଏକକ ହେଉଛି ନିଉଟନ୍ (N), ଯେଉଁଠି ୧ N = ୧ kg·m/s² ।',
          'କ୍ରିୟା ଓ ପ୍ରତିକ୍ରିୟା ଦୁଇଟି ଭିନ୍ନ ବସ୍ତୁ ଉପରେ ଏକ ସଙ୍ଗେ କାର୍ଯ୍ୟ କରେ ।',
        ],
        realWorldExample:
          'When you jump off a rowboat onto the bank, your feet push the boat backward while the boat pushes you forward!',
        realWorldExampleOdia:
          'ଯେତେବେଳେ ଜଣେ ଲୋକ ଡଙ୍ଗାରୁ ନଦୀ କୂଳକୁ ଡିଏଁ, ସେ ଡଙ୍ଗାକୁ ପଛକୁ ଠେଲେ (କ୍ରିୟା) ଏବଂ ଡଙ୍ଗାଟି ତାକୁ କୂଳ ଆଡ଼କୁ ଆଗକୁ ଠେଲିଦିଏ (ପ୍ରତିକ୍ରିୟା) ।',
      },
    ];

    const createdLessons = await Lesson.insertMany(lessonsData);

    // 4. Create Quizzes
    const quizzesData = [
      {
        title: 'Mastery Quiz: Photosynthesis & Light Reactions',
        titleOdia: 'ପରୀକ୍ଷା: ଆଲୋକ ଶ୍ଳେଷଣ ଓ ଆଲୋକ ପର୍ଯ୍ୟାୟ',
        subject: sciSub._id,
        chapter: photoChapter._id,
        lesson: createdLessons[0]._id,
        classLevel: 'Class 8',
        difficulty: 'Medium',
        questions: [
          {
            question: 'Which gas is released by green plants during the light-dependent reaction of photosynthesis?',
            questionOdia: 'ଆଲୋକ ଶ୍ଳେଷଣର ଆଲୋକ ପ୍ରକ୍ରିୟାରେ ଉଦ୍ଭିଦମାନଙ୍କ ଦ୍ୱାରା କେଉଁ ଗ୍ୟାସ୍ ପରିବେଶକୁ ମୁକ୍ତ ହୁଏ?',
            options: ['Carbon Dioxide (CO₂)', 'Oxygen (O₂)', 'Nitrogen (N₂)', 'Methane (CH₄)'],
            optionsOdia: ['ଅଙ୍ଗାରକାମ୍ଳ (CO₂)', 'ଅମ୍ଳଜାନ (O₂)', 'ଯବକ୍ଷାରଜାନ (N₂)', 'ମିଥେନ (CH₄)'],
            correctAnswerIndex: 1,
            explanation: 'Oxygen is liberated during photolysis when water molecules are split inside the thylakoid membrane.',
            explanationOdia: 'ଜଳ ଅଣୁର ଆଲୋକ ବିଭାଜନ (Photolysis) ଦ୍ୱାରା ଅମ୍ଳଜାନ ବାଷ୍ପ ବାହାରିଥାଏ ।',
            topic: 'Photolysis & Oxygen Release',
          },
          {
            question: 'Where do the light-dependent reactions take place inside plant chloroplasts?',
            questionOdia: 'ହରିତକଣିକାର କେଉଁ ଅଂଶରେ ଆଲୋକ ପର୍ଯ୍ୟାୟ ପ୍ରକ୍ରିୟା ସଂଗଠିତ ହୁଏ?',
            options: ['Stroma', 'Thylakoids / Grana', 'Outer membrane', 'Vacuole'],
            optionsOdia: ['ଷ୍ଟ୍ରୋମା', 'ଥାଇଲାକଏଡ୍ / ଗ୍ରାନା', 'ବାହ୍ୟ ଆବରଣ', 'ରସଧାନୀ'],
            correctAnswerIndex: 1,
            explanation: 'Chlorophyll is located in the thylakoid membranes where it absorbs sunlight energy.',
            explanationOdia: 'ଥାଇଲାକଏଡ୍ ପରଦାରେ ପତ୍ରହରିତ୍ ଥିବାରୁ ଆଲୋକ ପ୍ରକ୍ରିୟା ଏଠାରେ ସମ୍ପାଦିତ ହୁଏ ।',
            topic: 'Chloroplast Structure',
          },
          {
            question: 'What is the primary green pigment responsible for absorbing sunlight in plants?',
            questionOdia: 'ଉଦ୍ଭିଦରେ ସୂର୍ଯ୍ୟାଲୋକ ଶୋଷଣ କରୁଥିବା ମୁଖ୍ୟ ସବୁଜ କଣିକା କଣ?',
            options: ['Hemoglobin', 'Chlorophyll', 'Melanin', 'Carotene'],
            optionsOdia: ['ହିମୋଗ୍ଲୋବିନ୍', 'ପତ୍ରହରିତ୍ (କ୍ଲୋରୋଫିଲ୍)', 'ମେଲାନିନ୍', 'କ୍ୟାରୋଟିନ୍'],
            correctAnswerIndex: 1,
            explanation: 'Chlorophyll is the green pigment in chloroplasts that absorbs light energy.',
            explanationOdia: 'ପତ୍ରହରିତ୍ ସୂର୍ଯ୍ୟାଲୋକ ଶୋଷଣ କରି ରାସାୟନିକ ଶକ୍ତିରେ ପରିଣତ କରେ ।',
            topic: 'Chlorophyll Function',
          },
        ],
      },
      {
        title: "Challenge Quiz: Newton's Laws of Motion",
        titleOdia: 'ଅଭ୍ୟାସ କୁଇଜ୍: ନ୍ୟୁଟନଙ୍କ ଗତି ନିୟମାବଳୀ',
        subject: sciSub._id,
        chapter: newtonChapter._id,
        lesson: createdLessons[1]._id,
        classLevel: 'Class 8',
        difficulty: 'Medium',
        questions: [
          {
            question: 'Which of Newton’s laws defines the concept of Inertia?',
            questionOdia: 'ନ୍ୟୁଟନଙ୍କ କେଉଁ ନିୟମ ବସ୍ତୁର "ଜଡ଼ତା" (Inertia) ଧାରଣା ଦେଇଥାଏ?',
            options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
            optionsOdia: ['ପ୍ରଥମ ନିୟମ', 'ଦ୍ୱିତୀୟ ନିୟମ', 'ତୃତୀୟ ନିୟମ', 'ମାଧ୍ୟାକର୍ଷଣ ନିୟମ'],
            correctAnswerIndex: 0,
            explanation: 'Newton’s First Law states that objects resist change in their state of motion, known as inertia.',
            explanationOdia: 'ନ୍ୟୁଟନଙ୍କ ପ୍ରଥମ ନିୟମକୁ ଜଡ଼ତା ନିୟମ ମଧ୍ୟ କୁହାଯାଏ ।',
            topic: 'First Law of Motion',
          },
          {
            question: 'If a body of mass 4 kg accelerates at 3 m/s², what net force acts upon it?',
            questionOdia: '୪ କେଜି ବସ୍ତୁତ୍ୱ ବିଶିଷ୍ଟ ବସ୍ତୁରେ ୩ ମିଟର/ସେକେଣ୍ଡ² ତ୍ୱରଣ ସୃଷ୍ଟି କରିବାକୁ କେତେ ବଳ ଆବଶ୍ୟକ?',
            options: ['7 N', '1 N', '12 N', '0.75 N'],
            optionsOdia: ['୭ ନିଉଟନ୍', '୧ ନିଉଟନ୍', '୧୨ ନିଉଟନ୍', '୦.୭୫ ନିଉଟନ୍'],
            correctAnswerIndex: 2,
            explanation: 'Using F = m × a: Force = 4 kg × 3 m/s² = 12 Newtons.',
            explanationOdia: 'F = ma ସୂତ୍ର ଅନୁଯାୟୀ: ବଳ = ୪ × ୩ = ୧୨ ନିଉଟନ୍ ।',
            topic: 'F=ma Calculation',
          },
        ],
      },
    ];

    await Quiz.insertMany(quizzesData);

    // 5. Create Default Demo Student
    const salt = await bcrypt.genSalt(10);
    const demoHashedPassword = await bcrypt.hash('vidyora123', salt);

    const demoUser = new User({
      name: 'Omm Pritam (Demo Student)',
      email: 'demo.student@vidyora.ai',
      password: demoHashedPassword,
      classLevel: 'Class 8',
      schoolName: 'Govt. High School, Balasore',
      parentName: 'Ramesh Jena',
      parentEmail: 'ramesh.jena.parent@example.com',
      preferredLanguage: 'or',
      role: 'student',
    });
    await demoUser.save();

    // 6. Demo Student Progress
    const progress = new LearningProgress({
      user: demoUser._id,
      completedLessons: [
        { lesson: createdLessons[0]._id, completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
      ],
      activeMinutes: 145,
      streakDays: 4,
      averageScore: 78,
      totalQuizzesTaken: 4,
      weakTopics: [
        {
          topic: 'Chloroplast Structure',
          subject: 'Science',
          failureCount: 2,
          totalAttempts: 3,
          lastIdentifiedAt: new Date(),
        },
      ],
    });
    await progress.save();

    // 7. Demo Study Tasks
    await StudyTask.insertMany([
      {
        user: demoUser._id,
        title: 'Revise Chloroplast and Thylakoid membranes in Odia',
        subject: 'Science',
        topic: 'Chloroplast Structure',
        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
        priority: 'High',
        isAiRecommended: true,
        recommendedReason: 'Identified as a weak topic in your recent quiz attempt.',
      },
      {
        user: demoUser._id,
        title: 'Practice 5 questions on Newton Second Law (F = ma)',
        subject: 'Science',
        topic: 'Force & Motion',
        dueDate: new Date(Date.now() + 48 * 60 * 60 * 1000),
        priority: 'Medium',
      },
    ]);

    // 8. Demo Recommendations
    await Recommendation.insertMany([
      {
        user: demoUser._id,
        title: 'Targeted Review: Chloroplast & Stroma Structure',
        titleOdia: 'ଲକ୍ଷ୍ୟଧାର୍ଯ୍ୟ ପୁନରାବୃତ୍ତି: କ୍ଲୋରୋପ୍ଲାଷ୍ଟ ଓ ଷ୍ଟ୍ରୋମା',
        reason: 'You had incorrect answers in Chloroplast Structure. Review the 3-minute explanation.',
        reasonOdia: 'କ୍ଲୋରୋପ୍ଲାଷ୍ଟ ଗଠନ ପ୍ରଶ୍ନରେ ଭୁଲ୍ ହୋଇଥିଲା । ଏହାକୁ ଆଉଥରେ ପଢିବା ପାଇଁ ପରାମର୍ଶ ଦିଆଗଲା ।',
        type: 'revision',
        subject: 'Science',
        priority: 'High',
      },
    ]);

    console.log('[Vidyora Seed] Successfully populated database with subjects, lessons, quizzes, and demo student!');
  } catch (err) {
    console.error('[Vidyora Seed] Seeding error:', err);
  }
};

module.exports = { autoSeedIfEmpty };
