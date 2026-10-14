// Curriculum Data for Class 10 across Science, Mathematics, English, Social Science, and Computer Science
const class10Data = [
  // ---------------------------------------------------------
  // SCIENCE (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'SCI',
    classLevel: 'Class 10',
    order: 1,
    title: 'Chemical Reactions and Equations',
    titleOdia: 'ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଓ ସମୀକରଣ',
    description: 'Writing and balancing chemical equations, types of chemical reactions (combination, decomposition, displacement, double displacement, redox), and corrosion & rancidity.',
    descriptionOdia: 'ରାସାୟନିକ ସମୀକରଣର ସନ୍ତୁଳନ, ବିଭିନ୍ନ ପ୍ରକାର ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା, ଜାରଣ-ବିଜାରଣ, କ୍ଷୟୀଭବନ ଓ ଦୁର୍ଗନ୍ଧିତା ।',
    lesson: {
      title: 'Balancing Equations, Reaction Typology & Redox',
      titleOdia: 'ସମୀକରଣ ସନ୍ତୁଳନ, ପ୍ରତିକ୍ରିୟାର ପ୍ରକାରଭେଦ ଓ ରେଡକ୍ସ',
      durationMinutes: 25,
      objectives: [
        'Balance chemical equations satisfying the Law of Conservation of Mass',
        'Distinguish combination, decomposition (thermal, electrolytic, photolytic), displacement, and double displacement reactions',
        'Analyze oxidation (gain of O / loss of H) and reduction (gain of H / loss of O) in redox couples',
        'Explain corrosion prevention and rancidity prevention (nitrogen flushing, antioxidants)'
      ],
      objectivesOdia: [
        'ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ଅନୁଯାୟୀ ରାସାୟନିକ ସମୀକରଣ ସନ୍ତୁଳନ କରିବା',
        'ସଂଶ୍ଳେଷଣ, ବିଘଟନ (ତାପଜ, ବିଦ୍ୟୁତ, ଆଲୋକ), ବିସ୍ଥାପନ ଓ ଦ୍ୱି-ବିସ୍ଥାପନ ପ୍ରତିକ୍ରିୟା ଚିହ୍ନିବା',
        'ରେଡକ୍ସ (Redox) ପ୍ରତିକ୍ରିୟାରେ ଜାରଣ ଓ ବିଜାରଣ ଚିହ୍ନଟ କରିବା',
        'କ୍ଷୟୀଭବନ (Corrosion) ଓ ଖାଦ୍ୟର ଦୁର୍ଗନ୍ଧିତା (Rancidity) ରୋକିବାର ଉପାୟ ଜାଣିବା'
      ],
      content: 'A chemical reaction transforms reactants into products through breaking and making of chemical bonds. Balanced chemical equations preserve atom counts on both sides according to Lavoisier law of mass conservation. Five core types exist: (1) Combination: two or more reactants unite into one product (CaO + H2O -> Ca(OH)2); (2) Decomposition: single reactant splits upon heat, electricity, or light (2FeSO4 -> Fe2O3 + SO2 + SO3; 2AgCl -> 2Ag + Cl2 in sunlight); (3) Displacement: more reactive metal displaces less reactive metal (Fe + CuSO4 -> FeSO4 + Cu); (4) Double displacement: exchange of ions forming an insoluble precipitate (Na2SO4 + BaCl2 -> BaSO4 + 2NaCl); and (5) Oxidation-Reduction (Redox) where one species oxidizes while another reduces (CuO + H2 -> Cu + H2O). Corrosion damages metals through atmospheric oxidation; rancidity oxidizes fatty foods.',
      contentOdia: 'ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପ୍ରତିକାରକଗୁଡ଼ିକ ଉତ୍ପାଦରେ ପରିଣତ ହୁଅନ୍ତି । ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ଅନୁସାରେ ସମୀକରଣର ଉଭୟ ପାର୍ଶ୍ୱରେ ପ୍ରତ୍ୟେକ ମୌଳିକର ପରମାଣୁ ସଂଖ୍ୟା ସମାନ ରହିବା ବାଧ୍ୟତାମୂଳକ । ପାଞ୍ଚଟି ମୁଖ୍ୟ ପ୍ରକାର: (୧) ସଂଶ୍ଳେଷଣ ପ୍ରତିକ୍ରିୟା: ଦୁଇଟି ପ୍ରତିକାରକ ମିଶି ଗୋଟିଏ ଉତ୍ପାଦ ଗଠନ କରନ୍ତି (କଳିଚୂନ + ପାଣି); (୨) ବିଘଟନ ପ୍ରତିକ୍ରିୟା: ଗୋଟିଏ ପଦାର୍ଥ ତାପ, ଆଲୋକ ବା ବିଦ୍ୟୁତ୍ ଦ୍ୱାରା ଭାଙ୍ଗି ଏକାଧିକ ଉତ୍ପାଦ ଦିଏ (ସୂର୍ଯ୍ୟାଲୋକରେ AgCl ର ରୂପାନ୍ତର); (୩) ବିସ୍ଥାପନ: ଅଧିକ ପ୍ରତିକ୍ରିୟାଶୀଳ ଧାତୁ କମ୍ ପ୍ରତିକ୍ରିୟାଶୀଳ ଧାତୁକୁ ହଟାଇଦିଏ (Fe + CuSO₄); (୪) ଦ୍ୱି-ବିସ୍ଥାପନ: ଆୟନ ବିନିମୟ ଘଟି ଅଦ୍ରବଣୀୟ ଅବକ୍ଷେପ ସୃଷ୍ଟି ହୁଏ (BaSO₄); (୫) ଜାରଣ-ବିଜାରଣ (Redox): ଗୋଟିଏ ପଦାର୍ଥ ଜାରିତ ହେବା ବେଳେ ଅନ୍ୟଟି ବିଜାରିତ ହୁଏ ।',
      takeaways: [
        'Calcium hydroxide (slaked lime) reacts with CO2 in air to form shiny CaCO3 layer on walls',
        'Silver chloride turns grey in sunlight due to photolytic decomposition into silver metal',
        'Oxidation involves addition of oxygen or removal of hydrogen; reduction is the inverse',
        'Potato chips packets are flushed with unreactive Nitrogen gas to prevent oxidative rancidity'
      ],
      takeawaysOdia: [
        'କାନ୍ଥରେ କଳିଚୂନ ଲଗାଇଲେ ବାୟୁର CO₂ ସହ ମିଶି ଚକ୍‌ଚକ୍ CaCO₃ ସ୍ତର ସୃଷ୍ଟି କରେ',
        'ସୂର୍ଯ୍ୟାଲୋକରେ ସିଲଭର୍ କ୍ଲୋରାଇଡ୍ (AgCl) ଆଲୋକୀୟ ବିଘଟନ ଘଟି ଧୂସର ରଙ୍ଗର ରୂପା ଦିଏ',
        'ଅମ୍ଳଜାନ ସଂଯୋଗ ହେବାକୁ ଜାରଣ ଏବଂ ଅମ୍ଳଜାନ ବିୟୋଗ ହେବାକୁ ବିଜାରଣ କୁହାଯାଏ',
        'କୁରକୁରେ ଓ ଚିପ୍ସ ପ୍ୟାକେଟ୍‌ରେ ନାଇଟ୍ରୋଜେନ୍ ଗ୍ୟାସ୍ ଭର୍ତ୍ତି କରି ଦୁର୍ଗନ୍ଧିତା ରୋକାଯାଏ'
      ]
    },
    quiz: [
      {
        question: 'Which precipitate is formed when sodium sulphate solution is mixed with barium chloride solution?',
        questionOdia: 'ସୋଡ଼ିୟମ୍ ସଲଫେଟ୍ ଦ୍ରବଣ ସହ ବେରିୟମ୍ କ୍ଲୋରାଇଡ୍ ମିଶାଇଲେ କେଉଁ ଅବକ୍ଷେପ (Precipitate) ସୃଷ୍ଟି ହୁଏ?',
        options: ['White precipitate of Barium sulphate (BaSO4)', 'Blue precipitate of Copper sulphate', 'Yellow precipitate of Lead iodide', 'No precipitate forms'],
        optionsOdia: ['ବେରିୟମ୍ ସଲଫେଟ୍ (BaSO₄) ର ଧଳା ଅବକ୍ଷେପ', 'ତୁତିଆର ନୀଳ ଅବକ୍ଷେପ', 'ଲେଡ୍ ଆୟୋଡାଇଡ୍ ର ହଳଦିଆ ଅବକ୍ଷେପ', 'କୌଣସି ଅବକ୍ଷେପ ହୁଏ ନାହିଁ'],
        correctAnswerIndex: 0,
        explanation: 'Ba(2+) ions react with SO4(2-) ions yielding insoluble white precipitate BaSO4.',
        explanationOdia: 'ବେରିୟମ୍ ସଲଫେଟ୍ (BaSO₄) ଏକ ଅଦ୍ରବଣୀୟ ଧଳା ଅବକ୍ଷେପ ରୂପେ ଜମା ହୁଏ ।',
        topic: 'Precipitation Reaction'
      },
      {
        question: 'In the reaction: CuO + H2 -> Cu + H2O, which substance is oxidised?',
        questionOdia: 'CuO + H₂ -> Cu + H₂O ପ୍ରତିକ୍ରିୟାରେ କେଉଁ ପଦାର୍ଥଟି ଜାରିତ (Oxidised) ହୋଇଛି?',
        options: ['CuO', 'H2', 'Cu', 'H2O'],
        optionsOdia: ['CuO', 'H₂', 'Cu', 'H₂O'],
        correctAnswerIndex: 1,
        explanation: 'Hydrogen (H2) gains oxygen to become H2O, meaning H2 is oxidized while CuO is reduced.',
        explanationOdia: 'ହାଇଡ୍ରୋଜେନ୍ (H₂) ଅମ୍ଳଜାନ ଗ୍ରହଣ କରି H₂O ହେଉଥିବାରୁ ଏହା ଜାରିତ ହୋଇଛି ।',
        topic: 'Redox Reactions'
      },
      {
        question: 'Which unreactive gas is packed inside potato chip bags to prevent rancidity?',
        questionOdia: 'ଆଳୁ ଚିପ୍ସ ପ୍ୟାକେଟ୍‌ରେ ଦୁର୍ଗନ୍ଧିତା (Rancidity) ରୋକିବା ପାଇଁ କେଉଁ ନିଷ୍କ୍ରିୟ ଗ୍ୟାସ୍ ଭରାଯାଏ?',
        options: ['Oxygen', 'Carbon monoxide', 'Nitrogen', 'Chlorine'],
        optionsOdia: ['ଅମ୍ଳଜାନ', 'କାର୍ବନ ମନୋକ୍ସାଇଡ୍', 'ନାଇଟ୍ରୋଜେନ୍', 'କ୍ଲୋରିନ୍'],
        correctAnswerIndex: 2,
        explanation: 'Flushing bags with inert nitrogen gas prevents oils and fats from oxidizing.',
        explanationOdia: 'ନାଇଟ୍ରୋଜେନ୍ ଗ୍ୟାସ୍ ତେଲ ଓ ସ୍ନେହସାରର ଜାରଣ ରୋକି ଖାଦ୍ୟକୁ ସତେଜ ରଖେ ।',
        topic: 'Rancidity Prevention'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 10',
    order: 2,
    title: 'Acids, Bases and Salts',
    titleOdia: 'ଅମ୍ଳ, କ୍ଷାରକ ଓ ଲବଣ',
    description: 'Chemical properties of acids and bases, indicators, pH scale in daily life, neutralization, and manufacture of bleaching powder, baking soda, washing soda, and POP.',
    descriptionOdia: 'ଅମ୍ଳ ଓ କ୍ଷାରକର ଧର୍ମ, ସୂଚକ, ଦୈନନ୍ଦିନ ଜୀବନରେ pH ର ମହତ୍ତ୍ୱ, ପ୍ରଶମନ ଏବଂ ବ୍ଲିଚିଂ ପାଉଡର, ଖାଇବା ସୋଡ଼ା ଓ ପ୍ଲାଷ୍ଟର ଅଫ୍ ପ୍ୟାରିସ୍ ।',
    lesson: {
      title: 'pH Dynamics, Neutralization & Commercial Salts',
      titleOdia: 'pH ମୂଲ୍ୟ, ପ୍ରଶମନ ଓ ଶିଳ୍ପାୟିତ ଲବଣ',
      durationMinutes: 26,
      objectives: [
        'Define Arrhenius and Bronsted concept: acids release H+ (H3O+) in water; bases release OH- ions',
        'Analyze reactions with metals, metal carbonates, and hydrogen carbonates releasing CO2 gas',
        'Explain pH scale (0 to 14) and practical applications (tooth decay, digestive antacids, soil pH, acid rain)',
        'Trace manufacturing chemistry of Bleaching Powder, Baking Soda (NaHCO3), Washing Soda (Na2CO3.10H2O), and Plaster of Paris (CaSO4.1/2H2O)'
      ],
      objectivesOdia: [
        'ଅମ୍ଳ ଜଳରେ H⁺ (ହାଇଡ୍ରୋନିୟମ୍ H₃O⁺) ଆୟନ ଏବଂ କ୍ଷାରକ OH⁻ ଆୟନ ଦିଅନ୍ତି ବୋଲି ବୁଝିବା',
        'ଧାତୁ କାର୍ବୋନେଟ୍ ସହ ଅମ୍ଳର ପ୍ରତିକ୍ରିୟାରେ କାର୍ବନ ଡାଇଅକ୍ସାଇଡ୍ (CO₂) ଗ୍ୟାସ୍ ନିର୍ଗମନ ଜାଣିବା',
        'pH ସ୍କେଲ୍ (୦ ରୁ ୧୪) ଓ ଦୈନନ୍ଦିନ ଜୀବନରେ ଏହାର ପ୍ରଭାବ (ଦାନ୍ତକ୍ଷୟ, ପେଟ ଜ୍ୱାଳା, ଅମ୍ଳବୃଷ୍ଟି) ବୁଝିବା',
        'ବ୍ଲିଚିଂ ପାଉଡର, ଖାଇବା ସୋଡ଼ା, ଧୋଇବା ସୋଡ଼ା ଓ ପ୍ଲାଷ୍ଟର ଅଫ୍ ପ୍ୟାରିସ୍ (POP) ର ରାସାୟନିକ ସୂତ୍ର ଶିଖିବା'
      ],
      content: 'Acids taste sour and turn blue litmus red; bases taste bitter, feel soapy, and turn red litmus blue. In aqueous solutions, acids dissociate into hydronium ions H3O+ while bases dissociate into hydroxide ions OH-. The pH scale measures hydrogen ion concentration: pH < 7 is acidic, pH = 7 is neutral (pure water at 25 deg C), and pH > 7 is alkaline. Tooth decay begins when mouth pH falls below 5.5 due to bacterial acid production from sugars. Acid rain occurs when precipitation pH drops below 5.6. Neutralization between an acid and a base yields salt and water. Common commercial salts derived from brine (NaCl) include: Sodium Hydroxide (Chlor-alkali process), Bleaching powder (CaOCl2 formed with dry slaked lime), Baking soda (Sodium hydrogencarbonate NaHCO3), Washing soda (Na2CO3.10H2O), and Plaster of Paris (CaSO4.1/2 H2O made by heating gypsum CaSO4.2H2O at 373 K).',
      contentOdia: 'ଅମ୍ଳ ଖଟା ଲାଗେ ଓ ନୀଳ ଲିଟମସ୍‌କୁ ଲାଲ୍ କରେ; କ୍ଷାରକ ପିତା ଲାଗେ, ଛୁଇଁଲେ ଚିକ୍କଣ ଲାଗେ ଓ ଲାଲ୍ ଲିଟମସ୍‌କୁ ନୀଳ କରେ । ଜଳୀୟ ଦ୍ରବଣରେ ଅମ୍ଳ H₃O⁺ ଆୟନ ଏବଂ କ୍ଷାରକ OH⁻ ଆୟନ ତ୍ୟାଗ କରେ । pH ସ୍କେଲ୍ ୦ ରୁ ୧୪ ପର୍ଯ୍ୟନ୍ତ ଥାଏ: pH < ୭ ଅମ୍ଳୀୟ, pH = ୭ ପ୍ରଶମିତ, pH > ୭ କ୍ଷାରୀୟ । ପାଟିର pH ୫.୫ ରୁ କମିଗଲେ ଦାନ୍ତକ୍ଷୟ ଆରମ୍ଭ ହୁଏ । ବର୍ଷାଜଳର pH ୫.୬ ରୁ କମ୍ ହେଲେ ତାହାକୁ ଅମ୍ଳବୃଷ୍ଟି କୁହାଯାଏ । ଅମ୍ଳ ଓ କ୍ଷାରକ ପ୍ରତିକ୍ରିୟା କରି ଲବଣ ଓ ଜଳ ସୃଷ୍ଟି କରନ୍ତି । ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଲବଣ: ବ୍ଲିଚିଂ ପାଉଡର (CaOCl₂), ଖାଇବା ସୋଡ଼ା (NaHCO₃), ଧୋଇବା ସୋଡ଼ା (Na₂CO₃·୧୦H₂O) ଏବଂ ଜିପସମ୍‌କୁ ୩୭୩ K ରେ ଗରମ କରି ପ୍ରସ୍ତୁତ କରାଯାଉଥିବା ପ୍ଲାଷ୍ଟର ଅଫ୍ ପ୍ୟାରିସ୍ (CaSO₄·½H₂O) ।',
      takeaways: [
        'Tooth enamel (calcium hydroxyapatite) degrades when oral pH < 5.5',
        'Chlor-alkali process yields three valuable products: Chlorine gas, Hydrogen gas, and NaOH',
        'Baking powder is a mixture of baking soda (NaHCO3) and mild edible tartaric acid',
        'Plaster of Paris sets into hard crystalline Gypsum upon mixing with water'
      ],
      takeawaysOdia: [
        'ପାଟିର pH ୫.୫ ତଳକୁ ଖସିଲେ ଦାନ୍ତ ଏନାମେଲ୍ କ୍ଷୟ ହୁଏ',
        'କ୍ଲୋର-ଆଲକାଲି ପ୍ରଣାଳୀରେ କ୍ଲୋରିନ୍, ହାଇଡ୍ରୋଜେନ୍ ଓ NaOH ମିଳେ',
        'ବେକିଂ ପାଉଡର ହେଉଛି ଖାଇବା ସୋଡ଼ା ଓ ଟାର୍ଟାରିକ୍ ଅମ୍ଳର ମିଶ୍ରଣ',
        'ପ୍ଲାଷ୍ଟର ଅଫ୍ ପ୍ୟାରିସ୍ ପାଣି ପାଇଲେ ପୁନର୍ବାର ଟାଣ ଜିପସମ୍‌ରେ ପରିଣତ ହୁଏ'
      ]
    },
    quiz: [
      {
        question: 'Tooth decay starts when the pH of the mouth falls below:',
        questionOdia: 'ପାଟିର pH କେତେରୁ କମ୍ ହେଲେ ଦାନ୍ତ ନଷ୍ଟ ହେବା ବା ଦାନ୍ତକ୍ଷୟ ଆରମ୍ଭ ହୁଏ?',
        options: ['7.0', '6.5', '5.5', '8.2'],
        optionsOdia: ['୭.୦', '୬.୫', '୫.୫', '୮.୨'],
        correctAnswerIndex: 2,
        explanation: 'Enamel corrodes when bacterial fermentation reduces mouth pH below 5.5.',
        explanationOdia: 'ପାଟିର pH ୫.୫ ରୁ କମିଗଲେ ଅମ୍ଳ ପ୍ରଭାବରେ ଦାନ୍ତର ଏନାମେଲ୍ କ୍ଷୟ ହୁଏ ।',
        topic: 'pH in Daily Life'
      },
      {
        question: 'What is the correct chemical formula of Plaster of Paris?',
        questionOdia: 'ପ୍ଲାଷ୍ଟର ଅଫ୍ ପ୍ୟାରିସ୍ (Plaster of Paris) ର ସଠିକ୍ ରାସାୟନିକ ସଙ୍କେତ କ’ଣ?',
        options: ['CaSO4 . 2H2O', 'CaSO4 . 1/2 H2O', 'CaSO4 . 5H2O', 'CaCl2 . 2H2O'],
        optionsOdia: ['CaSO₄ · ୨H₂O', 'CaSO₄ · ½H₂O', 'CaSO₄ · ୫H₂O', 'CaCl₂ · ୨H₂O'],
        correctAnswerIndex: 1,
        explanation: 'Plaster of Paris is calcium sulphate hemihydrate: CaSO4 . 1/2 H2O.',
        explanationOdia: 'ପ୍ଲାଷ୍ଟର ଅଫ୍ ପ୍ୟାରିସ୍ ହେଉଛି କ୍ୟାଲସିୟମ୍ ସଲଫେଟ୍ ହେମିହାଇଡ୍ରେଟ୍ (CaSO₄ · ½H₂O) ।',
        topic: 'Chemical Formulae'
      },
      {
        question: 'Which gas is evolved with effervescence when an acid reacts with sodium hydrogencarbonate?',
        questionOdia: 'ଅମ୍ଳ ସହିତ ସୋଡ଼ିୟମ୍ ହାଇଡ୍ରୋଜେନ୍ କାର୍ବୋନେଟ୍ ପ୍ରତିକ୍ରିୟା କଲେ ଫେଣ ସହ କେଉଁ ଗ୍ୟାସ୍ ବାହାରେ?',
        options: ['Hydrogen (H2)', 'Carbon dioxide (CO2)', 'Oxygen (O2)', 'Nitrogen dioxide (NO2)'],
        optionsOdia: ['ଉଦ୍ଜାନ (H₂)', 'ଅଙ୍ଗାରକାମ୍ଳ (CO₂)', 'ଅମ୍ଳଜାନ (O₂)', 'ନାଇଟ୍ରୋଜେନ୍ ଡାଇଅକ୍ସାଇଡ୍'],
        correctAnswerIndex: 1,
        explanation: 'Acids decompose bicarbonates to liberate carbon dioxide gas (CO2), which turns lime water milky.',
        explanationOdia: 'ଏହି ପ୍ରତିକ୍ରିୟାରେ କାର୍ବନ ଡାଇଅକ୍ସାଇଡ୍ (CO₂) ଗ୍ୟାସ୍ ବାହାରେ ଯାହା ଚୂନପାଣିକୁ ଦୁଧିଆ କରେ ।',
        topic: 'Acid-Carbonate Reactions'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 10',
    order: 3,
    title: 'Metals and Non-Metals',
    titleOdia: 'ଧାତୁ ଓ ଅଧାତୁ',
    description: 'Physical & chemical properties, reactivity series, ionic bonding, metallurgy (roasting, calcination, refining), corrosion of iron, and alloys.',
    descriptionOdia: 'ଭୌତିକ ଓ ରାସାୟନିକ ଗୁଣ, ପ୍ରତିକ୍ରିୟାଶୀଳତା ଶ୍ରେଣୀ, ଆୟନୀୟ ବନ୍ଧନ, ଧାତୁ ନିଷ୍କାସନ (ରୋଷ୍ଟିଂ, କ୍ୟାଲସିନେସନ୍) ଓ ମିଶ୍ରଧାତୁ ।',
    lesson: {
      title: 'Reactivity Series, Ionic Bonding & Metallurgy',
      titleOdia: 'ପ୍ରତିକ୍ରିୟାଶୀଳତା କ୍ରମ, ଆୟନୀୟ ବନ୍ଧ ଓ ଧାତୁବିଦ୍ୟା',
      durationMinutes: 26,
      objectives: [
        'Rank metals in the reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au',
        'Explain electron transfer in ionic bond formation (e.g. NaCl, MgCl2) and high melting points',
        'Understand metallurgical extraction: roasting sulfide ores vs calcination of carbonate ores',
        'Analyze electrolytic refining of blister copper and galvanisation of iron using zinc'
      ],
      objectivesOdia: [
        'ପ୍ରତିକ୍ରିୟାଶୀଳତା ଶ୍ରେଣୀରେ ଧାତୁମାନଙ୍କ କ୍ରମ ବୁଝିବା (K > Na > Ca ... > Ag > Au)',
        'ଇଲେକ୍ଟ୍ରନ୍ ସ୍ଥାନାନ୍ତର ଦ୍ୱାରା ଆୟନୀୟ ବନ୍ଧ (Ionic Bond) ଗଠନ ଓ ଉଚ୍ଚ ଗଳନାଙ୍କର କାରଣ ଜାଣିବା',
        'ଧାତୁ ନିଷ୍କାସନ: ସଲଫାଇଡ୍ ପିଣ୍ଡର ରୋଷ୍ଟିଂ (Roasting) ଓ କାର୍ବୋନେଟ୍ ପିଣ୍ଡର କ୍ୟାଲସିନେସନ୍ (Calcination) ବୁଝିବା',
        'ତମ୍ବାର ବିଦ୍ୟୁତ ବିଶୋଧନ ଏବଂ ଦସ୍ତା (Zinc) ଲେପନ ଦ୍ୱାରା ଗାଲଭାନାଇଜେସନ୍ ଶିଖିବା'
      ],
      content: 'Metals are electropositive elements that donate valence electrons to form cations, whereas non-metals are electronegative elements that accept electrons to form anions. The electrostatic attraction between oppositely charged ions forms strong ionic bonds (e.g. Mg2+ + 2Cl- -> MgCl2), which confer high melting points, brittleness, and electrical conductivity in molten or aqueous state. Highly reactive metals (K, Na, Ca) are extracted via molten electrolysis. Moderate metals (Zn, Fe) occur as sulfides or carbonates and are converted to oxides via roasting (heating in excess air) or calcination (heating in limited air), followed by carbon reduction. Unreactive metals (Au, Pt) exist in native states. Rusting of iron requires both oxygen and moisture simultaneously; it is prevented through painting, greasing, galvanising with zinc, and alloying (e.g. stainless steel = Fe + Ni + Cr).',
      contentOdia: 'ଧାତୁଗୁଡ଼ିକ ଇଲେକ୍ଟ୍ରନ୍ ତ୍ୟାଗ କରି ଧନାତ୍ମକ ଆୟନ (କ୍ୟାଟାୟନ୍) ଏବଂ ଅଧାତୁଗୁଡ଼ିକ ଇଲେକ୍ଟ୍ରନ୍ ଗ୍ରହଣ କରି ଋଣାତ୍ମକ ଆୟନ (ଆନାୟନ୍) ସୃଷ୍ଟି କରନ୍ତି । ଏହି ବିପରୀତ ଚାର୍ଜ୍ ମଧ୍ୟରେ ସୃଷ୍ଟ ଆକର୍ଷଣ ବଳକୁ ଆୟନୀୟ ବନ୍ଧନ କୁହାଯାଏ (ଯଥା MgCl₂) । ଏହି ଯୌଗିକଗୁଡ଼ିକର ଗଳନାଙ୍କ ଓ ସ୍ଫୁଟନାଙ୍କ ଖୁବ୍ ଉଚ୍ଚ ଥାଏ ଏବଂ ଏଗୁଡ଼ିକ ତରଳ ବା ଦ୍ରବଣ ଅବସ୍ଥାରେ ବିଦ୍ୟୁତ୍ ପରିବହନ କରନ୍ତି । ଅଧିକ ସକ୍ରିୟ ଧାତୁମାନଙ୍କୁ ବିଦ୍ୟୁତ୍ ବିଶ୍ଳେଷଣ ଦ୍ୱାରା ନିଷ୍କାସନ କରାଯାଏ । ମଧ୍ୟମ ସକ୍ରିୟ ଧାତୁଗୁଡ଼ିକୁ ରୋଷ୍ଟିଂ (ବାୟୁ ଉପସ୍ଥିତିରେ ଉତ୍ତପ୍ତ) କିମ୍ବା କ୍ୟାଲସିନେସନ୍ (ସୀମିତ ବାୟୁରେ ଉତ୍ତପ୍ତ) ଦ୍ୱାରା ଅକ୍ସାଇଡ୍ ରେ ପରିଣତ କରି କାର୍ବନ୍ ଦ୍ୱାରା ବିଜାରଣ କରାଯାଏ । ଲୁହାରେ କଳଙ୍କି ଲାଗିବା ପାଇଁ ଅମ୍ଳଜାନ ଓ ଜଳୀୟବାଷ୍ପ ଉଭୟ ଦରକାର । ଦସ୍ତା ଲେପନ (Galvanisation) ଦ୍ୱାରା ଲୁହାକୁ କଳଙ୍କିରୁ ରକ୍ଷା କରାଯାଏ ।',
      takeaways: [
        'Ionic compounds conduct electricity only when molten or dissolved in water, not as solid crystals',
        'Roasting is for sulfide ores (excess O2); Calcination is for carbonate ores (limited/no O2)',
        'Galvanization coats iron with thin sacrificial zinc layer',
        'Aqua regia is a 3:1 molar mixture of concentrated HCl and concentrated HNO3 that dissolves gold'
      ],
      takeawaysOdia: [
        'ଆୟନୀୟ ଯୌଗିକ କେବଳ ତରଳ ବା ଜଳୀୟ ଦ୍ରବଣରେ ବିଦ୍ୟୁତ୍ ପରିବହନ କରନ୍ତି',
        'ସଲଫାଇଡ୍ ଖଣିଜ ପାଇଁ ରୋଷ୍ଟିଂ ଏବଂ କାର୍ବୋନେଟ୍ ଖଣିଜ ପାଇଁ କ୍ୟାଲସିନେସନ୍ ବ୍ୟବହୃତ ହୁଏ',
        'ଦସ୍ତା ଲେପନ (Galvanisation) ଲୁହାକୁ କଳଙ୍କି ଧରିବାରୁ ରକ୍ଷା କରେ',
        'ଏକୁଆ ରେଜିଆ (Aqua Regia) ୩:୧ ଅନୁପାତରେ ଗାଢ଼ HCl ଓ HNO₃ ର ମିଶ୍ରଣ ଯାହା ସୁନାକୁ ତରଳାଇ ଦିଏ'
      ]
    },
    quiz: [
      {
        question: 'Which of the following metals is so soft that it can be cut easily with a knife and is stored under kerosene?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁ ଧାତୁଟି ଏତେ ନରମ ଯେ ଛୁରୀରେ କଟାଯାଇପାରେ ଏବଂ କିରୋସିନ୍ ଭିତରେ ରଖାଯାଏ?',
        options: ['Iron', 'Sodium', 'Magnesium', 'Aluminium'],
        optionsOdia: ['ଲୁହା', 'ସୋଡ଼ିୟମ୍ (Sodium)', 'ମ୍ୟାଗ୍ନେସିୟମ୍', 'ଆଲୁମିନିୟମ୍'],
        correctAnswerIndex: 1,
        explanation: 'Sodium and Potassium are alkali metals stored under kerosene due to violent reactivity with air and water.',
        explanationOdia: 'ସୋଡ଼ିୟମ୍ ଅତ୍ୟନ୍ତ ନରମ ଓ ପ୍ରତିକ୍ରିୟାଶୀଳ ହୋଇଥିବାରୁ ଏହାକୁ କିରୋସିନରେ ବୁଡ଼ାଇ ରଖାଯାଏ ।',
        topic: 'Properties of Metals'
      },
      {
        question: 'The heating of carbonate ores strongly in limited or absence of air to convert them into oxides is called:',
        questionOdia: 'କାର୍ବୋନେଟ୍ ପିଣ୍ଡକୁ ସୀମିତ ବାୟୁରେ ଉତ୍ତପ୍ତ କରି ଅକ୍ସାଇଡ୍ ରେ ପରିଣତ କରିବା ପ୍ରକ୍ରିୟାକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Roasting', 'Smelting', 'Calcination', 'Electrolysis'],
        optionsOdia: ['ରୋଷ୍ଟିଂ (Roasting)', 'ସ୍ମେଲ୍ଟିଂ', 'କ୍ୟାଲସିନେସନ୍ (Calcination)', 'ବିଦ୍ୟୁତ୍ ବିଶ୍ଳେଷଣ'],
        correctAnswerIndex: 2,
        explanation: 'Calcination decomposes carbonate ores (e.g. ZnCO3 -> ZnO + CO2) in limited air.',
        explanationOdia: 'କ୍ୟାଲସିନେସନ୍ ପ୍ରଣାଳୀରେ କାର୍ବୋନେଟ୍ ଖଣିଜରୁ ଅକ୍ସାଇଡ୍ ପ୍ରସ୍ତୁତ କରାଯାଏ ।',
        topic: 'Metallurgy'
      },
      {
        question: 'What is the composition of the super-solvent Aqua Regia capable of dissolving gold and platinum?',
        questionOdia: 'ସୁନା ଓ ପ୍ଲାଟିନମ୍ ତରଳାଇ ପାରୁଥିବା ଏକୁଆ ରେଜିଆ (ଅମ୍ଳରାଜ) ର ଉପାଦାନ ଅନୁପାତ କ’ଣ?',
        options: [
          '3 parts conc. HCl : 1 part conc. HNO3',
          '1 part conc. HCl : 3 parts conc. HNO3',
          '1 part conc. H2SO4 : 1 part conc. HNO3',
          '3 parts conc. H2SO4 : 1 part conc. HCl'
        ],
        optionsOdia: [
          '୩ ଭାଗ ଗାଢ଼ HCl : ୧ ଭାଗ ଗାଢ଼ HNO₃',
          '୧ ଭାଗ ଗାଢ଼ HCl : ୩ ଭାଗ ଗାଢ଼ HNO₃',
          '୧ ଭାଗ ଗାଢ଼ H₂SO₄ : ୧ ଭାଗ ଗାଢ଼ HNO₃',
          '୩ ଭାଗ ଗାଢ଼ H₂SO₄ : ୧ ଭାଗ ଗାଢ଼ HCl'
        ],
        correctAnswerIndex: 0,
        explanation: 'Aqua Regia is fresh mixture of 3 parts concentrated hydrochloric acid and 1 part concentrated nitric acid.',
        explanationOdia: '୩ ଭାଗ ଗାଢ଼ ହାଇଡ୍ରୋକ୍ଲୋରିକ୍ ଅମ୍ଳ ଓ ୧ ଭାଗ ଗାଢ଼ ନାଇଟ୍ରିକ୍ ଅମ୍ଳର ମିଶ୍ରଣକୁ ଅମ୍ଳରାଜ କୁହାଯାଏ ।',
        topic: 'Reactivity & Solvents'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 10',
    order: 4,
    title: 'Life Processes',
    titleOdia: 'ଜୈବ ପ୍ରକ୍ରିୟା',
    description: 'Autotrophic and heterotrophic nutrition, human digestive system, aerobic vs anaerobic respiration, human circulatory system & double circulation, and nephron excretion.',
    descriptionOdia: 'ସ୍ୱଭୋଜୀ ଓ ପରଭୋଜୀ ପୋଷଣ, ମାନବ ପରିପାକ ତନ୍ତ୍ର, ଶ୍ୱସନ, ଦ୍ୱି-ପରିଚାଳନ ରକ୍ତ ସଞ୍ଚାଳନ ଏବଂ ନେଫ୍ରନ୍ ଦ୍ୱାରା ରେଚନ ।',
    lesson: {
      title: 'Nutrition, Respiration, Circulation & Excretion',
      titleOdia: 'ପୋଷଣ, ଶ୍ୱସନ, ପରିବହନ ଓ ରେଚନ କ୍ରିୟା',
      durationMinutes: 28,
      objectives: [
        'Understand photosynthesis biochemical pathway: light absorption by chlorophyll, photolysis of water, and CO2 reduction to glucose',
        'Trace human digestive enzyme cascade: salivary amylase, pepsin, bile juice emulsification, pancreatic trypsin and lipase',
        'Compare aerobic respiration (38 ATP) with anaerobic fermentation in yeast (ethanol + CO2) and muscle cells (lactic acid causing cramps)',
        'Diagram human heart anatomy, double circulation (pulmonary & systemic), and nephron ultrafiltration in kidneys'
      ],
      objectivesOdia: [
        'ଆଲୋକ ଶ୍ଳେଷଣ ପ୍ରକ୍ରିୟା: କ୍ଲୋରୋଫିଲ୍ ଦ୍ୱାରା ଆଲୋକ ଶୋଷଣ, ଜଳର ଆଲୋକ ବିଭାଜନ ଓ ଅଙ୍ଗାରକାମ୍ଳରୁ ଗ୍ଲୁକୋଜ୍ ପ୍ରସ୍ତୁତି ବୁଝିବା',
        'ମାନବ ପରିପାକ ଏଞ୍ଜାଇମ୍: ଲାଳ ଏମାଇଲେଜ୍, ପେପସିନ୍, ପିତ୍ତରସ ଦ୍ୱାରା ସ୍ନେହସାର ଅବଦ୍ରବୀକରଣ (Emulsification), ଟ୍ରିପସିନ୍ ଓ ଲାଇପେଜ୍ ଜାଣିବା',
        'ଅମ୍ଳଜାନଯୁକ୍ତ ବାୟବୀୟ ଶ୍ୱସନ ଏବଂ ଇଷ୍ଟ ଓ ମାଂସପେଶୀର ଅବାୟବୀୟ ଶ୍ୱସନ (ଲାକ୍ଟିକ୍ ଅମ୍ଳ) ର ତୁଳନା କରିବା',
        'ହୃତ୍‌ପିଣ୍ଡର ଦ୍ୱି-ସଞ୍ଚାଳନ ପ୍ରକ୍ରିୟା ଓ ବୃକ୍‌କର ନେଫ୍ରନ୍ (Nephron) ଦ୍ୱାରା ମୂତ୍ର ନିଷ୍କାସନ ବୁଝିବା'
      ],
      content: 'Life processes maintain homeostasis in living organisms. In autotrophs, chlorophyll traps solar photons to photolyse water into oxygen and synthesize carbohydrates stored as starch. In human holozoic nutrition, food is digested mechanically and chemically: salivary amylase digests starch in mouth; gastric glands secrete HCl, mucus, and pepsin for protein breakdown; liver bile emulsifies fats; pancreas releases trypsin and lipase; and small intestine villi absorb amino acids and glucose. Respiration breaks down 6-carbon glucose into 3-carbon pyruvate in cytoplasm. Aerobic oxidation inside mitochondria yields 36-38 ATP, CO2, and H2O. Anaerobic fermentation in human muscles produces lactic acid, inducing muscle cramps. The four-chambered mammalian heart enforces double circulation, preventing deoxygenated blood mixing with oxygenated blood. Excretion utilizes millions of nephron filtration units in the kidneys to filter urea via Bowman capsule ultrafiltration and selective tubular reabsorption.',
      contentOdia: 'ଜୀବନ ଧାରଣ ପାଇଁ ଆବଶ୍ୟକ ମୁଖ୍ୟ ପ୍ରକ୍ରିୟାଗୁଡ଼ିକ ହେଉଛି ପୋଷଣ, ଶ୍ୱସନ, ପରିବହନ ଓ ରେଚନ । ସବୁଜ ଉଦ୍ଭିଦ ଆଲୋକ ଶ୍ଳେଷଣ ଦ୍ୱାରା ସୂର୍ଯ୍ୟାଲୋକରୁ ଖାଦ୍ୟ ତିଆରି କରନ୍ତି । ମଣିଷର ହଜମ ପ୍ରକ୍ରିୟାରେ ପାଟିରେ ଲାଳ ଏମାଇଲେଜ୍ ଶ୍ୱେତସାର ହଜମ କରେ, ପାକସ୍ଥଳୀରେ HCl ଓ ପେପସିନ୍ ପ୍ରୋଟିନ୍ ହଜମ କରେ, ଯକୃତର ପିତ୍ତରସ ଚର୍ବିକୁ ଛୋଟ କଣିକାରେ ପରିଣତ କରେ ଏବଂ କ୍ଷୁଦ୍ରାନ୍ତର ଭିଲାଇ (Villi) ଖାଦ୍ୟ ଶୋଷଣ କରେ । ଶ୍ୱସନରେ ଗ୍ଲୁକୋଜ୍ ଭାଙ୍ଗି ମାଇଟୋକଣ୍ଡ୍ରିଆରେ ପ୍ରଚୁର ATP ଶକ୍ତି ତିଆରି ହୁଏ । ଅମ୍ଳଜାନ ଅଭାବରେ ମାଂସପେଶୀରେ ଲାକ୍ଟିକ୍ ଅମ୍ଳ ଜମି ବାତ ବା କ୍ରାମ୍ପ (Cramps) ହୁଏ । ମଣିଷ ହୃତ୍‌ପିଣ୍ଡର ୪ଟି କୋଠରୀ ଅମ୍ଳଜାନଯୁକ୍ତ ଓ ଅମ୍ଳଜାନବିହୀନ ରକ୍ତକୁ ଅଲଗା ରଖି ଦ୍ୱି-ପରିଚାଳନ କରେ । ବୃକ୍‌କର ନେଫ୍ରନ୍ ମୂତ୍ର ଛାଣି ଶରୀରରୁ ବର୍ଜ୍ୟବସ୍ତୁ ୟୁରିଆ ନିଷ୍କାସନ କରେ ।',
      takeaways: [
        'Stomata guard cells swell when water flows into them, opening the stomatal pore',
        'Gastric juice contains Pepsin (protein digesting), Hydrochloric acid (acidic medium & sterilizer), and Mucus (stomach wall protection)',
        'Lactic acid accumulation in skeletal muscles causes sudden post-exercise muscular fatigue and cramps',
        'Double circulation ensures efficient oxygen supply required for endothermic homeothermy'
      ],
      takeawaysOdia: [
        'ରକ୍ଷୀ କୋଷ (Guard cells) ଜଳ ଗ୍ରହଣ କରି ଫୁଲିଲେ ଷ୍ଟୋମାଟା ରନ୍ଧ୍ର ଖୋଲିଯାଏ',
        'ପାକସ୍ଥଳୀରେ ମ୍ୟୁକସ୍ HCl ର ତୀବ୍ରତାରୁ ପାକସ୍ଥଳୀ କାନ୍ଥକୁ ସୁରକ୍ଷା ଦିଏ',
        'ମାଂସପେଶୀରେ ଲାକ୍ଟିକ୍ ଅମ୍ଳ ଜମା ହେବା ଦ୍ୱାରା ଶରୀର ଘୋଳାବିନ୍ଧା ଓ କ୍ରାମ୍ପ ହୁଏ',
        'ଦ୍ୱି-ସଞ୍ଚାଳନ ଶରୀରକୁ ପ୍ରଚୁର ଅମ୍ଳଜାନ ଯୋଗାଇ ଉଷ୍ମରକ୍ତ ଶରୀର ତାପମାତ୍ରା ସ୍ଥିର ରଖେ'
      ]
    },
    quiz: [
      {
        question: 'Which component of gastric juice protects the inner stomach lining from corrosive hydrochloric acid?',
        questionOdia: 'ପାକରସର କେଉଁ ଉପାଦାନ ପାକସ୍ଥଳୀର ଭିତର କାନ୍ଥକୁ ହାଇଡ୍ରୋକ୍ଲୋରିକ୍ ଅମ୍ଳରୁ ସୁରକ୍ଷା ଦିଏ?',
        options: ['Pepsin', 'Mucus', 'Bile juice', 'Salivary amylase'],
        optionsOdia: ['ପେପସିନ୍', 'ମ୍ୟୁକସ୍ (Mucus)', 'ପିତ୍ତରସ', 'ଲାଳ ଏମାଇଲେଜ୍'],
        correctAnswerIndex: 1,
        explanation: 'Mucus forms a protective protective alkaline viscous barrier preventing gastric ulcers.',
        explanationOdia: 'ମ୍ୟୁକସ୍ ଏକ ସ୍ନିଗ୍ଧ ସ୍ତର ସୃଷ୍ଟି କରି ପାକସ୍ଥଳୀ କାନ୍ଥକୁ HCl ଅମ୍ଳରୁ ରକ୍ଷା କରେ ।',
        topic: 'Digestive Enzymes'
      },
      {
        question: 'Accumulation of which substance causes muscle cramps after sudden intense physical exertion?',
        questionOdia: 'ହଠାତ୍ କଠିନ ବ୍ୟାୟାମ କଲେ ମାଂସପେଶୀରେ କେଉଁ ପଦାର୍ଥ ଜମିବା ଯୋଗୁଁ କ୍ରାମ୍ପ (ବାତ) ହୁଏ?',
        options: ['Ethanol', 'Lactic acid', 'Carbonic acid', 'Pyruvate'],
        optionsOdia: ['ଇଥାନଲ୍', 'ଲାକ୍ଟିକ୍ ଅମ୍ଳ (Lactic Acid)', 'କାର୍ବୋନିକ୍ ଅମ୍ଳ', 'ପାଇରୁଭେଟ୍'],
        correctAnswerIndex: 1,
        explanation: 'Under oxygen deficit, muscle cells undergo anaerobic respiration converting pyruvate to lactic acid.',
        explanationOdia: 'ଅମ୍ଳଜାନ ଅଭାବରେ ଅବାୟବୀୟ ଶ୍ୱସନ ଘଟି ଲାକ୍ଟିକ୍ ଅମ୍ଳ ଜମିଯାଏ, ଯାହା ଯନ୍ତ୍ରଣା ସୃଷ୍ଟି କରେ ।',
        topic: 'Respiration & Fermentation'
      },
      {
        question: 'What is the structural and functional filtration unit of the human kidney called?',
        questionOdia: 'ମଣିଷ ବୃକ୍‌କର ଗଠନମୂଳକ ଓ କାର୍ଯ୍ୟକାରୀ ଛାଣନ ଏକକକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Neuron', 'Nephron', 'Alveolus', 'Villus'],
        optionsOdia: ['ନ୍ୟୁରନ୍ (Neuron)', 'ନେଫ୍ରନ୍ (Nephron)', 'ଆଲଭିଓଲସ୍', 'ଭିଲାଇ'],
        correctAnswerIndex: 1,
        explanation: 'Each kidney contains roughly 1 to 1.2 million microscopic filtering nephrons.',
        explanationOdia: 'ନେଫ୍ରନ୍ ହେଉଛି ବୃକ୍‌କର ମୂଳ ଛାଣନ ଏକକ ଯାହା ରକ୍ତରୁ ବର୍ଜ୍ୟବସ୍ତୁ ଛାଣି ମୂତ୍ର ତିଆରି କରେ ।',
        topic: 'Excretory System'
      }
    ]
  },
  {
    subjectCode: 'SCI',
    classLevel: 'Class 10',
    order: 5,
    title: 'Light: Reflection and Refraction',
    titleOdia: 'ଆଲୋକ: ପ୍ରତିଫଳନ ଓ ପ୍ରତିସରଣ',
    description: 'Laws of reflection, spherical mirrors (concave, convex), mirror formula and magnification, refraction of light, Snell law, refractive index, and lens formula.',
    descriptionOdia: 'ପ୍ରତିଫଳନ ନିୟମ, ଗୋଲକୀୟ ଦର୍ପଣ (ଅବତଳ, ଉତ୍ତଳ), ଦର୍ପଣ ସୂତ୍ର, ପ୍ରତିସରଣ, ସ୍ନେଲ୍‌ଙ୍କ ନିୟମ, ପ୍ରତିସରଣାଙ୍କ ଏବଂ ଲେନ୍ସ ସୂତ୍ର ।',
    lesson: {
      title: 'Optics, Mirror Formula, Snell Law & Lens Power',
      titleOdia: 'ଆଲୋକ ବିଜ୍ଞାନ, ଦର୍ପଣ ସୂତ୍ର, ସ୍ନେଲ୍ ନିୟମ ଓ ଲେନ୍ସ ପାୱାର',
      durationMinutes: 28,
      objectives: [
        'Apply Cartesian sign convention to mirror formula: 1/f = 1/v + 1/u and magnification m = -v/u = h\'/h',
        'Construct ray diagrams for concave and convex mirrors across varied object locations',
        'State Snell Law: sin(i) / sin(r) = constant = refractive index n21 = v1 / v2',
        'Apply lens formula: 1/f = 1/v - 1/u and compute optical lens power P = 1 / f(in meters) in Dioptres (D)'
      ],
      objectivesOdia: [
        'କାର୍ତ୍ତେସୀୟ ଚିହ୍ନ ପ୍ରଣାଳୀ ଓ ଦର୍ପଣ ସୂତ୍ର: ୧/f = ୧/v + ୧/u ଏବଂ ପରିବର୍ଦ୍ଧନ m = -v/u ବୁଝିବା',
        'ଅବତଳ ଓ ଉତ୍ତଳ ଦର୍ପଣରେ ରଶ୍ମିଚିତ୍ର (Ray diagrams) ଅଙ୍କନ କରି ପ୍ରତିବିମ୍ବର ସ୍ଥିତି ନିରୂପଣ କରିବା',
        'ସ୍ନେଲ୍‌ଙ୍କ ନିୟମ: sin(i) / sin(r) = ପ୍ରତିସରଣାଙ୍କ (Refractive Index) ବୁଝିବା',
        'ଲେନ୍ସ ସୂତ୍ର: ୧/f = ୧/v - ୧/u ଏବଂ ଲେନ୍ସର କ୍ଷମତା P = ୧/f (ଡାଇଓପ୍ଟର୍ D) ହିସାବ କରିବା'
      ],
      content: 'Light travels in straight lines in homogeneous media. Reflection obeys two laws: angle of incidence equals angle of reflection (i = r), and incident ray, normal, and reflected ray lie in the same plane. Concave mirrors converge light and produce real inverted images (or virtual magnified images when object is between pole and focus, making them dental mirrors). Convex mirrors diverge light, always forming diminished virtual erect images with wide field of view, making them vehicle rear-view mirrors. Refraction is the bending of light at an interface due to speed change across media: n = c / v. Snell Law states sin(i) / sin(r) = n21. Lenses refract light: convex lenses are converging (f > 0); concave lenses are diverging (f < 0). Lens power P in Dioptres equals 1 / f(in meters).',
      contentOdia: 'ଆଲୋକ ସରଳରେଖାରେ ଗତି କରେ । ପ୍ରତିଫଳନ ନିୟମ ଅନୁସାରେ ଆପତନ କୋଣ ପ୍ରତିଫଳନ କୋଣ ସହ ସମାନ (i = r) । ଅବତଳ ଦର୍ପଣ ଆଲୋକ ରଶ୍ମିକୁ ଏକତ୍ରିତ (Converge) କରେ ଏବଂ ବସ୍ତୁଟି ଫୋକସ୍ ଓ ମେରୁ ମଧ୍ୟରେ ଥିଲେ ବଡ଼ ଓ ସଳଖ ପ୍ରତିବିମ୍ବ ଦିଏ, ତେଣୁ ଦନ୍ତ ଚିକିତ୍ସକମାନେ ଏହା ବ୍ୟବହାର କରନ୍ତି । ଉତ୍ତଳ ଦର୍ପଣ ସର୍ବଦା ଛୋଟ ଓ ସଳଖ ପ୍ରତିବିମ୍ବ ଦେଇ ଦୃଷ୍ଟିକ୍ଷେତ୍ର ବଢ଼ାଇଥାଏ, ତେଣୁ ଏହା ଗାଡ଼ିର ପଛ ଦେଖିବା ଦର୍ପଣ (Rear view mirror) ଭାବେ ବ୍ୟବହୃତ ହୁଏ । ଗୋଟିଏ ମାଧ୍ୟମରୁ ଅନ୍ୟ ମାଧ୍ୟମକୁ ଗଲେ ଆଲୋକର ବେଗ ବଦଳିବା ଯୋଗୁଁ ଦିଗ ପରିବର୍ତ୍ତନ ହୁଏ, ଏହାକୁ ପ୍ରତିସରଣ କୁହାଯାଏ । ସ୍ନେଲ୍‌ଙ୍କ ନିୟମ: sin(i) / sin(r) = ସ୍ଥିରାଙ୍କ । ଲେନ୍ସର କ୍ଷମତା (Power) P = ୧/f (ମିଟରରେ) ଏବଂ ଏହାର ଏକକ ହେଉଛି ଡାଇଓପ୍ଟର୍ (Dioptre, D) ।',
      takeaways: [
        'Mirror formula: 1/f = 1/v + 1/u; Lens formula: 1/f = 1/v - 1/u',
        'Convex mirror always yields virtual, erect, and diminished images',
        'Optical density differs from mass density: Kerosene has higher optical refractive index than water despite lower mass density',
        'Power of a converging lens of focal length +50 cm is P = +1 / 0.5 = +2.0 D'
      ],
      takeawaysOdia: [
        'ଦର୍ପଣ ସୂତ୍ର: ୧/f = ୧/v + ୧/u; ଲେନ୍ସ ସୂତ୍ର: ୧/f = ୧/v - ୧/u',
        'ଉତ୍ତଳ ଦର୍ପଣ ସର୍ବଦା ଆଭାସୀ, ସଳଖ ଓ ଖର୍ବିତ ପ୍ରତିବିମ୍ବ ଗଠନ କରେ',
        'ପ୍ରତିସରଣାଙ୍କ: କିରୋସିନର ଆଲୋକୀୟ ସାନ୍ଦ୍ରତା ଜଳଠାରୁ ଅଧିକ',
        '୫୦ ସେମି ଫୋକସ୍ ଦୂରତା ଥିବା ଉତ୍ତଳ ଲେନ୍ସର ପାୱାର୍ = +୨.୦ D (ଡାଇଓପ୍ଟର୍)'
      ]
    },
    quiz: [
      {
        question: 'Which type of mirror is utilized as a rear-view wing mirror in motor vehicles?',
        questionOdia: 'ମୋଟରଗାଡ଼ିରେ ପଛପଟ ଟ୍ରାଫିକ୍ ଦେଖିବା ପାଇଁ କେଉଁ ପ୍ରକାରର ଦର୍ପଣ ବ୍ୟବହାର କରାଯାଏ?',
        options: ['Plane mirror', 'Concave mirror', 'Convex mirror', 'Cylindrical mirror'],
        optionsOdia: ['ସମତଳ ଦର୍ପଣ', 'ଅବତଳ ଦର୍ପଣ', 'ଉତ୍ତଳ ଦର୍ପଣ (Convex Mirror)', 'ସିଲିଣ୍ଡ୍ରିକାଲ୍ ଦର୍ପଣ'],
        correctAnswerIndex: 2,
        explanation: 'Convex mirrors always provide an erect, diminished image giving an expansive rear field of view.',
        explanationOdia: 'ଉତ୍ତଳ ଦର୍ପଣ ସର୍ବଦା ସଳଖ ପ୍ରତିବିମ୍ବ ଦିଏ ଏବଂ ବିସ୍ତୃତ ପଛ ଦୃଶ୍ୟ ଦେଖାଇବାରେ ସାହାଯ୍ୟ କରେ ।',
        topic: 'Spherical Mirrors'
      },
      {
        question: 'What is the power of a convex lens having a focal length of +25 cm (+0.25 m)?',
        questionOdia: '+୨୫ ସେମି (+୦.୨୫ ମିଟର) ଫୋକସ୍ ଦୂରତା ବିଶିଷ୍ଟ ଏକ ଉତ୍ତଳ ଲେନ୍ସର କ୍ଷମତା (Power) କେତେ?',
        options: ['+4.0 D', '-4.0 D', '+0.25 D', '+2.5 D'],
        optionsOdia: ['+୪.୦ D', '-୪.୦ D', '+୦.୨୫ D', '+୨.୫ D'],
        correctAnswerIndex: 0,
        explanation: 'Power P = 1 / f(in meters) = 1 / 0.25 = +4.0 Dioptres.',
        explanationOdia: 'P = ୧ / f = ୧ / ୦.୨୫ = +୪.୦ ଡାଇଓପ୍ଟର୍ (D) ।',
        topic: 'Lens Power'
      },
      {
        question: 'Snell Law of refraction states that the ratio of sin(i) to sin(r) equals:',
        questionOdia: 'ସ୍ନେଲ୍‌ଙ୍କ ପ୍ରତିସରଣ ନିୟମ ଅନୁସାରେ sin(i) ଓ sin(r) ର ଅନୁପାତ କାହା ସହ ସମାନ?',
        options: ['Zero', 'Constant refractive index n21', 'Focal length', 'Object distance'],
        optionsOdia: ['ଶୂନ', 'ସ୍ଥିରାଙ୍କ ବା ପ୍ରତିସରଣାଙ୍କ (Refractive index n₂₁)', 'ଫୋକସ୍ ଦୂରତା', 'ବସ୍ତୁ ଦୂରତା'],
        correctAnswerIndex: 1,
        explanation: 'The ratio sin(i) / sin(r) is constant for a given pair of media, equaling the relative refractive index.',
        explanationOdia: 'ଦୁଇ ମାଧ୍ୟମ ମଧ୍ୟରେ sin(i) / sin(r) ସର୍ବଦା ଏକ ସ୍ଥିରାଙ୍କ, ଯାହାକୁ ପ୍ରତିସରଣାଙ୍କ କୁହାଯାଏ ।',
        topic: 'Snell Law'
      }
    ]
  },

  // ---------------------------------------------------------
  // MATHEMATICS (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'MATH',
    classLevel: 'Class 10',
    order: 1,
    title: 'Real Numbers',
    titleOdia: 'ବାସ୍ତବ ସଂଖ୍ୟା',
    description: 'Fundamental Theorem of Arithmetic, prime factorisation method for HCF and LCM, proving irrationality of sqrt(2), sqrt(3), sqrt(5), and decimal representations.',
    descriptionOdia: 'ପାଟିଗଣିତର ମୌଳିକ ଉପପାଦ୍ୟ, ଗ.ସା.ଗୁ. ଓ ଲ.ସା.ଗୁ. ନିର୍ଣ୍ଣୟ, √୨, √୩, √୫ ର ଅପରିମେୟତା ପ୍ରମାଣ ଏବଂ ଦଶମିକ ପ୍ରସାରଣ ।',
    lesson: {
      title: 'Fundamental Theorem of Arithmetic & Irrationality Proofs',
      titleOdia: 'ପାଟିଗଣିତର ମୌଳିକ ଉପପାଦ୍ୟ ଓ ଅପରିମେୟତା ପ୍ରମାଣ',
      durationMinutes: 25,
      objectives: [
        'State Fundamental Theorem of Arithmetic: Every composite number can be factored uniquely into primes',
        'Verify identity: HCF(a, b) * LCM(a, b) = a * b for any two positive integers',
        'Construct rigorous proof of irrationality by contradiction for sqrt(2), sqrt(3), and sqrt(5)',
        'Characterize terminating decimals: fraction p/q terminates iff prime factorisation of q is 2^n * 5^m'
      ],
      objectivesOdia: [
        'ପାଟିଗଣିତର ମୌଳିକ ଉପପାଦ୍ୟ: ପ୍ରତ୍ୟେକ ଯୌଗିକ ସଂଖ୍ୟାକୁ ଏକମାତ୍ର ମୌଳିକ ଉତ୍ପାଦକ ଭାବେ ପ୍ରକାଶ କରାଯାଇପାରେ',
        'ସୂତ୍ର ପ୍ରମାଣ: ଦୁଇ ସଂଖ୍ୟାର ଗ.ସା.ଗୁ. × ଲ.ସା.ଗୁ. = ସଂଖ୍ୟାଦ୍ୱୟର ଗୁଣଫଳ',
        'ବିପରୀତ ଧାରଣା (Contradiction) ବ୍ୟବହାର କରି √୨, √୩, √୫ ଅପରିମେୟ ବୋଲି ପ୍ରମାଣ କରିବା',
        'ହର q ର ମୌଳିକ ଗୁଣନୀୟକ ୨ⁿ × ୫ᵐ ହେଲେ ଦଶମିକ ରୂପ ସସୀମ (Terminating) ହେବ ବୋଲି ଜାଣିବା'
      ],
      content: 'The Fundamental Theorem of Arithmetic asserts that every composite integer greater than 1 can be expressed uniquely as a product of prime numbers, disregarding the order of factors. For any two positive integers a and b: HCF(a, b) * LCM(a, b) = a * b. Irrationality of numbers like sqrt(p) for any prime p is proved by contradiction: assuming sqrt(p) = a/b in lowest terms implies a^2 = p*b^2, meaning p divides a^2 and consequently p divides a; substituting a = p*c implies p divides b, contradicting that a and b are coprime. A rational fraction p/q in simplest form has a terminating decimal expansion if and only if the prime factorization of q contains only powers of 2 and/or 5 (q = 2^n * 5^m).',
      contentOdia: 'ପାଟିଗଣିତର ମୌଳିକ ଉପପାଦ୍ୟ ଅନୁସାରେ, ପ୍ରତ୍ୟେକ ଯୌଗିକ ସଂଖ୍ୟାକୁ ମୌଳିକ ସଂଖ୍ୟାମାନଙ୍କର ଗୁଣଫଳ ରୂପେ ଏକ ଅନନ୍ୟ ଉପାୟରେ ପ୍ରକାଶ କରାଯାଇପାରେ । ଯେକୌଣସି ଦୁଇଟି ଧନାତ୍ମକ ପୂର୍ଣ୍ଣସଂଖ୍ୟା a ଓ b ପାଇଁ: ଗ.ସା.ଗୁ.(a, b) × ଲ.ସା.ଗୁ.(a, b) = a × b । ବିପରୀତ ପ୍ରମାଣ ପଦ୍ଧତିରେ ପ୍ରମାଣ କରାଯାଏ ଯେ √୨, √୩, √୫ ପ୍ରଭୃତି ଅପରିମେୟ ସଂଖ୍ୟା ଅଟନ୍ତି । ଏକ ପରିମେୟ ସଂଖ୍ୟା p/q ର ହର q ର ମୌଳିକ ଉତ୍ପାଦକ କେବଳ ୨ ଓ ୫ ର ଘାତ (୨ⁿ × ୫ᵐ) ହୋଇଥିଲେ ତାହାର ଦଶମିକ ରୂପ ସସୀମ ହୁଏ; ଅନ୍ୟଥା ତାହା ଅସସୀମ ଆବୃତ୍ତ (Repeating) ହୁଏ ।',
      takeaways: [
        'Fundamental Theorem of Arithmetic guarantees unique prime factorization',
        'HCF(a, b) * LCM(a, b) = a * b holds strictly for two integers (not three)',
        'If prime p divides a^2, then p divides a (where a is a positive integer)',
        'Rational number p/q has terminating expansion iff q = 2^n * 5^m (n, m non-negative integers)'
      ],
      takeawaysOdia: [
        'ପ୍ରତ୍ୟେକ ଯୌଗିକ ସଂଖ୍ୟାର ମୌଳିକ ବିଶ୍ଳେଷଣ ଅନନ୍ୟ ଅଟେ',
        'ଗ.ସା.ଗୁ. × ଲ.ସା.ଗୁ. = ଦୁଇ ସଂଖ୍ୟାର ଗୁଣଫଳ (କେବଳ ଦୁଇଟି ସଂଖ୍ୟା ପାଇଁ ଲାଗୁ)',
        'ଯଦି ମୌଳିକ ସଂଖ୍ୟା p, a² କୁ ବିଭାଜିତ କରେ, ତେବେ p ନିଶ୍ଚିତ ଭାବେ a କୁ ମଧ୍ୟ ବିଭାଜିତ କରିବ',
        'ହର ୨ⁿ × ୫ᵐ ରୂପରେ ଥିଲେ ଦଶମିକ ପ୍ରସାରଣ ସସୀମ ହୁଏ'
      ]
    },
    quiz: [
      {
        question: 'If HCF(306, 657) = 9, what is the LCM(306, 657)?',
        questionOdia: 'ଯଦି ଗ.ସା.ଗୁ.(୩୦୬, ୬୫୭) = ୯ ହୁଏ, ତେବେ ଲ.ସା.ଗୁ.(୩୦୬, ୬୫୭) କେତେ?',
        options: ['22338', '2238', '201042', '657'],
        optionsOdia: ['୨୨୩୩୮', '୨୨୩୮', '୨୦୧୦୪୨', '୬୫୭'],
        correctAnswerIndex: 0,
        explanation: 'LCM = (a * b) / HCF = (306 * 657) / 9 = 34 * 657 = 22338.',
        explanationOdia: 'ଲ.ସା.ଗୁ. = (୩୦୬ × ୬୫୭) / ୯ = ୩୪ × ୬୫୭ = ୨୨୩୩୮ ।',
        topic: 'HCF and LCM Relation'
      },
      {
        question: 'Which of the following rational fractions will have a terminating decimal expansion?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁ ପରିମେୟ ଭଗ୍ନାଂଶର ଦଶମିକ ରୂପ ସସୀମ (Terminating) ହେବ?',
        options: ['17 / 6', '13 / 3125', '64 / 455', '29 / 343'],
        optionsOdia: ['୧୭ / ୬', '୧୩ / ୩୧୨୫', '୬୪ / ୪୫୫', '୨୯ / ୩୪୩'],
        correctAnswerIndex: 1,
        explanation: '3125 = 5^5 = 2^0 * 5^5, which fits 2^n * 5^m form, ensuring terminating decimal.',
        explanationOdia: '୩୧୨୫ = ୫⁵, ଯାହାର ହରରେ କେବଳ ୫ ର ଘାତ ଥିବାରୁ ଏହା ଏକ ସସୀମ ଦଶମିକ ।',
        topic: 'Terminating Decimals'
      },
      {
        question: 'The number (3 + 2*sqrt(5)) is classified as:',
        questionOdia: '(୩ + ୨√୫) ସଂଖ୍ୟାଟି କେଉଁ ଶ୍ରେଣୀଭୁକ୍ତ?',
        options: ['An integer', 'A rational number', 'An irrational number', 'A natural number'],
        optionsOdia: ['ପୂର୍ଣ୍ଣସଂଖ୍ୟା', 'ପରିମେୟ ସଂଖ୍ୟା', 'ଅପରିମେୟ ସଂଖ୍ୟା (Irrational)', 'ଗଣନ ସଂଖ୍ୟା'],
        correctAnswerIndex: 2,
        explanation: 'Sum or difference of a rational number and an irrational number is always irrational.',
        explanationOdia: 'ଏକ ପରିମେୟ ଓ ଅପରିମେୟ ସଂଖ୍ୟାର ମିଶ୍ରଣ ସର୍ବଦା ଏକ ଅପରିମେୟ ସଂଖ୍ୟା ହୋଇଥାଏ ।',
        topic: 'Irrational Numbers'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 10',
    order: 2,
    title: 'Polynomials',
    titleOdia: 'ବହୁପଦୀ ରାଶି',
    description: 'Geometrical meaning of zeros of quadratic and cubic polynomials, relationship between zeros and coefficients, and division algorithm.',
    descriptionOdia: 'ଦ୍ୱିଘାତ ଓ ତ୍ରିଘାତ ବହୁପଦୀ ରାଶିର ଶୂନକର ଜ୍ୟାମିତିକ ଅର୍ଥ, ଶୂନକ ଓ ସହଗ ମଧ୍ୟରେ ସମ୍ପର୍କ ଏବଂ ଭାଗକ୍ରିୟା କଳନବିଧି ।',
    lesson: {
      title: 'Zeros, Coefficients & Parabolic Graphs',
      titleOdia: 'ଶୂନକ, ସହଗ ଓ ପାରାବୋଲିକ୍ ଲେଖଚିତ୍ର',
      durationMinutes: 24,
      objectives: [
        'Interpret zeros geometrically as x-intercepts of graph y = p(x)',
        'Establish relations for quadratic ax^2 + bx + c: Sum of zeros alpha + beta = -b/a; Product alpha * beta = c/a',
        'Form quadratic polynomial given sum S and product P: k * (x^2 - S*x + P)',
        'Relate cubic polynomial zeros: sum = -b/a, sum of pairwise products = c/a, product = -d/a'
      ],
      objectivesOdia: [
        'ଜ୍ୟାମିତିକ ଅର୍ଥ: y = p(x) ଲେଖଚିତ୍ର x-ଅକ୍ଷକୁ ଛେଦ କରୁଥିବା ବିନ୍ଦୁଗୁଡ଼ିକ ହେଉଛି ଶୂନକ',
        'ଦ୍ୱିଘାତ ax² + bx + c ର ଶୂନକ ସହଗ ସମ୍ପର୍କ: α + β = -b/a ଏବଂ αβ = c/a ବୁଝିବା',
        'ଶୂନକଦ୍ୱୟର ଯୋଗଫଳ S ଓ ଗୁଣଫଳ P ଜଣାଥିଲେ ବହୁପଦୀ ରାଶି x² - Sx + P ଗଠନ କରିବା',
        'ତ୍ରିଘାତ ବହୁପଦୀ ରାଶିର ତିନୋଟି ଶୂନକ ମଧ୍ୟରେ ସମ୍ପର୍କ ପ୍ରୟୋଗ କରିବା'
      ],
      content: 'For a polynomial p(x), the zeros are the x-coordinates of the points where graph y = p(x) intersects the x-axis. A quadratic polynomial graph is a parabola opening upwards (if a > 0) or downwards (if a < 0), intersecting x-axis at at most 2 points. For quadratic polynomial p(x) = ax^2 + bx + c with zeros alpha and beta: Sum of zeros alpha + beta = -b/a = -(coefficient of x) / (coefficient of x^2); Product of zeros alpha * beta = c/a = (constant term) / (coefficient of x^2). Any quadratic polynomial with zeros alpha, beta can be reconstructed as k * [x^2 - (alpha + beta)x + alpha*beta]. For a cubic ax^3 + bx^2 + cx + d with zeros alpha, beta, gamma: alpha + beta + gamma = -b/a; alpha*beta + beta*gamma + gamma*alpha = c/a; alpha*beta*gamma = -d/a.',
      contentOdia: 'y = p(x) ର ଲେଖଚିତ୍ର x-ଅକ୍ଷକୁ ଯେତୋଟି ବିନ୍ଦୁରେ ଛେଦ କରେ, ବହୁପଦୀ ରାଶିର ସେତିକିଟି ଶୂନକ ଥାଏ । ଦ୍ୱିଘାତ ବହୁପଦୀ ରାଶିର ଗ୍ରାଫ୍ ଏକ ପାରାବୋଲା (Parabola) ଅଟେ, ଯାହାର ସର୍ବାଧିକ ୨ଟି ଶୂନକ ଥାଏ । ଯଦି ax² + bx + c ର ଶୂନକଦ୍ୱୟ α ଓ β ହୁଅନ୍ତି, ତେବେ: ଶୂନକଦ୍ୱୟର ଯୋଗଫଳ α + β = -b/a ଏବଂ ଶୂନକଦ୍ୱୟର ଗୁଣଫଳ αβ = c/a ହୁଏ । ଶୂନକଦ୍ୱୟ ଜଣାଥିଲେ ଦ୍ୱିଘାତ ରାଶିକୁ x² - (α + β)x + αβ ରୂପରେ ଲେଖାଯାଏ । ତ୍ରିଘାତ ବହୁପଦୀ ରାଶିର ସର୍ବାଧିକ ୩ଟି ବାସ୍ତବ ଶୂନକ ଥାଏ ।',
      takeaways: [
        'Number of real zeros equals number of distinct x-axis intersections',
        'Sum of zeros: alpha + beta = -b/a',
        'Product of zeros: alpha * beta = c/a',
        'Quadratic polynomial with given sum S and product P is x^2 - S*x + P'
      ],
      takeawaysOdia: [
        'ଗ୍ରାଫ୍ x-ଅକ୍ଷକୁ ଯେତେଥର ଛୁଏଁ, ବାସ୍ତବ ଶୂନକ ସଂଖ୍ୟା ସେତିକି ହୁଏ',
        'ଶୂନକଦ୍ୱୟର ଯୋଗଫଳ: α + β = -b/a',
        'ଶୂନକଦ୍ୱୟର ଗୁଣଫଳ: αβ = c/a',
        'ଯୋଗଫଳ S ଓ ଗୁଣଫଳ P ଥିଲେ ସମୀକରଣ: x² - Sx + P'
      ]
    },
    quiz: [
      {
        question: 'If alpha and beta are zeros of p(x) = 2x^2 - 8x + 6, what is the value of alpha + beta?',
        questionOdia: 'ଯଦି α ଓ β, p(x) = ୨x² - ୮x + ୬ ର ଶୂନକ ହୁଅନ୍ତି, ତେବେ α + β ର ମୂଲ୍ୟ କେତେ?',
        options: ['4', '-4', '3', '-3'],
        optionsOdia: ['୪', '-୪', '୩', '-୩'],
        correctAnswerIndex: 0,
        explanation: 'Sum of zeros = -b/a = -(-8) / 2 = 8 / 2 = 4.',
        explanationOdia: 'α + β = -b/a = -(-୮)/୨ = ୮/୨ = ୪ ।',
        topic: 'Sum of Zeros'
      },
      {
        question: 'Find the quadratic polynomial whose sum and product of zeros are -3 and 2 respectively.',
        questionOdia: 'ଶୂନକଦ୍ୱୟର ଯୋଗଫଳ -୩ ଏବଂ ଗୁଣଫଳ ୨ ଥିବା ଦ୍ୱିଘାତ ବହୁପଦୀ ରାଶିଟି କ’ଣ?',
        options: ['x^2 - 3x + 2', 'x^2 + 3x + 2', 'x^2 + 3x - 2', 'x^2 - 2x + 3'],
        optionsOdia: ['x² - ୩x + ୨', 'x² + ୩x + ୨', 'x² + ୩x - ୨', 'x² - ୨x + ୩'],
        correctAnswerIndex: 1,
        explanation: 'Formula is x^2 - S*x + P => x^2 - (-3)x + 2 = x^2 + 3x + 2.',
        explanationOdia: 'ସୂତ୍ର x² - Sx + P => x² - (-୩)x + ୨ = x² + ୩x + ୨ ।',
        topic: 'Quadratic Polynomial Formation'
      },
      {
        question: 'At most how many real zeros can a cubic polynomial p(x) have?',
        questionOdia: 'ଏକ ତ୍ରିଘାତ ବହୁପଦୀ ରାଶିର ସର୍ବାଧିକ କେତୋଟି ବାସ୍ତବ ଶୂନକ ଥାଇପାରେ?',
        options: ['1', '2', '3', '4'],
        optionsOdia: ['୧', '୨', '୩', '୪'],
        correctAnswerIndex: 2,
        explanation: 'The number of zeros of a polynomial cannot exceed its algebraic degree (degree 3 = at most 3 zeros).',
        explanationOdia: 'ବହୁପଦୀ ରାଶିର ଘାତ ୩ ହୋଇଥିବାରୁ ଏହାର ସର୍ବାଧିକ ୩ଟି ଶୂନକ ରହିପାରିବ ।',
        topic: 'Degree and Zeros'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 10',
    order: 3,
    title: 'Pair of Linear Equations in Two Variables',
    titleOdia: 'ଦୁଇ ଅଜ୍ଞାତ ରାଶି ବିଶିଷ୍ଟ ରୈଖିକ ସମୀକରଣ ଯୁଗଳ',
    description: 'Graphical consistency criteria (intersecting, parallel, coincident), algebraic methods of solution: Substitution Method and Elimination Method.',
    descriptionOdia: 'ଲେଖଚିତ୍ର ପଦ୍ଧତିରେ ସୁସଙ୍ଗତତା ସର୍ତ୍ତ, ବୀଜଗାଣିତିକ ସମାଧାନ: ପ୍ରତିସ୍ଥାପନ ପ୍ରଣାଳୀ ଓ ଅପସାରଣ ପ୍ରଣାଳୀ ।',
    lesson: {
      title: 'Consistency Conditions, Substitution & Elimination Methods',
      titleOdia: 'ସମାଧାନ ଯୋଗ୍ୟତା ସର୍ତ୍ତ, ପ୍ରତିସ୍ଥାପନ ଓ ଅପସାରଣ ପ୍ରଣାଳୀ',
      durationMinutes: 26,
      objectives: [
        'Compare ratio of coefficients: a1/a2 != b1/b2 (unique solution, intersecting lines)',
        'Identify dependent system: a1/a2 = b1/b2 = c1/c2 (infinitely many solutions, coincident lines)',
        'Identify inconsistent system: a1/a2 = b1/b2 != c1/c2 (no solution, parallel lines)',
        'Solve simultaneous equations algebraically using Substitution Method and Elimination Method'
      ],
      objectivesOdia: [
        'ସହଗ ଅନୁପାତ ତୁଳନା: a₁/a₂ ≠ b₁/b₂ (ଅନନ୍ୟ ସମାଧାନ, ପରସ୍ପରଛେଦୀ ସରଳରେଖା)',
        'ସଂଶ୍ଳିଷ୍ଟ ସିଷ୍ଟମ୍: a₁/a₂ = b₁/b₂ = c₁/c₂ (ଅନନ୍ତ ସମାଧାନ, ସମ୍ପାତି ସରଳରେଖା)',
        'ଅସଙ୍ଗତ ସିଷ୍ଟମ୍: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (କୌଣସି ସମାଧାନ ନାହିଁ, ସମାନ୍ତର ସରଳରେଖା)',
        'ପ୍ରତିସ୍ଥାପନ (Substitution) ଓ ଅପସାରଣ (Elimination) ପ୍ରଣାଳୀ ପ୍ରୟୋଗ କରି ସମାଧାନ କରିବା'
      ],
      content: 'A pair of linear equations in two variables takes standard form: a1*x + b1*y + c1 = 0 and a2*x + b2*y + c2 = 0. Geometrically, they represent two straight lines on a plane. Three possibilities arise: (1) Intersecting lines: a1/a2 != b1/b2 yielding exactly one unique solution (consistent); (2) Coincident lines: a1/a2 = b1/b2 = c1/c2 where lines merge, yielding infinitely many solutions (consistent dependent); (3) Parallel lines: a1/a2 = b1/b2 != c1/c2 where lines never intersect, yielding no solution (inconsistent). Algebraically, the Substitution method isolates one variable in terms of the other and substitutes into the partner equation. The Elimination method multiplies equations by appropriate scalar constants to equalize coefficients of one variable, eliminating it through addition or subtraction.',
      contentOdia: 'ଦୁଇ ଅଜ୍ଞାତ ରାଶି ବିଶିଷ୍ଟ ରୈଖିକ ସମୀକରଣ ଯୁଗଳର ପ୍ରମାଣିକ ରୂପ: a₁x + b₁y + c₁ = 0 ଏବଂ a₂x + b₂y + c₂ = 0 । ଏଗୁଡ଼ିକ ସମତଳରେ ଦୁଇଟି ସରଳରେଖାକୁ ଦର୍ଶାନ୍ତି । ତିନୋଟି ମୁଖ୍ୟ ସର୍ତ୍ତ: (୧) a₁/a₂ ≠ b₁/b₂ ହେଲେ ରେଖାଦ୍ୱୟ ପରସ୍ପରକୁ ଗୋଟିଏ ବିନ୍ଦୁରେ ଛେଦ କରନ୍ତି (ଗୋଟିଏ ଅନନ୍ୟ ସମାଧାନ, ସୁସଙ୍ଗତ); (୨) a₁/a₂ = b₁/b₂ = c₁/c₂ ହେଲେ ରେଖାଦ୍ୱୟ ଏକାଠି ମିଶିଯାଆନ୍ତି (ଅସଂଖ୍ୟ ସମାଧାନ); (୩) a₁/a₂ = b₁/b₂ ≠ c₁/c₂ ହେଲେ ରେଖାଦ୍ୱୟ ସମାନ୍ତର ହୁଅନ୍ତି ଏବଂ କୌଣସି ସମାଧାନ ମିଳେ ନାହିଁ (ଅସଙ୍ଗତ) । ବୀଜଗାଣିତିକ ସମାଧାନ ପାଇଁ ପ୍ରତିସ୍ଥାପନ ପ୍ରଣାଳୀ (ଗୋଟିଏ ଚଳକୁ ଅନ୍ୟ ଚଳ ରୂପେ ପ୍ରକାଶ କରିବା) ଏବଂ ଅପସାରଣ ପ୍ରଣାଳୀ (ସହଗ ସମାନ କରି କାଟିବା) ବ୍ୟବହୃତ ହୁଏ ।',
      takeaways: [
        'Unique solution: a1/a2 != b1/b2 (lines intersect at one point)',
        'No solution: a1/a2 = b1/b2 != c1/c2 (lines are parallel)',
        'Infinitely many solutions: a1/a2 = b1/b2 = c1/c2 (lines are coincident)',
        'Elimination is generally computationally faster for non-fractional coefficients'
      ],
      takeawaysOdia: [
        'ଅନନ୍ୟ ସମାଧାନ ସର୍ତ୍ତ: a₁/a₂ ≠ b₁/b₂',
        'କୌଣସି ସମାଧାନ ନଥିବା ସର୍ତ୍ତ: a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (ସମାନ୍ତର ରେଖା)',
        'ଅସଂଖ୍ୟ ସମାଧାନ ସର୍ତ୍ତ: a₁/a₂ = b₁/b₂ = c₁/c₂ (ସମ୍ପାତି ରେଖା)',
        'ଅପସାରଣ ପ୍ରଣାଳୀ ସାଧାରଣତଃ ଦ୍ରୁତ ଓ ସହଜ ସମାଧାନ ପ୍ରଦାନ କରେ'
      ]
    },
    quiz: [
      {
        question: 'Under what condition do the lines a1*x + b1*y + c1 = 0 and a2*x + b2*y + c2 = 0 represent parallel lines with no solution?',
        questionOdia: 'କେଉଁ ସର୍ତ୍ତରେ ଦୁଇଟି ରୈଖିକ ସମୀକରଣ ସମାନ୍ତର ରେଖା ଦର୍ଶାନ୍ତି ଏବଂ କୌଣସି ସମାଧାନ ମିଳେ ନାହିଁ?',
        options: [
          'a1/a2 != b1/b2',
          'a1/a2 = b1/b2 = c1/c2',
          'a1/a2 = b1/b2 != c1/c2',
          'a1*a2 + b1*b2 = 0'
        ],
        optionsOdia: [
          'a₁/a₂ ≠ b₁/b₂',
          'a₁/a₂ = b₁/b₂ = c₁/c₂',
          'a₁/a₂ = b₁/b₂ ≠ c₁/c₂',
          'a₁a₂ + b₁b₂ = ୦'
        ],
        correctAnswerIndex: 2,
        explanation: 'When slopes are identical (a1/a2 = b1/b2) but y-intercepts differ (!= c1/c2), lines are parallel with zero intersections.',
        explanationOdia: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂ ହେଲେ ସରଳରେଖାଦ୍ୱୟ ପରସ୍ପର ସମାନ୍ତର ହୋଇ କେବେ ଛେଦ କରନ୍ତି ନାହିଁ ।',
        topic: 'Consistency Criteria'
      },
      {
        question: 'Solve the system: x + y = 14 and x - y = 4 for (x, y):',
        questionOdia: 'x + y = ୧୪ ଏବଂ x - y = ୪ ସମୀକରଣ ଯୁଗଳର ସମାଧାନ (x, y) କେତେ?',
        options: ['(9, 5)', '(10, 4)', '(8, 6)', '(7, 7)'],
        optionsOdia: ['(୯, ୫)', '(୧୦, ୪)', '(୮, ୬)', '(୭, ୭)'],
        correctAnswerIndex: 0,
        explanation: 'Adding the two equations yields: 2x = 18 => x = 9. Substituting x=9 gives y = 14 - 9 = 5.',
        explanationOdia: 'ଉଭୟ ସମୀକରଣକୁ ଯୋଗ କଲେ: ୨x = ୧୮ => x = ୯; ତେଣୁ y = ୧୪ - ୯ = ୫ । (୯, ୫) ।',
        topic: 'Elimination Method'
      },
      {
        question: 'For what value of k will the pair 2x + 3y = 7 and 4x + ky = 14 have infinitely many solutions?',
        questionOdia: 'k ର କେଉଁ ମୂଲ୍ୟ ପାଇଁ ୨x + ୩y = ୭ ଏବଂ ୪x + ky = ୧୪ ର ଅସଂଖ୍ୟ ସମାଧାନ ରହିବ?',
        options: ['3', '6', '2', '12'],
        optionsOdia: ['୩', '୬', '୨', '୧୨'],
        correctAnswerIndex: 1,
        explanation: 'For coincident lines: a1/a2 = b1/b2 => 2/4 = 3/k => 1/2 = 3/k => k = 6.',
        explanationOdia: 'ଅସଂଖ୍ୟ ସମାଧାନ ପାଇଁ: ୨/୪ = ୩/k => ୧/୨ = ୩/k => k = ୬ ।',
        topic: 'Coincident Conditions'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 10',
    order: 4,
    title: 'Quadratic Equations',
    titleOdia: 'ଦ୍ୱିଘାତ ସମୀକରଣ',
    description: 'Standard form ax^2 + bx + c = 0, solution by factorisation, solution by Quadratic Formula (Sridhar Acharya formula), and nature of roots using discriminant D = b^2 - 4ac.',
    descriptionOdia: 'ପ୍ରମାଣିକ ରୂପ ax² + bx + c = 0, ଉତ୍ପାଦକୀକରଣ, ଶ୍ରୀଧର ଆଚାର୍ଯ୍ୟଙ୍କ ଦ୍ୱିଘାତ ସୂତ୍ର ଏବଂ ପ୍ରଭେଦକ D = b² - 4ac ସାହାଯ୍ୟରେ ମୂଳଦ୍ୱୟର ସ୍ୱରୂପ ।',
    lesson: {
      title: 'Quadratic Formula, Discriminant & Root Nature',
      titleOdia: 'ଦ୍ୱିଘାତ ସୂତ୍ର, ପ୍ରଭେଦକ ଓ ମୂଳର ପ୍ରକୃତି',
      durationMinutes: 26,
      objectives: [
        'Formulate standard quadratic equation ax^2 + bx + c = 0 with a != 0',
        'Derive and apply Quadratic Formula x = [-b +- sqrt(b^2 - 4ac)] / (2a)',
        'Compute Discriminant D = b^2 - 4ac and deduce root nature: D > 0 (two distinct real roots), D = 0 (two equal real roots), D < 0 (no real roots)',
        'Translate practical word problems (speed-distance, area, consecutive integers) into solvable quadratics'
      ],
      objectivesOdia: [
        'ଦ୍ୱିଘାତ ସମୀକରଣର ପ୍ରମାଣିକ ରୂପ ax² + bx + c = 0 (a ≠ ୦) ବୁଝିବା',
        'ଶ୍ରୀଧର ଆଚାର୍ଯ୍ୟଙ୍କ ସୂତ୍ର: x = [-b ± √(b² - ୪ac)] / (୨a) ପ୍ରୟୋଗ କରିବା',
        'ପ୍ରଭେଦକ (Discriminant) D = b² - ୪ac ନିର୍ଣ୍ଣୟ କରି ମୂଳଦ୍ୱୟର ସ୍ୱରୂପ ଜାଣିବା: D > ୦ (ଦୁଇଟି ପୃଥକ ବାସ୍ତବ ମୂଳ), D = ୦ (ଦୁଇଟି ସମାନ ବାସ୍ତବ ମୂଳ), D < ୦ (ବାସ୍ତବ ମୂଳ ନାହିଁ)',
        'ବାସ୍ତବ ଜୀବନର ସମସ୍ୟା (ବେଗ-ଦୂରତା, କ୍ଷେତ୍ରଫଳ) କୁ ଦ୍ୱିଘାତ ସମୀକରଣରେ ପରିଣତ କରି ସମାଧାନ କରିବା'
      ],
      content: 'A quadratic equation in variable x is an equation of the second degree: ax^2 + bx + c = 0, where a != 0. Indian mathematician Sridhar Acharya derived the universal Quadratic Formula by completing the square: x = [-b +- sqrt(b^2 - 4ac)] / (2a). The term under the square root, D = b^2 - 4ac, is termed the Discriminant because it discriminates the character of roots: (1) If D > 0, the equation has two distinct real roots; (2) If D = 0, the equation has two equal (coincident) real roots given by x = -b / (2a); (3) If D < 0, square root of negative numbers is non-real, hence no real roots exist.',
      contentOdia: 'ax² + bx + c = 0 ରୂପରେ ଥିବା ସମୀକରଣକୁ ଦ୍ୱିଘାତ ସମୀକରଣ କୁହାଯାଏ (ଯେଉଁଠାରେ a ≠ ୦) । ପ୍ରାଚୀନ ଭାରତୀୟ ଗଣିତଜ୍ଞ ଶ୍ରୀଧର ଆଚାର୍ଯ୍ୟ ଏହାର ସମାଧାନ ପାଇଁ ବିଶ୍ୱପ୍ରସିଦ୍ଧ ଦ୍ୱିଘାତ ସୂତ୍ର ଉଦ୍ଭାବନ କରିଥିଲେ: x = [-b ± √(b² - ୪ac)] / (୨a) । D = b² - ୪ac କୁ ସମୀକରଣର "ପ୍ରଭେଦକ" (Discriminant) କୁହାଯାଏ କାରଣ ଏହା ମୂଳଦ୍ୱୟର ପ୍ରକୃତି ସ୍ଥିର କରେ: (୧) ଯଦି D > ୦, ତେବେ ଦୁଇଟି ଭିନ୍ନ ବାସ୍ତବ ମୂଳ ଥାଏ; (୨) ଯଦି D = ୦, ତେବେ ଦୁଇଟି ସମାନ ବାସ୍ତବ ମୂଳ ଥାଏ (x = -b/୨a); (୩) ଯଦି D < ୦, ତେବେ କୌଣସି ବାସ୍ତବ ମୂଳ ରହେ ନାହିଁ ।',
      takeaways: [
        'Discriminant D = b^2 - 4ac governs the nature of roots',
        'D = 0 implies roots are real and equal: x = -b / (2a)',
        'Quadratic formula: x = [-b +- sqrt(D)] / (2a)',
        'A quadratic equation always has exactly two roots (real or complex)'
      ],
      takeawaysOdia: [
        'ପ୍ରଭେଦକ D = b² - ୪ac ମୂଳର ସ୍ୱରୂପ ନିର୍ଣ୍ଣୟ କରେ',
        'D = ୦ ହେଲେ ମୂଳଦ୍ୱୟ ବାସ୍ତବ ଓ ସମାନ ହୁଅନ୍ତି: x = -b / ୨a',
        'ଦ୍ୱିଘାତ ସୂତ୍ର: x = [-b ± √D] / ୨a',
        'ପ୍ରତ୍ୟେକ ଦ୍ୱିଘାତ ସମୀକରଣର ଠିକ୍ ଦୁଇଟି ମୂଳ ଥାଏ'
      ]
    },
    quiz: [
      {
        question: 'What is the nature of the roots of the quadratic equation 2x^2 - 4x + 3 = 0?',
        questionOdia: '୨x² - ୪x + ୩ = 0 ଦ୍ୱିଘାତ ସମୀକରଣର ମୂଳଦ୍ୱୟର ପ୍ରକୃତି କ’ଣ?',
        options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'Three real roots'],
        optionsOdia: ['ଦୁଇଟି ପୃଥକ ବାସ୍ତବ ମୂଳ', 'ଦୁଇଟି ସମାନ ବାସ୍ତବ ମୂଳ', 'କୌଣସି ବାସ୍ତବ ମୂଳ ନାହିଁ', 'ତିନୋଟି ବାସ୍ତବ ମୂଳ'],
        correctAnswerIndex: 2,
        explanation: 'Discriminant D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8 < 0. Since D < 0, no real roots exist.',
        explanationOdia: 'D = b² - ୪ac = (-୪)² - ୪(୨)(୩) = ୧୬ - ୨୪ = -୮ < ୦; ତେଣୁ କୌଣସି ବାସ୍ତବ ମୂଳ ନାହିଁ ।',
        topic: 'Nature of Roots'
      },
      {
        question: 'What are the roots of the quadratic equation x^2 - 7x + 12 = 0?',
        questionOdia: 'x² - ୭x + ୧୨ = 0 ସମୀକରଣର ମୂଳଦ୍ୱୟ କେତେ?',
        options: ['3 and 4', '-3 and -4', '2 and 6', '-2 and -6'],
        optionsOdia: ['୩ ଏବଂ ୪', '-୩ ଏବଂ -୪', '୨ ଏବଂ ୬', '-୨ ଏବଂ -୬'],
        correctAnswerIndex: 0,
        explanation: 'Factorizing: (x - 3)(x - 4) = 0 => x = 3 or x = 4.',
        explanationOdia: 'ଉତ୍ପାଦକୀକରଣ କଲେ: (x - ୩)(x - ୪) = ୦ => x = ୩ ବା x = ୪ ।',
        topic: 'Factorisation of Quadratics'
      },
      {
        question: 'For what value of k will the quadratic equation kx^2 + 4x + 1 = 0 have two equal real roots?',
        questionOdia: 'k ର କେଉଁ ମୂଲ୍ୟ ପାଇଁ kx² + ୪x + ୧ = 0 ସମୀକରଣର ଦୁଇଟି ସମାନ ବାସ୍ତବ ମୂଳ ରହିବ?',
        options: ['4', '16', '1', '2'],
        optionsOdia: ['୪', '୧୬', '୧', '୨'],
        correctAnswerIndex: 0,
        explanation: 'Equal roots require D = 0: b^2 - 4ac = 4^2 - 4(k)(1) = 16 - 4k = 0 => 4k = 16 => k = 4.',
        explanationOdia: 'ସମାନ ମୂଳ ପାଇଁ D = ୦: ୪² - ୪(k)(୧) = ୦ => ୧୬ - ୪k = ୦ => k = ୪ ।',
        topic: 'Equal Roots Condition'
      }
    ]
  },
  {
    subjectCode: 'MATH',
    classLevel: 'Class 10',
    order: 5,
    title: 'Arithmetic Progressions',
    titleOdia: 'ସମାନ୍ତର ପ୍ରଗତି',
    description: 'Introduction to AP, common difference d, nth term formula a_n = a + (n - 1)d, and sum of first n terms S_n = n/2 * [2a + (n - 1)d].',
    descriptionOdia: 'ସମାନ୍ତର ପ୍ରଗତିର ପରିଚୟ, ସାଧାରଣ ଅନ୍ତର d, n-ତମ ପଦ a_n = a + (n - 1)d ଏବଂ ପ୍ରଥମ n ଟି ପଦର ସମଷ୍ଟି S_n ।',
    lesson: {
      title: 'AP General Term, Common Difference & Series Summation',
      titleOdia: 'ସାଧାରଣ ପଦ, ଅନ୍ତର ଓ ସମଷ୍ଟି ସୂତ୍ର',
      durationMinutes: 24,
      objectives: [
        'Recognize an arithmetic progression with first term a and common difference d = a_(k+1) - a_k',
        'Apply nth term formula: a_n = a + (n - 1)d',
        'Derive and apply sum of first n terms: S_n = n/2 * [2a + (n - 1)d] and S_n = n/2 * (a + l)',
        'Solve real-life word problems involving ladder rungs, saving schemes, and row seating'
      ],
      objectivesOdia: [
        'ପ୍ରଥମ ପଦ a ଓ ସାଧାରଣ ଅନ୍ତର d = a_(k+୧) - a_k ବ୍ୟବହାର କରି AP ଚିହ୍ନିବା',
        'n-ତମ ପଦ ସୂତ୍ର: a_n = a + (n - ୧)d ପ୍ରୟୋଗ କରିବା',
        'ପ୍ରଥମ n ଟି ପଦର ସମଷ୍ଟି: S_n = n/୨ × [୨a + (n - ୧)d] ବା S_n = n/୨ × (a + l) ଶିଖିବା',
        'ସଞ୍ଚୟ ଯୋଜନା, ସିଡ଼ିର ପାହାଚ ଓ ପ୍ରାକୃତିକ ସଂଖ୍ୟାର ସମଷ୍ଟି ସମ୍ବନ୍ଧୀୟ ପ୍ରଶ୍ନ ସମାଧାନ କରିବା'
      ],
      content: 'An arithmetic progression (AP) is a numerical sequence where each term after the first is obtained by adding a fixed constant called the common difference d to the preceding term. The common difference d can be positive, negative, or zero. If the first term is a, the terms are: a, a+d, a+2d, a+3d, ... The general nth term is given by: a_n = a + (n - 1)d. If an AP has last term l, then l = a + (n - 1)d. The sum of the first n terms S_n equals n/2 * [2a + (n - 1)d], or equivalently S_n = n/2 * (a + l). Gauss noted that the sum of the first n positive natural numbers is S_n = n(n + 1) / 2.',
      contentOdia: 'ସମାନ୍ତର ପ୍ରଗତି (AP) ହେଉଛି ଏକ ସଂଖ୍ୟା ଶ୍ରେଣୀ ଯେଉଁଥିରେ ପ୍ରତ୍ୟେକ ପରବର୍ତ୍ତୀ ପଦ ପୂର୍ବ ପଦରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସଂଖ୍ୟା (ସାଧାରଣ ଅନ୍ତର d) ଯୋଗ କରି ଗଠନ କରାଯାଏ । ସାଧାରଣ ଅନ୍ତର d ଧନାତ୍ମକ, ଋଣାତ୍ମକ ବା ଶୂନ ହୋଇପାରେ । ପ୍ରଥମ ପଦ a ହେଲେ ଶ୍ରେଣୀଟି a, a+d, a+୨d, ... ହୁଏ । n-ତମ ପଦର ସୂତ୍ର: a_n = a + (n - ୧)d । ଯଦି ଶେଷ ପଦ l ହୁଏ, ତେବେ ପ୍ରଥମ n ଟି ପଦର ସମଷ୍ଟି: S_n = n/୨ × [୨a + (n - ୧)d] କିମ୍ବା S_n = n/୨ × (a + l) ହୁଏ । ପ୍ରଥମ n ଟି ଗଣନ ସଂଖ୍ୟାର ସମଷ୍ଟି = n(n + ୧) / ୨ ।',
      takeaways: [
        'nth term formula: a_n = a + (n - 1)d',
        'Sum of first n terms: S_n = n/2 * [2a + (n - 1)d] = n/2 * (a + l)',
        'Sum of first n positive natural numbers: n(n + 1) / 2',
        'nth term can also be extracted from sum: a_n = S_n - S_(n-1)'
      ],
      takeawaysOdia: [
        'n-ତମ ପଦ: a_n = a + (n - ୧)d',
        'n ଟି ପଦର ସମଷ୍ଟି: S_n = n/୨ [୨a + (n - ୧)d] = n/୨ (a + l)',
        'ପ୍ରଥମ n ଟି ଗଣନ ସଂଖ୍ୟାର ଯୋଗଫଳ: n(n + ୧) / ୨',
        'ସମଷ୍ଟିରୁ n-ତମ ପଦ ନିର୍ଣ୍ଣୟ: a_n = S_n - S_(n-୧)'
      ]
    },
    quiz: [
      {
        question: 'Find the 10th term of the AP: 2, 7, 12, 17, ...',
        questionOdia: 'ସମାନ୍ତର ପ୍ରଗତି ୨, ୭, ୧୨, ୧୭, ... ର ୧୦-ତମ ପଦଟି କେତେ?',
        options: ['47', '52', '42', '50'],
        optionsOdia: ['୪୭', '୫୨', '୪୨', '୫୦'],
        correctAnswerIndex: 0,
        explanation: 'Here a = 2, d = 7 - 2 = 5, n = 10. a_10 = a + (10 - 1)d = 2 + 9(5) = 2 + 45 = 47.',
        explanationOdia: 'a = ୨, d = ୫; a_୧୦ = ୨ + (୧୦ - ୧) × ୫ = ୨ + ୪୫ = ୪୭ ।',
        topic: 'nth Term of AP'
      },
      {
        question: 'What is the sum of the first 20 positive natural numbers (1 + 2 + 3 + ... + 20)?',
        questionOdia: 'ପ୍ରଥମ ୨୦ଟି ଧନାତ୍ମକ ଗଣନ ସଂଖ୍ୟାର ସମଷ୍ଟି କେତେ?',
        options: ['200', '210', '190', '420'],
        optionsOdia: ['୨୦୦', '୨୧୦', '୧୯୦', '୪୨୦'],
        correctAnswerIndex: 1,
        explanation: 'Sum = n(n + 1) / 2 = 20(21) / 2 = 10 * 21 = 210.',
        explanationOdia: 'ସମଷ୍ଟି = n(n + ୧) / ୨ = ୨୦ × ୨୧ / ୨ = ୨୧୦ ।',
        topic: 'Sum of Natural Numbers'
      },
      {
        question: 'If the common difference of an AP is 5, what is the value of (a_18 - a_13)?',
        questionOdia: 'ଯଦି ଏକ AP ର ସାଧାରଣ ଅନ୍ତର ୫ ହୁଏ, ତେବେ (a_୧୮ - a_୧୩) ର ମୂଲ୍ୟ କେତେ?',
        options: ['5', '20', '25', '30'],
        optionsOdia: ['୫', '୨୦', '୨୫', '୩୦'],
        correctAnswerIndex: 2,
        explanation: 'a_18 - a_13 = [a + 17d] - [a + 12d] = 5d = 5 * 5 = 25.',
        explanationOdia: 'a_୧୮ - a_୧୩ = (a + ୧୭d) - (a + ୧୨d) = ୫d = ୫ × ୫ = ୨୫ ।',
        topic: 'AP Properties'
      }
    ]
  },

  // ---------------------------------------------------------
  // ENGLISH (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'ENG',
    classLevel: 'Class 10',
    order: 1,
    title: 'A Letter to God',
    titleOdia: 'ଭଗବାନଙ୍କୁ ଏକ ଚିଠି',
    description: 'G.L. Fuentes masterpiece on unshakeable peasant faith, irony of human nature, hailstorm ruin, and the benevolent postmaster.',
    descriptionOdia: 'ଜି.ଏଲ୍. ଫୁଏଣ୍ଟେସ୍‌ଙ୍କ ପ୍ରସିଦ୍ଧ ଗଳ୍ପ: ଲେଞ୍ଚୋର ଈଶ୍ୱରଙ୍କ ପ୍ରତି ଅତୁଟ ବିଶ୍ୱାସ, କୁଆପଥର ବର୍ଷା ଓ ମାନବିକତାର ବିଡ଼ମ୍ବନା ।',
    lesson: {
      title: 'Faith, Irony & Human Kindness: Lencho Story',
      titleOdia: 'ବିଶ୍ୱାସ, ବିଡ଼ମ୍ବନା ଓ ମାନବିକତା: ଲେଞ୍ଚୋର କାହାଣୀ',
      durationMinutes: 20,
      objectives: [
        'Analyze Lencho pastoral livelihood and complete destruction of his ripe cornfield by devastating hailstorm',
        'Examine Lencho naive yet absolute faith leading him to write a letter addressed to God requesting 100 pesos',
        'Appreciate the generous postmaster compassion and collective fund collection of 70 pesos',
        'Interpret dramatic irony: Lencho labeling the benevolent postal staff "a bunch of crooks"'
      ],
      objectivesOdia: [
        'ଲେଞ୍ଚୋର କୃଷି ଜୀବିକା ଏବଂ କୁଆପଥର ମାଡ଼ରେ ପାଚିଲା ମକା ଫସଲ ସମ୍ପୂର୍ଣ୍ଣ ନଷ୍ଟ ହେବା ବୁଝିବା',
        'ଈଶ୍ୱରଙ୍କ ଉପରେ ଅତୁଟ ବିଶ୍ୱାସ ରଖି ୧୦୦ ପେସୋ ସାହାଯ୍ୟ ମାଗି ଚିଠି ଲେଖିବା ବୁଝିବା',
        'ପୋଷ୍ଟମାଷ୍ଟରଙ୍କ ଉଦାରତା ଏବଂ କର୍ମଚାରୀଙ୍କଠାରୁ ଚାନ୍ଦା ସଂଗ୍ରହ କରି ୭୦ ପେସୋ ପଠାଇବା ଜାଣିବା',
        'ନାଟକୀୟ ବିଡ଼ମ୍ବନା: ସାହାଯ୍ୟ କରିଥିବା ପୋଷ୍ଟ ଅଫିସ୍ କର୍ମଚାରୀଙ୍କୁ ଲେଞ୍ଚୋ "ଚୋରଙ୍କ ଦଳ" (Bunch of crooks) ଭାବିବା'
      ],
      content: 'Lencho was a hardworking peasant living on the crest of a low hill, awaiting gentle rain for his ripe cornfield. Instead, a torrential storm accompanied by devastating hailstones battered the valley for an hour, stripping leaves and leaving the landscape white as salt. With his family facing winter starvation, Lencho possessed one supreme hope: help from God. Having learned that God eyes see everything, he wrote a letter addressed to "God," requesting 100 pesos to sow his field again. At the local post office, the postmaster was deeply moved by such pure faith. Not wanting to shake Lencho belief, he collected contributions from employees, giving a part of his own salary, amassing 70 pesos. When Lencho opened the envelope and found only 70 pesos instead of 100, he suspected the postal clerks of stealing the remaining 30 pesos, writing back: "Send the rest, but not through the mail, because the post office employees are a bunch of crooks."',
      contentOdia: 'ଏକ ନୀଚା ପାହାଡ଼ ଉପରେ ରହୁଥିବା ପରିଶ୍ରମୀ କୃଷକ ଲେଞ୍ଚୋ ନିଜ ମକା ଫସଲ ପାଇଁ ବର୍ଷାକୁ ଅପେକ୍ଷା କରିଥିଲା । କିନ୍ତୁ ଭୀଷଣ ଝଡ଼ ଓ କୁଆପଥର ମାଡ଼ରେ ତାର ସମସ୍ତ ଫସଲ ଲୁଣ ଚଦର ଭଳି ଧଳା ହୋଇ ସମ୍ପୂର୍ଣ୍ଣ ନଷ୍ଟ ହୋଇଗଲା । ପରିବାର ଉପବାସ ରହିବା ଆଶଙ୍କାରେ ସେ ଭଗବାନଙ୍କୁ ୧୦୦ ପେସୋ ମାଗି ଏକ ଚିଠି ଲେଖିଲା । ପୋଷ୍ଟ ଅଫିସରେ ପୋଷ୍ଟମାଷ୍ଟର ଏହି ନିଷ୍ପାପ ବିଶ୍ୱାସ ଦେଖି ବିସ୍ମିତ ହେଲେ ଏବଂ ନିଜ ଦରମାରୁ ତଥା କର୍ମଚାରୀଙ୍କଠାରୁ ସଂଗ୍ରହ କରି ୭୦ ପେସୋ ଲେଞ୍ଚୋ ନିକଟକୁ ପଠାଇଲେ । ଲେଞ୍ଚୋ ୩୦ ପେସୋ କମ୍ ଦେଖି ଭାବିଲା ଭଗବାନ କେବେ ଭୁଲ କରିବେ ନାହିଁ, ନିଶ୍ଚୟ ପୋଷ୍ଟ ଅଫିସ୍ ବାବୁମାନେ ଚୋରି କରିଛନ୍ତି । ସେ ଆଉ ଏକ ଚିଠି ଲେଖି କହିଲା: "ବାକି ଟଙ୍କା ପଠାନ୍ତୁ, କିନ୍ତୁ ଡାକ ଯୋଗେ ନୁହେଁ, କାରଣ ଏଠାକାର ପୋଷ୍ଟ ଅଫିସ୍ କର୍ମଚାରୀମାନେ ଏକ ଚୋରଙ୍କ ଦଳ !" ।',
      takeaways: [
        'Faith can be unwavering yet blind to earthly goodwill',
        'The irony lies in the benefactor being condemned as the thief',
        'True charity seeks neither recognition nor gratitude',
        'Nature bounty and fury govern peasant vulnerabilities'
      ],
      takeawaysOdia: [
        'ଅତୁଟ ବିଶ୍ୱାସ ବେଳେବେଳେ ମଣିଷର ଉଦାରତା ଦେଖିବାରେ ଅନ୍ଧ ହୋଇଯାଏ',
        'ଯେଉଁମାନେ ସାହାଯ୍ୟ କଲେ, ସେମାନେ ହିଁ ଚୋର ବୋଲି ନିନ୍ଦିତ ହେଲେ (ବିଡ଼ମ୍ବନା)',
        'ନିଃସ୍ୱାର୍ଥପର ଦାନ କୌଣସି ପ୍ରଶଂସା ବା କୃତଜ୍ଞତା ଆଶା କରେ ନାହିଁ',
        'ପ୍ରକୃତିର କୋପ ଗରିବ ଚାଷୀର ଜୀବନକୁ ଛାରଖାର କରିଦିଏ'
      ]
    },
    quiz: [
      {
        question: 'How much money did Lencho request from God, and how much did he receive?',
        questionOdia: 'ଲେଞ୍ଚୋ ଭଗବାନଙ୍କୁ କେତେ ଟଙ୍କା ମାଗିଥିଲା ଏବଂ ସେ କେତେ ଟଙ୍କା ପାଇଲା?',
        options: [
          'Requested 100 pesos, received 70 pesos',
          'Requested 50 pesos, received 100 pesos',
          'Requested 100 pesos, received 50 pesos',
          'Requested 70 pesos, received 100 pesos'
        ],
        optionsOdia: [
          '୧୦୦ ପେସୋ ମାଗିଥିଲା, ୭୦ ପେସୋ ପାଇଲା',
          '୫୦ ପେସୋ ମାଗିଥିଲା, ୧୦୦ ପେସୋ ପାଇଲା',
          '୧୦୦ ପେସୋ ମାଗିଥିଲା, ୫୦ ପେସୋ ପାଇଲା',
          '୭୦ ପେସୋ ମାଗିଥିଲା, ୧୦୦ ପେସୋ ପାଇଲା'
        ],
        correctAnswerIndex: 0,
        explanation: 'Lencho asked for 100 pesos; the postmaster could only collect 70 pesos.',
        explanationOdia: 'ଲେଞ୍ଚୋ ୧୦୦ ପେସୋ ମାଗିଥିଲା କିନ୍ତୁ ପୋଷ୍ଟମାଷ୍ଟର ୭୦ ପେସୋ ସଂଗ୍ରହ କରି ପଠାଇପାରିଥିଲେ ।',
        topic: 'Plot Details'
      },
      {
        question: 'What irony concluded the story "A Letter to God"?',
        questionOdia: '"ଭଗବାନଙ୍କୁ ଏକ ଚିଠି" ଗଳ୍ପର ଶେଷରେ କେଉଁ ବିଡ଼ମ୍ବନା (Irony) ଦେଖାଗଲା?',
        options: [
          'The postmaster was arrested for mail theft',
          'Lencho accused the generous post office workers of stealing the missing 30 pesos',
          'The cornfield miraculously regenerated overnight',
          'God sent gold coins instead of paper currency'
        ],
        optionsOdia: [
          'ପୋଷ୍ଟମାଷ୍ଟର ଗିରଫ ହେଲେ',
          'ସାହାଯ୍ୟ କରିଥିବା ଦୟାଳୁ କର୍ମଚାରୀମାନଙ୍କୁ ଲେଞ୍ଚୋ ୩୦ ପେସୋ ଚୋରି କରିଥିବା ଅଭିଯୋଗ କଲା',
          'ଫସଲ ନିଜେ ନିଜେ ପୁଣି ଉଠିଗଲା',
          'ଭଗବାନ ସୁନା ମୁଦ୍ରା ପଠାଇଲେ'
        ],
        correctAnswerIndex: 1,
        explanation: 'Lencho branded the very benefactors who sacrificed salary to help him as "a bunch of crooks."',
        explanationOdia: 'ନିଜ ଦରମାରୁ ଟଙ୍କା ଦେଇ ସାହାଯ୍ୟ କରିଥିବା ପୋଷ୍ଟ ଅଫିସ୍ କର୍ମଚାରୀଙ୍କୁ ଲେଞ୍ଚୋ "ଚୋର" ବୋଲି ଭାବିଲା ।',
        topic: 'Literary Irony'
      },
      {
        question: 'What destroyed Lencho cornfields completely?',
        questionOdia: 'ଲେଞ୍ଚୋର ମକା ଫସଲକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ କ’ଣ ନଷ୍ଟ କରିଦେଲା?',
        options: ['Locust swarm', 'A severe hailstorm', 'Flash flooding', 'Wild forest fire'],
        optionsOdia: ['ଝିଣ୍ଟିକା ପଲ', 'ଭୀଷଣ କୁଆପଥର ବର୍ଷା (Hailstorm)', 'ଅଚାନକ ବନ୍ୟା', 'ଜଙ୍ଗଲ ନିଆଁ'],
        correctAnswerIndex: 1,
        explanation: 'A violent hailstorm pelted the valley for an hour, stripping the fields entirely bare.',
        explanationOdia: 'ଘଣ୍ଟାଏ ଧରି ପଡ଼ିଥିବା ଭୟଙ୍କର କୁଆପଥର ବର୍ଷା ତାର ସବୁ ଫସଲ ନଷ୍ଟ କରିଦେଇଥିଲା ।',
        topic: 'Story Events'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 10',
    order: 2,
    title: 'Nelson Mandela: Long Walk to Freedom',
    titleOdia: 'ନେଲସନ୍ ମାଣ୍ଡେଲା: ସ୍ୱାଧୀନତାର ଦୀର୍ଘ ଯାତ୍ରା',
    description: 'Inauguration of South Africa first democratic Black president (May 10, 1994), overcoming apartheid, true meaning of courage, and the twin obligations.',
    descriptionOdia: 'ଦକ୍ଷିଣ ଆଫ୍ରିକାର ପ୍ରଥମ ଗଣତାନ୍ତ୍ରିକ ରାଷ୍ଟ୍ରପତି ଭାବେ ଶପଥ (୧୦ ମେ ୧୯୯୪), ବର୍ଣ୍ଣବୈଷମ୍ୟ ବିରୁଦ୍ଧରେ ସଂଗ୍ରାମ ଓ ସାହସର ପ୍ରକୃତ ଅର୍ଥ ।',
    lesson: {
      title: 'Inauguration, Apartheid Dismantling & Twin Obligations',
      titleOdia: 'ଶପଥ ଗ୍ରହଣ, ବର୍ଣ୍ଣବୈଷମ୍ୟ ନିପାତ ଓ ଦ୍ୱୈତ ଦାୟିତ୍ୱ',
      durationMinutes: 24,
      objectives: [
        'Understand historical significance of May 10, 1994 inauguration at Union Buildings amphitheater in Pretoria',
        'Analyze Mandela redefinition of courage: "Courage is not the absence of fear, but the triumph over it"',
        'Examine the concept of Twin Obligations: duty to family/parents versus duty to people/community/country',
        'Reflect on the insight that the oppressor is just as unfree as the oppressed, locked behind bars of prejudice'
      ],
      objectivesOdia: [
        '୧୦ ମେ ୧୯୯୪ ରେ ପ୍ରିଟୋରିଆର ୟୁନିଅନ୍ ବିଲ୍ଡିଂରେ ଅନୁଷ୍ଠିତ ଐତିହାସିକ ଶପଥ ଗ୍ରହଣର ମହତ୍ତ୍ୱ ବୁଝିବା',
        'ମାଣ୍ଡେଲାଙ୍କ ସାହସର ସଂଜ୍ଞା: "ସାହସ ଭୟର ଅନୁପସ୍ଥିତି ନୁହେଁ, ବରଂ ଭୟ ଉପରେ ବିଜୟ"',
        'ଦ୍ୱୈତ ଦାୟିତ୍ୱର ଧାରଣା: ପରିବାର ପ୍ରତି ଦାୟିତ୍ୱ ଏବଂ ଦେଶ ଓ ସମାଜ ପ୍ରତି କର୍ତ୍ତବ୍ୟ',
        'ଅତ୍ୟାଚାରୀ ମଧ୍ୟ ଘୃଣା ଓ ସଂକୀର୍ଣ୍ଣତାର କାରାଗାରରେ ବନ୍ଦୀ ଥିବାରୁ ସେ ମଧ୍ୟ ମୁକ୍ତ ନୁହେଁ ବୋଲି ବୁଝିବା'
      ],
      content: 'On May 10, 1994, Nelson Rolihlahla Mandela was sworn in as South Africa first Black President after more than three centuries of white minority supremacy. Dignitaries from over 140 nations gathered at the sandstone amphitheater in Pretoria. Mandela pledged to liberate all people from the continuing bondage of poverty, deprivation, suffering, gender, and other discrimination. He paid tribute to countless freedom fighters like Oliver Tambo, Walter Sisulu, and Bram Fischer whose sacrifices paved the way. Mandela reflected that courage is not the absence of fear, but victory over fear. Every man possesses twin obligations—to his family and to his country—which apartheid had brutally criminalized. Importantly, Mandela affirmed that freedom is indivisible: the oppressor who steals another freedom is himself a prisoner of hatred and narrow-minded prejudice.',
      contentOdia: '୧୦ ମେ ୧୯୯୪ ରେ ନେଲସନ୍ ମାଣ୍ଡେଲା ଦକ୍ଷିଣ ଆଫ୍ରିକାର ପ୍ରଥମ କୃଷ୍ଣକାୟ ରାଷ୍ଟ୍ରପତି ଭାବେ ଶପଥ ନେଇଥିଲେ । ୩୦୦ ବର୍ଷର ଶ୍ୱେତାଙ୍ଗ ଶାସନ ଓ ବର୍ଣ୍ଣବୈଷମ୍ୟ (Apartheid) ନୀତିର ଅନ୍ତ ଘଟି ବିଶ୍ୱର ୧୪୦ ରୁ ଅଧିକ ଦେଶର ନେତା ପ୍ରିଟୋରିଆରେ ଏକତ୍ରିତ ହୋଇଥିଲେ । ମାଣ୍ଡେଲା ସ୍ପଷ୍ଟ କରିଥିଲେ ଯେ ସାହସର ଅର୍ଥ ଭୟ ନ ଥିବା ନୁହେଁ, ବରଂ ଭୟକୁ ପରାସ୍ତ କରି ଆଗକୁ ବଢ଼ିବା । ପ୍ରତ୍ୟେକ ମଣିଷର ଦୁଇଟି ଦାୟିତ୍ୱ ଥାଏ: ଗୋଟିଏ ପରିବାର ପ୍ରତି ଓ ଅନ୍ୟଟି ଦେଶବାସୀଙ୍କ ପ୍ରତି । ବର୍ଣ୍ଣବୈଷମ୍ୟ ଏହି ଅଧିକାର ଛଡ଼ାଇ ନେଇଥିଲା । ମାଣ୍ଡେଲା କହିଥିଲେ ଯେ ଅନ୍ୟର ସ୍ୱାଧୀନତା ଛଡ଼ାଇ ନେଉଥିବା ଅତ୍ୟାଚାରୀ ମଧ୍ୟ ଘୃଣା ଓ ଅନ୍ଧବିଶ୍ୱାସର ଜେଲ୍‌ରେ ବନ୍ଦୀ ଥାଏ, ତେଣୁ ଶୋଷକ ଓ ଶୋଷିତ ଉଭୟଙ୍କୁ ମୁକ୍ତ କରିବା ଆବଶ୍ୟକ ।',
      takeaways: [
        'Inauguration date: May 10, 1994 in Pretoria Union Buildings',
        'Courage is triumph over fear, not lack of fear',
        'Twin obligations: To family (parents, wife, children) and to society/country',
        'The oppressor is just as imprisoned by hatred as the oppressed is by chains'
      ],
      takeawaysOdia: [
        '୧୦ ମେ ୧୯୯୪ ରେ ଦକ୍ଷିଣ ଆଫ୍ରିକାରେ ନୂତନ ଗଣତାନ୍ତ୍ରିକ ଯୁଗ ଆରମ୍ଭ ହେଲା',
        'ସାହସ ହେଉଛି ଭୟ ଉପରେ ବିଜୟ',
        'ମଣିଷର ଦୁଇଟି କର୍ତ୍ତବ୍ୟ: ପରିବାର ପ୍ରତି ଏବଂ ଦେଶ ପ୍ରତି',
        'ଘୃଣା କରୁଥିବା ଅତ୍ୟାଚାରୀ ମଧ୍ୟ ମାନସିକ ସ୍ତରରେ ଜଣେ ବନ୍ଦୀ'
      ]
    },
    quiz: [
      {
        question: 'According to Nelson Mandela, what does "courage" truly mean?',
        questionOdia: 'ନେଲସନ୍ ମାଣ୍ଡେଲାଙ୍କ ମତରେ "ସାହସ" ର ପ୍ରକୃତ ଅର୍ଥ କ’ଣ?',
        options: ['Never experiencing fear', 'Triumph over fear', 'Physical aggression', 'Having zero enemies'],
        optionsOdia: ['କଦାପି ଭୟ ନ ପାଇବା', 'ଭୟ ଉପରେ ବିଜୟ ହାସଲ କରିବା (Triumph over fear)', 'ଶାରୀରିକ ବଳ', 'କୌଣସି ଶତ୍ରୁ ନ ରହିବା'],
        correctAnswerIndex: 1,
        explanation: 'Mandela wrote: "I learned that courage was not the absence of fear, but the triumph over it."',
        explanationOdia: 'ମାଣ୍ଡେଲା କହିଥିଲେ: ସାହସୀ ମଣିଷ ସେ ନୁହେଁ ଯିଏ ଭୟ କରେନାହିଁ, ବରଂ ସେ ଯିଏ ଭୟକୁ ଜୟ କରେ ।',
        topic: 'Philosophy of Courage'
      },
      {
        question: 'What are the "twin obligations" every man has according to Mandela?',
        questionOdia: 'ମାଣ୍ଡେଲାଙ୍କ ଅନୁଯାୟୀ ପ୍ରତ୍ୟେକ ମଣିଷର "ଦ୍ୱୈତ ଦାୟିତ୍ୱ" (Twin obligations) କ’ଣ?',
        options: [
          'To earn money and buy property',
          'To his family/parents and to his people/community/country',
          'To his political party and military commanders',
          'To his hobbies and sports'
        ],
        optionsOdia: [
          'ଟଙ୍କା ରୋଜଗାର କରିବା ଓ ଜମି କିଣିବା',
          'ନିଜ ପରିବାର ପ୍ରତି ଏବଂ ନିଜ ସମାଜ ଓ ଦେଶବାସୀଙ୍କ ପ୍ରତି',
          'ନିଜ ରାଜନୈତିକ ଦଳ ଓ ସେନା ପ୍ରତି',
          'ଖେଳକୁଦ ଓ ମନୋରଞ୍ଜନ ପ୍ରତି'
        ],
        correctAnswerIndex: 1,
        explanation: 'Mandela identifies the first obligation to family and the second to his country and community.',
        explanationOdia: 'ପ୍ରଥମ ଦାୟିତ୍ୱ ପରିବାର ପ୍ରତି ଏବଂ ଦ୍ୱିତୀୟଟି ନିଜ ଦେଶ ଓ ଜନସାଧାରଣଙ୍କ ପ୍ରତି ।',
        topic: 'Twin Obligations'
      },
      {
        question: 'Why did Mandela state that the oppressor is also not truly free?',
        questionOdia: 'ମାଣ୍ଡେଲା କାହିଁକି କହିଥିଲେ ଯେ ଅତ୍ୟାଚାରୀ (Oppressor) ମଧ୍ୟ ପ୍ରକୃତରେ ମୁକ୍ତ ନୁହେଁ?',
        options: [
          'Because he has too many police guards',
          'Because he is locked behind the bars of prejudice, hatred, and narrow-mindedness',
          'Because he pays high income tax',
          'Because he cannot travel abroad'
        ],
        optionsOdia: [
          'ତାଙ୍କ ପାଖରେ ବହୁତ ପୋଲିସ ଥାଆନ୍ତି',
          'କାରଣ ସେ ଘୃଣା, ସଂକୀର୍ଣ୍ଣତା ଓ ଅନ୍ଧବିଶ୍ୱାସର କାରାଗାରରେ ବନ୍ଦୀ ଥାଏ',
          'ସେ ଅଧିକ ଟିକସ ଦିଏ',
          'ସେ ବିଦେଶ ଯାଇପାରେ ନାହିଁ'
        ],
        correctAnswerIndex: 1,
        explanation: 'A person who takes away another freedom is a prisoner of hatred and prejudice.',
        explanationOdia: 'ଅନ୍ୟର ସ୍ୱାଧୀନତା ଛଡ଼ାଉଥିବା ଲୋକ ନିଜେ ଘୃଣା ଓ ସଂକୀର୍ଣ୍ଣ ମନୋଭାବର ବନ୍ଦୀ ।',
        topic: 'Freedom and Oppression'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 10',
    order: 3,
    title: 'Two Stories About Flying',
    titleOdia: 'ଉଡ଼ାଣ ସମ୍ପର୍କରେ ଦୁଇଟି କାହାଣୀ',
    description: 'Part I: His First Flight (Liam O\'Flaherty young seagull overcoming fear); Part II: Black Aeroplane (Frederick Forsyth mysterious guidance through storm).',
    descriptionOdia: 'ପ୍ରଥମ ଭାଗ: ଯୁବ ଶାମୁକା ଚଢ଼େଇର ପ୍ରଥମ ଉଡ଼ାଣ; ଦ୍ୱିତୀୟ ଭାଗ: କଳା ଉଡ଼ାଜାହାଜର ରହସ୍ୟମୟ ମୁକ୍ତି ।',
    lesson: {
      title: 'Conquering Fear, Instinct & Mysterious Deliverance',
      titleOdia: 'ଭୟ ଜୟ, ପ୍ରବୃତ୍ତି ଓ ରହସ୍ୟମୟ ଉଦ୍ଧାର',
      durationMinutes: 22,
      objectives: [
        'Analyze young seagull terror of the deep chasm and his family tough love intervention',
        'Examine mother seagull psychological catalyst: dangling a piece of fish tempting him to plunge into the air',
        'Trace the narrator flight in an old Dakota aircraft directly into monstrous black storm clouds over France',
        'Interpret the enigmatic Black Aeroplane without lights guiding the Dakota safely to runway before vanishing'
      ],
      objectivesOdia: [
        'ସମୁଦ୍ରର ଗଭୀରତା ଦେଖି ଛୋଟ ଚଢ଼େଇର ଭୟ ଏବଂ ପରିବାରର କଠୋର ଶିକ୍ଷା ବୁଝିବା',
        'ମାଆ ଚଢ଼େଇର ଚତୁରତା: ମାଛ ଖଣ୍ଡେ ଦେଖାଇ ଛୁଆକୁ ଉଡ଼ିବାକୁ ବାଧ୍ୟ କରିବା',
        'ପୁରୁଣା ଡାକୋଟା ବିମାନରେ ପାଇଲଟ୍ ବିପଦଜନକ କଳା ମେଘ ଭିତରେ ଫସିଯିବା ଘଟଣା ଜାଣିବା',
        'ବିନା ଆଲୋକରେ ଆସି ପଥ ପ୍ରଦର୍ଶନ କରି ଅଦୃଶ୍ୟ ହୋଇଯାଇଥିବା ରହସ୍ୟମୟ କଳା ବିମାନର ରହସ୍ୟ ବୁଝିବା'
      ],
      content: 'Part I, "His First Flight" by Liam O\'Flaherty, depicts a young seagull stranded alone on his ledge, terrified that his wings will never support him above the vast sea, while his siblings have already flown. Starving for twenty-four hours, his mother tears a fish piece and flies near his ledge, halting just out of reach. Maddened by hunger, the young seagull dives for the fish. Falling into space, sheer terror grips him for a moment before his wings spread automatically, catching the wind—his maiden flight is triumphant. Part II, "The Black Aeroplane" by Frederick Forsyth, follows a pilot flying an old Dakota from Paris to England dreaming of a hearty breakfast. Suddenly, massive storm clouds rise like black mountains. His compass, radio, and navigation instruments fail inside the tempest. Miraculously, another aircraft—a mysterious black plane without navigation lights—appears, the pilot waving him to follow. Following like an obedient child, the narrator lands safely, but the control tower radar confirms no other aircraft flew in that stormy night.',
      contentOdia: 'ପ୍ରଥମ ଭାଗରେ ଏକ ଛୋଟ ଶାମୁକା ଚଢ଼େଇ ସମୁଦ୍ରକୁ ଦେଖି ଉଡ଼ିବାକୁ ଭୟ କରୁଥିଲା । ପରିବାର ତାକୁ ଛାଡ଼ି ଚାଲିଗଲେ ଏବଂ ସେ ୨୪ ଘଣ୍ଟା ଭୋକିଲା ରହିଲା । ମାଆ ଚତୁରତାର ସହ ମାଛ ଖଣ୍ଡେ ଥଣ୍ଟରେ ଧରି ତା ନିକଟକୁ ଆସି ଅଟକିଗଲା । ଭୋକ ଜ୍ୱାଳାରେ ଚଢ଼େଇଟି ମାଛ ପାଇଁ ଡେଇଁପଡ଼ିଲା ଏବଂ ପବନରେ ଡେଣା ମେଲାଇ ନିଜର ପ୍ରଥମ ସଫଳ ଉଡ଼ାଣ ଭରିଲା । ଦ୍ୱିତୀୟ ଭାଗରେ ଜଣେ ପାଇଲଟ୍ ଡାକୋଟା ବିମାନ ଧରି ପ୍ୟାରିସ୍‌ରୁ ଇଂଲଣ୍ଡ ଯାଉଥିବା ବେଳେ ପ୍ରଳୟଙ୍କରୀ କଳା ମେଘରେ ଫସିଗଲେ । ବିମାନର କମ୍ପାସ୍ ଓ ରେଡିଓ ସବୁ ଅଚଳ ହୋଇଗଲା । ହଠାତ୍ ଏକ ରହସ୍ୟମୟ କଳା ବିମାନ ଦେଖାଦେଲା ଏବଂ ତାଙ୍କୁ ବାଟ କଢ଼ାଇ ସୁରକ୍ଷିତ ଭାବେ ରନୱେରେ ଅବତରଣ କରାଇଲା । ପରେ କଣ୍ଟ୍ରୋଲ୍ ରୁମ୍‌ରୁ ଜଣାପଡ଼ିଲା ଯେ ରାଡାର୍‌ରେ ସେହି ରାତିରେ ଅନ୍ୟ କୌଣସି ବିମାନ ଉଡୁନଥିଲା !',
      takeaways: [
        'Fear paralyzes until desperation or instinct forces the first courageous leap',
        'Tough love from family is often necessary to stimulate independence',
        'The Black Aeroplane remains an open mystery: an angel, hallucination, or subconscious instinct',
        'Faith and calm composure guide humans safely through darkest tempests'
      ],
      takeawaysOdia: [
        'ଭୋକ ବା ବାଧ୍ୟବାଧକତା ମଣିଷକୁ ପ୍ରଥମ ସାହସିକ ପଦକ୍ଷେପ ନେବାକୁ ଶିଖାଏ',
        'ଆତ୍ମନିର୍ଭରଶୀଳ ହେବା ପାଇଁ ପିତାମାତାଙ୍କ କଠୋରତା ଆବଶ୍ୟକ ଥାଏ',
        'କଳା ବିମାନଟି ଅନ୍ତର୍ନିହିତ ଆତ୍ମବିଶ୍ୱାସ ବା ଈଶ୍ୱରୀୟ ଶକ୍ତିର ପ୍ରତୀକ',
        'ଧୈର୍ଯ୍ୟ ରଖିଲେ ସବୁଠାରୁ ବଡ଼ ବିପଦରୁ ମଧ୍ୟ ମୁକ୍ତି ମିଳେ'
      ]
    },
    quiz: [
      {
        question: 'What ultimately compelled the young seagull to plunge into the air for his first flight?',
        questionOdia: 'କେଉଁ କାରଣ ଯୋଗୁଁ ଛୋଟ ଚଢ଼େଇଟି ପ୍ରଥମ ଥର ପାଇଁ ଶୂନ୍ୟକୁ ଡେଇଁପଡ଼ିଲା?',
        options: [
          'His father pushed him off the edge',
          'He was maddened by hunger seeing fish in his mother beak',
          'A predator snake attacked his nest',
          'A gust of gale blew him off'
        ],
        optionsOdia: [
          'ବାପା ତାକୁ ଠେଲିଦେଲେ',
          'ମାଆ ଥଣ୍ଟରେ ମାଛ ଦେଖି ଭୋକରେ ପାଗଳ ହୋଇ (Maddened by hunger)',
          'ସାପ ଆକ୍ରମଣ କଲା',
          'ପବନ ଉଡ଼ାଇ ନେଲା'
        ],
        correctAnswerIndex: 1,
        explanation: 'Extreme hunger drove him to leap toward the fish piece his mother deliberately held out of reach.',
        explanationOdia: 'ପ୍ରଚଣ୍ଡ ଭୋକ ଯୋଗୁଁ ମାଆ ଥଣ୍ଟରେ ଥିବା ମାଛ ଧରିବାକୁ ସେ ଅଜାଣତରେ ଡେଇଁପଡ଼ିଥିଲା ।',
        topic: 'His First Flight'
      },
      {
        question: 'What strange observation did the woman in the radar control centre make to the Dakota pilot?',
        questionOdia: 'ରାଡାର୍ କଣ୍ଟ୍ରୋଲ୍ ରୁମ୍ ମହିଳା ଜଣକ ଡାକୋଟା ପାଇଲଟ୍‌ଙ୍କୁ କେଉଁ ଆଶ୍ଚର୍ଯ୍ୟଜନକ କଥା କହିଲେ?',
        options: [
          'The runway was closed for renovations',
          'No other aeroplane besides his was flying in the storm that night',
          'The black aeroplane had landed in London',
          'His fuel tank had exploded'
        ],
        optionsOdia: [
          'ରନୱେ ବନ୍ଦ ଥିଲା',
          'ସେହି ଝଡ଼ ରାତିରେ ରାଡାର୍‌ରେ ତାଙ୍କ ବିମାନ ବ୍ୟତୀତ ଅନ୍ୟ କୌଣସି ବିମାନ ନଥିଲା',
          'କଳା ବିମାନଟି ଲଣ୍ଡନରେ ଅବତରଣ କଲା',
          'ତାଙ୍କ ତେଲ ଟାଙ୍କି ଫାଟିଯାଇଥିଲା'
        ],
        correctAnswerIndex: 1,
        explanation: 'The radar showed no other plane, cementing the paranormal mystery of the Black Aeroplane.',
        explanationOdia: 'ରାଡାର୍‌ରେ ଅନ୍ୟ କୌଣସି ବିମାନ ନଥିଲା, ଯାହା ସେହି କଳା ବିମାନକୁ ଏକ ରହସ୍ୟ କରିଦେଲା ।',
        topic: 'The Black Aeroplane'
      },
      {
        question: 'What type of aircraft was the narrator piloting in "The Black Aeroplane"?',
        questionOdia: '"The Black Aeroplane" ଗଳ୍ପରେ ଲେଖକ କେଉଁ ବିମାନ ଚଳାଉଥିଲେ?',
        options: ['Boeing 747', 'Old Dakota DS 088', 'Supermarine Spitfire', 'Airbus A320'],
        optionsOdia: ['ବୋଇଂ ୭୪୭', 'ପୁରୁଣା ଡାକୋଟା DS 088 (Old Dakota)', 'ସ୍ପିଟଫାୟାର୍', 'ଏୟାରବସ୍ A320'],
        correctAnswerIndex: 1,
        explanation: 'He was piloting an old Dakota aeroplane DS 088 back home from France to England.',
        explanationOdia: 'ସେ ଏକ ପୁରୁଣା ଡାକୋଟା (Dakota DS 088) ବିମାନ ଚଳାଉଥିଲେ ।',
        topic: 'Aircraft Identification'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 10',
    order: 4,
    title: 'From the Diary of Anne Frank',
    titleOdia: 'ଆନ୍ନା ଫ୍ରାଙ୍କଙ୍କ ଡାଏରୀରୁ',
    description: 'Anne Frank adolescent introspections, hiding in the Secret Annex during Nazi occupation of Amsterdam, her relationship with diary "Kitty", and humorous essay punishment by Mr. Keesing.',
    descriptionOdia: 'ନାଜି ଅତ୍ୟାଚାର ସମୟରେ ଆନ୍ନା ଫ୍ରାଙ୍କଙ୍କ ଗୁପ୍ତ ବାସସ୍ଥଳୀର ଅନୁଭୂତି, ଡାଏରୀ "କିଟି" ଏବଂ ଶିକ୍ଷକ ମିଷ୍ଟର କିସିଙ୍ଗଙ୍କ ଚତୁର ଦଣ୍ଡ ।',
    lesson: {
      title: 'Adolescent Introspection, Kitty & Mr. Keesing Essays',
      titleOdia: 'କିଶୋରୀ ମନସ୍ତତ୍ତ୍ୱ, ଡାଏରୀ "କିଟି" ଓ ଶିକ୍ଷକଙ୍କ ପ୍ରବନ୍ଧ',
      durationMinutes: 22,
      objectives: [
        'Explore Anne belief: "Paper has more patience than people"',
        'Understand why Anne personified her diary, naming her "Kitty" as an intimate confidante',
        'Examine Anne witty confrontations with math teacher Mr. Keesing regarding her irrepressible talking habit',
        'Analyze her three humorous essays: "A Chatterbox", "An Incorrigible Chatterbox", and "Quack, Quack, Quack, Said Mistress Chatterbox"'
      ],
      objectivesOdia: [
        'ଆନ୍ନାଙ୍କ ପ୍ରସିଦ୍ଧ ଉକ୍ତି ବୁଝିବା: "ମଣିଷ ଅପେକ୍ଷା କାଗଜର ଅଧିକ ଧୈର୍ଯ୍ୟ ଥାଏ"',
        'ଜଣେ ପ୍ରକୃତ ସାଙ୍ଗର ଅଭାବରେ ସେ ନିଜ ଡାଏରୀକୁ "କିଟି" (Kitty) ନାମ ଦେଇ ମନକଥା କହିବା ଜାଣିବା',
        'ଗଣିତ ଶିକ୍ଷକ ମିଷ୍ଟର କିସିଙ୍ଗ୍ କ୍ଲାସ୍‌ରେ ଅତ୍ୟଧିକ କଥା କହିବା ପାଇଁ ତାଙ୍କୁ ଦେଇଥିବା ଦଣ୍ଡ ବୁଝିବା',
        'ଆନ୍ନାଙ୍କ ଚତୁରତା: ହଂସ ଓ କୁଆ ଉପରେ କବିତା ଲେଖି ଶିକ୍ଷକଙ୍କ ହୃଦୟ ଜିତିବା'
      ],
      content: 'Thirteen-year-old Jewish girl Anne Frank received a red-and-white checkered diary for her birthday in 1942. Confined with her family in the "Secret Annex" above her father office in Amsterdam during the Nazi German occupation, Anne turned to writing. She observed that "paper has more patience than people" because an inanimate journal listens without judgment or betrayal. Lacking a true friend to share deepest thoughts, she treated the diary as a living companion named "Kitty." In school, Anne was constantly reprimanded by her elderly maths teacher Mr. Keesing for being incessantly talkative. As punishment, he assigned her three essays: first "A Chatterbox", then "An Incorrigible Chatterbox", and finally "Quack, Quack, Quack, Said Mistress Chatterbox." Anne composed a clever verse about three ducklings bitten to death by their swan father for quacking too much. Mr. Keesing took the joke graciously, enjoyed the satire, and never punished her for talking again.',
      contentOdia: '୧୩ ବର୍ଷୀୟା ଯିହୂଦୀ ବାଳିକା ଆନ୍ନା ଫ୍ରାଙ୍କ ନାଜି ଶାସନ କାଳରେ ଆମଷ୍ଟରଡାମ୍‌ର ଏକ ଗୁପ୍ତ କୋଠରିରେ ଲୁଚି ରହିଥିଲେ । ସେ ଅନୁଭବ କଲେ ଯେ "ମଣିଷ ଅପେକ୍ଷା କାଗଜର ଅଧିକ ଧୈର୍ଯ୍ୟ ଥାଏ" କାରଣ କାଗଜ ବିନା ବିଚାରରେ ସବୁକଥା ଶୁଣିପାରେ । ସେ ନିଜ ଡାଏରୀର ନାମ "କିଟି" (Kitty) ରଖି ନିଜ ମନର ସବୁ କଥା ସେଥିରେ ଲେଖୁଥିଲେ । ସ୍କୁଲରେ ଗଣିତ ଶିକ୍ଷକ ମିଷ୍ଟର କିସିଙ୍ଗ୍ ତାଙ୍କ ଅତ୍ୟଧିକ କଥା କହିବା ଅଭ୍ୟାସ ପାଇଁ ତାଙ୍କୁ ବାରମ୍ବାର ପ୍ରବନ୍ଧ ଲେଖିବାକୁ ଦଣ୍ଡ ଦେଉଥିଲେ । ତୃତୀୟ ଥର ଆନ୍ନା ଏକ ସୁନ୍ଦର କବିତା ଲେଖିଲେ ଯେଉଁଥିରେ ଛୋଟ ହଂସ ଛୁଆମାନେ ଅଧିକ କଥା କହିବାରୁ ବାପା ହଂସ ସେମାନଙ୍କୁ କାମୁଡ଼ି ମାରିଦେଲା । ଏହି ଚତୁର ହାସ୍ୟରସ ଦେଖି ଶିକ୍ଷକ ଖୁସି ହୋଇଗଲେ ଏବଂ ତାଙ୍କୁ ଆଉ କେବେ ଦଣ୍ଡ ଦେଲେ ନାହିଁ ।',
      takeaways: [
        'Aphorism: "Paper has more patience than people"',
        'Anne named her diary "Kitty" as a devoted surrogate friend',
        'Wit, humour, and poetry transformed teacher punitive discipline into mutual respect',
        'Anne Frank diary remains the most poignant personal testimony of Holocaust tragedy'
      ],
      takeawaysOdia: [
        '"ମଣିଷ ଅପେକ୍ଷା କାଗଜର ଅଧିକ ଧୈର୍ଯ୍ୟ ଥାଏ"',
        'ସେ ଡାଏରୀକୁ ନିଜର ପ୍ରିୟ ସାଙ୍ଗ "କିଟି" ଭାବେ ଗ୍ରହଣ କରିଥିଲେ',
        'ଚତୁରତା ଓ ହାସ୍ୟରସ ଶିକ୍ଷକଙ୍କ କଠୋରତାକୁ ସ୍ନେହରେ ବଦଳାଇ ଦେଲା',
        'ଆନ୍ନାଙ୍କ ଡାଏରୀ ନାଜି ଅତ୍ୟାଚାରର ଏକ ହୃଦୟସ୍ପର୍ଶୀ ଐତିହାସିକ ଦଲିଲ'
      ]
    },
    quiz: [
      {
        question: 'What memorable proverb did Anne Frank write regarding why she began keeping a diary?',
        questionOdia: 'ଡାଏରୀ ଲେଖିବା ଆରମ୍ଭ କରିବା ସମୟରେ ଆନ୍ନା ଫ୍ରାଙ୍କ କେଉଁ ପ୍ରସିଦ୍ଧ କଥାଟି ଲେଖିଥିଲେ?',
        options: [
          '"Silence is golden"',
          '"Paper has more patience than people"',
          '"A friend in need is a friend indeed"',
          '"Action speaks louder than words"'
        ],
        optionsOdia: [
          '"ନୀରବତା ସୁନା"',
          '"ମଣିଷ ଅପେକ୍ଷା କାଗଜର ଅଧିକ ଧୈର୍ଯ୍ୟ ଥାଏ"',
          '"ବିପଦ ବେଳର ବନ୍ଧୁ ହିଁ ପ୍ରକୃତ ବନ୍ଧୁ"',
          '"କାମ କଥାଠାରୁ ବଡ଼"'
        ],
        correctAnswerIndex: 1,
        explanation: 'Anne reflected that paper absorbs all secrets without judgment, unlike fickle humans.',
        explanationOdia: 'ଆନ୍ନା ଲେଖିଥିଲେ ଯେ "Paper has more patience than people" ।',
        topic: 'Diary Motivation'
      },
      {
        question: 'What pet name did Anne give to her diary in her letters?',
        questionOdia: 'ଆନ୍ନା ନିଜ ଡାଏରୀକୁ କେଉଁ ସ୍ନେହର ନାମ ଦେଇଥିଲେ?',
        options: ['Margot', 'Kitty', 'Sanne', 'Moortje'],
        optionsOdia: ['ମାର୍ଗୋଟ୍', 'କିଟି (Kitty)', 'ସାନେ', 'ମୁରତ୍ଜେ'],
        correctAnswerIndex: 1,
        explanation: 'She addressed her diary as her imaginary intimate best friend named "Kitty."',
        explanationOdia: 'ସେ ନିଜ ଡାଏରୀକୁ ପ୍ରିୟ ସାଙ୍ଗ "କିଟି" ଭାବେ ସମ୍ବୋଧନ କରୁଥିଲେ ।',
        topic: 'Diary Name'
      },
      {
        question: 'What subject did Mr. Keesing teach at Anne school?',
        questionOdia: 'ସ୍କୁଲରେ ମିଷ୍ଟର କିସିଙ୍ଗ୍ ଆନ୍ନାଙ୍କୁ କେଉଁ ବିଷୟ ପଢ଼ାଉଥିଲେ?',
        options: ['History', 'Mathematics', 'English Literature', 'Biology'],
        optionsOdia: ['ଇତିହାସ', 'ଗଣିତ (Mathematics)', 'ଇଂରାଜୀ ସାହିତ୍ୟ', 'ଜୀବବିଜ୍ଞାନ'],
        correctAnswerIndex: 1,
        explanation: 'Mr. Keesing was the old-fashioned maths teacher who grew exasperated with Anne chatter.',
        explanationOdia: 'ମିଷ୍ଟର କିସିଙ୍ଗ୍ ତାଙ୍କ ଗଣିତ ଶିକ୍ଷକ ଥିଲେ ।',
        topic: 'Characters'
      }
    ]
  },
  {
    subjectCode: 'ENG',
    classLevel: 'Class 10',
    order: 5,
    title: 'Advanced Analytical Paragraph & Creative Writing',
    titleOdia: 'ଉନ୍ନତ ବିଶ୍ଳେଷଣାତ୍ମକ ଅନୁଚ୍ଛେଦ ଓ ସୃଜନଶୀଳ ଲେଖନ',
    description: 'Interpreting pie charts, bar graphs, data tables, line graphs, structuring analytical paragraphs with comparative vocabulary, and creative story crafting.',
    descriptionOdia: 'ପାଇ-ଚାର୍ଟ, ବାର୍-ଗ୍ରାଫ୍ ଓ ତଥ୍ୟ ସାରଣୀ ବିଶ୍ଳେଷଣ, ତୁଳନାତ୍ମକ ଶବ୍ଦାବଳୀ ଓ ସୃଜନଶୀଳ ଗଳ୍ପ ରଚନା କୌଶଳ ।',
    lesson: {
      title: 'Data Synthesis, Statistical Vocabulary & Narrative Arcs',
      titleOdia: 'ତଥ୍ୟ ସଂଶ୍ଳେଷଣ, ପରିସଂଖ୍ୟାନ ଭାଷା ଓ କାହାଣୀ ଗଠନ',
      durationMinutes: 22,
      objectives: [
        'Decode graphic data representations: pie charts, bar charts, trend lines, and frequency distributions',
        'Structure an analytical paragraph: Topic sentence introducing the input, body detailing trends, contrasts, and apex points, and conclusive summary',
        'Employ quantitative discourse markers: "sharply plummeted", "steadily ascended", "plateaued", "represented a lion\'s share of"',
        'Construct compelling narrative arcs with setting, inciting incident, rising action, climax, and resolution'
      ],
      objectivesOdia: [
        'ପାଇ ଚାର୍ଟ, ବାର୍ ଚାର୍ଟ ଓ ଟ୍ରେଣ୍ଡ୍ ଲାଇନରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତଥ୍ୟ ବାହାର କରିବା',
        'ବିଶ୍ଳେଷଣାତ୍ମକ ଅନୁଚ୍ଛେଦର ଗଠନ: ପ୍ରାରମ୍ଭିକ ବାକ୍ୟ, ମୁଖ୍ୟ ତୁଳନାତ୍ମକ ତଥ୍ୟ ଓ ନିରପେକ୍ଷ ଉପସଂହାର',
        'ପରିସଂଖ୍ୟାନ ଭାଷା ପ୍ରୟୋଗ: "ଦ୍ରୁତ ବୃଦ୍ଧି", "ସ୍ଥିର ରହିବା", "ସର୍ବାଧିକ ଅଂଶ" ଇତ୍ୟାଦି ଲେଖିବା',
        'କାଳ୍ପନିକ ଗଳ୍ପର ମୁଖ୍ୟ ଅଂଶ: ପୃଷ୍ଠଭୂମି, ସମସ୍ୟା, ସଂଘର୍ଷ, ଶୀର୍ଷ ବିନ୍ଦୁ (Climax) ଓ ସମାଧାନ ଶିଖିବା'
      ],
      content: 'An analytical paragraph tests critical thinking and objective data interpretation within 100-120 words. It does not allow personal opinions or speculative projections beyond the provided graphic. Structure consists of: (1) An introductory sentence paraphrasing the prompt and chart objective; (2) Body paragraphs grouping data logically into peaks, troughs, correlations, and notable deviations using transitional connectives (in sharp contrast, whereas, correspondingly); and (3) An overarching concluding deduction capturing the dominant pattern. Creative writing, in contrast, engages imagination, sensory imagery, and psychological authenticity along a classic Freytag narrative pyramid: exposition, inciting incident, rising conflict, climax, falling action, and resonant resolution.',
      contentOdia: 'ବିଶ୍ଳେଷଣାତ୍ମକ ଅନୁଚ୍ଛେଦ (Analytical Paragraph) ରେ ଦିଆଯାଇଥିବା ଚାର୍ଟ, ଗ୍ରାଫ୍ ବା ତଥ୍ୟକୁ ସଠିକ୍ ଓ ନିରପେକ୍ଷ ଭାବେ ୧୦୦-୧୨୦ ଶବ୍ଦରେ ବର୍ଣ୍ଣନା କରିବାକୁ ହୁଏ । ଏଥିରେ ନିଜସ୍ୱ କଳ୍ପନା ବା ମନଗଢ଼ା ମତ ଦିଆଯାଏ ନାହିଁ । ପ୍ରଥମେ ଚାର୍ଟର ବିଷୟବସ୍ତୁ, ମଝିରେ ସର୍ବାଧିକ ଓ ସର୍ବନିମ୍ନ ତଥ୍ୟର ତୁଳନା ଏବଂ ଶେଷରେ ସମଗ୍ର ତଥ୍ୟର ସାରାଂଶ ଲେଖାଯାଏ । ଅପରପକ୍ଷରେ, ସୃଜନଶୀଳ ଗଳ୍ପ ଲେଖନରେ କଳ୍ପନାଶକ୍ତି, ଚରିତ୍ର ଚିତ୍ରଣ, ସଂଳାପ ଏବଂ ଚିତ୍ତାକର୍ଷକ ଶୀର୍ଷ ବିନ୍ଦୁ (Climax) ର ଆବଶ୍ୟକତା ଥାଏ ।',
      takeaways: [
        'Analytical paragraphs must remain strictly objective—do not inject personal biases',
        'Use varied synonyms for change: soared, surged, dived, dwindled, stabilized',
        'Always highlight the highest and lowest data points alongside overall trends',
        'In narrative writing, "Show, don\'t tell" immerses readers through sensory prose'
      ],
      takeawaysOdia: [
        'ବିଶ୍ଳେଷଣରେ ନିଜସ୍ୱ ମତ ବଦଳରେ କେବଳ ଦିଆଯାଇଥିବା ତଥ୍ୟର ବିଶ୍ଳେଷଣ କରନ୍ତୁ',
        'ବୃଦ୍ଧି ଓ ହ୍ରାସ ବୁଝାଇବା ପାଇଁ ଉପଯୁକ୍ତ ଇଂରାଜୀ ଶବ୍ଦ ବ୍ୟବହାର କରନ୍ତୁ',
        'ସର୍ବୋଚ୍ଚ ଓ ସର୍ବନିମ୍ନ ତଥ୍ୟ ବିନ୍ଦୁକୁ ନିଶ୍ଚୟ ଉଲ୍ଲେଖ କରନ୍ତୁ',
        'ଗଳ୍ପ ଲେଖିବା ବେଳେ ବର୍ଣ୍ଣନା ମାଧ୍ୟମରେ ପାଠକଙ୍କୁ ଅନୁଭବ କରାନ୍ତୁ'
      ]
    },
    quiz: [
      {
        question: 'Which phrase is most appropriate to describe data that reached a peak and then remained flat in an analytical paragraph?',
        questionOdia: 'ତଥ୍ୟ ଶୀର୍ଷରେ ପହଞ୍ଚି ସ୍ଥିର ରହିବାକୁ ବର୍ଣ୍ଣନା କରିବା ପାଇଁ କେଉଁ ଶବ୍ଦାବଳୀ ସବୁଠାରୁ ଉପଯୁକ୍ତ?',
        options: [
          '"Plummeted abruptly to ground"',
          '"Peaked before plateauing at an even level"',
          '"Fluctuated erratically back and forth"',
          '"Declined irreversibly into zero"'
        ],
        optionsOdia: [
          'ହଠାତ୍ ତଳକୁ ଖସିପଡ଼ିଲା',
          'ଶୀର୍ଷ ଛୁଇଁ ସମାନ ସ୍ତରରେ ସ୍ଥିର (Plateaued) ରହିଲା',
          'ଅନିୟମିତ ଭାବେ ବଦଳିଲା',
          'ଶୂନକୁ ଖସିଗଲା'
        ],
        correctAnswerIndex: 1,
        explanation: '"Peaked before plateauing" captures rising to a maximum followed by flat stabilization.',
        explanationOdia: '"Plateaued" ଶବ୍ଦଟି ଉଚ୍ଚ ସ୍ତରରେ ପହଞ୍ଚି ସ୍ଥିର ରହିବାକୁ ସଠିକ୍ ଭାବେ ବୁଝାଏ ।',
        topic: 'Analytical Vocabulary'
      },
      {
        question: 'What is strictly prohibited when composing an analytical paragraph for an exam?',
        questionOdia: 'ପରୀକ୍ଷାରେ ଏକ Analytical Paragraph ଲେଖିବା ସମୟରେ କେଉଁଟି ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ?',
        options: [
          'Using data percentages from the prompt',
          'Introducing personal opinions and unsubstantiated external assumptions',
          'Comparing highest and lowest figures',
          'Organizing text with transitional connectives'
        ],
        optionsOdia: [
          'ଚାର୍ଟର ପ୍ରତିଶତ ବ୍ୟବହାର କରିବା',
          'ନିଜସ୍ୱ ବ୍ୟକ୍ତିଗତ ମତାମତ ଓ କାଳ୍ପନିକ ଅନୁମାନ ଭରିବା',
          'ସର୍ବୋଚ୍ଚ ଓ ସର୍ବନିମ୍ନ ସଂଖ୍ୟାର ତୁଳନା କରିବା',
          'ଯୋଗସୂତ୍ରକାରୀ ଶବ୍ଦ ବ୍ୟବହାର କରିବା'
        ],
        correctAnswerIndex: 1,
        explanation: 'The analytical paragraph must reflect solely the factual data provided in the diagram.',
        explanationOdia: 'ଏଥିରେ ବ୍ୟକ୍ତିଗତ ମନଗଢ଼ା ମତ ନ ଦେଇ କେବଳ ଚାର୍ଟର ତଥ୍ୟ ଲେଖିବା ଉଚିତ ।',
        topic: 'Rules of Analytical Writing'
      },
      {
        question: 'In narrative story writing, what is the highest point of dramatic tension called?',
        questionOdia: 'ଗଳ୍ପ ରଚନାରେ ସବୁଠାରୁ ଉତ୍ତେଜନାପୂର୍ଣ୍ଣ ଶୀର୍ଷ ମୁହୂର୍ତ୍ତକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Exposition', 'Climax', 'Denouement', 'Inciting incident'],
        optionsOdia: ['ଭୂମିକା (Exposition)', 'କ୍ଲାଇମାକ୍ସ (Climax / ଶୀର୍ଷ ବିନ୍ଦୁ)', 'ସମାପ୍ତି', 'ପ୍ରାରମ୍ଭିକ ଘଟଣା'],
        correctAnswerIndex: 1,
        explanation: 'The climax is the critical turning point where conflict reaches peak intensity.',
        explanationOdia: 'କ୍ଲାଇମାକ୍ସ (Climax) ହେଉଛି କାହାଣୀର ସର୍ବୋଚ୍ଚ ରୋମାଞ୍ଚକର ପରିଣତି ବିନ୍ଦୁ ।',
        topic: 'Story Structure'
      }
    ]
  },

  // ---------------------------------------------------------
  // SOCIAL SCIENCE (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'SST',
    classLevel: 'Class 10',
    order: 1,
    title: 'Resources and Development',
    titleOdia: 'ସମ୍ବଳ ଓ ବିକାଶ',
    description: 'Classification of resources, sustainable development, Rio de Janeiro Earth Summit 1992, resource planning in India, land degradation, and soil types.',
    descriptionOdia: 'ସମ୍ବଳର ବର୍ଗୀକରଣ, ଧାରଣକ୍ଷମ ବିକାଶ, ରିଓ ପୃଥିବୀ ସମ୍ମିଳନୀ (୧୯୯୨), ଭାରତରେ ସମ୍ବଳ ଯୋଜନା, ଭୂମିକ୍ଷୟ ଓ ମୃତ୍ତିକାର ପ୍ରକାରଭେଦ ।',
    lesson: {
      title: 'Resource Planning, Land Utilization & Soil Diversity',
      titleOdia: 'ସମ୍ବଳ ଯୋଜନା, ଜମି ବ୍ୟବହାର ଓ ମୃତ୍ତିକା ବିବିଧତା',
      durationMinutes: 24,
      objectives: [
        'Define resources and classify by origin (biotic/abiotic), exhaustibility (renewable/non-renewable), and status of development',
        'State principles of Sustainable Development and Agenda 21 from 1992 Rio Earth Summit',
        'Analyze causes of land degradation: overgrazing, deforestation, over-irrigation causing salinity',
        'Map major soil categories of India: Alluvial, Black (Regur / cotton), Red & Yellow, Laterite, Arid, and Forest soils'
      ],
      objectivesOdia: [
        'ସମ୍ବଳର ସଂଜ୍ଞା ଓ ବର୍ଗୀକରଣ: ଜୈବ/ଅଜୈବ, ନବୀକରଣଯୋଗ୍ୟ/ଅନବୀକରଣଯୋଗ୍ୟ ଏବଂ ବିକାଶ ସ୍ଥିତି ବୁଝିବା',
        'ଧାରଣକ୍ଷମ ବିକାଶ (Sustainable Development) ଏବଂ ୧୯୯୨ ରିଓ ପୃଥିବୀ ସମ୍ମିଳନୀର ଏଜେଣ୍ଡା ୨୧ ଜାଣିବା',
        'ଜମିକ୍ଷୟର କାରଣ: ଜଙ୍ଗଲ କଟା, ଅତ୍ୟଧିକ ଚାରଣ ଓ ଅତ୍ୟଧିକ ଜଳସେଚନ ଜନିତ ଲବଣାକ୍ତତା ବୁଝିବା',
        'ଭାରତର ପ୍ରମୁଖ ମୃତ୍ତିକା: ପଟୁମାଟି, କଳାମାଟି (ରେଗୁର/କପା ମାଟି), ଲାଲ୍-ହଳଦିଆ ମାଟି, ଲାଟେରାଇଟ୍ ଓ ମରୁ ମୃତ୍ତିକା'
      ],
      content: 'Everything available in the environment that can be used to satisfy human needs, provided it is technologically accessible, economically feasible, and culturally acceptable, is a resource. Indiscriminate exploitation led to global crises such as ozone depletion, global warming, and environmental degradation. The 1992 Rio de Janeiro Earth Summit convened over 100 heads of state to adopt Agenda 21 for Sustainable Development—development meeting current needs without compromising future generations. Resource planning in India involves inventory surveying, institutional technology alignment, and matching regional plans with national goals. Land resources face acute degradation: overgrazing in Gujarat and Rajasthan, over-irrigation causing waterlogging and alkalinity in Punjab and Haryana, and mining scars in Jharkhand. Soils are India agricultural base: Alluvial (most widespread across northern plains), Black (rich in clay, ideal for cotton), Red/Yellow (ferric diffusion), and Laterite (leached by intense monsoon rains).',
      contentOdia: 'ମଣିଷର ଆବଶ୍ୟକତା ପୂରଣ କରିପାରୁଥିବା ପ୍ରାକୃତିକ ପଦାର୍ଥକୁ ସମ୍ବଳ କୁହାଯାଏ । ଅତ୍ୟଧିକ ଶୋଷଣ ଯୋଗୁଁ ପରିବେଶ ପ୍ରଦୂଷଣ ଓ ଜଳବାୟୁ ପରିବର୍ତ୍ତନ ଭଳି ସଙ୍କଟ ସୃଷ୍ଟି ହୋଇଛି । ୧୯୯୨ ରେ ବ୍ରାଜିଲର ରିଓ ଡି ଜେନେରିଓ ସହରରେ ଅନୁଷ୍ଠିତ ପୃଥିବୀ ସମ୍ମିଳନୀରେ "ଏଜେଣ୍ଡା ୨୧" ଗ୍ରହଣ କରାଯାଇ ଧାରଣକ୍ଷମ ବିକାଶ (ଭବିଷ୍ୟତ ବଂଶଧରଙ୍କ ସ୍ୱାର୍ଥକୁ ବଳି ନ ଦେଇ ବିକାଶ) ଉପରେ ଗୁରୁତ୍ୱ ଦିଆଗଲା । ଭାରତରେ ସମ୍ବଳର ସୁବଣ୍ଟନ ପାଇଁ ସମ୍ବଳ ଯୋଜନା ଆବଶ୍ୟକ । ପଞ୍ଜାବ ଓ ହରିୟାଣାରେ ଅତ୍ୟଧିକ ଜଳସେଚନ ଏବଂ ରାଜସ୍ଥାନରେ ଅତ୍ୟଧିକ ପଶୁଚାରଣ ଭୂମିକ୍ଷୟ ଘଟାଉଛି । ମୁଖ୍ୟ ମୃତ୍ତିକା: ଉର୍ବର ପଟୁମାଟି, କପା ଚାଷ ପାଇଁ ଉତ୍କୃଷ୍ଟ କଳାମାଟି (ରେଗୁର ମାଟି), ଲୌହ ଅଂଶ ଥିବା ଲାଲ୍ ମାଟି ଏବଂ ପ୍ରବଳ ବର୍ଷାରେ ଧୋଇ ହୋଇଯାଉଥିବା ଲାଟେରାଇଟ୍ ମାଟି ।',
      takeaways: [
        'Sustainable development balances socio-economic progress with ecological preservation',
        'Agenda 21 was adopted at Rio Earth Summit (1992) to combat environmental degradation',
        'Black soil (Regur) is rich in montmorillonite clay and ideal for cotton cultivation',
        'Over-irrigation in Punjab causes soil salinity through capillary waterlogging'
      ],
      takeawaysOdia: [
        'ଧାରଣକ୍ଷମ ବିକାଶ ଭବିଷ୍ୟତ ପାଇଁ ପ୍ରକୃତିକୁ ସୁରକ୍ଷିତ ରଖି ଆଗକୁ ବଢ଼େ',
        '୧୯୯୨ ରିଓ ସମ୍ମିଳନୀରେ ଏଜେଣ୍ଡା ୨୧ ଗ୍ରହଣ କରାଯାଇଥିଲା',
        'କଳାମାଟି (ରେଗୁର) କପା ଚାଷ ପାଇଁ ସର୍ବୋତ୍କୃଷ୍ଟ',
        'ପଞ୍ଜାବରେ ଅତ୍ୟଧିକ ଜଳସେଚନ ଯୋଗୁଁ ଜମି ଲବଣାକ୍ତ ହୋଇ ନଷ୍ଟ ହେଉଛି'
      ]
    },
    quiz: [
      {
        question: 'Which soil type is popularly known as "Regur Soil" and is optimal for cotton cultivation?',
        questionOdia: 'କେଉଁ ପ୍ରକାରର ମୃତ୍ତିକାକୁ "ରେଗୁର ମାଟି" କୁହାଯାଏ ଏବଂ ଏହା କପା ଚାଷ ପାଇଁ ଉତ୍କୃଷ୍ଟ?',
        options: ['Laterite soil', 'Black soil', 'Alluvial soil', 'Arid soil'],
        optionsOdia: ['ଲାଟେରାଇଟ୍ ମାଟି', 'କଳା ମାଟି (Black Soil / Regur)', 'ପଟୁ ମାଟି', 'ମରୁ ମାଟି'],
        correctAnswerIndex: 1,
        explanation: 'Black soil has high moisture retentive clay capacity, earning the title black cotton soil.',
        explanationOdia: 'କଳାମାଟିକୁ ରେଗୁର ମାଟି କୁହାଯାଏ ଯାହା କପା ଚାଷ ପାଇଁ ଅତ୍ୟନ୍ତ ଉପଯୋଗୀ ।',
        topic: 'Soil Classification'
      },
      {
        question: 'In which year was the historic United Nations Conference on Environment and Development (Earth Summit) held in Rio de Janeiro?',
        questionOdia: 'ବ୍ରାଜିଲର ରିଓ ଡି ଜେନେରିଓରେ ଐତିହାସିକ ଜାତିସଂଘ ପୃଥିବୀ ସମ୍ମିଳନୀ କେଉଁ ବର୍ଷ ଅନୁଷ୍ଠିତ ହୋଇଥିଲା?',
        options: ['1972', '1992', '2002', '2015'],
        optionsOdia: ['୧୯୭୨', '୧୯୯୨', '୨୦୦୨', '୨୦୧୫'],
        correctAnswerIndex: 1,
        explanation: 'The Rio Earth Summit convened in June 1992 adopting Agenda 21.',
        explanationOdia: '୧୯୯୨ ମସିହାରେ ରିଓ ପୃଥିବୀ ସମ୍ମିଳନୀ ଅନୁଷ୍ଠିତ ହୋଇଥିଲା ।',
        topic: 'Earth Summit'
      },
      {
        question: 'What is the main cause of land degradation in Punjab and Haryana?',
        questionOdia: 'ପଞ୍ଜାବ ଓ ହରିୟାଣାରେ ଭୂମିକ୍ଷୟ ଓ ଜମି ନଷ୍ଟ ହେବାର ମୁଖ୍ୟ କାରଣ କ’ଣ?',
        options: ['Intense mining', 'Overgrazing by cattle', 'Over-irrigation leading to salinity and waterlogging', 'Deforestation for timber'],
        optionsOdia: ['ଖଣି ଖନନ', 'ଅତ୍ୟଧିକ ପଶୁଚାରଣ', 'ଅତ୍ୟଧିକ ଜଳସେଚନ ଯୋଗୁଁ ଜଳବନ୍ଦୀ ଓ ଲବଣାକ୍ତତା', 'ଜଙ୍ଗଲ କଟା'],
        correctAnswerIndex: 2,
        explanation: 'Over-irrigation raises the water table, causing surface salinity and alkalinity that sterilizes farmland.',
        explanationOdia: 'ଅତ୍ୟଧିକ ଜଳସେଚନ ହେତୁ ଜମିରେ ଲୁଣ ଜମି ଜମିର ଉର୍ବରତା ନଷ୍ଟ ହୁଏ ।',
        topic: 'Land Degradation'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 10',
    order: 2,
    title: 'The Rise of Nationalism in Europe',
    titleOdia: 'ୟୁରୋପରେ ଜାତୀୟତାବାଦର ଉନ୍ମେଷ',
    description: 'Frederic Sorrieu vision, French Revolution and the idea of nation, Napoleonic Code 1804, Giuseppe Mazzini, unification of Germany and Italy.',
    descriptionOdia: 'ଫ୍ରେଡେରିକ୍ ସୋରିୟୋଙ୍କ କଳ୍ପନା, ଫରାସୀ ବିପ୍ଳବ, ନେପୋଲିଅନ୍ କୋଡ୍ (୧୮୦୪), ଜୁସେପେ ମାଜିନି ଏବଂ ଜର୍ମାନୀ ଓ ଇଟାଲୀର ଏକତ୍ରୀକରଣ ।',
    lesson: {
      title: 'Liberalism, Revolutionary Uprisings & Nation-State Unification',
      titleOdia: 'ଉଦାରବାଦ, ବିପ୍ଳବୀ ଆନ୍ଦୋଳନ ଓ ଜାତୀୟ ରାଷ୍ଟ୍ର ଗଠନ',
      durationMinutes: 26,
      objectives: [
        'Analyze Frederic Sorrieu 1848 utopian print illustrating universal democratic and social republics',
        'Examine Napoleonic Civil Code of 1804: equality before law, abolition of birth privileges, property rights',
        'Trace Giuseppe Mazzini revolutionary underground societies (Young Italy, Young Europe)',
        'Detail unification paths: Otto von Bismarck "Blood and Iron" policy in Germany and Cavour, Garibaldi in Italy'
      ],
      objectivesOdia: [
        '୧୮୪୮ ରେ ଫ୍ରେଡେରିକ୍ ସୋରିୟୋଙ୍କ ଗଣତାନ୍ତ୍ରିକ ବିଶ୍ୱ ଚିତ୍ରର ତାତ୍ପର୍ଯ୍ୟ ବୁଝିବା',
        '୧୮୦୪ ର ନେପୋଲିଅନ୍ ସିଭିଲ୍ କୋଡ୍: ଆଇନ ଆଗରେ ସମାନତା, ଜନ୍ମଗତ ସୁବିଧା ଉଚ୍ଛେଦ ଓ ସମ୍ପତ୍ତି ଅଧିକାର ଜାଣିବା',
        'ଜୁସେପେ ମାଜିନିଙ୍କ ଗୁପ୍ତ ସଂଗଠନ: "ୟଙ୍ଗ୍ ଇଟାଲୀ" ଓ "ୟଙ୍ଗ୍ ୟୁରୋପ" ର ଭୂମିକା ବୁଝିବା',
        'ଜର୍ମାନୀର ଏକତ୍ରୀକରଣରେ ବିସମାର୍କଙ୍କ "ରକ୍ତ ଓ ଲୌହ" ନୀତି ଏବଂ ଇଟାଲୀରେ କାଭୁର ଓ ଗାରିବାଲ୍ଡିଙ୍କ ଯୋଗଦାନ'
      ],
      content: 'During the 19th century, nationalism emerged as a transformative force in Europe, replacing multinational dynastic empires with unified sovereign nation-states. The French Revolution of 1789 had pioneered this shift, transferring sovereignty from the monarch to the French people. Napoleon codified legal administration in the Civil Code of 1804, standardizing weights and measures and abolishing feudal serfdom, though his military expansions sparked local rebellions. After Napoleon defeat at Waterloo in 1815, the Congress of Vienna sought to restore conservative autocracies. However, secret revolutionary societies flourished under visionary figures like Giuseppe Mazzini. Italy was unified through the diplomatic genius of Count Cavour, the republican insurrection of Giuseppe Garibaldi Red Shirts, and King Victor Emmanuel II. In Germany, Prussian Chief Minister Otto von Bismarck orchestrated three victorious wars over seven years (against Denmark, Austria, and France) through "Blood and Iron", proclaiming Kaiser Wilhelm I as Emperor of a united Germany in 1871.',
      contentOdia: '୧୯ଶ ଶତାବ୍ଦୀରେ ଜାତୀୟତାବାଦ ୟୁରୋପରେ ଏକ ବିପ୍ଳବ ଆଣିଦେଇ ରାଜବଂଶୀୟ ଶାସନ ବଦଳରେ ସାର୍ବଭୌମ ଜାତୀୟ ରାଷ୍ଟ୍ର ଗଠନ କଲା । ୧୭୮୯ ର ଫରାସୀ ବିପ୍ଳବ ଏହାର ମୂଳଦୁଆ ପକାଇଥିଲା । ୧୮୦୪ ରେ ନେପୋଲିଅନ୍ ନିଜର ଆଇନ ସଂହିତା (Napoleonic Code) ଲାଗୁ କରି ଜନ୍ମଗତ ସୁବିଧା ଉଚ୍ଛେଦ କଲେ ଏବଂ ଆଇନ ଆଗରେ ସମସ୍ତଙ୍କୁ ସମାନ ଅଧିକାର ଦେଲେ । ୧୮୧୫ ରେ ୱାଟରଲୁ ଯୁଦ୍ଧରେ ନେପୋଲିଅନ୍ ପରାଜିତ ହେବା ପରେ ଭିଏନା କଂଗ୍ରେସ ପୁରୁଣା ରାଜତନ୍ତ୍ର ଫେରାଇ ଆଣିବାକୁ ଚେଷ୍ଟା କଲା । ମାତ୍ର ମାଜିନିଙ୍କ ଭଳି ବିପ୍ଳବୀମାନେ "ୟଙ୍ଗ୍ ଇଟାଲୀ" ଗଠନ କରି ବିପ୍ଳବ ଜାରି ରଖିଲେ । ଇଟାଲୀର ଏକତ୍ରୀକରଣ କାଭୁରଙ୍କ କୂଟନୀତି, ଗାରିବାଲ୍ଡିଙ୍କ ସୈନ୍ୟବାହିନୀ ଓ ଭିକ୍ଟର ଇମାନୁଏଲ୍‌ଙ୍କ ନେତୃତ୍ୱରେ ସମ୍ଭବ ହେଲା । ଜର୍ମାନୀରେ ପ୍ରୁସିଆର ମୁଖ୍ୟମନ୍ତ୍ରୀ ଅଟୋ ଭନ୍ ବିସମାର୍କ "ରକ୍ତ ଓ ଲୌହ" (Blood and Iron) ନୀତି ପ୍ରୟୋଗ କରି ୧୮୭୧ ରେ ଏକତ୍ରିତ ଜର୍ମାନୀ ଗଠନ କଲେ ।',
      takeaways: [
        'Napoleonic Code (1804) established legal equality and abolished feudal rights',
        'Giuseppe Mazzini founded Young Italy and Young Europe underground societies',
        'Otto von Bismarck unified Germany using Prussian army via "Blood and Iron"',
        'Victor Emmanuel II was proclaimed King of unified Italy in 1861'
      ],
      takeawaysOdia: [
        '୧୮୦୪ ର ନେପୋଲିଅନ୍ କୋଡ୍ ଆଇନ ଆଗରେ ସମାନତା ଓ ସମ୍ପତ୍ତି ଅଧିକାର ଦେଲା',
        'ମାଜିନି ୟଙ୍ଗ୍ ଇଟାଲୀ ଗୁପ୍ତ ସଂଗଠନ ପ୍ରତିଷ୍ଠା କରିଥିଲେ',
        'ବିସମାର୍କ "ରକ୍ତ ଓ ଲୌହ" ନୀତି ଦ୍ୱାରା ଜର୍ମାନୀକୁ ଏକତ୍ରିତ କଲେ',
        '୧୮୬୧ ରେ ଭିକ୍ଟର ଇମାନୁଏଲ୍ ଏକତ୍ରିତ ଇଟାଲୀର ରାଜା ହେଲେ'
      ]
    },
    quiz: [
      {
        question: 'Which prominent statesman engineered German unification through his policy of "Blood and Iron"?',
        questionOdia: '"ରକ୍ତ ଓ ଲୌହ" (Blood and Iron) ନୀତି ପ୍ରୟୋଗ କରି ଜର୍ମାନୀର ଏକତ୍ରୀକରଣ କିଏ କରିଥିଲେ?',
        options: ['Giuseppe Garibaldi', 'Otto von Bismarck', 'Napoleon Bonaparte', 'Kaiser Wilhelm II'],
        optionsOdia: ['ଜୁସେପେ ଗାରିବାଲ୍ଡି', 'ଅଟୋ ଭନ୍ ବିସମାର୍କ (Otto von Bismarck)', 'ନେପୋଲିଅନ୍ ବୋନାପାର୍ଟ', 'କାଇଜର ୱିଲହେଲ୍ମ'],
        correctAnswerIndex: 1,
        explanation: 'Prussian Chief Minister Bismarck orchestrated three victorious wars to forge a unified German Empire.',
        explanationOdia: 'ପ୍ରୁସିଆର ମନ୍ତ୍ରୀ ଅଟୋ ଭନ୍ ବିସମାର୍କ ନିଜର କୂଟନୀତି ଓ ସାମରିକ ଶକ୍ତି ବଳରେ ଜର୍ମାନୀ ଗଠନ କଲେ ।',
        topic: 'German Unification'
      },
      {
        question: 'What was the revolutionary underground secret society founded by Giuseppe Mazzini in Marseilles?',
        questionOdia: 'ଜୁସେପେ ମାଜିନି ମାର୍ସେଲିସ୍ ଠାରେ କେଉଁ ବିପ୍ଳବୀ ଗୁପ୍ତ ସଂଗଠନ ପ୍ରତିଷ୍ଠା କରିଥିଲେ?',
        options: ['Carbonari', 'Young Italy', 'Red Shirts', 'Jacobin Club'],
        optionsOdia: ['କାର୍ବୋନାରୀ', 'ୟଙ୍ଗ୍ ଇଟାଲୀ (Young Italy)', 'ରେଡ୍ ସାର୍ଟ୍ସ', 'ଜାକୋବିନ୍ କ୍ଲବ୍'],
        correctAnswerIndex: 1,
        explanation: 'Mazzini established Young Italy in Marseilles in 1831 to mobilize youth for an Italian democratic republic.',
        explanationOdia: 'ମାଜିନି ୧୮୩୧ ରେ "ୟଙ୍ଗ୍ ଇଟାଲୀ" ସଂଗଠନ ଗଠନ କରିଥିଲେ ।',
        topic: 'Italian Nationalism'
      },
      {
        question: 'The Civil Code of 1804 in France is universally recognized as the:',
        questionOdia: 'ଫ୍ରାନ୍ସର ୧୮୦୪ ର ସିଭିଲ୍ କୋଡ୍ ସାଧାରଣତଃ କେଉଁ ନାମରେ ପରିଚିତ?',
        options: ['Treaty of Vienna', 'Napoleonic Code', 'Declaration of Rights', 'Metternich Code'],
        optionsOdia: ['ଭିଏନା ଚୁକ୍ତି', 'ନେପୋଲିଅନ୍ କୋଡ୍ (Napoleonic Code)', 'ଅଧିକାର ଘୋଷଣାପତ୍ର', 'ମେଟରନିକ୍ କୋଡ୍'],
        correctAnswerIndex: 1,
        explanation: 'The Napoleonic Code simplified French laws, ended feudalism, and secured property rights.',
        explanationOdia: 'ଏହାକୁ ନେପୋଲିଅନ୍ କୋଡ୍ କୁହାଯାଏ ଯାହା ଆଇନଗତ ସଂସ୍କାର ଆଣିଥିଲା ।',
        topic: 'Napoleonic Code'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 10',
    order: 3,
    title: 'Power Sharing',
    titleOdia: 'କ୍ଷମତା ବଣ୍ଟନ',
    description: 'Case studies of Belgium and Sri Lanka, majoritarianism in Sri Lanka vs accommodation in Belgium, horizontal and vertical forms of power sharing.',
    descriptionOdia: 'ବେଲଜିୟମ୍ ଓ ଶ୍ରୀଲଙ୍କାର ଉଦାହରଣ, ଶ୍ରୀଲଙ୍କାର ବହୁସଂଖ୍ୟାବାଦ ଓ ବେଲଜିୟମର ସମନ୍ୱୟ, କ୍ଷମତାର ସମାନ୍ତରାଳ ଓ ଭୂଲମ୍ବ ବଣ୍ଟନ ।',
    lesson: {
      title: 'Majoritarianism vs Accommodation & Sharing Models',
      titleOdia: 'ବହୁସଂଖ୍ୟାବାଦ ବନାମ ସମନ୍ୱୟ ଓ କ୍ଷମତା ଭାଗବଣ୍ଟା',
      durationMinutes: 24,
      objectives: [
        'Analyze ethnic composition: Belgium (59% Dutch, 40% French, 1% German) and Sri Lanka (74% Sinhala, 18% Tamil)',
        'Evaluate fallout of majoritarianism in Sri Lanka: Sinhala supremacy leading to civil war',
        'Examine constitutional accommodation in Belgium: equal minister ratio, state autonomy, and Community Government',
        'Differentiate horizontal power sharing (Legislature, Executive, Judiciary) from vertical federalism (Central, State, Local)'
      ],
      objectivesOdia: [
        'ଜାତିଗତ ଗଠନ: ବେଲଜିୟମ୍ (୫୯% ଡଚ୍, ୪୦% ଫ୍ରେଞ୍ଚ) ଏବଂ ଶ୍ରୀଲଙ୍କା (୭୪% ସିଂହଳୀ, ୧୮% ତାମିଲ) ର ପାର୍ଥକ୍ୟ ବୁଝିବା',
        'ଶ୍ରୀଲଙ୍କାରେ ବହୁସଂଖ୍ୟାବାଦ ନୀତି ଯୋଗୁଁ ଗୃହଯୁଦ୍ଧ ସୃଷ୍ଟି ହେବା ଅନୁଧ୍ୟାନ କରିବା',
        'ବେଲଜିୟମର ସାମ୍ବିଧାନିକ ବୁଝାମଣା: ସମାନ ମନ୍ତ୍ରୀ ପଦ, ରାଜ୍ୟ କ୍ଷମତା ଓ ସମ୍ପ୍ରଦାୟ ସରକାର ଜାଣିବା',
        'ସମାନ୍ତରାଳ କ୍ଷମତା ବଣ୍ଟନ (ବିଧାୟିକା, କାର୍ଯ୍ୟପାଳିକା, ନ୍ୟାୟପାଳିକା) ଓ ଭୂଲମ୍ବ କ୍ଷମତା ବଣ୍ଟନ (କେନ୍ଦ୍ର, ରାଜ୍ୟ, ସ୍ଥାନୀୟ) ବୁଝିବା'
      ],
      content: 'Power sharing is the very spirit of democracy. Belgium, a small European nation, successfully avoided ethnic partition by amending its constitution four times between 1970 and 1993. The Belgian model prescribed that Dutch- and French-speaking ministers be equal in the central government, granted autonomy to regional governments, and instituted a unique "Community Government" handling cultural and educational affairs. Consequently, Brussels was chosen as headquarters of the European Union. In contrast, Sri Lanka embraced majoritarianism after independence in 1948: the 1956 Act made Sinhala the sole official language, preferential policies favored Sinhala university applicants, and Buddhism was state-promoted. Alienated Sri Lankan Tamils launched armed rebellions (LTTE), plunging the nation into decades of devastating civil war. Horizontal power sharing distributes authority among equal organs (Legislature, Executive, Judiciary) creating checks and balances, while vertical sharing distributes power down tiers of government (Federalism).',
      contentOdia: 'କ୍ଷମତା ବଣ୍ଟନ ହେଉଛି ଗଣତନ୍ତ୍ରର ଆତ୍ମା । ବେଲଜିୟମରେ ଡଚ୍ ଓ ଫ୍ରେଞ୍ଚ ଭାଷାଭାଷୀ ଲୋକଙ୍କ ମଧ୍ୟରେ ବିବାଦ ଥିଲା । ମାତ୍ର ସେଠାକାର ନେତାମାନେ ସମ୍ବିଧାନ ସଂଶୋଧନ କରି ଉଭୟ ସମ୍ପ୍ରଦାୟକୁ ସମାନ ମନ୍ତ୍ରୀ ପଦ ଦେଲେ ଏବଂ ଏକ ସ୍ୱତନ୍ତ୍ର "ସମ୍ପ୍ରଦାୟ ସରକାର" ଗଠନ କଲେ । ଏହି ସଫଳ ବୁଝାମଣା ପାଇଁ ରାଜଧାନୀ ବ୍ରସେଲ୍ସକୁ ୟୁରୋପୀୟ ୟୁନିଅନର ମୁଖ୍ୟାଳୟ କରାଗଲା । ଅନ୍ୟପକ୍ଷରେ, ଶ୍ରୀଲଙ୍କା ୧୯୪୮ ରେ ସ୍ୱାଧୀନ ହେବା ପରେ ବହୁସଂଖ୍ୟକ ସିଂହଳୀମାନଙ୍କୁ ସବୁ ସୁବିଧା ଦେଇ ୧୯୫୬ ରେ ସିଂହଳୀ ଭାଷାକୁ ଏକମାତ୍ର ସରକାରୀ ଭାଷା ଘୋଷଣା କଲା ଏବଂ ବୌଦ୍ଧ ଧର୍ମକୁ ପ୍ରୋତ୍ସାହିତ କଲା । ଫଳରେ ସଂଖ୍ୟାଲଘୁ ତାମିଲମାନେ ବିଦ୍ରୋହ କଲେ ଏବଂ ଦେଶରେ ଭୟଙ୍କର ଗୃହଯୁଦ୍ଧ (Civil War) ଘଟିଲା । ବିଧାନସଭା, କାର୍ଯ୍ୟପାଳିକା ଓ ନ୍ୟାୟପାଳିକା ମଧ୍ୟରେ କ୍ଷମତା ବାଣ୍ଟିବାକୁ ସମାନ୍ତରାଳ ବଣ୍ଟନ (Checks and Balances) କୁହାଯାଏ ।',
      takeaways: [
        'Belgium accommodated diversity through power sharing; Brussels became EU headquarters',
        'Sri Lanka majoritarian policies triggered catastrophic civil conflict with LTTE',
        'Horizontal power sharing institutes systemic checks and balances between organs',
        'Power sharing prevents social turmoil, tyranny of the majority, and state disintegration'
      ],
      takeawaysOdia: [
        'ବେଲଜିୟମ୍ କ୍ଷମତା ବାଣ୍ଟି ଶାନ୍ତି ପ୍ରତିଷ୍ଠା କଲା ଏବଂ ବ୍ରସେଲ୍ସ EU ମୁଖ୍ୟାଳୟ ହେଲା',
        'ଶ୍ରୀଲଙ୍କାର ବହୁସଂଖ୍ୟାବାଦୀ ନୀତି ଦେଶରେ ରକ୍ତାକ୍ତ ଗୃହଯୁଦ୍ଧ ଡାକିଆଣିଲା',
        'ବିଧାୟିକା, କାର୍ଯ୍ୟପାଳିକା ଓ ନ୍ୟାୟପାଳିକା ମଧ୍ୟରେ କ୍ଷମତା ସନ୍ତୁଳନ ରହେ',
        'କ୍ଷମତା ବଣ୍ଟନ ସାମାଜିକ ବିଭାଜନ ଓ ଅରାଜକତାକୁ ରୋକିଥାଏ'
      ]
    },
    quiz: [
      {
        question: 'Which international organization chose Brussels as its headquarters due to the success of the Belgian power-sharing model?',
        questionOdia: 'ବେଲଜିୟମର ସଫଳ କ୍ଷମତା ବଣ୍ଟନ ପାଇଁ କେଉଁ ଆନ୍ତର୍ଜାତୀୟ ସଂସ୍ଥା ବ୍ରସେଲ୍ସକୁ ନିଜର ମୁଖ୍ୟାଳୟ ଚୟନ କଲା?',
        options: ['United Nations (UN)', 'European Union (EU)', 'World Health Organization (WHO)', 'NATO headquarters only'],
        optionsOdia: ['ଜାତିସଂଘ', 'ୟୁରୋପୀୟ ୟୁନିଅନ୍ (European Union)', 'ବିଶ୍ୱ ସ୍ୱାସ୍ଥ୍ୟ ସଂଗଠନ', 'କେବଳ ନାଟୋ'],
        correctAnswerIndex: 1,
        explanation: 'Brussels was chosen as the administrative headquarters of the European Union.',
        explanationOdia: 'ୟୁରୋପୀୟ ୟୁନିଅନ୍ (EU) ନିଜର ମୁଖ୍ୟାଳୟ ଭାବେ ବ୍ରସେଲ୍ସକୁ ଗ୍ରହଣ କରିଥିଲା ।',
        topic: 'Belgian Model'
      },
      {
        question: 'In which year was the Act passed in Sri Lanka recognizing Sinhala as the sole official language, disregarding Tamil?',
        questionOdia: 'ଶ୍ରୀଲଙ୍କାରେ ତାମିଲମାନଙ୍କୁ ଉପେକ୍ଷା କରି କେଉଁ ବର୍ଷ ସିଂହଳୀ ଭାଷାକୁ ଏକମାତ୍ର ସରକାରୀ ଭାଷା ଘୋଷଣା କରାଗଲା?',
        options: ['1948', '1956', '1965', '1983'],
        optionsOdia: ['୧୯୪୮', '୧୯୫୬', '୧୯୬୫', '୧୯୮୩'],
        correctAnswerIndex: 1,
        explanation: 'The 1956 Official Language Act established Sinhala linguistic supremacy, alienating Tamils.',
        explanationOdia: '୧୯୫୬ ର ଆଇନ ବଳରେ ସିଂହଳୀକୁ ଏକମାତ୍ର ସରକାରୀ ଭାଷା କରାଯାଇଥିଲା ।',
        topic: 'Majoritarianism in Sri Lanka'
      },
      {
        question: 'Power sharing between Legislature, Executive, and Judiciary is categorized as which type of sharing?',
        questionOdia: 'ବିଧାୟିକା, କାର୍ଯ୍ୟପାଳିକା ଓ ନ୍ୟାୟପାଳିକା ମଧ୍ୟରେ କ୍ଷମତା ବଣ୍ଟନକୁ କେଉଁ ପ୍ରକାରର କ୍ଷମତା ବଣ୍ଟନ କୁହାଯାଏ?',
        options: [
          'Vertical power sharing',
          'Horizontal power sharing (System of Checks and Balances)',
          'Community power sharing',
          'Pressure group alliance'
        ],
        optionsOdia: [
          'ଭୂଲମ୍ବ କ୍ଷମତା ବଣ୍ଟନ',
          'ସମାନ୍ତରାଳ କ୍ଷମତା ବଣ୍ଟନ (Horizontal / Checks and Balances)',
          'ସମ୍ପ୍ରଦାୟ କ୍ଷମତା ବଣ୍ଟନ',
          'ଚାପଗୋଷ୍ଠୀ ମେଣ୍ଟ'
        ],
        correctAnswerIndex: 1,
        explanation: 'Horizontal distribution places organs of government at the same level, exercising distinct checks on each other.',
        explanationOdia: 'ଏହାକୁ ସମାନ୍ତରାଳ କ୍ଷମତା ବଣ୍ଟନ କୁହାଯାଏ ଯେଉଁଥିରେ ପରସ୍ପର ଉପରେ ନିୟନ୍ତ୍ରଣ ଓ ସନ୍ତୁଳନ ରହେ ।',
        topic: 'Forms of Power Sharing'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 10',
    order: 4,
    title: 'Development & Economic Growth',
    titleOdia: 'ବିକାଶ ଓ ଅର୍ଥନୈତିକ ପ୍ରଗତି',
    description: 'What development promises, national development, comparing countries by Per Capita Income (World Bank), Human Development Index (UNDP), and sustainability.',
    descriptionOdia: 'ବିକାଶର ଧାରଣା, ବିଶ୍ୱବ୍ୟାଙ୍କ ଅନୁସାରେ ମୁଣ୍ଡପିଛା ଆୟ, UNDP ର ମାନବ ବିକାଶ ସୂଚକାଙ୍କ (HDI) ଓ ସାଧାରଣ ସୁବିଧା ।',
    lesson: {
      title: 'Income vs Non-Material Goals, Per Capita & HDI Metrics',
      titleOdia: 'ଆୟ ବନାମ ଜୀବନଧାରଣ ମାନ, ମୁଣ୍ଡପିଛା ଆୟ ଓ HDI ସୂଚକ',
      durationMinutes: 24,
      objectives: [
        'Recognize that different persons have different and sometimes conflicting developmental goals (e.g. industrialist vs displaced adivasi dam perspective)',
        'Understand limitations of national income and calculate Average / Per Capita Income = Total National Income / Total Population',
        'Compare World Bank criteria (World Development Reports based on PCI) versus UNDP Human Development Index (HDI based on education, health, longevity, and PCI)',
        'Analyze non-material attributes: infant mortality rate, literacy rate, net attendance ratio, and public facilities (PDS, healthcare)'
      ],
      objectivesOdia: [
        'ବୁଝିବା ଯେ ବିଭିନ୍ନ ବ୍ୟକ୍ତିଙ୍କ ବିକାଶ ଲକ୍ଷ୍ୟ ଭିନ୍ନ ଓ ବେଳେବେଳେ ପରସ୍ପର ବିରୋଧୀ ହୋଇଥାଏ (ଯଥା ନଦୀବନ୍ଧ ପାଇଁ ଶିଳ୍ପପତି ଓ ଆଦିବାସୀ)',
        'ମୁଣ୍ଡପିଛା ଆୟ (Per Capita Income) = ମୋଟ ଜାତୀୟ ଆୟ / ମୋଟ ଜନସଂଖ୍ୟା ହିସାବ କରିବା',
        'ବିଶ୍ୱବ୍ୟାଙ୍କର କେବଳ ଟଙ୍କାଭିତ୍ତିକ ମାନଦଣ୍ଡ ତୁଳନାରେ UNDP ର ମାନବ ବିକାଶ ସୂଚକାଙ୍କ (HDI - ଶିକ୍ଷା, ସ୍ୱାସ୍ଥ୍ୟ, ଆୟୁ) ର ମହତ୍ତ୍ୱ ବୁଝିବା',
        'ଶିଶୁ ମୃତ୍ୟୁହାର, ସାକ୍ଷରତା ହାର ଓ ସର୍ବସାଧାରଣ ବଣ୍ଟନ ବ୍ୟବସ୍ଥା (PDS) ର ଗୁରୁତ୍ୱ ଜାଣିବା'
      ],
      content: 'Development implies quantitative economic growth as well as qualitative well-being. Different people have differing, sometimes conflicting, developmental aspirations: what is development for an industrialist constructing a hydroelectric dam may mean displacement and ruin for native indigenous tribes. Money cannot buy all elements of a dignified life: freedom, security, clean air, gender equality, and respectful treatment are crucial non-material goals. The World Bank classifies countries solely by Per Capita Income in US Dollars. However, average income conceals gross internal inequalities. The United Nations Development Programme (UNDP) publishes the comprehensive Human Development Report (HDR), evaluating countries using the Human Development Index (HDI) composed of three pillars: (1) Life Expectancy at birth (health status); (2) Literacy and mean years of schooling (educational attainment); and (3) Per Capita Gross National Income in purchasing power parity (PPP). Kerala exemplifies how robust public healthcare and education achieve stellar HDI outcomes despite moderate per capita income.',
      contentOdia: 'ବିକାଶ କହିଲେ କେବଳ ଆୟ ବୃଦ୍ଧି ନୁହେଁ, ବରଂ ଜୀବନଧାରଣର ମାନରେ ଉନ୍ନତିକୁ ବୁଝାଏ । ଭିନ୍ନ ଭିନ୍ନ ଲୋକଙ୍କ ପାଇଁ ବିକାଶର ଅର୍ଥ ଭିନ୍ନ ଏବଂ କେତେବେଳେ ପରସ୍ପର ବିରୋଧୀ ହୋଇପାରେ । ଉଦାହରଣ ସ୍ୱରୂପ, ବିଦ୍ୟୁତ୍ ପାଇଁ ନଦୀବନ୍ଧ ବାନ୍ଧିବା ଶିଳ୍ପପତି ପାଇଁ ବିକାଶ ହୋଇପାରେ, କିନ୍ତୁ ବିସ୍ଥାପିତ ହେଉଥିବା ଆଦିବାସୀଙ୍କ ପାଇଁ ଏହା ବିନାଶ । କେବଳ ଟଙ୍କା ସବୁକିଛି କିଣିପାରିବ ନାହିଁ; ସ୍ୱାସ୍ଥ୍ୟ, ଶିକ୍ଷା, ସ୍ୱାଧୀନତା, ସୁରକ୍ଷା ଓ ପ୍ରଦୂଷଣମୁକ୍ତ ପରିବେଶ ଜରୁରୀ ଅଟେ । ବିଶ୍ୱବ୍ୟାଙ୍କ କେବଳ ମୁଣ୍ଡପିଛା ଆୟ (Per Capita Income) ଦେଖି ଦେଶଗୁଡ଼ିକୁ ଧନୀ ବା ଗରିବ କହେ । ମାତ୍ର UNDP ର ମାନବ ବିକାଶ ସୂଚକାଙ୍କ (HDI) ଆୟ ସହିତ ଆୟୁଷ (ସ୍ୱାସ୍ଥ୍ୟ) ଏବଂ ସାକ୍ଷରତା (ଶିକ୍ଷା) କୁ ମିଶାଇ ଦେଶର ପ୍ରକୃତ ବିକାଶ ମାପିଥାଏ । କେରଳରେ ଉନ୍ନତ ସରକାରୀ ସ୍କୁଲ୍ ଓ ଡାକ୍ତରଖାନା ଯୋଗୁଁ ମୁଣ୍ଡପିଛା ଆୟ ମଧ୍ୟମ ଥିଲେ ମଧ୍ୟ ଏହାର HDI ଭାରତରେ ସର୍ବୋଚ୍ଚ ଅଟେ ।',
      takeaways: [
        'Developmental goals vary and can be conflicting across socio-economic groups',
        'Per Capita Income = Total National Income / Total Population',
        'World Bank uses Per Capita Income; UNDP uses multidimensional Human Development Index (HDI)',
        'Kerala excels in human development due to adequate public provisions in health and education'
      ],
      takeawaysOdia: [
        'ବିଭିନ୍ନ ଲୋକଙ୍କ ପାଇଁ ବିକାଶର ଧାରଣା ଅଲଗା ଓ ପରସ୍ପର ବିରୋଧୀ ହୋଇପାରେ',
        'ମୁଣ୍ଡପିଛା ଆୟ = ମୋଟ ଜାତୀୟ ଆୟ / ମୋଟ ଜନସଂଖ୍ୟା',
        'ବିଶ୍ୱବ୍ୟାଙ୍କ କେବଳ ଆୟ ଦେଖେ; UNDP ଶିକ୍ଷା, ସ୍ୱାସ୍ଥ୍ୟ ଓ ଆୟ ତିନୋଟିଯାକ ଦେଖେ',
        'ଉତ୍ତମ ସରକାରୀ ସ୍ୱାସ୍ଥ୍ୟ ଓ ଶିକ୍ଷା ବ୍ୟବସ୍ଥା ଯୋଗୁଁ କେରଳର ବିକାଶ ସୂଚକାଙ୍କ ସର୍ବୋତ୍ତମ'
      ]
    },
    quiz: [
      {
        question: 'Which international organization publishes the annual Human Development Report (HDR) utilizing the Human Development Index (HDI)?',
        questionOdia: 'କେଉଁ ଆନ୍ତର୍ଜାତୀୟ ସଂସ୍ଥା ପ୍ରତିବର୍ଷ ମାନବ ବିକାଶ ସୂଚକାଙ୍କ (HDI) ଆଧାରରେ ରିପୋର୍ଟ ପ୍ରକାଶ କରେ?',
        options: ['World Bank', 'International Monetary Fund (IMF)', 'United Nations Development Programme (UNDP)', 'World Trade Organization (WTO)'],
        optionsOdia: ['ବିଶ୍ୱବ୍ୟାଙ୍କ', 'ଆନ୍ତର୍ଜାତୀୟ ମୁଦ୍ରା ପାଣ୍ଠି (IMF)', 'ଜାତିସଂଘ ବିକାଶ କାର୍ଯ୍ୟକ୍ରମ (UNDP)', 'ବିଶ୍ୱ ବାଣିଜ୍ୟ ସଂଗଠନ'],
        correctAnswerIndex: 2,
        explanation: 'UNDP formulates and publishes the HDR comparing health, schooling, and income parity globally.',
        explanationOdia: 'UNDP ମାନବ ବିକାଶ ରିପୋର୍ଟ (HDR) ପ୍ରକାଶ କରି ଦେଶମାନଙ୍କୁ ମାନ୍ୟତା ଦିଏ ।',
        topic: 'HDI Metrics'
      },
      {
        question: 'What is calculated by dividing the total national income of a country by its total population?',
        questionOdia: 'ଏକ ଦେଶର ମୋଟ ଜାତୀୟ ଆୟକୁ ମୋଟ ଜନସଂଖ୍ୟା ଦ୍ୱାରା ଭାଗ କଲେ କ’ଣ ମିଳେ?',
        options: ['Gross Domestic Product', 'Per Capita Income (Average Income)', 'Disposable Income', 'Net National Reserve'],
        optionsOdia: ['ମୋଟ ଘରୋଇ ଉତ୍ପାଦ (GDP)', 'ମୁଣ୍ଡପିଛା ଆୟ (Per Capita Income)', 'ଖର୍ଚ୍ଚଯୋଗ୍ୟ ଆୟ', 'ନିଟ୍ ଜାତୀୟ ଭଣ୍ଡାର'],
        correctAnswerIndex: 1,
        explanation: 'Per Capita Income is the average income generated per citizen in a nation: Total Income / Population.',
        explanationOdia: 'ମୋଟ ଆୟକୁ ଜନସଂଖ୍ୟା ଦ୍ୱାରା ଭାଗ କଲେ ମୁଣ୍ଡପିଛା ଆୟ (ହାରାହାରି ଆୟ) ମିଳେ ।',
        topic: 'Per Capita Income'
      },
      {
        question: 'Why does Kerala possess a remarkably lower Infant Mortality Rate than Haryana, despite lower income?',
        questionOdia: 'ହରିୟାଣା ତୁଳନାରେ କମ୍ ମୁଣ୍ଡପିଛା ଆୟ ଥାଇ ମଧ୍ୟ କେରଳରେ ଶିଶୁ ମୃତ୍ୟୁହାର କାହିଁକି ବହୁତ କମ୍?',
        options: [
          'Kerala has colder climate',
          'Adequate provision of basic healthcare, high female literacy, and efficient public distribution system',
          'Private hospitals outnumber government clinics',
          'Everyone works in IT sector'
        ],
        optionsOdia: [
          'କେରଳର ଜଳବାୟୁ ଥଣ୍ଡା',
          'ପର୍ଯ୍ୟାପ୍ତ ସରକାରୀ ସ୍ୱାସ୍ଥ୍ୟସେବା, ଉଚ୍ଚ ମହିଳା ସାକ୍ଷରତା ଓ ସୁବ୍ୟବସ୍ଥିତ ରାସନ (PDS) ବ୍ୟବସ୍ଥା',
          'ସେଠାରେ ଘରୋଇ ଡାକ୍ତରଖାନା ଅଧିକ',
          'ସମସ୍ତେ ଆଇଟି କମ୍ପାନୀରେ କାମ କରନ୍ତି'
        ],
        correctAnswerIndex: 1,
        explanation: 'Universal public health clinics, maternity care, and nutritional PDS lower infant deaths in Kerala.',
        explanationOdia: 'ସରକାରୀ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର ଓ ମହିଳା ଶିକ୍ଷା ଯୋଗୁଁ କେରଳରେ ଶିଶୁ ମୃତ୍ୟୁହାର ବହୁତ କମ୍ ।',
        topic: 'Public Facilities'
      }
    ]
  },
  {
    subjectCode: 'SST',
    classLevel: 'Class 10',
    order: 5,
    title: 'Sectors of the Indian Economy',
    titleOdia: 'ଭାରତୀୟ ଅର୍ଥନୀତିର ବିଭିନ୍ନ କ୍ଷେତ୍ର',
    description: 'Primary, secondary, and tertiary sectors, historical shifts in GDP contribution, disguised unemployment, organized vs unorganized sectors, and MGNREGA 2005.',
    descriptionOdia: 'ପ୍ରାଥମିକ, ମାଧ୍ୟମିକ ଓ ତୃତୀୟକ (ସେବା) କ୍ଷେତ୍ର, GDP ରେ ଅବଦାନ, ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ, ସଙ୍ଗଠିତ ଓ ଅସଙ୍ଗଠିତ କ୍ଷେତ୍ର ଏବଂ ମନରେଗା (MGNREGA ୨୦୦୫) ।',
    lesson: {
      title: 'Economic Sectors, Disguised Unemployment & MGNREGA',
      titleOdia: 'ଅର୍ଥନୈତିକ କ୍ଷେତ୍ର, ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ ଓ ମନରେଗା ଯୋଜନା',
      durationMinutes: 24,
      objectives: [
        'Distinguish economic sectors: Primary (agriculture, dairy), Secondary (manufacturing), and Tertiary (banking, IT, transport)',
        'Trace historical shift: Tertiary sector emerging as the largest contributor to Indian GDP while Primary sector still employs nearly half the workforce',
        'Identify Disguised Unemployment / Underemployment in agriculture where more people work than needed with zero marginal productivity',
        'Contrast Organized sector (job security, PF, fixed hours) with Unorganized sector (low wages, exploitation) and evaluate MGNREGA 2005 100-day employment guarantee'
      ],
      objectivesOdia: [
        'ଅର୍ଥନୈତିକ କ୍ଷେତ୍ର: ପ୍ରାଥମିକ (କୃଷି, ଖଣି), ମାଧ୍ୟମିକ (ଶିଳ୍ପ, ନିର୍ମାଣ) ଓ ତୃତୀୟକ (ସେବା ଯଥା ବ୍ୟାଙ୍କିଙ୍ଗ୍, ଆଇଟି, ପରିବହନ) ବୁଝିବା',
        'ଐତିହାସିକ ପରିବର୍ତ୍ତନ: GDP ରେ ସେବା କ୍ଷେତ୍ରର ସର୍ବାଧିକ ଅଂଶ କିନ୍ତୁ ନିଯୁକ୍ତିରେ ଏବେ ବି କୃଷି କ୍ଷେତ୍ରରେ ଅଧା ଲୋକ କାର୍ଯ୍ୟରତ ଥିବା ଜାଣିବା',
        'ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ (Disguised Unemployment): ଚାଷ ଜମିରେ ଆବଶ୍ୟକତାଠାରୁ ଅଧିକ ଲୋକ କାମ କରିବା ଯେଉଁଥିରେ ଶ୍ରମିକ ହଟାଇଲେ ମଧ୍ୟ ଅମଳ କମେ ନାହିଁ',
        'ସଙ୍ଗଠିତ (ଚାକିରି ନିରାପତ୍ତା, PF) ଓ ଅସଙ୍ଗଠିତ କ୍ଷେତ୍ର ମଧ୍ୟରେ ତୁଳନା ଏବଂ ମନରେଗା (MGNREGA ୨୦୦୫) ର ୧୦୦ ଦିନ କାମ ଯୋଜନା ବୁଝିବା'
      ],
      content: 'Economic activities fall into three interconnected sectors. The Primary sector exploits natural resources directly (agriculture, forestry, animal husbandry, mining). The Secondary sector processes primary raw materials into manufactured finished goods (factories, mills, construction). The Tertiary (Service) sector generates intangible support services for production and distribution (transport, banking, insurance, communication, education, software). Over the past five decades in India, the Tertiary sector has expanded phenomenally to become the largest contributor to GDP, driven by demand for basic services, IT revolutions, and trade. However, employment has not shifted proportionately: agriculture still employs over 44% of workers, harboring severe "disguised unemployment" where more people work on land than necessary, yielding zero marginal productivity. In terms of employment terms, the Organized sector complies with government labor laws offering pension, gratuity, and fixed hours, whereas the Unorganized sector is marked by precarious insecurity. The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA 2005) legally guarantees 100 days of wage employment annually to rural households.',
      contentOdia: 'ଅର୍ଥନୈତିକ କାର୍ଯ୍ୟକଳାପ ତିନୋଟି କ୍ଷେତ୍ରରେ ବିଭକ୍ତ । ପ୍ରାଥମିକ କ୍ଷେତ୍ର ପ୍ରକୃତିରୁ ସିଧାସଳଖ ସମ୍ବଳ ଆହରଣ କରେ (କୃଷି, ଦୁଗ୍ଧ ଚାଷ, ମାଛ ଧରା) । ମାଧ୍ୟମିକ କ୍ଷେତ୍ର କଞ୍ଚାମାଲକୁ କାରଖାନାରେ ପ୍ରକ୍ରିୟାକରଣ କରି ନୂତନ ସାମଗ୍ରୀ ତିଆରି କରେ (ଲୁଗା କଳ, ଇସ୍ପାତ ଶିଳ୍ପ) । ତୃତୀୟକ ବା ସେବା କ୍ଷେତ୍ର ଏହି ଦୁଇଟିକୁ ସହାୟତା କରେ (ବ୍ୟାଙ୍କ, ଗାଡ଼ି ପରିବହନ, ଡାକ୍ତର, ଆଇଟି ସଫ୍ଟୱେର୍) । ବିଗତ ୫୦ ବର୍ଷରେ ଭାରତର GDP ରେ ସେବା କ୍ଷେତ୍ରର ଅବଦାନ ସର୍ବାଧିକ ହୋଇଛି । ମାତ୍ର ଦେଶର ପ୍ରାୟ ଅଧା ଶ୍ରମିକ ଏବେ ବି କୃଷିରେ ନିୟୋଜିତ ଅଛନ୍ତି । କୃଷିରେ ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ (Disguised Unemployment) ଦେଖାଯାଏ, ଯେଉଁଠାରେ ୨ ଜଣଙ୍କ କାମରେ ୫ ଜଣ ଲାଗିଥାନ୍ତି । ସରକାରୀ ନିୟମ ମାନୁଥିବା କ୍ଷେତ୍ରକୁ ସଙ୍ଗଠିତ କ୍ଷେତ୍ର କୁହାଯାଏ । ଗ୍ରାମାଞ୍ଚଳରେ ରୋଜଗାର ଦେବା ପାଇଁ ସରକାର MGNREGA ୨୦୦୫ ଆଇନ ପ୍ରଣୟନ କରି ବର୍ଷକୁ ୧୦୦ ଦିନର ନିଶ୍ଚିତ କାମ ପ୍ରଦାନ କରୁଛନ୍ତି ।',
      takeaways: [
        'Tertiary sector generates the largest share of Indian GDP today',
        'Agriculture harbors widespread disguised unemployment with zero marginal product',
        'Organized sector offers social security (PF, gratuity, health coverage); unorganized does not',
        'MGNREGA 2005 guarantees 100 days of wage employment per financial year in rural areas'
      ],
      takeawaysOdia: [
        'ଭାରତର GDP ରେ ସେବା (ତୃତୀୟକ) କ୍ଷେତ୍ରର ଅବଦାନ ସର୍ବାଧିକ',
        'କୃଷି କ୍ଷେତ୍ରରେ ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ ସବୁଠାରୁ ବଡ଼ ସମସ୍ୟା',
        'ସଙ୍ଗଠିତ କ୍ଷେତ୍ରରେ ଚାକିରି ସୁରକ୍ଷା ଓ ଭବିଷ୍ୟନିଧି (PF) ସୁବିଧା ଥାଏ',
        'ମନରେଗା (MGNREGA ୨୦୦୫) ଗ୍ରାମୀଣ ପରିବାରକୁ ବର୍ଷକୁ ୧୦୦ ଦିନର କାମ ନିଶ୍ଚିତ କରେ'
      ]
    },
    quiz: [
      {
        question: 'Which sector is currently the single largest contributor to India Gross Domestic Product (GDP)?',
        questionOdia: 'ଭାରତର ମୋଟ ଘରୋଇ ଉତ୍ପାଦ (GDP) ରେ ବର୍ତ୍ତମାନ କେଉଁ କ୍ଷେତ୍ରର ଅବଦାନ ସର୍ବାଧିକ?',
        options: ['Primary sector', 'Secondary sector', 'Tertiary (Service) sector', 'Mining sector'],
        optionsOdia: ['ପ୍ରାଥମିକ କ୍ଷେତ୍ର', 'ମାଧ୍ୟମିକ କ୍ଷେତ୍ର', 'ତୃତୀୟକ ବା ସେବା କ୍ଷେତ୍ର (Tertiary)', 'ଖଣି କ୍ଷେତ୍ର'],
        correctAnswerIndex: 2,
        explanation: 'The Tertiary (service) sector generates over 53% of India GDP, dominating the economy.',
        explanationOdia: 'ସେବା କ୍ଷେତ୍ର (ବାଣିଜ୍ୟ, ପରିବହନ, ଆଇଟି, ବ୍ୟାଙ୍କିଙ୍ଗ୍) GDP ରେ ସର୍ବାଧିକ ଅଂଶ ଯୋଗାଏ ।',
        topic: 'Economic Contribution'
      },
      {
        question: 'What is the situation called where more workers are engaged on a farm than necessary, such that removing some does not reduce harvest yield?',
        questionOdia: 'ଜମିରେ ଆବଶ୍ୟକତାଠାରୁ ଅଧିକ ଲୋକ କାମ କରିବା ଏବଂ କିଛି ଲୋକଙ୍କୁ ହଟାଇଲେ ମଧ୍ୟ ଅମଳ ନ କମିବା ପରିସ୍ଥିତିକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Frictional unemployment', 'Disguised unemployment (Underemployment)', 'Seasonal unemployment', 'Cyclical unemployment'],
        optionsOdia: ['ସଂଘର୍ଷଜନିତ ବେକାରୀ', 'ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ (Disguised Unemployment)', 'ଋତୁକାଳୀନ ବେକାରୀ', 'ଆବର୍ତ୍ତନଶୀଳ ବେକାରୀ'],
        correctAnswerIndex: 1,
        explanation: 'Disguised unemployment occurs when individuals work visibly, but their marginal productivity is zero.',
        explanationOdia: 'ଏହାକୁ ପ୍ରଚ୍ଛନ୍ନ ବେକାରୀ କୁହାଯାଏ ଯେଉଁଠାରେ ବାହାରକୁ ଲୋକ କାମ କରୁଥିବା ଦିଶନ୍ତି କିନ୍ତୁ ବାସ୍ତବରେ ଅତିରିକ୍ତ ଅବଦାନ ଶୂନ ଥାଏ ।',
        topic: 'Disguised Unemployment'
      },
      {
        question: 'Under MGNREGA 2005, how many guaranteed days of wage employment are provided per year to rural households willing to do manual work?',
        questionOdia: 'MGNREGA ୨୦୦୫ ଯୋଜନାରେ ଗ୍ରାମାଞ୍ଚଳରେ ଅଣକୁଶଳୀ ଶ୍ରମ ପାଇଁ ବାର୍ଷିକ କେତେ ଦିନର ନିଶ୍ଚିତ କାମ ପ୍ରଦାନ କରାଯାଏ?',
        options: ['50 days', '100 days', '150 days', '200 days'],
        optionsOdia: ['୫୦ ଦିନ', '୧୦୦ ଦିନ (100 days)', '୧୫୦ ଦିନ', '୨୦୦ ଦିନ'],
        correctAnswerIndex: 1,
        explanation: 'MGNREGA guarantees 100 days of statutory wage employment annually per rural household.',
        explanationOdia: 'ଏହି ଆଇନ ବଳରେ ପ୍ରତି ଗ୍ରାମୀଣ ପରିବାରକୁ ବର୍ଷକୁ ୧୦୦ ଦିନର କାମ ନିଶ୍ଚିତ କରାଯାଇଛି ।',
        topic: 'MGNREGA Scheme'
      }
    ]
  },

  // ---------------------------------------------------------
  // COMPUTER SCIENCE (5 Chapters)
  // ---------------------------------------------------------
  {
    subjectCode: 'CS',
    classLevel: 'Class 10',
    order: 1,
    title: 'Advanced Python: Data Structures & Functions',
    titleOdia: 'ପାଇଥନ୍ ଡାଟା ଷ୍ଟ୍ରକଚର ଓ ଫଙ୍କସନ୍',
    description: 'Lists (indexing, slicing, append, pop, sort), Tuples (immutability), Dictionaries (key-value pairs, methods), and user-defined functions with def, parameters, and return.',
    descriptionOdia: 'ଲିଷ୍ଟ୍ (indexing, slicing, append), ଟ୍ୟୁପଲ୍ (ଅପରିବର୍ତ୍ତନୀୟ), ଡିକ୍ସନାରୀ (key-value) ଏବଂ def ଦ୍ୱାରା ଫଙ୍କସନ୍ ନିର୍ମାଣ ।',
    lesson: {
      title: 'Lists, Tuples, Dictionaries & Modular Functions',
      titleOdia: 'ଲିଷ୍ଟ୍, ଟ୍ୟୁପଲ୍, ଡିକ୍ସନାରୀ ଓ ୟୁଜର୍ ଡିଫାଇଣ୍ଡ୍ ଫଙ୍କସନ୍',
      durationMinutes: 26,
      objectives: [
        'Manipulate mutable Lists using methods: append(), extend(), insert(), pop(), remove(), sort(), reverse(), and slice notation [start:stop:step]',
        'Understand immutable Tuples, packing and unpacking, and when to use tuples over lists for integrity',
        'Construct Dictionaries using key-value mappings, methods: keys(), values(), items(), get(), and updates',
        'Define reusable functions using def keyword, default parameters, keyword arguments, and return statements'
      ],
      objectivesOdia: [
        'ପରିବର୍ତ୍ତନଶୀଳ List ରେ append(), pop(), remove(), sort() ଏବଂ Slicing [start:stop:step] ବ୍ୟବହାର କରିବା',
        'ଅପରିବର୍ତ୍ତନୀୟ Tuple ର ବୈଶିଷ୍ଟ୍ୟ ଓ ସୁରକ୍ଷା ବୁଝିବା',
        'ଡିକ୍ସନାରୀରେ Key-Value ଯୋଡ଼ି ତିଆରି କରି keys(), values(), items() ମାଧ୍ୟମରେ ତଥ୍ୟ ଖୋଜିବା',
        'def କୀ-ୱାର୍ଡ ବ୍ୟବହାର କରି ନିଜସ୍ୱ ଫଙ୍କସନ୍ ଲେଖିବା, ପାରାମିଟର ପଠାଇବା ଓ return କରିବା'
      ],
      content: 'Python offers versatile built-in compound data structures. A List is an ordered, mutable sequence of items enclosed in square brackets []. Elements can be indexed forward (0, 1, ...) or backward (-1, -2, ...) and sliced via [start:stop:step]. Methods include list.append(x), list.pop(i), and list.sort(). A Tuple is an ordered, immutable sequence enclosed in parentheses (); once declared, items cannot be added, reassigned, or removed, making tuples fast and tamper-proof. A Dictionary is an unordered (ordered since Python 3.7) collection of key-value pairs enclosed in curly braces {key: value}. Keys must be immutable and unique. Functions allow modular code reuse: defined using the def keyword with signature def func_name(param1, param2=default): and returning values with the return statement.',
      contentOdia: 'ପାଇଥନ୍‌ରେ ତଥ୍ୟ ସଜାଇ ରଖିବା ପାଇଁ List, Tuple ଓ Dictionary ବ୍ୟବହୃତ ହୁଏ । List ହେଉଛି ଏକ ପରିବର୍ତ୍ତନଶୀଳ (Mutable) କ୍ରମ ଯାହାକୁ ବନ୍ଧନୀ [] ରେ ଲେଖାଯାଏ । ଏଥିରେ ଇଣ୍ଡେକ୍ସିଂ ସାହାଯ୍ୟରେ ତଥ୍ୟ ବଦଳାଯାଇପାରେ କିମ୍ବା append(), pop() ଦ୍ୱାରା ନୂଆ ତଥ୍ୟ ଯୋଡ଼ା ବା ବାହାର କରାଯାଏ । Tuple ହେଉଛି ଏକ ଅପରିବର୍ତ୍ତନୀୟ (Immutable) କ୍ରମ ଯାହାକୁ () ରେ ଲେଖାଯାଏ; ଏହାର ତଥ୍ୟ ଥରେ ଲେଖିଲେ ବଦଳାଯାଇପାରିବ ନାହିଁ । Dictionary ରେ Key-Value ଯୋଡ଼ି {} ମଧ୍ୟରେ ଥାଏ (ଯଥା {"name": "Omm", "roll": 1}) । କୋଡ୍ ବାରମ୍ବାର ନ ଲେଖି ଗୋଟିଏ ବ୍ଲକ୍‌ରେ ସାଇତିବା ପାଇଁ def କୀ-ୱାର୍ଡ ଦ୍ୱାରା Function ତିଆରି କରାଯାଏ, ଯାହା return ଦ୍ୱାରା ଉତ୍ତର ଫେରାଏ ।',
      takeaways: [
        'Lists are mutable []; Tuples are immutable ()',
        'Dictionary keys must be of immutable types (strings, numbers, tuples)',
        'Negative index -1 accesses the terminal item in a sequence',
        'Functions promote DRY principle (Don\'t Repeat Yourself) through parameterized encapsulation'
      ],
      takeawaysOdia: [
        'List ପରିବର୍ତ୍ତନଶୀଳ []; Tuple ଅପରିବର୍ତ୍ତନୀୟ ()',
        'ଡିକ୍ସନାରୀର Key ସର୍ବଦା ଅନନ୍ୟ ଓ ଅପରିବର୍ତ୍ତନୀୟ ହେବା ଆବଶ୍ୟକ',
        '-୧ ଇଣ୍ଡେକ୍ସ ଶେଷ ତଥ୍ୟକୁ ସିଧାସଳଖ ଧରିପାରେ',
        'Function କୋଡ୍‌କୁ ପୁନଃବ୍ୟବହାରକ୍ଷମ ଓ ସଂକ୍ଷିପ୍ତ କରେ'
      ]
    },
    quiz: [
      {
        question: 'Which Python data structure is immutable, meaning its elements cannot be modified after creation?',
        questionOdia: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁ ପାଇଥନ୍ ଡାଟା ଷ୍ଟ୍ରକଚରଟି ଅପରିବର୍ତ୍ତନୀୟ (Immutable), ଯାହାର ତଥ୍ୟ ବଦଳାଯାଇପାରିବ ନାହିଁ?',
        options: ['List', 'Dictionary', 'Tuple', 'Set'],
        optionsOdia: ['List', 'Dictionary', 'Tuple (ଟ୍ୟୁପଲ୍)', 'Set'],
        correctAnswerIndex: 2,
        explanation: 'Tuples are immutable sequences; attempting to alter an element throws a TypeError.',
        explanationOdia: 'Tuple ର ତଥ୍ୟ ଥରେ ସୃଷ୍ଟି ହେବା ପରେ ବଦଳାଯାଇପାରିବ ନାହିଁ ।',
        topic: 'Immutability'
      },
      {
        question: 'What is the value of my_list[-1] if my_list = [10, 20, 30, 40, 50]?',
        questionOdia: 'ଯଦି my_list = [୧୦, ୨୦, ୩୦, ୪୦, ୫୦] ହୁଏ, ତେବେ my_list[-୧] ର ମୂଲ୍ୟ କେତେ?',
        options: ['10', '50', '40', 'IndexError'],
        optionsOdia: ['୧୦', '୫୦', '୪୦', 'IndexError'],
        correctAnswerIndex: 1,
        explanation: 'Negative indexing in Python counts backwards from the end, so -1 refers to the last element (50).',
        explanationOdia: 'ଋଣାତ୍ମକ ଇଣ୍ଡେକ୍ସ -୧ ପଛପଟୁ ପ୍ରଥମ ବା ଶେଷ ଉପାଦାନ ୫୦ କୁ ଦର୍ଶାଏ ।',
        topic: 'Negative Indexing'
      },
      {
        question: 'Which keyword is reserved in Python to declare a user-defined function?',
        questionOdia: 'ପାଇଥନ୍‌ରେ ଏକ ଫଙ୍କସନ୍ ଘୋଷଣା କରିବା ପାଇଁ କେଉଁ କୀ-ୱାର୍ଡ ବ୍ୟବହୃତ ହୁଏ?',
        options: ['func', 'define', 'def', 'function'],
        optionsOdia: ['func', 'define', 'def', 'function'],
        correctAnswerIndex: 2,
        explanation: 'The def keyword (short for define) introduces a function definition in Python.',
        explanationOdia: 'def କୀ-ୱାର୍ଡ ଦ୍ୱାରା ପାଇଥନ୍ ଫଙ୍କସନ୍ ଆରମ୍ଭ କରାଯାଏ ।',
        topic: 'Python Functions'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 10',
    order: 2,
    title: 'Database Management Systems & SQL',
    titleOdia: 'ଡାଟାବେସ୍ ପରିଚାଳନା ଓ ଏସକ୍ୟୁଏଲ୍ (SQL)',
    description: 'Relational Database concepts (table, tuple, attribute, primary key, foreign key), Structured Query Language (SQL DDL vs DML), SELECT, WHERE, ORDER BY, INSERT, UPDATE, and DELETE.',
    descriptionOdia: 'ରିଲେସନାଲ୍ ଡାଟାବେସ୍ ଧାରଣା, ପ୍ରାଇମାରୀ କୀ, ଫରେନ୍ କୀ, SQL ର DDL ଓ DML, ଏବଂ SELECT, INSERT, UPDATE, DELETE କମାଣ୍ଡ୍ ।',
    lesson: {
      title: 'RDBMS Architecture, Primary Keys & SQL Querying',
      titleOdia: 'RDBMS ସଂରଚନା, ପ୍ରାଇମାରୀ କୀ ଓ SQL କ୍ୱେରି',
      durationMinutes: 26,
      objectives: [
        'Understand RDBMS concepts: relations (tables), tuples (rows), attributes (columns), domain, degree, and cardinality',
        'Enforce integrity constraints: Primary Key (unique non-null identifier), Candidate Keys, and Foreign Key (referential integrity)',
        'Distinguish DDL (Data Definition Language: CREATE, ALTER, DROP) from DML (Data Manipulation Language: SELECT, INSERT, UPDATE, DELETE)',
        'Construct SQL queries using clauses: SELECT * FROM table WHERE condition ORDER BY column ASC/DESC'
      ],
      objectivesOdia: [
        'RDBMS ଧାରଣା: ଟେବୁଲ୍, ଟ୍ୟୁପଲ୍ (ଧାଡ଼ି/ରେକର୍ଡ), ଆଟ୍ରିବ୍ୟୁଟ୍ (କଲମ୍), Degree (କଲମ୍ ସଂଖ୍ୟା) ଓ Cardinality (ଧାଡ଼ି ସଂଖ୍ୟା) ବୁଝିବା',
        'ପ୍ରାଇମାରୀ କୀ (ଅନନ୍ୟ ନନ୍-ନଲ୍ ଚିହ୍ନଟକାରୀ) ଓ ଫରେନ୍ କୀ (ଦୁଇ ଟେବୁଲ୍ ଯୋଡ଼ିବା) ର ଭୂମିକା ଜାଣିବା',
        'DDL (ଟେବୁଲ୍ ଗଠନ: CREATE, ALTER) ଓ DML (ତଥ୍ୟ ପରିଚାଳନା: SELECT, INSERT, UPDATE, DELETE) ର ପାର୍ଥକ୍ୟ ବୁଝିବା',
        'SQL କ୍ୱେରି ଲେଖିବା: SELECT, WHERE, ORDER BY, AND, OR ବ୍ୟବହାର କରି ଡାଟା ଖୋଜିବା'
      ],
      content: 'A Database Management System (DBMS) stores, manages, and retrieves structured data reliably while minimizing redundancy. In a Relational Database Management System (RDBMS) like MySQL or PostgreSQL, data is organized in two-dimensional tables called Relations. The rows represent Tuples (records), and columns represent Attributes (fields). The Degree is the number of attributes; the Cardinality is the number of tuples. A Primary Key uniquely identifies each row and can never contain NULL values. A Foreign Key references the primary key of another table, ensuring referential integrity. SQL (Structured Query Language) is the standard interface: Data Definition Language (DDL) creates or alters schema structure (CREATE TABLE, DROP TABLE), while Data Manipulation Language (DML) manages table rows (SELECT, INSERT INTO, UPDATE, DELETE). Queries filter records via WHERE clauses and sort outputs via ORDER BY.',
      contentOdia: 'ଡାଟାବେସ୍ ମ୍ୟାନେଜମେଣ୍ଟ ସିଷ୍ଟମ୍ (DBMS) ଡାଟାକୁ ସୁରକ୍ଷିତ ଓ ବ୍ୟବସ୍ଥିତ ଭାବେ ସାଇତି ରଖେ । RDBMS (ଯଥା MySQL) ରେ ତଥ୍ୟକୁ ଟେବୁଲ୍ ଆକାରରେ ରଖାଯାଏ । ଧାଡ଼ିଗୁଡ଼ିକୁ ଟ୍ୟୁପଲ୍ (Tuple ବା Record) ଏବଂ ସ୍ତମ୍ଭଗୁଡ଼ିକୁ ଆଟ୍ରିବ୍ୟୁଟ୍ (Attribute ବା Field) କୁହାଯାଏ । କଲମ୍ ସଂଖ୍ୟାକୁ Degree ଏବଂ ଧାଡ଼ି ସଂଖ୍ୟାକୁ Cardinality କୁହାଯାଏ । ପ୍ରତ୍ୟେକ ଧାଡ଼ିକୁ ସ୍ୱତନ୍ତ୍ର ଭାବେ ଚିହ୍ନିବା ପାଇଁ "ପ୍ରାଇମାରୀ କୀ" (Primary Key) ବ୍ୟବହାର ହୁଏ, ଯାହା କଦାପି ଫାଙ୍କା (NULL) ରହିପାରିବ ନାହିଁ । SQL ଭାଷା ଦ୍ୱାରା ଡାଟାବେସ୍ ପରିଚାଳନା କରାଯାଏ: DDL ସାହାଯ୍ୟରେ ଟେବୁଲ୍ ତିଆରି ହୁଏ (CREATE), ଏବଂ DML ସାହାଯ୍ୟରେ ତଥ୍ୟ ଖୋଜା (SELECT), ଯୋଡ଼ା (INSERT), ବଦଳା (UPDATE) ଓ କଟା (DELETE) ଯାଏ ।',
      takeaways: [
        'Primary key must be UNIQUE and NOT NULL',
        'Degree = number of columns; Cardinality = number of rows',
        'DDL commands define schema structure (CREATE, DROP, ALTER); DML manages data records (SELECT, INSERT, UPDATE, DELETE)',
        'WHERE clause filters rows; ORDER BY sorts row outputs'
      ],
      takeawaysOdia: [
        'ପ୍ରାଇମାରୀ କୀ କଦାପି ସମାନ କିମ୍ବା ଫାଙ୍କା (NULL) ହୋଇପାରିବ ନାହିଁ',
        'Degree ହେଉଛି କଲମ୍ ସଂଖ୍ୟା ଏବଂ Cardinality ହେଉଛି ଧାଡ଼ି ସଂଖ୍ୟା',
        'DDL ଟେବୁଲ୍ ଗଠନ କରେ; DML ତଥ୍ୟ ଭିତରେ କାମ କରେ',
        'WHERE ସର୍ତ୍ତ ଅନୁସାରେ ଡାଟା ଛାଣେ ଏବଂ ORDER BY କ୍ରମ ସଜାଏ'
      ]
    },
    quiz: [
      {
        question: 'Which constraint ensures that a column uniquely identifies each row and does not accept NULL values?',
        questionOdia: 'କେଉଁ ନିୟମ ସୁନିଶ୍ଚିତ କରେ ଯେ ଏକ କଲମ୍ ପ୍ରତ୍ୟେକ ଧାଡ଼ିକୁ ଅନନ୍ୟ ଭାବେ ଚିହ୍ନିବ ଏବଂ କୌଣସି NULL ମୂଲ୍ୟ ଗ୍ରହଣ କରିବ ନାହିଁ?',
        options: ['Foreign Key', 'Primary Key', 'Candidate Key', 'Default Constraint'],
        optionsOdia: ['ଫରେନ୍ କୀ (Foreign Key)', 'ପ୍ରାଇମାରୀ କୀ (Primary Key)', 'କାଣ୍ଡିଡେଟ୍ କୀ', 'ଡିଫଲ୍ଟ ନିୟମ'],
        correctAnswerIndex: 1,
        explanation: 'A Primary Key enforces entity integrity by guaranteeing uniqueness and non-null values for every record.',
        explanationOdia: 'Primary Key ପ୍ରତ୍ୟେକ ଧାଡ଼ିକୁ ସ୍ୱତନ୍ତ୍ର କରେ ଏବଂ ଏଥିରେ NULL ରହିପାରିବ ନାହିଁ ।',
        topic: 'Integrity Constraints'
      },
      {
        question: 'What is the term for the total number of rows (tuples) present in a relational database table?',
        questionOdia: 'ଏକ ଡାଟାବେସ୍ ଟେବୁଲ୍‌ରେ ଥିବା ମୋଟ ଧାଡ଼ି (Tuples) ସଂଖ୍ୟାକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Degree', 'Domain', 'Cardinality', 'Schema'],
        optionsOdia: ['Degree', 'Domain', 'Cardinality (କାର୍ଡିନାଲିଟି)', 'Schema'],
        correctAnswerIndex: 2,
        explanation: 'Cardinality is the row count; Degree is the column count.',
        explanationOdia: 'ଧାଡ଼ି ସଂଖ୍ୟାକୁ Cardinality ଏବଂ କଲମ୍ ସଂଖ୍ୟାକୁ Degree କୁହାଯାଏ ।',
        topic: 'RDBMS Terminology'
      },
      {
        question: 'Which SQL command is used to modify existing records in a table?',
        questionOdia: 'ଏକ ଟେବୁଲ୍‌ରେ ପୂର୍ବରୁ ଥିବା ତଥ୍ୟକୁ ସଂଶୋଧନ ବା ପରିବର୍ତ୍ତନ କରିବା ପାଇଁ କେଉଁ SQL କମାଣ୍ଡ୍ ବ୍ୟବହାର କରାଯାଏ?',
        options: ['ALTER', 'UPDATE', 'MODIFY', 'CHANGE'],
        optionsOdia: ['ALTER', 'UPDATE', 'MODIFY', 'CHANGE'],
        correctAnswerIndex: 1,
        explanation: 'UPDATE is the DML statement used to alter values in existing table rows.',
        explanationOdia: 'UPDATE କମାଣ୍ଡ୍ ଦ୍ୱାରା ଟେବୁଲ୍ ଭିତରେ ଥିବା ତଥ୍ୟକୁ ବଦଳାଯାଏ (ALTER ଟେବୁଲ୍ ଗଠନ ବଦଳାଏ) ।',
        topic: 'SQL DML Commands'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 10',
    order: 3,
    title: 'Modern Web Development: HTML5, CSS3 & JavaScript',
    titleOdia: 'ଆଧୁନିକ ୱେବ୍ ବିକାଶ: HTML5, CSS3 ଓ JS',
    description: 'Semantic HTML5 elements (header, nav, section, article, footer), CSS3 styling (box model, flexbox, transitions), and basic client-side JavaScript (DOM manipulation, event handling).',
    descriptionOdia: 'HTML5 ସେମାଣ୍ଟିକ୍ ଟ୍ୟାଗ୍, CSS3 ବକ୍ସ ମଡେଲ୍ ଓ Flexbox, ଏବଂ ଜାଭାସ୍କ୍ରିପ୍ଟ ଦ୍ୱାରା DOM ପରିଚାଳନା ଓ ଇଭେଣ୍ଟ ହ୍ୟାଣ୍ଡଲିଂ ।',
    lesson: {
      title: 'Semantic HTML5, CSS Flexbox & Interactive JavaScript DOM',
      titleOdia: 'HTML5 ଗଠନ, CSS ଫ୍ଲେକ୍ସବକ୍ସ ଓ ଇଣ୍ଟରାକ୍ଟିଭ୍ ଜାଭାସ୍କ୍ରିପ୍ଟ',
      durationMinutes: 26,
      objectives: [
        'Structure accessible web pages using semantic HTML5 tags: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>',
        'Apply the CSS Box Model: content, padding, border, and margin',
        'Design responsive dynamic layouts using CSS Flexbox (display: flex, justify-content, align-items)',
        'Manipulate the Document Object Model (DOM) using JavaScript: document.getElementById(), innerText, addEventListener("click")'
      ],
      objectivesOdia: [
        'HTML5 ସେମାଣ୍ଟିକ୍ ଟ୍ୟାଗ୍: <header>, <nav>, <section>, <article>, <footer> ବ୍ୟବହାର କରି ୱେବପେଜ୍ ସଜାଇବା',
        'CSS ବକ୍ସ ମଡେଲ୍ (Box Model): Content, Padding, Border ଓ Margin ର କାର୍ଯ୍ୟ ବୁଝିବା',
        'CSS Flexbox ବ୍ୟବହାର କରି ରେସ୍ପନସିଭ୍ ଓ ଆକର୍ଷଣୀୟ ଡିଜାଇନ୍ ତିଆରି କରିବା',
        'ଜାଭାସ୍କ୍ରିପ୍ଟ ଦ୍ୱାରା DOM ପରିଚାଳନା: getElementById(), addEventListener("click") ଦ୍ୱାରା ବଟନ୍ କ୍ଲିକ୍ କାର୍ଯ୍ୟକାରୀ କରିବା'
      ],
      content: 'Web development harmonizes three core pillars: HTML for structure, CSS for presentation, and JavaScript for behavior. HTML5 introduced semantic container elements (<header>, <nav>, <section>, <article>, <footer>) that convey structural meaning to screen readers and search engines. CSS3 enhances aesthetics through styling rules: selectors target elements, properties define styles. The CSS Box Model dictates spacing: content at center, surrounded sequentially by padding (inner clearance), border (framing line), and margin (outer spacing between adjacent elements). Modern layout relies on Flexbox (display: flex) to distribute space along main and cross axes. JavaScript is the high-level language of the browser that enables interactivity. The browser parses HTML into an object tree called the Document Object Model (DOM). JavaScript accesses DOM nodes (document.getElementById("btn")) and attaches event listeners (addEventListener("click", callback)) to update interfaces without reloading pages.',
      contentOdia: 'ୱେବ୍ ବିକାଶରେ ତିନୋଟି ମୁଖ୍ୟ ଉପାଦାନ ଥାଏ: HTML (ଗଠନ), CSS (ସୌନ୍ଦର୍ଯ୍ୟ ବା ଡିଜାଇନ୍), ଏବଂ JavaScript (କାର୍ଯ୍ୟକାରିତା ବା ଇଣ୍ଟରାକ୍ସନ୍) । HTML5 ରେ ସେମାଣ୍ଟିକ୍ ଟ୍ୟାଗ୍ ଯଥା <header>, <nav>, <section>, <footer> ବ୍ୟବହୃତ ହୁଏ ଯାହା ବ୍ରାଉଜର୍ ଓ ସର୍ଚ୍ଚ ଇଞ୍ଜିନକୁ ପେଜ୍‌ର ଅର୍ଥ ସ୍ପଷ୍ଟ କରେ । CSS Box Model ରେ ଚାରୋଟି ସ୍ତର ଥାଏ: ମଝିରେ Content, ତା’ ଚାରିପାଖେ Padding, ତା’ ପରେ Border ଏବଂ ସବା ବାହାରେ Margin । CSS Flexbox ବ୍ୟବହାର କରି ସମସ୍ତ ଉପାଦାନକୁ ସୁନ୍ଦର ଭାବେ ସଜାଯାଏ । ଜାଭାସ୍କ୍ରିପ୍ଟ ୱେବପେଜ୍‌କୁ ପ୍ରାଣବନ୍ତ କରେ । ଏହା DOM (Document Object Model) ସାହାଯ୍ୟରେ HTML ଉପାଦାନକୁ ଧରିପାରେ (document.getElementById) ଏବଂ ବଟନ୍ କ୍ଲିକ୍ କଲେ ଇଭେଣ୍ଟ ଲିସନର୍ (addEventListener) ଦ୍ୱାରା ପୃଷ୍ଠା ରିଲୋଡ୍ ନ କରି ତତକ୍ଷଣାତ୍ ତଥ୍ୟ ବଦଳାଇଦିଏ ।',
      takeaways: [
        'HTML provides structure; CSS handles styling; JavaScript drives interactivity',
        'CSS Box Model: Margin (outermost) > Border > Padding > Content (innermost)',
        'Flexbox: justify-content aligns items along main axis; align-items along cross axis',
        'DOM (Document Object Model) represents the webpage as a programmable object tree'
      ],
      takeawaysOdia: [
        'HTML ଗଠନ ଦିଏ, CSS ରୂପରଙ୍ଗ ଦିଏ, JavaScript କାମ କରାଏ',
        'ବକ୍ସ ମଡେଲ୍ କ୍ରମ: Margin > Border > Padding > Content',
        'Flexbox ରେ justify-content ଭୂସମାନ୍ତର ଓ align-items ଭୂଲମ୍ବ ସଜାଏ',
        'DOM ମାଧ୍ୟମରେ JavaScript ୱେବପେଜ୍‌ର ଯେକୌଣସି ଅଂଶକୁ ବଦଳାଇପାରେ'
      ]
    },
    quiz: [
      {
        question: 'Which component of the CSS Box Model represents the inner spacing between the element content and its border?',
        questionOdia: 'CSS ବକ୍ସ ମଡେଲ୍‌ରେ Content ଏବଂ Border ମଧ୍ୟରେ ଥିବା ଭିତର ଫାଙ୍କା ସ୍ଥାନକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Margin', 'Padding', 'Outline', 'Gap'],
        optionsOdia: ['ମାର୍ଜିନ୍ (Margin)', 'ପ୍ୟାଡିଂ (Padding)', 'ଆଉଟଲାଇନ୍', 'ଗ୍ୟାପ୍'],
        correctAnswerIndex: 1,
        explanation: 'Padding provides inner breathing clearance between the element text/content and surrounding border.',
        explanationOdia: 'Padding ହେଉଛି ଭିତର ସ୍ପେସ୍ ଯାହା Content ଓ Border ମଝିରେ ରହେ ।',
        topic: 'CSS Box Model'
      },
      {
        question: 'Which method in JavaScript is used to bind an event handler function to a DOM element (such as listening for a button click)?',
        questionOdia: 'ଜାଭାସ୍କ୍ରିପ୍ଟରେ ଏକ ବଟନ୍ କ୍ଲିକ୍ ଭଳି ଇଭେଣ୍ଟ ସହିତ କାର୍ଯ୍ୟ ଯୋଡ଼ିବା ପାଇଁ କେଉଁ ମେଥଡ୍ ବ୍ୟବହାର ହୁଏ?',
        options: ['element.attachEvent()', 'element.addEventListener()', 'element.bindAction()', 'element.listen()'],
        optionsOdia: ['element.attachEvent()', 'element.addEventListener()', 'element.bindAction()', 'element.listen()'],
        correctAnswerIndex: 1,
        explanation: 'element.addEventListener("click", handler) registers event listeners standardly across modern browsers.',
        explanationOdia: 'addEventListener() ଦ୍ୱାରା ଇଭେଣ୍ଟ (ଯଥା click, mouseover) ହ୍ୟାଣ୍ଡଲ୍ କରାଯାଏ ।',
        topic: 'DOM Event Handling'
      },
      {
        question: 'Which CSS property defines a flex container and activates the Flexbox layout model for its child items?',
        questionOdia: 'କେଉଁ CSS ପ୍ରପର୍ଟି ଏକ କଣ୍ଟେନରକୁ ଫ୍ଲେକ୍ସବକ୍ସ (Flexbox) ଲେଆଉଟ୍ ରେ ସକ୍ରିୟ କରେ?',
        options: ['display: flex;', 'position: absolute;', 'float: left;', 'box-sizing: border-box;'],
        optionsOdia: ['display: flex;', 'position: absolute;', 'float: left;', 'box-sizing: border-box;'],
        correctAnswerIndex: 0,
        explanation: 'display: flex turns an element into a flex container and its children into flex items.',
        explanationOdia: 'display: flex ଲେଖିଲେ କଣ୍ଟେନରଟି ଫ୍ଲେକ୍ସବକ୍ସ ଲେଆଉଟ୍ ଆରମ୍ଭ କରେ ।',
        topic: 'CSS Flexbox'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 10',
    order: 4,
    title: 'Artificial Intelligence & Machine Learning Foundations',
    titleOdia: 'କୃତ୍ରିମ ବୁଦ୍ଧିମତା ଓ ମେସିନ୍ ଲର୍ଣ୍ଣିଂର ମୂଳଦୁଆ',
    description: 'AI concepts, stages of AI (ANI, AGI, ASI), domains of AI (Data, Computer Vision, NLP), Machine Learning paradigms (Supervised, Unsupervised, Reinforcement), and AI ethics.',
    descriptionOdia: 'କୃତ୍ରିମ ବୁଦ୍ଧିମତା (AI), ମେସିନ୍ ଲର୍ଣ୍ଣିଂ (ତତ୍ତ୍ୱାବଧାନ, ଅଣ-ତତ୍ତ୍ୱାବଧାନ), Computer Vision, NLP ଏବଂ AI ନୈତିକତା ।',
    lesson: {
      title: 'AI Domains, Machine Learning Types & Ethical Frontiers',
      titleOdia: 'AI ର କ୍ଷେତ୍ର, ମେସିନ୍ ଲର୍ଣ୍ଣିଂର ପ୍ରକାରଭେଦ ଓ ନୈତିକତା',
      durationMinutes: 26,
      objectives: [
        'Differentiate Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) concentric hierarchy',
        'Categorize the three major domains of AI: Data Sciences, Computer Vision (CV), and Natural Language Processing (NLP)',
        'Compare Machine Learning approaches: Supervised Learning (labeled data, regression/classification), Unsupervised Learning (unlabeled data, clustering), and Reinforcement Learning (rewards/penalties)',
        'Analyze ethical challenges of AI: algorithmic bias, deepfakes, privacy infringement, and accountability in autonomous systems'
      ],
      objectivesOdia: [
        'କୃତ୍ରିମ ବୁଦ୍ଧିମତା (AI), ମେସିନ୍ ଲର୍ଣ୍ଣିଂ (ML) ଓ ଡିପ୍ ଲର୍ଣ୍ଣିଂ (DL) ମଧ୍ୟରେ ସମ୍ପର୍କ ବୁଝିବା',
        'AI ର ତିନୋଟି ମୁଖ୍ୟ କ୍ଷେତ୍ର: ଡାଟା ସାଇନ୍ସ, କମ୍ପ୍ୟୁଟର ଭିଜନ୍ (CV) ଓ ପ୍ରାକୃତିକ ଭାଷା ପ୍ରକ୍ରିୟାକରଣ (NLP) ଜାଣିବା',
        'ମେସିନ୍ ଲର୍ଣ୍ଣିଂର ପ୍ରକାର: Supervised (ଲେବଲ୍ ଡାଟା), Unsupervised (କ୍ଲଷ୍ଟରିଂ) ଓ Reinforcement Learning (ପୁରସ୍କାର/ଦଣ୍ଡ) ବୁଝିବା',
        'AI ର ନୈତିକ ସମସ୍ୟା: ପକ୍ଷପାତିତା (Bias), ଡିପଫେକ୍ (Deepfakes), ଗୋପନୀୟତା ଓ ଆତ୍ମନିର୍ଭରଶୀଳ ଯନ୍ତ୍ରର ବିପଦ ବୁଝିବା'
      ],
      content: 'Artificial Intelligence (AI) empowers machines to simulate human cognitive functions such as learning, pattern recognition, problem-solving, and reasoning. Machine Learning (ML) is a subset of AI that enables systems to learn and improve autonomously from historical data without being explicitly programmed. Deep Learning (DL) is a further subset of ML inspired by the human brain biological neural networks. AI is organized into three principal domains: (1) Data Sciences analyzing tabular patterns for predictions; (2) Computer Vision (CV) interpreting visual imagery and video feeds (facial recognition, autonomous driving); and (3) Natural Language Processing (NLP) enabling machines to read, translate, and generate human language (chatbots, sentiment analysis, speech-to-text). ML paradigms include Supervised Learning (trained on labeled input-output datasets), Unsupervised Learning (discovering hidden clusters in unlabeled datasets), and Reinforcement Learning (trial-and-error learning maximizing cumulative reward signals). Ethical concerns require addressing algorithmic bias in training datasets, privacy violations, and deepfake synthetic disinformation.',
      contentOdia: 'କୃତ୍ରିମ ବୁଦ୍ଧିମତା (AI) କମ୍ପ୍ୟୁଟରକୁ ମଣିଷ ଭଳି ଚିନ୍ତା କରିବା, ଶିଖିବା ଓ ନିଷ୍ପତ୍ତି ନେବା କ୍ଷମତା ଦିଏ । ମେସିନ୍ ଲର୍ଣ୍ଣିଂ (ML) ହେଉଛି AI ର ଏକ ଅଂଶ, ଯେଉଁଥିରେ ସିଷ୍ଟମ୍ ପୂର୍ବ ତଥ୍ୟରୁ ନିଜେ ନିଜେ ଶିଖେ । ଡିପ୍ ଲର୍ଣ୍ଣିଂ (DL) ମାନବ ମସ୍ତିଷ୍କର ନ୍ୟୁରନ୍ ଭଳି କୃତ୍ରିମ ନ୍ୟୁରାଲ୍ ନେଟୱାର୍କ ବ୍ୟବହାର କରେ । AI ର ତିନୋଟି ପ୍ରମୁଖ ବିଭାଗ: (୧) ଡାଟା ସାଇନ୍ସ (ଭବିଷ୍ୟବାଣୀ କରିବା), (୨) କମ୍ପ୍ୟୁଟର ଭିଜନ୍ (ଫଟୋ ଓ ଭିଡିଓ ଚିହ୍ନିବା, ଯଥା ଫେସ୍ ଲକ୍, ଡ୍ରାଇଭରଲେସ୍ କାର୍), ଏବଂ (୩) ପ୍ରାକୃତିକ ଭାଷା ପ୍ରକ୍ରିୟାକରଣ ବା NLP (ମଣିଷର ଭାଷା ବୁଝିବା ଓ କଥା ହେବା, ଯଥା ଚାଟବଟ୍, ଅନୁବାଦ) । ମେସିନ୍ ଲର୍ଣ୍ଣିଂର ମୁଖ୍ୟ ପ୍ରକାର: Supervised Learning (ଲେବଲ୍ ଥିବା ଡାଟା), Unsupervised Learning (ଅଜଣା ଡାଟାରେ ଗ୍ରୁପ୍ ବା କ୍ଲଷ୍ଟର ଖୋଜିବା), ଓ Reinforcement Learning (ପୁରସ୍କାର ମାଧ୍ୟମରେ ଶିଖିବା) । AI ବ୍ୟବହାରରେ ନୈତିକତା, ଡାଟା ଗୋପନୀୟତା ଓ ଡିପଫେକ୍ ଭଳି ବିପଦ ପ୍ରତି ସଚେତନ ରହିବା ଜରୁରୀ ।',
      takeaways: [
        'AI is the broad vision; ML is learning from data; DL utilizes multi-layer artificial neural networks',
        'Three AI Domains: Data Sciences, Computer Vision (CV), Natural Language Processing (NLP)',
        'Supervised learning trains on labeled data; Unsupervised on unlabeled data; Reinforcement learns through reward feedback',
        'AI ethics mandates fairness, transparency, accountability, and mitigation of training data bias'
      ],
      takeawaysOdia: [
        'AI ଏକ ବିଶାଳ ଧାରଣା, ML ଡାଟାରୁ ଶିଖେ, ଏବଂ DL ନ୍ୟୁରାଲ୍ ନେଟୱାର୍କ ବ୍ୟବହାର କରେ',
        '୩ଟି ପ୍ରମୁଖ କ୍ଷେତ୍ର: ଡାଟା ସାଇନ୍ସ, କମ୍ପ୍ୟୁଟର ଭିଜନ୍ (CV) ଓ NLP',
        'Supervised ରେ ଲେବଲ୍ ଡାଟା ଥାଏ; Unsupervised ରେ କୌଣସି ଲେବଲ୍ ନଥାଏ',
        'AI ରେ ପକ୍ଷପାତିତା ଦୂର କରି ନିରପେକ୍ଷତା ଓ ଗୋପନୀୟତା ରକ୍ଷା କରିବା ନୈତିକ କର୍ତ୍ତବ୍ୟ'
      ]
    },
    quiz: [
      {
        question: 'Which domain of Artificial Intelligence enables machines to interpret and analyze digital images and video feeds?',
        questionOdia: 'କୃତ୍ରିମ ବୁଦ୍ଧିମତା (AI) ର କେଉଁ ବିଭାଗ କମ୍ପ୍ୟୁଟରକୁ ଡିଜିଟାଲ୍ ଫଟୋ ଓ ଭିଡିଓ ଦେଖି ଚିହ୍ନିବାରେ ସାହାଯ୍ୟ କରେ?',
        options: ['Data Science', 'Natural Language Processing (NLP)', 'Computer Vision (CV)', 'Blockchain'],
        optionsOdia: ['ଡାଟା ସାଇନ୍ସ', 'ପ୍ରାକୃତିକ ଭାଷା ପ୍ରକ୍ରିୟାକରଣ (NLP)', 'କମ୍ପ୍ୟୁଟର ଭିଜନ୍ (Computer Vision / CV)', 'ବ୍ଲକଚେନ୍'],
        correctAnswerIndex: 2,
        explanation: 'Computer Vision processes pixels to recognize objects, facial features, gestures, and scenes.',
        explanationOdia: 'Computer Vision ମେସିନ୍‌କୁ ଛବି ଓ ଭିଡିଓ ବିଶ୍ଳେଷଣ କରି ଚିହ୍ନିବାର କ୍ଷମତା ଦିଏ ।',
        topic: 'AI Domains'
      },
      {
        question: 'Which type of Machine Learning learns optimal strategies through trial-and-error by maximizing rewards and minimizing penalties?',
        questionOdia: 'କେଉଁ ପ୍ରକାରର ମେସିନ୍ ଲର୍ଣ୍ଣିଂ ପରୀକ୍ଷା-ନିରୀକ୍ଷା ଦ୍ୱାରା ପୁରସ୍କାର (Rewards) ଓ ଦଣ୍ଡ (Penalties) ରୁ ନିଜେ ନିଜେ ଶିଖିଥାଏ?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Semi-supervised Learning'],
        optionsOdia: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning (ପୁନର୍ବଳନ ଶିକ୍ଷଣ)', 'Semi-supervised Learning'],
        correctAnswerIndex: 2,
        explanation: 'Reinforcement learning trains agents via reward feedback loops (used in game playing like chess and robotics).',
        explanationOdia: 'Reinforcement Learning ପୁରସ୍କାର ସଙ୍କେତ ଆଧାରରେ ରୋବୋଟ୍ ଓ ଗେମ୍ ଆଲଗୋରିଦମକୁ ପ୍ରଶିକ୍ଷିତ କରେ ।',
        topic: 'Machine Learning Paradigms'
      },
      {
        question: 'What is the ethical risk where an AI model exhibits unfair prejudice because the historical training data reflected human bias?',
        questionOdia: 'ଐତିହାସିକ ଡାଟାରେ ଥିବା ପକ୍ଷପାତିତା ଯୋଗୁଁ AI ମଡେଲ୍ ଅନ୍ୟାୟ ନିଷ୍ପତ୍ତି ନେବା ସମସ୍ୟାକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Algorithmic Bias', 'Overclocking', 'SQL Injection', 'Data Compression'],
        optionsOdia: ['ଆଲଗୋରିଦମିକ୍ ବାୟାସ୍ (Algorithmic Bias / ପକ୍ଷପାତିତା)', 'ଓଭରକ୍ଲକିଂ', 'SQL ଇଞ୍ଜେକ୍ସନ୍', 'ଡାଟା କମ୍ପ୍ରେସନ୍'],
        correctAnswerIndex: 0,
        explanation: 'Algorithmic bias occurs when training datasets reflect systemic historical prejudices that the model then amplifies.',
        explanationOdia: 'ଡାଟା ଭିତରେ ଥିବା ମାନବୀୟ ପକ୍ଷପାତକୁ AI ଆପଣେଇ ନେବାକୁ Algorithmic Bias କୁହାଯାଏ ।',
        topic: 'AI Ethics'
      }
    ]
  },
  {
    subjectCode: 'CS',
    classLevel: 'Class 10',
    order: 5,
    title: 'Cyber Security, Cryptography & Digital Well-being',
    titleOdia: 'ସାଇବର ସୁରକ୍ଷା, ଗୁପ୍ତସଂକେତ ଓ ଡିଜିଟାଲ୍ ସ୍ୱାସ୍ଥ୍ୟ',
    description: 'Cyber threats (malware, ransomware, phishing, man-in-the-middle), cryptographic basics (symmetric vs asymmetric encryption, RSA, hashes), digital hygiene, and digital detox.',
    descriptionOdia: 'ସାଇବର ବିପଦ (ମାଲୱେର୍, ରାନ୍ସମୱେର୍, ଫିସିଂ), ଏନକ୍ରିପ୍ସନ୍ (ସିମେଟ୍ରିକ୍, ଅସିମେଟ୍ରିକ୍), ଡିଜିଟାଲ୍ ସ୍ୱଚ୍ଛତା ଓ ସ୍କ୍ରିନ୍ ସମୟ ସନ୍ତୁଳନ ।',
    lesson: {
      title: 'Threat Vectors, Encryption Ciphers & Ergonomic Well-being',
      titleOdia: 'ସାଇବର ଆକ୍ରମଣ, ଏନକ୍ରିପ୍ସନ୍ ଓ ସୁସ୍ଥ ଡିଜିଟାଲ୍ ଜୀବନଶୈଳୀ',
      durationMinutes: 24,
      objectives: [
        'Analyze common cyber attack vectors: malware (trojans, worms, spyware), Ransomware, Phishing, Social Engineering, and DoS attacks',
        'Understand Cryptography principles: Plaintext -> Ciphertext, Symmetric Key encryption (AES), and Asymmetric Key Public-Private pairs (RSA)',
        'Explain role of Cryptographic Hash functions (SHA-256) in password hashing and data integrity verification',
        'Promote digital well-being: Managing screen time, countering doomscrolling, cyber harassment reporting, and ergonomic 20-20-20 eye rules'
      ],
      objectivesOdia: [
        'ପ୍ରମୁଖ ସାଇବର ଆକ୍ରମଣ: ମାଲୱେର୍, ରାନ୍ସମୱେର୍ (Ransomware), ଫିସିଂ (Phishing ଇମେଲ୍ ଠକେଇ) ଓ ସୋସିଆଲ୍ ଇଞ୍ଜିନିୟରିଂ ବୁଝିବା',
        'ଗୁପ୍ତସଂକେତ (Cryptography): ସାଧାରଣ ଟେକ୍ସଟ୍ ରୁ Ciphertext, ସିମେଟ୍ରିକ୍ (ଗୋଟିଏ କୀ) ଓ ଅସିମେଟ୍ରିକ୍ (Public-Private କୀ) ଏନକ୍ରିପ୍ସନ୍ ବୁଝିବା',
        'ପାସୱାର୍ଡ ସୁରକ୍ଷା ପାଇଁ କ୍ରିପ୍ଟୋଗ୍ରାଫିକ୍ ହ୍ୟାସ୍ (SHA-256) ର ଭୂମିକା ଜାଣିବା',
        'ଡିଜିଟାଲ୍ ସୁସ୍ଥତା: ସ୍କ୍ରିନ୍ ସମୟ ନିୟନ୍ତ୍ରଣ, ସାଇବର ଧମକ ବିରୋଧରେ ରିପୋର୍ଟ (cybercrime.gov.in) ଓ ଆଖି ସୁରକ୍ଷା ପାଇଁ ୨୦-୨୦-୨୦ ନିୟମ'
      ],
      content: 'In our interconnected world, cyber security protects hardware, software, and sensitive data from malicious cyberattacks. Common threats include Malware (viruses altering file binaries, self-replicating worms, trojan backdoors), Ransomware (encrypting victim files demanding monetary ransom), and Phishing (fraudulent deceptive communications mimicking legitimate banks to steal credentials). Cryptography transforms readable plaintext into scrambled ciphertext using mathematical algorithms and cryptographic keys. Symmetric encryption uses a single shared secret key for encryption and decryption (e.g. AES), whereas Asymmetric (public-key) cryptography uses mathematically linked key pairs—a public key for encryption and a private key for decryption (e.g. RSA, SSL/TLS certificates). Digital hygiene encompasses multi-factor authentication (MFA), regular offline backups, updating firmware patches, and adopting the 20-20-20 rule (every 20 minutes, gaze at something 20 feet away for 20 seconds) to maintain ocular and mental wellness.',
      contentOdia: 'ଆଧୁନିକ ଇଣ୍ଟରନେଟ୍ ଯୁଗରେ କମ୍ପ୍ୟୁଟର ଓ ଡାଟାକୁ ସୁରକ୍ଷିତ ରଖିବାକୁ "ସାଇବର ସୁରକ୍ଷା" କୁହାଯାଏ । ପ୍ରମୁଖ ବିପଦଗୁଡ଼ିକ ହେଉଛି: ମାଲୱେର୍ (ଭାଇରସ୍, ଟ୍ରୋଜାନ୍), ରାନ୍ସମୱେର୍ (ଡାଟା ଲକ୍ କରି ଟଙ୍କା ମାଗିବା), ଏବଂ ଫିସିଂ (ନକଲି ବ୍ୟାଙ୍କ ଲିଙ୍କ୍ ପଠାଇ ପାସୱାର୍ଡ ଚୋରି କରିବା) । ତଥ୍ୟକୁ ଗୁପ୍ତ ସଂକେତରେ ପରିଣତ କରିବା ପ୍ରକ୍ରିୟାକୁ କ୍ରିପ୍ଟୋଗ୍ରାଫି (Cryptography) କୁହାଯାଏ । ଏଥିରେ ସାଧାରଣ ଲେଖା Ciphertext ରେ ପରିଣତ ହୁଏ । ସିମେଟ୍ରିକ୍ ଏନକ୍ରିପ୍ସନ୍ ଗୋଟିଏ ଗୁପ୍ତ ଚାବି ବ୍ୟବହାର କରେ ଏବଂ ଅସିମେଟ୍ରିକ୍ ଏନକ୍ରିପ୍ସନ୍ ଦୁଇଟି ଚାବି (Public Key ଓ Private Key) ବ୍ୟବହାର କରେ । ସୁସ୍ଥ ଡିଜିଟାଲ୍ ଜୀବନ ପାଇଁ ଦୁଇ-ସ୍ତରୀୟ ସୁରକ୍ଷା (2FA/MFA), ଅଜଣା ଲିଙ୍କ୍ କ୍ଲିକ୍ ନ କରିବା, ସାଇବର ଅପରାଧ ହେଲେ cybercrime.gov.in ରେ ଜଣାଇବା ଏବଂ ଆଖି ସୁରକ୍ଷା ପାଇଁ ୨୦-୨୦-୨୦ ନିୟମ ପାଳନ କରିବା ଉଚିତ ।',
      takeaways: [
        'Ransomware locks user files using strong encryption demanding ransom for decryption keys',
        'Asymmetric encryption utilizes a Public Key for encrypting and Private Key for decrypting',
        'Multi-Factor Authentication (MFA) requires two or more distinct verification factors',
        'Ergonomic 20-20-20 rule: Every 20 minutes look 20 feet away for 20 seconds to prevent digital eye strain'
      ],
      takeawaysOdia: [
        'ରାନ୍ସମୱେର୍ (Ransomware) ଫାଇଲ୍ ଲକ୍ କରି ଟଙ୍କା ଦାବି କରେ',
        'ଅସିମେଟ୍ରିକ୍ ଏନକ୍ରିପ୍ସନ୍ ରେ Public Key ଏନକ୍ରିପ୍ଟ କରେ ଓ Private Key ଡିକ୍ରିପ୍ଟ କରେ',
        'MFA (Multi-Factor Authentication) ଆକାଉଣ୍ଟକୁ ଦ୍ୱିଗୁଣିତ ସୁରକ୍ଷା ଦିଏ',
        '୨୦-୨୦-୨୦ ନିୟମ କମ୍ପ୍ୟୁଟର ସ୍କ୍ରିନ୍ ଆଗରେ ବସିଥିବା ଆଖିକୁ ସୁସ୍ଥ ରଖେ'
      ]
    },
    quiz: [
      {
        question: 'Which cyber attack disguises malicious communications as trustworthy entities (like banks) to trick victims into revealing passwords or credit card details?',
        questionOdia: 'ବ୍ୟାଙ୍କ ବା ବିଶ୍ୱସ୍ତ ସଂସ୍ଥାର ନକଲ କରି ଠକ ଇମେଲ୍ ବା ମେସେଜ୍ ମାଧ୍ୟମରେ ପାସୱାର୍ଡ ଚୋରି କରିବାକୁ କ’ଣ କୁହାଯାଏ?',
        options: ['Denial of Service (DoS)', 'Phishing', 'Buffer Overflow', 'Keylogger'],
        optionsOdia: ['DoS ଆକ୍ରମଣ', 'ଫିସିଂ (Phishing)', 'ବଫର୍ ଓଭରଫ୍ଲୋ', 'କୀ-ଲଗର୍'],
        correctAnswerIndex: 1,
        explanation: 'Phishing tricks users into disclosing confidential credentials via spoofed interfaces and links.',
        explanationOdia: 'ଫିସିଂ (Phishing) ହେଉଛି ନକଲି ଲିଙ୍କ୍ ଦେଇ ଗୋପନୀୟ ତଥ୍ୟ ଚୋରି କରିବାର କୌଶଳ ।',
        topic: 'Cyber Threat Vectors'
      },
      {
        question: 'In asymmetric (public-key) cryptography, which key is used to decrypt a message that was encrypted using the recipient public key?',
        questionOdia: 'ଅସିମେଟ୍ରିକ୍ ଏନକ୍ରିପ୍ସନ୍‌ରେ ପବ୍ଲିକ୍ କୀ (Public Key) ଦ୍ୱାରା ଲକ୍ ହୋଇଥିବା ମେସେଜ୍‌କୁ ଖୋଲିବା (Decrypt) ପାଇଁ କେଉଁ କୀ ବ୍ୟବହାର ହୁଏ?',
        options: ['The sender public key', 'The recipient private key', 'A shared symmetric password', 'The internet service provider key'],
        optionsOdia: ['ପ୍ରେରକଙ୍କ ପବ୍ଲିକ୍ କୀ', 'ପ୍ରାପକଙ୍କ ପ୍ରାଇଭେଟ୍ କୀ (Recipient Private Key)', 'ସାଧାରଣ ପାସୱାର୍ଡ', 'ISP କୀ'],
        correctAnswerIndex: 1,
        explanation: 'The recipient private key is kept confidential and uniquely decrypts ciphertext encrypted with their matching public key.',
        explanationOdia: 'କେବଳ ଉକ୍ତ ପ୍ରାପକଙ୍କ ଗୁପ୍ତ ପ୍ରାଇଭେଟ୍ କୀ (Private Key) ହିଁ ତାହାକୁ ଖୋଲିପାରିବ ।',
        topic: 'Asymmetric Cryptography'
      },
      {
        question: 'What is the recommended ergonomic "20-20-20 rule" to combat digital eye strain during long screen usage?',
        questionOdia: 'କମ୍ପ୍ୟୁଟର ସ୍କ୍ରିନ୍ ବ୍ୟବହାର କରୁଥିବା ବେଳେ ଆଖିର ସୁରକ୍ଷା ପାଇଁ "୨୦-୨୦-୨୦ ନିୟମ" କ’ଣ ପରାମର୍ଶ ଦିଏ?',
        options: [
          'Blink 20 times every 20 seconds for 20 minutes',
          'Every 20 minutes, gaze at an object 20 feet away for at least 20 seconds',
          'Work for 20 hours, take 20 days off, drink 20 glasses of water',
          'Keep the monitor at 20 percent brightness at 20 degrees angle'
        ],
        optionsOdia: [
          'ପ୍ରତି ୨୦ ସେକେଣ୍ଡରେ ୨୦ ଥର ଆଖି ପିଛୁଳା ପକାଇବା',
          'ପ୍ରତି ୨୦ ମିନିଟ୍‌ରେ, ୨୦ ଫୁଟ ଦୂରରେ ଥିବା ବସ୍ତୁକୁ ଅତିକମରେ ୨୦ ସେକେଣ୍ଡ ଦେଖିବା',
          '୨୦ ଘଣ୍ଟା କାମ କରିବା',
          '୨୦ ପ୍ରତିଶତ ବ୍ରାଇଟନେସ୍ ରଖିବା'
        ],
        correctAnswerIndex: 1,
        explanation: 'Looking at distant objects (20 feet) relaxes ocular ciliary muscles and prevents fatigue.',
        explanationOdia: 'ପ୍ରତି ୨୦ ମିନିଟ୍‌ରେ ୨୦ ଫୁଟ ଦୂରକୁ ୨୦ ସେକେଣ୍ଡ ଦେଖିଲେ ଆଖିର ମାଂସପେଶୀ ଆରାମ ପାଏ ।',
        topic: 'Digital Well-being'
      }
    ]
  }
];

module.exports = { class10Data };
