// IndexedDB storage manager for offline-first learning with full bilingual (Odia + English) support
import { syncAPI } from './api';
import JSZip from 'jszip';

const DB_NAME = 'vidyora_offline_db';
const DB_VERSION = 3;

export const openDB = () => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('subjects')) {
        db.createObjectStore('subjects', { keyPath: '_id' });
      }
      if (!db.objectStoreNames.contains('chapters')) {
        db.createObjectStore('chapters', { keyPath: '_id' });
      }
      if (!db.objectStoreNames.contains('lessons')) {
        db.createObjectStore('lessons', { keyPath: '_id' });
      }
      if (!db.objectStoreNames.contains('quizzes')) {
        db.createObjectStore('quizzes', { keyPath: '_id' });
      }
      if (!db.objectStoreNames.contains('pendingSync')) {
        db.createObjectStore('pendingSync', { keyPath: 'tempId' });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error || new Error('Failed to open IndexedDB'));
    request.onblocked = () => {
      console.warn('IndexedDB upgrade blocked: please close other open tabs.');
    };
  });
};

// -------------------------------------------------------------
// Core Foundational Bilingual (Odia + English) Offline Starter Pack
// Pre-seeded so rural students have immediate access without internet
// -------------------------------------------------------------
export const BILINGUAL_OFFLINE_STARTER_LESSONS = [
  {
    _id: 'offline-sci-photo',
    subject: { _id: 'sub-sci', name: 'Science', nameOdia: 'ବିଜ୍ଞାନ' },
    title: 'Photosynthesis: Mechanism & Energy Cycle',
    titleOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ: କାର୍ଯ୍ୟପ୍ରଣାଳୀ ଓ ଶକ୍ତି ଚକ୍ର',
    classLevel: 'Class 8',
    durationMinutes: 18,
    learningObjectives: [
      'Understand the role of sunlight, chlorophyll, CO2, and water in food synthesis',
      'Write and balance the fundamental photosynthesis chemical reaction equation',
      'Differentiate between the light reactions and dark reactions (Calvin cycle)'
    ],
    learningObjectivesOdia: [
      'ଖାଦ୍ୟ ପ୍ରସ୍ତୁତିରେ ସୂର୍ଯ୍ୟାଲୋକ, ପତ୍ରହରିତ୍, ଅଙ୍ଗାରକାମ୍ଳ ଓ ଜଳର ଭୂମିକା ବୁଝିବା',
      'ଆଲୋକ ଶ୍ଳେଷଣର ରାସାୟନିକ ସମୀକରଣ ଲେଖିବା ଓ ସନ୍ତୁଳିତ କରିବା',
      'ଆଲୋକ ପ୍ରକ୍ରିୟା ଏବଂ ଅନ୍ଧକାର ପ୍ରକ୍ରିୟା (କାଲଭିନ୍ ଚକ୍ର) ର ପାର୍ଥକ୍ୟ ଜାଣିବା'
    ],
    content: `Photosynthesis is the fundamental biochemical process whereby autotrophic green plants synthesize glucose using solar energy, atmospheric carbon dioxide, and soil water.\n\nKey Stages:\n1. Light Absorption: Chlorophyll pigments embedded in thylakoid membranes capture photons.\n2. Photolysis of Water: 2H2O -> 4H+ + 4e- + O2 (Oxygen is released into the atmosphere).\n3. Carbon Fixation (Calvin Cycle): CO2 is reduced into glucose (C6H12O6) stored as plant starch.\n\nOverall Chemical Formula:\n6CO2 + 6H2O + Sunlight + Chlorophyll -> C6H12O6 + 6O2`,
    contentOdia: `ଆଲୋକ ଶ୍ଳେଷଣ ହେଉଛି ଏକ ମୌଳିକ ଜୈବ ରାସାୟନିକ ପ୍ରକ୍ରିୟା, ଯାହା ମାଧ୍ୟମରେ ସବୁଜ ଉଦ୍ଭିଦମାନେ ସୂର୍ଯ୍ୟାଲୋକ, ପତ୍ରହରିତ୍, ବାୟୁମଣ୍ଡଳର ଅଙ୍ଗାରକାମ୍ଳ ଏବଂ ମୃତ୍ତିକାର ଜଳ ବ୍ୟବହାର କରି ନିଜର ଖାଦ୍ୟ (ଗ୍ଲୁକୋଜ୍) ପ୍ରସ୍ତୁତ କରନ୍ତି ।\n\nମୁଖ୍ୟ ପଦକ୍ଷେପ:\n୧. ସୌରଶକ୍ତି ଶୋଷଣ: ପତ୍ରରେ ଥିବା କ୍ଲୋରୋଫିଲ୍ ସୂର୍ଯ୍ୟାଲୋକ ସଂଗ୍ରହ କରେ ।\n୨. ଜଳର ଆଲୋକ ବିଶ୍ଳେଷଣ: ଜଳ ଅଣୁ ବିଭାଜିତ ହୋଇ ଅମ୍ଳଜାନ (O2) ବାଷ୍ପ ପରିବେଶକୁ ନିର୍ଗତ ହୁଏ ।\n୩. ଅଙ୍ଗାରକାମ୍ଳ ବିଜାରଣ: ଅଙ୍ଗାରକାମ୍ଳରୁ ଶର୍କରା ବା ଗ୍ଲୁକୋଜ୍ (C6H12O6) ପ୍ରସ୍ତୁତ ହୋଇ ସାଇତା ରହେ ।\n\nରାସାୟନିକ ସମୀକରଣ:\n୬ CO2 + ୬ H2O + ସୂର୍ଯ୍ୟାଲୋକ + ପତ୍ରହରିତ୍ -> C6H12O6 + ୬ O2`,
    keyTakeaways: [
      'Plants are primary producers sustaining life on Earth',
      'Oxygen is released as a vital byproduct of water photolysis',
      'Excess glucose is stored as starch in plant roots, seeds, and fruits'
    ],
    keyTakeawaysOdia: [
      'ଉଦ୍ଭିଦମାନେ ପୃଥିବୀର ପ୍ରାଥମିକ ଉତ୍ପାଦକ',
      'ଜଳ ବିଭାଜନ ଦ୍ୱାରା ଅମ୍ଳଜାନ ଉପଜାତ ଦ୍ରବ୍ୟ ରୂପେ ବାହାରେ',
      'ଉଦ୍ଭିଦ ଶରୀରରେ ଗ୍ଲୁକୋଜ୍ ଶ୍ୱେତସାର (ଷ୍ଟାର୍ଚ) ଭାବରେ ସଞ୍ଚିତ ରହେ'
    ],
    realWorldExample: 'Like solar panels converting sunlight into electricity for battery storage, plant leaves use chlorophyll to capture sunlight and store it as glucose food for the planet.',
    realWorldExampleOdia: 'ଯେପରି ସୋଲାର ପ୍ୟାନେଲ୍ ସୂର୍ଯ୍ୟାଲୋକକୁ ବ୍ୟାଟେରୀରେ ବିଦ୍ୟୁତ୍ ଶକ୍ତି କରି ରଖେ, ସେପରି ଉଦ୍ଭିଦର ପତ୍ର ସୌରଶକ୍ତିକୁ ଖାଦ୍ୟ ଆକାରରେ ସାଇତି ରଖେ ।',
    isOfflineAvailable: true,
  },
  {
    _id: 'offline-math-pythagoras',
    subject: { _id: 'sub-math', name: 'Mathematics', nameOdia: 'ଗଣିତ' },
    title: 'Pythagoras Theorem: Proof & Geometry Applications',
    titleOdia: 'ପିଥାଗୋରାସ ଉପପାଦ୍ୟ: ପ୍ରମାଣ ଓ ଜ୍ୟାମିତି ପ୍ରୟୋଗ',
    classLevel: 'Class 8',
    durationMinutes: 15,
    learningObjectives: [
      'Identify hypotenuse, base, and perpendicular sides of a right triangle',
      'State and apply the Pythagorean relationship a² + b² = c²',
      'Solve real-world distance and height problems using square roots'
    ],
    learningObjectivesOdia: [
      'ସମକୋଣୀ ତ୍ରିଭୁଜର କର୍ଣ୍ଣ, ଭୂମି ଓ ଲମ୍ବ ବାହୁ ଚିହ୍ନିବା',
      'ପିଥାଗୋରାସ ସୂତ୍ର c² = a² + b² ପ୍ରୟୋଗ କରିବା',
      'ବର୍ଗମୂଳ ବ୍ୟବହାର କରି ଦୂରତା ଓ ଉଚ୍ଚତା ସମ୍ପର୍କିତ ଗାଣିତିକ ପ୍ରଶ୍ନ ସମାଧାନ କରିବା'
    ],
    content: `In any right-angled triangle, the area of the square whose side is the hypotenuse is equal to the sum of the areas of the squares on the other two perpendicular sides.\n\nMathematical Formula:\nc² = a² + b² (where c is hypotenuse, a and b are perpendicular legs)\n\nCalculation Example:\nIf base a = 3 cm and height b = 4 cm, then:\nc = √(3² + 4²) = √(9 + 16) = √25 = 5 cm.`,
    contentOdia: `ଏକ ସମକୋଣୀ ତ୍ରିଭୁଜରେ, କର୍ଣ୍ଣର ବର୍ଗ ଅନ୍ୟ ଦୁଇ ବାହୁ (ଭୂମି ଓ ଲମ୍ବ) ର ବର୍ଗର ଯୋଗଫଳ ସହିତ ସମାନ ହୋଇଥାଏ ।\n\nଗାଣିତିକ ସୂତ୍ର:\nକର୍ଣ୍ଣ² = ଭୂମି² + ଲମ୍ବ² (c² = a² + b²)\n\nସମାଧାନ ଉଦାହରଣ:\nଯଦି ଭୂମି a = ୩ ସେମି, ଲମ୍ବ b = ୪ ସେମି ହୁଏ, ତେବେ:\nକର୍ଣ୍ଣ c = √(୩² + ୪²) = √(୯ + ୧୬) = √୨୫ = ୫ ସେମି ।`,
    keyTakeaways: [
      'The hypotenuse is always the longest side, lying directly opposite the 90° angle',
      'Common Pythagorean triplets: (3, 4, 5), (5, 12, 13), (6, 8, 10), (8, 15, 17)'
    ],
    keyTakeawaysOdia: [
      'କର୍ଣ୍ଣ ସବୁବେଳେ ୯୦ ଡିଗ୍ରୀ କୋଣର ସମ୍ମୁଖରେ ଥିବା ବୃହତ୍ତମ ବାହୁ',
      'ପିଥାଗୋରାସ ତ୍ରୟୀ: (୩, ୪, ୫), (୫, ୧୨, ୧୩), (୬, ୮, ୧୦), (୮, ୧୫, ୧୭)'
    ],
    realWorldExample: 'Calculating the exact ladder length required to reach a rooftop window safely without tilting.',
    realWorldExampleOdia: 'କାନ୍ଥର ଉଚ୍ଚତା ଓ ତଳ ଦୂରତା ଜାଣି ଛାତ ଉପରକୁ ଲଗାଯାଉଥିବା ସିଡ଼ିର ସଠିକ୍ ଲମ୍ବ ନିର୍ଣ୍ଣୟ କରିବା ।',
    isOfflineAvailable: true,
  },
  {
    _id: 'offline-sci-newton',
    subject: { _id: 'sub-sci', name: 'Science', nameOdia: 'ବିଜ୍ଞାନ' },
    title: 'Newton’s Three Laws of Motion & Momentum',
    titleOdia: 'ନ୍ୟୁଟନଙ୍କ ତିନୋଟି ଗତି ନିୟମ ଓ ସଂବେଗ',
    classLevel: 'Class 8',
    durationMinutes: 16,
    learningObjectives: [
      'Define inertia and understand Newton’s First Law of Motion',
      'Calculate force using mass and acceleration (F = m × a)',
      'Explain action-reaction force pairs using Newton’s Third Law'
    ],
    learningObjectivesOdia: [
      'ଜଡ଼ତାର ସଂଜ୍ଞା ଏବଂ ନ୍ୟୁଟନଙ୍କ ପ୍ରଥମ ଗତି ନିୟମ ବୁଝିବା',
      'ବସ୍ତୁତ୍ୱ ଓ ତ୍ୱରଣ ବ୍ୟବହାର କରି ବଳ ନିର୍ଣ୍ଣୟ କରିବା (F = m × a)',
      'କ୍ରିୟା ଏବଂ ପ୍ରତିକ୍ରିୟା ବଳର ଉଦାହରଣ ବୁଝିବା'
    ],
    content: `Sir Isaac Newton formulated three fundamental laws of physical mechanics:\n1. 1st Law (Law of Inertia): An object remains at rest or in uniform straight motion unless acted upon by an external net force.\n2. 2nd Law (Force & Momentum): Acceleration of an object is directly proportional to the applied force: F = m × a.\n3. 3rd Law (Action-Reaction): For every action, there is an equal and opposite reaction acting on separate bodies.`,
    contentOdia: `ସାର୍ ଆଇଜାକ୍ ନ୍ୟୁଟନ୍ ଗତି ଏବଂ ବଳ ସମ୍ପର୍କରେ ତିନୋଟି ମୌଳିକ ନିୟମ ପ୍ରଦାନ କରିଥିଲେ:\n୧. ପ୍ରଥମ ନିୟମ (ଜଡ଼ତା ନିୟମ): ବାହ୍ୟ ଅସନ୍ତୁଳିତ ବଳ ପ୍ରୟୋଗ ନହେବା ପର୍ଯ୍ୟନ୍ତ ଏକ ସ୍ଥିର ବସ୍ତୁ ସ୍ଥିର ରହେ ଏବଂ ଗତିଶୀଳ ବସ୍ତୁ ସମବେଗରେ ଗତି କରେ ।\n୨. ଦ୍ୱିତୀୟ ନିୟମ: ବଳ (F) = ବସ୍ତୁତ୍ୱ (m) × ତ୍ୱରଣ (a) ।\n୩. ତୃତୀୟ ନିୟମ: ପ୍ରତ୍ୟେକ କ୍ରିୟାର ଏକ ସମାନ ଏବଂ ବିପରୀତ ପ୍ରତିକ୍ରିୟା ଥାଏ ।`,
    keyTakeaways: [
      'Inertia depends directly on the mass of the body',
      'Action and reaction forces act on two different bodies simultaneously'
    ],
    keyTakeawaysOdia: [
      'ଜଡ଼ତା ବସ୍ତୁର ବସ୍ତୁତ୍ୱ ଉପରେ ନିର୍ଭର କରେ',
      'କ୍ରିୟା ଓ ପ୍ରତିକ୍ରିୟା ବଳ ଦୁଇଟି ପୃଥକ ବସ୍ତୁ ଉପରେ କାର୍ଯ୍ୟ କରେ'
    ],
    realWorldExample: 'When stepping off a boat onto the riverbank, pushing backward on the boat propels the passenger forward onto dry land.',
    realWorldExampleOdia: 'ଡଙ୍ଗାରୁ କୂଳକୁ ଡେଇଁବା ବେଳେ ଗୋଡ ପଛକୁ ଠେଲିଲେ ଡଙ୍ଗା ପଛକୁ ଯାଏ ଏବଂ ମଣିଷ ଆଗକୁ ଯାଏ ।',
    isOfflineAvailable: true,
  },
  {
    _id: 'offline-cs-cybersafety',
    subject: { _id: 'sub-cs', name: 'Computer Science', nameOdia: 'କମ୍ପ୍ୟୁଟର ବିଜ୍ଞାନ' },
    title: 'Cyber Safety, Privacy & Digital Footprint',
    titleOdia: 'ସାଇବର ସୁରକ୍ଷା, ଗୋପନୀୟତା ଓ ଡିଜିଟାଲ ପଦଚିହ୍ନ',
    classLevel: 'Class 8',
    durationMinutes: 15,
    learningObjectives: [
      'Understand what constitutes an online digital footprint',
      'Identify phishing, identity theft, and online impersonation scams',
      'Apply practical data protection habits and recognize IT Act 2000 provisions'
    ],
    learningObjectivesOdia: [
      'ଡିଜିଟାଲ ପଦଚିହ୍ନ (Digital Footprint) କ’ଣ ବୁଝିବା',
      'ଫିସିଂ ଏବଂ ପରିଚୟ ଚୋରି (Identity Theft) ଚିହ୍ନଟ କରିବା',
      'ସୁରକ୍ଷିତ ଇଣ୍ଟରନେଟ୍ ଅଭ୍ୟାସ ଓ IT Act 2000 ବିଷୟରେ ଜାଣିବା'
    ],
    content: `A digital footprint is the record of trail left behind whenever someone uses internet services or social platforms.\n\nKey Principles:\n1. Strong Passwords: Use alphanumeric passwords and never reveal One-Time Passwords (OTPs).\n2. Phishing Defense: Avoid clicking unverified links promising cash rewards or lottery prizes.\n3. Indian Law: The Information Technology Act (IT Act 2000) penalizes cybercrimes, data theft, and online harassment.`,
    contentOdia: `ଡିଜିଟାଲ ପଦଚିହ୍ନ ହେଉଛି ଇଣ୍ଟରନେଟ୍ ବ୍ୟବହାର କରିବା ସମୟରେ ଆପଣ ଛାଡିଯାଉଥିବା ଡାଟାର ରେକର୍ଡ ।\n\nମୁଖ୍ୟ ନିୟମ:\n୧. କଠିନ ପାସୱାର୍ଡ: କାହା ସହିତ ନିଜର ଓଟିପି (OTP) କିମ୍ବା ପାସୱାର୍ଡ ସେୟାର କରନ୍ତୁ ନାହିଁ ।\n୨. ଠକ ଲିଙ୍କ୍ ରୁ ସତର୍କ: ଲଟେରୀ ବା ପୁରସ୍କାର ନାମରେ ଆସୁଥିବା ଅଜଣା ଲିଙ୍କ୍ କ୍ଲିକ୍ କରନ୍ତୁ ନାହିଁ ।\n୩. ଭାରତୀୟ ଆଇନ: ସୂଚନା ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଆଇନ (IT Act 2000) ସାଇବର ଅପରାଧୀଙ୍କ ବିରୁଦ୍ଧରେ କଠୋର ଦଣ୍ଡବିଧାନ କରେ ।`,
    keyTakeaways: [
      'Never share OTPs, bank credentials, or private addresses online',
      'Everything posted online forms a permanent traceable footprint'
    ],
    keyTakeawaysOdia: [
      'କେବେବି ଓଟିପି ବା ବ୍ୟାଙ୍କ ତଥ୍ୟ ଅଜଣା ବ୍ୟକ୍ତିଙ୍କୁ ଦିଅନ୍ତୁ ନାହିଁ',
      'ଇଣ୍ଟରନେଟ୍‌ରେ ଦିଆଯାଉଥିବା ତଥ୍ୟ ଚିରଦିନ ପାଇଁ ଲିପିବଦ୍ଧ ରହେ'
    ],
    realWorldExample: 'Locking your accounts with two-factor authentication is like securing your home with a double deadlock before traveling.',
    realWorldExampleOdia: 'ଆକାଉଣ୍ଟରେ ଟୁ-ଫ୍ୟାକ୍ଟର ସୁରକ୍ଷା ରଖିବା ଘରେ ଦୁଇଟି ତାଲା ଲଗାଇବା ସଦୃଶ ନିରାପଦ ।',
    isOfflineAvailable: true,
  },
  {
    _id: 'offline-sst-solarsystem',
    subject: { _id: 'sub-sst', name: 'Social Science', nameOdia: 'ସାମାଜିକ ବିଜ୍ଞାନ' },
    title: 'The Solar System, Earth & Planetary Motion',
    titleOdia: 'ସୌରମଣ୍ଡଳ, ପୃଥିବୀ ଏବଂ ଗ୍ରହମାନଙ୍କ ଗତି',
    classLevel: 'Class 8',
    durationMinutes: 15,
    learningObjectives: [
      'Name the eight planets of our solar system in order from the Sun',
      'Explain how Earth’s axial rotation causes the day-and-night cycle',
      'Understand how orbital revolution and axial tilt create the four seasons'
    ],
    learningObjectivesOdia: [
      'ସୂର୍ଯ୍ୟଙ୍କ ଠାରୁ ଦୂରତା ଅନୁସାରେ ଆଠଟି ଗ୍ରହର ନାମ କ୍ରମାନ୍ୱୟରେ ଜାଣିବା',
      'ପୃଥିବୀର ଆହ୍ନିକ ଗତି (ଆବର୍ତ୍ତନ) ଦ୍ୱାରା ଦିନ-ରାତି କିପରି ହୁଏ ବୁଝିବା',
      'ବାର୍ଷିକ ଗତି (ପରିକ୍ରମଣ) ଦ୍ୱାରା ଋତୁ ପରିବର୍ତ୍ତନ ବୁଝିବା'
    ],
    content: `The Solar System comprises the Sun at the center and eight planets orbiting it gravitationally.\n\nKey Concepts:\n1. Planetary Order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n2. Earth’s Unique Nature: Liquid water and an oxygen-rich atmosphere make Earth the only known cradle of life.\n3. Rotation: Earth completes one spin on its axis every 24 hours, generating daylight and night.\n4. Revolution: Earth orbits the Sun every 365.25 days, tilting at 23.5° to generate changing seasons.`,
    contentOdia: `ସୌରମଣ୍ଡଳର କେନ୍ଦ୍ରରେ ସୂର୍ଯ୍ୟ ଅବସ୍ଥିତ ଏବଂ ତାହା ଚାରିପାଖରେ ଆଠଟି ଗ୍ରହ କକ୍ଷପଥରେ ଘୂରୁଛନ୍ତି ।\n\nମୁଖ୍ୟ ତଥ୍ୟ:\n୧. ଗ୍ରହମାନଙ୍କ କ୍ରମ: ବୁଧ, ଶୁକ୍ର, ପୃଥିବୀ, ମଙ୍ଗଳ, ବୃହସ୍ପତି, ଶନି, ୟୁରାନସ୍, ନେପଚୁନ୍ ।\n୨. ପୃଥିବୀର ବିଶେଷତ୍ୱ: ପ୍ରଚୁର ଜଳ ଓ ଅମ୍ଳଜାନ ଥିବାରୁ ଏହା ଜୀବନର ଏକମାତ୍ର ଆଶ୍ରୟସ୍ଥଳୀ ।\n୩. ଆହ୍ନିକ ଗତି: ନିଜ ଅକ୍ଷ ଚାରିପାଖରେ ୨୪ ଘଣ୍ଟାରେ ଘୂରିବା ଦ୍ୱାରା ଦିନ ଓ ରାତି ହୁଏ ।\n୪. ବାର୍ଷିକ ଗତି: ୩୬୫.୨୫ ଦିନରେ ସୂର୍ଯ୍ୟଙ୍କୁ ପରିକ୍ରମଣ କରିବା ଦ୍ୱାରା ଋତୁ ପରିବର୍ତ୍ତନ ଘଟେ ।`,
    keyTakeaways: [
      'Earth is called the Blue Planet because 71% of its surface is water',
      'Jupiter is the largest planet; Mercury is closest to the Sun'
    ],
    keyTakeawaysOdia: [
      '୭୧% ଜଳ ଥିବାରୁ ପୃଥିବୀକୁ ନୀଳଗ୍ରହ କୁହାଯାଏ',
      'ବୃହସ୍ପତି ସବୁଠାରୁ ବଡ଼ ଗ୍ରହ ଏବଂ ବୁଧ ସୂର୍ଯ୍ୟଙ୍କ ନିକଟତମ ଗ୍ରହ'
    ],
    realWorldExample: 'A spinning top rotating while circling around a table represents both Earth’s daily rotation and annual revolution.',
    realWorldExampleOdia: 'ଭଅଁର ନିଜେ ଘୂରିବା ସହିତ ଚଟାଣରେ ଗୋଲ ହୋଇ ଘୂରିବା ପରି ପୃଥିବୀ ଆହ୍ନିକ ଓ ବାର୍ଷିକ ଗତି କରେ ।',
    isOfflineAvailable: true,
  }
];

