const Celldivision = [
  // ─── CELL CYCLE BASICS & INTERPHASE ─────────────────────────────────────────
  {
    id: 1,
    question: "What constitutes the cell cycle?",
    answer: "The coordinated sequence of events involving cell growth, DNA replication, and cell division to form progeny cells." /* */
  },
  {
    id: 2,
    question: "Compare the average cell cycle duration of a human cell in culture to that of yeast.",
    answer: "Human cells divide approximately every 24 hours. Yeast cells complete the cycle in only about 90 minutes." /* */
  },
  {
    id: 3,
    question: "What specific events mark the exact start and end of the M Phase?",
    answer: "It starts with nuclear division (karyokinesis) and usually ends with the division of cytoplasm (cytokinesis)." /* */
  },
  {
    id: 4,
    question: "Which specific term denotes the division of the nucleus during the M phase?",
    answer: "Karyokinesis." /* */
  },
  {
    id: 5,
    question: "Which specific term denotes the division of the cytoplasm following karyokinesis?",
    answer: "Cytokinesis." /* */
  },
  {
    id: 6,
    question: "What preparatory processes occur during the superficially named 'resting' interphase?",
    answer: "The cell undergoes both cell growth and DNA replication in a highly orderly manner." /* */
  },
  {
    id: 7,
    question: "What are the durations of interphase and M Phase in a typical 24-hour human cell cycle?",
    answer: "Interphase lasts over 95% of the duration. The M Phase lasts for only about an hour." /* */
  },
  {
    id: 8,
    question: "What are the three specific phases of interphase?",
    answer: "G1 phase (Gap 1), S phase (Synthesis), and G2 phase (Gap 2)." /* */
  },
  {
    id: 9,
    question: "What key cellular events characterise the G1 phase?",
    answer: "The cell is metabolically active and grows continuously, but it does not replicate its DNA." /* */
  },
  {
    id: 10,
    question: "How do the DNA content and chromosome number change during the S phase?",
    answer: "DNA content doubles (e.g., 2C to 4C). The chromosome number remains exactly the same (e.g., 2n remains 2n)." /* */
  },
  {
    id: 11,
    question: "Where do DNA replication and centriole duplication occur in animal cells during the S phase?",
    answer: "DNA replication begins in the nucleus, and the centriole duplicates in the cytoplasm." /* */
  },
  {
    id: 12,
    question: "What occurs during the G2 phase of the cell cycle?",
    answer: "Proteins are synthesised in preparation for mitosis while cell growth continues." /* */
  },
  {
    id: 13,
    question: "What is the quiescent stage (G0)?",
    answer: "An inactive stage where non-dividing cells (like heart cells) remain metabolically active without proliferating." /* */
  },
  {
    id: 14,
    question: "Which ploidy of cells undergo mitotic division in animals versus plants?",
    answer: "Animals: Usually restricted to diploid somatic cells (exception: haploid male honey bees). Plants: Occurs in both haploid and diploid cells." /* */
  },

  // ─── M PHASE: MITOSIS ───────────────────────────────────────────────────────
  {
    id: 15,
    question: "Why is mitosis strictly referred to as equational division?",
    answer: "Because the number of chromosomes in the parent and progeny cells is exactly the same." /* */
  },
  {
    id: 16,
    question: "What happens to the chromosomal material during mitotic prophase?",
    answer: "It untangles and condenses into compact mitotic chromosomes." /* */
  },
  {
    id: 17,
    question: "What is the structural composition of a chromosome at the prophase stage?",
    answer: "It is composed of two chromatids attached together at the centromere." /* */
  },
  {
    id: 18,
    question: "What term describes the star-shaped arrangement of microtubules radiating from a centrosome during mitosis?",
    answer: "Aster." /* */
  },
  {
    id: 19,
    question: "What components collectively constitute the mitotic apparatus?",
    answer: "The two asters together with the spindle fibres." /* */
  },
  {
    id: 20,
    question: "Which specific cell structures disappear by the end of prophase?",
    answer: "The Golgi complexes, endoplasmic reticulum, nucleolus, and the nuclear envelope completely disappear." /* */
  },
  {
    id: 21,
    question: "What is a kinetochore?",
    answer: "A small disc-shaped structure at the surface of the centromere serving as the attachment site for spindle fibres." /* */
  },
  {
    id: 22,
    question: "How do spindle fibres attach to sister chromatids during metaphase?",
    answer: "One chromatid connects to a pole via its kinetochore, and its sister chromatid connects to the opposite pole." /* */
  },
  {
    id: 23,
    question: "What term refers to the plane of alignment of chromosomes at the spindle equator?",
    answer: "The metaphase plate." /* */
  },
  {
    id: 24,
    question: "What is the movement and orientation of chromosomes during mitotic anaphase?",
    answer: "Centromeres split; chromatids separate and move to opposite poles. Centromeres lead at the front, with chromosome arms trailing behind." /* */
  },
  {
    id: 25,
    question: "What structural reorganisations occur to chromosomes during mitotic telophase?",
    answer: "They reach their respective poles, decondense, and lose their individuality as discrete elements." /* */
  },
  {
    id: 26,
    question: "Which organelles and structures reform during telophase?",
    answer: "The nuclear envelope, nucleolus, Golgi complex, and endoplasmic reticulum." /* */
  },
  {
    id: 27,
    question: "Contrast the mechanism of cytokinesis in animal and plant cells.",
    answer: "Animal cells form a deepening plasma membrane furrow. Plant cells form a cell-plate in the centre that grows outward." /* */
  },
  {
    id: 28,
    question: "What does the plant cell-plate represent anatomically?",
    answer: "It represents the middle lamella between the walls of two adjacent cells." /* */
  },
  {
    id: 29,
    question: "What specific cellular condition leads to the formation of a multinucleate syncytium?",
    answer: "When karyokinesis is not followed by cytokinesis (e.g., liquid endosperm in coconut)." /* */
  },
  {
    id: 30,
    question: "What is the primary genetic outcome of a mitotic division?",
    answer: "The production of diploid daughter cells with identical genetic complements." /* */
  },
  {
    id: 31,
    question: "What are three major physiological contributions of mitosis in multicellular organisms?",
    answer: "Cell growth (restoring nucleo-cytoplasmic ratio), cell repair (e.g., gut lining), and continuous plant growth via apical/lateral cambium." /* */
  },

  // ─── MEIOSIS BASICS & INITIATION ────────────────────────────────────────────
  {
    id: 32,
    question: "When does meiosis occur, and what specific biological process restores the diploid phase?",
    answer: "Meiosis occurs during gametogenesis to produce haploid gametes. Fertilisation restores the diploid phase." /* */
  },
  {
    id: 33,
    question: "At what specific point in the cell cycle is Meiosis I initiated?",
    answer: "After the parental chromosomes have replicated to produce identical sister chromatids at the S phase." /* */
  },

  // ─── MEIOSIS PROPHASE I (DETAILED) ──────────────────────────────────────────
  {
    id: 34,
    question: "What changes happen to chromosomes during the leptotene stage?",
    answer: "They become gradually visible under the light microscope, and compaction continues throughout this stage." /* */
  },
  {
    id: 35,
    question: "During which stage do homologous chromosomes pair up, and what is this process called?",
    answer: "During zygotene. The pairing process is called synapsis." /* */
  },
  {
    id: 36,
    question: "What complex protein structure accompanies chromosome synapsis during zygotene?",
    answer: "The synaptonemal complex." /* */
  },
  {
    id: 37,
    question: "What names are given to the complex formed by a pair of synapsed homologous chromosomes?",
    answer: "A bivalent or a tetrad." /* */
  },
  {
    id: 38,
    question: "When do the four chromatids of each bivalent become distinct and clearly appear as tetrads?",
    answer: "During the pachytene stage." /* */
  },
  {
    id: 39,
    question: "What are recombination nodules and during which stage do they appear?",
    answer: "They appear during pachytene and represent the specific sites at which crossing over occurs between non-sister chromatids." /* */
  },
  {
    id: 40,
    question: "What genetic exchange occurs during the pachytene stage?",
    answer: "Crossing over, which is the exchange of genetic material between non-sister chromatids of homologous chromosomes." /* */
  },
  {
    id: 41,
    question: "Which specific enzyme mediates the process of crossing over?",
    answer: "Recombinase." /* */
  },
  {
    id: 42,
    question: "When is genetic recombination between homologous chromosomes fully completed?",
    answer: "By the end of pachytene, leaving the chromosomes linked at the sites of crossing over." /* */
  },
  {
    id: 43,
    question: "What structural changes occur to homologous chromosomes during the diplotene stage?",
    answer: "The synaptonemal complex dissolves, and recombined homologous chromosomes separate except at the crossover sites." /* */
  },
  {
    id: 44,
    question: "What are the X-shaped structures formed during the diplotene stage called?",
    answer: "Chiasmata." /* */
  },
  {
    id: 45,
    question: "What specific physical sites do the X-shaped chiasmata structures represent?",
    answer: "The sites of crossing over between homologous chromosomes." /* */
  },
  {
    id: 46,
    question: "What specific transition in the cell cycle does the diakinesis stage represent?",
    answer: "It represents the transition to metaphase, marked by terminalisation of chiasmata and spindle assembly." /* */
  },
  {
    id: 47,
    question: "What happens to the nucleus by the end of diakinesis?",
    answer: "The nucleolus disappears and the nuclear envelope completely breaks down." /* */
  },

  // ─── MEIOSIS I & II (REMAINDER) ─────────────────────────────────────────────
  {
    id: 48,
    question: "How do spindle microtubules attach to chromosomes during Metaphase I?",
    answer: "They attach directly to the kinetochores of homologous chromosomes." /* */
  },
  {
    id: 49,
    question: "What occurs during Anaphase I of meiosis?",
    answer: "Homologous chromosomes separate and move to opposite poles, but sister chromatids remain attached at their centromeres." /* */
  },
  {
    id: 50,
    question: "What specific structures reappear during Telophase I before cytokinesis forms a dyad?",
    answer: "The nuclear membrane and nucleolus reappear." /* */
  },
  {
    id: 51,
    question: "What is interkinesis?",
    answer: "The generally short-lived stage between the two meiotic divisions. There is no DNA replication during this phase." /* */
  },
  {
    id: 52,
    question: "Which meiotic stage closely resembles normal mitosis and involves the disappearance of the nuclear membrane?",
    answer: "Prophase II." /* */
  },
  {
    id: 53,
    question: "How do chromosomes move during Metaphase II and Anaphase II?",
    answer: "Metaphase II: Chromosomes align at the equator. Anaphase II: Simultaneous splitting of centromeres allows sister chromatids to separate to opposite poles." /* */
  },
  {
    id: 54,
    question: "What marks the end of meiosis during Telophase II?",
    answer: "The two groups of chromosomes get enclosed by a nuclear envelope, resulting in a tetrad of four haploid cells." /* */
  },
  {
    id: 55,
    question: "What are the two major evolutionary significances of meiosis?",
    answer: "It conserves specific chromosome numbers across generations and increases genetic variability within a population." /* */
  },
  {
    id: 56,
    question: "What terms describe the cell formations at the end of Meiosis I and Meiosis II, respectively?",
    answer: "Meiosis I ends with a dyad of cells. Meiosis II ends with a tetrad of cells." /* */
  }
];

export default Celldivision;