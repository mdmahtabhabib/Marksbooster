const Respiration= [

  // ─── INTRODUCTION & BASIC CONCEPTS ──────────────────────────────────────────
  {
    id: 1,
    question: "What is cellular respiration?",
    answer: "Mechanism of breakdown of food materials within the cell to release energy, trapped for ATP synthesis."
  },
  {
    id: 2,
    question: "What is respiration and where does it occur in eukaryotes?",
    answer: "Breaking of C-C bonds of complex compounds through oxidation, releasing energy. Occurs in cytoplasm and mitochondria. (Photosynthesis in chloroplasts.)"
  },
  {
    id: 3,
    question: "What are respiratory substrates?",
    answer: "Compounds oxidised during respiration. Usually carbohydrates; proteins, fats, organic acids can also be used in some plants under certain conditions."
  },
  {
    id: 4,
    question: "Why is ATP called the energy currency of the cell, and what happens to the carbon skeleton?",
    answer: "Energy stored as ATP, broken down whenever and wherever cellular work needs it. Carbon skeleton used as precursors for biosynthesis of other molecules."
  },
  {
    id: 5,
    question: "What kind of process is respiration in terms of energy release?",
    answer: "An enzymatically controlled, stepwise oxidative process; energy released slowly in small steps and trapped as ATP, not in a single step."
  },

  // ─── DO PLANTS BREATHE? ──────────────────────────────────────────────────────
  {
    id: 6,
    question: "How do plants carry out gaseous exchange without specialised organs?",
    answer: "Through stomata and lenticels (no specialised respiratory organs)."
  },
  {
    id: 7,
    question: "Why can plants get along without respiratory organs (three reasons)?",
    answer: "Each part meets its own gas-exchange needs; low gas demand (roots, stems, leaves respire slowly); diffusion distance short as each cell is near surface."
  },
  {
    id: 8,
    question: "Why is most of a plant cell's surface in contact with air?",
    answer: "Living cells in stems occur in thin layers beneath bark (interior cells dead, give mechanical support); loose packing of parenchyma creates interconnected air spaces."
  },
  {
    id: 9,
    question: "What is the complete combustion equation of glucose?",
    answer: "C6H12O6 + 6O2 → 6CO2 + 6H2O + Energy. Most energy given out as heat."
  },
  {
    id: 10,
    question: "What is the plant cell's strategy for releasing energy from glucose?",
    answer: "Oxidise glucose in several small steps (not one), so some steps release energy coupled to ATP synthesis."
  },
  {
    id: 11,
    question: "What are facultative and obligate anaerobes?",
    answer: "Facultative anaerobes: can live with or without O2. Obligate anaerobes: require anaerobic conditions. First cells lived in oxygen-lacking atmosphere."
  },
  {
    id: 12,
    question: "What is glycolysis defined as and which organisms retain its machinery?",
    answer: "Breakdown of glucose to pyruvic acid; partial oxidation without O2. All living organisms retain the enzymatic machinery."
  },

  // ─── GLYCOLYSIS ──────────────────────────────────────────────────────────────
  {
    id: 13,
    question: "What is the origin of the term glycolysis and who gave its scheme?",
    answer: "Greek: glycos (sugar), lysis (splitting). Scheme by Gustav Embden, Otto Meyerhof, J. Parnas → EMP pathway."
  },
  {
    id: 14,
    question: "Where does glycolysis occur and what is its product?",
    answer: "In the cytoplasm; present in all living organisms. Glucose partially oxidised to two molecules of pyruvic acid. Only respiration process in anaerobes."
  },
  {
    id: 15,
    question: "In plants, where is glycolytic glucose derived from?",
    answer: "From sucrose (end product of photosynthesis) or storage carbohydrates. Sucrose → glucose + fructose by enzyme invertase."
  },
  {
    id: 16,
    question: "What enzyme phosphorylates glucose/fructose and what is formed?",
    answer: "Hexokinase; forms glucose-6-phosphate, which isomerises to fructose-6-phosphate."
  },
  {
    id: 17,
    question: "What is the sequence of intermediates in glycolysis (Fig. 14.1)?",
    answer: "Glucose → G6P → F6P → F1,6BP → DHAP + PGAL → BPGA → PGA → 2-phosphoglycerate → PEP → Pyruvate."
  },
  {
    id: 18,
    question: "How many reactions are in glycolysis and at which two steps is ATP utilised?",
    answer: "Ten reactions. ATP used: glucose → glucose-6-phosphate, and fructose-6-phosphate → fructose-1,6-bisphosphate."
  },
  {
    id: 19,
    question: "What is fructose-1,6-bisphosphate split into?",
    answer: "Dihydroxyacetone phosphate and 3-phosphoglyceraldehyde (PGAL)."
  },
  {
    id: 20,
    question: "At which step is NADH + H+ formed in glycolysis?",
    answer: "When PGAL (3-phosphoglyceraldehyde) is converted to BPGA (1,3-bisphosphoglycerate); two hydrogen atoms transferred to NAD+."
  },
  {
    id: 21,
    question: "At which steps is ATP synthesised in glycolysis?",
    answer: "Conversion of BPGA to 3-phosphoglyceric acid (PGA), and conversion of PEP to pyruvic acid."
  },
  {
    id: 22,
    question: "What is the net ATP gain in glycolysis from one glucose molecule?",
    answer: "Net 2 ATP (4 synthesised minus 2 utilised)."
  },

  // ─── FATE OF PYRUVATE & FERMENTATION ────────────────────────────────────────
  {
    id: 23,
    question: "What are the three metabolic fates of pyruvate (Fig. 14.2)?",
    answer: "Anaerobic yeast → ethanol + CO2 (alcoholic fermentation). Animal muscles → lactic acid (lactic acid fermentation). Aerobic cells → acetyl CoA (aerobic respiration)."
  },
  {
    id: 24,
    question: "Describe alcoholic fermentation including the reducing agent.",
    answer: "Pyruvic acid → CO2 + ethanol (anaerobic, e.g., yeast) by pyruvic acid decarboxylase and alcohol dehydrogenase. NADH + H+ reoxidised to NAD+."
  },
  {
    id: 25,
    question: "What happens in lactic acid fermentation and which enzyme is involved?",
    answer: "Pyruvic acid reduced to lactic acid by lactate dehydrogenase (NADH + H+ reoxidised to NAD+). Occurs in some bacteria and muscles during exercise when O2 inadequate."
  },
  {
    id: 26,
    question: "How much energy is released in fermentation?",
    answer: "Less than 7% of energy in glucose; not all trapped as ATP. Processes are hazardous (acid or alcohol produced)."
  },
  {
    id: 27,
    question: "At what alcohol concentration do yeasts poison themselves?",
    answer: "About 13%. Higher concentrations obtained through distillation."
  },

  // ─── AEROBIC RESPIRATION ─────────────────────────────────────────────────────
  {
    id: 28,
    question: "What is aerobic respiration?",
    answer: "Complete oxidation of organic substances in presence of oxygen, releasing CO2, water, and large amount of energy. Most common in higher organisms."
  },
  {
    id: 29,
    question: "What are the two crucial events of aerobic respiration and their locations?",
    answer: "Complete oxidation of pyruvate (removing H atoms, leaving 3 CO2) in matrix; electrons passed to O2 with ATP synthesis on inner membrane."
  },
  {
    id: 30,
    question: "What is the oxidative decarboxylation of pyruvate and its enzyme?",
    answer: "Pyruvate + CoA + NAD+ → Acetyl CoA + CO2 + NADH + H+, catalysed by pyruvic dehydrogenase (needs Mg2+, NAD+, Coenzyme A)."
  },
  {
    id: 31,
    question: "How many NADH are produced from pyruvate oxidation per glucose?",
    answer: "Two NADH (from two pyruvic acid molecules)."
  },
  {
    id: 32,
    question: "What is the Krebs' cycle also called and who elucidated it?",
    answer: "Tricarboxylic acid (TCA) cycle or citric acid cycle. First elucidated by Hans Krebs."
  },

  // ─── TCA / KREBS' CYCLE ──────────────────────────────────────────────────────
  {
    id: 33,
    question: "How does the TCA cycle begin?",
    answer: "Acetyl CoA condenses with oxaloacetic acid (OAA) and water → citric acid, catalysed by citrate synthase; CoA released."
  },
  {
    id: 34,
    question: "What follows citrate formation in the TCA cycle?",
    answer: "Citrate isomerised to isocitrate → two decarboxylations → α-ketoglutaric acid → succinyl-CoA."
  },
  {
    id: 35,
    question: "How is GTP/ATP synthesised in the TCA cycle?",
    answer: "During succinyl-CoA → succinic acid conversion, GTP synthesised (substrate-level phosphorylation); GTP → GDP with ATP synthesis from ADP."
  },
  {
    id: 36,
    question: "How many NADH and FADH2 points are in the TCA cycle?",
    answer: "Three points where NAD+ reduced to NADH + H+; one point where FAD+ reduced to FADH2."
  },
  {
    id: 37,
    question: "What is the summary equation of the TCA cycle?",
    answer: "Pyruvic acid + 4NAD+ + FAD+ + 2H2O + ADP + Pi → 3CO2 + 4NADH + 4H+ + FADH2 + ATP."
  },
  {
    id: 38,
    question: "What is the sequence of acids in the citric acid cycle (Fig. 14.3)?",
    answer: "Citric acid → α-ketoglutaric acid → succinic acid → malic acid → oxaloacetic acid (OAA), which condenses with acetyl CoA to restart."
  },
  {
    id: 39,
    question: "What must be replenished/regenerated for TCA cycle to continue?",
    answer: "Oxaloacetic acid (first member) replenished; NAD+ and FAD+ regenerated from NADH and FADH2."
  },
  {
    id: 40,
    question: "What is the total yield of TCA cycle products from one glucose (after glycolysis and pyruvate oxidation)?",
    answer: "Glucose breakdown gives: CO2, 8 NADH + H+, 2 FADH2, and 2 ATP (in TCA cycle)."
  },
  {
    id: 41,
    question: "What are the carbon counts of the key TCA intermediates?",
    answer: "Pyruvate (3C), Acetyl CoA (2C), Citric acid (6C), α-ketoglutaric acid (5C), Succinic acid (4C), Malic acid (4C), OAA (4C)."
  },

  // ─── ELECTRON TRANSPORT SYSTEM ───────────────────────────────────────────────
  {
    id: 42,
    question: "What is the electron transport system (ETS) and where is it located?",
    answer: "Metabolic pathway where electrons pass from one carrier to another; located in inner mitochondrial membrane. Oxidises NADH and FADH2, passing electrons to O2 forming H2O."
  },
  {
    id: 43,
    question: "Name the five complexes of the ETS (Fig. 14.4).",
    answer: "Complex I: NADH dehydrogenase. II: Succinate dehydrogenase. III: Cytochrome bc1. IV: Cytochrome c oxidase. V: ATP synthase."
  },
  {
    id: 44,
    question: "What is the role of Complex I and Complex II in the ETS?",
    answer: "Complex I (NADH dehydrogenase): oxidises NADH, transfers electrons to ubiquinone (UQ). Complex II: FADH2 passes reducing equivalents to ubiquinone."
  },
  {
    id: 45,
    question: "What is the role of Complex III and cytochrome c in the ETS?",
    answer: "Complex III (cytochrome bc1): oxidises ubiquinol, transfers electrons to cytochrome c. Cytochrome c: mobile carrier between Complex III and IV."
  },
  {
    id: 46,
    question: "What is Complex IV in the ETS?",
    answer: "Cytochrome c oxidase complex; contains cytochromes a and a3, and two copper centres."
  },
  {
    id: 47,
    question: "How many ATP are produced from oxidation of one NADH vs one FADH2, and what is oxygen's role?",
    answer: "One NADH → 3 ATP; one FADH2 → 2 ATP. Oxygen acts as final hydrogen acceptor (terminal stage), driving the process; reduced to water."
  },
  {
    id: 48,
    question: "What is oxidative phosphorylation?",
    answer: "ATP synthesis using energy of oxidation-reduction in respiration (unlike photophosphorylation which uses light energy for proton gradient)."
  },
  {
    id: 49,
    question: "How does ATP synthase (Complex V) synthesise ATP? (F1, F0, protons)",
    answer: "F1 headpiece: site of ATP synthesis from ADP + Pi. F0: integral channel for protons across inner membrane. 2H+ pass through F0 per ATP produced."
  },

  // ─── RESPIRATORY BALANCE SHEET ───────────────────────────────────────────────
  {
    id: 50,
    question: "What four assumptions are made for calculating net ATP gain?",
    answer: "Pathway operates sequentially; glycolytic NADH enters mitochondria for oxidative phosphorylation; no intermediate withdrawn for other compounds; only glucose respired (no alternative substrates)."
  },
  {
    id: 51,
    question: "What is the overall equation and net ATP yield of aerobic respiration of one glucose?",
    answer: "C6H12O6 + 6O2 → 6CO2 + 12H2O + Energy. Net gain: 38 ATP molecules (theoretical)."
  },
  {
    id: 52,
    question: "Why is the ATP balance sheet only theoretical?",
    answer: "In living systems all pathways work simultaneously (not sequentially); substrates enter/withdraw as needed; ATP used as needed; enzyme rates controlled by multiple means."
  },

  // ─── FERMENTATION vs AEROBIC COMPARISON ──────────────────────────────────────
  {
    id: 53,
    question: "Compare fermentation and aerobic respiration.",
    answer: "Fermentation: partial glucose breakdown, net 2 ATP, NADH oxidised slowly. Aerobic: complete degradation to CO2 + H2O, many more ATP, vigorous NADH oxidation."
  },

  // ─── AMPHIBOLIC PATHWAY ──────────────────────────────────────────────────────
  {
    id: 54,
    question: "What is the favoured respiratory substrate and how do others enter?",
    answer: "Glucose. Carbohydrates first converted to glucose. Other substrates enter at different points, not the first step."
  },
  {
    id: 55,
    question: "How do fats enter the respiratory pathway?",
    answer: "Fats → glycerol + fatty acids. Fatty acids → acetyl CoA. Glycerol → PGAL, then enters pathway."
  },
  {
    id: 56,
    question: "How do proteins enter the respiratory pathway?",
    answer: "Degraded by proteases to amino acids; after deamination, enter at some stage of Krebs' cycle, or as pyruvate or acetyl CoA."
  },
  {
    id: 57,
    question: "How does the amphibolic pathway figure (Fig. 14.6) show substrate interrelationships?",
    answer: "Carbohydrates, fats, and proteins all feed into respiration (breakdown); same intermediates withdrawn for biosynthesis (anabolism) of these substrates."
  },
  {
    id: 58,
    question: "Why is the respiratory pathway called amphibolic, not just catabolic?",
    answer: "Involved in both breakdown (catabolism) and synthesis (anabolism); e.g., acetyl CoA both withdrawn and supplied for fatty acid synthesis/breakdown."
  },

  // ─── RESPIRATORY QUOTIENT ────────────────────────────────────────────────────
  {
    id: 59,
    question: "What is respiratory quotient (RQ)?",
    answer: "Ratio of volume of CO2 evolved to volume of O2 consumed in respiration. Depends on type of respiratory substrate."
  },
  {
    id: 60,
    question: "What is the RQ for carbohydrates with equation?",
    answer: "C6H12O6 + 6O2 → 6CO2 + 6H2O. RQ = 6CO2/6O2 = 1.0 (equal CO2 evolved and O2 consumed)."
  },
  {
    id: 61,
    question: "What is the RQ for fats with example equation?",
    answer: "RQ less than 1. Tripalmitin: 2(C51H98O6) + 145O2 → 102CO2 + 98H2O. RQ = 102/145 = 0.7."
  },
  {
    id: 62,
    question: "What is the RQ for proteins?",
    answer: "About 0.9."
  },
  {
    id: 63,
    question: "What is important to recognise about respiratory substrates in living organisms?",
    answer: "Substrates are often more than one; pure proteins or fats are never used as respiratory substrates."
  }

];

export default Respiration;