export const BILINGUAL_OFFLINE_STARTER_QUIZZES = [
  {
    _id: 'offline-quiz-photo',
    lessonId: 'offline-sci-photo',
    subject: { _id: 'sub-sci', name: 'Science', nameOdia: 'ବିଜ୍ଞାନ' },
    title: 'Photosynthesis & Plant Energy Quiz',
    titleOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ ଓ ଉଦ୍ଭିଦ ଶକ୍ତି କୁଇଜ୍',
    classLevel: 'Class 8',
    questions: [
      {
        question: 'Which gas is released into the atmosphere as a byproduct during photosynthesis?',
        questionOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ ପ୍ରକ୍ରିୟାରେ କେଉଁ ଗ୍ୟାସ୍ ଉପଜାତ ଦ୍ରବ୍ୟ ଭାବରେ ପରିବେଶକୁ ନିର୍ଗତ ହୁଏ?',
        options: ['Carbon Dioxide (CO2)', 'Oxygen (O2)', 'Nitrogen (N2)', 'Hydrogen (H2)'],
        optionsOdia: ['ଅଙ୍ଗାରକାମ୍ଳ (CO2)', 'ଅମ୍ଳଜାନ (O2)', 'ଯବକ୍ଷାରଜାନ (N2)', 'ଉଦ୍‌ଜାନ (H2)'],
        correctAnswerIndex: 1,
        explanation: 'Oxygen (O2) is produced during the photolysis of water molecules inside chloroplast thylakoids.',
        explanationOdia: 'ଜଳ ଅଣୁର ଆଲୋକ ବିଶ୍ଳେଷଣ ଘଟି ଅମ୍ଳଜାନ ଗ୍ୟାସ୍ ପରିବେଶକୁ ମୁକ୍ତ ହୋଇଥାଏ ।',
        topic: 'Plant Physiology'
      },
      {
        question: 'Which cellular organelle and green pigment is responsible for trapping sunlight?',
        questionOdia: 'ଉଦ୍ଭିଦର କେଉଁ ଅଙ୍ଗିକା ଏବଂ ସବୁଜ କଣିକା ସୂର୍ଯ୍ୟାଲୋକ ଶୋଷଣ କରିବା ପାଇଁ ଦାୟୀ?',
        options: ['Mitochondria & Hemoglobin', 'Chloroplast & Chlorophyll', 'Ribosome & Keratin', 'Vacuole & Melanin'],
        optionsOdia: ['ମାଇଟୋକଣ୍ଡ୍ରିଆ ଓ ହିମୋଗ୍ଲୋବିନ୍', 'କ୍ଲୋରୋପ୍ଲାଷ୍ଟ ଓ କ୍ଲୋରୋଫିଲ୍ (ପତ୍ରହରିତ୍)', 'ରାଇବୋଜୋମ୍ ଓ କେରାଟିନ୍', 'ରସଧାନୀ ଓ ମେଲାନିନ୍'],
        correctAnswerIndex: 1,
        explanation: 'Chlorophyll molecules inside chloroplasts absorb solar photons for chemical conversion.',
        explanationOdia: 'କ୍ଲୋରୋପ୍ଲାଷ୍ଟରେ ଥିବା ପତ୍ରହରିତ୍ ସୂର୍ଯ୍ୟାଲୋକ ଶୋଷଣ କରି ରାସାୟନିକ ଶକ୍ତିରେ ପରିଣତ କରେ ।',
        topic: 'Cell Biology'
      },
      {
        question: 'What is the primary chemical form of sugar synthesized during photosynthesis?',
        questionOdia: 'ଆଲୋକ ଶ୍ଳେଷଣ ସମୟରେ ପ୍ରସ୍ତୁତ ହେଉଥିବା ପ୍ରାଥମିକ ଶର୍କରାର ରାସାୟନିକ ରୂପ କ’ଣ?',
        options: ['Sucrose', 'Glucose (C6H12O6)', 'Lactose', 'Fructose'],
        optionsOdia: ['ସୁକ୍ରୋଜ୍', 'ଗ୍ଲୁକୋଜ୍ (C6H12O6)', 'ଲାକ୍ଟୋଜ୍', 'ଫ୍ରୁକ୍ଟୋଜ୍'],
        correctAnswerIndex: 1,
        explanation: 'Glucose (C6H12O6) is the immediate monosaccharide product synthesized from carbon fixation.',
        explanationOdia: 'ଅଙ୍ଗାରକାମ୍ଳ ବିଜାରଣ ଦ୍ୱାରା ପ୍ରଥମେ ଗ୍ଲୁକୋଜ୍ ପ୍ରସ୍ତୁତ ହୁଏ ଯାହା ପରେ ଷ୍ଟାର୍ଚ ଭାବରେ ସଞ୍ଚିତ ରହେ ।',
        topic: 'Bioenergetics'
      }
    ]
  },
  {
    _id: 'offline-quiz-pythagoras',
    lessonId: 'offline-math-pythagoras',
    subject: { _id: 'sub-math', name: 'Mathematics', nameOdia: 'ଗଣିତ' },
    title: 'Pythagoras Theorem Mastery Quiz',
    titleOdia: 'ପିଥାଗୋରାସ ଉପପାଦ୍ୟ ଦକ୍ଷତା କୁଇଜ୍',
    classLevel: 'Class 8',
    questions: [
      {
        question: 'In a right-angled triangle, if perpendicular sides are 6 cm and 8 cm, what is the hypotenuse length?',
        questionOdia: 'ଏକ ସମକୋଣୀ ତ୍ରିଭୁଜର ଭୂମି ଓ ଲମ୍ବ ଯଥାକ୍ରମେ ୬ ସେମି ଓ ୮ ସେମି ହେଲେ କର୍ଣ୍ଣର ଦୈର୍ଘ୍ୟ କେତେ?',
        options: ['14 cm', '10 cm', '12 cm', '48 cm'],
        optionsOdia: ['୧୪ ସେମି', '୧୦ ସେମି', '୧୨ ସେମି', '୪୮ ସେମି'],
        correctAnswerIndex: 1,
        explanation: 'c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.',
        explanationOdia: 'କର୍ଣ୍ଣ = √(୬² + ୮²) = √(୩୬ + ୬୪) = √୧୦୦ = ୧୦ ସେମି ।',
        topic: 'Geometry'
      },
      {
        question: 'Which of the following integer sets forms a valid Pythagorean triplet?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁ ସଂଖ୍ୟା ଗୋଷ୍ଠୀ ଏକ ସଠିକ୍ ପିଥାଗୋରାସ ତ୍ରୟୀ ଗଠନ କରେ?',
        options: ['(5, 12, 13)', '(4, 5, 6)', '(7, 8, 9)', '(2, 3, 4)'],
        optionsOdia: ['(୫, ୧୨, ୧୩)', '(୪, ୫, ୬)', '(୭, ୮, ୯)', '(୨, ୩, ୪)'],
        correctAnswerIndex: 0,
        explanation: '5² + 12² = 25 + 144 = 169 = 13².',
        explanationOdia: '୫² + ୧୨² = ୨୫ + ୧୪୪ = ୧୬୯ = ୧୩² । ଏଣୁ ଏହା ପିଥାଗୋରାସ ତ୍ରୟୀ ।',
        topic: 'Triplets'
      },
      {
        question: 'In a right-angled triangle, the hypotenuse is always located:',
        questionOdia: 'ଏକ ସମକୋଣୀ ତ୍ରିଭୁଜରେ କର୍ଣ୍ଣ ସର୍ବଦା କେଉଁଠାରେ ଅବସ୍ଥିତ ଥାଏ?',
        options: ['Adjacent to shortest side', 'Opposite the 90° angle', 'Opposite the smallest angle', 'Along the vertical axis'],
        optionsOdia: ['କ୍ଷୁଦ୍ରତମ ବାହୁ ପାଖରେ', '୯୦ ଡିଗ୍ରୀ (ସମକୋଣ) ସମ୍ମୁଖରେ', 'କ୍ଷୁଦ୍ରତମ କୋଣ ସମ୍ମୁଖରେ', 'ଲମ୍ବ ବାହୁ ସହିତ'],
        correctAnswerIndex: 1,
        explanation: 'The hypotenuse is the longest side lying strictly opposite the 90° right angle.',
        explanationOdia: 'କର୍ଣ୍ଣ ସର୍ବଦା ୯୦ ଡିଗ୍ରୀ କୋଣର ସମ୍ମୁଖରେ ଥିବା ସବୁଠାରୁ ଲମ୍ବା ବାହୁ ।',
        topic: 'Triangles'
      }
    ]
  },
  {
    _id: 'offline-quiz-newton',
    lessonId: 'offline-sci-newton',
    subject: { _id: 'sub-sci', name: 'Science', nameOdia: 'ବିଜ୍ଞାନ' },
    title: 'Newton’s Laws of Motion Quiz',
    titleOdia: 'ନ୍ୟୁଟନଙ୍କ ଗତି ନିୟମ କୁଇଜ୍',
    classLevel: 'Class 8',
    questions: [
      {
        question: 'Newton’s First Law of Motion is popularly referred to as the Law of:',
        questionOdia: 'ନ୍ୟୁଟନଙ୍କ ପ୍ରଥମ ଗତି ନିୟମକୁ ଅନ୍ୟ କେଉଁ ନାମରେ ଜଣାଯାଏ?',
        options: ['Gravity', 'Inertia', 'Momentum', 'Acceleration'],
        optionsOdia: ['ମାଧ୍ୟାକର୍ଷଣ ନିୟମ', 'ଜଡ଼ତା ନିୟମ', 'ସଂବେଗ ନିୟମ', 'ତ୍ୱରଣ ନିୟମ'],
        correctAnswerIndex: 1,
        explanation: 'The First Law defines inertia — the resistance of a body to changes in its state of motion.',
        explanationOdia: 'ପ୍ରଥମ ନିୟମଟି ଜଡ଼ତା ନିୟମ ଅଟେ, ଯାହା ଅନୁସାରେ ବାହ୍ୟ ବଳ ବିନା ବସ୍ତୁ ଅବସ୍ଥା ବଦଳାଏ ନାହିଁ ।',
        topic: 'Laws of Motion'
      },
      {
        question: 'If a body of mass 5 kg accelerates at 3 m/s², what net force is applied?',
        questionOdia: 'ଯଦି ୫ କେଜି ବସ୍ତୁତ୍ୱ ବିଶିଷ୍ଟ ବସ୍ତୁରେ ୩ ମି/ସେ² ତ୍ୱରଣ ସୃଷ୍ଟି ହୁଏ, ତେବେ କେତେ ବଳ ପ୍ରୟୋଗ ହେବ?',
        options: ['8 N', '15 N', '2 N', '1.67 N'],
        optionsOdia: ['୮ ନିଉଟନ୍', '୧୫ ନିଉଟନ୍', '୨ ନିଉଟନ୍', '୧.୬୭ ନିଉଟନ୍'],
        correctAnswerIndex: 1,
        explanation: 'F = m × a = 5 kg × 3 m/s² = 15 Newtons.',
        explanationOdia: 'ବଳ (F) = ବସ୍ତୁତ୍ୱ × ତ୍ୱରଣ = ୫ × ୩ = ୧୫ ନିଉଟନ୍ ।',
        topic: 'Force'
      },
      {
        question: 'According to Newton’s Third Law, action and reaction forces:',
        questionOdia: 'ନ୍ୟୁଟନଙ୍କ ତୃତୀୟ ନିୟମ ଅନୁସାରେ କ୍ରିୟା ଏବଂ ପ୍ରତିକ୍ରିୟା ବଳ:',
        options: ['Cancel each other on same body', 'Act simultaneously on two different bodies', 'Act at different times', 'Always produce zero momentum'],
        optionsOdia: ['ଗୋଟିଏ ବସ୍ତୁ ଉପରେ ପରସ୍ପରକୁ ନଷ୍ଟ କରନ୍ତି', 'ଦୁଇଟି ପୃଥକ ବସ୍ତୁ ଉପରେ ଏକସଙ୍ଗେ କାର୍ଯ୍ୟ କରନ୍ତି', 'ଭିନ୍ନ ଭିନ୍ନ ସମୟରେ ଘଟନ୍ତି', 'ସର୍ବଦା ଶୂନ ସଂବେଗ ଦିଅନ୍ତି'],
        correctAnswerIndex: 1,
        explanation: 'Action-reaction pairs act on two distinct interacting bodies with equal magnitude and opposite directions.',
        explanationOdia: 'କ୍ରିୟା ଓ ପ୍ରତିକ୍ରିୟା ବଳ ଦୁଇଟି ଅଲଗା ବସ୍ତୁ ଉପରେ ସମାନ ଓ ବିପରୀତ ଭାବେ କାର୍ଯ୍ୟ କରନ୍ତି ।',
        topic: 'Mechanics'
      }
    ]
  },
  {
    _id: 'offline-quiz-cybersafety',
    lessonId: 'offline-cs-cybersafety',
    subject: { _id: 'sub-cs', name: 'Computer Science', nameOdia: 'କମ୍ପ୍ୟୁଟର ବିଜ୍ଞାନ' },
    title: 'Cyber Safety & Digital Ethics Quiz',
    titleOdia: 'ସାଇବର ସୁରକ୍ଷା ଓ ଡିଜିଟାଲ ନୀତିଶିକ୍ଷା କୁଇଜ୍',
    classLevel: 'Class 8',
    questions: [
      {
        question: 'What is the record or trail of data left behind when using online internet services called?',
        questionOdia: 'ଇଣ୍ଟରନେଟ୍ ବ୍ୟବହାର ସମୟରେ ପଛରେ ଛାଡିଯାଉଥିବା ଡାଟାର ରେକର୍ଡକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Digital Footprint', 'Browser Cache', 'RAM Memory', 'Firewall Trail'],
        optionsOdia: ['ଡିଜିଟାଲ ପଦଚିହ୍ନ (Digital Footprint)', 'ବ୍ରାଉଜର୍ କ୍ୟାଶ୍', 'ରାମ୍ ମେମୋରୀ', 'ଫାୟାରୱାଲ୍ ଟ୍ରେଲ୍'],
        correctAnswerIndex: 0,
        explanation: 'A digital footprint tracks every website, post, search, and click online.',
        explanationOdia: 'ଇଣ୍ଟରନେଟ୍‌ରେ ଆପଣ କରୁଥିବା ପ୍ରତ୍ୟେକ କାର୍ଯ୍ୟ ଡିଜିଟାଲ ପଦଚିହ୍ନ ସୃଷ୍ଟି କରେ ।',
        topic: 'Internet Safety'
      },
      {
        question: 'Which key Indian legislation addresses and penalizes cybercrimes and online fraud?',
        questionOdia: 'କେଉଁ ଭାରତୀୟ ଆଇନ ସାଇବର ଅପରାଧ ଏବଂ ଅନଲାଇନ୍ ଠକେଇକୁ ଦଣ୍ଡିତ କରେ?',
        options: ['Indian Penal Code 1860 only', 'Information Technology Act (IT Act 2000)', 'Consumer Protection Act 2019', 'Companies Act 2013'],
        optionsOdia: ['କେବଳ ଭାରତୀୟ ଦଣ୍ଡବିଧି ଆଇନ', 'ସୂଚନା ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଆଇନ (IT Act 2000)', 'ଗ୍ରାହକ ସୁରକ୍ଷା ଆଇନ', 'କମ୍ପାନୀ ଆଇନ'],
        correctAnswerIndex: 1,
        explanation: 'The IT Act 2000 governs cyber law, digital signatures, and cybercrime punishments in India.',
        explanationOdia: 'ଭାରତର IT Act 2000 ସାଇବର ସୁରକ୍ଷା ଓ ଅନଲାଇନ୍ ଅପରାଧ ନିୟନ୍ତ୍ରଣ କରେ ।',
        topic: 'Cyber Law'
      },
      {
        question: 'When criminals misuse your personal identifying data to impersonate you for financial fraud, it is:',
        questionOdia: 'ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ଚୋରି କରି ଆପଣଙ୍କ ନାମରେ ଆର୍ଥିକ ଠକେଇ କରିବାକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Identity Theft', 'Data Backup', 'Software Update', 'Digital Encapsulation'],
        optionsOdia: ['ପରିଚୟ ଚୋରି (Identity Theft)', 'ଡାଟା ବ୍ୟାକଅପ୍', 'ସଫ୍ଟୱେର୍ ଅପଡେଟ୍', 'ଡିଜିଟାଲ ଏନକାପସୁଲେସନ୍'],
        correctAnswerIndex: 0,
        explanation: 'Identity theft exploits stolen credentials to commit illegal acts under the victim’s identity.',
        explanationOdia: 'ଅନ୍ୟର ପରିଚୟ ବ୍ୟବହାର କରି ଅନଲାଇନ୍ ଠକେଇ କରିବାକୁ ପରିଚୟ ଚୋରି କୁହାଯାଏ ।',
        topic: 'Security'
      }
    ]
  },
  {
    _id: 'offline-quiz-solarsystem',
    lessonId: 'offline-sst-solarsystem',
    subject: { _id: 'sub-sst', name: 'Social Science', nameOdia: 'ସାମାଜିକ ବିଜ୍ଞାନ' },
    title: 'The Solar System & Planetary Motion Quiz',
    titleOdia: 'ସୌରମଣ୍ଡଳ ଓ ଗ୍ରହମାନଙ୍କ ଗତି କୁଇଜ୍',
    classLevel: 'Class 8',
    questions: [
      {
        question: 'The change of seasons on Earth throughout the year is primarily caused by:',
        questionOdia: 'ପୃଥିବୀରେ ଋତୁ ପରିବର୍ତ୍ତନ ହେବାର ମୁଖ୍ୟ କାରଣ କ’ଣ?',
        options: ['Earth’s daily rotation', 'Revolution around the Sun and 23.5° axial tilt', 'Distance from the Moon', 'Solar flares from the Sun'],
        optionsOdia: ['ପୃଥିବୀର ଆହ୍ନିକ ଗତି', 'ସୂର୍ଯ୍ୟ ଚାରିପାଖରେ ପରିକ୍ରମଣ ଓ ୨୩.୫° ଅକ୍ଷୀୟ ଢଳିବା', 'ଚନ୍ଦ୍ରଠାରୁ ଦୂରତା', 'ସୌର ଝଡ଼'],
        correctAnswerIndex: 1,
        explanation: 'Earth’s revolution combined with its 23.5° axial tilt causes varying solar radiation throughout the year.',
        explanationOdia: 'ପୃଥିବୀ ନିଜ ଅକ୍ଷରେ ୨୩.୫° ଢଳି ସୂର୍ଯ୍ୟଙ୍କୁ ପରିକ୍ରମଣ କରିବା ଯୋଗୁଁ ଋତୁ ପରିବର୍ତ୍ତନ ହୁଏ ।',
        topic: 'Earth & Universe'
      },
      {
        question: 'Which planet is known as the Blue Planet due to having abundant liquid water?',
        questionOdia: 'ପ୍ରଚୁର ଜଳ ଥିବା ହେତୁ କେଉଁ ଗ୍ରହକୁ ନୀଳଗ୍ରହ କୁହାଯାଏ?',
        options: ['Mars', 'Earth', 'Neptune', 'Venus'],
        optionsOdia: ['ମଙ୍ଗଳ', 'ପୃଥିବୀ', 'ନେପଚୁନ୍', 'ଶୁକ୍ର'],
        correctAnswerIndex: 1,
        explanation: 'Earth’s surface is 71% water, reflecting a blue appearance from space.',
        explanationOdia: 'ପୃଥିବୀ ପୃଷ୍ଠର ୭୧% ଜଳ ଥିବାରୁ ମହାକାଶରୁ ଏହା ନୀଳ ଦେଖାଯାଏ ।',
        topic: 'Solar System'
      },
      {
        question: 'How long does Earth take to complete one full rotation on its axis, causing day and night?',
        questionOdia: 'ନିଜ ଅକ୍ଷ ଚାରିପାଖରେ ଥରେ ଘୂରିବାକୁ ପୃଥିବୀକୁ କେତେ ସମୟ ଲାଗେ?',
        options: ['12 hours', '24 hours', '365 days', '30 days'],
        optionsOdia: ['୧୨ ଘଣ୍ଟା', '୨୪ ଘଣ୍ଟା', '୩୬୫ ଦିନ', '୩୦ ଦିନ'],
        correctAnswerIndex: 1,
        explanation: 'One axial rotation takes 24 hours, generating daylight and night.',
        explanationOdia: 'ପୃଥିବୀ ନିଜ ଅକ୍ଷ ଚାରିପାଖରେ ୨୪ ଘଣ୍ଟାରେ ଥରେ ଘୂରେ, ଯାହାଦ୍ୱାରା ଦିନ ଓ ରାତି ହୁଏ ।',
        topic: 'Planetary Motion'
      }
    ]
  }
];

