// Curriculum Data for Class 9 across Science, Mathematics, English, Social Science, and Computer Science
const class9Data = [
  // ---------------------------------------------------------
  // SCIENCE (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'SCI',
    classLevel: 'Class 9',
    order: 1,
    title: 'Matter in Our Surroundings',
    titleOdia: 'ଆମ ଚାରିପାଖର ପଦାର୍ଥ',
    description: 'Understand particulate nature of matter, states of matter (solid, liquid, gas, plasma, BEC), diffusion, latent heat, and evaporation.',
    descriptionOdia: 'ପଦାର୍ଥର କଣିକା ପ୍ରକୃତି, କଠିନ, ତରଳ ଓ ଗ୍ୟାସୀୟ ଅବସ୍ଥା, ବ୍ୟାପନ, ଗୁପ୍ତତାପ ଏବଂ ବାଷ୍ପୀଭବନ ବିଷୟରେ ଗଭୀର ଆଲୋଚନା ।',
    lesson: {
      title: 'States of Matter & Phase Transitions',
      titleOdia: 'ପଦାର୍ଥର ଅବସ୍ଥା ଓ ଅବସ୍ଥାନ୍ତର',
      durationMinutes: 22,
      objectives: [
        'Understand kinetic molecular theory of matter',
        'Distinguish solid, liquid, and gas by particle arrangement and intermolecular forces',
        'Explain latent heat of fusion and latent heat of vaporization',
        'Analyze factors affecting rate of evaporation and its cooling effect'
      ],
      objectivesOdia: [
        'ପଦାର୍ଥର ଆଣବିକ ଗତିଶୀଳତା ସିଦ୍ଧାନ୍ତ ବୁଝିବା',
        'କଠିନ, ତରଳ ଓ ଗ୍ୟାସ ମଧ୍ୟରେ ଅନ୍ତରାଣବିକ ଆକର୍ଷଣ ବଳର ପାର୍ଥକ୍ୟ ଜାଣିବା',
        'ଗଳନର ଗୁପ୍ତତାପ ଓ ବାଷ୍ପୀଭବନର ଗୁପ୍ତତାପର ଧାରଣା ସ୍ପଷ୍ଟ କରିବା',
        'ବାଷ୍ପୀଭବନକୁ ପ୍ରଭାବିତ କରୁଥିବା କାରକ ଓ ଥଣ୍ଡା ଅନୁଭୂତିର କାରଣ ବୁଝିବା'
      ],
      content: 'Matter is anything that has mass and occupies space. According to the particulate model, matter consists of tiny particles with spaces between them that are in continuous random motion (Brownian motion). Solids have definite volume and shape with strong intermolecular attraction. Liquids have fixed volume but indefinite shape. Gases have neither fixed shape nor volume with negligible attraction and maximum kinetic energy. Temperature increases particle kinetic energy. Latent heat is the thermal energy absorbed or released during a phase change without altering temperature. Evaporation is a surface phenomenon occurring at any temperature below the boiling point, causing cooling because escaping high-energy molecules absorb heat from surroundings.',
      contentOdia: 'ଯାହାର ବସ୍ତୁତ୍ୱ ଅଛି ଏବଂ ସ୍ଥାନ ଅଧିକାର କରେ ତାହାକୁ ପଦାର୍ଥ କୁହାଯାଏ । ପଦାର୍ଥ ଅତି କ୍ଷୁଦ୍ର କଣିକାମାନଙ୍କୁ ନେଇ ଗଠିତ ଏବଂ ଏହି କଣିକାଗୁଡ଼ିକ ସର୍ବଦା ଗତିଶୀଳ । କଠିନ ପଦାର୍ଥର ନିର୍ଦ୍ଦିଷ୍ଟ ଆକାର ଓ ଆୟତନ ଥାଏ ଏବଂ ଅନ୍ତରାଣବିକ ବଳ ପ୍ରବଳ ଥାଏ । ତରଳ ପଦାର୍ଥର ନିର୍ଦ୍ଦିଷ୍ଟ ଆୟତନ ଥାଏ କିନ୍ତୁ ଆକାର ନଥାଏ । ଗ୍ୟାସୀୟ ପଦାର୍ଥର ଆକାର କିମ୍ବା ଆୟତନ କିଛି ନିର୍ଦ୍ଦିଷ୍ଟ ନଥାଏ । ତାପମାତ୍ରା ବଢ଼ିଲେ କଣିକାମାନଙ୍କର ଗତିଜ ଶକ୍ତି ବୃଦ୍ଧି ପାଏ । ଅବସ୍ଥା ପରିବର୍ତ୍ତନ ସମୟରେ ତାପମାତ୍ରା ନ ବଦଳି ଶୋଷିତ ହେଉଥିବା ତାପକୁ ଗୁପ୍ତତାପ (Latent Heat) କୁହାଯାଏ । ବାଷ୍ପୀଭବନ ଏକ ପୃଷ୍ଠୀୟ ଘଟଣା ଯାହା ସ୍ଫୁଟନାଙ୍କ ତଳେ ଘଟି ପରିବେଶକୁ ଥଣ୍ଡା କରେ ।',
      takeaways: [
        'Intermolecular attraction: Solids > Liquids > Gases',
        'SI unit of temperature is Kelvin (0 deg C = 273.15 K)',
        'Evaporation causes cooling due to latent heat absorption',
        'Sublimation is direct solid to gas transition (e.g. camphor, dry ice)'
      ],
      takeawaysOdia: [
        'ଅନ୍ତରାଣବିକ ଆକର୍ଷଣ: କଠିନ > ତରଳ > ଗ୍ୟାସ',
        'ତାପମାତ୍ରାର SI ଏକକ କେଲଭିନ୍ (Kelvin) ଅଟେ (0°C = 273.15 K)',
        'ବାଷ୍ପୀଭବନ ଶରୀର ଓ ପରିବେଶକୁ ଶୀତଳତା ପ୍ରଦାନ କରେ',
        'କଠିନରୁ ସିଧାସଳଖ ଗ୍ୟାସ ହେବା ପ୍ରକ୍ରିୟାକୁ ଉର୍ଦ୍ଧ୍ୱପାତନ (Sublimation) କୁହାଯାଏ'
      ]
    },
    quiz: [
      {
        question: 'Which temperature corresponds to absolute zero in the Kelvin scale?',
        questionOdia: 'କେଲଭିନ୍ ସ୍କେଲ୍ ରେ ପରମ ଶୂନ୍ୟ ତାପମାତ୍ରା କେତେ?',
        options: ['0 K', '273.15 K', '-273.15 K', '100 K'],
        optionsOdia: ['0 K', '273.15 K', '-273.15 K', '100 K'],
        correctAnswerIndex: 0,
        explanation: '0 Kelvin (-273.15 deg C) is the theoretical absolute zero where particle motion ceases.',
        explanationOdia: '0 K ହେଉଛି ପରମ ଶୂନ ତାପମାତ୍ରା ଯେଉଁଠାରେ ଆଣବିକ ଗତି ସମ୍ପୂର୍ଣ୍ଣ ସ୍ଥିର ହୋଇଯାଏ ।',
        topic: 'Temperature Scales'
      },
      {
        question: 'Why does ice at 273 K (0 deg C) cool water more effectively than water at the same temperature?',
        questionOdia: '0°C ରେ ଥିବା ବରଫ ସମାନ ତାପମାତ୍ରାର ପାଣି ଅପେକ୍ଷା କାହିଁକି ଅଧିକ ଥଣ୍ଡା କରେ?',
        options: [
          'Ice has lower density',
          'Ice absorbs additional latent heat of fusion during melting',
          'Ice reflects all heat radiation',
          'Ice molecules move faster'
        ],
        optionsOdia: [
          'ବରଫର ସାନ୍ଦ୍ରତା କମ୍ ଥାଏ',
          'ତରଳିବା ପାଇଁ ବରଫ ଅତିରିକ୍ତ ଗଳନ ଗୁପ୍ତତାପ ଶୋଷଣ କରେ',
          'ବରଫ ସମସ୍ତ ତାପ ବିକିରଣ ଫେରାଇଦିଏ',
          'ବରଫ କଣିକା ଅଧିକ ବେଗରେ ଚଳନ୍ତି'
        ],
        correctAnswerIndex: 1,
        explanation: 'Melting ice absorbs 3.34 x 10^5 J/kg of latent heat of fusion without temperature rise.',
        explanationOdia: 'ବରଫ ତରଳିବା ସମୟରେ ପରିବେଶରୁ ଗଳନର ଗୁପ୍ତତାପ ଶୋଷି ନିଏ, ଯାହା ଅଧିକ ଶୀତଳତା ସୃଷ୍ଟି କରେ ।',
        topic: 'Latent Heat'
      },
      {
        question: 'Which of the following undergoes sublimation directly upon heating?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଉତ୍ତପ୍ତ ହେଲେ ସିଧାସଳଖ ଉର୍ଦ୍ଧ୍ୱପାତିତ ହୁଏ?',
        options: ['Sodium chloride', 'Camphor', 'Calcium carbonate', 'Water ice'],
        optionsOdia: ['ଲୁଣ (NaCl)', 'କର୍ପୂର (Camphor)', 'କ୍ୟାଲସିୟମ କାର୍ବୋନେଟ', 'ବରଫ'],
        correctAnswerIndex: 1,
        explanation: 'Camphor, ammonium chloride, and dry ice sublimate directly from solid to gaseous state.',
        explanationOdia: 'କର୍ପୂର କଠିନ ଅବସ୍ଥାରୁ ସିଧାସଳଖ ଗ୍ୟାସରେ ପରିଣତ ହୁଏ ।',
        topic: 'Sublimation'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 9',
    order: 2,
    title: 'Is Matter Around Us Pure?',
    titleOdia: 'ଆମ ଚାରିପାଖର ପଦାର୍ଥ କ’ଣ ବିଶୁଦ୍ଧ?',
    description: 'Mixtures, true solutions, colloids, suspensions, Tyndall effect, separation techniques, and chemical vs physical changes.',
    descriptionOdia: 'ମିଶ୍ରଣ, ପ୍ରକୃତ ଦ୍ରବଣ, କଲଏଡ୍, ନିଲମ୍ବନ, ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ଏବଂ ଭୌତିକ ଓ ରାସାୟନିକ ପରିବର୍ତ୍ତନର ବିଶ୍ଳେଷଣ ।',
    lesson: {
      title: 'Solutions, Colloids, Suspensions & Separations',
      titleOdia: 'ଦ୍ରବଣ, କଲଏଡ୍, ନିଲମ୍ବନ ଓ ପୃଥକୀକରଣ',
      durationMinutes: 24,
      objectives: [
        'Differentiate pure substances from mixtures (homogeneous and heterogeneous)',
        'Compare particle sizes in solutions (<1 nm), colloids (1-1000 nm), and suspensions (>1000 nm)',
        'Demonstrate the Tyndall effect and Brownian motion in colloidal systems',
        'Identify separation methods: fractional distillation, centrifugation, chromatography'
      ],
      objectivesOdia: [
        'ବିଶୁଦ୍ଧ ପଦାର୍ଥ ଓ ମିଶ୍ରଣ (ସମଜାତୀୟ ଓ ଅସମଜାତୀୟ) ର ପାର୍ଥକ୍ୟ ବୁଝିବା',
        'ପ୍ରକୃତ ଦ୍ରବଣ, କଲଏଡ୍ ଓ ନିଲମ୍ବନରେ କଣିକାର ଆକାର ତୁଳନା କରିବା',
        'କଲଏଡ୍ରେ ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ (Tyndall Effect) ର ବୈଜ୍ଞାନିକ କାରଣ ବୁଝିବା',
        'ଆଂଶିକ ପାତନ, କେନ୍ଦ୍ରାପସାରଣ (Centrifugation) ଓ କ୍ରୋମାଟୋଗ୍ରାଫି ପଦ୍ଧତି ଶିଖିବା'
      ],
      content: 'In science, a pure substance consists of a single type of particle (elements and compounds). Mixtures contain two or more pure substances in variable proportions. Homogeneous mixtures (solutions) have uniform composition throughout (e.g. sugar in water, air, alloys like brass). Heterogeneous mixtures have distinct phases. In colloids, dispersed phase particles (size 1 to 1000 nanometers) remain evenly suspended in the dispersion medium, scattering a beam of light—this scattering is known as the Tyndall effect. Suspensions have larger particles that settle under gravity over time. Chromatography separates solute dyes based on differential solubility and capillary mobility.',
      contentOdia: 'ବୈଜ୍ଞାନିକ ଦୃଷ୍ଟିରୁ ବିଶୁଦ୍ଧ ପଦାର୍ଥ କେବଳ ଗୋଟିଏ ପ୍ରକାରର କଣିକା (ମୌଳିକ ବା ଯୌଗିକ) ଦ୍ୱାରା ଗଠିତ । ମିଶ୍ରଣରେ ଏକାଧିକ ପଦାର୍ଥ ଅନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ଥାଆନ୍ତି । ସମଜାତୀୟ ମିଶ୍ରଣରେ ସବୁ ଅଂଶରେ ସମାନ ଗଠନ ଥାଏ (ଯଥା: ପାଣିରେ ଚିନି, ପିତ୍ତଳ) । କଲଏଡ୍ରେ କଣିକାର ଆକାର 1 ରୁ 1000 ନାନୋମିଟର ମଧ୍ୟରେ ଥାଏ, ଯାହା ଆଲୋକ ରଶ୍ମିକୁ ବିଚ୍ଛୁରିତ କରେ; ଏହାକୁ ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ (Tyndall Effect) କୁହାଯାଏ । ନିଲମ୍ବନରେ କଣିକା ବଡ଼ ଥାଏ ଓ ସମୟକ୍ରମେ ତଳେ ବସିଯାଏ ।',
      takeaways: [
        'Alloys are homogeneous solid mixtures (Brass = 70% Cu + 30% Zn)',
        'Tyndall effect is exhibited by colloids (milk, fog, smoke) and fine suspensions',
        'Fractional distillation separates liquids with boiling points differing by <25 K',
        'Chemical change forms new bonds and products; physical change is reversible'
      ],
      takeawaysOdia: [
        'ମିଶ୍ରଧାତୁ ଏକ ସମଜାତୀୟ କଠିନ ମିଶ୍ରଣ (ପିତ୍ତଳ = ତମ୍ବା + ଦସ୍ତା)',
        'କ୍ଷୀର, କୁହୁଡ଼ି ଓ ଧୂଆଁ ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ପ୍ରଦର୍ଶନ କରନ୍ତି',
        'ସ୍ଫୁଟନାଙ୍କ ପାର୍ଥକ୍ୟ 25 K ରୁ କମ୍ ଥିବା ତରଳକୁ ଆଂଶିକ ପାତନ ଦ୍ୱାରା ପୃଥକ କରାଯାଏ',
        'ଭୌତିକ ପରିବର୍ତ୍ତନ ପ୍ରତ୍ୟାବର୍ତ୍ତୀ କିନ୍ତୁ ରାସାୟନିକ ପରିବର୍ତ୍ତନରେ ନୂତନ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ'
      ]
    },
    quiz: [
      {
        question: 'Which of the following will show the Tyndall effect when a light beam passes through it?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କାହା ମଧ୍ୟଦେଇ ଆଲୋକ ଗଲେ ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ଦେଖାଯିବ?',
        options: ['Common salt solution', 'Milk', 'Copper sulfate solution', 'Alcohol in water'],
        optionsOdia: ['ଲୁଣ ପାଣି', 'କ୍ଷୀର (Milk)', 'ତୁତିଆ ଦ୍ରବଣ', 'ମଦ୍ୟସାର ଓ ଜଳ ମିଶ୍ରଣ'],
        correctAnswerIndex: 1,
        explanation: 'Milk is an emulsion (colloid) with fat and protein globules large enough to scatter light.',
        explanationOdia: 'କ୍ଷୀର ଏକ କଲଏଡ୍, ଯାହାର କଣିକାଗୁଡ଼ିକ ଆଲୋକକୁ ବିଚ୍ଛୁରିତ କରିବାକୁ ସକ୍ଷମ ।',
        topic: 'Tyndall Effect'
      },
      {
        question: 'The technique used to separate butter from curd or cream in dairies is:',
        questionOdia: 'ଦହି ବା କ୍ରିମ୍ ରୁ ଲହୁଣୀ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପଦ୍ଧତି ବ୍ୟବହୃତ ହୁଏ?',
        options: ['Chromatography', 'Sublimation', 'Centrifugation', 'Sedimentation'],
        optionsOdia: ['କ୍ରୋମାଟୋଗ୍ରାଫି', 'ଉର୍ଦ୍ଧ୍ୱପାତନ', 'କେନ୍ଦ୍ରାପସାରଣ (Centrifugation)', 'ସ୍ଥିରୀକରଣ'],
        correctAnswerIndex: 2,
        explanation: 'Centrifugation spins mixtures rapidly, pushing denser particles to the bottom and lighter cream to the top.',
        explanationOdia: 'କେନ୍ଦ୍ରାପସାରଣ (Centrifugation) ଘୂର୍ଣ୍ଣନ ଦ୍ୱାରା ସାନ୍ଦ୍ରତା ଭେଦରେ ଲହୁଣୀ ଅଲଗା କରେ ।',
        topic: 'Separation Techniques'
      },
      {
        question: 'Which of the following represents a chemical change?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ରାସାୟନିକ ପରିବର୍ତ୍ତନ?',
        options: ['Melting of wax', 'Rusting of iron', 'Dissolving sugar in water', 'Boiling water into steam'],
        optionsOdia: ['ମହମ ତରଳିବା', 'ଲୁହାରେ କଳଙ୍କି ଲାଗିବା', 'ପାଣିରେ ଚିନି ମିଳାଇବା', 'ଜଳ ବାଷ୍ପୀଭୂତ ହେବା'],
        correctAnswerIndex: 1,
        explanation: 'Rusting involves oxidation of iron into iron(III) oxide with irreversible chemical transformation.',
        explanationOdia: 'ଲୁହାରେ କଳଙ୍କି ଲାଗିବା ଏକ ରାସାୟନିକ ପରିବର୍ତ୍ତନ ଯେଉଁଥିରେ ଆଇରନ୍ ଅକ୍ସାଇଡ୍ ତିଆରି ହୁଏ ।',
        topic: 'Chemical vs Physical Changes'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 9',
    order: 3,
    title: 'Atoms and Molecules',
    titleOdia: 'ପରମାଣୁ ଓ ଅଣୁ',
    description: 'Laws of chemical combination, Dalton atomic theory, atomic mass unit, molecular formula writing, valency, and mole concept.',
    descriptionOdia: 'ରାସାୟନିକ ସଂଯୋଗ ନିୟମ, ଡାଲଟନଙ୍କ ପରମାଣୁ ତତ୍ତ୍ୱ, ପାରମାଣବିକ ବସ୍ତୁତ୍ୱ, ଆଣବିକ ସଙ୍କେତ ଓ ମୋଲ୍ (Mole) ଧାରଣା ।',
    lesson: {
      title: 'Chemical Laws, Chemical Formulae & The Mole',
      titleOdia: 'ରାସାୟନିକ ନିୟମ, ସଙ୍କେତ ଓ ମୋଲ୍ ସଂକଳ୍ପ',
      durationMinutes: 26,
      objectives: [
        'Apply the Law of Conservation of Mass and Law of Constant Proportions',
        'Understand atomic mass units relative to Carbon-12 isotope',
        'Formulate chemical formulas using criss-cross valency method',
        'Compute molar mass and apply Avogadro number (6.022 x 10^23)'
      ],
      objectivesOdia: [
        'ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ଓ ସ୍ଥିର ଅନୁପାତ ନିୟମ ବୁଝିବା',
        'କାର୍ବନ-୧୨ ଆଇସୋଟୋପ୍ ଆଧାରରେ ପାରମାଣବିକ ବସ୍ତୁତ୍ୱ ଏକକ (amu) ବୁଝିବା',
        'ଯୋଜ୍ୟତା ବ୍ୟବହାର କରି ରାସାୟନିକ ସଙ୍କେତ ଲେଖିବା',
        'ମୋଲାର ବସ୍ତୁତ୍ୱ ଓ ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା (6.022 × 10²³) ର ଗାଣିତିକ ପ୍ରୟୋଗ'
      ],
      content: 'Antoine Lavoisier laid foundation of modern chemistry with the Law of Conservation of Mass: mass can neither be created nor destroyed in a chemical reaction. Joseph Proust established the Law of Definite Proportions: in a chemical substance, elements are always present in definite proportions by mass (e.g. H2O always has H:O mass ratio 1:8). John Dalton postulated that all matter consists of indivisible atoms that combine in simple whole-number ratios. Modern atomic mass is measured relative to 1/12th the mass of one Carbon-12 atom. One mole represents 6.022 x 10^23 particles (atoms, molecules, ions), and its mass in grams equals the substance numerical atomic or molecular mass.',
      contentOdia: 'ଲାଭୋସିଏ ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ଦେଇଥିଲେ: ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ବସ୍ତୁତ୍ୱ ସୃଷ୍ଟି ବା ବିନାଶ ହୁଏ ନାହିଁ । ପ୍ରାଉଷ୍ଟ ସ୍ଥିର ଅନୁପାତ ନିୟମ ଦେଇଥିଲେ: ଯୌଗିକରେ ଉପାଦାନଗୁଡ଼ିକ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ବସ୍ତୁତ୍ୱ ଅନୁପାତରେ ଥାଆନ୍ତି (ଜଳରେ H:O ଅନୁପାତ ସର୍ବଦା ୧:୮) । ଡାଲଟନ୍ ପ୍ରସ୍ତାବ ଦେଇଥିଲେ ଯେ ପଦାର୍ଥ ଅବିଭାଜ୍ୟ ପରମାଣୁରେ ଗଠିତ । କାର୍ବନ୍-୧୨ ପରମାଣୁ ବସ୍ତୁତ୍ୱର ୧/୧୨ ଅଂଶକୁ ଏକ ପାରମାଣବିକ ବସ୍ତୁତ୍ୱ ଏକକ (u) କୁହାଯାଏ । ୧ ମୋଲ୍ (Mole) ରେ ୬.୦୨୨ × ୧୦²³ ଗୋଟି କଣିକା ଥାଏ ।',
      takeaways: [
        'Law of Conservation of Mass: Total mass of reactants = Total mass of products',
        'Avogadro constant: N_A = 6.022 x 10^23 entities per mole',
        'Valency of Al is +3 and SO4 is -2, yielding aluminium sulphate Al2(SO4)3',
        '1 mole of any gas at STP occupies 22.4 litres'
      ],
      takeawaysOdia: [
        'ପ୍ରତିକାରକର ମୋଟ ବସ୍ତୁତ୍ୱ = ଉତ୍ପାଦର ମୋଟ ବସ୍ତୁତ୍ୱ',
        'ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା: ୬.୦୨୨ × ୧୦²³ କଣିକା/ମୋଲ୍',
        'Al (+3) ଓ SO4 (-2) ର ସଂଯୋଗରେ Al₂(SO₄)₃ ଗଠିତ ହୁଏ',
        'STP ରେ ୧ ମୋଲ୍ ଗ୍ୟାସର ଆୟତନ ୨୨.୪ ଲିଟର'
      ]
    },
    quiz: [
      {
        question: 'What is the ratio by mass of Hydrogen to Oxygen in pure water (H2O)?',
        questionOdia: 'ବିଶୁଦ୍ଧ ଜଳ (H₂O) ରେ ଉଦ୍ଜାନ ଓ ଅମ୍ଳଜାନର ବସ୍ତୁତ୍ୱ ଅନୁପାତ କେତେ?',
        options: ['1 : 8', '1 : 2', '2 : 1', '1 : 16'],
        optionsOdia: ['୧ : ୮', '୧ : ୨', '୨ : ୧', '୧ : ୧୬'],
        correctAnswerIndex: 0,
        explanation: 'Mass of 2 H = 2 u, mass of 1 O = 16 u; ratio = 2:16 = 1:8.',
        explanationOdia: 'H ର ବସ୍ତୁତ୍ୱ ୨ ଏବଂ O ର ବସ୍ତୁତ୍ୱ ୧୬; ଅନୁପାତ = ୨:୧୬ = ୧:୮ ।',
        topic: 'Chemical Proportions'
      },
      {
        question: 'How many atoms are present in exactly 1 mole of carbon atoms?',
        questionOdia: '୧ ମୋଲ୍ କାର୍ବନ୍ ପରମାଣୁରେ କେତେଟି ପରମାଣୁ ଥାଏ?',
        options: ['6.022 x 10^22', '6.022 x 10^23', '3.011 x 10^23', '1.204 x 10^24'],
        optionsOdia: ['୬.୦୨୨ × ୧୦²²', '୬.୦୨୨ × ୧୦²³', '୩.୦୧୧ × ୧୦²³', '୧.୨୦୪ × ୧୦²⁴'],
        correctAnswerIndex: 1,
        explanation: 'One mole of any elemental substance contains Avogadro number of particles: 6.022 x 10^23.',
        explanationOdia: '୧ ମୋଲ୍ ରେ ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା ୬.୦୨୨ × ୧୦²³ କଣିକା ଥାଏ ।',
        topic: 'Avogadro Number'
      },
      {
        question: 'What is the correct chemical formula for Calcium Hydroxide?',
        questionOdia: 'କ୍ୟାଲସିୟମ୍ ହାଇଡ୍ରୋକ୍ସାଇଡ୍ ର ସଠିକ୍ ରାସାୟନିକ ସଙ୍କେତ କ’ଣ?',
        options: ['CaOH', 'Ca(OH)2', 'Ca2OH', 'Ca(OH)3'],
        optionsOdia: ['CaOH', 'Ca(OH)₂', 'Ca₂OH', 'Ca(OH)₃'],
        correctAnswerIndex: 1,
        explanation: 'Calcium ion is Ca(2+) and Hydroxide ion is OH(1-); criss-crossing gives Ca(OH)2.',
        explanationOdia: 'କ୍ୟାଲସିୟମର ଯୋଜ୍ୟତା ୨ ଓ ହାଇଡ୍ରୋକ୍ସାଇଡର ୧ ହୋଇଥିବାରୁ ଏହା Ca(OH)₂ ହୁଏ ।',
        topic: 'Chemical Formulae'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 9',
    order: 4,
    title: 'Structure of the Atom',
    titleOdia: 'ପରମାଣୁର ଗଠନ',
    description: 'Discovery of subatomic particles (electron, proton, neutron), Thomson and Rutherford models, Bohr model, electronic configuration, and isotopes.',
    descriptionOdia: 'ଇଲେକ୍ଟ୍ରନ୍, ପ୍ରୋଟୋନ୍ ଓ ନ୍ୟୁଟ୍ରନ୍ ଆବିଷ୍କାର, ରଦରଫୋର୍ଡ ଓ ବୋର୍ ପରମାଣୁ ମଡେଲ୍, ଇଲେକ୍ଟ୍ରୋନୀୟ ସଜ୍ଜା ଏବଂ ଆଇସୋଟୋପ୍ ।',
    lesson: {
      title: 'Subatomic Particles, Bohr Atomic Model & Valency',
      titleOdia: 'ପରମାଣୁର ଅବ-କଣିକା, ବୋର୍ ମଡେଲ୍ ଓ ଯୋଜ୍ୟତା',
      durationMinutes: 24,
      objectives: [
        'Trace discovery of electron (J.J. Thomson), proton (Goldstein), and neutron (Chadwick)',
        'Explain Rutherford gold foil alpha-particle scattering experiment and nuclear hypothesis',
        'Describe Bohr postulates of discrete circular orbits (K, L, M, N shells)',
        'Write electronic configurations using 2n^2 rule and identify isotopes and isobars'
      ],
      objectivesOdia: [
        'ଇଲେକ୍ଟ୍ରନ୍ (ଥମସନ୍), ପ୍ରୋଟୋନ୍ (ଗୋଲ୍ଡଷ୍ଟାଇନ୍) ଓ ନ୍ୟୁଟ୍ରନ୍ (ଚାଡୱିକ୍) ର ଆବିଷ୍କାର ଜାଣିବା',
        'ରଦରଫୋର୍ଡଙ୍କ ସ୍ୱର୍ଣ୍ଣପତ୍ର ଆଲଫା କଣିକା ବିଚ୍ଛୁରଣ ପରୀକ୍ଷା ଓ ନ୍ୟୁକ୍ଲିୟସ ସିଦ୍ଧାନ୍ତ ବୁଝିବା',
        'ନିଲସ୍ ବୋର୍‌ଙ୍କ ସ୍ଥିର କକ୍ଷପଥ (K, L, M, N) ତତ୍ତ୍ୱ ବୁଝିବା',
        '୨n² ନିୟମ ଅନୁସାରେ ଇଲେକ୍ଟ୍ରୋନ୍ ସଜ୍ଜା ଏବଂ ଆଇସୋଟୋପ୍-ଆଇସୋବାର୍ ପାର୍ଥକ୍ୟ ଜାଣିବା'
      ],
      content: 'Atoms are not indivisible. J.J. Thomson discovered negative electrons via cathode ray experiments. Goldstein found canal rays (protons), and James Chadwick discovered neutral neutrons in 1932. Rutherford fired alpha particles at thin gold foil; most passed straight through, proving most atom space is empty, but a few deflected at large angles, demonstrating a concentrated positive nucleus. Neils Bohr refined this by postulating that electrons orbit in discrete energy levels without radiating energy. Maximum electrons in orbit n is 2n^2. Valency is determined by outermost electrons. Isotopes are atoms of same element with same atomic number (protons) but different mass numbers (neutrons).',
      contentOdia: 'ପରମାଣୁ ଅବିଭାଜ୍ୟ ନୁହେଁ । ଜେ.ଜେ. ଥମସନ୍ ଇଲେକ୍ଟ୍ରନ୍, ଗୋଲ୍ଡଷ୍ଟାଇନ୍ ପ୍ରୋଟୋନ୍ ଏବଂ ଜେମ୍ସ ଚାଡୱିକ୍ ନ୍ୟୁଟ୍ରନ୍ ଆବିଷ୍କାର କରିଥିଲେ । ରଦରଫୋର୍ଡ ସୁନାପାତ ଉପରେ ଆଲଫା କଣିକା ପକାଇ ପ୍ରମାଣ କଲେ ଯେ ପରମାଣୁର ଅଧିକାଂଶ ସ୍ଥାନ ଫାଙ୍କା ଏବଂ କେନ୍ଦ୍ରରେ ଧନାତ୍ମକ ନ୍ୟୁକ୍ଲିୟସ୍ ଥାଏ । ନିଲସ୍ ବୋର୍ ଦର୍ଶାଇଲେ ଯେ ଇଲେକ୍ଟ୍ରନ୍‌ଗୁଡ଼ିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଶକ୍ତି ସ୍ତର (K, L, M, N କକ୍ଷ) ରେ ଘୂରନ୍ତି । କୌଣସି କକ୍ଷରେ ସର୍ବାଧିକ ଇଲେକ୍ଟ୍ରନ୍ ସଂଖ୍ୟା ୨n² ସୂତ୍ର ଦ୍ୱାରା ନିର୍ଣ୍ଣୟ ହୁଏ । ଗୋଟିଏ ମୌଳିକର ସମାନ ପାରମାଣବିକ ସଂଖ୍ୟା କିନ୍ତୁ ଭିନ୍ନ ବସ୍ତୁତ୍ୱ ସଂଖ୍ୟା ଥିବା ପରମାଣୁଙ୍କୁ ଆଇସୋଟୋପ୍ କୁହାଯାଏ ।',
      takeaways: [
        'Atomic number (Z) = number of protons; Mass number (A) = protons + neutrons',
        'Bohr-Bury max electron capacity: K=2, L=8, M=18, N=32',
        'Octet rule: Atoms react to achieve stable 8 electrons in outermost shell',
        'Cobalt-60 isotope is used in cancer radiotherapy; Carbon-14 in radiocarbon dating'
      ],
      takeawaysOdia: [
        'ପାରମାଣବିକ ସଂଖ୍ୟା (Z) = ପ୍ରୋଟୋନ୍ ସଂଖ୍ୟା; ବସ୍ତୁତ୍ୱ ସଂଖ୍ୟା (A) = ପ୍ରୋଟୋନ୍ + ନ୍ୟୁଟ୍ରନ୍',
        'ବୋର୍-ବରୀ ନିୟମ: K=୨, L=୮, M=୧୮, N=୩୨',
        'ବାହ୍ୟତମ କକ୍ଷରେ ୮ ଟି ଇଲେକ୍ଟ୍ରନ୍ ରହିଲେ ପରମାଣୁ ସ୍ଥିରତା ଲାଭ କରେ (ଅଷ୍ଟକ ନିୟମ)',
        'କୋବାଲ୍ଟ-୬୦ ଆଇସୋଟୋପ୍ କର୍କଟ ରୋଗ ଚିକିତ୍ସାରେ ବ୍ୟବହୃତ ହୁଏ'
      ]
    },
    quiz: [
      {
        question: 'Which subatomic particle has no electric charge?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁ କଣିକାଟି ଚାର୍ଜ୍-ବିହୀନ (ନିରପେକ୍ଷ)?',
        options: ['Proton', 'Electron', 'Neutron', 'Alpha particle'],
        optionsOdia: ['ପ୍ରୋଟୋନ୍', 'ଇଲେକ୍ଟ୍ରନ୍', 'ନ୍ୟୁଟ୍ରନ୍', 'ଆଲଫା କଣିକା'],
        correctAnswerIndex: 2,
        explanation: 'Neutrons discovered by Chadwick have mass approximately equal to proton but zero charge.',
        explanationOdia: 'ନ୍ୟୁଟ୍ରନ୍ ର କୌଣସି ବୈଦ୍ୟୁତିକ ଚାର୍ଜ୍ ନଥାଏ ।',
        topic: 'Subatomic Particles'
      },
      {
        question: 'What is the maximum number of electrons that can be accommodated in the M-shell (n = 3)?',
        questionOdia: 'M-କକ୍ଷ (n = ୩) ରେ ସର୍ବାଧିକ କେତୋଟି ଇଲେକ୍ଟ୍ରନ୍ ରହିପାରିବେ?',
        options: ['8', '18', '32', '2'],
        optionsOdia: ['୮', '୧୮', '୩୨', '୨'],
        correctAnswerIndex: 1,
        explanation: 'According to 2n^2 rule, for n=3: 2*(3)^2 = 2*9 = 18 electrons.',
        explanationOdia: '୨n² ନିୟମ ଅନୁସାରେ, n=୩ ପାଇଁ: ୨ × (୩)² = ୧୮ ଇଲେକ୍ଟ୍ରନ୍ ।',
        topic: 'Electronic Configuration'
      },
      {
        question: 'Atoms of different elements having different atomic numbers but identical mass numbers are called:',
        questionOdia: 'ଭିନ୍ନ ପାରମାଣବିକ ସଂଖ୍ୟା କିନ୍ତୁ ସମାନ ବସ୍ତୁତ୍ୱ ସଂଖ୍ୟା ଥିବା ପରମାଣୁମାନଙ୍କୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Isotopes', 'Isobars', 'Isomers', 'Allotropes'],
        optionsOdia: ['ଆଇସୋଟୋପ୍', 'ଆଇସୋବାର୍ (Isobars)', 'ଆଇସୋମର୍', 'ଅପରୂପ'],
        correctAnswerIndex: 1,
        explanation: 'Isobars (e.g. 40_Ar and 40_Ca) share the same mass number but have different atomic numbers.',
        explanationOdia: 'ସମାନ ବସ୍ତୁତ୍ୱ ସଂଖ୍ୟା କିନ୍ତୁ ଭିନ୍ନ ପାରମାଣବିକ ସଂଖ୍ୟା ବିଶିଷ୍ଟ ପରମାଣୁଙ୍କୁ ଆଇସୋବାର୍ କୁହାଯାଏ ।',
        topic: 'Isobars'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 9',
    order: 5,
    title: 'The Fundamental Unit of Life: Cell',
    titleOdia: 'ଜୀବନର ମୌଳିକ ଏକକ: କୋଷ',
    description: 'Cell theory, prokaryotic vs eukaryotic cells, plasma membrane, cell wall, nucleus, mitochondria, plastids, ER, Golgi apparatus, and lysosomes.',
    descriptionOdia: 'କୋଷ ତତ୍ତ୍ୱ, ପ୍ରାକ୍-ନ୍ୟଷ୍ଟୀୟ ଓ ସୁନ୍ୟଷ୍ଟୀୟ କୋଷ, କୋଷଝିଲ୍ଲୀ, ନ୍ୟଷ୍ଟି, ମାଇଟୋକଣ୍ଡ୍ରିଆ, ପ୍ଲାଷ୍ଟିଡ୍ ଓ ଲାଇସୋଜୋମ୍ ।',
    lesson: {
      title: 'Cell Organelles & Cellular Architecture',
      titleOdia: 'କୋଷ ଅଙ୍ଗିକା ଓ କୋଷୀୟ ସଂରଚନା',
      durationMinutes: 25,
      objectives: [
        'Formulate Cell Theory of Schleiden, Schwann, and Virchow (omnis cellula e cellula)',
        'Distinguish prokaryotic and eukaryotic cells based on nuclear organization and organelle compartmentalization',
        'Explain selective permeability, osmosis, and diffusion across plasma membrane',
        'Identify functions of mitochondria (ATP power house), ribosomes, Golgi apparatus, lysosomes (suicide bags), and plastids'
      ],
      objectivesOdia: [
        'ଶ୍ଲାଇଡେନ୍, ଶ୍ୱାନ୍ ଓ ଭିରଚୋଙ୍କ କୋଷ ତତ୍ତ୍ୱ ବୁଝିବା',
        'ପ୍ରାକ୍-ନ୍ୟଷ୍ଟୀୟ ଓ ସୁନ୍ୟଷ୍ଟୀୟ କୋଷ ମଧ୍ୟରେ ନ୍ୟଷ୍ଟି ଓ ଅଙ୍ଗିକାର ପାର୍ଥକ୍ୟ ଜାଣିବା',
        'କୋଷଝିଲ୍ଲୀ ଦେଇ ପରାସରଣ (Osmosis) ଓ ବ୍ୟାପନ ପ୍ରକ୍ରିୟା ବୁଝିବା',
        'ମାଇଟୋକଣ୍ଡ୍ରିଆ (ଶକ୍ତିକେନ୍ଦ୍ର), ରାଇବୋଜୋମ୍, ଗଲ୍ଗିପିଣ୍ଡ, ଲାଇସୋଜୋମ୍ (ଆତ୍ମଘାତୀ ଥଳୀ) ର କାର୍ଯ୍ୟ ବୁଝିବା'
      ],
      content: 'Robert Hooke observed cork cells in 1665. The cell is the structural and functional unit of all living organisms. Cell theory states that all living things are composed of cells and new cells arise from pre-existing cells. The plasma membrane is a flexible bilayer of lipids and proteins that controls entry and exit through selective permeability via diffusion and osmosis (hypotonic, isotonic, hypertonic solutions). Plant cells possess a rigid cellulose cell wall outside the plasma membrane. Nucleus contains chromosomes composed of DNA and histones that store genetic information. Mitochondria generate adenosine triphosphate (ATP) through cellular respiration and possess their own DNA and ribosomes. Lysosomes contain hydrolytic enzymes capable of digesting worn-out organelles.',
      contentOdia: '୧୬୬୫ ଖ୍ରୀଷ୍ଟାବ୍ଦରେ ରବର୍ଟ ହୁକ୍ କର୍କ କୋଷ ପ୍ରଥମେ ଦେଖିଥିଲେ । କୋଷ ହେଉଛି ସମସ୍ତ ଜୀବର ଗଠନମୂଳକ ଓ କାର୍ଯ୍ୟକାରୀ ଏକକ । ଶ୍ଲାଇଡେନ୍, ଶ୍ୱାନ୍ ଓ ଭିରଚୋ କୋଷ ତତ୍ତ୍ୱ ପ୍ରତିପାଦନ କରିଥିଲେ । କୋଷଝିଲ୍ଲୀ ଲିପିଡ୍ ଓ ପ୍ରୋଟିନ୍ ଦ୍ୱାରା ନିର୍ମିତ ଏବଂ ଏହା ଏକ ପାରଗମ୍ୟ ଝିଲ୍ଲୀ । ଉଦ୍ଭିଦ କୋଷରେ ସେଲ୍ୟୁଲୋଜ୍ ନିର୍ମିତ କୋଷଭିତ୍ତି ଥାଏ । ନ୍ୟଷ୍ଟିରେ ଡିଏନ୍ଏ (DNA) ଥାଏ ଯାହା ବଂଶାନୁକ୍ରମିକ ଗୁଣ ବହନ କରେ । ମାଇଟୋକଣ୍ଡ୍ରିଆକୁ କୋଷର ଶକ୍ତିକେନ୍ଦ୍ର କୁହାଯାଏ କାରଣ ଏହା ଏଟିପି (ATP) ଉତ୍ପାଦନ କରେ । ଲାଇସୋଜୋମ୍‌ରେ ଶକ୍ତିଶାଳୀ ପାଚକ ଏଞ୍ଜାଇମ୍ ଥିବାରୁ ଏହାକୁ ଆତ୍ମଘାତୀ ଥଳୀ କୁହାଯାଏ ।',
      takeaways: [
        'Mitochondria and Plastids are semi-autonomous with their own circular DNA and 70S ribosomes',
        'ATP (Adenosine Triphosphate) is the cellular energy currency',
        'Lysosomes are suicide bags; Ribosomes are protein factories',
        'Osmosis: Movement of water from higher water potential to lower water potential through semipermeable membrane'
      ],
      takeawaysOdia: [
        'ମାଇଟୋକଣ୍ଡ୍ରିଆ ଓ ପ୍ଲାଷ୍ଟିଡ୍‌ର ନିଜସ୍ୱ DNA ଓ ରାଇବୋଜୋମ୍ ଥାଏ',
        'ATP ହେଉଛି କୋଷର ଜୈବିକ ଶକ୍ତି ମୁଦ୍ରା',
        'ଲାଇସୋଜୋମକୁ ଆତ୍ମଘାତୀ ଥଳୀ ଓ ରାଇବୋଜୋମକୁ ପ୍ରୋଟିନ୍ କାରଖାନା କୁହାଯାଏ',
        'ଅର୍ଦ୍ଧପାରଗମ୍ୟ ଝିଲ୍ଲୀ ଦେଇ ଜଳର ଗତିକୁ ପରାସରଣ କୁହାଯାଏ'
      ]
    },
    quiz: [
      {
        question: 'Which cellular organelle is popularly known as the powerhouse of the cell?',
        questionOdia: 'କେଉଁ କୋଷ ଅଙ୍ଗିକାକୁ କୋଷର ଶକ୍ତିକେନ୍ଦ୍ର (Powerhouse) କୁହାଯାଏ?',
        options: ['Golgi apparatus', 'Mitochondria', 'Endoplasmic reticulum', 'Lysosome'],
        optionsOdia: ['ଗଲ୍ଗି ପିଣ୍ଡ', 'ମାଇଟୋକଣ୍ଡ୍ରିଆ', 'ଅନ୍ତଃପ୍ରରସ ଜାଳିକା', 'ଲାଇସୋଜୋମ୍'],
        correctAnswerIndex: 1,
        explanation: 'Mitochondria synthesize ATP molecules through cellular respiration to supply chemical energy.',
        explanationOdia: 'ମାଇଟୋକଣ୍ଡ୍ରିଆ ଶ୍ୱସନ ପ୍ରକ୍ରିୟା ଦ୍ୱାରା ATP ଶକ୍ତି ତିଆରି କରୁଥିବାରୁ ଏହାକୁ ଶକ୍ତିକେନ୍ଦ୍ର କୁହାଯାଏ ।',
        topic: 'Cell Organelles'
      },
      {
        question: 'Lysosomes are commonly referred to as "suicide bags" because they contain:',
        questionOdia: 'ଲାଇସୋଜୋମକୁ "ଆତ୍ମଘାତୀ ଥଳୀ" କୁହାଯାଏ କାରଣ ଏଥିରେ କ’ଣ ଥାଏ?',
        options: ['Photosynthetic pigments', 'Powerful digestive hydrolytic enzymes', 'Starch granules', 'Lipid reserves'],
        optionsOdia: ['ଆଲୋକ ଶ୍ଳେଷଣ ରଞ୍ଜକ', 'ଶକ୍ତିଶାଳୀ ପାଚକ ଏଞ୍ଜାଇମ୍ (Hydrolytic Enzymes)', 'ଶ୍ୱେତସାର କଣିକା', 'ସ୍ନେହସାର ଭଣ୍ଡାର'],
        correctAnswerIndex: 1,
        explanation: 'When cell metabolism is damaged, lysosomes rupture and their digestive enzymes digest the cell itself.',
        explanationOdia: 'କୋଷ ନଷ୍ଟ ହେଲେ ଲାଇସୋଜୋମ ଫାଟି ନିଜର ଶକ୍ତିଶାଳୀ ପାଚକ ଏଞ୍ଜାଇମ୍ ଦ୍ୱାରା କୋଷକୁ ନଷ୍ଟ କରିଦିଏ ।',
        topic: 'Lysosomes'
      },
      {
        question: 'What happens to a plant cell placed in a strongly hypertonic solution?',
        questionOdia: 'ଏକ ଉଦ୍ଭିଦ କୋଷକୁ ଅତି ସାନ୍ଦ୍ର (Hypertonic) ଦ୍ରବଣରେ ରଖିଲେ କ’ଣ ହୁଏ?',
        options: ['It bursts immediately', 'It swells up', 'Plasmolysis occurs as water leaves the vacuole', 'No change occurs'],
        optionsOdia: ['ଏହା ତୁରନ୍ତ ଫାଟିଯାଏ', 'ଏହା ଫୁଲିଯାଏ', 'ଜଳ ବାହାରିଯିବା ଦ୍ୱାରା ପ୍ଲାଜମୋଲାଇସିସ୍ (Plasmolysis) ଘଟେ', 'କୌଣସି ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ'],
        correctAnswerIndex: 2,
        explanation: 'Hypertonic solutions draw water out by exosmosis, causing protoplasm to shrink away from the rigid cell wall (plasmolysis).',
        explanationOdia: 'ଅତି ସାନ୍ଦ୍ର ଦ୍ରବଣରେ ଜଳ ବହିଃପରାସରଣ ଦ୍ୱାରା ବାହାରି କୋଷ ସଂକୁଚିତ ହୁଏ (ପ୍ଲାଜମୋଲାଇସିସ୍) ।',
        topic: 'Osmosis & Plasmolysis'
      }
    ]
  },

  // ---------------------------------------------------------
  // MATHEMATICS (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'MATH',
    classLevel: 'Class 9',
    order: 1,
    title: 'Number Systems',
    titleOdia: 'ସଂଖ୍ୟା ପ୍ରଣାଳୀ',
    description: 'Irrational numbers, representation on number line, real numbers and decimal expansions, rationalisation of denominators, laws of exponents.',
    descriptionOdia: 'ଅପରିମେୟ ସଂଖ୍ୟା, ସଂଖ୍ୟାରେଖାରେ ସ୍ଥାପନ, ଦଶମିକ ପ୍ରସାରଣ, ହରର ପରିମେୟକରଣ ଏବଂ ଘାତାଙ୍କ ନିୟମ ।',
    lesson: {
      title: 'Real Numbers, Rationalisation & Exponents',
      titleOdia: 'ବାସ୍ତବ ସଂଖ୍ୟା, ପରିମେୟକରଣ ଓ ଘାତାଙ୍କ',
      durationMinutes: 25,
      objectives: [
        'Distinguish rational numbers (terminating or repeating decimals) from irrational numbers (non-terminating non-repeating)',
        'Represent roots like sqrt(2), sqrt(3), sqrt(5) geometrically on number line using Pythagorean spiral',
        'Rationalise denominators involving surds such as 1 / (sqrt(a) + sqrt(b))',
        'Apply exponential laws for real base and rational powers: a^p * a^q = a^(p+q), (a^p)^q = a^(pq)'
      ],
      objectivesOdia: [
        'ପରିମେୟ (ସସୀମ ବା ପୌନଃପୁନିକ) ଓ ଅପରିମେୟ (ଅସସୀମ ଅଣ-ପୌନଃପୁନିକ) ସଂଖ୍ୟା ଚିହ୍ନିବା',
        'ପାଇଥାଗୋରାସ ସୂତ୍ର ସାହାଯ୍ୟରେ √୨, √୩, √୫ କୁ ସଂଖ୍ୟାରେଖାରେ ସ୍ଥାପନ କରିବା',
        'ହରରେ ଥିବା କରଣୀ (Surd) ର ପରିମେୟକରଣ ପ୍ରକ୍ରିୟା ଶିଖିବା',
        'ବାସ୍ତବ ସଂଖ୍ୟା ପାଇଁ ଘାତାଙ୍କ ନିୟମ ପ୍ରୟୋଗ କରି ସମସ୍ୟା ସମାଧାନ କରିବା'
      ],
      content: 'Real numbers comprise rational and irrational numbers. A rational number p/q has either terminating decimal expansion or non-terminating repeating expansion (e.g. 1/3 = 0.333...). An irrational number cannot be written as p/q; its decimal expansion is non-terminating and non-repeating (e.g. sqrt(2) = 1.414213..., pi = 3.14159...). Every real number corresponds to a unique point on the real number line. To simplify fractions with irrational denominators, multiply numerator and denominator by the conjugate surd (a - sqrt(b)). Laws of exponents for real base a > 0 state: a^m * a^n = a^(m+n); a^m / a^n = a^(m-n); (a^m)^n = a^(mn); a^0 = 1; a^(-n) = 1/a^n.',
      contentOdia: 'ବାସ୍ତବ ସଂଖ୍ୟା ସମସ୍ତ ପରିମେୟ ଓ ଅପରିମେୟ ସଂଖ୍ୟାର ସମାହାର । ପରିମେୟ ସଂଖ୍ୟାର ଦଶମିକ ରୂପ ସସୀମ କିମ୍ବା ଆବୃତ୍ତ (ପୌନଃପୁନିକ) ହୁଏ । ଅପରିମେୟ ସଂଖ୍ୟାର ଦଶମିକ ରୂପ ଅସସୀମ ଓ ଅଣ-ଆବୃତ୍ତ ହୋଇଥାଏ (ଯଥା: √୨, π) । ପ୍ରତ୍ୟେକ ବାସ୍ତବ ସଂଖ୍ୟାକୁ ସଂଖ୍ୟାରେଖାରେ ଏକ ଅନନ୍ୟ ବିନ୍ଦୁ ଦ୍ୱାରା ଦର୍ଶାଯାଇପାରେ । ହରରେ ଥିବା ଅପରିମେୟ ସଂଖ୍ୟାକୁ ପରିମେୟ କରିବା ପାଇଁ ଅନୁବନ୍ଧୀ କରଣୀ (Conjugate) ଦ୍ୱାରା ଲବ ଓ ହରକୁ ଗୁଣନ କରାଯାଏ । ଘାତାଙ୍କ ନିୟମ: aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = ୧ ।',
      takeaways: [
        'Sum or product of rational and irrational number is always irrational',
        'Conjugate of (a + sqrt(b)) is (a - sqrt(b))',
        'Pi (3.14159...) is irrational; 22/7 is a rational approximation',
        'For real positive base a: a^(1/n) = nth root of a'
      ],
      takeawaysOdia: [
        'ପରିମେୟ ଓ ଅପରିମେୟ ସଂଖ୍ୟାର ଯୋଗଫଳ ବା ଗୁଣଫଳ ସର୍ବଦା ଅପରିମେୟ',
        '(a + √b) ର ଅନୁବନ୍ଧୀ ହେଉଛି (a - √b)',
        'π ଏକ ଅପରିମେୟ ସଂଖ୍ୟା; ୨୨/୭ କେବଳ ଏକ ପରିମେୟ ନିକଟତର ମୂଲ୍ୟ',
        'a^(1/n) = a ର n-ତମ ମୂଳ'
      ]
    },
    quiz: [
      {
        question: 'Which of the following is an irrational number?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଅପରିମେୟ ସଂଖ୍ୟା?',
        options: ['sqrt(4)', '0.375', 'sqrt(7)', '3.141414...'],
        optionsOdia: ['√୪', '୦.୩୭୫', '√୭', '୩.୧୪୧୪୧୪...'],
        correctAnswerIndex: 2,
        explanation: 'sqrt(7) cannot be expressed as fraction of two integers because 7 is not a perfect square.',
        explanationOdia: '√୭ ଏକ ଅପରିମେୟ ସଂଖ୍ୟା କାରଣ ୭ ଏକ ପୂର୍ଣ୍ଣବର୍ଗ ସଂଖ୍ୟା ନୁହେଁ ।',
        topic: 'Irrational Numbers'
      },
      {
        question: 'What is the rationalised form of 1 / (sqrt(5) - 2)?',
        questionOdia: '୧ / (√୫ - ୨) ର ପରିମେୟକୃତ ମୂଲ୍ୟ କେତେ?',
        options: ['sqrt(5) - 2', 'sqrt(5) + 2', '2 - sqrt(5)', '(sqrt(5) + 2) / 3'],
        optionsOdia: ['√୫ - ୨', '√୫ + ୨', '୨ - √୫', '(√୫ + ୨) / ୩'],
        correctAnswerIndex: 1,
        explanation: 'Multiply top and bottom by (sqrt(5) + 2): (sqrt(5)+2) / ((sqrt(5))^2 - 2^2) = (sqrt(5)+2)/(5-4) = sqrt(5) + 2.',
        explanationOdia: '(√୫ + ୨) ଦ୍ୱାରା ଲବ ଓ ହରକୁ ଗୁଣିଲେ: (√୫ + ୨) / (୫ - ୪) = √୫ + ୨ ।',
        topic: 'Rationalisation'
      },
      {
        question: 'Evaluate the value of (64)^(1/3):',
        questionOdia: '(୬୪)^(୧/୩) ର ମୂଲ୍ୟ କେତେ?',
        options: ['8', '4', '16', '2'],
        optionsOdia: ['୮', '୪', '୧୬', '୨'],
        correctAnswerIndex: 1,
        explanation: '64 = 4^3, so (4^3)^(1/3) = 4^(3 * 1/3) = 4.',
        explanationOdia: '୬୪ = ୪³, ତେଣୁ (୪³)^(୧/୩) = ୪ ।',
        topic: 'Laws of Exponents'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 9',
    order: 2,
    title: 'Polynomials',
    titleOdia: 'ବହୁପଦୀ ରାଶି',
    description: 'Degree of polynomial, zeros of polynomials, Remainder Theorem, Factor Theorem, factorisation by splitting middle term, and algebraic identities.',
    descriptionOdia: 'ବହୁପଦୀ ରାଶିର ଘାତ, ଶୂନକ, ଭାଗଶେଷ ଉପପାଦ୍ୟ, ଗୁଣନୀୟକ ଉପପାଦ୍ୟ, ମଧ୍ୟପଦ ବିଭାଜନ ଓ ବୀଜଗାଣିତିକ ଅଭେଦ ।',
    lesson: {
      title: 'Zeros, Factor Theorem & Algebraic Identities',
      titleOdia: 'ଶୂନକ, ଗୁଣନୀୟକ ଉପପାଦ୍ୟ ଓ ସୂତ୍ରାବଳୀ',
      durationMinutes: 26,
      objectives: [
        'Determine degree of polynomials and classify linear, quadratic, and cubic forms',
        'Find zeros of polynomials p(x) where p(c) = 0',
        'State and apply Remainder Theorem: if p(x) is divided by (x - a), remainder is p(a)',
        'Factorise quadratic polynomials by splitting middle term and expand using identities: (a+b+c)^2, (x+y)^3, x^3+y^3+z^3 - 3xyz'
      ],
      objectivesOdia: [
        'ବହୁପଦୀ ରାଶିର ଘାତ (Degree) ନିର୍ଣ୍ଣୟ କରି ରୈଖିକ, ଦ୍ୱିଘାତ ଓ ତ୍ରିଘାତ ବର୍ଗୀକରଣ କରିବା',
        'ବହୁପଦୀ ରାଶି p(x) ର ଶୂନକ (Zeros) ନିରୂପଣ କରିବା',
        'ଭାଗଶେଷ ଉପପାଦ୍ୟ ଓ ଗୁଣନୀୟକ ଉପପାଦ୍ୟ ବୁଝିବା',
        'ମଧ୍ୟପଦ ବିଭାଜନ ଏବଂ ପ୍ରମୁଖ ବୀଜଗାଣିତିକ ଅଭେଦ ପ୍ରୟୋଗ କରି ଉତ୍ପାଦକୀକରଣ କରିବା'
      ],
      content: 'A polynomial is an algebraic expression involving variables with non-negative integral exponents: p(x) = an*x^n + ... + a1*x + a0. The highest exponent of x is the degree. A zero of p(x) is a real number c such that p(c) = 0. The Remainder Theorem guarantees that dividing p(x) by linear divisor (x - a) yields remainder r = p(a). The Factor Theorem states that (x - a) is a factor of p(x) if and only if p(a) = 0. Factorisation of ax^2 + bx + c requires finding two numbers whose sum is b and product is ac. Key algebraic identities include: (x+y+z)^2 = x^2+y^2+z^2 + 2xy+2yz+2zx; (x+y)^3 = x^3+y^3 + 3xy(x+y); if x+y+z = 0, then x^3+y^3+z^3 = 3xyz.',
      contentOdia: 'ଏକ ବହୁପଦୀ ରାଶିରେ ଚଳରାଶିର ଘାତ ଅଣ-ଋଣାତ୍ମକ ପୂର୍ଣ୍ଣସଂଖ୍ୟା ହୋଇଥାଏ । ଚଳରାଶିର ସର୍ବୋଚ୍ଚ ଘାତକୁ ବହୁପଦୀ ରାଶିର ଘାତ (Degree) କୁହାଯାଏ । ଯଦି p(c) = 0 ହୁଏ, ତେବେ c କୁ p(x) ର ଶୂନକ କୁହାଯାଏ । ଭାଗଶେଷ ଉପପାଦ୍ୟ ଅନୁସାରେ p(x) କୁ (x - a) ଦ୍ୱାରା ଭାଗ କଲେ ଭାଗଶେଷ p(a) ହୁଏ । ଯଦି p(a) = 0 ହୁଏ, ତେବେ (x - a) ହେଉଛି p(x) ର ଏକ ଗୁଣନୀୟକ (Factor) । ପ୍ରମୁଖ ଅଭେଦ: (x+y+z)² = x²+y²+z² + ୨xy+୨yz+୨zx; ଯଦି x+y+z = 0, ତେବେ x³+y³+z³ = ୩xyz ।',
      takeaways: [
        'A non-zero constant polynomial has degree 0; zero polynomial has undefined degree',
        'A polynomial of degree n has at most n real zeros',
        'Factor theorem: (x - a) divides p(x) with remainder 0 <=> p(a) = 0',
        'Conditional identity: If x+y+z = 0, then x^3+y^3+z^3 = 3xyz'
      ],
      takeawaysOdia: [
        'ଧ୍ରୁବକ ବହୁପଦୀ ରାଶିର ଘାତ ୦; ଶୂନ ବହୁପଦୀର ଘାତ ଅସଂଜ୍ଞାୟିତ',
        'n ଘାତ ବିଶିଷ୍ଟ ବହୁପଦୀ ରାଶିର ସର୍ବାଧିକ n ଟି ବାସ୍ତବ ଶୂନକ ଥାଏ',
        '(x - a) ଗୁଣନୀୟକ ହେବ ଯଦି ଓ କେବଳ ଯଦି p(a) = 0',
        'ଯଦି x+y+z = 0 ହୁଏ, ତେବେ x³+y³+z³ = ୩xyz'
      ]
    },
    quiz: [
      {
        question: 'What is the remainder when p(x) = x^3 - 3x^2 + 4x - 5 is divided by (x - 2)?',
        questionOdia: 'p(x) = x³ - ୩x² + ୪x - ୫ କୁ (x - ୨) ଦ୍ୱାରା ଭାଗ କଲେ ଭାଗଶେଷ କେତେ ହେବ?',
        options: ['-1', '1', '3', '-5'],
        optionsOdia: ['-୧', '୧', '୩', '-୫'],
        correctAnswerIndex: 0,
        explanation: 'By Remainder theorem, remainder = p(2) = 2^3 - 3(2)^2 + 4(2) - 5 = 8 - 12 + 8 - 5 = -1.',
        explanationOdia: 'ଭାଗଶେଷ = p(୨) = ୨³ - ୩(୨)² + ୪(୨) - ୫ = ୮ - ୧୨ + ୮ - ୫ = -୧ ।',
        topic: 'Remainder Theorem'
      },
      {
        question: 'What is the degree of the zero polynomial?',
        questionOdia: 'ଶୂନ ବହୁପଦୀ ରାଶି (Zero Polynomial) ର ଘାତ କେତେ?',
        options: ['0', '1', 'Not defined', 'Infinity'],
        optionsOdia: ['୦', '୧', 'ଅସଂଜ୍ଞାୟିତ (Not defined)', 'ଅସୀମ'],
        correctAnswerIndex: 2,
        explanation: 'The degree of the zero polynomial is mathematically not defined because 0*x^n has no uniquely defined power.',
        explanationOdia: 'ଶୂନ ବହୁପଦୀ ରାଶିର ଘାତ ସଂଜ୍ଞାୟିତ ନୁହେଁ ।',
        topic: 'Degree of Polynomial'
      },
      {
        question: 'If x + y + z = 0, then what is the value of x^3 + y^3 + z^3?',
        questionOdia: 'ଯଦି x + y + z = 0 ହୁଏ, ତେବେ x³ + y³ + z³ ର ମୂଲ୍ୟ କେତେ?',
        options: ['0', '3xyz', 'xyz', 'x+y+z'],
        optionsOdia: ['0', '୩xyz', 'xyz', 'x+y+z'],
        correctAnswerIndex: 1,
        explanation: 'Using identity x^3+y^3+z^3 - 3xyz = (x+y+z)(x^2+y^2+z^2-xy-yz-zx), when (x+y+z)=0, x^3+y^3+z^3 = 3xyz.',
        explanationOdia: 'ସୂତ୍ରାନୁସାରେ x+y+z = 0 ହେଲେ x³ + y³ + z³ = ୩xyz ହୁଏ ।',
        topic: 'Algebraic Identities'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 9',
    order: 3,
    title: 'Coordinate Geometry',
    titleOdia: 'ସ୍ଥାନାଙ୍କ ଜ୍ୟାମିତି',
    description: 'Cartesian plane, coordinate axes (x-axis, y-axis), origin, four quadrants, abscissa, ordinate, and plotting points.',
    descriptionOdia: 'କାର୍ତ୍ତେସୀୟ ସମତଳ, ନିର୍ଦ୍ଦେଶାଙ୍କ ଅକ୍ଷ (x-ଅକ୍ଷ, y-ଅକ୍ଷ), ମୂଳବିନ୍ଦୁ, ଚାରୋଟି ପାଦ, ଭୁଜ, କୋଟି ଓ ବିନ୍ଦୁ ସ୍ଥାପନ ।',
    lesson: {
      title: 'Cartesian Coordinate System & Point Plotting',
      titleOdia: 'କାର୍ତ୍ତେସୀୟ ସ୍ଥାନାଙ୍କ ପ୍ରଣାଳୀ ଓ ବିନ୍ଦୁ ନିରୂପଣ',
      durationMinutes: 20,
      objectives: [
        'Understand origin (0, 0) and perpendicular axes: horizontal x-axis and vertical y-axis',
        'Identify coordinates (x, y) where x is abscissa and y is ordinate',
        'Classify points across Quadrants I (+,+), II (-,+), III (-,-), and IV (+,-)',
        'Plot ordered pairs accurately on graph grid and analyze points on axes (x, 0) and (0, y)'
      ],
      objectivesOdia: [
        'ମୂଳବିନ୍ଦୁ (୦, ୦) ଏବଂ ପରସ୍ପର ଲମ୍ବ ଅକ୍ଷ x-ଅକ୍ଷ ଓ y-ଅକ୍ଷ ବୁଝିବା',
        'ସ୍ଥାନାଙ୍କ (x, y) ରେ ଭୁଜ (Abscissa) ଓ କୋଟି (Ordinate) ଚିହ୍ନିବା',
        'ଚାରିପାଦର ଚିହ୍ନ: ପ୍ରଥମ (+,+), ଦ୍ୱିତୀୟ (-,+), ତୃତୀୟ (-,-), ଚତୁର୍ଥ (+,-) ବୁଝିବା',
        'ଗ୍ରାଫ୍ ପେପରରେ ବିନ୍ଦୁ ସ୍ଥାପନ କରିବା ଓ ଅକ୍ଷ ଉପରିସ୍ଥ ବିନ୍ଦୁ (x, ୦) ଏବଂ (୦, y) ଜାଣିବା'
      ],
      content: 'French mathematician Rene Descartes developed coordinate geometry to unify algebra and geometry. The Cartesian plane consists of two mutually perpendicular number lines intersecting at the origin O(0, 0). The horizontal line is the x-axis, and the vertical line is the y-axis. Together they divide the plane into four quadrants numbered anticlockwise: Quadrant I (x > 0, y > 0), Quadrant II (x < 0, y > 0), Quadrant III (x < 0, y < 0), Quadrant IV (x > 0, y < 0). Any point P is written as ordered pair (x, y). The distance from y-axis is the x-coordinate (abscissa), and distance from x-axis is the y-coordinate (ordinate). Points on x-axis have y = 0; points on y-axis have x = 0.',
      contentOdia: 'ଫରାସୀ ଗଣିତଜ୍ଞ ରେନେ ଡେକାର୍ଟେ ସ୍ଥାନାଙ୍କ ଜ୍ୟାମିତିର ଧାରଣା ଦେଇଥିଲେ । କାର୍ତ୍ତେସୀୟ ସମତଳରେ ଦୁଇଟି ପରସ୍ପର ଲମ୍ବ ରେଖା ମୂଳବିନ୍ଦୁ O(୦, ୦) ରେ ଛେଦ କରନ୍ତି । ଭୂସମାନ୍ତର ରେଖାଟି x-ଅକ୍ଷ ଏବଂ ଭୂଲମ୍ବ ରେଖାଟି y-ଅକ୍ଷ ଅଟେ । ଏହା ସମତଳକୁ ଚାରୋଟି ପାଦରେ ବିଭକ୍ତ କରେ: ପ୍ରଥମ ପାଦ (+,+), ଦ୍ୱିତୀୟ ପାଦ (-,+), ତୃତୀୟ ପାଦ (-,-), ଏବଂ ଚତୁର୍ଥ ପାଦ (+,-) । ଏକ ବିନ୍ଦୁର ନିର୍ଦ୍ଦେଶାଙ୍କ (x, y) ରେ x କୁ ଭୁଜ (Abscissa) ଏବଂ y କୁ କୋଟି (Ordinate) କୁହାଯାଏ । x-ଅକ୍ଷ ଉପରେ ଥିବା ବିନ୍ଦୁର ସ୍ଥାନାଙ୍କ (x, ୦) ଏବଂ y-ଅକ୍ଷ ଉପରେ (୦, y) ହୁଏ ।',
      takeaways: [
        'Origin O has coordinates (0, 0)',
        'Abscissa is x-coordinate; Ordinate is y-coordinate',
        'Points with identical abscissa and ordinate lying in Quad I and III satisfy y = x',
        'Point (-4, 5) lies in Quadrant II; (3, -6) lies in Quadrant IV'
      ],
      takeawaysOdia: [
        'ମୂଳବିନ୍ଦୁର ସ୍ଥାନାଙ୍କ (୦, ୦)',
        'x-ସ୍ଥାନାଙ୍କକୁ ଭୁଜ ଓ y-ସ୍ଥାନାଙ୍କକୁ କୋଟି କୁହାଯାଏ',
        '(-୪, ୫) ଦ୍ୱିତୀୟ ପାଦରେ ଏବଂ (୩, -୬) ଚତୁର୍ଥ ପାଦରେ ଅବସ୍ଥିତ',
        'x-ଅକ୍ଷର ସମୀକରଣ y = 0 ଏବଂ y-ଅକ୍ଷର ସମୀକରଣ x = 0'
      ]
    },
    quiz: [
      {
        question: 'In which quadrant does the point (-3, -7) lie?',
        questionOdia: '(-୩, -୭) ବିନ୍ଦୁଟି କେଉଁ ପାଦରେ ଅବସ୍ଥିତ?',
        options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
        optionsOdia: ['ପ୍ରଥମ ପାଦ', 'ଦ୍ୱିତୀୟ ପାଦ', 'ତୃତୀୟ ପାଦ', 'ଚତୁର୍ଥ ପାଦ'],
        correctAnswerIndex: 2,
        explanation: 'Both x < 0 and y < 0, which corresponds precisely to Quadrant III.',
        explanationOdia: 'ଉଭୟ x ଓ y ଋଣାତ୍ମକ ହୋଇଥିବାରୁ ଏହା ତୃତୀୟ ପାଦରେ ଅବସ୍ଥିତ ।',
        topic: 'Quadrants'
      },
      {
        question: 'The point (0, -5) lies on which of the following?',
        questionOdia: '(୦, -୫) ବିନ୍ଦୁଟି କେଉଁଠାରେ ଅବସ୍ଥିତ?',
        options: ['Positive x-axis', 'Negative y-axis', 'Quadrant IV', 'Origin'],
        optionsOdia: ['ଧନାତ୍ମକ x-ଅକ୍ଷ', 'ଋଣାତ୍ମକ y-ଅକ୍ଷ', 'ଚତୁର୍ଥ ପାଦ', 'ମୂଳବିନ୍ଦୁ'],
        correctAnswerIndex: 1,
        explanation: 'Since x = 0 and y = -5 is negative, the point lies on the negative y-axis.',
        explanationOdia: 'x = ୦ ହୋଇଥିବାରୁ ଏବଂ y ଋଣାତ୍ମକ ଥିବାରୁ ଏହା ଋଣାତ୍ମକ y-ଅକ୍ଷ ଉପରେ ରହିବ ।',
        topic: 'Points on Axes'
      },
      {
        question: 'What is the ordinate of the point (9, -4)?',
        questionOdia: '(୯, -୪) ବିନ୍ଦୁର କୋଟି (Ordinate) କେତେ?',
        options: ['9', '-4', '5', '13'],
        optionsOdia: ['୯', '-୪', '୫', '୧୩'],
        correctAnswerIndex: 1,
        explanation: 'The ordinate is the y-coordinate of a point, which is -4.',
        explanationOdia: 'ବିନ୍ଦୁର y-ସ୍ଥାନାଙ୍କକୁ କୋଟି କୁହାଯାଏ, ଯାହା -୪ ଅଟେ ।',
        topic: 'Abscissa and Ordinate'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 9',
    order: 4,
    title: 'Linear Equations in Two Variables',
    titleOdia: 'ଦୁଇ ଅଜ୍ଞାତ ରାଶି ବିଶିଷ୍ଟ ରୈଖିକ ସମୀକରଣ',
    description: 'General form ax + by + c = 0, solutions of linear equations, graphical representation as straight lines, and lines parallel to coordinate axes.',
    descriptionOdia: 'ସାଧାରଣ ରୂପ ax + by + c = 0, ସମୀକରଣର ଅନନ୍ତ ସମାଧାନ, ସରଳରେଖା ରୂପେ ଗ୍ରାଫ୍ ସ୍ଥାପନ ଏବଂ ଅକ୍ଷ ସହିତ ସମାନ୍ତର ରେଖା ।',
    lesson: {
      title: 'Solutions & Graphs of Linear Equations',
      titleOdia: 'ରୈଖିକ ସମୀକରଣର ସମାଧାନ ଓ ଲେଖଚିତ୍ର',
      durationMinutes: 22,
      objectives: [
        'Express relationships in standard form ax + by + c = 0 where a, b are not both zero',
        'Understand that every linear equation in two variables has infinitely many solutions',
        'Plot straight-line graphs of linear equations by finding pairs of (x, y) coordinates',
        'Interpret horizontal lines y = k and vertical lines x = c'
      ],
      objectivesOdia: [
        'ax + by + c = 0 ପ୍ରମାଣିକ ରୂପରେ ସମୀକରଣ ପ୍ରକାଶ କରିବା',
        'ଦୁଇ ଅଜ୍ଞାତ ରାଶି ବିଶିଷ୍ଟ ରୈଖିକ ସମୀକରଣର ଅନନ୍ତ ସମାଧାନ ଥାଏ ବୋଲି ବୁଝିବା',
        'କ୍ରମିତ ଯୋଡ଼ି (x, y) ନିର୍ଣ୍ଣୟ କରି ସରଳରେଖା ଗ୍ରାଫ୍ ଅଙ୍କନ କରିବା',
        'x-ଅକ୍ଷ ସମାନ୍ତର (y = k) ଓ y-ଅକ୍ଷ ସମାନ୍ତର (x = c) ରେଖାର ସମୀକରଣ ବୁଝିବା'
      ],
      content: 'An equation of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not both zero, is called a linear equation in two variables x and y. A solution is an ordered pair (x, y) that satisfies the equation. Unlike a single-variable linear equation with a unique solution, a two-variable linear equation possesses infinitely many solutions. Geometrically, every solution corresponds to a point on the line representing the equation, and every point on that line is a solution. The graph of x = 0 is the y-axis, and the graph of y = 0 is the x-axis. The line x = a is parallel to y-axis at distance a, and y = b is parallel to x-axis at distance b.',
      contentOdia: 'ax + by + c = 0 ରୂପରେ ଥିବା ସମୀକରଣକୁ ଦୁଇ ଅଜ୍ଞାତ ରାଶି ବିଶିଷ୍ଟ ରୈଖିକ ସମୀକରଣ କୁହାଯାଏ (ଯେଉଁଠାରେ a ଓ b ଉଭୟ ଏକାସାଙ୍ଗେ ଶୂନ ନୁହଁନ୍ତି) । ଏହିପରି ପ୍ରତ୍ୟେକ ସମୀକରଣର ଅସଂଖ୍ୟ ବା ଅନନ୍ତ ସମାଧାନ ଥାଏ । ଜ୍ୟାମିତିକ ଦୃଷ୍ଟିକୋଣରୁ ଏହାର ଲେଖଚିତ୍ର ଏକ ସରଳରେଖା ଅଟେ । ସରଳରେଖା ଉପରିସ୍ଥ ପ୍ରତ୍ୟେକ ବିନ୍ଦୁ ଉକ୍ତ ସମୀକରଣର ଏକ ସମାଧାନ । x = ୦ ହେଉଛି y-ଅକ୍ଷର ସମୀକରଣ ଏବଂ y = ୦ ହେଉଛି x-ଅକ୍ଷର ସମୀକରଣ । x = a ରେଖା y-ଅକ୍ଷ ସହ ସମାନ୍ତର ଏବଂ y = b ରେଖା x-ଅକ୍ଷ ସହ ସମାନ୍ତର ।',
      takeaways: [
        'A linear equation in two variables has infinitely many solutions',
        'Graph of ax + by + c = 0 is always a straight line',
        'Line passing through origin has form y = mx (c = 0)',
        'x = c represents vertical line parallel to y-axis; y = k is horizontal line'
      ],
      takeawaysOdia: [
        'ଏହି ସମୀକରଣର ଅସଂଖ୍ୟ ସମାଧାନ ଥାଏ',
        'ଏହାର ଲେଖଚିତ୍ର ସର୍ବଦା ଏକ ସରଳରେଖା ହୁଏ',
        'ମୂଳବିନ୍ଦୁ ଦେଇ ଯାଉଥିବା ସରଳରେଖାର ସମୀକରଣ y = mx ଅଟେ',
        'x = c ରେଖା y-ଅକ୍ଷ ସହିତ ସମାନ୍ତର ଏବଂ y = k ରେଖା x-ଅକ୍ଷ ସହିତ ସମାନ୍ତର'
      ]
    },
    quiz: [
      {
        question: 'How many solutions does the equation 2x + 3y = 12 have?',
        questionOdia: '୨x + ୩y = ୧୨ ସମୀକରଣର କେତୋଟି ସମାଧାନ ଅଛି?',
        options: ['Only one unique solution', 'Exactly two solutions', 'Infinitely many solutions', 'No solution'],
        optionsOdia: ['ଗୋଟିଏ ଅନନ୍ୟ ସମାଧାନ', 'କେବଳ ଦୁଇଟି ସମାଧାନ', 'ଅନନ୍ତ ବା ଅସଂଖ୍ୟ ସମାଧାନ', 'କୌଣସି ସମାଧାନ ନାହିଁ'],
        correctAnswerIndex: 2,
        explanation: 'Any linear equation in two variables possesses infinitely many pairs of solutions (x, y).',
        explanationOdia: 'ଦୁଇ ଅଜ୍ଞାତ ରାଶି ବିଶିଷ୍ଟ ରୈଖିକ ସମୀକରଣର ଅସଂଖ୍ୟ ସମାଧାନ ଥାଏ ।',
        topic: 'Solutions of Linear Equations'
      },
      {
        question: 'If the point (2, 0) lies on the graph of the linear equation 2x + 3y = k, what is the value of k?',
        questionOdia: 'ଯଦି (୨, ୦) ବିନ୍ଦୁଟି ୨x + ୩y = k ଲେଖଚିତ୍ର ଉପରେ ଥାଏ, ତେବେ k ର ମୂଲ୍ୟ କେତେ?',
        options: ['2', '4', '6', '0'],
        optionsOdia: ['୨', '୪', '୬', '୦'],
        correctAnswerIndex: 1,
        explanation: 'Substitute x = 2 and y = 0: 2(2) + 3(0) = 4 + 0 = 4, so k = 4.',
        explanationOdia: 'x = ୨ ଏବଂ y = ୦ ବସାଇଲେ: ୨(୨) + ୩(୦) = ୪, ତେଣୁ k = ୪ ।',
        topic: 'Evaluation of Unknowns'
      },
      {
        question: 'The equation of the line parallel to the y-axis at a distance of 4 units to the right of origin is:',
        questionOdia: 'ମୂଳବିନ୍ଦୁର ଡାହାଣକୁ ୪ ଏକକ ଦୂରତାରେ y-ଅକ୍ଷ ସହ ସମାନ୍ତର ସରଳରେଖାର ସମୀକରଣ କ’ଣ?',
        options: ['y = 4', 'x = 4', 'x = -4', 'y = -4'],
        optionsOdia: ['y = ୪', 'x = ୪', 'x = -୪', 'y = -୪'],
        correctAnswerIndex: 1,
        explanation: 'Lines parallel to y-axis have constant x-coordinate, represented as x = c; here x = 4.',
        explanationOdia: 'y-ଅକ୍ଷ ସହ ସମାନ୍ତର ରେଖା x = c ରୂପ ନିଏ, ତେଣୁ ଏଠାରେ x = ୪ ।',
        topic: 'Lines Parallel to Axes'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 9',
    order: 5,
    title: 'Lines and Angles',
    titleOdia: 'ରେଖା ଓ କୋଣ',
    description: 'Basic terms and definitions, intersecting and non-intersecting lines, linear pair axiom, vertically opposite angles, transversals, and angle sum property of triangles.',
    descriptionOdia: 'ପରିଭାଷା, ଛେଦୀ ଓ ଅସମାନ୍ତର ରେଖା, ରୈଖିକ ଯୁଗଳ ସ୍ୱୀକାର୍ଯ୍ୟ, ପ୍ରତୀପ କୋଣ, ଏକାନ୍ତର ଓ ଅନୁରୂପ କୋଣ, ଏବଂ ତ୍ରିଭୁଜର କୋଣ ମାନଙ୍କର ସମଷ୍ଟି ।',
    lesson: {
      title: 'Axioms, Parallel Lines & Angle Sum Theorems',
      titleOdia: 'ସ୍ୱୀକାର୍ଯ୍ୟ, ସମାନ୍ତର ରେଖା ଓ କୋଣ ସମଷ୍ଟି ପ୍ରମେୟ',
      durationMinutes: 24,
      objectives: [
        'Apply Linear Pair Axiom: adjacent angles on straight line sum to 180 degrees',
        'Prove vertically opposite angles are equal when two lines intersect',
        'Identify alternate interior, alternate exterior, corresponding, and interior angles on same side of transversal',
        'Prove that sum of three interior angles of a triangle is 180 degrees'
      ],
      objectivesOdia: [
        'ରୈଖିକ ଯୁଗଳ ସ୍ୱୀକାର୍ଯ୍ୟ ବୁଝିବା: ସରଳରେଖା ଉପରିସ୍ଥ ସନ୍ନିହିତ କୋଣଦ୍ୱୟର ସମଷ୍ଟି ୧୮୦°',
        'ଦୁଇ ରେଖା ପରସ୍ପରକୁ ଛେଦ କଲେ ସମ୍ମୁଖ ପ୍ରତୀପ କୋଣଗୁଡ଼ିକ ସମାନ ବୋଲି ପ୍ରମାଣ କରିବା',
        'ଛେଦକ (Transversal) ଦ୍ୱାରା ସୃଷ୍ଟ ଅନୁରୂପ, ଏକାନ୍ତର ଓ ଏକପାର୍ଶ୍ୱସ୍ଥ ଅନ୍ତଃସ୍ଥ କୋଣ ଚିହ୍ନିବା',
        'ତ୍ରିଭୁଜର ତିନିକୋଣର ସମଷ୍ଟି ୧୮୦° ବୋଲି ପ୍ରମେୟ ପ୍ରମାଣ କରିବା'
      ],
      content: 'A ray standing on a straight line forms two adjacent angles whose sum is 180 degrees (Linear Pair Axiom). When two lines intersect at a point, vertically opposite angles are congruent. When a transversal intersects two parallel lines: (1) Corresponding angles are equal; (2) Alternate interior angles are equal; (3) Interior angles on the same side of the transversal are supplementary (sum to 180 degrees). In any triangle ABC, the sum of interior angles is 180 degrees (proved by drawing line parallel to base BC through vertex A). The exterior angle of a triangle is equal to the sum of the two opposite interior angles.',
      contentOdia: 'ଏକ ସରଳରେଖା ଉପରେ ଏକ ରଶ୍ମି ଠିଆ ହେଲେ ଉତ୍ପନ୍ନ ସନ୍ନିହିତ କୋଣଦ୍ୱୟର ସମଷ୍ଟି ୧୮୦° ହୁଏ (ରୈଖିକ ଯୁଗଳ ସ୍ୱୀକାର୍ଯ୍ୟ) । ଦୁଇ ସରଳରେଖା ଛେଦ କଲେ ପ୍ରତୀପ କୋଣଗୁଡ଼ିକ ପରସ୍ପର ସମାନ ହୁଅନ୍ତି । ଦୁଇ ସମାନ୍ତର ରେଖାକୁ ଏକ ଛେଦକ ଛେଦ କଲେ: (୧) ଅନୁରୂପ କୋଣମାନେ ସମାନ, (୨) ଏକାନ୍ତର କୋଣମାନେ ସମାନ, ଏବଂ (୩) ଛେଦକର ଏକ ପାର୍ଶ୍ୱସ୍ଥ ଅନ୍ତଃସ୍ଥ କୋଣଦ୍ୱୟର ସମଷ୍ଟି ୧୮୦° ହୁଏ । ଯେକୌଣସି ତ୍ରିଭୁଜର ତିନୋଟି କୋଣର ସମଷ୍ଟି ୧୮୦° ଅଟେ । ତ୍ରିଭୁଜର ବହିଃସ୍ଥ କୋଣର ପରିମାଣ ଅନ୍ତଃସ୍ଥ ଦୂରବର୍ତ୍ତୀ କୋଣଦ୍ୱୟର ସମଷ୍ଟି ସହିତ ସମାନ ।',
      takeaways: [
        'Linear pair: adjacent angles on a line add up to 180 degrees',
        'Parallel lines cut by transversal: Alternate interior angles are equal',
        'Sum of angles in a triangle is 180 degrees',
        'Exterior angle of triangle = Sum of two interior opposite angles'
      ],
      takeawaysOdia: [
        'ରୈଖିକ ଯୁଗଳ କୋଣଦ୍ୱୟର ସମଷ୍ଟି ୧୮୦°',
        'ସମାନ୍ତର ରେଖା କ୍ଷେତ୍ରରେ ଏକାନ୍ତର ଅନ୍ତଃସ୍ଥ କୋଣ ସମାନ',
        'ତ୍ରିଭୁଜର ତିନି କୋଣର ସମଷ୍ଟି ୧୮୦°',
        'ବହିଃସ୍ଥ କୋଣ = ଅନ୍ତଃସ୍ଥ ଦୂରବର୍ତ୍ତୀ କୋଣଦ୍ୱୟର ସମଷ୍ଟି'
      ]
    },
    quiz: [
      {
        question: 'Two angles of a linear pair are in the ratio 2 : 3. What is the measure of the smaller angle?',
        questionOdia: 'ଏକ ରୈଖିକ ଯୁଗଳର ଦୁଇଟି କୋଣର ଅନୁପାତ ୨ : ୩ । ସାନ କୋଣଟିର ପରିମାଣ କେତେ?',
        options: ['72 degrees', '36 degrees', '108 degrees', '60 degrees'],
        optionsOdia: ['୭୨°', '୩୬°', '୧୦୮°', '୬୦°'],
        correctAnswerIndex: 0,
        explanation: '2x + 3x = 180 => 5x = 180 => x = 36. Smaller angle = 2x = 72 degrees.',
        explanationOdia: '୨x + ୩x = ୧୮୦° => ୫x = ୧୮୦° => x = ୩୬° । ସାନ କୋଣ = ୨ × ୩୬° = ୭୨° ।',
        topic: 'Linear Pair'
      },
      {
        question: 'In a triangle, two angles are 65 degrees and 45 degrees. What is the measure of the third angle?',
        questionOdia: 'ଏକ ତ୍ରିଭୁଜର ଦୁଇଟି କୋଣ ୬୫° ଓ ୪୫° । ତୃତୀୟ କୋଣଟିର ପରିମାଣ କେତେ?',
        options: ['80 degrees', '70 degrees', '90 degrees', '75 degrees'],
        optionsOdia: ['୮୦°', '୭୦°', '୯୦°', '୭୫°'],
        correctAnswerIndex: 1,
        explanation: 'Sum of angles is 180 degrees: Third angle = 180 - (65 + 45) = 180 - 110 = 70 degrees.',
        explanationOdia: 'ତୃତୀୟ କୋଣ = ୧୮୦° - (୬୫° + ୪୫°) = ୧୮୦° - ୧୧୦° = ୭୦° ।',
        topic: 'Angle Sum Property'
      },
      {
        question: 'If two parallel lines are intersected by a transversal, the interior angles on the same side of transversal are:',
        questionOdia: 'ଦୁଇ ସମାନ୍ତର ରେଖାକୁ ଏକ ଛେଦକ ଛେଦ କଲେ ଛେଦକର ଏକପାର୍ଶ୍ୱସ୍ଥ ଅନ୍ତଃସ୍ଥ କୋଣଦ୍ୱୟ କ’ଣ ହୁଅନ୍ତି?',
        options: ['Equal', 'Complementary (sum 90 deg)', 'Supplementary (sum 180 deg)', 'None of these'],
        optionsOdia: ['ପରସ୍ପର ସମାନ', 'ପରସ୍ପର ଅନୁପୂରକ (୯୦°)', 'ପରସ୍ପର ପରିପୂରକ (୧୮୦°)', 'କୌଣସିଟି ନୁହେଁ'],
        correctAnswerIndex: 2,
        explanation: 'Consecutive interior angles on the same side of a transversal are supplementary (sum = 180 degrees).',
        explanationOdia: 'ଛେଦକର ଏକପାର୍ଶ୍ୱସ୍ଥ ଅନ୍ତଃସ୍ଥ କୋଣଦ୍ୱୟର ସମଷ୍ଟି ସର୍ବଦା ୧୮୦° (ପରିପୂରକ) ହୁଏ ।',
        topic: 'Parallel Lines & Transversal'
      }
    ]
  },

  // ---------------------------------------------------------
  // ENGLISH (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'ENG',
    classLevel: 'Class 9',
    order: 1,
    title: 'The Fun They Had',
    titleOdia: 'ସେମାନେ ଉପଭୋଗ କରିଥିବା ଆନନ୍ଦ',
    description: 'Isaac Asimov futuristic science fiction story contrasting 22nd-century mechanical screen teachers with traditional communal schools.',
    descriptionOdia: 'ଆଇଜାକ୍ ଆସିମୋଭ୍‌ଙ୍କ ବିଜ୍ଞାନଭିତ୍ତିକ ଗଳ୍ପ, ଯେଉଁଥିରେ ଭବିଷ୍ୟତର ଯାନ୍ତ୍ରିକ ଶିକ୍ଷା ଓ ପ୍ରାଚୀନ ସାମୂହିକ ବିଦ୍ୟାଳୟର ତୁଳନା କରାଯାଇଛି ।',
    lesson: {
      title: 'Futuristic Education, Automation & Human Connection',
      titleOdia: 'ଭବିଷ୍ୟତର ଶିକ୍ଷା, ଯାନ୍ତ୍ରିକୀକରଣ ଓ ମାନବୀୟ ସମ୍ପର୍କ',
      durationMinutes: 20,
      objectives: [
        'Analyze Asimov vision of individualized computerised learning set in the year 2157',
        'Compare Tommy and Margie perspective on telebooks versus printed paper books',
        'Evaluate the social and psychological value of peer collaboration in schooling',
        'Explore theme: technology cannot replace warmth, empathy, and social camaraderie of real teachers'
      ],
      objectivesOdia: [
        '୨୧୫୭ ମସିହାର ଯାନ୍ତ୍ରିକ ଶିକ୍ଷା ବ୍ୟବସ୍ଥା ଉପରେ ଆସିମୋଭ୍‌ଙ୍କ କଳ୍ପନା ବୁଝିବା',
        'ମାର୍ଗି ଓ ଟମିଙ୍କ ଟେଲିବୁକ୍ ଏବଂ ପ୍ରକୃତ କାଗଜ ବହି ମଧ୍ୟରେ ତୁଳନା କରିବା',
        'ସହପାଠୀଙ୍କ ସହିତ ମିଳିମିଶି ପଢ଼ିବାର ମାନସିକ ଓ ସାମାଜିକ ଗୁରୁତ୍ୱ ଅନୁଭବ କରିବା',
        'ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ମଣିଷ ଶିକ୍ଷକଙ୍କ ସ୍ନେହ ଓ ସହାନୁଭୂତିର ସ୍ଥାନ ନେଇପାରିବ ନାହିଁ ବୋଲି ବୁଝିବା'
      ],
      content: 'Set on May 17, 2157, Margie and Tommy discover a genuine printed paper book in Tommy attic. For Margie, who is taught alone at home by an emotionless mechanical computer teacher adjusted to her learning pace, the idea of a century-old school where human teachers taught children of the same age together in a common building is fascinating. Margie struggles with geography tests administered repetitively by her mechanical slot. While the machine is efficient, Margie yearns for the vibrant playground, shared laughter, mutual homework assistance, and the human warmth of the old days—thinking wistfully about "the fun they had."',
      contentOdia: '୨୧୫୭ ମସିହାରେ ୧୧ ବର୍ଷୀୟା ମାର୍ଗି ଓ ୧୩ ବର୍ଷୀୟ ଟମି ଘର କୋଠରିରୁ ଏକ ପ୍ରକୃତ ଛାପା ବହି ପାଆନ୍ତି । ମାର୍ଗି ନିଜ ଘରେ ଏକ ଯାନ୍ତ୍ରିକ ଶିକ୍ଷକ (କମ୍ପ୍ୟୁଟର ସ୍କ୍ରିନ୍) ଆଗରେ ଏକୁଟିଆ ପଢ଼େ ଏବଂ ଭୂଗୋଳ ପରୀକ୍ଷାରେ କ୍ରମାଗତ ଖରାପ ପ୍ରଦର୍ଶନ କରୁଥାଏ । ପୁରୁଣା କାଳରେ ପିଲାମାନେ ଏକାଠି ଏକ ବିଦ୍ୟାଳୟ ଘରକୁ ଯାଇ ମଣିଷ ଶିକ୍ଷକଙ୍କଠାରୁ ପଢୁଥିଲେ ଏବଂ ଏକାଠି ଖେଳୁଥିଲେ ବୋଲି ଜାଣିବା ପରେ ମାର୍ଗି ସେହି ଅତୀତର ମଜା ଓ ଆନନ୍ଦ ବିଷୟରେ ଚିନ୍ତା କରି ଆନନ୍ଦିତ ଓ ଭାବପ୍ରବଣ ହୁଏ ।',
      takeaways: [
        'Technology provides tailored pacing but risks social isolation',
        'Real education flourishes in communities of empathy and shared human experience',
        'Printed books provide tangible permanence contrasted with volatile digital screens',
        'Story reflects critical prophetic insight into modern distance and virtual learning'
      ],
      takeawaysOdia: [
        'ଯନ୍ତ୍ର ବ୍ୟକ୍ତିଗତ ଶିକ୍ଷା ଦେଇପାରେ କିନ୍ତୁ ସାମାଜିକ ଏକାକୀତ୍ୱ ସୃଷ୍ଟି କରେ',
        'ସହପାଠୀ ଓ ମଣିଷ ଶିକ୍ଷକଙ୍କ ମେଳରେ ଶିକ୍ଷା ଅଧିକ ଫଳପ୍ରଦ ହୁଏ',
        'କାଗଜ ବହିର ଅନୁଭବ ଓ ମୂଲ୍ୟ ଡିଜିଟାଲ୍ ସ୍କ୍ରିନ୍ ଠାରୁ ଭିନ୍ନ',
        'ବର୍ତ୍ତମାନର ଅନଲାଇନ୍ ଶିକ୍ଷା ସହିତ ଏହି ଗଳ୍ପର ଗଭୀର ସାମଞ୍ଜସ୍ୟ ରହିଛି'
      ]
    },
    quiz: [
      {
        question: 'Who was Margie teacher in Isaac Asimov story "The Fun They Had"?',
        questionOdia: 'ଆସିମୋଭ୍‌ଙ୍କ ଗଳ୍ପରେ ମାର୍ଗିର ଶିକ୍ଷକ କିଏ ଥିଲେ?',
        options: ['Her mother Mrs. Jones', 'The County Inspector', 'A mechanical television screen teacher', 'Tommy elder brother'],
        optionsOdia: ['ତାଙ୍କ ମାଆ ମିସେସ୍ ଜୋନ୍ସ', 'କାଉଣ୍ଟି ଇନ୍ସପେକ୍ଟର', 'ଏକ ଯାନ୍ତ୍ରିକ କମ୍ପ୍ୟୁଟର/ସ୍କ୍ରିନ୍ ଶିକ୍ଷକ', 'ଟମିର ବଡ଼ଭାଇ'],
        correctAnswerIndex: 2,
        explanation: 'Margie teacher was an automated mechanical television device with slots for homework and punch-code tests.',
        explanationOdia: 'ମାର୍ଗିର ଶିକ୍ଷକ ଏକ ଯାନ୍ତ୍ରିକ କମ୍ପ୍ୟୁଟର ସ୍କ୍ରିନ୍ ଥିଲେ ଯିଏ ଘରେ ପଢ଼ାଉଥିଲେ ।',
        topic: 'Plot and Characters'
      },
      {
        question: 'Why did the County Inspector visit Margie house?',
        questionOdia: 'କାଉଣ୍ଟି ଇନ୍ସପେକ୍ଟର ମାର୍ଗିର ଘରକୁ କାହିଁକି ଆସିଥିଲେ?',
        options: [
          'To punish Margie for missing school',
          'To repair the geography sector of the mechanical teacher',
          'To deliver new printed books',
          'To enroll Margie in a regular school'
        ],
        optionsOdia: [
          'ମାର୍ଗିକୁ ଦଣ୍ଡ ଦେବା ପାଇଁ',
          'ଯାନ୍ତ୍ରିକ ଶିକ୍ଷକର ଭୂଗୋଳ ବିଭାଗ ମରାମତି କରିବା ପାଇଁ',
          'ନୂଆ ବହି ଦେବା ପାଇଁ',
          'ମାର୍ଗିକୁ ବିଦ୍ୟାଳୟରେ ନାମ ଲେଖାଇବା ପାଇଁ'
        ],
        correctAnswerIndex: 1,
        explanation: 'The geography sector had geared too fast for Margie age level, needing slowing down to 10-year level.',
        explanationOdia: 'ଯାନ୍ତ୍ରିକ ଶିକ୍ଷକର ଭୂଗୋଳ ଅଂଶଟି ବୟସ ତୁଳନାରେ ଦ୍ରୁତ ଚାଲୁଥିବାରୁ ତାହାକୁ ସଜାଡ଼ିବାକୁ ଆସିଥିଲେ ।',
        topic: 'Plot Comprehension'
      },
      {
        question: 'What did Margie think about the old schools at the conclusion of the story?',
        questionOdia: 'ଗଳ୍ପର ଶେଷରେ ମାର୍ଗି ପୁରୁଣା ବିଦ୍ୟାଳୟ ବିଷୟରେ କ’ଣ ଭାବିଲା?',
        options: [
          'That they were unhygienic and wasteful',
          'That students must have had incredible fun learning and playing together',
          'That computers were far superior',
          'That books were difficult to read'
        ],
        optionsOdia: [
          'ସେଗୁଡ଼ିକ ଅଦରକାରୀ ଥିଲା',
          'ପିଲାମାନେ ଏକାଠି ପଢ଼ି ବହୁତ ଆନନ୍ଦ (fun) ପାଉଥିବେ',
          'କମ୍ପ୍ୟୁଟର ସବୁଠାରୁ ଭଲ',
          'ବହି ପଢ଼ିବା କଷ୍ଟକର ଥିଲା'
        ],
        correctAnswerIndex: 1,
        explanation: 'She thought about the shared laughter, mutual support, and joyful camaraderie of old-time schools.',
        explanationOdia: 'ପିଲାମାନେ ଏକାଠି ବସି ହସିଖୁସିରେ ପଢୁଥିବା ସେହି ମଜା (the fun they had) ବିଷୟରେ ସେ ଭାବିଲା ।',
        topic: 'Theme Analysis'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 9',
    order: 2,
    title: 'The Sound of Music',
    titleOdia: 'ସଙ୍ଗୀତର ସ୍ୱର',
    description: 'Inspirational biographical accounts of Evelyn Glennie (percussionist overcoming profound deafness) and Ustad Bismillah Khan (shehnai maestro).',
    descriptionOdia: 'ଇଭେଲିନ୍ ଗ୍ଲେନିଙ୍କ ବଧିରତାକୁ ଜୟ କରି ସଙ୍ଗୀତ ସାଧନା ଏବଂ ଉସ୍ତାଦ୍ ବିସମିଲ୍ଲା ଖାଁଙ୍କ ସାହାନାଇ ବାଦନର ପ୍ରେରଣାଦାୟୀ କାହାଣୀ ।',
    lesson: {
      title: 'Triumph of Spirit: Glennie & Bismillah Khan',
      titleOdia: 'ଆତ୍ମବିଶ୍ୱାସର ବିଜୟ: ଇଭେଲିନ୍ ଓ ବିସମିଲ୍ଲା ଖାଁ',
      durationMinutes: 22,
      objectives: [
        'Trace Evelyn Glennie journey in feeling musical vibrations through her body after losing hearing at age 11',
        'Examine master percussionist Ron Forbes guidance in opening Evelyn mind to sensory resonance',
        'Trace Ustad Bismillah Khan transformation of shehnai from royal court pungi into classical concert instrument',
        'Reflect on themes of devotion, cultural roots, humility, and national integration'
      ],
      objectivesOdia: [
        '୧୧ ବର୍ଷ ବୟସରେ ଶ୍ରବଣଶକ୍ତି ହରାଇ ମଧ୍ୟ ଶରୀରର ପ୍ରତ୍ୟେକ ଅଙ୍ଗ ଦ୍ୱାରା ସଙ୍ଗୀତ ଅନୁଭବ କରିବା ଶିଖିବା',
        'ରନ୍ ଫୋର୍ବସ୍‌ଙ୍କ ପ୍ରେରଣା ଓ ମାର୍ଗଦର୍ଶନର ଗୁରୁତ୍ୱ ବୁଝିବା',
        'ପୁଙ୍ଗୀରୁ ସାହାନାଇର ଉତ୍ପତ୍ତି ଓ ବିସମିଲ୍ଲା ଖାଁଙ୍କ ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତରେ ଯୋଗଦାନ ଜାଣିବା',
        'ଭାରତ ରତ୍ନ ବିଜେତା ଖାଁ ସାହେବଙ୍କ ଗଙ୍ଗା ନଦୀ ଓ କାଶୀ ପ୍ରତି ଅତୁଟ ପ୍ରେମରୁ ପ୍ରେରଣା ନେବା'
      ],
      content: 'Part I narrates how Scottish percussionist Evelyn Glennie lost hearing gradually due to nerve damage by age eleven. Rather than surrendering, percussionist Ron Forbes tuned two large drums to different notes, coaching Evelyn to feel vibrations through waist, feet, and bones. Evelyn graduated from Royal Academy of Music with top honors, becoming a world-renowned solo percussionist. Part II portrays Ustad Bismillah Khan, who transformed the banned nasal pungi into the melodious Shehnai. Practicing at the banks of river Ganga in Varanasi, his music mirrored Ganga pristine flow. On August 15, 1947, he greeted independent India from Red Fort with Raag Kafi. He was awarded Bharat Ratna in 2001.',
      contentOdia: 'ପ୍ରଥମ ଭାଗରେ ଇଭେଲିନ୍ ଗ୍ଲେନିଙ୍କ କାହାଣୀ ବର୍ଣ୍ଣିତ । ୧୧ ବର୍ଷ ବୟସରେ ସ୍ନାୟୁ ଦୁର୍ବଳତା ଯୋଗୁଁ ସେ ଶ୍ରବଣଶକ୍ତି ହରାଇଥିଲେ । କିନ୍ତୁ ରନ୍ ଫୋର୍ବସ୍‌ଙ୍କ ପ୍ରେରଣାରେ ସେ କାନ ପରିବର୍ତ୍ତେ ନିଜ ଶରୀର ଓ ଚର୍ମ ଦ୍ୱାରା ତରଙ୍ଗ ଅନୁଭବ କରି ସଙ୍ଗୀତ ଶିଖିଲେ ଏବଂ ରୟାଲ ଏକାଡେମୀରେ ଇତିହାସ ସୃଷ୍ଟି କଲେ । ଦ୍ୱିତୀୟ ଭାଗରେ ଉସ୍ତାଦ୍ ବିସମିଲ୍ଲା ଖାଁଙ୍କ ଜୀବନ ବର୍ଣ୍ଣିତ । ସେ ରାଜଦରବାରରୁ ବିତାଡ଼ିତ "ପୁଙ୍ଗୀ" କୁ ଏକ ମଧୁର ଶାସ୍ତ୍ରୀୟ ବାଦ୍ୟ "ସାହାନାଇ" ରେ ପରିଣତ କଲେ । ବାରାଣସୀର ଗଙ୍ଗା କୂଳରେ ସାଧନା କରି ସେ ୧୫ ଅଗଷ୍ଟ ୧୯୪୭ ରେ ଲାଲକିଲ୍ଲାରୁ ସ୍ୱାଧୀନ ଭାରତକୁ ରାଗ କାଫିରେ ଅଭିନନ୍ଦନ ଜଣାଇଥିଲେ । ୨୦୦୧ ରେ ତାଙ୍କୁ ଭାରତ ରତ୍ନ ପ୍ରଦାନ କରାଯାଇଥିଲା ।',
      takeaways: [
        'Disability is transcended through unrelenting focus, resilience, and sensory adaptation',
        'Ron Forbes taught: "Do not listen through ears; try to sense it some other way"',
        'Shehnai originated when a barber (nai) modified pungi in the Shah chambers',
        'Bismillah Khan refused foreign citizenship because he could not transport his beloved Ganga'
      ],
      takeawaysOdia: [
        'ଦୃଢ଼ ଇଚ୍ଛାଶକ୍ତି ଓ ପରିଶ୍ରମ ଆଗରେ ଶାରୀରିକ ଅକ୍ଷମତା ହାର ମାନେ',
        'ଇଭେଲିନ୍ କାନ ବଦଳରେ ଶରୀରର ସ୍ପନ୍ଦନରେ ସଙ୍ଗୀତ ଶୁଣିଲେ',
        'ସାହାନାଇର ନାମ "ଶାହ" ଓ "ନାଇ" (ନାପିତ) ର ମିଶ୍ରଣରୁ ଆସିଛି',
        'ବିସମିଲ୍ଲା ଖାଁଙ୍କ ମାତୃଭୂମି ଓ ଗଙ୍ଗା ପ୍ରତି ଭଲପାଇବା ଅତୁଳନୀୟ ଥିଲା'
      ]
    },
    quiz: [
      {
        question: 'Who helped Evelyn Glennie sense music after other teachers discouraged her?',
        questionOdia: 'ଅନ୍ୟ ଶିକ୍ଷକମାନେ ନିରୁତ୍ସାହିତ କରିବା ପରେ ଇଭେଲିନ୍ ଗ୍ଲେନିଙ୍କୁ କିଏ ସାହାଯ୍ୟ କଲେ?',
        options: ['Her school headmistress', 'Percussionist Ron Forbes', 'Ustad Bismillah Khan', 'Her audiologist doctor'],
        optionsOdia: ['ତାଙ୍କ ପ୍ରଧାନ ଶିକ୍ଷୟିତ୍ରୀ', 'ବାଦ୍ୟଶିଳ୍ପୀ ରନ୍ ଫୋର୍ବସ୍', 'ଉସ୍ତାଦ୍ ବିସମିଲ୍ଲା ଖାଁ', 'ତାଙ୍କ ଡାକ୍ତର'],
        correctAnswerIndex: 1,
        explanation: 'Ron Forbes spotted her potential, tuning two large drums to different notes and teaching her to feel vibration.',
        explanationOdia: 'ରନ୍ ଫୋର୍ବସ୍ ତାଙ୍କ ପ୍ରତିଭା ଚିହ୍ନି ବଡ଼ ଢୋଲ ବଜାଇ ସ୍ପନ୍ଦନ ଅନୁଭବ କରିବା ଶିଖାଇଥିଲେ ।',
        topic: 'Evelyn Glennie'
      },
      {
        question: 'Which instrument did Emperor Aurangzeb ban in the royal court for its unpleasant shrill sound?',
        questionOdia: 'ମୋଗଲ ସମ୍ରାଟ ଔରଙ୍ଗଜେବ ରାଜଦରବାରରେ କେଉଁ କର୍କଶ ବାଦ୍ୟକୁ ନିଷିଦ୍ଧ କରିଥିଲେ?',
        options: ['Shehnai', 'Pungi', 'Sitar', 'Flute'],
        optionsOdia: ['ସାହାନାଇ', 'ପୁଙ୍ଗୀ', 'ସୀତାର', 'ବଂଶୀ'],
        correctAnswerIndex: 1,
        explanation: 'Aurangzeb banned the pungi due to its shrill, unpleasant pitch, which was later redesigned into the shehnai.',
        explanationOdia: 'ଔରଙ୍ଗଜେବ ପୁଙ୍ଗୀ ବାଦ୍ୟର କର୍କଶ ସ୍ୱର ପାଇଁ ତାହାକୁ ନିଷିଦ୍ଧ କରିଥିଲେ ।',
        topic: 'Bismillah Khan'
      },
      {
        question: 'In which year was Ustad Bismillah Khan conferred India highest civilian honor, the Bharat Ratna?',
        questionOdia: 'କେଉଁ ବର୍ଷ ଉସ୍ତାଦ୍ ବିସମିଲ୍ଲା ଖାଁଙ୍କୁ ଦେଶର ସର୍ବୋଚ୍ଚ ସମ୍ମାନ "ଭାରତ ରତ୍ନ" ପ୍ରଦାନ କରାଯାଇଥିଲା?',
        options: ['1947', '1990', '2001', '2005'],
        optionsOdia: ['୧୯୪୭', '୧୯୯୦', '୨୦୦୧', '୨୦୦୫'],
        correctAnswerIndex: 2,
        explanation: 'Bismillah Khan received the Bharat Ratna in 2001 for his peerless lifelong contribution to Indian classical music.',
        explanationOdia: '୨୦୦୧ ମସିହାରେ ତାଙ୍କୁ ଭାରତ ରତ୍ନ ସମ୍ମାନରେ ସମ୍ମାନିତ କରାଯାଇଥିଲା ।',
        topic: 'Awards and Recognition'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 9',
    order: 3,
    title: 'The Little Girl',
    titleOdia: 'ସେହି ଛୋଟ ଝିଅଟି',
    description: 'Katherine Mansfield sensitive short story depicting Kezia journey from fearing her strict father to discovering his protective, loving heart.',
    descriptionOdia: 'କ୍ୟାଥରିନ୍ ମ୍ୟାନ୍ସଫିଲ୍ଡଙ୍କ ଭାବପ୍ରବଣ ଗଳ୍ପ, ଯେଉଁଥିରେ କେଜିଆ ନିଜ ବାପାଙ୍କ ପ୍ରତି ଥିବା ଭୟ ଦୂର କରି ତାଙ୍କ ସ୍ନେହ ଅନୁଭବ କରେ ।',
    lesson: {
      title: 'Parent-Child Dynamics, Empathy & Vulnerability',
      titleOdia: 'ପିତା-କନ୍ୟା ସମ୍ପର୍କ, ସହାନୁଭୂତି ଓ ଆବେଗ',
      durationMinutes: 18,
      objectives: [
        'Analyze Kezia perception of her towering, stern father versus playful neighbor Mr. Macdonald',
        'Examine the pin-cushion incident and the tragic misunderstanding over torn port authority papers',
        'Understand emotional breakthrough when Kezia suffers a nightmare while mother and grandmother are away',
        'Appreciate parental sacrifices concealed behind strict disciplinary masks'
      ],
      objectivesOdia: [
        'କେଜିଆ ନିଜ ଗମ୍ଭୀର ବାପାଙ୍କୁ ଡରିବା ଏବଂ ପଡ଼ୋଶୀ ମ୍ୟାକଡୋନାଲ୍ଡଙ୍କ ଖେଳକୂଦ ଦେଖି ତୁଳନା କରିବା',
        'ବାପାଙ୍କ ଜନ୍ମଦିନ ପାଇଁ ତିଆରି କରିଥିବା କୁଶନ୍ ରେ ଜରୁରୀ କାଗଜପତ୍ର ପୂରାଇ ଦଣ୍ଡ ପାଇବା ଘଟଣା ବୁଝିବା',
        'ମାଆ ଓ ଆଇ ଅନୁପସ୍ଥିତିରେ ଡରୁଆ ସ୍ୱପ୍ନ ଦେଖି ବାପାଙ୍କ ଛାତିରେ ଶୋଇ ସ୍ନେହ ଅନୁଭବ କରିବା',
        'ବାପାଙ୍କ କଠୋରତା ପଛରେ ଥିବା କ୍ଳାନ୍ତି ଓ ପ୍ରକୃତ ଭଲପାଇବା ବୁଝିବା'
      ],
      content: 'Kezia viewed her father as a terrifying giant with huge hands, loud voice, and piercing eyes. While the neighbor Mr. Macdonald played tag laughing merrily with his children, Kezia father demanded silent obedience. Encouraged by her loving grandmother, Kezia crafted a birthday pin-cushion for him, innocently stuffing it with sheets she found on his bedroom table—which were actually his critical Port Authority speech. He beat her with a ruler. However, when her mother was hospitalized and grandmother accompanied her, Kezia suffered a horrifying nightmare of a butcher with a knife. Her father carried her into his warm bed, blew out the candle, and tucked her against his chest. Listening to his beating heart, Kezia realised he worked tirelessly every day and possessed a big, deeply affectionate heart.',
      contentOdia: 'କେଜିଆ ନିଜ ବାପାଙ୍କୁ ଏକ ଦୈତ୍ୟ ଭଳି ଡରୁଥିଲା । ପଡ଼ୋଶୀ ମ୍ୟାକଡୋନାଲ୍ଡ ନିଜ ପିଲାମାନଙ୍କ ସହ ଖେଳୁଥିବା ବେଳେ କେଜିଆର ବାପା ସବୁବେଳେ ଗମ୍ଭୀର ରହୁଥିଲେ । ଆଇଙ୍କ ପରାମର୍ଶରେ ବାପାଙ୍କ ଜନ୍ମଦିନ ପାଇଁ ସେ ଏକ ସୁନ୍ଦର କୁଶନ୍ ପ୍ରସ୍ତୁତ କଲା ଏବଂ ଅଜାଣତରେ ଟେବୁଲ୍ ଉପରେ ଥିବା ବାପାଙ୍କ ଜରୁରୀ ଭାଷଣ କାଗଜ ଚିରି ସେଥିରେ ଭରିଦେଲା । ଏଥିପାଇଁ ବାପା ତାକୁ ସ୍କେଲ୍ ରେ ବାଡ଼େଇଲେ । ଦିନେ ମାଆ ଓ ଆଇ ଡାକ୍ତରଖାନା ଯାଇଥିବା ବେଳେ କେଜିଆ ରାତିରେ ଭୟାନକ ସ୍ୱପ୍ନ ଦେଖି ଚିତ୍କାର କଲା । ବାପା ତାକୁ କୋଳେଇ ନେଇ ନିଜ ବିଛଣାରେ ଶୁଆଇଲେ ଏବଂ ସ୍ନେହରେ ଘୋଡ଼ାଇ ଦେଲେ । ବାପାଙ୍କ ହୃଦସ୍ପନ୍ଦନ ଶୁଣି କେଜିଆ ବୁଝିପାରିଲା ଯେ ବାପା କଠିନ ପରିଶ୍ରମ ଯୋଗୁଁ ଥକି ଯାଆନ୍ତି, କିନ୍ତୁ ତାଙ୍କ ଭିତରେ ଏକ ବିରାଟ ସ୍ନେହୀ ହୃଦୟ ଅଛି ।',
      takeaways: [
        'Strict parenting often masks exhausting burdens and deep protective love',
        'Communication gaps cause children to mistake fatigue for hostility',
        'Mansfield portrays emotional awakening through quiet, vulnerable domestic scenes',
        'Love transcends surface demeanor and reveals itself in hours of genuine need'
      ],
      takeawaysOdia: [
        'ପିତାମାତାଙ୍କ କଠୋରତା ପଛରେ ଦାୟିତ୍ୱବୋଧ ଓ ଗଭୀର ସ୍ନେହ ଥାଏ',
        'କଥାବାର୍ତ୍ତାର ଅଭାବ ପିଲାଙ୍କ ମନରେ ଭୟ ସୃଷ୍ଟି କରେ',
        'ଅସହାୟ ସମୟରେ ବାପାଙ୍କ ସ୍ନେହ ଓ ସୁରକ୍ଷା ପ୍ରକାଶ ପାଇଲା',
        'କେଜିଆ ବୁଝିଲା ବାପାଙ୍କ ହୃଦୟ ବହୁତ ବଡ଼'
      ]
    },
    quiz: [
      {
        question: 'What birthday gift was Kezia preparing for her father that led to trouble?',
        questionOdia: 'ବାପାଙ୍କ ଜନ୍ମଦିନ ପାଇଁ କେଜିଆ କେଉଁ ଉପହାର ପ୍ରସ୍ତୁତ କରୁଥିଲା ଯାହା ବିପଦ ଡାକିଆଣିଲା?',
        options: ['A hand-knitted sweater', 'A silk pin-cushion', 'A framed family photo', 'A leather pocketbook'],
        optionsOdia: ['ଏକ ସୁଇଟର', 'ରେଶମ କୁଶନ୍ (Pin-cushion)', 'ଫଟୋ ଫ୍ରେମ୍', 'ଚମଡ଼ା ପର୍ସ'],
        correctAnswerIndex: 1,
        explanation: 'Kezia made a yellow silk pin-cushion and stuffed it with her father torn speech papers.',
        explanationOdia: 'କେଜିଆ ଏକ ହଳଦିଆ ରେଶମ କୁଶନ୍ ତିଆରି କରି ସେଥିରେ ବାପାଙ୍କ କାଗଜପତ୍ର ଭରିଦେଇଥିଲା ।',
        topic: 'Plot Comprehension'
      },
      {
        question: 'Who lived next door to Kezia and played happily with his children in the garden?',
        questionOdia: 'କେଜିଆଙ୍କ ପଡ଼ୋଶୀ କିଏ ଥିଲେ ଯିଏ ବଗିଚାରେ ପିଲାମାନଙ୍କ ସହ ଖୁସିରେ ଖେଳୁଥିଲେ?',
        options: ['Mr. Macdonald', 'The County Inspector', 'Dr. Watson', 'Mr. Robert'],
        optionsOdia: ['ମିଷ୍ଟର ମ୍ୟାକଡୋନାଲ୍ଡ', 'କାଉଣ୍ଟି ଇନ୍ସପେକ୍ଟର', 'ଡାକ୍ତର ୱାଟସନ୍', 'ମିଷ୍ଟର ରବର୍ଟ'],
        correctAnswerIndex: 0,
        explanation: 'Mr. Macdonald played tag with his children, laughing as they hung onto his coat pockets.',
        explanationOdia: 'ମିଷ୍ଟର ମ୍ୟାକଡୋନାଲ୍ଡ ତାଙ୍କ ପିଲାମାନଙ୍କ ସହ ଧରାଧରି ଖେଳ ଖେଳୁଥିଲେ ।',
        topic: 'Character Contrast'
      },
      {
        question: 'At the end of the story, what did Kezia say about her father heart?',
        questionOdia: 'ଗଳ୍ପର ଶେଷରେ କେଜିଆ ବାପାଙ୍କ ହୃଦୟ ବିଷୟରେ କ’ଣ କହିଲା?',
        options: [
          '"What a cold heart you have"',
          '"What a big heart you\'ve got, father dear"',
          '"You have a heart of stone"',
          '"You don\'t care for anyone"'
        ],
        optionsOdia: [
          '"ଆପଣଙ୍କର କଠୋର ହୃଦୟ"',
          '"ବାପା, ଆପଣଙ୍କର ଏକ ବିରାଟ ବଡ଼ ହୃଦୟ ଅଛି"',
          '"ଆପଣଙ୍କ ହୃଦୟ ପଥର"',
          '"ଆପଣ କାହାକୁ ଭଲ ପାଆନ୍ତି ନାହିଁ"'
        ],
        correctAnswerIndex: 1,
        explanation: 'Realising his fatigue and devotion, Kezia remarked admiringly on his big heart.',
        explanationOdia: 'ବାପାଙ୍କ ସ୍ନେହ ଓ ପରିଶ୍ରମ ବୁଝି କେଜିଆ କହିଲା: "ବାପା, ଆପଣଙ୍କର ଏକ ବିରାଟ ହୃଦୟ ଅଛି" ।',
        topic: 'Climax and Resolution'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 9',
    order: 4,
    title: 'A Truly Beautiful Mind',
    titleOdia: 'ଏକ ପ୍ରକୃତରେ ସୁନ୍ଦର ମନ',
    description: 'Biographical essay exploring Albert Einstein genius, pathbreaking theories in physics, and lifelong dedication to global peace and human liberty.',
    descriptionOdia: 'ଆଲବର୍ଟ ଆଇନଷ୍ଟାଇନଙ୍କ ବୈଜ୍ଞାନିକ ପ୍ରତିଭା, ଆପେକ୍ଷିକ ତତ୍ତ୍ୱ ଏବଂ ବିଶ୍ୱ ଶାନ୍ତି ପାଇଁ ତାଙ୍କର ମହାନ ଅବଦାନ ।',
    lesson: {
      title: 'Einstein: Scientific Revolution & Global Humanism',
      titleOdia: 'ଆଇନଷ୍ଟାଇନ୍: ବୈଜ୍ଞାନିକ ବିପ୍ଳବ ଓ ମାନବିକତା',
      durationMinutes: 20,
      objectives: [
        'Examine Einstein childhood struggles with rigid regimentation in Munich schools',
        'Learn about his miracle year 1905: papers on light quanta, Brownian motion, and Special Theory of Relativity (E = mc^2)',
        'Trace his 1921 Nobel Prize in Physics for explanation of Photoelectric Effect',
        'Understand his letter to President Roosevelt regarding atomic fission and his passionate campaign for world government and disarmament'
      ],
      objectivesOdia: [
        'ମ୍ୟୁନିକ୍ ସ୍କୁଲର କଠୋର ନିୟମ ପ୍ରତି ଆଇନଷ୍ଟାଇନଙ୍କ ଅସନ୍ତୋଷ ଓ ବିଦ୍ରୋହ ବୁଝିବା',
        '୧୯୦୫ ମସିହାରେ ଆପେକ୍ଷିକତା ତତ୍ତ୍ୱ (E = mc²) ଓ ଫଟୋଇଲେକ୍ଟ୍ରିକ୍ ପ୍ରଭାବ ଉପରେ ଯୁଗାନ୍ତକାରୀ ଲେଖା ଜାଣିବା',
        '୧୯୨୧ ରେ ପଦାର୍ଥ ବିଜ୍ଞାନରେ ନୋବେଲ୍ ପୁରସ୍କାର ବିଜୟ ସମ୍ପର୍କରେ ଜାଣିବା',
        'ଆଣବିକ ବୋମାର ବିନାଶ ଦେଖି ବିଶ୍ୱ ସରକାର ଓ ଶାନ୍ତି ପାଇଁ ତାଙ୍କର ଆକୁଳ ନିବେଦନ ବୁଝିବା'
      ],
      content: 'Born in Ulm, Germany on March 14, 1879, Einstein was considered a slow learner who only began speaking at age two and a half. Repulsed by oppressive rote discipline in German schools, he moved to Zurich, Switzerland. Working as a patent examiner in Bern, he published his Special Theory of Relativity in 1905, establishing that time and space are not absolute and introducing the iconic equation E = mc^2. In 1915, his General Theory of Relativity accurately predicted light deflection by gravitational fields during a 1919 solar eclipse. When the Nazis seized power in 1933, Einstein emigrated to the United States. Aghast by the atomic bombings of Hiroshima and Nagasaki, he dedicated his remaining years to world peace, democratic federation, and nuclear disarmament, earning renown not just as a scientific visionary but as a world citizen with a "truly beautiful mind."',
      contentOdia: '୧୮୭୯ ମସିହାରେ ଜର୍ମାନୀର ଉଲ୍ମ ସହରରେ ଆଇନଷ୍ଟାଇନ୍ ଜନ୍ମଗ୍ରହଣ କରିଥିଲେ । ତାଙ୍କ ମୁଣ୍ଡ ବଡ଼ ଥିବାରୁ ଏବଂ ସେ ବିଳମ୍ବରେ କଥା କହିବାରୁ ପିଲାଦିନେ ତାଙ୍କୁ ସମସ୍ତେ ମୂର୍ଖ ଭାବୁଥିଲେ । ଜର୍ମାନୀର କଠୋର ସ୍କୁଲ୍ ତ୍ୟାଗ କରି ସେ ସୁଇଜରଲ୍ୟାଣ୍ଡରେ ପଢ଼ିଲେ ଏବଂ ବାର୍ଣ୍ଣରେ ଏକ ପେଟେଣ୍ଟ ଅଫିସରେ ଚାକିରି କଲେ । ୧୯୦୫ ରେ ସେ ଆପେକ୍ଷିକତାର ବିଶେଷ ସିଦ୍ଧାନ୍ତ ପ୍ରକାଶ କଲେ ଯେଉଁଥିରେ ପ୍ରସିଦ୍ଧ ସୂତ୍ର E = mc² ଉତ୍ପନ୍ନ ହେଲା । ୧୯୧୯ ର ସୂର୍ଯ୍ୟପରାଗ ସମୟରେ ତାଙ୍କର ସାଧାରଣ ଆପେକ୍ଷିକତା ସିଦ୍ଧାନ୍ତ ପ୍ରମାଣିତ ହେଲା । ୧୯୨୧ ରେ ସେ ନୋବେଲ ପୁରସ୍କାର ପାଇଲେ । ହିରୋସିମା ଓ ନାଗାସାକି ଉପରେ ପରମାଣୁ ବୋମା ବିସ୍ଫୋରଣ ଦେଖି ସେ ଗଭୀର ମର୍ମାହତ ହୋଇ ବିଶ୍ୱ ଶାନ୍ତି ଓ ଅସ୍ତ୍ରଶସ୍ତ୍ର ନିରସ୍ତ୍ରୀକରଣ ପାଇଁ ଜୀବନ ସମର୍ପଣ କଲେ । ତେଣୁ ତାଙ୍କ ମନକୁ ଏକ "ପ୍ରକୃତରେ ସୁନ୍ଦର ମନ" କୁହାଯାଏ ।',
      takeaways: [
        'True genius often diverges from orthodox academic conformism',
        'Special Theory of Relativity connected energy and mass: E = mc^2',
        'Nobel Prize in 1921 honored his photoelectric effect law, not relativity',
        'Einstein championed scientific responsibility toward humanitarian peace'
      ],
      takeawaysOdia: [
        'ପାରମ୍ପରିକ ଗତା his ନୁଗତିକ ଶିକ୍ଷା ବାହାରେ ମଧ୍ୟ ପ୍ରକୃତ ପ୍ରତିଭା ବିକଶିତ ହୁଏ',
        'E = mc² ଶକ୍ତି ଓ ବସ୍ତୁତ୍ୱର ସମ୍ପର୍କ ସ୍ଥାପନ କଲା',
        '୧୯୨୧ ରେ ଫଟୋଇଲେକ୍ଟ୍ରିକ୍ ପ୍ରଭାବ ପାଇଁ ତାଙ୍କୁ ନୋବେଲ୍ ପୁରସ୍କାର ମିଳିଥିଲା',
        'ସେ ବିଜ୍ଞାନକୁ ମାନବ କଲ୍ୟାଣ ଓ ଶାନ୍ତି ପାଇଁ ବ୍ୟବହାର କରିବାକୁ ଆହ୍ୱାନ ଦେଇଥିଲେ'
      ]
    },
    quiz: [
      {
        question: 'Which famous equation connects mass and energy in Einstein Special Theory of Relativity?',
        questionOdia: 'ଆଇନଷ୍ଟାଇନଙ୍କ ଆପେକ୍ଷିକତା ତତ୍ତ୍ୱରେ ବସ୍ତୁତ୍ୱ ଓ ଶକ୍ତି ମଧ୍ୟରେ କେଉଁ ସୂତ୍ର ସମ୍ପର୍କ ସ୍ଥାପନ କରେ?',
        options: ['F = ma', 'E = mc^2', 'v = u + at', 'P = V * I'],
        optionsOdia: ['F = ma', 'E = mc²', 'v = u + at', 'P = V × I'],
        correctAnswerIndex: 1,
        explanation: 'E = mc^2 states that energy equals mass multiplied by the square of the speed of light.',
        explanationOdia: 'E = mc² ସୂତ୍ର ଶକ୍ତି ଏବଂ ବସ୍ତୁତ୍ୱର ପାରସ୍ପରିକ ରୂପାନ୍ତରଣ ଦର୍ଶାଏ ।',
        topic: 'Relativity Theory'
      },
      {
        question: 'Why did Einstein emigrate to the United States in 1933?',
        questionOdia: '୧୯୩୩ ମସିହାରେ ଆଇନଷ୍ଟାଇନ୍ କାହିଁକି ଜର୍ମାନୀ ଛାଡ଼ି ଆମେରିକା ଚାଲିଗଲେ?',
        options: [
          'To teach at Oxford University',
          'Adolf Hitler and Nazis had come to power in Germany',
          'He was offered the US presidency',
          'His Swiss patent office transferred him'
        ],
        optionsOdia: [
          'ଅକ୍ସଫୋର୍ଡରେ ପଢ଼ାଇବା ପାଇଁ',
          'ଜର୍ମାନୀରେ ହିଟଲର ଓ ନାଜିମାନେ କ୍ଷମତାକୁ ଆସିଥିଲେ',
          'ଆମେରିକାର ରାଷ୍ଟ୍ରପତି ପଦ ପାଇଁ',
          'ସୁଇସ୍ ଅଫିସ ତାଙ୍କୁ ବଦଳି କରିଥିଲା'
        ],
        correctAnswerIndex: 1,
        explanation: 'Being of Jewish heritage and an outspoken pacifist, Einstein fled when the fascist Nazi regime rose.',
        explanationOdia: 'ଜର୍ମାନୀରେ ନାଜି ଶାସକ ହିଟଲର କ୍ଷମତାକୁ ଆସି ଯିହୂଦୀମାନଙ୍କ ଉପରେ ଅତ୍ୟାଚାର ଆରମ୍ଭ କରିବାରୁ ସେ ଆମେରିକା ପଳାଇଲେ ।',
        topic: 'Historical Context'
      },
      {
        question: 'Why is Albert Einstein remembered as a "world citizen" with a beautiful mind?',
        questionOdia: 'ଆଇନଷ୍ଟାଇନଙ୍କୁ କାହିଁକି ଏକ ସୁନ୍ଦର ମନ ଥିବା "ବିଶ୍ୱ ନାଗରିକ" ଭାବେ ମନେ ରଖାଯାଏ?',
        options: [
          'Because he traveled to every country',
          'Because he championed world peace, nuclear disarmament, and democracy alongside science',
          'Because he spoke eight languages fluently',
          'Because he owned international patents'
        ],
        optionsOdia: [
          'ସେ ସବୁ ଦେଶ ଭ୍ରମଣ କରିଥିଲେ',
          'ବିଜ୍ଞାନ ସହିତ ସେ ବିଶ୍ୱ ଶାନ୍ତି, ନିରସ୍ତ୍ରୀକରଣ ଓ ଗଣତନ୍ତ୍ର ପାଇଁ ଲଢ଼ିଥିଲେ',
          'ସେ ୮ଟି ଭାଷା କହୁଥିଲେ',
          'ସେ ଅନେକ ପେଟେଣ୍ଟ ପାଇଥିଲେ'
        ],
        correctAnswerIndex: 1,
        explanation: 'He campaigned tirelessly for world government, disarmament, and universal human rights.',
        explanationOdia: 'ସେ ସାରା ଜୀବନ ଯୁଦ୍ଧ ବିରୋଧରେ, ପରମାଣୁ ନିରସ୍ତ୍ରୀକରଣ ଓ ମାନବିକତା ପାଇଁ ସ୍ୱର ଉତ୍ତୋଳନ କରିଥିଲେ ।',
        topic: 'Legacy'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 9',
    order: 5,
    title: 'Formal Letter & Article Writing',
    titleOdia: 'ଔପଚାରିକ ପତ୍ର ଓ ପ୍ରବନ୍ଧ ଲେଖନ',
    description: 'Master structure of formal letters (editor, municipal commissioner, school principal), analytical article drafting, connectives, and tone.',
    descriptionOdia: 'ସମ୍ପାଦକ ଓ ପ୍ରଶାସନିକ ଅଧିକାରୀଙ୍କୁ ଔପଚାରିକ ପତ୍ର ଲେଖିବା ନିୟମ, ପ୍ରବନ୍ଧ ରଚନା କୌଶଳ ଓ ବ୍ୟାକରଣ ।',
    lesson: {
      title: 'Formal Correspondence, Editorial Letters & Articles',
      titleOdia: 'ପତ୍ର ଲିଖନ ଓ ସମ୍ପାଦକୀୟ ରଚନା ଶୈଳୀ',
      durationMinutes: 20,
      objectives: [
        'Format formal letters: Sender address, date, receiver designation, subject, salutation, body, and complimentary close',
        'Draft letters to newspaper editors highlighting civic issues (garbage disposal, street lighting, digital divide)',
        'Structure persuasive articles: Catchy title, byline, introduction, analytical arguments with data, and constructive conclusion',
        'Apply formal vocabulary and avoid colloquialisms or informal contractions'
      ],
      objectivesOdia: [
        'ଔପଚାରିକ ପତ୍ରର ଫର୍ମାଟ୍: ପ୍ରେରକ ଠିକଣା, ତାରିଖ, ପ୍ରାପକ, ବିଷୟ, ସମ୍ବୋଧନ ଓ ଉପସଂହାର ଶିଖିବା',
        'ସମ୍ବାଦପତ୍ର ସମ୍ପାଦକଙ୍କୁ ସାମାଜିକ ସମସ୍ୟା (ପରିମଳ, ରାସ୍ତା ଆଲୋକ, ଡିଜିଟାଲ ଶିକ୍ଷା) ସମ୍ବନ୍ଧରେ ପତ୍ର ଲେଖିବା',
        'ପ୍ରବନ୍ଧ ଲେଖନ: ଆକର୍ଷଣୀୟ ଶୀର୍ଷକ, ଲେଖକ ନାମ, ଭୂମିକା, ଯୁକ୍ତିସଙ୍ଗତ ତଥ୍ୟ ଓ ସମାଧାନ ପ୍ରସ୍ତାବ',
        'ଭାଷାରେ ଗାମ୍ଭୀର୍ଯ୍ୟ ଓ ଉଚିତ ବ୍ୟାକରଣ ପ୍ରୟୋଗ କରିବା'
      ],
      content: 'Formal writing demands clarity, objectivity, and polite persuasion. In letters to the editor, open with standard phrasing: "Through the columns of your esteemed daily, I wish to draw the attention of the authorities concerned towards...". The body should follow a 3-paragraph format: (1) Introduce problem and affected population; (2) Detail repercussions, hazards, or socio-economic costs; (3) Propose concrete corrective recommendations. Do not demand the editor to solve the issue directly, but to generate public awareness. Article writing requires a striking headline, byline, topic sentence, factual elaboration with transitional connectors (furthermore, consequently, nevertheless), and an inspiring forward-looking conclusion.',
      contentOdia: 'ଔପଚାରିକ ପତ୍ରରେ ସ୍ପଷ୍ଟତା, ସମ୍ମାନ ଓ ଗଠନମୂଳକ ମତାମତ ରହିବା ଆବଶ୍ୟକ । ସମ୍ପାଦକଙ୍କୁ ପତ୍ର ଲେଖିବା ବେଳେ ପ୍ରଥମେ ସମସ୍ୟା ଉଲ୍ଲେଖ କରାଯାଏ, ଦ୍ୱିତୀୟରେ ଏହାର କୁପ୍ରଭାବ ଓ ଜନସାଧାରଣଙ୍କ ଅସୁବିଧା ବର୍ଣ୍ଣନା କରାଯାଏ ଏବଂ ଶେଷରେ ପ୍ରଶାସନର ଦୃଷ୍ଟି ଆକର୍ଷଣ ପାଇଁ ଉଚିତ ସମାଧାନ ପ୍ରସ୍ତାବ ଦିଆଯାଏ । ସମ୍ପାଦକ ସମସ୍ୟାର ସମାଧାନ କରିବେ ନାହିଁ, ବରଂ ଖବରକାଗଜ ମାଧ୍ୟମରେ ସରକାରଙ୍କ ଦୃଷ୍ଟି ଆକର୍ଷଣ କରିବେ । ପ୍ରବନ୍ଧ ଲେଖିବା ବେଳେ ଆକର୍ଷଣୀୟ ଶୀର୍ଷକ, ଲେଖକଙ୍କ ନାମ, ସମସ୍ୟାର ତଥ୍ୟଭିତ୍ତିକ ବିଶ୍ଳେଷଣ ଏବଂ ସୁଚାରୁ ସମାପ୍ତି ରହିବା ଦରକାର ।',
      takeaways: [
        'Never use contractions like don\'t, can\'t in formal letters; write do not, cannot',
        'Complimentary close: "Yours sincerely" or "Yours faithfully" (capital Y, small s/f)',
        'Subject line must be concise, underlined or bold, summarizing the core purpose',
        'Article title should be impactful without being overly verbose'
      ],
      takeawaysOdia: [
        'ଔପଚାରିକ ପତ୍ରରେ ସଂକ୍ଷିପ୍ତ ଶବ୍ଦ (don\'t, can\'t) ବଦଳରେ ପୂର୍ଣ୍ଣ ଶବ୍ଦ ବ୍ୟବହାର କରନ୍ତୁ',
        'ଉପସଂହାରରେ "Yours faithfully" ବା "Yours sincerely" ଲେଖାଯାଏ',
        'ବିଷୟ (Subject) ସର୍ବଦା ସଂକ୍ଷିପ୍ତ ଓ ସ୍ପଷ୍ଟ ହେବା ଉଚିତ',
        'ପ୍ରବନ୍ଧର ଶୀର୍ଷକ ପାଠକଙ୍କ ଧ୍ୟାନ ଆକର୍ଷଣ କରିବା ଭଳି ହେବା ଦରକାର'
      ]
    },
    quiz: [
      {
        question: 'Which of the following is the correct complimentary close for a formal letter to an editor?',
        questionOdia: 'ସମ୍ପାଦକଙ୍କୁ ଔପଚାରିକ ପତ୍ର ଲେଖିବା ବେଳେ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ସଠିକ୍ ଉପସଂହାର?',
        options: ['Your\'s truly', 'Yours faithfully', 'Yours lovingly', 'Your affectionate friend'],
        optionsOdia: ['Your\'s truly', 'Yours faithfully', 'Yours lovingly', 'Your affectionate friend'],
        correctAnswerIndex: 1,
        explanation: '"Yours faithfully" (without apostrophe in Yours) is standard formal etiquette.',
        explanationOdia: '"Yours faithfully" ହେଉଛି ସଠିକ୍ ଔପଚାରିକ ସମାପନ (ଏଥିରେ apostrophe ଲାଗେ ନାହିଁ) ।',
        topic: 'Letter Writing Etiquette'
      },
      {
        question: 'What is the primary function of the opening sentence in a letter to the editor?',
        questionOdia: 'ସମ୍ପାଦକଙ୍କୁ ପତ୍ରର ପ୍ରଥମ ଧାଡ଼ିର ମୁଖ୍ୟ ଉଦ୍ଦେଶ୍ୟ କ’ଣ?',
        options: [
          'To complain about the newspaper price',
          'To state the grievance and invoke the newspaper platform to reach authorities',
          'To introduce personal hobbies',
          'To demand the editor personally visit the site'
        ],
        optionsOdia: [
          'ଖବରକାଗଜ ଦାମ୍ ବିଷୟରେ ଅଭିଯୋଗ କରିବା',
          'ସମସ୍ୟା ଉପସ୍ଥାପନ କରି ପ୍ରଶାସନର ଦୃଷ୍ଟି ଆକର୍ଷଣ କରିବା',
          'ନିଜ ରୁଚି ବିଷୟରେ କହିବା',
          'ସମ୍ପାଦକଙ୍କୁ ଡାକିବା'
        ],
        correctAnswerIndex: 1,
        explanation: 'It states the issue through the newspaper columns to awaken concerned civic authorities.',
        explanationOdia: 'ଏହା ଖବରକାଗଜ ସ୍ତମ୍ଭ ମାଧ୍ୟମରେ ପ୍ରଶାସନ ଓ ଜନସାଧାରଣଙ୍କ ଦୃଷ୍ଟି ଆକର୍ଷଣ କରେ ।',
        topic: 'Opening Conventions'
      },
      {
        question: 'In article writing, what immediately follows the headline/title?',
        questionOdia: 'ପ୍ରବନ୍ଧ ଲେଖିବା ସମୟରେ ଶୀର୍ଷକ ପରେ ତୁରନ୍ତ କ’ଣ ଲେଖାଯାଏ?',
        options: ['Sender address', 'Byline (writer name)', 'Date and pincode', 'Bibliography'],
        optionsOdia: ['ପ୍ରେରକ ଠିକଣା', 'ବାଇଲାଇନ୍ (ଲେଖକଙ୍କ ନାମ)', 'ତାରିଖ ଓ ପିନ୍‌କୋଡ୍', 'ଗ୍ରନ୍ଥସୂଚୀ'],
        correctAnswerIndex: 1,
        explanation: 'The byline giving the name or designation of the author follows directly under the title.',
        explanationOdia: 'ଶୀର୍ଷକ ତଳେ ଲେଖକଙ୍କ ନାମ (Byline) ଲେଖାଯାଏ ।',
        topic: 'Article Structure'
      }
    ]
  },

  // ---------------------------------------------------------
  // SOCIAL SCIENCE (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'SST',
    classLevel: 'Class 9',
    order: 1,
    title: 'India: Size and Location',
    titleOdia: 'ଭାରତ: ଆକାର ଓ ଅବସ୍ଥିତି',
    description: 'Geographical location of India in Northern and Eastern hemispheres, latitudinal and longitudinal extents, Standard Meridian (82 deg 30 min E), and neighboring nations.',
    descriptionOdia: 'ଭାରତର ଭୌଗୋଳିକ ଅବସ୍ଥିତି, ଅକ୍ଷାଂଶ ଓ ଦ୍ରାଘିମା ବିସ୍ତାର, ପ୍ରମାଣିକ ମଧ୍ୟାହ୍ନ ରେଖା (୮୨°୩୦′ ପୂର୍ବ) ଏବଂ ପଡ଼ୋଶୀ ଦେଶ ।',
    lesson: {
      title: 'Geographic Extent, Time Zones & Maritime Neighborhood',
      titleOdia: 'ଭାରତର ଭୌଗୋଳିକ ବିସ୍ତୃତି, ସମୟ ନିର୍ଣ୍ଣୟ ଓ ପଡ଼ୋଶୀ ଦେଶ',
      durationMinutes: 22,
      objectives: [
        'Identify India location in Northern Hemisphere between 8 deg 4 min N to 37 deg 6 min N latitudes and 68 deg 7 min E to 97 deg 25 min E longitudes',
        'Trace the Tropic of Cancer (23 deg 30 min N) dividing India into almost two equal halves across 8 states',
        'Explain why 82 deg 30 min E passing through Mirzapur is selected as the Standard Meridian of India (IST = UTC + 5:30)',
        'Map land boundaries (15,200 km) and maritime borders with Sri Lanka (Palk Strait) and Maldives'
      ],
      objectivesOdia: [
        'ଭାରତର ଅବସ୍ଥିତି: ୮°୪′ ଉତ୍ତର ରୁ ୩୭°୬′ ଉତ୍ତର ଅକ୍ଷାଂଶ ଏବଂ ୬୮°୭′ ପୂର୍ବ ରୁ ୯୭°୨୫′ ପୂର୍ବ ଦ୍ରାଘିମା ବୁଝିବା',
        'କର୍କଟ କ୍ରାନ୍ତି (୨୩°୩୦′ ଉତ୍ତର) ଭାରତକୁ ଦୁଇ ଭାଗରେ ବିଭକ୍ତ କରି ୮ଟି ରାଜ୍ୟ ଦେଇ ଯାଇଛି ବୋଲି ଜାଣିବା',
        'ମିର୍ଜାପୁର ଦେଇ ଯାଇଥିବା ୮୨°୩୦′ ପୂର୍ବ ଦ୍ରାଘିମାକୁ ଭାରତୀୟ ପ୍ରମାଣିକ ସମୟ (IST) ଭାବେ ଗ୍ରହଣ କରିବାର କାରଣ ବୁଝିବା',
        'ଭାରତର ସ୍ଥଳ ସୀମାନ୍ତ (୧୫,୨୦୦ କିମି), ଉପକୂଳ ରେଖା ଏବଂ ପାକ୍ ପ୍ରଣାଳୀ ଦ୍ୱାରା ଶ୍ରୀଲଙ୍କା ସହ ବିଭାଜନ ଜାଣିବା'
      ],
      content: 'India is an ancient civilization occupying a central location between East and West Asia. Entirely situated in the Northern and Eastern Hemispheres, mainland India stretches from latitude 8 deg 4 min N to 37 deg 6 min N, and longitude 68 deg 7 min E to 97 deg 25 min E. With an area of 3.28 million square kilometers, India accounts for 2.4% of total world geographical area, ranking as the seventh-largest nation. A longitudinal expanse of nearly 30 degrees creates a two-hour time difference between Arunachal Pradesh in the east and Gujarat in the west. To avoid administrative confusion, the local time of 82 deg 30 min E longitude passing through Mirzapur in Uttar Pradesh is accepted as the Indian Standard Time (IST). India shares land borders with Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, and Myanmar.',
      contentOdia: 'ଭାରତ ଏସିଆ ମହାଦେଶର ଦକ୍ଷିଣ ଭାଗରେ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସ୍ଥାନ ଅଧିକାର କରିଛି । ସମଗ୍ର ଭାରତ ଉତ୍ତର ଓ ପୂର୍ବ ଗୋଲାର୍ଦ୍ଧରେ ଅବସ୍ଥିତ । ଏହାର ମୁଖ୍ୟ ଭୂଭାଗ ୮°୪′ ଉତ୍ତର ରୁ ୩୭°୬′ ଉତ୍ତର ଅକ୍ଷାଂଶ ଏବଂ ୬୮°୭′ ପୂର୍ବ ରୁ ୯୭°୨୫′ ପୂର୍ବ ଦ୍ରାଘିମା ମଧ୍ୟରେ ବିସ୍ତୃତ । ଭାରତର ମୋଟ କ୍ଷେତ୍ରଫଳ ପ୍ରାୟ ୩୨.୮ ଲକ୍ଷ ବର୍ଗ କିଲୋମିଟର, ଯାହା ପୃଥିବୀର ମୋଟ ଭୌଗୋଳିକ କ୍ଷେତ୍ରର ୨.୪% ଏବଂ ଭାରତ ବିଶ୍ୱର ସପ୍ତମ ବୃହତ୍ତମ ଦେଶ । ଅରୁଣାଚଳ ପ୍ରଦେଶ ଓ ଗୁଜରାଟ ମଧ୍ୟରେ ଦ୍ରାଘିମାଗତ ବ୍ୟବଧାନ ଯୋଗୁଁ ସୂର୍ଯ୍ୟୋଦୟରେ ପ୍ରାୟ ୨ ଘଣ୍ଟାର ପାର୍ଥକ୍ୟ ଥାଏ । ତେଣୁ ଉତ୍ତର ପ୍ରଦେଶର ମିର୍ଜାପୁର ଦେଇ ଯାଇଥିବା ୮୨°୩୦′ ପୂର୍ବ ଦ୍ରାଘିମାକୁ ଭାରତୀୟ ପ୍ରମାଣିକ ମଧ୍ୟାହ୍ନ ରେଖା (IST) ଭାବେ ଗ୍ରହଣ କରାଯାଇଛି ।',
      takeaways: [
        'India is the 7th largest country by area (3.28 million sq km)',
        'Tropic of Cancer (23 deg 30 min N) passes through 8 Indian states',
        'Standard Meridian 82 deg 30 min E is GMT + 5 hours 30 minutes',
        'Palk Strait and Gulf of Mannar separate India from Sri Lanka'
      ],
      takeawaysOdia: [
        'ଭାରତ କ୍ଷେତ୍ରଫଳ ଦୃଷ୍ଟିରୁ ବିଶ୍ୱର ସପ୍ତମ ବୃହତ୍ତମ ଦେଶ',
        'କର୍କଟ କ୍ରାନ୍ତି ଭାରତର ୮ଟି ରାଜ୍ୟ ଦେଇ ଗତି କରିଛି',
        'ଭାରତୀୟ ପ୍ରମାଣିକ ସମୟ (IST) ଗ୍ରୀନଉଇଚ୍ ସମୟଠାରୁ ୫ ଘଣ୍ଟା ୩୦ ମିନିଟ୍ ଆଗୁଆ',
        'ପାକ୍ ପ୍ରଣାଳୀ ଓ ମାନାର ଉପସାଗର ଭାରତ ଓ ଶ୍ରୀଲଙ୍କାକୁ ପୃଥକ କରେ'
      ]
    },
    quiz: [
      {
        question: 'Which meridian is designated as the Standard Meridian of India?',
        questionOdia: 'ଭାରତର ପ୍ରମାଣିକ ମଧ୍ୟାହ୍ନ ରେଖା ଭାବେ କେଉଁ ଦ୍ରାଘିମାକୁ ଗ୍ରହଣ କରାଯାଇଛି?',
        options: ['82 deg 30 min E', '68 deg 7 min E', '97 deg 25 min E', '23 deg 30 min N'],
        optionsOdia: ['୮୨°୩୦′ ପୂର୍ବ', '୬୮°୭′ ପୂର୍ବ', '୯୭°୨୫′ ପୂର୍ବ', '୨୩°୩୦′ ଉତ୍ତର'],
        correctAnswerIndex: 0,
        explanation: '82 deg 30 min E passing through Mirzapur (UP) sets the uniform Indian Standard Time (IST).',
        explanationOdia: '୮୨°୩୦′ ପୂର୍ବ ଦ୍ରାଘିମା ଭାରତର କେନ୍ଦ୍ରଭାଗ ଦେଇ ଯାଇଥିବାରୁ ଏହାକୁ ପ୍ରମାଣିକ ସମୟ ରେଖା କୁହାଯାଏ ।',
        topic: 'Standard Meridian'
      },
      {
        question: 'What is the time difference between sunrise in Arunachal Pradesh and Gujarat?',
        questionOdia: 'ଅରୁଣାଚଳ ପ୍ରଦେଶ ଓ ଗୁଜରାଟରେ ସୂର୍ଯ୍ୟୋଦୟ ମଧ୍ୟରେ କେତେ ସମୟର ପାର୍ଥକ୍ୟ ଥାଏ?',
        options: ['30 minutes', '1 hour', '2 hours', '3 hours'],
        optionsOdia: ['୩୦ ମିନିଟ୍', '୧ ଘଣ୍ଟା', '୨ ଘଣ୍ଟା', '୩ ଘଣ୍ଟା'],
        correctAnswerIndex: 2,
        explanation: 'A 30-degree longitudinal difference multiplied by 4 minutes per degree yields 120 minutes (2 hours).',
        explanationOdia: 'ପ୍ରାୟ ୩୦ ଡିଗ୍ରୀ ଦ୍ରାଘିମା ପାର୍ଥକ୍ୟ ହେତୁ ସୂର୍ଯ୍ୟୋଦୟରେ ପ୍ରାୟ ୨ ଘଣ୍ଟା (୧୨୦ ମିନିଟ୍) ର ପାର୍ଥକ୍ୟ ରହେ ।',
        topic: 'Longitudinal Time Difference'
      },
      {
        question: 'Which narrow channel of sea separates India from Sri Lanka?',
        questionOdia: 'ଭାରତ ଓ ଶ୍ରୀଲଙ୍କା ମଧ୍ୟରେ କେଉଁ ସଂକୀର୍ଣ୍ଣ ସାମୁଦ୍ରିକ ପ୍ରଣାଳୀ ଅବସ୍ଥିତ?',
        options: ['Suez Canal', 'Palk Strait', 'Malacca Strait', 'Bering Strait'],
        optionsOdia: ['ସୁଏଜ କେନାଲ', 'ପାକ୍ ପ୍ରଣାଳୀ (Palk Strait)', 'ମାଲାକା ପ୍ରଣାଳୀ', 'ବେରିଂ ପ୍ରଣାଳୀ'],
        correctAnswerIndex: 1,
        explanation: 'The Palk Strait and Gulf of Mannar form the marine boundary separating India and Sri Lanka.',
        explanationOdia: 'ପାକ୍ ପ୍ରଣାଳୀ ଭାରତ ଓ ଶ୍ରୀଲଙ୍କା ମଧ୍ୟରେ ଅବସ୍ଥିତ ।',
        topic: 'Maritime Boundaries'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 9',
    order: 2,
    title: 'Physical Features of India',
    titleOdia: 'ଭାରତର ଭୌଗୋଳିକ ସ୍ୱରୂପ',
    description: 'Plate tectonics, Himalayan mountains, Northern Plains (bhabar, terai, bhangar, khadar), Peninsular plateau, Indian Desert, Coastal Plains, and Islands.',
    descriptionOdia: 'ପ୍ଲେଟ୍ ଟେକଟୋନିକ୍ସ, ହିମାଳୟ ପର୍ବତମାଳା, ଉତ୍ତର ଭାରତ ସମତଳ ଭୂମି, ଉପଦ୍ୱୀପୀୟ ମାଳଭୂମି, ମରୁଭୂମି, ଉପକୂଳ ସମତଳ ଓ ଦ୍ୱୀପପୁଞ୍ଜ ।',
    lesson: {
      title: 'Physiographic Divisions & Geological Foundations',
      titleOdia: 'ପ୍ରାକୃତିକ ବିଭାଗ ଓ ଭୌଗୋଳିକ ଗଠନ',
      durationMinutes: 25,
      objectives: [
        'Explain Plate Tectonic theory and collision of Indo-Australian plate with Eurasian plate forming Himalayas',
        'Classify Himalayas: Himadri (Greater), Himachal (Lesser), and Shiwaliks (Outer)',
        'Analyze Northern Plains formation by Indus, Ganga, and Brahmaputra depositional systems',
        'Distinguish Western Ghats (continuous, higher) from Eastern Ghats (discontinuous, eroded by eastward rivers)'
      ],
      objectivesOdia: [
        'ପ୍ଲେଟ୍ ଟେକଟୋନିକ୍ସ ତତ୍ତ୍ୱ ଓ ଭାରତୀୟ-ଅଷ୍ଟ୍ରେଲୀୟ ପ୍ଲେଟ୍ ୟୁରେସୀୟ ପ୍ଲେଟ୍ ସହ ଧକ୍କା ହୋଇ ହିମାଳୟ ସୃଷ୍ଟି ବୁଝିବା',
        'ହିମାଳୟର ତିନୋଟି ଶ୍ରେଣୀ: ହିମାଦ୍ରି, ହିମାଚଳ ଓ ଶିବାଲିକ୍ ବୁଝିବା',
        'ସିନ୍ଧୁ, ଗଙ୍ଗା ଓ ବ୍ରହ୍ମପୁତ୍ର ନଦୀ ଦ୍ୱାରା ଉତ୍ତର ଭାରତର ପଟୁମାଟି ସମତଳ ଭୂମି ଗଠନ ଜାଣିବା',
        'ପଶ୍ଚିମଘାଟ (ଅବିରତ, ଉଚ୍ଚ) ଓ ପୂର୍ବଘାଟ (ଖଣ୍ଡିତ, ନଦୀ ଦ୍ୱାରା କଟାଯାଇଥିବା) ପର୍ବତର ତୁଳନା କରିବା'
      ],
      content: 'India displays immense geological variety. The Peninsular Plateau is one of the ancient landmasses formed from Gondwanaland, composed of crystalline igneous and metamorphic rocks. In contrast, the Himalayas are young fold mountains formed when the Indo-Australian plate drifted northwards and collided with the Eurasian plate, crumpling the sediments of the ancient Tethys Sea. The Himalayas consist of three parallel longitudinal ranges: Great Himalayas or Himadri (average elevation 6,000 m), Lesser Himalayas or Himachal, and Outer Himalayas or Shiwaliks. The Northern Plains were formed by alluvial silt deposits brought down by the Indus, Ganga, and Brahmaputra rivers. Soil zones in the plains include Bhabar (pebble belt), Terai (marshy tract), Bhangar (older alluvium), and Khadar (fertile new flood alluvium).',
      contentOdia: 'ଭାରତର ଭୂପ୍ରକୃତି ବିବିଧତାରେ ପରିପୂର୍ଣ୍ଣ । ଉପଦ୍ୱୀପୀୟ ମାଳଭୂମି ଗଣ୍ଡୱାନାଲ୍ୟାଣ୍ଡର ଏକ ପ୍ରାଚୀନ ଅଂଶ, ଯାହା ଆଗ୍ନେୟ ଓ ରୂପାନ୍ତରିତ ଶିଳା ଦ୍ୱାରା ଗଠିତ । ଅପରପକ୍ଷରେ, ହିମାଳୟ ଏକ ନବୀନ ଭଙ୍ଗିଳ ପର୍ବତ, ଯାହା ଟେଥିସ୍ ସାଗରର ପଟୁମାଟି ଉପରେ ଚାପ ପଡ଼ି ସୃଷ୍ଟି ହୋଇଛି । ହିମାଳୟରେ ତିନୋଟି ସମାନ୍ତର ଶ୍ରେଣୀ ଅଛି: ହିମାଦ୍ରି (ସର୍ବୋଚ୍ଚ, ୬୦୦୦ ମିଟର ହାରାହାରି ଉଚ୍ଚତା), ହିମାଚଳ ଏବଂ ଶିବାଲିକ୍ । ଉତ୍ତର ସମତଳ ଭୂମି ଗଙ୍ଗା, ସିନ୍ଧୁ ଓ ବ୍ରହ୍ମପୁତ୍ର ନଦୀର ପଟୁମାଟି ଦ୍ୱାରା ସୃଷ୍ଟି । ନୂଆ ପଟୁମାଟିକୁ "ଖାଦର" ଏବଂ ପୁରୁଣା ପଟୁମାଟିକୁ "ଭାଙ୍ଗର" କୁହାଯାଏ ।',
      takeaways: [
        'Himalayas are young fold mountains; Peninsular plateau is ancient shield rock',
        'Himadri is the highest Himalayan range containing Mount Everest and Kanchenjunga',
        'Khadar is annually renewed fertile floodplain soil; Bhangar contains calcareous kankar',
        'Anamudi (2,695 m) is the highest peak in the Western Ghats and Peninsular India'
      ],
      takeawaysOdia: [
        'ହିମାଳୟ ନବୀନ ଭଙ୍ଗିଳ ପର୍ବତ ଏବଂ ଦାକ୍ଷିଣାତ୍ୟ ମାଳଭୂମି ଏକ ପ୍ରାଚୀନ ଶିଳାଖଣ୍ଡ',
        'ହିମାଦ୍ରି ଶ୍ରେଣୀରେ ଏଭରେଷ୍ଟ ଓ କାଞ୍ଚନଜଙ୍ଘା ଭଳି ସର୍ବୋଚ୍ଚ ଶୃଙ୍ଗ ଅବସ୍ଥିତ',
        'ଖାଦର ହେଉଛି ପ୍ରତିବର୍ଷ ବନ୍ୟା ଦ୍ୱାରା ନୂତନ ହେଉଥିବା ଅତ୍ୟନ୍ତ ଉର୍ବର ମାଟି',
        'ଆନାମୁଡ଼ି (୨,୬୯୫ ମିଟର) ଦକ୍ଷିଣ ଭାରତ ତଥା ପଶ୍ଚିମଘାଟର ସର୍ବୋଚ୍ଚ ଶୃଙ୍ଗ'
      ]
    },
    quiz: [
      {
        question: 'Which is the northernmost and highest continuous range of the Himalayas?',
        questionOdia: 'ହିମାଳୟର ସର୍ବୋତ୍ତର ତଥା ସର୍ବୋଚ୍ଚ ଅବିରତ ପର୍ବତଶ୍ରେଣୀ କେଉଁଟି?',
        options: ['Shiwaliks', 'Himadri (Great Himalayas)', 'Himachal', 'Purvanchal'],
        optionsOdia: ['ଶିବାଲିକ୍', 'ହିମାଦ୍ରି (ବୃହତ୍ ହିମାଳୟ)', 'ହିମାଚଳ', 'ପୂର୍ବାଞ୍ଚଳ'],
        correctAnswerIndex: 1,
        explanation: 'Himadri has an average altitude of 6,000 meters and contains the loftiest snowbound peaks.',
        explanationOdia: 'ହିମାଦ୍ରି ହେଉଛି ସର୍ବୋଚ୍ଚ ଶ୍ରେଣୀ ଯାହାର ହାରାହାରି ଉଚ୍ଚତା ୬୦୦୦ ମିଟର ।',
        topic: 'Himalayan Ranges'
      },
      {
        question: 'What is the fertile, newer alluvium deposited on floodplains known as?',
        questionOdia: 'ପ୍ରତିବର୍ଷ ବନ୍ୟା ଦ୍ୱାରା ଜମା ହେଉଥିବା ନୂତନ ଉର୍ବର ପଟୁମାଟିକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Bhangar', 'Bhabar', 'Khadar', 'Terai'],
        optionsOdia: ['ଭାଙ୍ଗର', 'ଭାବର', 'ଖାଦର (Khadar)', 'ତେରାଇ'],
        correctAnswerIndex: 2,
        explanation: 'Khadar is the newly deposited fertile alluvium replenished annually by river floods.',
        explanationOdia: 'ନୂଆ ପଟୁମାଟିକୁ ଖାଦର କୁହାଯାଏ ଯାହା ଚାଷ ପାଇଁ ଅତି ଉତ୍କୃଷ୍ଟ ।',
        topic: 'Alluvial Soils'
      },
      {
        question: 'Which is the highest peak in Peninsular India and the Western Ghats?',
        questionOdia: 'ଦକ୍ଷିଣ ଭାରତ ତଥା ପଶ୍ଚିମଘାଟ ପର୍ବତମାଳାର ସର୍ବୋଚ୍ଚ ଶୃଙ୍ଗ କେଉଁଟି?',
        options: ['Doda Betta', 'Anamudi', 'Mahendragiri', 'Kalsubai'],
        optionsOdia: ['ଦୋଦାବେଟା', 'ଆନାମୁଡ଼ି (Anamudi)', 'ମହେନ୍ଦ୍ରଗିରି', 'କାଲସୁବାଇ'],
        correctAnswerIndex: 1,
        explanation: 'Anamudi in Kerala stands at 2,695 meters, making it the highest peak of South India.',
        explanationOdia: 'କେରଳରେ ଥିବା ଆନାମୁଡ଼ି (୨,୬୯୫ ମିଟର) ଦକ୍ଷିଣ ଭାରତର ସର୍ବୋଚ୍ଚ ଶୃଙ୍ଗ ।',
        topic: 'Peninsular Peaks'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 9',
    order: 3,
    title: 'The French Revolution',
    titleOdia: 'ଫରାସୀ ବିପ୍ଳବ',
    description: 'Estates system in 18th-century France, storming of the Bastille (1789), Declaration of the Rights of Man, Reign of Terror (Robespierre), and global impact.',
    descriptionOdia: '୧୮ଶ ଶତାବ୍ଦୀର ଫ୍ରାନ୍ସରେ ସାମାଜିକ ବ୍ୟବସ୍ଥା, ବାସ୍ତିଲ ଦୁର୍ଗ ପତନ (୧୭୮୯), ମାନବ ଅଧିକାର ଘୋଷଣା, ରୋବସପିୟରଙ୍କ ଆତଙ୍କ ରାଜୁତି ଓ ବିଶ୍ୱବ୍ୟାପୀ ପ୍ରଭାବ ।',
    lesson: {
      title: 'Liberty, Equality, Fraternity: The 1789 Uprising',
      titleOdia: 'ସ୍ୱାଧୀନତା, ସମାନତା, ଭ୍ରାତୃତ୍ୱ: ୧୭୮୯ ର ଫରାସୀ ବିପ୍ଳବ',
      durationMinutes: 25,
      objectives: [
        'Examine the unfair Three Estates structure: Clergy (First), Nobility (Second), Commoners (Third paying all taxes)',
        'Understand triggers: bankruptcy under Louis XVI, bread shortages, and storming of the Bastille on July 14, 1789',
        'Analyze Declaration of the Rights of Man and of the Citizen',
        'Evaluate the Jacobin Reign of Terror under Robespierre and rise of Napoleon Bonaparte'
      ],
      objectivesOdia: [
        'ତିନୋଟି ଇଷ୍ଟେଟ୍ ବ୍ୟବସ୍ଥା: ଯାଜକ, ସମ୍ଭ୍ରାନ୍ତ ଓ ସାଧାରଣ ନାଗରିକଙ୍କ ଉପରେ କର ବୋଝ ବୁଝିବା',
        'ରାଜା ଷୋଡ଼ଶ ଲୁଇଙ୍କ ଆର୍ଥିକ ସଙ୍କଟ, ଖାଦ୍ୟାଭାବ ଓ ୧୪ ଜୁଲାଇ ୧୭୮୯ ରେ ବାସ୍ତିଲ ଦୁର୍ଗ ଧ୍ୱଂସ ଜାଣିବା',
        'ମାନବ ଓ ନାଗରିକ ଅଧିକାର ଘୋଷଣାନାମାର ଗୁରୁତ୍ୱ ବୁଝିବା',
        'ରୋବସପିୟରଙ୍କ ଜାକୋବିନ୍ ଆତଙ୍କ ରାଜୁତି ଓ ନେପୋଲିଅନ୍ ବୋନାପାର୍ଟଙ୍କ ଅଭ୍ୟୁଦୟ ଅନୁଶୀଳନ କରିବା'
      ],
      content: 'In 1789, France was governed by King Louis XVI of the Bourbon dynasty. French society was divided into three unequal estates: the First Estate (Clergy) and Second Estate (Nobility) enjoyed feudal privileges and paid zero taxes, while the Third Estate (peasants, artisans, professionals) bore the entire tax burden (Tithe to church and Taille to state). Heavy war debts and crop failures led to famine. On July 14, 1789, an agitated Parisian crowd stormed the medieval royal fortress-prison Bastille, symbolizing despotism. The National Assembly adopted the historic "Declaration of the Rights of Man and of the Citizen," proclaiming that men are born free and equal in rights. Later, Maximilien Robespierre instituted the Reign of Terror (1793-1794) executing dissenters via guillotine. The revolution propagated the enduring ideals of Liberty, Equality, and Fraternity across Europe and the colonies.',
      contentOdia: '୧୭୮୯ ରେ ଫ୍ରାନ୍ସରେ ବୋରବନ୍ ବଂଶର ରାଜା ଷୋଡ଼ଶ ଲୁଇ ଶାସନ କରୁଥିଲେ । ସମାଜ ତିନୋଟି ଇଷ୍ଟେଟ୍‌ରେ ବିଭକ୍ତ ଥିଲା: ପ୍ରଥମ ଇଷ୍ଟେଟ୍ (ଯାଜକ) ଓ ଦ୍ୱିତୀୟ ଇଷ୍ଟେଟ୍ (ସମ୍ଭ୍ରାନ୍ତ) ସମସ୍ତ ସୁବିଧା ପାଉଥିଲେ ଏବଂ କୌଣସି ଟିକସ ଦେଉନଥିଲେ । ସମସ୍ତ ଟିକସ ତୃତୀୟ ଇଷ୍ଟେଟ୍ (ଚାଷୀ, ବ୍ୟବସାୟୀ, ଶ୍ରମିକ) ଦେଉଥିଲେ । ଦେଶର ଋଣ ଓ ରୁଟିର ଅଭାବ ଯୋଗୁଁ ଲୋକେ ବିଦ୍ରୋହ କଲେ । ୧୪ ଜୁଲାଇ ୧୭୮୯ ରେ ଉତ୍ତ୍ୟକ୍ତ ଜନତା ସ୍ୱେଚ୍ଛାଚାରୀ ରାଜତନ୍ତ୍ରର ପ୍ରତୀକ "ବାସ୍ତିଲ୍ ଦୁର୍ଗ" ଧ୍ୱଂସ କଲେ । ଜାତୀୟ ସଭା "ମାନବ ଓ ନାଗରିକ ଅଧିକାର ଘୋଷଣାପତ୍ର" ଗ୍ରହଣ କଲା । ପରବର୍ତ୍ତୀ ସମୟରେ ରୋବସପିୟରଙ୍କ ନେତୃତ୍ୱରେ ଆତଙ୍କର ରାଜୁତି ଚାଲିଲା । ଏହି ବିପ୍ଳବ ସାରା ବିଶ୍ୱକୁ "ସ୍ୱାଧୀନତା, ସମାନତା ଓ ଭ୍ରାତୃତ୍ୱ" ର ବାର୍ତ୍ତା ଦେଇଥିଲା ।',
      takeaways: [
        'Storming of the Bastille on July 14, 1789 marked the outbreak of the French Revolution',
        'Third Estate carried all tax obligations while First and Second enjoyed hereditary exemptions',
        'Tithe was direct tax paid to church; Taille was direct tax paid to state',
        'Revolutionary ideals: Liberty, Equality, Fraternity inspired modern democratic constitutions'
      ],
      takeawaysOdia: [
        '୧୪ ଜୁଲାଇ ୧୭୮୯ ରେ ବାସ୍ତିଲ୍ ଦୁର୍ଗ ପତନ ଫରାସୀ ବିପ୍ଳବର ଶୁଭାରମ୍ଭ ଥିଲା',
        'ତୃତୀୟ ଇଷ୍ଟେଟ୍ କେବଳ ସମସ୍ତ ସରକାରୀ ଓ ଧାର୍ମିକ କର ପୈଠ କରୁଥିଲା',
        'ଟାଇଥ୍ (Tithe) ଚର୍ଚ୍ଚକୁ ଏବଂ ଟାଇଲେ (Taille) ରାଜାଙ୍କୁ ଦିଆଯାଉଥିବା ଟିକସ ଥିଲା',
        '"ସ୍ୱାଧୀନତା, ସମାନତା ଓ ଭ୍ରାତୃତ୍ୱ" ସମଗ୍ର ବିଶ୍ୱର ଗଣତନ୍ତ୍ରକୁ ଦିଗଦର୍ଶନ ଦେଲା'
      ]
    },
    quiz: [
      {
        question: 'On which date was the medieval fortress-prison of Bastille stormed by the people of Paris?',
        questionOdia: 'ପ୍ୟାରିସର ଜନତା କେଉଁ ତାରିଖରେ ବାସ୍ତିଲ୍ ଦୁର୍ଗ ଆକ୍ରମଣ କରି ଧ୍ୱଂସ କରିଥିଲେ?',
        options: ['July 14, 1789', 'August 15, 1789', 'May 5, 1789', 'January 21, 1793'],
        optionsOdia: ['୧୪ ଜୁଲାଇ ୧୭୮୯', '୧୫ ଅଗଷ୍ଟ ୧୭୮୯', '୫ ମେ ୧୭୮୯', '୨୧ ଜାନୁଆରୀ ୧୭୯୩'],
        correctAnswerIndex: 0,
        explanation: 'July 14, 1789 is commemorated as France National Day (Bastille Day).',
        explanationOdia: '୧୪ ଜୁଲାଇ ୧୭୮୯ ରେ ବାସ୍ତିଲ୍ ଦୁର୍ଗ ପତନ ହୋଇଥିଲା, ଯାହା ଆଜି ଫ୍ରାନ୍ସର ଜାତୀୟ ଦିବସ ।',
        topic: 'Bastille Day'
      },
      {
        question: 'Which estate in 18th-century French society bore the entire burden of paying taxes?',
        questionOdia: '୧୮ଶ ଶତାବ୍ଦୀର ଫ୍ରାନ୍ସରେ କେଉଁ ଶ୍ରେଣୀ ସମସ୍ତ ପ୍ରକାର ଟିକସ ଦେଉଥିଲା?',
        options: ['First Estate (Clergy)', 'Second Estate (Nobility)', 'Third Estate (Commoners)', 'Royal Family'],
        optionsOdia: ['ପ୍ରଥମ ଇଷ୍ଟେଟ୍ (ଯାଜକ)', 'ଦ୍ୱିତୀୟ ଇଷ୍ଟେଟ୍ (ସମ୍ଭ୍ରାନ୍ତ)', 'ତୃତୀୟ ଇଷ୍ଟେଟ୍ (ସାଧାରଣ ଜନତା)', 'ରାଜ ପରିବାର'],
        correctAnswerIndex: 2,
        explanation: 'The Third Estate (98% of population) paid tithes, taille, and indirect taxes without political rights.',
        explanationOdia: 'ତୃତୀୟ ଇଷ୍ଟେଟ୍ ସମସ୍ତ ଟିକସ ଦେଉଥିଲା କିନ୍ତୁ କୌଣସି ରାଜନୈତିକ ଅଧିକାର ପାଉନଥିଲା ।',
        topic: 'Three Estates'
      },
      {
        question: 'Who led the Reign of Terror (1793-1794) using the guillotine against political adversaries?',
        questionOdia: '୧୭୯୩-୧୭୯୪ ରେ ଗିଲୋଟିନ୍ ବ୍ୟବହାର କରି ଆତଙ୍କର ରାଜୁତି କିଏ ଚଳାଇଥିଲେ?',
        options: ['Napoleon Bonaparte', 'Maximilien Robespierre', 'Jean-Jacques Rousseau', 'King Louis XVI'],
        optionsOdia: ['ନେପୋଲିଅନ୍ ବୋନାପାର୍ଟ', 'ମାକ୍ସିମିଲିଅନ୍ ରୋବସପିୟର', 'ଜିନ୍-ଜାକ୍ ରୁଷୋ', 'ରାଜା ଷୋଡ଼ଶ ଲୁଇ'],
        correctAnswerIndex: 1,
        explanation: 'Robespierre, head of the Jacobin government, led the Reign of Terror until his own execution.',
        explanationOdia: 'ରୋବସପିୟର ଜାକୋବିନ୍ ଶାସନ କାଳରେ ବିରୋଧୀଙ୍କୁ ହତ୍ୟା କରି ଆତଙ୍କ ରାଜୁତି ଚଳାଇଥିଲେ ।',
        topic: 'Reign of Terror'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 9',
    order: 4,
    title: 'What is Democracy? Why Democracy?',
    titleOdia: 'ଗଣତନ୍ତ୍ର କ’ଣ? କାହିଁକି ଗଣତନ୍ତ୍ର?',
    description: 'Definition of democracy, major features, free and fair elections, rule of law, arguments for and against democracy, and broader meanings.',
    descriptionOdia: 'ଗଣତନ୍ତ୍ରର ସଂଜ୍ଞା, ପ୍ରମୁଖ ବୈଶିଷ୍ଟ୍ୟ, ନିରପେକ୍ଷ ନିର୍ବାଚନ, ଆଇନର ଶାସନ, ଗଣତନ୍ତ୍ରର ସପକ୍ଷ ଓ ବିପକ୍ଷ ଯୁକ୍ତି ଏବଂ ବ୍ୟାପକ ଅର୍ଥ ।',
    lesson: {
      title: 'Democratic Principles, Rule of Law & Accountability',
      titleOdia: 'ଗଣତାନ୍ତ୍ରିକ ନୀତି, ଆଇନର ଶାସନ ଓ ଉତ୍ତରଦାୟିତ୍ୱ',
      durationMinutes: 22,
      objectives: [
        'Formulate minimal definition: Democracy is a form of government in which rulers are elected by the people',
        'Analyze non-democratic examples: Military coup of General Musharraf in Pakistan, single-party control in China, PRI manipulation in Mexico',
        'State core features: Universal Adult Suffrage, one person one vote one value, constitutional limits, independent judiciary',
        'Debate merits of democracy: Enhances citizen dignity, improves decision quality, accommodates diversity, corrects its own errors'
      ],
      objectivesOdia: [
        'ସର୍ବନିମ୍ନ ସଂଜ୍ଞା: ଗଣତନ୍ତ୍ର ହେଉଛି ଲୋକଙ୍କ ଦ୍ୱାରା ନିର୍ବାଚିତ ଶାସକଙ୍କ ଏକ ଶାସନ ବ୍ୟବସ୍ଥା',
        'ଅଣ-ଗଣତାନ୍ତ୍ରିକ ଉଦାହରଣ: ପାକିସ୍ତାନରେ ମୁଶାରଫଙ୍କ ସାମରିକ ବିଦ୍ରୋହ, ଚୀନର ଏକଦଳୀୟ ଶାସନ ଓ ମେକ୍ସିକୋର ଅସାଧୁ ନିର୍ବାଚନ ବୁଝିବା',
        'ମୌଳିକ ବୈଶିଷ୍ଟ୍ୟ: ସାର୍ବଜନୀନ ସାବାଳକ ମତାଧିକାର, ଜଣେ ବ୍ୟକ୍ତି ଗୋଟିଏ ଭୋଟ୍ ସମାନ ମୂଲ୍ୟ ଓ ଆଇନର ଶାସନ ଜାଣିବା',
        'ଗଣତନ୍ତ୍ରର ଲାଭ: ନାଗରିକର ମର୍ଯ୍ୟାଦା ବୃଦ୍ଧି, ଉନ୍ନତ ନିଷ୍ପତ୍ତି, ବିଭିନ୍ନତା ମଧ୍ୟରେ ସମନ୍ୱୟ ଓ ନିଜ ଭୁଲ ସୁଧାରିବାର ସୁଯୋଗ'
      ],
      content: 'Democracy originates from the Greek words "demos" (people) and "kratia" (rule). Abraham Lincoln famously described it as "government of the people, by the people, for the people." Simply holding elections does not make a regime democratic; elections must offer a genuine choice between alternatives under free and fair competition where those currently in power face real risk of losing. Each adult citizen must have one vote, and every vote must carry one equal value. A democratic government rules within limits set by constitutional law and citizens rights. While democracy can involve delays and political competition, it remains the best known governance model because it improves decision quality through consultation, allows peaceful resolution of social conflicts, respects human dignity, and provides institutional mechanisms to correct its own mistakes.',
      contentOdia: 'ଗ୍ରୀକ୍ ଶବ୍ଦ "ଡେମୋସ୍" (ଲୋକ) ଓ "କ୍ରାଟିଆ" (ଶାସନ) ରୁ ଡେମୋକ୍ରାସି ବା ଗଣତନ୍ତ୍ର ଶବ୍ଦର ଉତ୍ପତ୍ତି । ଆବ୍ରାହମ ଲିଙ୍କନଙ୍କ ଭାଷାରେ: "ଗଣତନ୍ତ୍ର ହେଉଛି ଲୋକଙ୍କର, ଲୋକଙ୍କ ଦ୍ୱାରା ଓ ଲୋକଙ୍କ ପାଇଁ ଶାସନ" । କେବଳ ନାମକୁ ମାତ୍ର ନିର୍ବାଚନ କଲେ ଦେଶ ଗଣତାନ୍ତ୍ରିକ ହୁଏ ନାହିଁ; ନିର୍ବାଚନ ମୁକ୍ତ, ଅବାଧ ଓ ନିରପେକ୍ଷ ହେବା ଉଚିତ ଯେଉଁଠାରେ ଶାସକ ଦଳ ହାରିବାର ସମ୍ଭାବନା ଥାଏ । ପ୍ରତ୍ୟେକ ସାବାଳକ ନାଗରିକଙ୍କର ଗୋଟିଏ ଭୋଟ୍ ଓ ପ୍ରତ୍ୟେକ ଭୋଟର ମୂଲ୍ୟ ସମାନ ହେବା ଦରକାର । ସରକାର ସମ୍ବିଧାନ ଓ ମୌଳିକ ଅଧିକାରର ପରିସୀମା ମଧ୍ୟରେ କାର୍ଯ୍ୟ କରିବା ଉଚିତ । ଗଣତନ୍ତ୍ରରେ ଆଲୋଚନା ଯୋଗୁଁ ନିଷ୍ପତ୍ତିରେ ବିଳମ୍ବ ହେଲେ ମଧ୍ୟ ଏହା ନାଗରିକଙ୍କ ମର୍ଯ୍ୟାଦା ରକ୍ଷା କରେ ଏବଂ ଭୁଲ୍ ସୁଧାରିବାର ସୁଯୋଗ ଦିଏ ।',
      takeaways: [
        'Core principle: Ultimate political power resides with the voting electorate',
        'Universal Adult Franchise: One person, one vote, one value',
        'Democracy is superior because it offers self-correcting institutional mechanisms',
        'Consultation and debate prevent arbitrary authoritarian blunders'
      ],
      takeawaysOdia: [
        'ମୁଖ୍ୟ ନୀତି: ଚୂଡ଼ାନ୍ତ କ୍ଷମତା ଜନସାଧାରଣ ବା ଭୋଟରଙ୍କ ହାତରେ ଥାଏ',
        'ସାର୍ବଜନୀନ ସାବାଳକ ମତାଧିକାର: ଜଣେ ବ୍ୟକ୍ତି, ଗୋଟିଏ ଭୋଟ୍, ସମାନ ମୂଲ୍ୟ',
        'ଗଣତନ୍ତ୍ର ସର୍ବୋତ୍କୃଷ୍ଟ କାରଣ ଏହା ନିଜର ଭୁଲ୍ ସୁଧାରିବାକୁ ସୁଯୋଗ ଦିଏ',
        'ବିଚାରବିମର୍ଶ ଏକଛତ୍ରବାଦୀ ନିଷ୍ପତ୍ତିରୁ ରକ୍ଷା କରେ'
      ]
    },
    quiz: [
      {
        question: 'Which of the following is an indispensable feature of a genuine democracy?',
        questionOdia: 'ପ୍ରକୃତ ଗଣତନ୍ତ୍ର ପାଇଁ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଅପରିହାର୍ଯ୍ୟ ବୈଶିଷ୍ଟ୍ୟ?',
        options: [
          'Military commanders hold ultimate veto power',
          'Free and fair elections where incumbents have a real chance of losing',
          'Only property owners are permitted to vote',
          'The ruling party cannot be challenged by law'
        ],
        optionsOdia: [
          'ସେନାଧ୍ୟକ୍ଷଙ୍କ ହାତରେ ଚୂଡ଼ାନ୍ତ କ୍ଷମତା',
          'ମୁକ୍ତ ଓ ନିରପେକ୍ଷ ନିର୍ବାଚନ ଯେଉଁଠାରେ ଶାସକ ଦଳ ପରାଜିତ ହେବାର ସମ୍ଭାବନା ଥାଏ',
          'କେବଳ ଧନୀ ଲୋକଙ୍କୁ ଭୋଟ୍ ଅଧିକାର',
          'ଶାସକ ଦଳକୁ କେହି ଆହ୍ୱାନ ଦେଇପାରିବେ ନାହିଁ'
        ],
        correctAnswerIndex: 1,
        explanation: 'Genuine democracy requires genuine contestation through fair, competitive elections.',
        explanationOdia: 'ନିର୍ବାଚନ ମୁକ୍ତ ଓ ନିରପେକ୍ଷ ହେବା ଆବଶ୍ୟକ ଯେଉଁଥିରେ ସରକାର ବଦଳିବାର ପ୍ରକୃତ ସୁଯୋଗ ଥାଏ ।',
        topic: 'Features of Democracy'
      },
      {
        question: 'What does the democratic electoral principle "One person, one vote, one value" signify?',
        questionOdia: 'ଗଣତନ୍ତ୍ରରେ "ଜଣେ ବ୍ୟକ୍ତି, ଗୋଟିଏ ଭୋଟ୍, ଗୋଟିଏ ମୂଲ୍ୟ" ର ଅର୍ଥ କ’ଣ?',
        options: [
          'Each citizen must vote once every calendar month',
          'Every adult citizen has one vote and all votes carry equal weight',
          'Wealthy voters votes are multiplied by their income bracket',
          'Only one candidate can run in each constituency'
        ],
        optionsOdia: [
          'ପ୍ରତି ମାସରେ ଥରେ ଭୋଟ୍ ଦେବା',
          'ପ୍ରତ୍ୟେକ ସାବାଳକଙ୍କର ଗୋଟିଏ ଭୋଟ୍ ଏବଂ ସବୁ ଭୋଟର ସମାନ ମୂଲ୍ୟ ଥାଏ',
          'ଧନୀ ଲୋକଙ୍କ ଭୋଟର ମୂଲ୍ୟ ଅଧିକ',
          'ଗୋଟିଏ ଆସନରେ କେବଳ ଜଣେ ପ୍ରାର୍ଥୀ ଛିଡ଼ା ହେବେ'
        ],
        correctAnswerIndex: 1,
        explanation: 'Universal adult franchise guarantees that every citizen vote carries the same political weight.',
        explanationOdia: 'ପ୍ରତ୍ୟେକ ନାଗରିକଙ୍କ ଭୋଟର ରାଜନୈତିକ ମୂଲ୍ୟ ସମାନ ଅଟେ ।',
        topic: 'Electoral Equality'
      },
      {
        question: 'Why is democratic decision-making considered qualitatively superior to autocracy?',
        questionOdia: 'ଏକଛତ୍ରବାଦ ତୁଳନାରେ ଗଣତାନ୍ତ୍ରିକ ନିଷ୍ପତ୍ତି କାହିଁକି ଉନ୍ନତ ବିବେଚିତ ହୁଏ?',
        options: [
          'It is completed within seconds',
          'It involves widespread consultation, debate, and consensus building',
          'It requires no public discussion',
          'It ignores minority points of view'
        ],
        optionsOdia: [
          'ଏହା କିଛି ସେକେଣ୍ଡରେ ହୋଇଯାଏ',
          'ଏଥିରେ ବ୍ୟାପକ ଆଲୋଚନା, ବିତର୍କ ଓ ସହମତି ସାମିଲ ଥାଏ',
          'ଏଥିରେ କୌଣସି ଜନସାଧାରଣ ଆଲୋଚନା ଦରକାର ନାହିଁ',
          'ଏହା ସଂଖ୍ୟାଲଘୁଙ୍କ ମତକୁ ଉପେକ୍ଷା କରେ'
        ],
        correctAnswerIndex: 1,
        explanation: 'Consultations reduce rash mistakes and integrate diverse perspectives into balanced policy.',
        explanationOdia: 'ପାରସ୍ପରିକ ବିଚାରବିମର୍ଶ ଓ ଆଲୋଚନା ଯୋଗୁଁ ଭୁଲ ନିଷ୍ପତ୍ତିର ସମ୍ଭାବନା କମିଯାଏ ।',
        topic: 'Merits of Democracy'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 9',
    order: 5,
    title: 'The Story of Village Palampur',
    titleOdia: 'ପାଲମପୁର ଗ୍ରାମର କାହାଣୀ',
    description: 'Factors of production (Land, Labour, Physical Capital, Human Capital), farming practices, Green Revolution, and non-farm economic activities in rural India.',
    descriptionOdia: 'ଉତ୍ପାଦନର ୪ଟି ଉପାଦାନ (ଜମି, ଶ୍ରମ, ଭୌତିକ ପୁଞ୍ଜି, ମାନବ ସମ୍ବଳ), ସବୁଜ ବିପ୍ଳବ ଏବଂ ଗ୍ରାମୀଣ ଅଣ-କୃଷି ଅର୍ଥନୀତି ।',
    lesson: {
      title: 'Production Factors, Green Revolution & Rural Economy',
      titleOdia: 'ଉତ୍ପାଦନର ଉପାଦାନ, ସବୁଜ ବିପ୍ଳବ ଓ ଗ୍ରାମୀଣ ଜୀବିକା',
      durationMinutes: 20,
      objectives: [
        'Identify 4 factors of production: Land, Labour, Physical Capital (fixed & working), and Human Capital',
        'Analyze traditional farming versus modern agricultural techniques introduced during the Green Revolution (HYV seeds, chemical fertilizers, tubewells)',
        'Evaluate environmental fallout: groundwater depletion and loss of soil fertility',
        'Examine non-farm activities in rural India: dairy, small-scale manufacturing, transport, shopkeeping'
      ],
      objectivesOdia: [
        'ଉତ୍ପାଦନର ୪ଟି ମୁଖ୍ୟ ଉପାଦାନ: ଜମି, ଶ୍ରମ, ଭୌତିକ ପୁଞ୍ଜି (ସ୍ଥାୟୀ ଓ କାର୍ଯ୍ୟକାରୀ) ଏବଂ ମାନବ ପୁଞ୍ଜି ବୁଝିବା',
        'ପାରମ୍ପରିକ ଚାଷ ଏବଂ ସବୁଜ ବିପ୍ଳବର ଆଧୁନିକ ଚାଷ ପ୍ରଣାଳୀ (HYV ବିହନ, ରାସାୟନିକ ସାର, କୂଅ) ର ତୁଳନା କରିବା',
        'ଆଧୁନିକ ଚାଷର ପରିବେଶୀୟ କ୍ଷତି: ଭୂତଳ ଜଳସ୍ତର ହ୍ରାସ ଓ ମାଟିର ଉର୍ବରତା ହ୍ରାସ ବୁଝିବା',
        'ଗ୍ରାମାଞ୍ଚଳର ଅଣ-କୃଷି କାର୍ଯ୍ୟ: ଦୁଗ୍ଧ ବ୍ୟବସାୟ, କ୍ଷୁଦ୍ର ଶିଳ୍ପ, ଦୋକାନ ଓ ପରିବହନ ଜାଣିବା'
      ],
      content: 'Palampur is a hypothetical village illustrating rural production systems. Farming is the main economic activity. Production requires four essential factors: (1) Land (fixed natural resource); (2) Labour (people who perform the work); (3) Physical Capital comprising Fixed Capital (tools, machines, buildings lasting years) and Working Capital (raw materials and money in hand used up during production); and (4) Human Capital (knowledge and enterprise combining land, labour, and physical capital). In the late 1960s, the Green Revolution introduced High Yielding Varieties (HYV) of wheat and rice along with tubewell irrigation, chemical fertilizers, and pesticides, dramatically multiplying crop yields. However, excessive chemical use led to soil degradation and depletion of subterranean water tables. Non-farm activities include dairy, jaggery processing, small retail, and transport.',
      contentOdia: 'ପାଲମପୁର ଏକ କାଳ୍ପନିକ ଗାଁ ଯାହା ମାଧ୍ୟମରେ ଭାରତର ଗ୍ରାମୀଣ ଅର୍ଥବ୍ୟବସ୍ଥା ବୁଝାଯାଇଛି । ଏଠାରେ ଚାଷ ମୁଖ୍ୟ ଜୀବିକା । ଉତ୍ପାଦନ ପାଇଁ ୪ଟି ଉପାଦାନ ଦରକାର: (୧) ଜମି, (୨) ଶ୍ରମ, (୩) ଭୌତିକ ପୁଞ୍ଜି (ସ୍ଥାୟୀ ପୁଞ୍ଜି ଯଥା ଟ୍ରାକ୍ଟର, ମେସିନ୍ ଏବଂ କାର୍ଯ୍ୟକାରୀ ପୁଞ୍ଜି ଯଥା ନଗଦ ଟଙ୍କା ଓ କଞ୍ଚାମାଲ), ଏବଂ (୪) ମାନବ ପୁଞ୍ଜି (ଜ୍ଞାନ ଓ କୌଶଳ) । ୧୯୬୦ ଦଶକ ଶେଷ ଭାଗରେ ସବୁଜ ବିପ୍ଳବ ଆସିବା ପରେ ଉନ୍ନତ କିସମର ବିହନ (HYV Seeds), ରାସାୟନିକ ସାର, କୀଟନାଶକ ଓ ଜଳସେଚନ ଦ୍ୱାରା ଧାନ ଓ ଗହମ ଉତ୍ପାଦନ ବହୁଗୁଣ ବଢ଼ିଲା । ମାତ୍ର ଏହା ଦ୍ୱାରା ଭୂତଳ ଜଳସ୍ତର କମିଲା ଓ ମାଟିର ପ୍ରାକୃତିକ ଉର୍ବରତା ନଷ୍ଟ ହେଲା । ଏହା ବ୍ୟତୀତ ଗାଁରେ ଦୁଗ୍ଧ ଚାଷ, ଗୁଡ଼ ତିଆରି, ଦୋକାନ ଓ ପରିବହନ ଭଳି ଅଣ-କୃଷି କାର୍ଯ୍ୟ ମଧ୍ୟ ଚାଲେ ।',
      takeaways: [
        'Four factors of production: Land, Labour, Physical Capital, Human Capital',
        'Physical Capital divides into Fixed Capital (machines) and Working Capital (cash, seeds)',
        'Green Revolution revolutionized grain production using HYV seeds and irrigation',
        'Over-fertilization and groundwater over-extraction threaten ecological sustainability'
      ],
      takeawaysOdia: [
        'ଉତ୍ପାଦନର ୪ଟି ମୁଖ୍ୟ ଉପାଦାନ: ଜମି, ଶ୍ରମ, ଭୌତିକ ପୁଞ୍ଜି ଓ ମାନବ ପୁଞ୍ଜି',
        'ସ୍ଥାୟୀ ପୁଞ୍ଜି ବହୁ ବର୍ଷ ଧରି ବ୍ୟବହୃତ ହୁଏ; କାର୍ଯ୍ୟକାରୀ ପୁଞ୍ଜି ଖର୍ଚ୍ଚ ହୋଇଯାଏ',
        'ସବୁଜ ବିପ୍ଳବ HYV ବିହନ ବ୍ୟବହାର କରି ଖାଦ୍ୟଶସ୍ୟ ଉତ୍ପାଦନରେ ବିପ୍ଳବ ଆଣିଲା',
        'ଅତ୍ୟଧିକ ରାସାୟନିକ ସାର ଓ ଭୂତଳ ଜଳ ବ୍ୟବହାର ପରିବେଶ ପ୍ରତି ବିପଦ'
      ]
    },
    quiz: [
      {
        question: 'Which of the following is considered an example of Working Capital in production?',
        questionOdia: 'ଉତ୍ପାଦନ କ୍ଷେତ୍ରରେ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି କାର୍ଯ୍ୟକାରୀ ପୁଞ୍ଜି (Working Capital) ର ଉଦାହରଣ?',
        options: ['Tractor', 'Tube-well pump', 'Raw materials and money in hand', 'Factory building'],
        optionsOdia: ['ଟ୍ରାକ୍ଟର', 'ଭୂତଳ କୂଅ ପମ୍ପ', 'କଞ୍ଚାମାଲ ଓ ହାତରେ ଥିବା ନଗଦ ଟଙ୍କା', 'କାରଖାନା କୋଠା'],
        correctAnswerIndex: 2,
        explanation: 'Working capital gets used up during the production process, unlike durable fixed capital.',
        explanationOdia: 'କଞ୍ଚାମାଲ ଓ ନଗଦ ଟଙ୍କା ଉତ୍ପାଦନ ପ୍ରକ୍ରିୟାରେ ଖର୍ଚ୍ଚ ହୋଇଯାଏ, ତେଣୁ ଏହା କାର୍ଯ୍ୟକାରୀ ପୁଞ୍ଜି ।',
        topic: 'Factors of Production'
      },
      {
        question: 'What was the major breakthrough introduced in Indian agriculture during the Green Revolution?',
        questionOdia: 'ସବୁଜ ବିପ୍ଳବ ସମୟରେ ଭାରତୀୟ କୃଷିରେ କେଉଁ ମୁଖ୍ୟ ବିପ୍ଳବ ଆରମ୍ଭ ହୋଇଥିଲା?',
        options: [
          'Organic composting only',
          'High Yielding Varieties (HYV) seeds with irrigation and chemical fertilizers',
          'Complete ban on mechanisation',
          'Elimination of electricity'
        ],
        optionsOdia: [
          'କେବଳ ଜୈବିକ ଖତ',
          'ଅଧିକ ଅମଳକ୍ଷମ (HYV) ବିହନ, ଜଳସେଚନ ଓ ରାସାୟନିକ ସାରର ପ୍ରୟୋଗ',
          'ଯନ୍ତ୍ରପାତି ଉପରେ କଟକଣା',
          'ବିଦ୍ୟୁତ୍ ବ୍ୟବହାର ବନ୍ଦ'
        ],
        correctAnswerIndex: 1,
        explanation: 'HYV seeds multiplied harvest yields per hectare dramatically for wheat and rice.',
        explanationOdia: 'HYV ବିହନ, ସାର ଓ ଜଳସେଚନ ଦ୍ୱାରା ଅମଳରେ ବିରାଟ ବୃଦ୍ଧି ଘଟିଥିଲା ।',
        topic: 'Green Revolution'
      },
      {
        question: 'Which is the most common non-farm economic activity carried out in Village Palampur?',
        questionOdia: 'ପାଲମପୁର ଗାଁରେ ସବୁଠାରୁ ଲୋକପ୍ରିୟ ଅଣ-କୃଷି କାର୍ଯ୍ୟ କେଉଁଟି?',
        options: ['Software programming', 'Dairy farming', 'Automobile assembly', 'Heavy shipbuilding'],
        optionsOdia: ['ସଫ୍ଟୱେର୍ ପ୍ରୋଗ୍ରାମିଂ', 'ଦୁଗ୍ଧ ଚାଷ (Dairy)', 'ମୋଟରଗାଡ଼ି ନିର୍ମାଣ', 'ଜାହାଜ ନିର୍ମାଣ'],
        correctAnswerIndex: 1,
        explanation: 'Dairy farming where villagers sell buffalo milk to neighbouring market Raiganj is prevalent.',
        explanationOdia: 'ଦୁଗ୍ଧ ବ୍ୟବସାୟ ହେଉଛି ପାଲମପୁରର ପ୍ରଧାନ ଅଣ-କୃଷି ଜୀବିକା ।',
        topic: 'Non-farm Activities'
      }
    ]
  },

  // ---------------------------------------------------------
  // COMPUTER SCIENCE (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'CS',
    classLevel: 'Class 9',
    order: 1,
    title: 'Computer Architecture & Operating Systems',
    titleOdia: 'କମ୍ପ୍ୟୁଟର ସଂରଚନା ଓ ଅପରେଟିଂ ସିଷ୍ଟମ୍',
    description: 'Von Neumann architecture, CPU functional units (ALU, CU, Registers), memory hierarchy (cache, RAM, ROM, secondary storage), OS functions, and boot process.',
    descriptionOdia: 'ଭନ୍ ନିଉମ୍ୟାନ୍ ସଂରଚନା, CPU ର କାର୍ଯ୍ୟକାରୀ ଅଂଶ (ALU, CU, ରେଜିଷ୍ଟର), ମେମୋରୀ ସ୍ତର, ଅପରେଟିଂ ସିଷ୍ଟମର ଭୂମିକା ଓ ବୁଟିଂ ପ୍ରକ୍ରିୟା ।',
    lesson: {
      title: 'Von Neumann Model, Memory Hierarchy & OS Management',
      titleOdia: 'ଭନ୍ ନିଉମ୍ୟାନ୍ ମଡେଲ୍, ମେମୋରୀ ବ୍ୟବସ୍ଥା ଓ ଅପରେଟିଂ ସିଷ୍ଟମ୍',
      durationMinutes: 24,
      objectives: [
        'Understand Von Neumann stored-program architecture: CPU, Memory, I/O systems',
        'Examine CPU components: Arithmetic Logic Unit (ALU), Control Unit (CU), Registers, and system buses',
        'Differentiate primary memory (volatile RAM, non-volatile ROM) and high-speed cache memory',
        'Analyze Operating System responsibilities: process scheduling, memory allocation, file systems, and hardware virtualization'
      ],
      objectivesOdia: [
        'ଭନ୍ ନିଉମ୍ୟାନ୍ ସଂରକ୍ଷିତ-ପ୍ରୋଗ୍ରାମ ସିଦ୍ଧାନ୍ତ: CPU, ମେମୋରୀ ଓ I/O ବୁଝିବା',
        'CPU ର ଅଂଶ: ALU (ଗାଣିତିକ ଯୁକ୍ତି ଅଂଶ), CU (ନିୟନ୍ତ୍ରଣ ଅଂଶ), ରେଜିଷ୍ଟର ଓ ବସ୍ ବୁଝିବା',
        'ପ୍ରାଥମିକ ମେମୋରୀ (ଅସ୍ଥାୟୀ RAM, ସ୍ଥାୟୀ ROM) ଓ ହାଇ-ସ୍ପିଡ୍ କ୍ୟାଚ୍ ମେମୋରୀର ପାର୍ଥକ୍ୟ ଜାଣିବା',
        'ଅପରେଟିଂ ସିଷ୍ଟମର କାର୍ଯ୍ୟ: ପ୍ରୋସେସ୍ ମ୍ୟାନେଜମେଣ୍ଟ, ମେମୋରୀ ଆବଣ୍ଟନ, ଫାଇଲ୍ ସିଷ୍ଟମ୍'
      ],
      content: 'Modern computers follow the Von Neumann architecture proposed in 1945, where program instructions and data reside in a shared memory address space. The Central Processing Unit (CPU) executes instructions in a cyclic Fetch-Decode-Execute pipeline. Inside the CPU, the Arithmetic Logic Unit (ALU) performs arithmetic calculations and logical comparisons; the Control Unit (CU) coordinates data traffic and timing signals; and internal Registers provide ultrafast temporary storage. Cache memory sits between the CPU and RAM to minimize memory latency. The Operating System (OS) is the system software intermediary that manages hardware resources, schedules processes, allocates physical RAM, controls peripheral device drivers, and provides user interfaces (CLI or GUI).',
      contentOdia: 'ଆଧୁନିକ କମ୍ପ୍ୟୁଟର ୧୯୪୫ ର ଭନ୍ ନିଉମ୍ୟାନ୍ ମଡେଲ୍ ଅନୁସରଣ କରେ, ଯେଉଁଥିରେ ପ୍ରୋଗ୍ରାମ ନିର୍ଦ୍ଦେଶ ଓ ତଥ୍ୟ ସମାନ ମେମୋରୀରେ ସଂରକ୍ଷିତ ରହେ । ସିପିୟୁ (CPU) ତିନୋଟି ମୁଖ୍ୟ ପର୍ଯ୍ୟାୟରେ କାର୍ଯ୍ୟ କରେ: Fetch, Decode, Execute । CPU ମଧ୍ୟରେ ALU ଗାଣିତିକ ଓ ଯୁକ୍ତିସଙ୍ଗତ କାର୍ଯ୍ୟ କରେ, CU ଅନ୍ୟାନ୍ୟ ଅଙ୍ଗକୁ ନିୟନ୍ତ୍ରଣ କରେ ଏବଂ ରେଜିଷ୍ଟର ଅତି କ୍ଷିପ୍ର ଗତିରେ ତଥ୍ୟ ସାଇତି ରଖେ । କ୍ୟାଚ୍ (Cache) ମେମୋରୀ CPU ଏବଂ RAM ମଧ୍ୟରେ ଗତି ପାର୍ଥକ୍ୟ ଦୂର କରେ । ଅପରେଟିଂ ସିଷ୍ଟମ୍ (ଯଥା Windows, Linux) ହାର୍ଡୱେର୍ ଓ ୟୁଜର୍ ମଧ୍ୟରେ ସେତୁ ସଦୃଶ କାର୍ଯ୍ୟ କରି ମେମୋରୀ, ପ୍ରୋସେସ୍ ଓ ଫାଇଲ୍ ପରିଚାଳନା କରେ ।',
      takeaways: [
        'Von Neumann bottleneck occurs when bus throughput limits data transfer between CPU and RAM',
        'RAM is volatile (loses data on power down); ROM retains firmware (BIOS/UEFI)',
        'Cache memory L1/L2/L3 uses ultrafast SRAM technology',
        'Operating system manages hardware through device drivers and kernel routines'
      ],
      takeawaysOdia: [
        'CPU ଓ RAM ମଧ୍ୟରେ ଡାଟା ପ୍ରବାହକୁ Von Neumann ବଟଲନେକ୍ କୁହାଯାଏ',
        'RAM ଅସ୍ଥାୟୀ (ବିଦ୍ୟୁତ୍ କଟିଲେ ତଥ୍ୟ ନଷ୍ଟ ହୁଏ); ROM ସ୍ଥାୟୀ (BIOS ସାଇତି ରଖେ)',
        'କ୍ୟାଚ୍ ମେମୋରୀ SRAM ଟେକ୍ନୋଲୋଜି ବ୍ୟବହାର କରି ଅତି ଦ୍ରୁତ କାମ କରେ',
        'କର୍ଣ୍ଣେଲ୍ (Kernel) ହେଉଛି ଅପରେଟିଂ ସିଷ୍ଟମର କେନ୍ଦ୍ରବିନ୍ଦୁ'
      ]
    },
    quiz: [
      {
        question: 'Which component of the CPU is responsible for carrying out mathematical calculations and comparisons?',
        questionOdia: 'CPU ର କେଉଁ ଅଂଶ ଗାଣିତିକ ହିସାବ ଓ ତୁଳନାତ୍ମକ କାର୍ଯ୍ୟ ସମ୍ପାଦନ କରେ?',
        options: ['Control Unit (CU)', 'Arithmetic Logic Unit (ALU)', 'Secondary Storage', 'BIOS'],
        optionsOdia: ['କଣ୍ଟ୍ରୋଲ୍ ୟୁନିଟ୍ (CU)', 'ଆରିଥମେଟିକ୍ ଲଜିକ୍ ୟୁନିଟ୍ (ALU)', 'ଦ୍ୱିତୀୟକ ମେମୋରୀ', 'BIOS'],
        correctAnswerIndex: 1,
        explanation: 'The ALU executes binary arithmetic (addition, subtraction) and logical tests (AND, OR, NOT).',
        explanationOdia: 'ALU ଗାଣିତିକ ଓ ଲଜିକାଲ୍ ନିଷ୍ପତ୍ତି ନେବା ପାଇଁ ଦାୟୀ ଅଟେ ।',
        topic: 'CPU Components'
      },
      {
        question: 'Why is RAM categorized as "volatile" memory?',
        questionOdia: 'RAM କୁ କାହିଁକି "ଅସ୍ଥାୟୀ" (Volatile) ମେମୋରୀ କୁହାଯାଏ?',
        options: [
          'It can explode when heated',
          'Its stored contents vanish immediately when electrical power is switched off',
          'It only accepts encrypted data',
          'It cannot be overwritten'
        ],
        optionsOdia: [
          'ଏହା ଗରମ ହେଲେ ନଷ୍ଟ ହୁଏ',
          'ବିଦ୍ୟୁତ୍ ସରବରାହ ବନ୍ଦ ହେଲେ ଏହାର ତଥ୍ୟ ସଙ୍ଗେ ସଙ୍ଗେ ଲିଭିଯାଏ',
          'ଏହା କେବଳ ଏନକ୍ରିପ୍ଟେଡ୍ ଡାଟା ରଖେ',
          'ଏଥିରେ ପୁନଃ ଲେଖାଯାଇପାରିବ ନାହିଁ'
        ],
        correctAnswerIndex: 1,
        explanation: 'RAM requires constant electrical refresh to retain capacitor charge; losing power erases state.',
        explanationOdia: 'କମ୍ପ୍ୟୁଟର ବନ୍ଦ ହେଲେ RAM ରେ ଥିବା ସମସ୍ତ ତଥ୍ୟ ମିଳାଇଯାଏ ।',
        topic: 'Memory Types'
      },
      {
        question: 'Which memory resides directly on or adjacent to the CPU die to provide fastest access?',
        questionOdia: 'ସବୁଠାରୁ ଦ୍ରୁତ ତଥ୍ୟ ପ୍ରଦାନ ପାଇଁ CPU ର ଅତି ନିକଟରେ କେଉଁ ମେମୋରୀ ରହିଥାଏ?',
        options: ['Hard Disk Drive', 'Cache Memory', 'Flash Drive', 'DVD-ROM'],
        optionsOdia: ['ହାର୍ଡ ଡିସ୍କ', 'କ୍ୟାଚ୍ ମେମୋରୀ (Cache Memory)', 'ପେନଡ୍ରାଇଭ୍', 'DVD-ROM'],
        correctAnswerIndex: 1,
        explanation: 'Cache memory stores frequently used CPU instructions to circumvent slow RAM bus latency.',
        explanationOdia: 'କ୍ୟାଚ୍ ମେମୋରୀ CPU ର ସବୁଠାରୁ ପାଖରେ ରହି ଅତି ଦ୍ରୁତ ବେଗରେ ତଥ୍ୟ ଯୋଗାଏ ।',
        topic: 'Cache Memory'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 9',
    order: 2,
    title: 'Introduction to Python Programming',
    titleOdia: 'ପାଇଥନ୍ ପ୍ରୋଗ୍ରାମିଂର ପରିଚୟ',
    description: 'Python syntax, variables, primitive data types (int, float, str, bool), type casting, arithmetic, relational, and logical operators, print() and input().',
    descriptionOdia: 'ପାଇଥନ୍ ରୀତି, ଭେରିଏବୁଲ୍, ଡାଟା ଟାଇପ୍ (int, float, str, bool), ଅପରେଟର୍ସ ଏବଂ print() ଓ input() ର ବ୍ୟବହାର ।',
    lesson: {
      title: 'Python Fundamentals, Variables & Operators',
      titleOdia: 'ପାଇଥନ୍ ମୌଳିକ ତତ୍ତ୍ୱ, ଭେରିଏବୁଲ୍ ଓ ଅପରେଟର୍',
      durationMinutes: 24,
      objectives: [
        'Understand Python design philosophy: readability, dynamic typing, interpreted execution created by Guido van Rossum',
        'Declare variables adhering to identifier naming conventions',
        'Manipulate basic data types: int, float, string, boolean',
        'Perform input/output and type conversions: int(input()) versus float(input())'
      ],
      objectivesOdia: [
        'ପାଇଥନ୍ ର ବିଶେଷତା: ସରଳ ବାକ୍ୟ ଗଠନ, ଇଣ୍ଟରପ୍ରିଟେଡ୍ ଭାଷା (Guido van Rossum ଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ) ବୁଝିବା',
        'ଭେରିଏବୁଲ୍ ନାମକରଣ ନିୟମ ଶିଖିବା',
        'ପ୍ରାଥମିକ ଡାଟା ଟାଇପ୍: int, float, str, bool ବ୍ୟବହାର କରିବା',
        'input() ଏବଂ print() ସହ ଟାଇପ୍ କାଷ୍ଟିଂ (Type Casting) କରି ପ୍ରୋଗ୍ରାମ ଲେଖିବା'
      ],
      content: 'Python is a high-level, interpreted, dynamically typed programming language developed in 1991. Variables do not require explicit type declarations; Python infers the type automatically at runtime. Python supports fundamental data types: int (arbitrary-precision integers), float (decimal numbers), str (Unicode characters in quotes), and bool (True or False). Operators include arithmetic (+, -, *, /, // floor division, % modulus, ** exponentiation), relational (==, !=, <, >, <=, >=), and logical (and, or, not). The built-in input() function always captures input as a string, requiring explicit casting using int() or float() for numerical operations.',
      contentOdia: 'ପାଇଥନ୍ ହେଉଛି ଏକ ସହଜ, ଇଣ୍ଟରପ୍ରିଟେଡ୍ ଓ ଉଚ୍ଚସ୍ତରୀୟ ପ୍ରୋଗ୍ରାମିଂ ଭାଷା ଯାହାକୁ ୧୯୯୧ ରେ ଗୁଇଡୋ ଭାନ୍ ରୋସୁମ୍ ତିଆରି କରିଥିଲେ । ଏଥିରେ ଭେରିଏବୁଲ୍‌ର ଟାଇପ୍ ଆଗରୁ ଘୋଷଣା କରିବା ଦରକାର ନାହିଁ; ମୂଲ୍ୟ ବସାଇବା କ୍ଷଣି ପାଇଥନ୍ ଆପେ ଆପେ ଚିହ୍ନିନିଏ । ମୁଖ୍ୟ ଡାଟା ଟାଇପ୍ ହେଉଛି int (ପୂର୍ଣ୍ଣସଂଖ୍ୟା), float (ଦଶମିକ), str (ଶବ୍ଦ ବା ଅକ୍ଷର) ଏବଂ bool (True/False) । ଗାଣିତିକ ଅପରେଟର୍: // (ଭାଗଫଳ), % (ଭାଗଶେଷ), ** (ଘାତ) । input() ଫଙ୍କସନ୍ ସର୍ବଦା ଷ୍ଟ୍ରିଙ୍ଗ୍ (str) ହିସାବରେ ଡାଟା ଗ୍ରହଣ କରୁଥିବାରୁ ଗାଣିତିକ କାମ ପାଇଁ int() ବା float() ଦ୍ୱାରା ପରିବର୍ତ୍ତନ (Type casting) କରିବାକୁ ପଡ଼େ ।',
      takeaways: [
        'Python uses indentation (whitespace) instead of curly braces to define code blocks',
        'Exponentiation operator is ** (e.g. 2 ** 3 = 8)',
        'Floor division // returns integer quotient without decimals (e.g. 7 // 2 = 3)',
        'input() returns str by default; use int(input()) for integer entry'
      ],
      takeawaysOdia: [
        'ପାଇଥନ୍ କୋଡ୍ ବ୍ଲକ୍ ଚିହ୍ନିବା ପାଇଁ ବନ୍ଧନୀ ବଦଳରେ ଇଣ୍ଡେଣ୍ଟେସନ୍ (Indentation) ବ୍ୟବହାର କରେ',
        '** ଅପରେଟର୍ ଘାତ (Power) ପାଇଁ ବ୍ୟବହୃତ ହୁଏ (୨ ** ୩ = ୮)',
        '// ଅପରେଟର୍ ଦଶମିକ ଛାଡ଼ି କେବଳ ପୂର୍ଣ୍ଣ ଭାଗଫଳ ଦିଏ (୭ // ୨ = ୩)',
        'input() ସର୍ବଦା ଷ୍ଟ୍ରିଙ୍ଗ୍ ଫେରାଏ; ସଂଖ୍ୟା ପାଇଁ int(input()) ଲେଖାଯାଏ'
      ]
    },
    quiz: [
      {
        question: 'What is the output of the Python expression: 17 // 4 ?',
        questionOdia: 'ପାଇଥନ୍ ଏକ୍ସପ୍ରେସନ୍: ୧୭ // ୪ ର ମୂଲ୍ୟ କେତେ ହେବ?',
        options: ['4.25', '4', '1', '17'],
        optionsOdia: ['୪.୨୫', '୪', '୧', '୧୭'],
        correctAnswerIndex: 1,
        explanation: '// is the floor division operator which discards fractional remainders, yielding 4.',
        explanationOdia: '// ହେଉଛି ଫ୍ଲୋର ଡିଭିଜନ, ଯାହା ଦଶମିକ ଛାଡ଼ି ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ୪ ପ୍ରଦାନ କରେ ।',
        topic: 'Python Operators'
      },
      {
        question: 'Which of the following is an invalid variable identifier in Python?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପାଇଥନ୍ ରେ ଏକ ଅବୈଧ (Invalid) ଭେରିଏବୁଲ୍ ନାମ?',
        options: ['student_name', '_score', '2nd_attempt', 'totalMarks'],
        optionsOdia: ['student_name', '_score', '2nd_attempt', 'totalMarks'],
        correctAnswerIndex: 2,
        explanation: 'Variable names in Python cannot begin with a numeric digit.',
        explanationOdia: 'ପାଇଥନ୍ ରେ ଭେରିଏବୁଲ୍ ନାମ କୌଣସି ସଂଖ୍ୟା (Digit) ରୁ ଆରମ୍ଭ ହୋଇପାରିବ ନାହିଁ ।',
        topic: 'Identifiers'
      },
      {
        question: 'What is the data type returned by the built-in function input("Enter age: ")?',
        questionOdia: 'input("Enter age: ") ଫଙ୍କସନ୍ କେଉଁ ଡାଟା ଟାଇପ୍ ଫେରାଏ?',
        options: ['int', 'float', 'str', 'bool'],
        optionsOdia: ['int', 'float', 'str', 'bool'],
        correctAnswerIndex: 2,
        explanation: 'input() always reads keystrokes as a text string (str), even if the user types numbers.',
        explanationOdia: 'input() ସର୍ବଦା ୟୁଜର ଇନପୁଟକୁ ଷ୍ଟ୍ରିଙ୍ଗ୍ (str) ହିସାବରେ ଗ୍ରହଣ କରେ ।',
        topic: 'Type Casting'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 9',
    order: 3,
    title: 'Python Control Flow: Conditionals & Loops',
    titleOdia: 'ପାଇଥନ୍ ନିୟନ୍ତ୍ରଣ ପ୍ରବାହ: ସର୍ତ୍ତ ଓ ଲୁପ୍',
    description: 'Decision making with if, elif, else; iterative programming with for loop, while loop, range() function, break, and continue statements.',
    descriptionOdia: 'if, elif, else ଦ୍ୱାରା ନିଷ୍ପତ୍ତି ନେବା; for ଏବଂ while ଲୁପ୍, range() ଫଙ୍କସନ୍, break ଓ continue ର ପ୍ରୟୋଗ ।',
    lesson: {
      title: 'Branching, Repetition & Loop Control',
      titleOdia: 'ସର୍ତ୍ତମୂଳକ ନିଷ୍ପତ୍ତି ଓ ଲୁପ୍ ପରିଚାଳନା',
      durationMinutes: 24,
      objectives: [
        'Construct conditional decision trees using if-elif-else statements',
        'Implement counting loops using for loop combined with range(start, stop, step)',
        'Implement condition-controlled repetition using while loop with sentinel conditions',
        'Control loop execution flow using break (early termination) and continue (skip iteration)'
      ],
      objectivesOdia: [
        'if-elif-else ବ୍ୟବହାର କରି ସର୍ତ୍ତମୂଳକ କୋଡ୍ ଲେଖିବା',
        'for ଲୁପ୍ ଏବଂ range(start, stop, step) ବ୍ୟବହାର କରି ପୁନରାବୃତ୍ତି କରିବା',
        'while ଲୁପ୍ ବ୍ୟବହାର କରି ସର୍ତ୍ତ ଅନୁଯାୟୀ କୋଡ୍ ଚଳାଇବା',
        'break (ଲୁପ୍ ରୁ ବାହାରିବା) ଓ continue (ପରବର୍ତ୍ତୀ ଷ୍ଟେପ୍ କୁ ଯିବା) ର କାର୍ଯ୍ୟକାରିତା ବୁଝିବା'
      ],
      content: 'Control structures govern the execution order of statements. Sequential flow proceeds line by line. Selection statements (if, elif, else) test boolean expressions; the first true branch executes its indented suite. Iterative statements repeat statements efficiently. The for loop iterates over sequence items generated by range(start, stop, step), where stop is exclusive. The while loop continuously loops as long as its test condition evaluates to True, requiring careful loop variable updating to avert infinite loops. The break statement immediately exits the enclosing loop. The continue statement bypasses the remaining body of the current iteration and advances immediately to the next cycle.',
      contentOdia: 'ପ୍ରୋଗ୍ରାମରେ ନିର୍ଦ୍ଦେଶ କିପରି ଚାଲିବ ତାହା କଣ୍ଟ୍ରୋଲ୍ ଫ୍ଲୋ ସ୍ଥିର କରେ । ସର୍ତ୍ତ ଯାଞ୍ଚ କରିବା ପାଇଁ if, elif, else ବ୍ୟବହାର କରାଯାଏ । ବାରମ୍ବାର ଗୋଟିଏ କାମ କରିବା ପାଇଁ ଲୁପ୍ (Loop) ବ୍ୟବହାର ହୁଏ । for ଲୁପ୍ ସାଧାରଣତଃ range() ଫଙ୍କସନ୍ ସହିତ ନିର୍ଦ୍ଦିଷ୍ଟ ସଂଖ୍ୟକ ଥର ଚାଲେ । range(୧, ୬) ଲେଖିଲେ ଏହା ୧ ରୁ ୫ ପର୍ଯ୍ୟନ୍ତ ସଂଖ୍ୟା ଦିଏ (ଶେଷ ସଂଖ୍ୟାଟି ବାଦ୍ ପଡ଼େ) । while ଲୁପ୍ ସେପର୍ଯ୍ୟନ୍ତ ଚାଲେ ଯେପର୍ଯ୍ୟନ୍ତ ସର୍ତ୍ତ ସତ୍ୟ (True) ଥାଏ । break ଷ୍ଟେଟମେଣ୍ଟ ଲୁପ୍ କୁ ମଝିରୁ ବନ୍ଦ କରି ବାହାରକୁ ଆସିଯାଏ ଏବଂ continue ଷ୍ଟେଟମେଣ୍ଟ ଚଳିତ ଥରକୁ ବାଦ୍ ଦେଇ ପରବର୍ତ୍ତୀ ଥରକୁ ଚାଲିଯାଏ ।',
      takeaways: [
        'range(1, 10, 2) produces sequence: 1, 3, 5, 7, 9',
        'Colon (:) terminates header lines in if, for, while',
        'Indentation must be consistent across code blocks (standard 4 spaces)',
        'break exits the entire loop; continue skips only the remainder of the current step'
      ],
      takeawaysOdia: [
        'range(୧, ୧୦, ୨) ବିଜୋଡ଼ ସଂଖ୍ୟା: ୧, ୩, ୫, ୭, ୯ ଉତ୍ପନ୍ନ କରେ',
        'if, for, while ଲେଖିବା ପରେ କୋଲନ୍ (:) ଦେବା ବାଧ୍ୟତାମୂଳକ',
        'କୋଡ୍ ବ୍ଲକ୍ ପାଇଁ ସଠିକ୍ ଇଣ୍ଡେଣ୍ଟେସନ୍ (୪ଟି ସ୍ପେସ୍) ଅତ୍ୟନ୍ତ ଜରୁରୀ',
        'break ଲୁପ୍ ସମ୍ପୂର୍ଣ୍ଣ ବନ୍ଦ କରେ; continue କେବଳ ଚଳିତ ପାଳିକୁ ଛାଡ଼ିଦିଏ'
      ]
    },
    quiz: [
      {
        question: 'What numbers are generated by list(range(2, 9, 3)) in Python?',
        questionOdia: 'ପାଇଥନ୍ ରେ list(range(୨, ୯, ୩)) କେଉଁ ସଂଖ୍ୟାଗୁଡ଼ିକ ପ୍ରଦାନ କରିବ?',
        options: ['[2, 5, 8]', '[2, 3, 4, 5, 6, 7, 8, 9]', '[3, 6, 9]', '[2, 5]'],
        optionsOdia: ['[୨, ୫, ୮]', '[୨, ୩, ୪, ୫, ୬, ୭, ୮, ୯]', '[୩, ୬, ୯]', '[୨, ୫]'],
        correctAnswerIndex: 0,
        explanation: 'Starts at 2, steps by 3: 2 + 3 = 5, 5 + 3 = 8; 8 + 3 = 11 is >= 9 (stop), so [2, 5, 8].',
        explanationOdia: '୨ ରୁ ଆରମ୍ଭ ହୋଇ ୩ ବ୍ୟବଧାନରେ: ୨, ୫, ୮ (୯ ରୁ କମ୍ ଥିବାରୁ ୮ ରେ ଶେଷ ହେବ) ।',
        topic: 'range Function'
      },
      {
        question: 'Which statement terminates the execution of the entire enclosing loop immediately?',
        questionOdia: 'କେଉଁ ଷ୍ଟେଟମେଣ୍ଟ ଚାଲୁଥିବା ଲୁପ୍ କୁ ସଙ୍ଗେ ସଙ୍ଗେ ସମ୍ପୂର୍ଣ୍ଣ ଭାବେ ବନ୍ଦ କରିଦିଏ?',
        options: ['pass', 'continue', 'break', 'exit()'],
        optionsOdia: ['pass', 'continue', 'break', 'exit()'],
        correctAnswerIndex: 2,
        explanation: 'break terminates loop execution unconditionally and passes control to the line after the loop.',
        explanationOdia: 'break ଷ୍ଟେଟମେଣ୍ଟ ଲୁପ୍‌କୁ ତୁରନ୍ତ ସମାପ୍ତ କରି ବାହାରକୁ ଆଣିଦିଏ ।',
        topic: 'Loop Control'
      },
      {
        question: 'What occurs if a while loop condition never evaluates to False and has no break?',
        questionOdia: 'ଯଦି while ଲୁପ୍ ର ସର୍ତ୍ତ କେବେ False ନ ହୁଏ ଏବଂ break ନଥାଏ, ତେବେ କ’ଣ ଘଟିବ?',
        options: ['Syntax Error occurs immediately', 'An Infinite Loop occurs', 'The program skips the loop', 'The variable resets to zero'],
        optionsOdia: ['ସିଣ୍ଟାକ୍ସ ତ୍ରୁଟି ଆସିବ', 'ଏକ ଅନନ୍ତ ଲୁପ୍ (Infinite Loop) ସୃଷ୍ଟି ହେବ', 'ପ୍ରୋଗ୍ରାମଟି ଲୁପ୍ ଛାଡ଼ିଦେବ', 'ଭେରିଏବୁଲ୍ ଶୂନ ହୋଇଯିବ'],
        correctAnswerIndex: 1,
        explanation: 'The loop will repeat perpetually until external intervention kills the program process.',
        explanationOdia: 'ଏହା ଏକ ଅନନ୍ତ ଲୁପ୍ ରେ ପରିଣତ ହୋଇ କ୍ରମାଗତ ଚାଲିରହିବ ।',
        topic: 'Infinite Loops'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 9',
    order: 4,
    title: 'Cyber Ethics, Netiquette & Digital Footprints',
    titleOdia: 'ସାଇବର ନୀତିନିୟମ ଓ ଡିଜିଟାଲ୍ ପାଦଚିହ୍ନ',
    description: 'Digital footprints (active vs passive), cyber safety, netiquette, plagiarism, intellectual property rights, open-source licenses, and Indian IT Act 2000.',
    descriptionOdia: 'ସକ୍ରିୟ ଓ ନିଷ୍କ୍ରିୟ ଡିଜିଟାଲ୍ ପାଦଚିହ୍ନ, ଇଣ୍ଟରନେଟ୍ ଶିଷ୍ଟାଚାର, ଚୌର୍ଯ୍ୟବୃତ୍ତି (Plagiarism), ବୌଦ୍ଧିକ ସମ୍ପତ୍ତି ଓ ଆଇଟି ଆଇନ ।',
    lesson: {
      title: 'Digital Footprints, Intellectual Property & Cyber Wellness',
      titleOdia: 'ଡିଜିଟାଲ୍ ଚିହ୍ନ, ବୌଦ୍ଧିକ ଅଧିକାର ଓ ସାଇବର ସୁରକ୍ଷା',
      durationMinutes: 20,
      objectives: [
        'Differentiate active digital footprints (posts, uploads) from passive digital footprints (IP logs, cookies, browsing history)',
        'Practice courteous netiquette across email, social media, and academic discussion forums',
        'Understand plagiarism, copyright, trademarks, patents, and open-source licenses (GPL, Creative Commons)',
        'Identify cyber crimes under Information Technology Act 2000 (hacking, phishing, cyberbullying, identity fraud)'
      ],
      objectivesOdia: [
        'ସକ୍ରିୟ (ଫଟୋ ଅପଲୋଡ୍, ପୋଷ୍ଟ) ଓ ନିଷ୍କ୍ରିୟ (କୁକିଜ୍, IP ଲଗ୍, ସର୍ଚ୍ଚ ଇତିହାସ) ଡିଜିଟାଲ୍ ପାଦଚିହ୍ନର ପାର୍ଥକ୍ୟ ବୁଝିବା',
        'ଅନଲାଇନ୍ ଯୋଗାଯୋଗରେ ସଭ୍ୟ ଶିଷ୍ଟାଚାର (Netiquette) ପାଳନ କରିବା',
        'ଅନ୍ୟର ଲେଖା ଚୋରି (Plagiarism), କପିରାଇଟ୍ ଓ ଓପନ୍ ସୋର୍ସ ଲାଇସେନ୍ସ ବିଷୟରେ ଜାଣିବା',
        'ଭାରତୀୟ ସୂଚନା ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଆଇନ (IT Act ୨୦୦୦) ଅନୁସାରେ ସାଇବର ଅପରାଧ ଓ ଦଣ୍ଡ ବୁଝିବା'
      ],
      content: 'A digital footprint is the permanent trail of data an individual leaves behind while navigating the internet. Active footprints occur when users deliberately post photos, send emails, or submit forms. Passive footprints are collected invisibly without user direct initiation via tracking cookies, location telemetry, and server IP logs. Netiquette represents rules of respectful online behavior, such as avoiding ALL CAPS (which implies shouting), respecting others privacy, and verifying news before sharing. Intellectual Property (IP) includes original creations of the mind protected by patents, trademarks, and copyrights. Plagiarism involves passing off another work or ideas as one own without attribution. The Indian Information Technology Act 2000 penalizes identity theft, child exploitation, and cyberstalking.',
      contentOdia: 'ଇଣ୍ଟରନେଟ୍ ବ୍ୟବହାର କରିବା ସମୟରେ ଆମ ପଛରେ ରହିଯାଉଥିବା ଡାଟାର ଚିହ୍ନକୁ "ଡିଜିଟାଲ୍ ଫୁଟପ୍ରିଣ୍ଟ" (Digital Footprint) କୁହାଯାଏ । ସୋସିଆଲ ମିଡିଆରେ ନିଜେ ଫଟୋ ବା ମେସେଜ୍ ପଠାଇଲେ ତାହା ସକ୍ରିୟ ପାଦଚିହ୍ନ ହୁଏ । କିନ୍ତୁ ଆମ ଅଜାଣତରେ ୱେବସାଇଟ୍ କୁକିଜ୍ (Cookies) ଓ ଲୋକେସନ୍ ଟ୍ରାକ୍ କଲେ ତାହା ନିଷ୍କ୍ରିୟ ପାଦଚିହ୍ନ ହୁଏ । ଅନଲାଇନ୍‌ରେ ସଭ୍ୟ ଭାବେ କଥା ହେବାକୁ "ନେଟିକେଟ୍" (Netiquette) କୁହାଯାଏ । କାହାର କାମ ଚୋରି କରି ନିଜ ନାମରେ ଚଳାଇବାକୁ Plagiarism କୁହାଯାଏ । ଭାରତର IT Act ୨୦୦୦ ଆଇନ ସାଇବର ଠକେଇ, ହ୍ୟାକିଂ ଓ ଅନଲାଇନ୍ ଧମକ ବିରୁଦ୍ଧରେ କଡ଼ା ଦଣ୍ଡ ବିଧାନ କରିଥାଏ ।',
      takeaways: [
        'Digital footprints are permanent and searchable by universities, employers, and authorities',
        'Typing messages in ALL CAPITAL LETTERS is considered cyber shouting',
        'Plagiarism is an academic and legal infringement; always cite original sources',
        'Under Section 66 of Indian IT Act, unauthorized system hacking carries prison terms'
      ],
      takeawaysOdia: [
        'ଡିଜିଟାଲ୍ ପାଦଚିହ୍ନ ସ୍ଥାୟୀ ଅଟେ ଏବଂ ଭବିଷ୍ୟତରେ ଆପଣଙ୍କ ପରିଚୟ ପ୍ରଭାବିତ କରିପାରେ',
        'ଇଣ୍ଟରନେଟରେ ବଡ଼ ହାତ ଅକ୍ଷର (CAPITALS) ରେ ଲେଖିବା ପାଟି କରିବା ସହ ସମାନ',
        'ଅନ୍ୟର ଲେଖା ବିନା ଅନୁମତିରେ ବ୍ୟବହାର କରିବା ଅପରାଧ (Plagiarism)',
        'ଭାରତୀୟ IT Act ର ଧାରା ୬୬ ଅନୁଯାୟୀ ହ୍ୟାକିଂ ପାଇଁ ଜେଲ୍ ଦଣ୍ଡ ହୋଇପାରେ'
      ]
    },
    quiz: [
      {
        question: 'Which of the following creates a "passive" digital footprint?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ "ନିଷ୍କ୍ରିୟ" (Passive) ଡିଜିଟାଲ୍ ପାଦଚିହ୍ନ ସୃଷ୍ଟି କରେ?',
        options: [
          'Uploading a video to YouTube',
          'Posting a comment on an Instagram photo',
          'A web server logging your IP address and browsing behavior via cookies',
          'Filling out an online registration form'
        ],
        optionsOdia: [
          'ୟୁଟ୍ୟୁବରେ ଏକ ଭିଡିଓ ଅପଲୋଡ୍ କରିବା',
          'ଇନଷ୍ଟାଗ୍ରାମରେ ମନ୍ତବ୍ୟ ଦେବା',
          'ୱେବସାଇଟ୍ କୁକିଜ୍ ଦ୍ୱାରା ଆପଣଙ୍କ IP ଠିକଣା ଓ ବ୍ରାଉଜିଂ ଇତିହାସ ସାଇତିବା',
          'ଅନଲାଇନ୍ ଫର୍ମ ପୂରଣ କରିବା'
        ],
        correctAnswerIndex: 2,
        explanation: 'Passive footprints gather telemetry in the background without explicit active user publishing.',
        explanationOdia: 'କୁକିଜ୍ ଓ ସର୍ଭର ଲଗ୍ ଆପଣଙ୍କ ଅଜାଣତରେ ପୃଷ୍ଠଭୂମିରେ ଡାଟା ସଂଗ୍ରହ କରେ ।',
        topic: 'Digital Footprints'
      },
      {
        question: 'Presenting someone else intellectual work or published ideas as your own without crediting them is:',
        questionOdia: 'ଅନ୍ୟର ସୃଜନଶୀଳ କାର୍ଯ୍ୟ ବା ଲେଖାକୁ ବିନା କୃତଜ୍ଞତାରେ ନିଜ ନାମରେ ପ୍ରକାଶ କରିବାକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Phishing', 'Plagiarism', 'Encryption', 'Debugging'],
        optionsOdia: ['ଫିସିଂ', 'ପ୍ଲାଜିଆରିଜିମ୍ (Plagiarism)', 'ଏନକ୍ରିପ୍ସନ୍', 'ଡିବଗିଂ'],
        correctAnswerIndex: 1,
        explanation: 'Plagiarism is intellectual dishonesty and copyright violation involving stolen attribution.',
        explanationOdia: 'ଅନ୍ୟର ଲେଖା ଚୋରି କରି ନିଜ ନାମରେ ଚଳାଇବାକୁ Plagiarism କୁହାଯାଏ ।',
        topic: 'Ethics & Copyright'
      },
      {
        question: 'Which primary legislation in India governs cyber crimes, digital signatures, and electronic commerce?',
        questionOdia: 'ଭାରତରେ ସାଇବର ଅପରାଧ ଓ ଇଲେକ୍ଟ୍ରୋନିକ୍ ବାଣିଜ୍ୟକୁ ନିୟନ୍ତ୍ରଣ କରୁଥିବା ମୁଖ୍ୟ ଆଇନ କେଉଁଟି?',
        options: ['Indian Penal Code 1860', 'Information Technology Act 2000', 'Digital Commerce Bill 1995', 'Patent Act 1970'],
        optionsOdia: ['ଭାରତୀୟ ଦଣ୍ଡବିଧି ଆଇନ ୧୮୬୦', 'ସୂଚନା ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଆଇନ (IT Act ୨୦୦୦)', 'ଡିଜିଟାଲ୍ କମର୍ସ ବିଲ୍ ୧୯୯୫', 'ପେଟେଣ୍ଟ ଆଇନ ୧୯୭୦'],
        correctAnswerIndex: 1,
        explanation: 'The Information Technology (IT) Act 2000 (amended in 2008) provides the legal framework for cyber offenses in India.',
        explanationOdia: 'IT Act ୨୦୦୦ ଭାରତରେ ସାଇବର ସୁରକ୍ଷା ଓ ଅପରାଧ ଦଣ୍ଡାଦେଶ ପାଇଁ ମୁଖ୍ୟ ଆଇନ ଅଟେ ।',
        topic: 'Cyber Laws'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 9',
    order: 5,
    title: 'Cloud Computing & Web Technologies',
    titleOdia: 'କ୍ଲାଉଡ୍ କମ୍ପ୍ୟୁଟିଂ ଓ ୱେବ୍ ପ୍ରଯୁକ୍ତି',
    description: 'Cloud service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), client-server model, HTTP/HTTPS, DNS, and fundamental HTML tags.',
    descriptionOdia: 'କ୍ଲାଉଡ୍ ସେବା ମଡେଲ୍ (IaaS, PaaS, SaaS), କ୍ଲାଏଣ୍ଟ-ସର୍ଭର ସଂରଚନା, HTTP, DNS ଏବଂ HTML ମୌଳିକ ଟ୍ୟାଗ୍ ।',
    lesson: {
      title: 'Cloud Models, Web Architecture & HTML Basics',
      titleOdia: 'କ୍ଲାଉଡ୍ ମଡେଲ୍, ୱେବ୍ ନେଟୱାର୍କ ଓ HTML ର ମୂଳଦୁଆ',
      durationMinutes: 22,
      objectives: [
        'Understand cloud computing characteristics: on-demand self-service, broad network access, resource pooling',
        'Compare cloud service delivery tiers: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)',
        'Understand Web client-server communication: URLs, Domain Name System (DNS), and HTTP vs secure HTTPS',
        'Structure a valid web document using core HTML elements: <html>, <head>, <title>, <body>, <h1>-<h6>, <p>, <a>, <img>'
      ],
      objectivesOdia: [
        'କ୍ଲାଉଡ୍ କମ୍ପ୍ୟୁଟିଂର ଧାରଣା: ଇଣ୍ଟରନେଟ୍ ମାଧ୍ୟମରେ ସର୍ଭର, ଷ୍ଟୋରେଜ୍ ଓ ସଫ୍ଟୱେର୍ ର ଉପଲବ୍ଧତା ବୁଝିବା',
        'କ୍ଲାଉଡ୍ ସେବା ଶ୍ରେଣୀ: IaaS (ଇନଫ୍ରାଷ୍ଟ୍ରକଚର), PaaS (ପ୍ଲାଟଫର୍ମ) ଓ SaaS (ସଫ୍ଟୱେର୍ ଯଥା Google Docs) ର ତୁଳନା କରିବା',
        'କ୍ଲାଏଣ୍ଟ-ସର୍ଭର ବ୍ୟବସ୍ଥା, DNS (ଡୋମେନ୍ ନାମରୁ IP ରୂପାନ୍ତର) ଓ ସୁରକ୍ଷିତ HTTPS ବୁଝିବା',
        'HTML ବ୍ୟବହାର କରି ଏକ ୱେବ୍ ପେଜ୍ ର ମୌଳିକ ଗଠନ (head, title, body, headings, links) ଶିଖିବା'
      ],
      content: 'Cloud computing delivers on-demand computing services—including servers, storage, databases, networking, and software—over the Internet on a pay-as-you-go model. Cloud service models include: IaaS (Infrastructure as a Service, e.g. AWS EC2, Google Compute Engine renting virtual hardware), PaaS (Platform as a Service, e.g. Google App Engine providing development environments), and SaaS (Software as a Service, e.g. Google Workspace, Microsoft 365 delivering end-user apps). On the World Wide Web, clients (web browsers) communicate with servers using HTTP or encrypted HTTPS protocols. Domain Name System (DNS) functions as the internet telephone directory, translating human-friendly domain names (e.g. vidyora.ai) into machine-routable IP addresses. HTML (HyperText Markup Language) provides the semantic skeleton of web documents.',
      contentOdia: 'ଇଣ୍ଟରନେଟ୍ ମାଧ୍ୟମରେ ସର୍ଭର, ଡାଟା ଷ୍ଟୋରେଜ୍ ଓ ସଫ୍ଟୱେର୍ ଭଡ଼ାରେ ପାଇବା ସୁବିଧାକୁ "କ୍ଲାଉଡ୍ କମ୍ପ୍ୟୁଟିଂ" (Cloud Computing) କୁହାଯାଏ । ଏହାର ତିନୋଟି ମୁଖ୍ୟ ମଡେଲ୍ ଅଛି: IaaS (ଭର୍ଚୁଆଲ୍ ହାର୍ଡୱେର୍ ଯୋଗାଏ), PaaS (ପ୍ରୋଗ୍ରାମିଂ ପ୍ଲାଟଫର୍ମ ଯୋଗାଏ), ଏବଂ SaaS (ପ୍ରସ୍ତୁତ ସଫ୍ଟୱେର୍ ଯଥା Google Drive, Gmail ଯୋଗାଏ) । ୱେବ୍‌ରେ ବ୍ରାଉଜର୍ (କ୍ଲାଏଣ୍ଟ) ସର୍ଭର ସହିତ HTTP ବା ସୁରକ୍ଷିତ HTTPS ପ୍ରୋଟୋକଲ୍ ମାଧ୍ୟମରେ ଯୋଗାଯୋଗ କରେ । DNS ସାହାଯ୍ୟରେ ଇଂରାଜୀ ୱେବସାଇଟ୍ ନାମକୁ କମ୍ପ୍ୟୁଟରର IP ଠିକଣାରେ ପରିଣତ କରାଯାଏ । HTML ହେଉଛି ୱେବପେଜ୍ ତିଆରି କରିବାର ମୂଳ ଭାଷା ।',
      takeaways: [
        'SaaS delivers ready applications (e.g. Gmail); IaaS delivers raw compute infrastructure',
        'DNS maps domain names (google.com) to numeric IP addresses (142.250.190.46)',
        'HTTPS encrypts web traffic using SSL/TLS protocols to protect data from eavesdropping',
        'HTML tags <a> define hyperlinks and <img> embeds graphic images'
      ],
      takeawaysOdia: [
        'Google Drive ଓ Gmail ହେଉଛି SaaS ର ଉଦାହରଣ',
        'DNS ୱେବସାଇଟ୍ ନାମକୁ IP ଠିକଣାରେ ବଦଳାଇଦିଏ',
        'HTTPS ଏନକ୍ରିପ୍ସନ୍ ବ୍ୟବହାର କରି ୱେବସାଇଟ୍ ଡାଟାକୁ ହ୍ୟାକରଙ୍କଠାରୁ ସୁରକ୍ଷିତ ରଖେ',
        'HTML ରେ <a> ଟ୍ୟାଗ୍ ଲିଙ୍କ୍ ଯୋଡ଼ିବା ପାଇଁ ଏବଂ <img> ଟ୍ୟାଗ୍ ଛବି ଦେଖାଇବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ'
      ]
    },
    quiz: [
      {
        question: 'Which cloud service model does Google Docs and Gmail represent?',
        questionOdia: 'Google Docs ଏବଂ Gmail କ୍ଲାଉଡ୍ ସେବାର କେଉଁ ମଡେଲ୍ କୁ ପ୍ରତିନିଧିତ୍ୱ କରେ?',
        options: [
          'Infrastructure as a Service (IaaS)',
          'Platform as a Service (PaaS)',
          'Software as a Service (SaaS)',
          'Hardware as a Service (HaaS)'
        ],
        optionsOdia: [
          'ଇନଫ୍ରାଷ୍ଟ୍ରକଚର ଆଜ୍ ଏ ସର୍ଭିସ୍ (IaaS)',
          'ପ୍ଲାଟଫର୍ମ ଆଜ୍ ଏ ସର୍ଭିସ୍ (PaaS)',
          'ସଫ୍ଟୱେର୍ ଆଜ୍ ଏ ସର୍ଭିସ୍ (SaaS)',
          'ହାର୍ଡୱେର୍ ଆଜ୍ ଏ ସର୍ଭିସ୍ (HaaS)'
        ],
        correctAnswerIndex: 2,
        explanation: 'SaaS provides complete, hosted software applications accessible via a browser without local installation.',
        explanationOdia: 'ସଫ୍ଟୱେର୍ ଆଜ୍ ଏ ସର୍ଭିସ୍ (SaaS) ସିଧାସଳଖ ବ୍ୟବହାର ଉପଯୋଗୀ ସଫ୍ଟୱେର୍ ପ୍ରଦାନ କରେ ।',
        topic: 'Cloud Service Models'
      },
      {
        question: 'What is the role of the Domain Name System (DNS) on the internet?',
        questionOdia: 'ଇଣ୍ଟରନେଟ୍‌ରେ Domain Name System (DNS) ର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ’ଣ?',
        options: [
          'To format text with bold and italics',
          'To translate human-readable domain names into numeric IP addresses',
          'To generate secure passwords',
          'To physically connect optical fiber cables'
        ],
        optionsOdia: [
          'ଅକ୍ଷରକୁ ବୋଲ୍ଡ କରିବା',
          'ୱେବସାଇଟ୍ ନାମକୁ କମ୍ପ୍ୟୁଟର ବୁଝିପାରୁଥିବା ସଂଖ୍ୟାତ୍ମକ IP ଠିକଣାରେ ରୂପାନ୍ତର କରିବା',
          'ପାସୱାର୍ଡ ତିଆରି କରିବା',
          'ଫାଇବର କେବୁଲ୍ ଯୋଡ଼ିବା'
        ],
        correctAnswerIndex: 1,
        explanation: 'DNS maps human names like google.com to computer-routable IP addresses like 172.217.16.206.',
        explanationOdia: 'DNS ୱେବସାଇଟ୍ ନାମକୁ IP ଠିକଣାରେ ପରିଣତ କରି ସର୍ଭର ସହ ଯୋଗାଯୋଗ କରାଏ ।',
        topic: 'DNS Architecture'
      },
      {
        question: 'Which HTML element is used to insert a clickable hyperlink into a webpage?',
        questionOdia: 'ଏକ ୱେବପେଜ୍‌ରେ କ୍ଲିକ୍ ହୋଇପାରୁଥିବା ହାଇପରଲିଙ୍କ୍ ଯୋଡ଼ିବା ପାଇଁ କେଉଁ HTML ଟ୍ୟାଗ୍ ବ୍ୟବହାର କରାଯାଏ?',
        options: ['<link>', '<href>', '<a>', '<url>'],
        optionsOdia: ['<link>', '<href>', '<a> (Anchor)', '<url>'],
        correctAnswerIndex: 2,
        explanation: 'The anchor tag <a> with href attribute (e.g. <a href="url">Click</a>) creates web hyperlinks.',
        explanationOdia: '<a> (Anchor) ଟ୍ୟାଗ୍ href ଆଟ୍ରିବ୍ୟୁଟ୍ ସହିତ ହାଇପରଲିଙ୍କ୍ ତିଆରି କରେ ।',
        topic: 'HTML Fundamentals'
      }
    ]
  }
];

module.exports = { class9Data };
