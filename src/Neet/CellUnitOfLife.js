const CellUnitOfLife = [
  // ─── WHAT IS A CELL & CELL THEORY ───────────────────────────────────────────
  {
    id: 1,
    question: "What is the fundamental structural and functional unit of all living organisms?",
    answer: "The cell, as anything less than a complete cell structure does not ensure independent living." /* */
  },
  {
    id: 2,
    question: "Who first saw and documented a live cell, and who later discovered the nucleus?",
    answer: "Anton Von Leeuwenhoek first saw and described a live cell. Robert Brown later discovered the nucleus." /* */
  },
  {
    id: 3,
    question: "What were the respective discoveries of Schleiden and Schwann that led to the cell theory?",
    answer: "Schleiden observed plants are composed of cells. Schwann reported animal cells have a plasma membrane and plant cells uniquely possess a cell wall." /* */
  },
  {
    id: 4,
    question: "What modification did Rudolf Virchow make to the cell theory in 1855?",
    answer: "He explained that cells divide and new cells are formed from pre-existing cells (Omnis cellula-e cellula)." /* */
  },

  // ─── AN OVERVIEW OF CELL (SHAPES & SIZES) ───────────────────────────────────
  {
    id: 5,
    question: "How do eukaryotic and prokaryotic cells fundamentally differ regarding their genetic material?",
    answer: "Eukaryotic cells possess a membrane-bound nucleus containing chromosomes. Prokaryotic cells lack a membrane-bound nucleus." /* */
  },
  {
    id: 6,
    question: "In which specific cellular locations are non-membrane bound ribosomes found?",
    answer: "They are found in the cytoplasm, within chloroplasts, within mitochondria, and on the rough endoplasmic reticulum." /* */
  },
  {
    id: 7,
    question: "What are the specific sizes of a typical eukaryotic cell, viruses, and PPLO according to NCERT?",
    answer: "Typical eukaryotic cell: 10-20 µm. Viruses: 0.02-0.2 µm. PPLO: about 0.1 µm." /* */
  },
  {
    id: 8,
    question: "What are the sizes of Mycoplasmas, typical bacteria, and human red blood cells?",
    answer: "Mycoplasmas are 0.3 µm in length, typical bacteria are 1-2 µm, and human red blood cells are about 7.0 µm in diameter." /* */
  },
  {
    id: 9,
    question: "Which cell is known as the largest isolated single cell, and which are among the longest?",
    answer: "The egg of an ostrich is the largest isolated single cell. Nerve cells are some of the longest cells." /* */
  },
  {
    id: 10,
    question: "Match these cells to their shapes: RBCs, WBCs, columnar epithelial, mesophyll, and tracheids.",
    answer: "RBCs: round/biconcave. WBCs: amoeboid. Columnar epithelial: long/narrow. Mesophyll: round/oval. Tracheids: elongated." /* */
  },

  // ─── PROKARYOTIC CELLS ──────────────────────────────────────────────────────
  {
    id: 11,
    question: "Name the four basic shapes of bacteria.",
    answer: "Bacillus (rod-like), coccus (spherical), vibrio (comma-shaped), and spirillum (spiral)." /* */
  },
  {
    id: 12,
    question: "What forms the basis of classifying bacteria into Gram positive and Gram negative groups?",
    answer: "Differences in their cell envelopes and the manner in which they respond to the Gram staining procedure." /* */
  },
  {
    id: 13,
    question: "What are plasmids and what unique phenotypic character do they often confer?",
    answer: "Plasmids are small circular DNA outside the genomic DNA. They often confer unique features like resistance to antibiotics." /* */
  },
  {
    id: 14,
    question: "What are the three layers of the bacterial cell envelope from outermost to innermost?",
    answer: "The outermost glycocalyx, followed by the cell wall, and then the plasma membrane." /* */
  },
  {
    id: 15,
    question: "How do the slime layer and capsule of the bacterial glycocalyx differ?",
    answer: "The glycocalyx forms a loose sheath called the slime layer in some bacteria, while in others it is thick and tough, forming the capsule." /* */
  },
  {
    id: 16,
    question: "What is a mesosome and what forms does it take in prokaryotes?",
    answer: "A specialised membranous structure formed by extensions of the plasma membrane into the cell. It forms vesicles, tubules, and lamellae." /* */
  },
  {
    id: 17,
    question: "List the primary functions of the prokaryotic mesosome.",
    answer: "It helps in cell wall formation, DNA replication and distribution, respiration, secretion, and increasing membrane surface area and enzymatic content." /* */
  },
  {
    id: 18,
    question: "What are chromatophores?",
    answer: "Membranous extensions into the cytoplasm containing pigments, found in some prokaryotes like cyanobacteria." /* */
  },
  {
    id: 19,
    question: "What are the three distinct parts of a bacterial flagellum?",
    answer: "The filament, hook, and basal body. The filament is the longest portion extending outwards." /* */
  },
  {
    id: 20,
    question: "What are pili and fimbriae in bacteria?",
    answer: "Surface structures not playing a role in motility. Pili are tubular proteins, and fimbriae are bristle-like fibres helping attachment to rocks or host tissues." /* */
  },
  {
    id: 21,
    question: "What are the subunits and overall size of the prokaryotic ribosome?",
    answer: "They are about 15 nm by 20 nm. The 50S and 30S subunits form the 70S prokaryotic ribosome." /* */
  },
  {
    id: 22,
    question: "What is a polysome or polyribosome?",
    answer: "A chain formed when several ribosomes attach to a single mRNA to translate it into proteins." /* */
  },
  {
    id: 23,
    question: "What are inclusion bodies in prokaryotes? Give three examples.",
    answer: "Non-membrane bound structures storing reserve material freely in the cytoplasm. Examples: phosphate granules, cyanophycean granules, and glycogen granules." /* */
  },

  // ─── EUKARYOTIC CELLS & MEMBRANE ────────────────────────────────────────────
  {
    id: 24,
    question: "Which cell organelles are uniquely present in plant cells but absent in animal cells?",
    answer: "Plant cells uniquely possess cell walls, plastids, and a large central vacuole. Animal cells have centrioles, which plants lack." /* */
  },
  {
    id: 25,
    question: "Who proposed the widely accepted fluid mosaic model of the cell membrane and in what year?",
    answer: "Singer and Nicolson in 1972." /* */
  },
  {
    id: 26,
    question: "According to the fluid mosaic model, how are lipids arranged in the cell membrane?",
    answer: "Phospholipids are arranged in a bilayer with polar heads towards the outer sides and hydrophobic tails towards the inner protected part." /* */
  },
  {
    id: 27,
    question: "What is the approximate composition of protein and lipid in a human erythrocyte membrane?",
    answer: "The membrane of the erythrocyte has approximately 52 per cent protein and 40 per cent lipids." /* */
  },
  {
    id: 28,
    question: "How are integral and peripheral membrane proteins differentiated based on their ease of extraction?",
    answer: "Peripheral proteins lie on the membrane surface, while integral proteins are partially or totally buried in the membrane." /* */
  },
  {
    id: 29,
    question: "How do neutral solutes move across the plasma membrane without any energy requirement?",
    answer: "By simple diffusion along the concentration gradient, from a higher concentration to a lower one." /* */
  },
  {
    id: 30,
    question: "What is the specific term for the movement of water by diffusion across a selectively permeable membrane?",
    answer: "Osmosis." /* */
  },
  {
    id: 31,
    question: "How are ions transported across the membrane against their concentration gradient?",
    answer: "Via an energy-dependent process utilising ATP, called active transport (e.g., Na+/K+ Pump)." /* */
  },
  {
    id: 32,
    question: "What is the biochemical composition of the algal cell wall?",
    answer: "Algae cell walls are made of cellulose, galactans, mannans, and minerals like calcium carbonate." /* */
  },
  {
    id: 33,
    question: "What is the biochemical composition of the cell wall in higher plants?",
    answer: "It consists of cellulose, hemicellulose, pectins and proteins." /* */
  },
  {
    id: 34,
    question: "What is the middle lamella and its primary component?",
    answer: "A layer mainly consisting of calcium pectate which holds or glues the different neighbouring plant cells together." /* */
  },
  {
    id: 35,
    question: "What are the structures that traverse the middle lamella and cell wall?",
    answer: "Plasmodesmata, which connect the cytoplasm of neighbouring plant cells." /* */
  },

  // ─── ENDOMEMBRANE SYSTEM ────────────────────────────────────────────────────
  {
    id: 36,
    question: "Which cellular organelles constitute the endomembrane system?",
    answer: "The endoplasmic reticulum (ER), golgi complex, lysosomes, and vacuoles, because their functions are coordinated." /* */
  },
  {
    id: 37,
    question: "How do the functions of Rough ER and Smooth ER differ?",
    answer: "Rough ER is actively involved in protein synthesis and secretion. Smooth ER is the major site for synthesis of lipids and steroidal hormones." /* */
  },
  {
    id: 38,
    question: "What are the dimensions of the disc-shaped sacs in the Golgi apparatus?",
    answer: "The flat cisternae have a diameter of 0.5µm to 1.0µm and are stacked parallel to each other." /* */
  },
  {
    id: 39,
    question: "What are the distinct faces of the Golgi apparatus cisternae?",
    answer: "The convex cis or the forming face, and the concave trans or the maturing face." /* */
  },
  {
    id: 40,
    question: "What is the principal function of the Golgi apparatus?",
    answer: "Packaging materials to be delivered intra-cellularly or secreted outside. It is the important site of formation of glycoproteins and glycolipids." /* */
  },
  {
    id: 41,
    question: "What do lysosomes contain and at what pH are they optimally active?",
    answer: "They are rich in hydrolytic enzymes (lipases, proteases, carbohydrases) that are optimally active at the acidic pH." /* */
  },
  {
    id: 42,
    question: "What is the tonoplast and what is its role in plant cells?",
    answer: "The single membrane bounding the vacuole. It facilitates the transport of ions and materials against concentration gradients into the vacuole." /* */
  },
  {
    id: 43,
    question: "What does the plant cell vacuole typically contain?",
    answer: "Water, sap, excretory product and other materials not useful for the cell." /* */
  },

  // ─── MITOCHONDRIA & PLASTIDS ────────────────────────────────────────────────
  {
    id: 44,
    question: "What are the typical dimensions of a sausage-shaped mitochondrion?",
    answer: "It has a diameter of 0.2-1.0µm (average 0.5µm) and a length of 1.0-4.1µm." /* */
  },
  {
    id: 45,
    question: "What is the structural arrangement of the inner membrane in mitochondria?",
    answer: "The inner membrane forms a number of infoldings called the cristae towards the matrix to increase surface area." /* */
  },
  {
    id: 46,
    question: "What specific components are found in the mitochondrial matrix?",
    answer: "A single circular DNA molecule, a few RNA molecules, 70S ribosomes, and components required for protein synthesis." /* */
  },
  {
    id: 47,
    question: "Why are mitochondria specifically referred to as the 'powerhouses' of the cell?",
    answer: "They are sites of aerobic respiration and produce cellular energy in the form of ATP." /* */
  },
  {
    id: 48,
    question: "Name the three types of plastids based on the pigments they contain.",
    answer: "Chloroplasts (chlorophyll/carotenoids), chromoplasts (fat-soluble carotenoids), and leucoplasts (colourless nutrient-storing plastids)." /* */
  },
  {
    id: 49,
    question: "Name the three types of leucoplasts and the specific nutrients they store.",
    answer: "Amyloplasts store carbohydrates (starch), elaioplasts store oils and fats, and aleuroplasts store proteins." /* */
  },
  {
    id: 50,
    question: "What are the typical dimensions and number of chloroplasts in a mesophyll cell?",
    answer: "They have a length of 5-10µm and width of 2-4µm. Their number ranges from 20 to 40 per mesophyll cell." /* */
  },
  {
    id: 51,
    question: "What are thylakoids, grana, and stroma lamellae in a chloroplast?",
    answer: "Thylakoids are flattened membranous sacs. Grana are stacked thylakoids. Stroma lamellae are flat tubules connecting thylakoids of different grana." /* */
  },
  {
    id: 52,
    question: "What is the specific function of the enzymes found in the chloroplast stroma?",
    answer: "They are required for the synthesis of carbohydrates and proteins." /* */
  },
  {
    id: 53,
    question: "What specific genetic and protein-synthesising components are found in the chloroplast stroma?",
    answer: "It contains small, double-stranded circular DNA molecules and 70S ribosomes." /* */
  },

  // ─── RIBOSOMES, CYTOSKELETON & LOCOMOTION ───────────────────────────────────
  {
    id: 54,
    question: "What are the subunits of the 80S eukaryotic ribosome?",
    answer: "The 60S and 40S subunits." /* */
  },
  {
    id: 55,
    question: "What does 'S' stand for in ribosome subunits like 70S or 80S?",
    answer: "Svedberg's Unit, which stands for the sedimentation coefficient, indirectly acting as a measure of density and size." /* */
  },
  {
    id: 56,
    question: "What is the primary cellular function of ribosomes?",
    answer: "They are the site of protein synthesis." /* */
  },
  {
    id: 57,
    question: "What structures make up the eukaryotic cytoskeleton?",
    answer: "An elaborate network of filamentous proteinaceous structures consisting of microtubules, microfilaments, and intermediate filaments." /* */
  },
  {
    id: 58,
    question: "What are the three primary functions of the cytoskeleton in a cell?",
    answer: "Mechanical support, motility, and maintenance of the shape of the cell." /* */
  },
  {
    id: 59,
    question: "How do cilia and flagella primarily differ in structure and function?",
    answer: "Cilia are smaller, oar-like structures causing movement of the cell or surrounding fluid. Flagella are comparatively longer and responsible for cell movement." /* */
  },
  {
    id: 60,
    question: "What is the internal microtubule arrangement of a eukaryotic cilium or flagellum axoneme?",
    answer: "The 9+2 array, possessing nine doublets of radially arranged peripheral microtubules and a pair of centrally located microtubules." /* */
  },
  {
    id: 61,
    question: "How are the centrioles arranged within a centrosome and what is their internal structure?",
    answer: "They lie perpendicular to each other with a cartwheel organisation. They are made of nine evenly spaced peripheral triplets of tubulin protein." /* */
  },

  // ─── NUCLEUS & CHROMOSOMES ──────────────────────────────────────────────────
  {
    id: 62,
    question: "What is the perinuclear space of the nucleus?",
    answer: "The 10 to 50 nm space between the two parallel membranes of the nuclear envelope, forming a barrier from the cytoplasm." /* */
  },
  {
    id: 63,
    question: "What is the structural relationship between the outer nuclear membrane and the endoplasmic reticulum?",
    answer: "The outer membrane usually remains continuous with the endoplasmic reticulum and also bears ribosomes on it." /* */
  },
  {
    id: 64,
    question: "What is the function of the nuclear pores present on the nuclear envelope?",
    answer: "They act as passages through which movement of RNA and protein molecules takes place in both directions between the nucleus and cytoplasm." /* */
  },
  {
    id: 65,
    question: "Name two mature eukaryotic cell types that completely lack a nucleus.",
    answer: "Erythrocytes of many mammals and sieve tube cells of vascular plants." /* */
  },
  {
    id: 66,
    question: "What is the nucleolus and its primary function?",
    answer: "A spherical, non-membrane bound structure within the nucleoplasm that serves as a site for active ribosomal RNA synthesis." /* */
  },
  {
    id: 67,
    question: "What components make up chromatin?",
    answer: "DNA, basic proteins called histones, some non-histone proteins, and RNA." /* */
  },
  {
    id: 68,
    question: "What is a kinetochore?",
    answer: "A disc-shaped structure present on the sides of the primary constriction, or centromere, of a chromosome." /* */
  },
  {
    id: 69,
    question: "How are chromosomes classified based on centromere position?",
    answer: "Metacentric (middle), sub-metacentric (slightly away), acrocentric (close to end), and telocentric (terminal centromere)." /* */
  },
  {
    id: 70,
    question: "What is a satellite in the context of a chromosome?",
    answer: "A small fragment appearance caused by non-staining secondary constrictions at a constant location on some chromosomes." /* */
  }

  
];

export default CellUnitOfLife;