// Helper to seed foundational bilingual lessons & quizzes into IndexedDB
export const seedOfflineStarterPack = async () => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      try {
        const tx = db.transaction(['lessons', 'quizzes'], 'readwrite');
        const lessonStore = tx.objectStore('lessons');
        const quizStore = tx.objectStore('quizzes');

        BILINGUAL_OFFLINE_STARTER_LESSONS.forEach((l) => {
          lessonStore.put({
            ...l,
            downloadedAt: l.downloadedAt || new Date().toISOString()
          });
        });

        BILINGUAL_OFFLINE_STARTER_QUIZZES.forEach((q) => {
          quizStore.put(q);
        });

        tx.oncomplete = () => resolve(true);
        tx.onerror = (e) => {
          console.warn('Transaction error seeding offline pack:', e);
          resolve(true);
        };
      } catch (txErr) {
        console.warn('Could not start seeding transaction:', txErr);
        resolve(true);
      }
    });
  } catch (err) {
    console.warn('Could not open DB for seeding offline pack:', err);
    return true;
  }
};

/**
 * Save complete curriculum bundle into IndexedDB
 */
export const saveCurriculumBundle = async ({ subjects = [], chapters = [], lessons = [], quizzes = [] }) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(['subjects', 'chapters', 'lessons', 'quizzes'], 'readwrite');
      const subjectStore = tx.objectStore('subjects');
      const chapterStore = tx.objectStore('chapters');
      const lessonStore = tx.objectStore('lessons');
      const quizStore = tx.objectStore('quizzes');

      const now = new Date().toISOString();

      subjects.forEach((s) => {
        if (s && s._id) subjectStore.put({ ...s, downloadedAt: now, isOfflineAvailable: true });
      });

      chapters.forEach((c) => {
        if (c && c._id) chapterStore.put({ ...c, downloadedAt: now, isOfflineAvailable: true });
      });

      lessons.forEach((l) => {
        if (l && l._id) lessonStore.put({ ...l, downloadedAt: now, isOfflineAvailable: true });
      });

      quizzes.forEach((q) => {
        if (q && q._id) quizStore.put({ ...q, downloadedAt: now, isOfflineAvailable: true });
      });

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.error('Failed to save curriculum bundle to IndexedDB:', err);
    throw err;
  }
};

