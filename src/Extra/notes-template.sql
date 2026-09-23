insert into short_notes (chapter_slug, kicker, subtitle, footer, sections)
values (
  'cell-the-building-block-of-life',
  'NCERT · Class 9 Science · Ch 2',
  'Quick revision · point-wise notes',
  'End of Chapter 2 · Cell notes',
  $json$
[
  {
    "title": "Introduction",
    "items": [
      {
        "title": "Origin of Life",
        "bullets": [
          "Life is believed to have originated in water, possibly in small water pools such as hot springs.",
          "Example: hot springs of Puga Valley, Ladakh — near boiling even in cold climate; similar to conditions of early Earth about 3.5 billion years ago.",
          "These environments were home to thermophiles — heat-loving unicellular bacteria.",
          "Birbal Sahni Institute, Lucknow: calcium carbonate deposits may have protected early molecules and helped form the first protective membrane."
        ]
      },
      {
        "title": "Cell",
        "bullets": [
          "Basic structural and functional unit of all living organisms.",
          "Unicellular = one cell (bacteria, yeast).",
          "Multicellular = many cells together (plants, humans)."
        ]
      },
      {
        "title": "Levels of Organisation",
        "bullets": [
          "Cells → tissues → organs → organ systems.",
          "Example: nasal cavity, trachea and lungs → respiratory system.",
          "The cell remains the fundamental unit throughout."
        ]
      }
    ]
  },
  {
    "title": "2.1 · How to Study Cells",
    "items": [
      {
        "title": "Limit of Resolution",
        "bullets": [
          "Ability to see two close points as separate and distinct.",
          "Human eye = about 0.1 mm at the near point (~25 cm).",
          "Cells are smaller, so microscopes are needed."
        ]
      },
      {
        "title": "Magnification",
        "bullets": [
          "A lens makes an object appear larger.",
          "Total magnification = eyepiece × objective.",
          "Example: 10X × 10X = 100X."
        ]
      },
      {
        "title": "Robert Hooke",
        "subtitle": "(1665)",
        "bullets": [
          "First to observe cells.",
          "Saw box-like compartments in cork and named them 'cells'."
        ]
      },
      {
        "title": "Microscopes & Cell Size",
        "bullets": [
          "Light microscope: uses visible light and objective lenses.",
          "Electron microscope: uses an electron beam and provides nanometre-scale detail.",
          "Cell size = field diameter ÷ number of cells across.",
          "1 mm = 1000 μm.",
          "Three important improvements: resolution, contrast and magnification."
        ]
      }
    ]
  },
  {
    "title": "2.2 · Structure of a Cell",
    "items": [
      {
        "title": "Cell Membrane (Plasma Membrane)",
        "bullets": [
          "Thin outer boundary that defines the cell's individuality.",
          "Selectively permeable — allows some substances and blocks others.",
          "About 7–10 nm thick; made of lipids and proteins."
        ]
      },
      {
        "title": "Diffusion & Osmosis",
        "bullets": [
          "Diffusion: net movement of particles from higher to lower concentration.",
          "Osmosis: diffusion of water across a selectively permeable membrane.",
          "Example: plant roots absorb water from soil by osmosis."
        ]
      },
      {
        "title": "Cell in Different Solutions",
        "table": {
          "headers": ["Solution", "Effect on cell"],
          "rows": [
            ["Isotonic\nsolute = inside", "No net change"],
            ["Hypotonic\nsolute < inside", "Water enters → cell swells"],
            ["Hypertonic\nsolute > inside", "Water leaves → cell shrinks"]
          ]
        }
      },
      {
        "title": "Fluid-Mosaic Model",
        "bullets": [
          "Explains membrane structure: a lipid bilayer with water-attracting heads outside and water-repelling tails inside.",
          "Molecules move sideways, making the membrane fluid.",
          "The arrangement resembles a mosaic.",
          "Proteins act as gatekeepers."
        ]
      },
      {
        "title": "Cell Wall",
        "bullets": [
          "Rigid, permeable covering outside the cell membrane.",
          "Present in plants, fungi and bacteria.",
          "Made of cellulose in plants.",
          "Provides shape and support.",
          "Animal cells do not have a cell wall."
        ]
      }
    ]
  },
  {
    "title": "2.3 · The Cell Interior",
    "items": [
      {
        "title": "Three Basic Parts",
        "bullets": [
          "Plasma membrane — outer boundary.",
          "Cytoplasm — semi-fluid, jelly-like substance containing organelles.",
          "Nucleus — prominent control body."
        ]
      },
      {
        "title": "Prokaryotic vs Eukaryotic",
        "bullets": [
          "Prokaryotic = no true nucleus and no membrane-bound organelles.",
          "Eukaryotic = true nucleus and membrane-bound organelles."
        ],
        "table": {
          "headers": ["Feature", "Prokaryotic", "Eukaryotic"],
          "rows": [
            ["Diameter", "1–10 μm", "10–100 μm"],
            ["True nucleus", "Absent", "Present"],
            ["Membrane-bound organelles", "Absent", "Present"],
            ["Cells", "Usually unicellular", "Uni/multicellular"]
          ]
        }
      },
      {
        "title": "Cytoskeleton & Cell Inclusions",
        "bullets": [
          "Cytoskeleton: network of fine fibres in eukaryotes.",
          "Provides support, shape, movement and internal transport.",
          "Cell inclusions may contain stored starch or crystals of calcium oxalate or silica."
        ]
      },
      {
        "title": "Acellular Agents",
        "bullets": [
          "Acellular agents have no cells and can be infectious.",
          "Viruses: genetic material + protein coat.",
          "Viroids: genetic material without a protein coat.",
          "Prions: misfolded proteins without genetic material."
        ]
      }
    ]
  },
  {
    "title": "Cell Organelles",
    "type": "sub",
    "items": [
      {
        "title": "Nucleus",
        "subtitle": "— control centre",
        "bullets": [
          "Controls all cell activities.",
          "Double-layered nuclear membrane with pores.",
          "Nucleolus makes ribosomal subunits.",
          "Contains chromosomes made of DNA and proteins.",
          "Genes are functional segments of DNA.",
          "In a non-dividing cell, DNA exists as thread-like chromatin; before division it coils into chromosomes.",
          "In prokaryotes, DNA lies in a region called the nucleoid.",
          "Mature RBCs lack a nucleus, providing more space for haemoglobin."
        ]
      },
      {
        "title": "Ribosomes",
        "subtitle": "— protein factories",
        "bullets": [
          "Tiny structures found free in cytoplasm or attached to ER.",
          "Site of protein synthesis."
        ]
      },
      {
        "title": "Endoplasmic Reticulum (ER)",
        "description": "Network of membranes involved in synthesis and transport of proteins, fats and some hormones.",
        "table": {
          "headers": ["Rough ER (RER)", "Smooth ER (SER)"],
          "rows": [
            ["Has ribosomes", "No ribosomes"],
            ["Protein synthesis & secretion", "Fat & hormone synthesis/storage"]
          ]
        }
      },
      {
        "title": "Golgi Apparatus",
        "subtitle": "— packaging centre",
        "bullets": [
          "Made of stacks of flattened sacs.",
          "Modifies, sorts and packages proteins and lipids into vesicles.",
          "Vesicles may be used for transport, secretion or lysosome formation.",
          "Discovered by Camillo Golgi."
        ]
      },
      {
        "title": "Lysosomes",
        "subtitle": "— clean-up system",
        "bullets": [
          "Single membrane-bound sacs filled with enzymes.",
          "Break down waste and worn-out organelles.",
          "Also digest proteins, carbohydrates and fats."
        ]
      },
      {
        "title": "Mitochondria",
        "subtitle": "— powerhouse",
        "bullets": [
          "Double-membraned organelles.",
          "Inner membrane folds form cristae, increasing surface area.",
          "Release energy from glucose through cellular respiration.",
          "Energy is stored as ATP.",
          "Have their own DNA and ribosomes."
        ]
      },
      {
        "title": "Plastids",
        "subtitle": "— plant cells only",
        "description": "Double-membraned organelles involved in food synthesis and storage. They contain their own DNA and ribosomes.",
        "table": {
          "headers": ["Type", "Role"],
          "rows": [
            ["Chloroplast", "Green, contains chlorophyll and performs photosynthesis."],
            ["Chromoplast", "Contains yellow, orange or red pigments and colours flowers and fruits."],
            ["Leucoplast", "Colourless plastids that store starch, oils and proteins."]
          ]
        }
      },
      {
        "title": "Vacuoles",
        "subtitle": "— storage & support",
        "bullets": [
          "Plant cells usually contain one large central vacuole.",
          "Contains cell sap.",
          "Stores water, minerals, sugars and waste.",
          "Helps keep plant cells firm.",
          "Animal cells may have small vacuoles."
        ]
      }
    ]
  },
  {
    "title": "2.4 · Cell Growth & Division",
    "items": [
      {
        "title": "Cell Division",
        "bullets": [
          "New cells are formed from pre-existing cells.",
          "Cell division enables growth, repair and reproduction.",
          "Two major types are mitosis and meiosis."
        ]
      },
      {
        "title": "Mitosis vs Meiosis",
        "table": {
          "headers": ["Mitosis", "Meiosis"],
          "rows": [
            ["2 identical daughter cells", "4 daughter cells"],
            ["Same chromosome number", "Half chromosome number"],
            ["Growth, repair, asexual reproduction", "Sexual reproduction; formation of gametes"],
            ["Body cells", "Reproductive cells"]
          ]
        }
      },
      {
        "title": "Errors in Division",
        "bullets": [
          "Mitosis errors can cause uncontrolled division and tumours.",
          "Meiosis errors can cause genetic disorders, reduced fertility or pregnancy loss."
        ]
      },
      {
        "title": "Arun Kumar Sharma",
        "subtitle": "— Indian scientist",
        "bullets": [
          "Known for work on chromosomes and plant taxonomy, evolution and development.",
          "Developed laboratory methods to study chromosomes in plants.",
          "Received the Shanti Swarup Bhatnagar Award and Padma Bhushan."
        ]
      },
      {
        "title": "Cell Culture & Synthetic Cell",
        "bullets": [
          "Cell culture means growing plant or animal cells outside the body in a nutrient-rich medium under sterile conditions.",
          "Used to study cells and produce biochemicals, food, medicines and vaccines.",
          "A synthetic-cell experiment showed that DNA controls a cell's structure and activities."
        ]
      }
    ]
  },
  {
    "title": "2.5 · Cell Theory",
    "items": [
      {
        "title": "Cell Theory",
        "bullets": [
          "All living organisms are made of one or more cells.",
          "The cell is the basic unit of structure and function.",
          "All cells arise from pre-existing cells."
        ],
        "note": [
          "Schleiden (1838) — all plants are made of cells.",
          "Schwann (1839) — all animals are made of cells.",
          "Virchow (1855) — cells arise from pre-existing cells."
        ]
      },
      {
        "title": "Contact Inhibition & Cancer",
        "bullets": [
          "Every cell has a definite life span.",
          "Contact inhibition: animal cell division stops when cells touch neighbouring cells.",
          "Cancer cells lose this control and divide uncontrollably.",
          "Tumours may be benign or malignant.",
          "Malignant tumours can invade and spread to other parts of the body.",
          "Plant cells do not show contact inhibition because of their rigid walls."
        ]
      },
      {
        "title": "Programmed Cell Death (PCD)",
        "bullets": [
          "Genetically regulated and organised destruction of selected cells.",
          "Essential for normal development.",
          "Example: removal of cells between developing digits helps form separate fingers."
        ]
      },
      {
        "title": "Totipotency",
        "subtitle": "— Haberlandt (1902)",
        "bullets": [
          "Ability of a living plant cell to grow into a complete plant under suitable conditions.",
          "Basis of plant tissue culture."
        ]
      }
    ]
  }
]
  $json$
);
