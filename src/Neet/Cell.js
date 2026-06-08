const Cell =[
  
  // Introduction & History
  { id: 1, question: "What are two traditional microbe-mediated biotechnology processes?", answer: "Making curd and baking bread." },
  { id: 2, question: "What does EFB stand for?", answer: "European Federation of Biotechnology." },
  { id: 3, question: "Year Herbert Boyer was born?", answer: "1936." },
  { id: 4, question: "Bacterium Boyer used to study restriction enzymes?", answer: "E. coli." },
  { id: 5, question: "What do restriction enzymes leave on cut DNA strands?", answer: "Sticky ends." },
  { id: 6, question: "Freely floating, replicating DNA ringlets in bacteria?", answer: "Plasmids." },
  { id: 7, question: "Scientists who constructed the first recombinant DNA?", answer: "Stanley Cohen and Herbert Boyer." },
  { id: 8, question: "Year the first recombinant DNA was constructed?", answer: "1972." },
  { id: 9, question: "Bacterium native plasmid used for first recombinant DNA?", answer: "Salmonella typhimurium." },
  
  // Principles of Biotechnology
  { id: 10, question: "Two core techniques of modern biotechnology?", answer: "Genetic engineering and bioprocess engineering." },
  { id: 11, question: "Technique that alters the chemistry of genetic material?", answer: "Genetic engineering." },
  { id: 12, question: "Engineering focused on maintaining a sterile microbial ambience?", answer: "Bioprocess engineering." },
  { id: 13, question: "Main genetic advantage of sexual reproduction?", answer: "It permits variation." },
  { id: 14, question: "Specific DNA sequence that initiates replication?", answer: "Origin of replication (ori)." },
  { id: 15, question: "Term for making multiple identical copies of template DNA?", answer: "Cloning." },
  { id: 16, question: "Common term for restriction enzymes?", answer: "Molecular scissors." },
  { id: 17, question: "Enzyme that pastes or joins cut DNA ends?", answer: "DNA ligase." },
  { id: 18, question: "DNA created in vitro by linking different DNA pieces?", answer: "Recombinant DNA." },
  
  // Restriction Enzymes
  { id: 19, question: "Year restriction enzymes were first isolated?", answer: "1963." },
  { id: 20, question: "First restriction endonuclease isolated?", answer: "Hind II." },
  { id: 21, question: "Number of base pairs in Hind II's recognition sequence?", answer: "Six." },
  { id: 22, question: "Number of restriction enzymes discovered to date?", answer: "Over 900." },
  { id: 23, question: "What does the 'Eco' in EcoRI stand for?", answer: "Escherichia coli." },
  { id: 24, question: "What does the 'R' in EcoRI represent?", answer: "The strain (RY 13)." },
  { id: 25, question: "Enzymes that remove nucleotides from DNA ends?", answer: "Exonucleases." },
  { id: 26, question: "Enzymes that cut at specific positions within DNA?", answer: "Endonucleases." },
  { id: 27, question: "DNA sequence reading the same forward and backward?", answer: "Palindromic sequence." },
  { id: 28, question: "Specific recognition sequence for EcoRI?", answer: "GAATTC." },
  { id: 29, question: "Type of bonds formed between sticky ends?", answer: "Hydrogen bonds." },
  
  // Gel Electrophoresis
  { id: 30, question: "Technique used to separate cut DNA fragments?", answer: "Gel electrophoresis." },
  { id: 31, question: "Electric charge of DNA molecules?", answer: "Negative." },
  { id: 32, question: "Electrode towards which DNA moves in electrophoresis?", answer: "Anode (positive electrode)." },
  { id: 33, question: "Most commonly used matrix for gel electrophoresis?", answer: "Agarose." },
  { id: 34, question: "Natural source of agarose?", answer: "Sea weeds." },
  { id: 35, question: "Chemical used to stain DNA in gel electrophoresis?", answer: "Ethidium bromide." },
  { id: 36, question: "Light required to view stained DNA bands?", answer: "UV radiation." },
  { id: 37, question: "Color of DNA bands under UV light?", answer: "Bright orange." },
  { id: 38, question: "Process of extracting cut DNA from the agarose gel?", answer: "Elution." },

  // Vectors & Selectable Markers
  { id: 39, question: "Why are bacteriophages good vectors?", answer: "They have very high copy numbers." },
  { id: 40, question: "Vector feature controlling linked DNA copy number?", answer: "Origin of replication (ori)." },
  { id: 41, question: "Vector gene that identifies and eliminates non-transformants?", answer: "Selectable marker." },
  { id: 42, question: "Procedure of introducing DNA into a host bacterium?", answer: "Transformation." },
  { id: 43, question: "Four common selectable markers for E. coli?", answer: "Ampicillin, chloramphenicol, tetracycline, kanamycin." },
  { id: 44, question: "Famous E. coli cloning vector shown in NCERT?", answer: "pBR322." },
  { id: 45, question: "What does 'rop' code for in vector pBR322?", answer: "Proteins involved in plasmid replication." },
  { id: 46, question: "Restriction site within the tetracycline resistance gene of pBR322?", answer: "BamH I." },
  { id: 47, question: "Inactivation of a gene due to foreign DNA insertion?", answer: "Insertional inactivation." },
  { id: 48, question: "Color of non-recombinant colonies with a chromogenic substrate?", answer: "Blue." },
  { id: 49, question: "Color of recombinant colonies with a chromogenic substrate?", answer: "Colorless (no color)." },
  { id: 50, question: "Enzyme inactivated for blue-white colony selection?", answer: "β-galactosidase." },
  { id: 51, question: "Dicot plant pathogen used as a cloning vector?", answer: "Agrobacterium tumifaciens." },
  { id: 52, question: "Piece of DNA delivered by Agrobacterium?", answer: "T-DNA." },
  { id: 53, question: "Animal viruses disarmed to deliver desirable genes?", answer: "Retroviruses." },

  // Competent Host & DNA Insertion
  { id: 54, question: "Divalent cation used to make bacteria competent?", answer: "Calcium." },
  { id: 55, question: "Temperature required for the heat shock method?", answer: "42°C." },
  { id: 56, question: "Method of directly injecting DNA into an animal cell nucleus?", answer: "Micro-injection." },
  { id: 57, question: "Method of bombarding plant cells with DNA-coated particles?", answer: "Biolistics or gene gun." },
  { id: 58, question: "Metals used to coat DNA in a gene gun?", answer: "Gold or tungsten." },

  // Isolation of Genetic Material
  { id: 59, question: "Enzyme used to break open bacterial cells?", answer: "Lysozyme." },
  { id: 60, question: "Enzyme used to break open plant cells?", answer: "Cellulase." },
  { id: 61, question: "Enzyme used to break open fungal cells?", answer: "Chitinase." },
  { id: 62, question: "Enzyme used to remove RNA during DNA purification?", answer: "Ribonuclease." },
  { id: 63, question: "Enzyme used to remove proteins during DNA purification?", answer: "Protease." },
  { id: 64, question: "Chemical added to precipitate out purified DNA?", answer: "Chilled ethanol." },

  // PCR (Polymerase Chain Reaction)
  { id: 65, question: "What does PCR stand for?", answer: "Polymerase Chain Reaction." },
  { id: 66, question: "Three steps of one PCR cycle?", answer: "Denaturation, Annealing, and Extension." },
  { id: 67, question: "Small, chemically synthesised oligonucleotides used in PCR?", answer: "Primers." },
  { id: 68, question: "Thermostable enzyme used for DNA extension in PCR?", answer: "Taq polymerase." },
  { id: 69, question: "Bacterium from which Taq polymerase is isolated?", answer: "Thermus aquaticus." },
  { id: 70, question: "Number of copies made after 30 cycles of PCR?", answer: "Approximately 1 billion." },

  // Bioreactors & Downstream Processing
  { id: 71, question: "Protein encoding gene expressed in a heterologous host?", answer: "Recombinant protein." },
  { id: 72, question: "Vessels handling 100-1000 litres of biological culture?", answer: "Bioreactors." },
  { id: 73, question: "Most commonly used type of bioreactor?", answer: "Stirring type." },
  { id: 74, question: "What does a bioreactor stirrer primarily facilitate?", answer: "Even mixing and oxygen availability." },
  { id: 75, question: "Processes of separation and purification before marketing?", answer: "Downstream processing." },

  // Additional Core Concepts
  { id: 76, question: "What are the three basic steps in genetically modifying an organism?", answer: "1. Identification of DNA with desirable genes\n2. Introduction of identified DNA into host\n3. Maintenance of introduced DNA and transfer to progeny." },
  { id: 77, question: "What does Ti stand for in Ti plasmid?", answer: "Tumor Inducing — it's the plasmid of Agrobacterium tumifaciens." },
  { id: 78, question: "Why do smaller DNA fragments travel farther in gel electrophoresis?", answer: "Smaller fragments face less resistance from the agarose gel matrix, so they migrate farther." },
  { id: 79, question: "Why must bacteria be made competent before transformation?", answer: "DNA is hydrophilic and cannot pass through the cell membrane naturally, so bacteria need chemical treatment to take up DNA." },
  { id: 80, question: "How do recombinants differ from non-recombinants on antibiotic plates?", answer: "Recombinants grow on ampicillin but NOT tetracycline. Non-recombinants grow on both." },
  { id: 81, question: "What is a continuous culture system in bioreactors?", answer: "Used medium is drained from one side while fresh medium is added from the other, keeping cells in exponential growth phase." },
  { id: 82, question: "What year was Hind II first characterized?", answer: "1968 — five years after restriction enzymes were first isolated in 1963." }
];
export default Cell;