/**
 * Downloads full curriculum bundle (all subjects, chapters, lessons, quizzes)
 * from MongoDB into IndexedDB on first load or on demand.
 */
export const downloadCurriculumBundleFromServer = async ({ classLevel = 'all', force = false } = {}) => {
  try {
    // Verify whether IndexedDB actually holds the full curriculum across all classes
    let currentChapterCount = 0;
    try {
      const db = await openDB();
      currentChapterCount = await new Promise((resolve) => {
        try {
          const tx = db.transaction('chapters', 'readonly');
          const store = tx.objectStore('chapters');
          const req = store.count();
          req.onsuccess = () => resolve(req.result || 0);
          req.onerror = () => resolve(0);
        } catch {
          resolve(0);
        }
      });
    } catch (dbErr) {
      console.warn('[Offline Storage] DB open check note:', dbErr);
    }

    const existing = localStorage.getItem('vidyora_offline_bundle_downloaded');
    // If full dataset (>= 100 chapters across all classes) is already in IndexedDB and not forcing, return cached status
    if (existing && currentChapterCount >= 100 && !force) {
      return { success: true, cached: true, downloadedAt: existing, count: currentChapterCount };
    }

    console.log('[Offline Storage] Downloading complete curriculum bundle across all classes from MongoDB...');
    const res = await syncAPI.getCurriculumBundle({ classLevel: 'all' });
    if (res.data?.success && res.data.bundle) {
      const { subjects, chapters, lessons, quizzes } = res.data.bundle;
      await saveCurriculumBundle({ subjects, chapters, lessons, quizzes });

      const now = new Date().toISOString();
      localStorage.setItem('vidyora_offline_bundle_downloaded', now);
      localStorage.setItem('vidyora_offline_bundle_version', res.data.version || 'v1');
      localStorage.setItem('vidyora_offline_bundle_counts', JSON.stringify(res.data.counts || {}));
      localStorage.setItem('vidyora_offline_all_classes_downloaded', 'true');

      console.log('[Offline Storage] Complete curriculum bundle (All classes 6-10) saved to IndexedDB:', res.data.counts);

      // Broadcast event so UI updates immediately
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('vidyora-offline-bundle-updated', { detail: res.data.counts }));
      }

      return { success: true, counts: res.data.counts, version: res.data.version };
    }
    return { success: false, message: 'Invalid bundle response' };
  } catch (err) {
    console.warn('[Offline Storage] Failed to download curriculum bundle, seeding offline pack:', err.message);
    await seedOfflineStarterPack();
    return { success: false, error: err.message };
  }
};


