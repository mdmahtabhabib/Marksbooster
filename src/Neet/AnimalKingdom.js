const AnimalKingdom = [
  // ─── BASIS OF CLASSIFICATION ────────────────────────────────────────────────
  {
    id: 1,
    question: "What features form the basis of animal classification?",
    answer: "Arrangement of cells, body symmetry, nature of coelom, patterns of digestive, circulatory and reproductive systems."
  },

  // ─── LEVELS OF ORGANISATION ─────────────────────────────────────────────────
  {
    id: 2,
    question: "Which phylum shows cellular level of organisation?",
    answer: "Porifera – cells arranged as loose aggregates; some division of labour occurs among cells."
  },
  {
    id: 3,
    question: "Which phylum shows tissue level of organisation?",
    answer: "Coelenterata – cells performing the same function are arranged into tissues."
  },
  {
    id: 4,
    question: "Which phylum shows organ level of organisation?",
    answer: "Platyhelminthes – tissues grouped to form organs, each specialised for a particular function."
  },
  {
    id: 5,
    question: "Which phyla show organ system level of organisation?",
    answer: "Annelids, Arthropods, Molluscs, Echinoderms, Hemichordates and Chordates."
  },

  // ─── DIGESTIVE SYSTEM ───────────────────────────────────────────────────────
  {
    id: 6,
    question: "What is an incomplete digestive system? Which phylum shows it?",
    answer: "Single opening serves as both mouth and anus. Seen in Platyhelminthes."
  },
  {
    id: 7,
    question: "What is a complete digestive system?",
    answer: "Two separate openings – mouth and anus."
  },

  // ─── CIRCULATORY SYSTEM ─────────────────────────────────────────────────────
  {
    id: 8,
    question: "What is open type circulatory system?",
    answer: "Blood is pumped out of heart; cells and tissues are directly bathed in it."
  },
  {
    id: 9,
    question: "What is closed type circulatory system?",
    answer: "Blood circulates through vessels of varying diameters – arteries, veins and capillaries."
  },

  // ─── SYMMETRY ───────────────────────────────────────────────────────────────
  {
    id: 10,
    question: "Which animals are asymmetrical? Define asymmetry.",
    answer: "Sponges (mostly). No plane through centre divides them into equal halves."
  },
  {
    id: 11,
    question: "Define radial symmetry. Give examples.",
    answer: "Any plane through the central axis divides into identical halves. e.g., Coelenterates, Ctenophores, Echinoderms."
  },
  {
    id: 12,
    question: "Define bilateral symmetry. Give examples.",
    answer: "Body divided into identical left and right halves in only ONE plane. e.g., Annelids, Arthropods."
  },

  // ─── DIPLOBLASTIC / TRIPLOBLASTIC ───────────────────────────────────────────
  {
    id: 13,
    question: "What are diploblastic animals? Give example.",
    answer: "Animals with two embryonic layers – ectoderm and endoderm; undifferentiated mesoglea between them. e.g., Coelenterates."
  },
  {
    id: 14,
    question: "What are triploblastic animals? Which phyla?",
    answer: "Animals with three germinal layers – ectoderm, mesoderm and endoderm. Platyhelminthes to Chordates."
  },

  // ─── COELOM ─────────────────────────────────────────────────────────────────
  {
    id: 15,
    question: "What is coelom?",
    answer: "Body cavity lined by mesoderm, present between the body wall and the gut wall."
  },
  {
    id: 16,
    question: "What are coelomates? Give examples.",
    answer: "Animals with coelom lined by mesoderm. e.g., Annelids, Molluscs, Arthropods, Echinoderms, Hemichordates, Chordates."
  },
  {
    id: 17,
    question: "What are pseudocoelomates? Give example.",
    answer: "Body cavity not lined by mesoderm; mesoderm present as scattered pouches. e.g., Aschelminthes."
  },
  {
    id: 18,
    question: "What are acoelomates? Give example.",
    answer: "Animals in which body cavity is absent. e.g., Platyhelminthes."
  },

  // ─── SEGMENTATION & NOTOCHORD ───────────────────────────────────────────────
  {
    id: 19,
    question: "What is metamerism? Give example.",
    answer: "Body divided externally and internally into segments (metameres) with serial repetition of organs. e.g., Earthworm."
  },
  {
    id: 20,
    question: "What is notochord? What are chordates and non-chordates?",
    answer: "Mesodermally derived rod-like dorsal structure in embryo. Chordates: have it. Non-chordates: lack it (Porifera to Echinoderms)."
  },

  // ─── PORIFERA ───────────────────────────────────────────────────────────────
  {
    id: 21,
    question: "What is the common name, habitat and organisation level of Porifera?",
    answer: "Sponges; generally marine; mostly asymmetrical; cellular level of organisation."
  },
  {
    id: 22,
    question: "Describe the water canal system of Porifera.",
    answer: "Water enters via ostia → spongocoel → exits via osculum. Helps in food gathering, respiration and waste removal."
  },
  {
    id: 23,
    question: "What are choanocytes? Where are they found?",
    answer: "Collar cells that line the spongocoel and canals in Porifera. Digestion is intracellular."
  },
  {
    id: 24,
    question: "What is the skeleton of sponges made of?",
    answer: "Spicules or spongin fibres."
  },
  {
    id: 25,
    question: "Reproduction in Porifera – modes and sexuality.",
    answer: "Hermaphrodite; asexual by fragmentation; sexual by gametes; fertilisation internal; development indirect."
  },
  {
    id: 26,
    question: "Examples of Porifera.",
    answer: "Sycon (Scypha), Spongilla (freshwater sponge), Euspongia (bath sponge)."
  },

  // ─── COELENTERATA ───────────────────────────────────────────────────────────
  {
    id: 27,
    question: "General features of Phylum Coelenterata.",
    answer: "Aquatic, mostly marine; radially symmetrical; diploblastic; tissue level of organisation."
  },
  {
    id: 28,
    question: "What are cnidoblasts/cnidocytes? What is their function?",
    answer: "Cells containing stinging nematocysts on tentacles and body. Used for anchorage, defence and prey capture."
  },
  {
    id: 29,
    question: "Digestive cavity and digestion in Coelenterata.",
    answer: "Central gastro-vascular cavity with single opening (mouth on hypostome). Digestion: extracellular and intracellular."
  },
  {
    id: 30,
    question: "What are polyp and medusa forms in Cnidaria?",
    answer: "Polyp: sessile, cylindrical (e.g., Hydra). Medusa: umbrella-shaped, free-swimming (e.g., Aurelia/jellyfish)."
  },
  {
    id: 31,
    question: "What is metagenesis? Give example.",
    answer: "Alternation of generation: polyps produce medusae asexually; medusae form polyps sexually. e.g., Obelia."
  },
  {
    id: 32,
    question: "Examples of Coelenterata.",
    answer: "Physalia (Portuguese man-of-war), Adamsia (Sea anemone), Pennatula (Sea-pen), Gorgonia (Sea-fan), Meandrina (Brain coral)."
  },

  // ─── CTENOPHORA ─────────────────────────────────────────────────────────────
  {
    id: 33,
    question: "General features of Phylum Ctenophora.",
    answer: "Sea walnuts / comb jellies; exclusively marine; radially symmetrical; diploblastic; tissue level of organisation."
  },
  {
    id: 34,
    question: "Distinctive features of Ctenophora.",
    answer: "Eight external rows of ciliated comb plates for locomotion; bioluminescence well-marked."
  },
  {
    id: 35,
    question: "Reproduction in Ctenophora.",
    answer: "Sexes not separate; only sexual reproduction; fertilisation external; development indirect."
  },
  {
    id: 36,
    question: "Examples of Ctenophora.",
    answer: "Pleurobrachia, Ctenoplana."
  },

  // ─── PLATYHELMINTHES ────────────────────────────────────────────────────────
  {
    id: 37,
    question: "General features of Phylum Platyhelminthes.",
    answer: "Flatworms; mostly endoparasites; bilaterally symmetrical; triploblastic; acoelomate; organ level of organisation."
  },
  {
    id: 38,
    question: "Special features of parasitic Platyhelminthes.",
    answer: "Hooks and suckers present; absorb nutrients through body surface; flame cells for osmoregulation and excretion."
  },
  {
    id: 39,
    question: "Reproduction in Platyhelminthes.",
    answer: "Sexes not separate; internal fertilisation; development through many larval stages. Planaria has high regeneration capacity."
  },
  {
    id: 40,
    question: "Examples of Platyhelminthes.",
    answer: "Taenia (Tapeworm), Fasciola (Liver fluke)."
  },

  // ─── ASCHELMINTHES ──────────────────────────────────────────────────────────
  {
    id: 41,
    question: "General features of Phylum Aschelminthes.",
    answer: "Roundworms; circular in cross-section; bilaterally symmetrical; triploblastic; pseudocoelomate; organ-system level."
  },
  {
    id: 42,
    question: "Digestive and excretory features of Aschelminthes.",
    answer: "Complete alimentary canal with well-developed muscular pharynx. Excretory tube removes wastes through excretory pore."
  },
  {
    id: 43,
    question: "Reproduction in Aschelminthes.",
    answer: "Dioecious; females often longer than males; internal fertilisation; development direct or indirect."
  },
  {
    id: 44,
    question: "Examples of Aschelminthes.",
    answer: "Ascaris (Roundworm), Wuchereria (Filaria worm), Ancylostoma (Hookworm)."
  },

  // ─── ANNELIDA ───────────────────────────────────────────────────────────────
  {
    id: 45,
    question: "General features of Phylum Annelida.",
    answer: "Aquatic or terrestrial; bilaterally symmetrical; triploblastic; metamerically segmented; coelomate; organ-system level."
  },
  {
    id: 46,
    question: "Circulatory and excretory systems in Annelida.",
    answer: "Closed circulatory system; nephridia for osmoregulation and excretion."
  },
  {
    id: 47,
    question: "Nervous system and locomotion in Annelida.",
    answer: "Paired ganglia connected by lateral nerves to double ventral nerve cord. Nereis has parapodia for swimming."
  },
  {
    id: 48,
    question: "Sexuality in Annelida.",
    answer: "Nereis: dioecious. Earthworms and leeches: monoecious. Reproduction is sexual."
  },
  {
    id: 49,
    question: "Examples of Annelida.",
    answer: "Nereis, Pheretima (Earthworm), Hirudinaria (Blood-sucking leech)."
  },

  // ─── ARTHROPODA ─────────────────────────────────────────────────────────────
  {
    id: 50,
    question: "Why is Arthropoda the largest phylum?",
    answer: "Includes insects; over two-thirds of all named species on earth are arthropods."
  },
  {
    id: 51,
    question: "General features of Phylum Arthropoda.",
    answer: "Bilaterally symmetrical; triploblastic; segmented; coelomate; chitinous exoskeleton; jointed appendages; organ-system level."
  },
  {
    id: 52,
    question: "Respiratory, circulatory and excretory systems in Arthropoda.",
    answer: "Respiration: gills/book gills/book lungs/tracheal system. Circulation: open type. Excretion: Malpighian tubules."
  },
  {
    id: 53,
    question: "Sensory organs and reproduction in Arthropoda.",
    answer: "Antennae, compound and simple eyes, statocysts. Mostly dioecious; internal fertilisation; mostly oviparous."
  },
  {
    id: 54,
    question: "Economic importance examples of Arthropoda.",
    answer: "Apis (Honey bee), Bombyx (Silkworm), Laccifer (Lac insect); Vectors: Anopheles, Culex, Aedes; Locusta (pest); Limulus (living fossil)."
  },

  // ─── MOLLUSCA ───────────────────────────────────────────────────────────────
  {
    id: 55,
    question: "What is the rank of Mollusca among animal phyla?",
    answer: "Second largest animal phylum."
  },
  {
    id: 56,
    question: "General features of Phylum Mollusca.",
    answer: "Terrestrial or aquatic; bilaterally symmetrical; triploblastic; coelomate; calcareous shell; unsegmented; organ-system level."
  },
  {
    id: 57,
    question: "Body parts and feeding organ of Mollusca.",
    answer: "Distinct head, muscular foot and visceral hump. Mantle covers visceral hump. Radula: file-like rasping organ for feeding."
  },
  {
    id: 58,
    question: "Mantle cavity and respiration in Mollusca.",
    answer: "Space between visceral hump and mantle; contains feather-like gills for respiration and excretion."
  },
  {
    id: 59,
    question: "Reproduction in Mollusca.",
    answer: "Usually dioecious and oviparous; development indirect."
  },
  {
    id: 60,
    question: "Examples of Mollusca.",
    answer: "Pila (Apple snail), Pinctada (Pearl oyster), Sepia (Cuttlefish), Loligo (Squid), Octopus (Devil fish), Dentalium (Tusk shell)."
  },

  // ─── ECHINODERMATA ──────────────────────────────────────────────────────────
  {
    id: 61,
    question: "Why is the phylum named Echinodermata?",
    answer: "Endoskeleton of calcareous ossicles makes them 'spiny bodied' (Echino = spiny, derma = skin)."
  },
  {
    id: 62,
    question: "General features of Phylum Echinodermata.",
    answer: "All marine; organ-system level; adults radially symmetrical; larvae bilaterally symmetrical; triploblastic; coelomate."
  },
  {
    id: 63,
    question: "Most distinctive feature of Echinoderms.",
    answer: "Water vascular system – helps in locomotion, capture and transport of food, and respiration."
  },
  {
    id: 64,
    question: "Digestive system and excretion in Echinodermata.",
    answer: "Complete digestive system: mouth on ventral side, anus on dorsal side. Excretory system: absent."
  },
  {
    id: 65,
    question: "Reproduction in Echinodermata.",
    answer: "Sexes separate; sexual reproduction; fertilisation usually external; development indirect with free-swimming larva."
  },
  {
    id: 66,
    question: "Examples of Echinodermata.",
    answer: "Asterias (Star fish), Echinus (Sea urchin), Antedon (Sea lily), Cucumaria (Sea cucumber), Ophiura (Brittle star)."
  },

  // ─── HEMICHORDATA ───────────────────────────────────────────────────────────
  {
    id: 67,
    question: "What is the classification status of Hemichordata?",
    answer: "Earlier a sub-phylum of Chordata; now placed as separate phylum under non-chordata."
  },
  {
    id: 68,
    question: "General features of Phylum Hemichordata.",
    answer: "Worm-like marine animals; bilaterally symmetrical; triploblastic; coelomate; organ-system level."
  },
  {
    id: 69,
    question: "Body plan and organ systems of Hemichordata.",
    answer: "Body: anterior proboscis + collar + long trunk. Open circulation; respiration by gills; excretory organ: proboscis gland."
  },
  {
    id: 70,
    question: "What is stomochord?",
    answer: "Rudimentary structure in collar region of Hemichordates, similar to notochord."
  },
  {
    id: 71,
    question: "Examples of Hemichordata.",
    answer: "Balanoglossus, Saccoglossus."
  },

  // ─── PHYLUM CHORDATA ────────────────────────────────────────────────────────
  {
    id: 72,
    question: "What are the four fundamental characters of Phylum Chordata?",
    answer: "1. Notochord 2. Dorsal hollow nerve cord 3. Paired pharyngeal gill slits 4. Post-anal tail."
  },
  {
    id: 73,
    question: "Chordates vs Non-chordates: notochord and nerve cord.",
    answer: "Chordates: notochord present; CNS dorsal, hollow, single.\nNon-chordates: notochord absent; CNS ventral, solid, double."
  },
  {
    id: 74,
    question: "Chordates vs Non-chordates: gill slits, heart and tail.",
    answer: "Chordates: pharynx with gill slits; heart ventral; post-anal tail present.\nNon-chordates: no gill slits; heart dorsal; no post-anal tail."
  },
  {
    id: 75,
    question: "What are the three subphyla of Chordata?",
    answer: "Urochordata (Tunicata), Cephalochordata, Vertebrata."
  },
  {
    id: 76,
    question: "What are protochordates? Give examples.",
    answer: "Urochordata + Cephalochordata; exclusively marine.\nUrochordata: Ascidia, Salpa, Doliolum.\nCephalochordata: Branchiostoma (Amphioxus/Lancelet)."
  },
  {
    id: 77,
    question: "Where is notochord present in Urochordata vs Cephalochordata?",
    answer: "Urochordata: only in larval tail.\nCephalochordata: head to tail, persistent throughout life."
  },
  {
    id: 78,
    question: "Justify: All vertebrates are chordates but not all chordates are vertebrates.",
    answer: "Protochordates (Urochordata, Cephalochordata) are chordates but lack vertebral column, so they are not vertebrates."
  },
  {
    id: 79,
    question: "What are the additional features of Vertebrata beyond basic chordate characters?",
    answer: "Vertebral column replaces notochord; ventral muscular heart (2–4 chambers); kidneys; paired appendages (fins or limbs)."
  },
  {
    id: 80,
    question: "How is subphylum Vertebrata classified?",
    answer: "Agnatha (no jaw) → Cyclostomata.\nGnathostomata (jaw) → Pisces (Chondrichthyes, Osteichthyes); Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)."
  },

  // ─── CYCLOSTOMATA ───────────────────────────────────────────────────────────
  {
    id: 81,
    question: "General features of Class Cyclostomata.",
    answer: "Ectoparasites on fishes; elongated body; 6–15 pairs of gill slits; circular sucking mouth without jaws."
  },
  {
    id: 82,
    question: "Special features of Cyclostomata.",
    answer: "No scales, no paired fins; cartilaginous cranium and vertebral column; closed circulation; marine but migrate to freshwater to spawn; die after spawning."
  },
  {
    id: 83,
    question: "Examples of Cyclostomata.",
    answer: "Petromyzon (Lamprey), Myxine (Hagfish)."
  },

  // ─── CHONDRICHTHYES ─────────────────────────────────────────────────────────
  {
    id: 84,
    question: "General features of Class Chondrichthyes.",
    answer: "Marine; streamlined; cartilaginous endoskeleton; mouth ventral; notochord persistent throughout life."
  },
  {
    id: 85,
    question: "Skin, teeth and swimming in Chondrichthyes.",
    answer: "Skin tough with placoid scales; teeth are modified placoid scales, backwardly directed; no air bladder → must swim constantly to avoid sinking."
  },
  {
    id: 86,
    question: "Circulatory system and temperature in Chondrichthyes.",
    answer: "Heart 2-chambered (1 auricle + 1 ventricle); poikilothermous (cold-blooded)."
  },
  {
    id: 87,
    question: "Reproduction and special organs in Chondrichthyes.",
    answer: "Dioecious; males have claspers on pelvic fins; internal fertilisation; many viviparous. Some have electric organs (Torpedo) or poison sting (Trygon)."
  },
  {
    id: 88,
    question: "Examples of Chondrichthyes.",
    answer: "Scoliodon (Dog fish), Pristis (Saw fish), Carcharodon (Great white shark), Trygon (Sting ray)."
  },

  // ─── OSTEICHTHYES ───────────────────────────────────────────────────────────
  {
    id: 89,
    question: "General features of Class Osteichthyes.",
    answer: "Marine and freshwater; bony endoskeleton; streamlined; mouth mostly terminal; 4 pairs of gills covered by operculum."
  },
  {
    id: 90,
    question: "Skin, air bladder and heart in Osteichthyes.",
    answer: "Skin: cycloid/ctenoid scales; air bladder regulates buoyancy; heart 2-chambered; cold-blooded."
  },
  {
    id: 91,
    question: "Reproduction in Osteichthyes.",
    answer: "Dioecious; fertilisation usually external; mostly oviparous; development direct."
  },
  {
    id: 92,
    question: "Examples of Osteichthyes.",
    answer: "Marine: Exocoetus (Flying fish), Hippocampus (Sea horse).\nFreshwater: Labeo (Rohu), Catla, Clarias (Magur).\nAquarium: Betta (Fighting fish), Pterophyllum (Angel fish)."
  },

  // ─── AMPHIBIA ───────────────────────────────────────────────────────────────
  {
    id: 93,
    question: "General features of Class Amphibia.",
    answer: "Dual life – aquatic and terrestrial; moist skin (no scales); two pairs of limbs; body: head and trunk; tympanum represents ear."
  },
  {
    id: 94,
    question: "Respiration, heart and temperature in Amphibia.",
    answer: "Respiration by gills, lungs and through skin; heart 3-chambered (2 auricles + 1 ventricle); cold-blooded (poikilothermous)."
  },
  {
    id: 95,
    question: "What is cloaca? Where is it found?",
    answer: "Common chamber into which alimentary canal, urinary and reproductive tracts open before the exterior. Found in Amphibia (also Reptilia, Aves)."
  },
  {
    id: 96,
    question: "Reproduction in Amphibia.",
    answer: "Dioecious; external fertilisation; oviparous; development indirect."
  },
  {
    id: 97,
    question: "Examples of Amphibia.",
    answer: "Bufo (Toad), Rana (Frog), Hyla (Tree frog), Salamandra (Salamander), Ichthyophis (Limbless amphibia)."
  },

  // ─── REPTILIA ───────────────────────────────────────────────────────────────
  {
    id: 98,
    question: "General features of Class Reptilia.",
    answer: "Mostly terrestrial; dry cornified skin with epidermal scales or scutes; no external ear openings; tympanum represents ear."
  },
  {
    id: 99,
    question: "Heart, temperature and reproduction in Reptilia.",
    answer: "Heart usually 3-chambered; 4-chambered in crocodiles. Poikilothermous. Dioecious; internal fertilisation; oviparous; development direct."
  },
  {
    id: 100,
    question: "Examples of Reptilia (non-poisonous and poisonous).",
    answer: "Chelone (Turtle), Testudo (Tortoise), Calotes, Chameleon, Crocodilus, Hemidactylus (Wall lizard).\nPoisonous: Naja (Cobra), Bangarus (Krait), Vipera (Viper)."
  },

  // ─── AVES ───────────────────────────────────────────────────────────────────
  {
    id: 101,
    question: "Characteristic features of Class Aves.",
    answer: "Feathers; beak; forelimbs modified into wings; hollow pneumatic bones; crop and gizzard in digestive tract."
  },
  {
    id: 102,
    question: "Physiology and heart of Aves.",
    answer: "4-chambered heart; homoiothermous (warm-blooded); respiration by lungs; air sacs supplement respiration."
  },
  {
    id: 103,
    question: "Skin and reproduction in Aves.",
    answer: "Dry skin; oil gland at base of tail only. Dioecious; internal fertilisation; oviparous; development direct."
  },
  {
    id: 104,
    question: "Examples of Aves.",
    answer: "Corvus (Crow), Columba (Pigeon), Psittacula (Parrot), Struthio (Ostrich), Pavo (Peacock), Aptenodytes (Penguin), Neophron (Vulture)."
  },

  // ─── MAMMALIA ───────────────────────────────────────────────────────────────
  {
    id: 105,
    question: "Most unique characteristic of Mammalia.",
    answer: "Presence of mammary glands – milk-producing glands by which young ones are nourished."
  },
  {
    id: 106,
    question: "General features of Class Mammalia.",
    answer: "Skin with hair; external ears (pinnae); different types of teeth; 4-chambered heart; homoiothermous; lungs for respiration."
  },
  {
    id: 107,
    question: "Reproduction in Mammalia. Which is the oviparous exception?",
    answer: "Dioecious; internal fertilisation; mostly viviparous; development direct. Exception: Ornithorhynchus (Platypus) is oviparous."
  },
  {
    id: 108,
    question: "Examples of Mammalia.",
    answer: "Macropus (Kangaroo), Pteropus (Flying fox), Camelus (Camel), Elephas (Elephant), Balaenoptera (Blue whale), Panthera tigris (Tiger), Panthera leo (Lion)."
  },

  // ─── COMPARATIVE / TABLE 4.2 CARDS ─────────────────────────────────────────
  {
    id: 109,
    question: "Which phyla have ABSENT digestive system? Incomplete? Complete?",
    answer: "Absent: Porifera.\nIncomplete: Coelenterata, Ctenophora, Platyhelminthes.\nComplete: Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata, Chordata."
  },
  {
    id: 110,
    question: "Which phyla have circulatory system ABSENT?",
    answer: "Porifera, Coelenterata, Ctenophora, Platyhelminthes, Aschelminthes."
  },
  {
    id: 111,
    question: "Which phyla have respiratory system ABSENT?",
    answer: "Porifera, Coelenterata, Ctenophora, Platyhelminthes, Aschelminthes, Annelida."
  },
  {
    id: 112,
    question: "Which phyla show segmentation?",
    answer: "Annelida, Arthropoda, Chordata."
  },
  {
    id: 113,
    question: "Symmetry of each phylum (Table 4.2).",
    answer: "Various/Asymmetrical: Porifera.\nRadial: Coelenterata, Ctenophora, Echinodermata (adults).\nBilateral: Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Hemichordata, Chordata."
  },

  // ─── DISTINCTIVE STRUCTURE → PHYLUM ────────────────────────────────────────
  {
    id: 114,
    question: "Match: Choanocytes / Cnidoblasts / Comb plates / Flame cells.",
    answer: "Choanocytes → Porifera.\nCnidoblasts → Coelenterata.\nComb plates → Ctenophora.\nFlame cells → Platyhelminthes."
  },
  {
    id: 115,
    question: "Match: Nephridia / Parapodia / Malpighian tubules / Radula.",
    answer: "Nephridia → Annelida.\nParapodia → Annelida (Nereis).\nMalpighian tubules → Arthropoda.\nRadula → Mollusca."
  },
  {
    id: 116,
    question: "Match: Water vascular system / Stomochord / Notochord / Mammary glands.",
    answer: "Water vascular system → Echinodermata.\nStomochord → Hemichordata.\nNotochord → Chordata.\nMammary glands → Mammalia."
  },

  // ─── HEART CHAMBERS ─────────────────────────────────────────────────────────
  {
    id: 117,
    question: "Heart chambers: Fishes vs Amphibia vs Reptilia vs Crocodiles vs Aves/Mammalia.",
    answer: "Fishes: 2 (1A + 1V).\nAmphibia: 3 (2A + 1V).\nReptilia: 3 (except Crocodiles).\nCrocodiles, Aves, Mammalia: 4."
  },

  // ─── WARM / COLD BLOODED ────────────────────────────────────────────────────
  {
    id: 118,
    question: "Which vertebrate classes are poikilothermous and which are homoiothermous?",
    answer: "Poikilothermous (cold-blooded): Fishes, Amphibia, Reptilia.\nHomoiothermous (warm-blooded): Aves, Mammalia."
  },

  // ─── BIOLUMINESCENCE ────────────────────────────────────────────────────────
  {
    id: 119,
    question: "What is bioluminescence? In which phylum is it well-marked?",
    answer: "Property of a living organism to emit light. Well-marked in Ctenophora."
  },

  // ─── AIR BLADDER ────────────────────────────────────────────────────────────
  {
    id: 120,
    question: "Function of air bladder in Osteichthyes. What about Chondrichthyes?",
    answer: "Air bladder regulates buoyancy in Osteichthyes. Chondrichthyes lack it → must swim constantly to avoid sinking."
  },

  // ─── PNEUMATIC BONES ────────────────────────────────────────────────────────
  {
    id: 121,
    question: "Which class has pneumatic (hollow) bones? Significance?",
    answer: "Aves – long bones hollow with air cavities. Reduces body weight, aiding in flight."
  },

  // ─── PLACOID SCALES / TEETH ─────────────────────────────────────────────────
  {
    id: 122,
    question: "What are placoid scales? Where are teeth modified from in Chondrichthyes?",
    answer: "Minute scales on tough skin of Chondrichthyes. Teeth are modified placoid scales, backwardly directed."
  },

  // ─── MISSING NCERT DETAILS & EXAMPLES ──────────────────────────────────────
  {
    id: 123,
    question: "Which phyla exhibit an open circulatory system, and which exhibit a closed one?",
    answer: "Open: Arthropods, Molluscs, Echinoderms, Hemichordates, and Tunicates. Closed: Annelids and Chordates."
  },
  {
    id: 124,
    question: "What is the skeleton of corals (a type of Coelenterate) composed of?",
    answer: "Calcium carbonate."
  },
  {
    id: 125,
    question: "What type of digestion is seen in Phylum Ctenophora?",
    answer: "Both extracellular and intracellular."
  },
  {
    id: 126,
    question: "What structures assist in the locomotion of Annelids like earthworms?",
    answer: "Longitudinal and circular muscles."
  },
  {
    id: 127,
    question: "What are the three distinct regions of the arthropod body?",
    answer: "Head, thorax, and abdomen."
  },
  {
    id: 128,
    question: "Which examples of Mollusca represent the Sea hare and Chiton?",
    answer: "Aplysia (Sea hare) and Chaetopleura (Chiton)."
  },
  {
    id: 129,
    question: "What happens to the larvae of Cyclostomes after metamorphosis?",
    answer: "They return to the ocean."
  },
  {
    id: 130,
    question: "What is the characteristic of gill slits in Chondrichthyes?",
    answer: "Gill slits are separate and without an operculum (gill cover)."
  },
  {
    id: 131,
    question: "What is the mode of locomotion in Reptilia, and how do they shed their scales?",
    answer: "Creeping or crawling mode of locomotion. Snakes and lizards shed their scales as skin cast."
  },
  {
    id: 132,
    question: "Which reptilian example was missing from the previous list?",
    answer: "Alligator."
  },
  {
    id: 133,
    question: "List the remaining mammalian examples mentioned in NCERT.",
    answer: "Macaca (Monkey), Rattus (Rat), Canis (Dog), Felis (Cat), Equus (Horse), Delphinus (Common dolphin)."
  },

  // ─── FIGURES & DIAGRAM-BASED EXAMPLES ──────────────────────────────────────
  {
    id: 134,
    question: "Name four diverse examples of Arthropods representing an agricultural pest, a flying insect, an arachnid, and a crustacean.",
    answer: "Locust, Butterfly, Scorpion, and Prawn."
  },
  {
    id: 135,
    question: "Give an example of a shelled mollusc (gastropod) and an eight-armed mollusc (cephalopod).",
    answer: "Pila (Apple snail) and Octopus."
  },
  {
    id: 136,
    question: "Give two common examples of spiny-bodied marine animals belonging to Echinodermata.",
    answer: "Asterias (Star fish) and Ophiura (Brittle star)."
  },
  {
    id: 137,
    question: "What are the three distinct anatomical body regions of a hemichordate like Balanoglossus?",
    answer: "Proboscis, Collar, and Trunk."
  },

  // ─── TABLE COMPREHENSIVE DETAILS ───────────────────────────────────────────
  {
    id: 138,
    question: "In which animal phyla is a dedicated respiratory system entirely absent?",
    answer: "Porifera, Coelenterata, Ctenophora, Platyhelminthes, Aschelminthes, and Annelida."
  },
  {
    id: 139,
    question: "What is the key morphological distinction between the bodies of Aschelminthes and Annelida?",
    answer: "Aschelminthes are often worm-shaped and elongated, while Annelida feature distinct body segmentation like rings."
  },
  {
    id: 140,
    question: "What is a highly distinctive external feature present in most organisms of Phylum Mollusca?",
    answer: "An external skeleton made of a calcareous shell."
  },

  // ─── UNCOMPRESSED PHYLUM MINUTIAE ──────────────────────────────────────────
  {
    id: 141,
    question: "Why is Phylum Coelenterata also known as Cnidaria?",
    answer: "The name is derived from the cnidoblasts or cnidocytes present on their tentacles and body."
  },
  {
    id: 142,
    question: "How does the larval stage of Porifera (sponges) compare to the adult?",
    answer: "The development is indirect, having a larval stage which is morphologically distinct from the adult."
  },
  {
    id: 143,
    question: "How is the body of Platyhelminthes described morphologically?",
    answer: "They have a dorso-ventrally flattened body."
  },
  {
    id: 144,
    question: "Where are the sensory tentacles located in members of Phylum Mollusca?",
    answer: "On the anterior head region."
  },

  // ─── MISSING REPTILIAN & OSTEICHTHYES EXAMPLES ─────────────────────────────
  {
    id: 145,
    question: "Match the following reptilian common names to their scientific names: Tree lizard, Garden lizard.",
    answer: "Tree lizard = Chameleon. Garden lizard = Calotes."
  },
  {
    id: 146,
    question: "What type of scales specifically cover the skin of Osteichthyes (bony fishes)?",
    answer: "Cycloid or ctenoid scales."
  },

  // ─── CHORDATA & VERTEBRATA DETAILS ─────────────────────────────────────────
  {
    id: 147,
    question: "What specific appendages are present in organisms belonging to Phylum Chordata?",
    answer: "Paired appendages which may be fins or limbs."
  },
  {
    id: 148,
    question: "Do amphibians have tails?",
    answer: "The amphibian body is divisible into head and trunk, but a tail may be present in some (e.g., Salamander)."
  },
  {
    id: 149,
    question: "What are the hind limbs of birds (Aves) generally modified for, and what covers them?",
    answer: "They generally have scales and are modified for walking, swimming, or clasping tree branches."
  },
  {
    id: 150,
    question: "Describe the nature of the endoskeleton in Class Aves.",
    answer: "The endoskeleton is fully ossified (bony)."
  },
  {
    id: 151,
    question: "List the highly diverse habitats where mammals are found according to NCERT.",
    answer: "Polar ice caps, deserts, mountains, forests, grasslands, and dark caves. Some are adapted to fly or live in water."
  },
  {
    id: 152,
    question: "What two features are unique to the skin and jaws of mammals?",
    answer: "The skin possesses hair, and different types of teeth are present in the jaw."
  }
];

export default AnimalKingdom;