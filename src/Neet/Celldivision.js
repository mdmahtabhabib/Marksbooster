const CellDivision = [

  // ─── CELL CYCLE BASICS ───────────────────────────────────────────────────────
  {
    id: 1,
    question: "What is the cell cycle?",
    answer: "Sequence of events by which a cell duplicates its genome, synthesises other constituents, and divides into two daughter cells."
  },
  {
    id: 2,
    question: "What are the two basic phases of the cell cycle?",
    answer: "Interphase and M Phase (Mitosis phase)."
  },
  {
    id: 3,
    question: "Compare cell cycle duration: human cells in culture vs yeast.",
    answer: "Human cells: ~24 hours. Yeast: ~90 minutes."
  },
  {
    id: 4,
    question: "What fraction of the cell cycle does interphase and M phase each occupy in a human cell?",
    answer: "Interphase: >95% of duration. M phase: ~1 hour only."
  },
  {
    id: 5,
    question: "What is karyokinesis and cytokinesis?",
    answer: "Karyokinesis: nuclear division. Cytokinesis: division of cytoplasm. M phase starts with karyokinesis and usually ends with cytokinesis."
  },
  {
    id: 6,
    question: "Why is interphase called 'resting phase' and what actually happens during it?",
    answer: "Called resting phase superficially; actually the cell prepares for division by undergoing cell growth and DNA replication in an orderly manner."
  },

  // ─── INTERPHASE PHASES ───────────────────────────────────────────────────────
  {
    id: 7,
    question: "What are the three phases of interphase?",
    answer: "G1 phase (Gap 1), S phase (Synthesis), G2 phase (Gap 2)."
  },
  {
    id: 8,
    question: "What characterises the G1 phase?",
    answer: "Cell metabolically active, grows continuously; does not replicate DNA. Interval between mitosis and DNA replication initiation."
  },
  {
    id: 9,
    question: "What happens to DNA content and chromosome number during S phase?",
    answer: "DNA doubles (2C → 4C). Chromosome number unchanged (2n remains 2n)."
  },
  {
    id: 10,
    question: "What two events occur in animal cells during S phase?",
    answer: "DNA replication begins in nucleus; centriole duplicates in cytoplasm."
  },
  {
    id: 11,
    question: "What occurs during G2 phase?",
    answer: "Proteins synthesised in preparation for mitosis; cell growth continues."
  },
  {
    id: 12,
    question: "What is the quiescent stage (G0)?",
    answer: "Inactive stage entered by non-dividing cells (e.g., heart cells) exiting G1; remain metabolically active but do not proliferate."
  },
  {
    id: 13,
    question: "Which cells undergo mitosis in animals vs plants?",
    answer: "Animals: usually only diploid somatic cells (exception: haploid male honey bees). Plants: both haploid and diploid cells."
  },

  // ─── M PHASE: MITOSIS ────────────────────────────────────────────────────────
  {
    id: 14,
    question: "Why is mitosis called equational division?",
    answer: "Chromosome number in parent and progeny cells is exactly the same."
  },
  {
    id: 15,
    question: "What are the four stages of karyokinesis in mitosis?",
    answer: "Prophase, Metaphase, Anaphase, Telophase."
  },

  // ─── PROPHASE ────────────────────────────────────────────────────────────────
  {
    id: 16,
    question: "What are the key events of mitotic prophase?",
    answer: "Chromosomal material condenses into compact mitotic chromosomes (two chromatids at centromere); centrosome moves to opposite poles; asters and spindle fibres form mitotic apparatus."
  },
  {
    id: 17,
    question: "What is an aster and what is the mitotic apparatus?",
    answer: "Aster: microtubules radiating from each centrosome. Mitotic apparatus: two asters + spindle fibres."
  },
  {
    id: 18,
    question: "Which structures disappear by end of prophase?",
    answer: "Golgi complexes, endoplasmic reticulum, nucleolus, and nuclear envelope."
  },

  // ─── METAPHASE ───────────────────────────────────────────────────────────────
  {
    id: 19,
    question: "What marks the start of metaphase?",
    answer: "Complete disintegration of nuclear envelope; chromosomes spread through cytoplasm."
  },
  {
    id: 20,
    question: "Why is metaphase best for studying chromosome morphology?",
    answer: "Condensation of chromosomes is complete; they are most clearly visible under microscope."
  },
  {
    id: 21,
    question: "What is a kinetochore and what is its role in metaphase?",
    answer: "Small disc-shaped structure at centromere surface; serves as attachment site for spindle fibres."
  },
  {
    id: 22,
    question: "How are spindle fibres attached to chromosomes at metaphase?",
    answer: "One chromatid connected to one pole via kinetochore; sister chromatid connected to opposite pole via its kinetochore."
  },
  {
    id: 23,
    question: "What is the metaphase plate?",
    answer: "Plane of alignment of chromosomes at the spindle equator during metaphase."
  },

  // ─── ANAPHASE ────────────────────────────────────────────────────────────────
  {
    id: 24,
    question: "What are the key events of mitotic anaphase?",
    answer: "Centromeres split simultaneously; chromatids (now daughter chromosomes) separate and move to opposite poles. Centromeres lead, arms trail behind."
  },

  // ─── TELOPHASE ───────────────────────────────────────────────────────────────
  {
    id: 25,
    question: "What are the key events of mitotic telophase?",
    answer: "Chromosomes reach poles, decondense, lose individuality; nuclear envelope reforms around each cluster; nucleolus, Golgi complex, ER reform."
  },

  // ─── CYTOKINESIS ─────────────────────────────────────────────────────────────
  {
    id: 26,
    question: "How does cytokinesis differ in animal vs plant cells?",
    answer: "Animal: furrow forms in plasma membrane, deepens inward. Plant: cell-plate forms in centre, grows outward to meet lateral walls."
  },
  {
    id: 27,
    question: "What does the plant cell-plate represent anatomically?",
    answer: "Middle lamella between walls of two adjacent cells."
  },
  {
    id: 28,
    question: "What organelles are distributed during cytokinesis and what is a syncytium?",
    answer: "Mitochondria and plastids distributed between daughter cells. Syncytium: multinucleate condition when karyokinesis not followed by cytokinesis (e.g., liquid endosperm in coconut)."
  },

  // ─── SIGNIFICANCE OF MITOSIS ─────────────────────────────────────────────────
  {
    id: 29,
    question: "What are the significances of mitosis?",
    answer: "Produces diploid daughter cells with identical genetic complement; growth of multicellular organisms; restores nucleo-cytoplasmic ratio; cell repair (epidermis, gut lining, blood cells); continuous plant growth via apical and lateral cambium."
  },
  {
    id: 30,
    question: "In which organisms do haploid cells divide by mitosis?",
    answer: "Some lower plants and some social insects (e.g., male honey bees)."
  },

  // ─── MEIOSIS: OVERVIEW ───────────────────────────────────────────────────────
  {
    id: 31,
    question: "What is meiosis and why is it called reduction division?",
    answer: "Specialised cell division reducing chromosome number by half; produces haploid daughter cells from diploid cells for sexual reproduction."
  },
  {
    id: 32,
    question: "What are the key features of meiosis?",
    answer: "Two sequential divisions (meiosis I and II); only one DNA replication cycle; pairing of homologous chromosomes; recombination between non-sister chromatids; four haploid cells formed at end."
  },
  {
    id: 33,
    question: "When is meiosis initiated and what restores the diploid phase?",
    answer: "Meiosis I initiated after parental chromosomes replicate (S phase). Fertilisation restores diploid phase."
  },

  // ─── PROPHASE I: FIVE STAGES ─────────────────────────────────────────────────
  {
    id: 34,
    question: "What are the five sub-stages of Prophase I?",
    answer: "Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis."
  },
  {
    id: 35,
    question: "What happens during leptotene?",
    answer: "Chromosomes become gradually visible under light microscope; compaction continues throughout."
  },
  {
    id: 36,
    question: "What happens during zygotene?",
    answer: "Homologous chromosomes pair (synapsis); synaptonemal complex forms. Paired complex called bivalent or tetrad."
  },
  {
    id: 37,
    question: "What is synapsis and the synaptonemal complex?",
    answer: "Synapsis: pairing of homologous chromosomes during zygotene. Synaptonemal complex: protein structure accompanying chromosome synapsis."
  },
  {
    id: 38,
    question: "What is a bivalent/tetrad?",
    answer: "Complex formed by a pair of synapsed homologous chromosomes; consists of four chromatids."
  },
  {
    id: 39,
    question: "What are the key events of pachytene?",
    answer: "Four chromatids of each bivalent become distinct; recombination nodules appear (sites of crossing over); crossing over occurs between non-sister chromatids; recombinase mediates the process; recombination completed by end of pachytene."
  },
  {
    id: 40,
    question: "What is crossing over?",
    answer: "Exchange of genetic material between non-sister chromatids of homologous chromosomes; enzyme-mediated by recombinase; occurs during pachytene."
  },
  {
    id: 41,
    question: "What happens during diplotene?",
    answer: "Synaptonemal complex dissolves; recombined homologous chromosomes separate except at crossover sites (chiasmata). In vertebrate oocytes, can last months or years."
  },
  {
    id: 42,
    question: "What are chiasmata?",
    answer: "X-shaped structures at sites of crossing over between homologous chromosomes; visible during diplotene."
  },
  {
    id: 43,
    question: "What are the key events of diakinesis?",
    answer: "Terminalisation of chiasmata; chromosomes fully condensed; meiotic spindle assembles; nucleolus disappears; nuclear envelope breaks down. Represents transition to metaphase."
  },

  // ─── MEIOSIS I (REMAINING STAGES) ────────────────────────────────────────────
  {
    id: 44,
    question: "What happens during Metaphase I?",
    answer: "Bivalent chromosomes align on equatorial plate; microtubules from opposite poles attach to kinetochores of homologous chromosomes."
  },
  {
    id: 45,
    question: "What happens during Anaphase I?",
    answer: "Homologous chromosomes separate and move to opposite poles; sister chromatids remain associated at their centromeres."
  },
  {
    id: 46,
    question: "What happens during Telophase I?",
    answer: "Nuclear membrane and nucleolus reappear; cytokinesis follows → dyad of cells formed. Chromosomes do not reach fully extended interphase state."
  },
  {
    id: 47,
    question: "What is interkinesis?",
    answer: "Short-lived stage between two meiotic divisions; no DNA replication occurs."
  },

  // ─── MEIOSIS II ──────────────────────────────────────────────────────────────
  {
    id: 48,
    question: "How does Prophase II differ from Prophase I?",
    answer: "Much simpler; resembles mitosis. Nuclear membrane disappears; chromosomes become compact again. Initiated immediately after cytokinesis of meiosis I."
  },
  {
    id: 49,
    question: "What happens during Metaphase II and Anaphase II?",
    answer: "Metaphase II: chromosomes align at equator; microtubules attach to kinetochores of sister chromatids. Anaphase II: centromeres split simultaneously; sister chromatids move to opposite poles via microtubule shortening."
  },
  {
    id: 50,
    question: "What happens during Telophase II?",
    answer: "Two chromosome groups enclosed by nuclear envelope; cytokinesis follows → tetrad of four haploid daughter cells formed."
  },
  {
    id: 51,
    question: "What are the cell formations at end of Meiosis I and Meiosis II?",
    answer: "Meiosis I → dyad of cells (2 cells). Meiosis II → tetrad of cells (4 haploid cells)."
  },

  // ─── SIGNIFICANCE OF MEIOSIS ─────────────────────────────────────────────────
  {
    id: 52,
    question: "What are the significances of meiosis?",
    answer: "Conserves specific chromosome number of each species across generations; increases genetic variability in population; variations important for evolution."
  },

  // ─── MITOSIS VS MEIOSIS COMPARISON ───────────────────────────────────────────
  {
    id: 53,
    question: "Compare mitosis and meiosis on: cell type, divisions, daughter cells, and genetic outcome.",
    answer: "Mitosis: diploid somatic cells; 1 division; 2 diploid identical daughter cells. Meiosis: diploid cells forming gametes; 2 divisions; 4 haploid genetically variable cells."
  },
  {
    id: 54,
    question: "Compare Anaphase of mitosis vs Anaphase I of meiosis.",
    answer: "Mitosis anaphase: centromeres split, sister chromatids separate to opposite poles. Meiosis Anaphase I: homologous chromosomes separate; sister chromatids remain joined at centromere."
  }

];

export default CellDivision;