/**
 * Get all offline subjects stored in IndexedDB
 */
export const getOfflineSubjects = async () => {
  try {
    const db = await openDB();
    const subjects = await new Promise((resolve) => {
      const tx = db.transaction('subjects', 'readonly');
      const store = tx.objectStore('subjects');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });

    if (subjects.length > 0) return subjects;

    // Fallback: extract from lessons or starter pack
    const lessons = await getOfflineLessons();
    const map = {};
    lessons.forEach((l) => {
      const sub = l.subject;
      if (sub && (sub._id || sub.name)) {
        const id = sub._id || sub.name;
        if (!map[id]) {
          map[id] = {
            _id: id,
            name: sub.name,
            nameOdia: sub.nameOdia || sub.name,
            code: sub.code || (sub.name ? sub.name.substring(0, 3).toUpperCase() : 'SUB'),
            color: sub.color || '#26C4B1',
            icon: sub.icon || 'BookOpen',
            description: 'Offline curriculum module with complete Odia & English notes and quizzes.',
            descriptionOdia: 'ସମ୍ପୂର୍ଣ୍ଣ ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ପାଠ୍ୟକ୍ରମ ଏବଂ କୁଇଜ୍ ଥିବା ଅଫଲାଇନ୍ ମଡ୍ୟୁଲ୍ ।',
          };
        }
      }
    });

    return Object.values(map);
  } catch (err) {
    console.warn('getOfflineSubjects error:', err);
    return [];
  }
};

