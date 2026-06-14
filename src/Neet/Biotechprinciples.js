const Biotechprinciples = [
  // ─── DEFINITION & CORE PRINCIPLES ────────────────────────────────────────────
  {
    id: 1,
    question: "What are the common examples of processes that can be thought of as a form of biotechnology?",
    answer: "Making curd, bread, or wine, which are all microbe-mediated processes."
  },
  {
    id: 2,
    question: "How does the European Federation of Biotechnology (EFB) define biotechnology?",
    answer: "The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services."
  },
  {
    id: 3,
    question: "What are the two core techniques that enabled the birth of modern biotechnology?",
    answer: "Genetic engineering and Bioprocess engineering."
  },
  {
    id: 4,
    question: "What is an origin of replication (ori)?",
    answer: "A specific DNA sequence in a chromosome that is responsible for initiating replication."
  },
  {
    id: 5,
    question: "What is transformation?",
    answer: "A procedure through which a piece of DNA is introduced in a host bacterium."
  },
  {
    id: 6,
    question: "Who constructed the first recombinant DNA and in what year?",
    answer: "Stanley Cohen and Herbert Boyer in 1972."
  },
  {
    id: 7,
    question: "Which bacterium's native plasmid was used by Cohen and Boyer to construct the first r-DNA?",
    answer: "Salmonella typhimurium."
  },
  {
    id: 8,
    question: "What gene was linked to the plasmid in the first recombinant DNA construction?",
    answer: "A gene encoding antibiotic resistance."
  },

  // ─── RESTRICTION ENZYMES (MOLECULAR SCISSORS) ────────────────────────────────
  {
    id: 9,
    question: "What two enzymes responsible for restricting the growth of bacteriophage in E. coli were isolated in 1963?",
    answer: "One that added methyl groups to DNA and another that cut DNA (restriction endonuclease)."
  },
  {
    id: 10,
    question: "Why are restriction enzymes often referred to as molecular scissors?",
    answer: "Because they cut DNA molecules at specific locations."
  },
  {
    id: 11,
    question: "Which was the first restriction endonuclease to be discovered?",
    answer: "Hind II."
  },
  {
    id: 12,
    question: "How many base pairs make up the specific recognition sequence for Hind II?",
    answer: "Six base pairs."
  },
  {
    id: 13,
    question: "What do the letters 'EcoRI' stand for?",
    answer: "E is the genus Escherichia, co is the species coli, R is the strain RY 13, and I is the order of discovery."
  },
  {
    id: 14,
    question: "To which larger class of enzymes do restriction enzymes belong?",
    answer: "Nucleases."
  },
  {
    id: 15,
    question: "Differentiate between exonucleases and endonucleases.",
    answer: "Exonucleases remove nucleotides from the ends of DNA, while endonucleases make cuts at specific positions within the DNA."
  },
  {
    id: 16,
    question: "What is a palindromic nucleotide sequence in DNA?",
    answer: "A sequence of base pairs that reads the same on the two strands when orientation of reading is kept the same."
  },
  {
    id: 17,
    question: "What is the specific palindromic recognition sequence for EcoRI?",
    answer: "5' - GAATTC - 3' and 3' - CTTAAG - 5'."
  },
  {
    id: 18,
    question: "What are sticky ends?",
    answer: "Overhanging single-stranded stretches left on DNA after being cut slightly away from the centre of a palindromic site by restriction enzymes."
  },
  {
    id: 19,
    question: "Which enzyme is used to join the sticky ends of DNA molecules together?",
    answer: "DNA ligase."
  },

  // ─── GEL ELECTROPHORESIS ─────────────────────────────────────────────────────
  {
    id: 20,
    question: "What is the basic principle of gel electrophoresis?",
    answer: "Separating negatively charged DNA fragments by forcing them to move towards the anode under an electric field."
  },
  {
    id: 21,
    question: "What is the most commonly used matrix in gel electrophoresis and what is its source?",
    answer: "Agarose, a natural polymer extracted from seaweeds."
  },
  {
    id: 22,
    question: "On what basis does agarose gel separate DNA fragments?",
    answer: "Based on their size through the sieving effect provided by the agarose matrix (smaller fragments move farther)."
  },
  {
    id: 23,
    question: "Which chemical compound and light source are required to visualize separated DNA fragments on an agarose gel?",
    answer: "Ethidium bromide (EtBr) followed by exposure to UV radiation."
  },
  {
    id: 24,
    question: "What color do DNA bands appear as when stained with EtBr and exposed to UV light?",
    answer: "Bright orange bands."
  },
  {
    id: 25,
    question: "Define elution.",
    answer: "The process of cutting out separated bands of DNA from the agarose gel and extracting them from the gel piece."
  },

  // ─── CLONING VECTORS ─────────────────────────────────────────────────────────
  {
    id: 26,
    question: "What are the essential features required to facilitate cloning into a vector?",
    answer: "Origin of replication (ori), a selectable marker, cloning sites, and preferably a small size."
  },
  {
    id: 27,
    question: "Besides initiating replication, what is the other crucial function of the 'ori' sequence?",
    answer: "It controls the copy number of the linked DNA."
  },
  {
    id: 28,
    question: "What is a selectable marker?",
    answer: "A gene that helps in identifying and eliminating non-transformants and selectively permitting the growth of transformants."
  },
  {
    id: 29,
    question: "List four common selectable markers for E. coli.",
    answer: "Genes encoding resistance to ampicillin, chloramphenicol, tetracycline, or kanamycin."
  },
  {
    id: 30,
    question: "What are the two antibiotic resistance genes present in the plasmid vector pBR322?",
    answer: "ampR (ampicillin resistance) and tetR (tetracycline resistance)."
  },
  {
    id: 31,
    question: "In pBR322, which two restriction sites are located within the tetR gene?",
    answer: "BamH I and Sal I."
  },
  {
    id: 32,
    question: "In pBR322, what does the 'rop' gene code for?",
    answer: "It codes for the proteins involved in the replication of the plasmid."
  },
  {
    id: 33,
    question: "What is insertional inactivation?",
    answer: "The loss of a specific gene function (like antibiotic resistance or enzyme production) due to the insertion of a foreign DNA fragment into its coding sequence."
  },
  {
    id: 34,
    question: "In blue-white screening, what enzyme is insertionally inactivated by the foreign DNA?",
    answer: "Beta-galactosidase."
  },
  {
    id: 35,
    question: "In blue-white screening, what colors do recombinant and non-recombinant colonies produce?",
    answer: "Recombinants do not produce color (white colonies); non-recombinants produce blue colonies."
  },
  {
    id: 36,
    question: "Which pathogen is a natural genetic engineer of dicot plants, delivering a piece of DNA called T-DNA?",
    answer: "Agrobacterium tumefaciens."
  },
  {
    id: 37,
    question: "Which modified viruses are commonly used to deliver desirable genes into animal cells?",
    answer: "Disarmed retroviruses."
  },

  // ─── COMPETENT HOSTS & DNA TRANSFER ──────────────────────────────────────────
  {
    id: 38,
    question: "Why can't DNA easily pass through cell membranes?",
    answer: "Because it is a hydrophilic molecule."
  },
  {
    id: 39,
    question: "What specific chemical treatment is used to make bacteria competent to take up DNA?",
    answer: "Treating them with a specific concentration of a divalent cation, such as calcium."
  },
  {
    id: 40,
    question: "Describe the steps of the heat shock method used for bacterial transformation.",
    answer: "Incubate cells with recombinant DNA on ice, briefly place them at 42 degrees Celsius (heat shock), and then put them back on ice."
  },
  {
    id: 41,
    question: "What is micro-injection?",
    answer: "A method where recombinant DNA is directly injected into the nucleus of an animal cell."
  },
  {
    id: 42,
    question: "What is biolistics or the gene gun method?",
    answer: "A method suitable for plants where cells are bombarded with high-velocity micro-particles of gold or tungsten coated with DNA."
  },

  // ─── PROCESSES OF RECOMBINANT DNA TECHNOLOGY ─────────────────────────────────
  {
    id: 43,
    question: "Which enzymes are used to break open bacterial, plant, and fungal cells respectively during DNA isolation?",
    answer: "Lysozyme for bacteria, cellulase for plant cells, and chitinase for fungus."
  },
  {
    id: 44,
    question: "Which enzymes are used to remove RNA and proteins during DNA purification?",
    answer: "Ribonuclease for RNA and protease for proteins."
  },
  {
    id: 45,
    question: "What chemical is added to ultimately precipitate purified DNA out of solution?",
    answer: "Chilled ethanol."
  },
  {
    id: 46,
    question: "What does PCR stand for?",
    answer: "Polymerase Chain Reaction."
  },
  {
    id: 47,
    question: "What components are required for the PCR reaction?",
    answer: "Template DNA, two sets of primers, nucleotides, and a thermostable DNA polymerase."
  },
  {
    id: 48,
    question: "What is the specific role of primers in PCR?",
    answer: "They are small chemically synthesised oligonucleotides that are complementary to the regions of DNA and serve as starting points for synthesis."
  },
  {
    id: 49,
    question: "Name the three steps in each cycle of PCR.",
    answer: "Denaturation, Annealing, and Extension."
  },
  {
    id: 50,
    question: "Approximately what temperatures are required for Denaturation, Annealing, and Extension in PCR?",
    answer: "Denaturation around 94 degrees C, Annealing around 50-60 degrees C, and Extension around 72 degrees C."
  },
  {
    id: 51,
    question: "Approximately how many times is a DNA segment amplified after 30 cycles of PCR?",
    answer: "1 billion times."
  },
  {
    id: 52,
    question: "Which thermostable DNA polymerase is used in PCR and from which bacterium is it isolated?",
    answer: "Taq polymerase, isolated from the bacterium Thermus aquaticus."
  },
  {
    id: 53,
    question: "What is a bioreactor?",
    answer: "A large vessel (large volumes of 100-1000 litres) in which raw materials are biologically converted into specific products using microbial plant, animal or human cells."
  },
  {
    id: 54,
    question: "What is the most commonly used type of bioreactor?",
    answer: "The stirred-tank reactor."
  },
  {
    id: 55,
    question: "What is the main advantage of a stirred-tank bioreactor?",
    answer: "The stirrer facilitates even mixing and oxygen availability throughout the bioreactor."
  },
  {
    id: 56,
    question: "How does a sparged stirred-tank bioreactor differ in terms of oxygen transfer?",
    answer: "Sterile air bubbles are sparged through it, significantly increasing the surface area for oxygen transfer."
  },
  {
    id: 57,
    question: "List the six control systems typically attached to a bioreactor.",
    answer: "An agitator system, oxygen delivery system, foam control system, temperature control system, pH control system, and sampling ports."
  },
  {
    id: 58,
    question: "What is a continuous culture system?",
    answer: "A system where used medium is drained out from one side while fresh medium is added from the other to maintain cells in their physiologically most active log/exponential phase."
  },
  {
    id: 59,
    question: "What two processes collectively make up downstream processing?",
    answer: "Separation and purification."
  },
  {
    id: 60,
    question: "Why is downstream processing so critical?",
    answer: "Because biological products must be purified and separated to a suitable quality before they can be formulated and marketed."
  },
  {
    id: 61,
    question: "What must happen to a product after downstream processing and before it can be marketed?",
    answer: "It has to be formulated with suitable preservatives and undergo thorough clinical trials (in case of drugs) and strict quality control testing."
  }
];

export default Biotechprinciples;