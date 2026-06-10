const Biomolecules = [
  // ─── CHEMICAL ANALYSIS & BASIC CONCEPTS ─────────────────────────────────────
  {
    id: 1,
    question: "Which chemical is used to grind tissue for elemental analysis, and what do the resulting fractions represent?",
    answer: "Trichloroacetic acid. Filtrate = acid-soluble pool (micromolecules); Retentate = acid-insoluble fraction (macromolecules)." /* */
  },
  {
    id: 2,
    question: "How does elemental abundance differ between living organisms and the earth's crust?",
    answer: "The relative abundance of Carbon and Hydrogen is higher in living organisms than in the earth's crust." /* */
  },
  {
    id: 3,
    question: "List the % weight of Oxygen, Carbon, and Nitrogen in the human body.",
    answer: "Oxygen: 65.0%, Carbon: 18.5%, Nitrogen: 3.3%." /* */
  },
  {
    id: 4,
    question: "Which elements have the highest % weight in the earth's crust?",
    answer: "Oxygen (46.6%) and Silicon (27.7%)." /* */
  },
  {
    id: 5,
    question: "How is dry weight obtained, and what remains after fully burning the tissue?",
    answer: "Dry weight is obtained by evaporating water. Burning oxidises carbon compounds, leaving 'ash' containing inorganic elements." /* */
  },
  {
    id: 6,
    question: "What do elemental and compound analyses of living tissues yield respectively?",
    answer: "Elemental analysis yields elements like hydrogen, oxygen, and carbon. Compound analysis yields organic and inorganic constituents." /* */
  },
  {
    id: 7,
    question: "What are biomolecules, and which functional groups can chemists identify in them?",
    answer: "All carbon compounds from living tissues. Chemists identify functional groups like aldehydes, ketones, and aromatic compounds." /* */
  },
  {
    id: 8,
    question: "What do the acid-soluble and acid-insoluble pools roughly represent?",
    answer: "Acid-soluble represents cytoplasmic composition. Acid-insoluble represents macromolecules from the cytoplasm and organelles." /* */
  },
  {
    id: 9,
    question: "What is the most abundant chemical in living organisms?",
    answer: "Water, constituting 70-90% of the total cellular mass." /* */
  },
  {
    id: 10,
    question: "List the average cellular composition % of Proteins, Nucleic acids, Carbohydrates, Lipids, and Ions.",
    answer: "Proteins: 10-15%. Nucleic acids: 5-7%. Carbohydrates: 3%. Lipids: 2%. Ions: 1%." /* */
  },

  // ─── AMINO ACIDS ────────────────────────────────────────────────────────────
  {
    id: 11,
    question: "What is the structural composition of an amino acid? What determines its specific chemical nature?",
    answer: "Substituted methanes with 4 alpha-carbon substituents: Hydrogen, carboxyl group, amino group, and a variable R-group (determines its nature)." /* */
  },
  {
    id: 12,
    question: "Identify the R-group for the amino acids Glycine, Alanine, and Serine.",
    answer: "Glycine: Hydrogen. Alanine: Methyl. Serine: Hydroxy methyl." /* */
  },
  {
    id: 13,
    question: "Provide examples of acidic, basic, neutral, and aromatic amino acids.",
    answer: "Acidic: Glutamic acid. Basic: Lysine. Neutral: Valine. Aromatic: Tyrosine, Phenylalanine, Tryptophan." /* */
  },
  {
    id: 14,
    question: "Why does amino acid structure change in solutions of different pH?",
    answer: "Due to the ionizable nature of -NH2 and -COOH groups, forming a zwitterionic state." /* */
  },
  {
    id: 15,
    question: "Contrast essential and non-essential amino acids regarding their source.",
    answer: "Non-essential are made by our body. Essential cannot be made and must be supplied through dietary proteins." /* */
  },

  // ─── LIPIDS ─────────────────────────────────────────────────────────────────
  {
    id: 16,
    question: "Contrast saturated and unsaturated fatty acids, and list the esterified forms of glycerol.",
    answer: "Saturated lack double bonds; unsaturated have C=C bonds. Fatty acids esterified with glycerol form mono-, di-, and triglycerides." /* */
  },
  {
    id: 17,
    question: "Detail the specific carbon atom count for palmitic and arachidonic acid.",
    answer: "Palmitic acid: 16 carbons. Arachidonic acid: 20 carbons. (Both counts include the carboxyl carbon)." /* */
  },
  {
    id: 18,
    question: "What is the structure of glycerol and phospholipids?",
    answer: "Glycerol is trihydroxy propane. Phospholipids have a phosphorylated organic compound attached to the lipid (e.g., Lecithin)." /* */
  },
  {
    id: 19,
    question: "How is a triglyceride structurally represented in the NCERT diagram?",
    answer: "As glycerol esterified to three fatty acids, represented as R1, R2, and R3." /* */
  },
  {
    id: 20,
    question: "Why do oils remain liquid in winter? Where are structurally complex lipids found?",
    answer: "Oils (e.g., gingelly oil) have lower melting points. Complex lipids are found in neural tissues." /* */
  },
  {
    id: 21,
    question: "Why do lipids (MW < 800 Da) appear in the acid-insoluble macromolecular fraction?",
    answer: "Tissue grinding disrupts cell membranes into water-insoluble vesicles that separate into the acid-insoluble pool." /* */
  },

  // ─── CARBOHYDRATES & POLYSACCHARIDES ────────────────────────────────────────
  {
    id: 22,
    question: "What are the exact chemical formulas for glucose and ribose?",
    answer: "Glucose: C6H12O6. Ribose: C5H10O5." /* */
  },
  {
    id: 23,
    question: "Classify cellulose, starch, glycogen, and inulin based on their monomers.",
    answer: "Cellulose, starch, and glycogen are glucose homopolymers. Inulin is a polymer of fructose." /* */
  },
  {
    id: 24,
    question: "Contrast the structural folding and iodine-binding capacity of starch and cellulose.",
    answer: "Starch forms a helical secondary structure that holds I2 (blue colour). Cellulose lacks complex helices and cannot hold I2." /* */
  },
  {
    id: 25,
    question: "Identify the reducing and non-reducing ends of a glycogen chain.",
    answer: "The right end is the reducing end, and the left end is the non-reducing end." /* */
  },
  {
    id: 26,
    question: "What specific features are illustrated in the NCERT diagram of a glycogen portion?",
    answer: "It depicts a branched portion of glycogen, explicitly highlighting its right reducing end and left non-reducing end." /* */
  },
  {
    id: 27,
    question: "Give examples of chemically modified sugars and state the composition of arthropod exoskeletons.",
    answer: "Modified sugars: Glucosamine, N-acetyl galactosamine. Arthropod exoskeletons are made of chitin (a complex polysaccharide homopolymer)." /* */
  },

  // ─── NUCLEIC ACIDS ──────────────────────────────────────────────────────────
  {
    id: 28,
    question: "Name the five nitrogenous bases and classify them as purines or pyrimidines.",
    answer: "Purines: Adenine, Guanine. Pyrimidines: Cytosine, Uracil, Thymine." /* */
  },
  {
    id: 29,
    question: "List the five nucleosides (base + sugar) found in living tissues.",
    answer: "Adenosine, Guanosine, Cytidine, Uridine, Thymidine." /* */
  },
  {
    id: 30,
    question: "What are the three components of a nucleotide, and what pentose sugars do DNA and RNA contain?",
    answer: "A heterocyclic base, a monosaccharide (pentose), and phosphoric acid. DNA contains 2'-deoxyribose; RNA contains ribose." /* */
  },
  {
    id: 31,
    question: "List the five specific nucleotides found in nucleic acids.",
    answer: "Adenylic acid, thymidylic acid, guanylic acid, uridylic acid, and cytidylic acid." /* */
  },

  // ─── PRIMARY & SECONDARY METABOLITES ────────────────────────────────────────
  {
    id: 32,
    question: "Differentiate primary and secondary metabolites based on their functions.",
    answer: "Primary have identifiable physiological roles. Secondary have unclear host roles but hold ecological/human welfare importance." /* */
  },
  {
    id: 33,
    question: "Identify the secondary metabolites classified as Pigments, Alkaloids, and Terpenoides.",
    answer: "Pigments: Carotenoids, Anthocyanins. Alkaloids: Morphine, Codeine. Terpenoides: Monoterpenes, Diterpenes." /* */
  },
  {
    id: 34,
    question: "Identify the secondary metabolites classified as Toxins, Lectins, Drugs, and Polymeric substances.",
    answer: "Toxins: Abrin, Ricin. Lectins: Concanavalin A. Drugs: Vinblastin, curcumin. Polymeric: Rubber, gums, cellulose." /* */
  },
  {
    id: 35,
    question: "Name the essential oil and the microbial products explicitly listed as secondary metabolites.",
    answer: "Lemon grass oil (an essential oil) and antibiotics." /* */
  },
  {
    id: 36,
    question: "What are the molecular weight ranges for micromolecules and macromolecules?",
    answer: "Micromolecules (acid-soluble pool): 18 to ~800 Da. Macromolecules (acid-insoluble pool): 10,000 Da and above." /* */
  },

  // ─── PROTEINS ───────────────────────────────────────────────────────────────
  {
    id: 37,
    question: "Why are proteins considered heteropolymers rather than homopolymers?",
    answer: "They are linear polypeptide chains of amino acids linked by peptide bonds, containing 20 different types of amino acids." /* */
  },
  {
    id: 38,
    question: "Identify the functions of Collagen, Trypsin, Insulin, Antibody, Receptor, and GLUT-4.",
    answer: "Collagen: Intercellular ground substance. Trypsin: Enzyme. Insulin: Hormone. Antibody: Fights infection. Receptor: Sensory reception. GLUT-4: Glucose transport." /* */
  },
  {
    id: 39,
    question: "Name the most abundant protein in the animal world and the entire biosphere.",
    answer: "Animal world: Collagen. Biosphere: Ribulose bisphosphate Carboxylase-Oxygenase (RuBisCO)." /* */
  },
  {
    id: 40,
    question: "What characterizes the primary and secondary structures of a protein?",
    answer: "Primary: Amino acid sequence (left/1st = N-terminal, right/last = C-terminal). Secondary: Local folding (only right-handed alpha-helices exist in proteins)." /* */
  },
  {
    id: 41,
    question: "What characterizes the tertiary and quaternary structures of a protein?",
    answer: "Tertiary: 3D hollow woolen ball folding (necessary for biological activity). Quaternary: Multi-subunit assembly (e.g., adult human Hb: 2 alpha, 2 beta subunits)." /* */
  },
  {
    id: 42,
    question: "Which specific bonds and structures are labelled in the NCERT protein structure diagram?",
    answer: "Polypeptide, Alpha-Helix, Beta-pleated sheet, Hydrogen bond, and Disulphide bond." /* */
  },

  // ─── ENZYMES: BASICS & REACTIONS ────────────────────────────────────────────
  {
    id: 43,
    question: "What are ribozymes? How do high temperatures generally affect enzymes?",
    answer: "Ribozymes are nucleic acids that behave like enzymes. High temperatures (>40°C) denature most enzymes." /* */
  },
  {
    id: 44,
    question: "What exception exists for enzyme thermal stability?",
    answer: "Thermophilic enzymes (isolated from hot vents/sulphur springs) remain stable and retain catalytic power up to 80-90°C." /* */
  },
  {
    id: 45,
    question: "Give the NCERT examples of an inorganic chemical reaction and an organic chemical reaction.",
    answer: "Inorganic: Ba(OH)2 + H2SO4 → BaSO4 + 2H2O. Organic: Hydrolysis of starch into glucose." /* */
  },
  {
    id: 46,
    question: "Write the specific reversible reaction catalysed by carbonic anhydrase.",
    answer: "CO2 + H2O ⇌ H2CO3 (Carbonic acid)." /* */
  },
  {
    id: 47,
    question: "How much does carbonic anhydrase accelerate the formation of H2CO3?",
    answer: "By 10 million times. Uncatalysed: ~200 molecules/hour. Catalysed: ~600,000 molecules/second." /* */
  },
  {
    id: 48,
    question: "What are the varying end-products of the 10-step glucose-to-pyruvic acid pathway under different conditions?",
    answer: "Muscle (anaerobic): Lactic acid. Yeast (fermentation): Ethanol. Normal aerobic: Pyruvic acid." /* */
  },
  {
    id: 49,
    question: "How does temperature fluctuation generally affect biochemical reaction rates?",
    answer: "The rate doubles or decreases by half for every 10°C change in either direction." /* */
  },

  // ─── ENZYMES: MECHANISM OF ACTION ───────────────────────────────────────────
  {
    id: 50,
    question: "What is an active site, and what unstable structure forms when a substrate binds to it?",
    answer: "A crevice or pocket where the substrate fits. Binding forms a transient, unstable transition state structure." /* */
  },
  {
    id: 51,
    question: "What is activation energy? Does an exothermic reaction still require it?",
    answer: "The average energy difference between the substrate and its transition state. Yes, even exothermic reactions must overcome this barrier." /* */
  },
  {
    id: 52,
    question: "What is the symbolic representation of an enzyme-catalysed reaction through complex formations?",
    answer: "E + S ⇌ ES → EP → E + P." /* */
  },
  {
    id: 53,
    question: "Why does the velocity of an enzymatic reaction plateau at Vmax?",
    answer: "At Vmax, all enzyme active sites are saturated; adding more substrate molecules cannot increase the velocity further." /* */
  },
  {
    id: 54,
    question: "What is competitive inhibition? Give an example.",
    answer: "An inhibitor resembles the substrate, competing for the active site. Example: Malonate inhibits succinic dehydrogenase (resembles succinate)." /* */
  },

  // ─── ENZYMES: CLASSIFICATION & CO-FACTORS ───────────────────────────────────
  {
    id: 55,
    question: "How are enzymes officially classified and named?",
    answer: "Divided into 6 classes (each with 4-13 subclasses) and named by a four-digit number based on the catalysed reaction." /* */
  },
  {
    id: 56,
    question: "Define the enzyme classes: Oxidoreductases, Transferases, and Hydrolases.",
    answer: "Oxidoreductases: Catalyse oxidoreduction. Transferases: Transfer group G (not H). Hydrolases: Hydrolyse ester, ether, peptide, glycosidic bonds." /* */
  },
  {
    id: 57,
    question: "Define the enzyme classes: Lyases, Isomerases, and Ligases.",
    answer: "Lyases: Remove groups without hydrolysis, leaving double bonds. Isomerases: Inter-convert isomers. Ligases: Link 2 compounds (C-O, C-S, P-O bonds)." /* */
  },
  {
    id: 58,
    question: "What constitutes a holoenzyme? What is an apoenzyme?",
    answer: "A holoenzyme is an active enzyme formed by an apoenzyme (the protein portion) bound to a non-protein co-factor." /* */
  },
  {
    id: 59,
    question: "Differentiate prosthetic groups and co-enzymes as co-factors.",
    answer: "Prosthetic groups: Tightly bound organics (e.g., haem in peroxidase/catalase). Co-enzymes: Transient organics, often vitamins (e.g., NAD/NADP contain niacin)." /* */
  },
  {
    id: 60,
    question: "How do metal ions act as co-factors? Provide an example.",
    answer: "They form coordination bonds with active site side chains and the substrate. Example: Zinc is a cofactor for the proteolytic enzyme carboxypeptidase." /* */
  },

  // ─── REMAINING DATA POINTS (RATIONALISED SYLLABUS) ───────────────
  {
    id: 61,
    question: "What is the % weight of Sulphur, Sodium, Calcium, Magnesium, and Silicon in the human body?",
    answer: "Sulphur: 0.3%. Sodium: 0.2%. Calcium: 1.5%. Magnesium: 0.1%. Silicon: negligible." /* */
  },
  {
    id: 62,
    question: "Which specific representative inorganic ions and compounds are found in living tissues according to NCERT?",
    answer: "Ions: Na+, K+, Ca++, Mg++. Molecules/Compounds: H2O, NaCl, CaCO3, PO4 3-, SO4 2-." /* */
  }
];

export default Biomolecules;