/**
 * Get offline chapters matching subject and/or class level
 */
export const getOfflineChapters = async (subjectId, classLevel) => {
  try {
    const db = await openDB();
    const allChapters = await new Promise((resolve) => {
      const tx = db.transaction('chapters', 'readonly');
      const store = tx.objectStore('chapters');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });

    if (allChapters.length > 0) {
      let filtered = allChapters;
      if (subjectId) {
        filtered = filtered.filter((c) => {
          const cSubId = c.subject?._id || c.subject;
          const cSubCode = c.subject?.code;
          const cSubName = c.subject?.name?.toLowerCase();
          const target = String(subjectId).toLowerCase();
          return (
            String(cSubId) === String(subjectId) ||
            String(cSubCode).toLowerCase() === target ||
            cSubName === target
          );
        });
      }
      if (classLevel && classLevel !== 'all') {
        filtered = filtered.filter((c) => c.classLevel === classLevel);
      }
      filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
      return filtered;
    }

    return [];
  } catch (err) {
    console.warn('getOfflineChapters error:', err);
    return [];
  }
};

export const saveLessonOffline = async (lesson) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('lessons', 'readwrite');
      const store = tx.objectStore('lessons');
      const enrichedLesson = {
        ...lesson,
        downloadedAt: new Date().toISOString(),
        isOfflineAvailable: true
      };
      const req = store.put(enrichedLesson);
      req.onsuccess = () => resolve(enrichedLesson);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to save lesson offline to IndexedDB:', err);
    return lesson;
  }
};

