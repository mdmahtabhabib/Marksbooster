const CellUnitOfLife = [

  // ─── WHAT IS A CELL & CELL THEORY ───────────────────────────────────────────
  {
    id: 1,
    question: "What is the fundamental structural and functional unit of all living organisms?",
    answer: "Cell; anything less than a complete cell cannot ensure independent living."
  },
  {
    id: 2,
    question: "Who first saw a live cell and who discovered the nucleus?",
    answer: "Anton Von Leeuwenhoek — first live cell; Robert Brown — nucleus."
  },
  {
    id: 3,
    question: "What did Schleiden (1838) and Schwann (1839) each contribute to cell theory?",
    answer: "Schleiden: all plants composed of cells. Schwann: animal cells have plasma membrane; cell wall is unique to plant cells."
  },
  {
    id: 4,
    question: "What modification did Rudolf Virchow (1855) make to cell theory?",
    answer: "Cells divide; new cells form from pre-existing cells (Omnis cellula-e cellula)."
  },
  {
    id: 5,
    question: "What are the two statements of cell theory as understood today?",
    answer: "(i) All living organisms composed of cells and products of cells. (ii) All cells arise from pre-existing cells."
  },

  // ─── AN OVERVIEW OF CELL ─────────────────────────────────────────────────────
  {
    id: 6,
    question: "How do eukaryotic and prokaryotic cells fundamentally differ regarding their genetic material?",
    answer: "Eukaryotic: membrane-bound nucleus with chromosomes. Prokaryotic: no membrane-bound nucleus."
  },
  {
    id: 7,
    question: "What is the cytoplasm and what is its significance?",
    answer: "Semi-fluid matrix filling the cell; main arena of cellular activities in both plant and animal cells."
  },
  {
    id: 8,
    question: "In which specific cellular locations are ribosomes found?",
    answer: "Cytoplasm, chloroplasts, mitochondria, and on rough ER."
  },
  {
    id: 9,
    question: "What non-membrane bound organelle is unique to animal cells and what does it do?",
    answer: "Centrosome; helps in cell division."
  },
  {
    id: 10,
    question: "What are the specific sizes of a typical eukaryotic cell, viruses, and PPLO?",
    answer: "Eukaryotic cell: 10–20 µm; Viruses: 0.02–0.2 µm; PPLO: ~0.1 µm."
  },
  {
    id: 11,
    question: "What are the sizes of Mycoplasmas, typical bacteria, and human RBCs?",
    answer: "Mycoplasmas: 0.3 µm; Bacteria: 1–2 µm; Human RBCs: ~7.0 µm diameter."
  },
  {
    id: 12,
    question: "Which is the largest isolated single cell and which are the longest cells?",
    answer: "Largest: ostrich egg. Longest: nerve cells."
  },
  {
    id: 13,
    question: "Match these cells to their shapes: RBCs, WBCs, columnar epithelial, mesophyll, tracheids.",
    answer: "RBCs: round/biconcave; WBCs: amoeboid; Columnar epithelial: long/narrow; Mesophyll: round/oval; Tracheids: elongated."
  },

  // ─── PROKARYOTIC CELLS ───────────────────────────────────────────────────────
  {
    id: 14,
    question: "Name the organisms that represent prokaryotic cells.",
    answer: "Bacteria, blue-green algae, mycoplasma, PPLO (Pleuro Pneumonia Like Organisms)."
  },
  {
    id: 15,
    question: "What are the four basic shapes of bacteria?",
    answer: "Bacillus (rod-like), coccus (spherical), vibrio (comma-shaped), spirillum (spiral)."
  },
  {
    id: 16,
    question: "What is the genetic material organisation in a prokaryotic cell?",
    answer: "Naked genomic DNA (single circular chromosome); no nuclear membrane; no well-defined nucleus."
  },
  {
    id: 17,
    question: "Which prokaryote lacks a cell wall? What surrounds the cell membrane in all others?",
    answer: "Mycoplasma lacks cell wall. All other prokaryotes have a cell wall surrounding the cell membrane."
  },
  {
    id: 18,
    question: "What are plasmids and what unique character do they often confer?",
    answer: "Small circular DNA outside genomic DNA; confer unique phenotypic characters, e.g., antibiotic resistance."
  },
  {
    id: 19,
    question: "What are the three layers of the bacterial cell envelope from outermost to innermost?",
    answer: "Glycocalyx → cell wall → plasma membrane."
  },
  {
    id: 20,
    question: "What forms the basis of Gram positive vs Gram negative classification?",
    answer: "Differences in cell envelopes and their response to Gram staining procedure."
  },
  {
    id: 21,
    question: "How do the slime layer and capsule of the bacterial glycocalyx differ?",
    answer: "Slime layer: loose sheath. Capsule: thick and tough form of glycocalyx."
  },
  {
    id: 22,
    question: "What is a mesosome, what forms does it take, and what are its functions?",
    answer: "Specialised infolding of plasma membrane; forms vesicles, tubules, lamellae. Functions: cell wall formation, DNA replication/distribution, respiration, secretion, increases membrane surface area."
  },
  {
    id: 23,
    question: "What are chromatophores?",
    answer: "Membranous extensions into cytoplasm containing pigments; found in some prokaryotes like cyanobacteria."
  },
  {
    id: 24,
    question: "What are the three parts of a bacterial flagellum?",
    answer: "Filament (longest, extends outward), hook, and basal body."
  },
  {
    id: 25,
    question: "What are pili and fimbriae in bacteria?",
    answer: "Surface structures; not involved in motility. Pili: elongated tubular protein structures. Fimbriae: bristle-like fibres; help attach bacteria to rocks or host tissues."
  },
  {
    id: 26,
    question: "What are the subunits and size of the prokaryotic ribosome?",
    answer: "70S ribosome (50S + 30S subunits); size ~15 nm × 20 nm."
  },
  {
    id: 27,
    question: "What is a polysome (polyribosome)?",
    answer: "Chain formed when several ribosomes attach to a single mRNA; translates mRNA into proteins."
  },
  {
    id: 28,
    question: "What are inclusion bodies? Give three examples.",
    answer: "Non-membrane bound reserve material in prokaryotic cytoplasm. E.g., phosphate granules, cyanophycean granules, glycogen granules."
  },
  {
    id: 29,
    question: "What are gas vacuoles and where are they found?",
    answer: "Inclusion bodies found in blue-green, purple, and green photosynthetic bacteria."
  },

  // ─── EUKARYOTIC CELLS ────────────────────────────────────────────────────────
  {
    id: 30,
    question: "Which structures are uniquely present in plant cells but absent in animal cells, and vice versa?",
    answer: "Plant only: cell wall, plastids, large central vacuole. Animal only: centrioles."
  },

  // ─── CELL MEMBRANE ───────────────────────────────────────────────────────────
  {
    id: 31,
    question: "When was the detailed structure of the cell membrane first studied and using which instrument?",
    answer: "1950s; electron microscope."
  },
  {
    id: 32,
    question: "How are phospholipids arranged in the cell membrane?",
    answer: "Bilayer; polar heads towards outer sides, hydrophobic tails towards the inner part."
  },
  {
    id: 33,
    question: "What is the protein and lipid composition of a human erythrocyte membrane?",
    answer: "~52% protein, ~40% lipids."
  },
  {
    id: 34,
    question: "How are integral and peripheral membrane proteins differentiated?",
    answer: "Peripheral: lie on membrane surface. Integral: partially or totally buried in the membrane."
  },
  {
    id: 35,
    question: "Who proposed the fluid mosaic model and when?",
    answer: "Singer and Nicolson, 1972."
  },
  {
    id: 36,
    question: "What does the fluid mosaic model state about membrane lipids and proteins?",
    answer: "Quasi-fluid nature of lipid enables lateral movement of proteins within the bilayer; this ability is measured as fluidity."
  },
  {
    id: 37,
    question: "What functions does the fluid nature of the membrane enable?",
    answer: "Cell growth, intercellular junction formation, secretion, endocytosis, cell division."
  },
  {
    id: 38,
    question: "How do neutral solutes move across the plasma membrane?",
    answer: "Simple diffusion along concentration gradient (higher to lower); no energy required — passive transport."
  },
  {
    id: 39,
    question: "What is osmosis?",
    answer: "Movement of water by diffusion across a selectively permeable membrane from higher to lower concentration."
  },
  {
    id: 40,
    question: "How do polar molecules cross the plasma membrane?",
    answer: "Require a carrier protein; cannot pass through nonpolar lipid bilayer on their own."
  },
  {
    id: 41,
    question: "What is active transport? Give an example.",
    answer: "Transport against concentration gradient (lower to higher); energy-dependent (ATP utilised). E.g., Na⁺/K⁺ Pump."
  },

  // ─── CELL WALL ───────────────────────────────────────────────────────────────
  {
    id: 42,
    question: "What are the functions of the plant cell wall?",
    answer: "Gives shape, protects from mechanical damage and infection, helps cell-to-cell interaction, provides barrier to undesirable macromolecules."
  },
  {
    id: 43,
    question: "What is the biochemical composition of algal cell wall vs higher plant cell wall?",
    answer: "Algae: cellulose, galactans, mannans, calcium carbonate. Higher plants: cellulose, hemicellulose, pectins, proteins."
  },
  {
    id: 44,
    question: "How does the primary cell wall differ from the secondary cell wall?",
    answer: "Primary wall: young cells, capable of growth. Secondary wall: formed on inner side (towards membrane) as cell matures."
  },
  {
    id: 45,
    question: "What is the middle lamella, its composition, and its role?",
    answer: "Layer of calcium pectate; holds/glues neighbouring plant cells together."
  },
  {
    id: 46,
    question: "What are plasmodesmata?",
    answer: "Channels traversing cell wall and middle lamella; connect cytoplasm of neighbouring plant cells."
  },

  // ─── ENDOMEMBRANE SYSTEM ─────────────────────────────────────────────────────
  {
    id: 47,
    question: "Which organelles form the endomembrane system and why?",
    answer: "ER, Golgi complex, lysosomes, vacuoles — their functions are coordinated."
  },
  {
    id: 48,
    question: "Why are mitochondria, chloroplasts, and peroxisomes NOT part of the endomembrane system?",
    answer: "Their functions are not coordinated with ER, Golgi, lysosomes, and vacuoles."
  },
  {
    id: 49,
    question: "What two compartments does ER divide the intracellular space into?",
    answer: "Luminal (inside ER) and extra-luminal (cytoplasm) compartments."
  },
  {
    id: 50,
    question: "How do RER and SER differ in structure and function?",
    answer: "RER: has ribosomes; active in protein synthesis and secretion. SER: no ribosomes; major site of lipid synthesis; synthesises steroidal hormones in animal cells."
  },
  {
    id: 51,
    question: "Who first observed the Golgi apparatus and when?",
    answer: "Camillo Golgi, 1898; observed densely stained reticular structures near the nucleus."
  },
  {
    id: 52,
    question: "What are the dimensions and arrangement of Golgi cisternae?",
    answer: "Flat disc-shaped sacs, 0.5–1.0 µm diameter; stacked parallel to each other."
  },
  {
    id: 53,
    question: "What are the two distinct faces of the Golgi apparatus?",
    answer: "Convex cis (forming) face and concave trans (maturing) face."
  },
  {
    id: 54,
    question: "What is the principal function of the Golgi apparatus?",
    answer: "Packaging materials for intra-cellular delivery or secretion; important site of glycoprotein and glycolipid formation."
  },
  {
    id: 55,
    question: "What do lysosomes contain and at what pH are they optimally active?",
    answer: "Hydrolytic enzymes (lipases, proteases, carbohydrases); optimally active at acidic pH. Can digest carbohydrates, proteins, lipids, nucleic acids."
  },
  {
    id: 56,
    question: "What is the tonoplast and what is its role in plant cells?",
    answer: "Single membrane bounding the vacuole; facilitates transport of ions/materials against concentration gradients into vacuole."
  },
  {
    id: 57,
    question: "What does the plant cell vacuole contain and how much cell volume can it occupy?",
    answer: "Water, sap, excretory products, other unwanted materials; can occupy up to 90% of cell volume."
  },
  {
    id: 58,
    question: "What is the role of contractile vacuole in Amoeba and food vacuoles in protists?",
    answer: "Contractile vacuole: osmoregulation and excretion. Food vacuoles: formed by engulfing food particles."
  },

  // ─── MITOCHONDRIA ────────────────────────────────────────────────────────────
  {
    id: 59,
    question: "What are the typical dimensions of a mitochondrion?",
    answer: "Diameter: 0.2–1.0 µm (avg 0.5 µm); length: 1.0–4.1 µm; sausage-shaped or cylindrical."
  },
  {
    id: 60,
    question: "Describe the membrane structure of mitochondria and its two compartments.",
    answer: "Double membrane-bound; outer membrane — smooth boundary; inner membrane — forms cristae (infoldings). Two compartments: outer and inner (matrix)."
  },
  {
    id: 61,
    question: "What specific components are found in the mitochondrial matrix?",
    answer: "Single circular DNA, few RNA molecules, 70S ribosomes, protein synthesis components."
  },
  {
    id: 62,
    question: "Why are mitochondria called powerhouses of the cell and how do they divide?",
    answer: "Sites of aerobic respiration; produce ATP. Divide by fission."
  },

  // ─── PLASTIDS ────────────────────────────────────────────────────────────────
  {
    id: 63,
    question: "In which organisms are plastids found?",
    answer: "All plant cells and euglenoides."
  },
  {
    id: 64,
    question: "Name the three types of plastids based on pigments.",
    answer: "Chloroplasts (chlorophyll + carotenoids), chromoplasts (fat-soluble carotenoids), leucoplasts (colourless, store nutrients)."
  },
  {
    id: 65,
    question: "What pigments do chromoplasts contain and what colours do they give?",
    answer: "Fat-soluble carotenoids — carotene, xanthophylls; give yellow, orange, or red colour."
  },
  {
    id: 66,
    question: "Name the three types of leucoplasts and what they store.",
    answer: "Amyloplasts: starch (e.g., potato). Elaioplasts: oils/fats. Aleuroplasts: proteins."
  },
  {
    id: 67,
    question: "What are the typical dimensions of chloroplasts and how many per cell?",
    answer: "Length: 5–10 µm; width: 2–4 µm. Chlamydomonas: 1/cell; mesophyll: 20–40/cell."
  },
  {
    id: 68,
    question: "What are thylakoids, grana, and stroma lamellae?",
    answer: "Thylakoids: flattened membranous sacs in stroma. Grana: stacked thylakoids. Stroma lamellae: flat tubules connecting thylakoids of different grana."
  },
  {
    id: 69,
    question: "What is found in the chloroplast stroma?",
    answer: "Enzymes for carbohydrate/protein synthesis, small double-stranded circular DNA, 70S ribosomes. Chlorophyll pigments are in thylakoids."
  },
  {
    id: 70,
    question: "How do chloroplast ribosomes compare to cytoplasmic ribosomes?",
    answer: "Chloroplast ribosomes: 70S (smaller). Cytoplasmic ribosomes: 80S (larger)."
  },

  // ─── RIBOSOMES ───────────────────────────────────────────────────────────────
  {
    id: 71,
    question: "Who first observed ribosomes under EM and when?",
    answer: "George Palade, 1953; observed as dense granular particles."
  },
  {
    id: 72,
    question: "What is the chemical composition of ribosomes?",
    answer: "RNA and proteins; not surrounded by any membrane."
  },
  {
    id: 73,
    question: "What are the subunits of 80S and 70S ribosomes?",
    answer: "80S: 60S + 40S subunits. 70S: 50S + 30S subunits."
  },
  {
    id: 74,
    question: "What does 'S' stand for in ribosome nomenclature?",
    answer: "Svedberg's Unit; sedimentation coefficient — indirectly measures density and size."
  },
  {
    id: 75,
    question: "What is a polysome and what is its function?",
    answer: "Several ribosomes attached to a single mRNA; translates mRNA into proteins."
  },

  // ─── CYTOSKELETON ────────────────────────────────────────────────────────────
  {
    id: 76,
    question: "What structures make up the cytoskeleton and what are its functions?",
    answer: "Microtubules, microfilaments, intermediate filaments. Functions: mechanical support, motility, maintenance of cell shape."
  },

  // ─── CILIA AND FLAGELLA ───────────────────────────────────────────────────────
  {
    id: 77,
    question: "How do cilia and flagella differ in structure and function?",
    answer: "Cilia: small, oar-like, move cell or surrounding fluid. Flagella: longer, responsible for cell movement. Both covered by plasma membrane."
  },
  {
    id: 78,
    question: "What is the axoneme and what is its microtubule arrangement?",
    answer: "Core of cilia/flagella; 9+2 array — nine doublets of peripheral microtubules + one central pair."
  },
  {
    id: 79,
    question: "Describe the radial spoke and linker arrangement in cilia/flagella.",
    answer: "Central sheath connects to one tubule of each peripheral doublet by radial spokes (nine total); peripheral doublets interconnected by linkers."
  },
  {
    id: 80,
    question: "From what structure do cilia and flagella emerge?",
    answer: "Centriole-like structure called the basal body."
  },

  // ─── CENTROSOME AND CENTRIOLES ───────────────────────────────────────────────
  {
    id: 81,
    question: "What is a centrosome and how are the two centrioles arranged?",
    answer: "Organelle with two cylindrical centrioles surrounded by pericentriolar material; centrioles lie perpendicular to each other."
  },
  {
    id: 82,
    question: "What is the internal structure of a centriole?",
    answer: "Cartwheel organisation; nine evenly spaced peripheral triplets of tubulin protein; adjacent triplets linked."
  },
  {
    id: 83,
    question: "What is the hub of a centriole?",
    answer: "Proteinaceous central part of proximal region; connected to peripheral triplets by radial protein spokes."
  },
  {
    id: 84,
    question: "What two structures do centrioles form and in which cell type?",
    answer: "Basal body of cilia/flagella; spindle apparatus during cell division in animal cells."
  },

  // ─── NUCLEUS ─────────────────────────────────────────────────────────────────
  {
    id: 85,
    question: "Who first described the nucleus (1831) and who named chromatin?",
    answer: "Robert Brown first described nucleus (1831). Flemming named nuclear material stained by basic dyes as chromatin."
  },
  {
    id: 86,
    question: "What is the interphase nucleus?",
    answer: "Nucleus of a non-dividing cell; contains extended nucleoprotein fibres (chromatin), nuclear matrix, and one or more nucleoli."
  },
  {
    id: 87,
    question: "What is the perinuclear space of the nuclear envelope?",
    answer: "10–50 nm space between the two parallel membranes of nuclear envelope; forms barrier between nucleus and cytoplasm."
  },
  {
    id: 88,
    question: "What is the structural relationship between the outer nuclear membrane and ER?",
    answer: "Outer nuclear membrane is continuous with ER and bears ribosomes on it."
  },
  {
    id: 89,
    question: "What are nuclear pores and what is their function?",
    answer: "Formed by fusion of two nuclear membranes; passages for bidirectional movement of RNA and proteins between nucleus and cytoplasm."
  },
  {
    id: 90,
    question: "Name two mature cell types that completely lack a nucleus.",
    answer: "Erythrocytes of many mammals and sieve tube cells of vascular plants."
  },
  {
    id: 91,
    question: "What is the nucleolus, its structure, and its primary function?",
    answer: "Spherical, non-membrane bound structure in nucleoplasm; site for active ribosomal RNA synthesis. Larger/more numerous in cells actively doing protein synthesis."
  },
  {
    id: 92,
    question: "What components make up chromatin?",
    answer: "DNA, histone proteins (basic), non-histone proteins, RNA."
  },
  {
    id: 93,
    question: "How much DNA does a single human cell contain and how is it distributed?",
    answer: "~2 metres of DNA distributed among 46 chromosomes (23 pairs)."
  },

  // ─── CHROMOSOMES ─────────────────────────────────────────────────────────────
  {
    id: 94,
    question: "What is a centromere and kinetochore?",
    answer: "Centromere: primary constriction on chromosome; holds two chromatids. Kinetochore: disc-shaped structure on sides of centromere."
  },
  {
    id: 95,
    question: "How are chromosomes classified based on centromere position?",
    answer: "Metacentric: middle centromere, equal arms. Sub-metacentric: slightly off-centre, unequal arms. Acrocentric: near end, one very short arm. Telocentric: terminal centromere."
  },
  {
    id: 96,
    question: "What is a satellite on a chromosome?",
    answer: "Small fragment appearance due to non-staining secondary constriction at a constant location on some chromosomes."
  },

  // ─── MICROBODIES ─────────────────────────────────────────────────────────────
  {
    id: 97,
    question: "What are microbodies?",
    answer: "Membrane-bound minute vesicles containing various enzymes; present in both plant and animal cells."
  }

];

export default CellUnitOfLife;