export const getOfflineLessons = async ({ chapterId, subjectId, classLevel } = {}) => {
  try {
    const db = await openDB();
    const lessons = await new Promise((resolve, reject) => {
      const tx = db.transaction('lessons', 'readonly');
      const store = tx.objectStore('lessons');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });

    let result = lessons;
    if (result.length === 0) {
      await seedOfflineStarterPack();
      result = BILINGUAL_OFFLINE_STARTER_LESSONS;
    }

    if (chapterId) {
      result = result.filter((l) => {
        const chapId = l.chapter?._id || l.chapter;
        return String(chapId) === String(chapterId);
      });
    }

    if (subjectId) {
      result = result.filter((l) => {
        const sId = l.subject?._id || l.subject?.code || l.subject?.name || l.subject;
        return String(sId).toLowerCase() === String(subjectId).toLowerCase();
      });
    }

    if (classLevel && classLevel !== 'all') {
      result = result.filter((l) => l.classLevel === classLevel);
    }

    result.sort((a, b) => (a.order || 0) - (b.order || 0));
    return result;
  } catch (err) {
    console.warn('IndexedDB lessons fetch error, serving foundational starter pack:', err);
    return BILINGUAL_OFFLINE_STARTER_LESSONS;
  }
};

export const getOfflineLessonById = async (id) => {
  try {
    const db = await openDB();
    const lesson = await new Promise((resolve) => {
      const tx = db.transaction('lessons', 'readonly');
      const store = tx.objectStore('lessons');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });

    if (lesson) return lesson;

    const found = BILINGUAL_OFFLINE_STARTER_LESSONS.find((l) => l._id === id);
    if (found) {
      seedOfflineStarterPack().catch(() => {});
      return found;
    }
    return null;
  } catch (err) {
    console.warn('getOfflineLessonById fallback:', err);
    return BILINGUAL_OFFLINE_STARTER_LESSONS.find((l) => l._id === id) || null;
  }
};

export const deleteOfflineLesson = async (id) => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction('lessons', 'readwrite');
      const store = tx.objectStore('lessons');
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('deleteOfflineLesson error:', err);
    return false;
  }
};

export const deleteOfflineQuiz = async (id) => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction('quizzes', 'readwrite');
      const store = tx.objectStore('quizzes');
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('deleteOfflineQuiz error:', err);
    return false;
  }
};

export const saveOfflineQuiz = async (quiz) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('quizzes', 'readwrite');
      const store = tx.objectStore('quizzes');
      const req = store.put(quiz);
      req.onsuccess = () => resolve(quiz);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('saveOfflineQuiz error:', err);
    return quiz;
  }
};

export const getOfflineQuizById = async (id) => {
  try {
    const db = await openDB();
    const quiz = await new Promise((resolve) => {
      const tx = db.transaction('quizzes', 'readonly');
      const store = tx.objectStore('quizzes');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });

    if (quiz) return quiz;

    // Search by chapter or lessonId
    const all = await getOfflineQuizzes();
    const match = all.find((q) => {
      const chapId = q.chapter?._id || q.chapter;
      return q._id === id || q.lessonId === id || String(chapId) === String(id);
    });
    if (match) return match;

    const found = BILINGUAL_OFFLINE_STARTER_QUIZZES.find(
      (q) => q._id === id || q.lessonId === id
    );
    if (found) {
      seedOfflineStarterPack().catch(() => {});
      return found;
    }
    return null;
  } catch (err) {
    console.warn('getOfflineQuizById fallback:', err);
    return (
      BILINGUAL_OFFLINE_STARTER_QUIZZES.find(
        (q) => q._id === id || q.lessonId === id
      ) || null
    );
  }
};

export const getOfflineQuizzes = async ({ chapterId, subjectId, classLevel } = {}) => {
  try {
    const db = await openDB();
    const quizzes = await new Promise((resolve, reject) => {
      const tx = db.transaction('quizzes', 'readonly');
      const store = tx.objectStore('quizzes');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });

    let result = quizzes;
    if (result.length === 0) {
      await seedOfflineStarterPack();
      result = BILINGUAL_OFFLINE_STARTER_QUIZZES;
    }

    if (chapterId) {
      result = result.filter((q) => {
        const cId = q.chapter?._id || q.chapter;
        return String(cId) === String(chapterId);
      });
    }

    if (subjectId) {
      result = result.filter((q) => {
        const sId = q.subject?._id || q.subject?.code || q.subject?.name || q.subject;
        return String(sId).toLowerCase() === String(subjectId).toLowerCase();
      });
    }

    if (classLevel && classLevel !== 'all') {
      result = result.filter((q) => q.classLevel === classLevel);
    }

    return result;
  } catch (err) {
    console.warn('IndexedDB quizzes fetch error, serving foundational starter quizzes:', err);
    return BILINGUAL_OFFLINE_STARTER_QUIZZES;
  }
};

// -------------------------------------------------------------
// Offline Progress Queueing & Sync
// -------------------------------------------------------------

/**
 * Queue an offline quiz attempt into pendingSync store
 */
export const queueOfflineQuizAttempt = async (attempt) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('pendingSync', 'readwrite');
      const store = tx.objectStore('pendingSync');
      const entry = {
        ...attempt,
        type: 'quiz_attempt',
        tempId: attempt.tempId || ('sync_quiz_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5)),
        queuedAt: new Date().toISOString()
      };
      const req = store.put(entry);
      req.onsuccess = () => resolve(entry);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('queueOfflineQuizAttempt error:', err);
    return attempt;
  }
};

/**
 * Queue an offline lesson completion into pendingSync store
 */
export const queueOfflineLessonCompleted = async ({ lessonId, subjectId, title }) => {
  try {
    const db = await openDB();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction('pendingSync', 'readwrite');
      const store = tx.objectStore('pendingSync');
      const entry = {
        type: 'lesson_completed',
        lessonId,
        subjectId,
        title,
        completedAt: new Date().toISOString(),
        tempId: 'sync_lesson_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        queuedAt: new Date().toISOString()
      };
      const req = store.put(entry);
      req.onsuccess = () => resolve(entry);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('queueOfflineLessonCompleted error:', err);
    return { lessonId };
  }
};

/**
 * Retrieve all items queued in pendingSync
 */
export const getPendingSyncItems = async () => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction('pendingSync', 'readonly');
      const store = tx.objectStore('pendingSync');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  } catch (err) {
    console.warn('getPendingSyncItems error:', err);
    return [];
  }
};

/**
 * Clear a specific item from pendingSync by tempId
 */
export const clearPendingSyncItem = async (tempId) => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction('pendingSync', 'readwrite');
      const store = tx.objectStore('pendingSync');
      const req = store.delete(tempId);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('clearPendingSyncItem error:', err);
    return false;
  }
};

/**
 * Clear multiple items from pendingSync by array of tempIds
 */
export const clearMultiplePendingSync = async (tempIds = []) => {
  try {
    const db = await openDB();
    return await new Promise((resolve) => {
      const tx = db.transaction('pendingSync', 'readwrite');
      const store = tx.objectStore('pendingSync');
      tempIds.forEach((id) => store.delete(id));
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (err) {
    console.warn('clearMultiplePendingSync error:', err);
    return false;
  }
};

// Backwards-compatible aliases
export const getPendingSyncAttempts = getPendingSyncItems;
export const clearPendingSyncAttempt = clearPendingSyncItem;

/**
 * Packages all offline curriculum content into an organized folder structure (Classes 6-10)
 * and triggers an automatic .zip download directly to the student's device.
 */
export const exportOfflineZipArchive = async ({ classLevel = 'all' } = {}) => {
  try {
    const zip = new JSZip();

    const [lessons, quizzes, subjects] = await Promise.all([
      getOfflineLessons(),
      getOfflineQuizzes(),
      getOfflineSubjects(),
    ]);

    let targetLessons = lessons;
    let targetQuizzes = quizzes;
    if (classLevel && classLevel !== 'all') {
      targetLessons = lessons.filter((l) => l.classLevel === classLevel);
      targetQuizzes = quizzes.filter((q) => q.classLevel === classLevel);
    }

    const folderName = classLevel === 'all' 
      ? 'Vidyora_Offline_Curriculum_All_Classes' 
      : `Vidyora_Offline_Curriculum_${classLevel.replace(/\s+/g, '_')}`;

    const root = zip.folder(folderName);

    // 1. Add README and Offline Study Guide
    root.file(
      'README_OFFLINE_GUIDE.txt',
      `========================================================================
VIDYORA AI — OFFLINE LEARNING ARCHIVE
(Agentic AI Personalized Learning Platform | NEXTECH 2.0)
========================================================================

Dear Student,

All your curriculum lessons, chapter reading guides, and practice tests 
have been packaged into organized folders on your device:

📁 FOLDERS INCLUDED:
- Class_6/   (Science, Mathematics, Social Studies, English, Odia)
- Class_7/   (Science, Mathematics, Social Studies, English, Odia)
- Class_8/   (Science, Mathematics, Social Studies, English, Odia)
- Class_9/   (Science, Mathematics, Social Studies, English, Odia)
- Class_10/  (Science, Mathematics, Social Studies, English, Odia)

📖 HOW TO USE OFFLINE:
1. You can open any chapter HTML file in your web browser without internet.
2. In the Vidyora AI web application (http://localhost:5173 or deployed app),
   all this content is stored in your device's IndexedDB offline vault.
3. You can read lessons, explore chapters, and take chapter quizzes offline!
4. Whenever your device reconnects to the internet, Vidyora AI automatically
   syncs all your quiz attempts, scores, and completed lessons to the cloud!

ଓଡ଼ିଆ ସୂଚନା:
ଏହି ଫୋଲ୍ଡରରେ ଷଷ୍ଠରୁ ଦଶମ ଶ୍ରେଣୀ ପର୍ଯ୍ୟନ୍ତ ସମସ୍ତ ବିଷୟର ପାଠ୍ୟକ୍ରମ ଓ କୁଇଜ୍ 
ଉଭୟ ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ଭାଷାରେ ସାଇତା ହୋଇଛି । ଇଣ୍ଟରନେଟ୍ ବିନା ଯେକୌଣସି ସମୟରେ 
ପଢ଼ିପାରିବେ ଏବଂ ଇଣ୍ଟରନେଟ୍ ଆସିବା ମାତ୍ରେ ଆପଣଙ୍କ ପ୍ରଗତି ସ୍ୱୟଂଚାଳିତ ଭାବେ ସିଙ୍କ୍ ହେବ ।

Total Lessons Packaged: ${targetLessons.length}
Total Quizzes Packaged: ${targetQuizzes.length}
Generated: ${new Date().toLocaleString()}
`
    );

    // 2. Add complete raw JSON backup for portability
    root.file(
      'offline_curriculum_database.json',
      JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          classLevel,
          counts: {
            lessons: targetLessons.length,
            quizzes: targetQuizzes.length,
            subjects: subjects.length,
          },
          lessons: targetLessons,
          quizzes: targetQuizzes,
          subjects,
        },
        null,
        2
      )
    );

    // 3. Organize into Class and Subject subfolders
    targetLessons.forEach((lesson, idx) => {
      const cls = (lesson.classLevel || 'Class_8').replace(/\s+/g, '_');
      const sub = (lesson.subject?.name || 'General').replace(/[^a-zA-Z0-9_-]/g, '_');
      const classFolder = root.folder(cls);
      const subFolder = classFolder.folder(sub);

      const safeTitle = (lesson.title || `Lesson_${idx + 1}`).replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 50);
      const filename = `${String(idx + 1).padStart(2, '0')}_${safeTitle}.html`;

      // Find matching quiz if available
      const matchQuiz = targetQuizzes.find(
        (q) => q.lessonId === lesson._id || (lesson.chapter && q.chapter === lesson.chapter)
      );

      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lesson.title}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; max-width: 820px; margin: 0 auto; padding: 20px; color: #0F172A; background: #F8FAFC; }
    .card { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0; margin-bottom: 24px; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; background: #E6FFFA; color: #0D9488; border: 1px solid #99F6E4; }
    h1 { color: #0B2545; margin-top: 14px; margin-bottom: 4px; font-size: 24px; font-weight: 900; }
    .odia-title { font-size: 18px; font-weight: 700; color: #0D9488; margin-top: 0; }
    h2 { color: #0B2545; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px; margin-top: 24px; font-size: 16px; font-weight: 800; display: flex; align-items: center; gap: 8px; }
    .odia-box { font-family: 'Noto Sans Oriya', 'Kalinga', sans-serif; color: #1E293B; background: #F0FDFA; padding: 16px; border-radius: 12px; border-left: 4px solid #0D9488; margin: 12px 0; font-size: 15px; }
    .english-box { padding: 16px; background: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; margin: 12px 0; font-size: 15px; }
    ul { padding-left: 20px; margin: 8px 0; }
    li { margin-bottom: 6px; }
    .footer { text-align: center; font-size: 12px; color: #64748B; margin-top: 30px; padding: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">${lesson.classLevel || 'Class 8'} • ${lesson.subject?.name || 'Subject'}</span>
    <h1>${lesson.title}</h1>
    <p class="odia-title">${lesson.titleOdia || ''}</p>

    <h2>📖 Odia Concept (ଓଡ଼ିଆ ପାଠ୍ୟ ବିବରଣୀ)</h2>
    <div class="odia-box">${(lesson.contentOdia || 'ବିବରଣୀ ଉପଲବ୍ଧ ନାହିଁ').replace(/\\n/g, '<br>')}</div>

    <h2>🇬🇧 English Concept & Mechanism</h2>
    <div class="english-box">${(lesson.content || '').replace(/\\n/g, '<br>')}</div>

    ${lesson.learningObjectives?.length ? `
    <h2>🎯 Learning Objectives (ଶିକ୍ଷଣ ଉଦ୍ଦେଶ୍ୟ)</h2>
    <div class="english-box">
      <ul>
        ${lesson.learningObjectives.map((o) => `<li>${o}</li>`).join('')}
      </ul>
      ${lesson.learningObjectivesOdia?.length ? `
      <ul style="border-top: 1px solid #E2E8F0; padding-top: 8px; margin-top: 8px; color: #0D9488;">
        ${lesson.learningObjectivesOdia.map((o) => `<li>${o}</li>`).join('')}
      </ul>` : ''}
    </div>
    ` : ''}

    ${lesson.realWorldExample ? `
    <h2>💡 Real-World Application (ବାସ୍ତବ ଉଦାହରଣ)</h2>
    <div class="odia-box">${lesson.realWorldExampleOdia || ''}</div>
    <div class="english-box">${lesson.realWorldExample}</div>
    ` : ''}

    ${matchQuiz ? `
    <h2>📝 Chapter Practice Quiz Questions</h2>
    <div class="english-box">
      <p><strong>${matchQuiz.title}</strong> (${matchQuiz.titleOdia || ''})</p>
      <p style="font-size: 13px; color: #64748B;">Total Questions: ${matchQuiz.questions?.length || 0} • Available in Vidyora AI</p>
    </div>
    ` : ''}
  </div>
  <div class="footer">
    Vidyora AI — Agentic AI Personalized Learning Platform • Accessible 100% Offline • Progress Auto-Syncs Online
  </div>
</body>
</html>`;

      subFolder.file(filename, htmlContent);
    });

    // 4. Generate ZIP blob and trigger browser file download to user's device
    const blob = await zip.generateAsync({ type: 'blob' });
    const downloadUrl = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = downloadUrl;
    downloadAnchor.download = `${folderName}.zip`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 10000);

    return { success: true, filename: `${folderName}.zip`, count: targetLessons.length };
  } catch (err) {
    console.error('Failed to export offline zip archive:', err);
    throw err;
  }
};
