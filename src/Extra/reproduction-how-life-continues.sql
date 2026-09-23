-- Chapter 11: Reproduction: How Life Continues (Class 9 · Biology)
-- Complete-but-concise NCERT-based notes. Safe to re-run.
--
-- Two fixes vs the earlier draft:
--   1. table name is short_notes (underscore), not short-notes
--   2. "note" is an ARRAY of strings -- shortnotes.jsx does item.note.map()

insert into chapters (slug, class, subject, title)
values (
  'reproduction-how-life-continues',
  'class9',
  'biology',
  'Reproduction: How Life Continues'
)
on conflict (slug) do nothing;

insert into short_notes (chapter_slug, kicker, subtitle, footer, sections)
values (
  'reproduction-how-life-continues',
  'NCERT · Class 9 Science · Ch 11',
  'Complete revision · point-wise notes',
  'End of Chapter 11 · Reproduction notes',
  $json$
[
  {
    "title": "Introduction",
    "items": [
      {
        "title": "Reproduction",
        "bullets": [
          "Reproduction is the biological process by which living beings produce new individuals of their own kind.",
          "Every organism has a definite life span: it is born, grows, matures, reproduces and eventually dies.",
          "Reproduction ensures continuity of life on Earth.",
          "Examples: mango seeds grow into new mango plants; cows produce calves, dogs puppies, cats kittens and humans children."
        ]
      },
      {
        "title": "Two Main Modes",
        "table": {
          "headers": ["Asexual reproduction", "Sexual reproduction"],
          "rows": [
            ["One parent is involved.", "Two parents contribute genetic material."],
            ["Offspring are almost exact genetic copies of the parent.", "Offspring inherit a mix of characteristics from two individuals."],
            ["Produces little variation among offspring.", "Produces variations that can help populations adapt to changing environments."]
          ]
        }
      },
      {
        "title": "Why Variation Matters",
        "bullets": [
          "Sexual reproduction can produce small differences between parents and offspring.",
          "Accumulated variations over many generations can help organisms adapt to changing environments and may contribute to the emergence of new kinds of organisms."
        ]
      }
    ]
  },
  {
    "title": "11.1 · Asexual Reproduction",
    "items": [
      {
        "title": "Definition & Examples",
        "bullets": [
          "Asexual reproduction involves a single parent and generally produces genetically identical individuals.",
          "It occurs in many unicellular organisms such as bacteria, amoeba and yeast, and in simple multicellular organisms such as hydra and sponge.",
          "It also occurs in many plants."
        ]
      },
      {
        "title": "Vegetative Propagation",
        "bullets": [
          "Vegetative propagation is asexual reproduction in which new plants arise from vegetative, or growing, parts of a plant rather than from seeds.",
          "Potato and ginger can sprout new plants from fleshy underground stems.",
          "Money plant stem and sugarcane stem cuttings can grow into new plants.",
          "Bryophyllum leaves can develop tiny plantlets that later grow into new plants.",
          "Because only one parent is involved, the new plants are genetically identical to the parent."
        ]
      }
    ]
  },
  {
    "title": "Vegetative Propagation · Agriculture",
    "items": [
      {
        "title": "Agricultural Importance",
        "bullets": [
          "Scientists and horticulturists use asexual reproduction to develop methods such as cutting, grafting, layering and tissue culture.",
          "These methods allow efficient large-scale propagation of desirable crops.",
          "Vegetatively propagated plants retain the desirable characteristics of the parent plant."
        ]
      },
      {
        "title": "Tissue Culture in Banana Farming",
        "bullets": [
          "Tissue culture can produce large numbers of healthy plantlets from the shoot tip (apical meristem).",
          "In banana farming, this helps eliminate virus-infected plants and supports high yields.",
          "It is an example of asexual reproduction.",
          "Krishi Vigyan Kendras (KVKs) under ICAR provide vocational skills in modern grafting, helping farmers grow high-yield fruits and learn about marketing strategies and government programmes."
        ]
      }
    ]
  },
  {
    "title": "Methods of Vegetative Propagation",
    "items": [
      {
        "title": "Cutting",
        "bullets": [
          "Observe the plant's growing season and prepare suitable shoot cuttings; note cutting length, nodes and internodes.",
          "Collect shoot cuttings in the morning.",
          "Remove leaves from the lower half.",
          "Insert about half the cutting into compost-mixed soil at about 45–60° to the soil surface.",
          "Water regularly and observe growth."
        ]
      },
      {
        "title": "Grafting",
        "bullets": [
          "Take a healthy rooted plant (Plant A) and a healthy stem piece from another variety (Plant B).",
          "Make a wound or slit on a twig of Plant A.",
          "Insert and fit Plant B's stem piece into the slit.",
          "Protect the graft with cotton cloth or wrapping film to keep pests out until it heals; cut other branches of Plant A.",
          "Water regularly and observe the growth of Plant B along with Plant A.",
          "Example in the activity: wild rose as Plant A and yellow/pink rose varieties as Plant B."
        ]
      },
      {
        "title": "Layering",
        "bullets": [
          "Select a flexible, thin twig such as from lemon and bury its middle portion under the soil.",
          "Water regularly and observe new leaves.",
          "Roots develop from the buried region after about 10–15 days.",
          "Once roots develop, cut the twig from the parent plant so it can grow as a new plant."
        ]
      }
    ]
  },
  {
    "title": "Asexual Reproduction in Yeast, Hydra & Fungi",
    "items": [
      {
        "title": "Budding in Yeast",
        "bullets": [
          "Yeast can reproduce by budding: a small outgrowth develops from the parent cell.",
          "Activity: prepare 20 mL sugar solution (1 g sugar in 10 mL), add a pinch of yeast, plug the tube with cotton and keep it warm for 1–2 hours.",
          "Observe a drop under a compound microscope; small round buds may be seen emerging from parent yeast cells."
        ]
      },
      {
        "title": "Budding in Hydra",
        "bullets": [
          "In hydra, repeated cell division at a specific site on the parent body forms a small outgrowth called a bud.",
          "The bud enlarges and eventually separates from the parent to live independently.",
          "Several buds may be present on the parent at the same time."
        ]
      },
      {
        "title": "Louis Pasteur & Biogenesis",
        "bullets": [
          "For a long time, people believed that living organisms could arise spontaneously from non-living matter.",
          "Experiments by Louis Pasteur showed that new life comes from pre-existing life.",
          "His work supported the germ theory of disease, strengthened the idea that all cells arise from pre-existing cells, and contributed to food and instrument sterilisation."
        ]
      },
      {
        "title": "Spore Formation in Fungi",
        "bullets": [
          "Mould on moist bread grows from fungal spores already present in the air.",
          "Warmth and moisture allow spores to germinate and reproduce rapidly; lower temperatures slow or stop reproduction.",
          "Spores are formed in sac-like structures or on swollen vesicles on fungal hyphae.",
          "Millions of spores may be produced by one mould colony; they are lightweight, usually single-celled and easily carried by air currents.",
          "When moisture and nutrients are available, spores germinate into new individuals."
        ]
      },
      {
        "title": "Bread Mould Activity",
        "bullets": [
          "Moisten a bread/roti slice and place it on moist cotton/tissue in a closed moist chamber.",
          "Keep it warm, dark and moist; observe daily without touching it directly.",
          "After about three days, mould can be examined with a magnifying glass and later under a microscope using cotton blue stain under teacher guidance.",
          "Observation: thread-like hyphae with round sacs containing spores may be seen; Rhizopus and Aspergillus are shown in the textbook."
        ]
      },
      {
        "title": "Fungi · Uses in Society",
        "bullets": [
          "Fungi degrade organic wastes and pollutants and help remove heavy metals from industrial wastes.",
          "Some antibiotics are derived from fungi, including penicillin and amoxicillin."
        ]
      },
      {
        "title": "Temperature, Moisture & Refrigeration",
        "bullets": [
          "Mould spores in air need warmth and moisture to grow on bread or roti; the activity uses a warm moist chamber around 25–35 °C.",
          "Lower temperatures slow or stop mould reproduction, which is why perishable food is refrigerated.",
          "Before refrigerators became common, fresh food typically lasted only about 1–2 days; refrigeration, including deep freezing, enabled longer storage and year-round availability of fruits, vegetables and dairy products while preventing spoilage by moulds and bacteria."
        ]
      }
    ]
  },
  {
    "title": "Asexual Reproduction · Core Idea",
    "items": [
      {
        "title": "Mitosis & Clones",
        "bullets": [
          "Mitosis is the central cell-division process behind the asexual reproduction studied in the chapter.",
          "It produces daughter cells with the same chromosome number as the parent and genetically identical genetic information.",
          "Genetically identical offspring are called clones.",
          "Asexual reproduction is fast and helps populations increase rapidly when environmental conditions are favourable."
        ]
      }
    ]
  },
  {
    "title": "11.2 · Sexual Reproduction & Meiosis",
    "items": [
      {
        "title": "Sexual Reproduction",
        "bullets": [
          "Sexual reproduction involves two parents contributing genetic material to a new individual.",
          "Meiosis prevents chromosome number from doubling in every generation by reducing the chromosome number by half in reproductive cells."
        ]
      },
      {
        "title": "Chromosomes & Gametes",
        "bullets": [
          "Chromosomes are thread-like structures in the nucleus that carry genetic information.",
          "Humans have 23 pairs, or 46 chromosomes, in body cells.",
          "Meiosis produces haploid gametes from diploid parent cells.",
          "In animals, male gametes are sperm and female gametes are eggs.",
          "In plants, pollen grains contain male gametes and deliver them to ovules containing female gametes.",
          "During meiosis, chromosome pairs separate so each gamete receives one chromosome from each pair; a human gamete therefore has 23 chromosomes."
        ]
      },
      {
        "title": "How Meiosis Creates Variation",
        "bullets": [
          "Random separation and mixing of chromosomes creates many possible combinations of characters.",
          "With three pairs of contrasting characters, the textbook bead activity demonstrates 8 possible combinations.",
          "With 23 chromosome pairs carrying many characters, the number of possible combinations is extremely large.",
          "This helps make children genetically different from their parents and siblings."
        ]
      },
      {
        "title": "Variation, Adaptation & Evolution",
        "bullets": [
          "Variation among individuals is important for species survival.",
          "Some variations may help individuals adapt better to changing environments.",
          "Over time, such advantageous variations can contribute to evolution.",
          "Examples given: ability of some people to tolerate low oxygen at high altitudes and ability to digest milk in adulthood."
        ]
      }
    ]
  },
  {
    "title": "11.2.2 · Sexual Reproduction in Flowering Plants",
    "items": [
      {
        "title": "Flower as Reproductive Organ",
        "bullets": [
          "Flowering plants (angiosperms) are the most diverse group of plants on Earth.",
          "Flowers are the reproductive organs of angiosperms; non-flowering plants such as pines also reproduce sexually.",
          "Sepals are the outermost green whorl and protect the flower in the bud stage.",
          "Petals are the usually coloured parts of the flower and may be attractive to pollinators."
        ]
      },
      {
        "title": "Parts of a Complete Flower",
        "table": {
          "headers": ["Part", "Structure / role"],
          "rows": [
            ["Sepal", "Outermost whorl; protects the flower bud."],
            ["Petal", "Usually coloured; helps attract pollinators."],
            ["Stamen", "Male reproductive part; consists of filament and anther."],
            ["Anther", "Produces pollen grains containing male gametes."],
            ["Pistil", "Female reproductive part; consists of stigma, style and ovary."],
            ["Stigma", "Tip of pistil; may be flat and/or sticky and receives pollen."],
            ["Style", "Thin tube connecting stigma to ovary."],
            ["Ovary", "Contains ovules; each ovule has an egg cell (female gamete)."]
          ]
        }
      },
      {
        "title": "Flower Observation Activity",
        "bullets": [
          "Collect different flowers and observe parts from the outer whorl inward.",
          "Record presence/absence of sepals, petals, stamens and pistil and infer their functions from visible features.",
          "Observe transverse and longitudinal sections of the ovary with a dissecting microscope and record additional features.",
          "A complete flower has sepals, petals, stamens and pistil, though some flowers may have fused sepals and/or petals."
        ]
      }
    ]
  },
  {
    "title": "Pollination · Experiment & Types",
    "items": [
      {
        "title": "Pollination",
        "bullets": [
          "Pollination is the transfer of pollen grains from the anther to the stigma.",
          "The chapter's pea activity shows that transfer of pollen to the stigma is necessary for fruit formation."
        ]
      },
      {
        "title": "Pea Pollination Activity",
        "bullets": [
          "Select juvenile buds and freshly opened flowers on a pea plant.",
          "Remove stamens from selected buds/flowers and cover flowers with muslin bags; leave one freshly opened flower uncovered.",
          "Observe fruit formation.",
          "Fruit forms in the treatments except the flower bud in which stamens were removed, supporting the conclusion that pollen transfer to the stigma is necessary for fruit formation."
        ]
      },
      {
        "title": "Self- & Cross-Pollination",
        "table": {
          "headers": ["Type", "Meaning"],
          "rows": [
            ["Self-pollination", "Pollen reaches the stigma of the same flower or another flower of the same plant."],
            ["Cross-pollination", "Pollen moves from a flower of one plant to the stigma of a flower of another plant of the same type/species."]
          ]
        }
      },
      {
        "title": "Pollinating Agents",
        "bullets": [
          "Pollinators include wind, water, insects and birds.",
          "Wind-pollinated examples: wheat, maize and rice. Their pollen is light, small and produced in large numbers; stigmas are long and feathery.",
          "Water-pollinated examples: Vallisneria and Hydrilla; water currents carry pollen between flowers.",
          "Insect-pollinated examples: sunflower, hibiscus and marigold. Flowers may be brightly coloured, fragrant and nectar-producing; pollen is often large, sticky or spiny and the stigma is sticky.",
          "Bird-pollinated examples: coral tree and hibiscus; birds mentioned include Indian white-eye and sunbirds."
        ]
      }
    ]
  },
  {
    "title": "Fertilisation, Seed & Fruit Formation",
    "items": [
      {
        "title": "Fertilisation",
        "bullets": [
          "After compatible pollen reaches the stigma, it produces a pollen tube that grows through the style into the ovary.",
          "The male gamete travels through the pollen tube to the ovule and fuses with the egg cell.",
          "Fusion of male and female gametes is called fertilisation.",
          "The fertilised egg is called a zygote and develops into an embryo."
        ]
      },
      {
        "title": "Formation of Fruit & Seed",
        "bullets": [
          "The ovary enlarges and develops into a fruit.",
          "The ovules develop into seeds inside the fruit.",
          "Seeds may be dispersed by wind, water or animals.",
          "When water, air and temperature are favourable, seeds germinate and grow into new plants.",
          "Sexual reproduction in plants creates variation that can help species survive and adapt."
        ]
      },
      {
        "title": "Pollination Efficiency · Data",
        "table": {
          "headers": ["Strategy", "Pollen released per flower", "Estimated average seeds formed"],
          "rows": [
            ["Wind-pollinated grasses (maize, wheat)", "5,00,000–10,00,000", "50–200"],
            ["Insect-pollinated plants (sunflower)", "20,000–40,000", "800–1,000"]
          ]
        },
        "note": [
          "Wind pollination releases far more pollen, while insect pollination in the textbook data produces more seeds per flower.",
          "Producing huge numbers of wind-borne pollen increases the chance that some reach compatible stigmas."
        ]
      }
    ]
  },
  {
    "title": "Plant Breeding & Scientist",
    "items": [
      {
        "title": "P. Maheshwari",
        "bullets": [
          "P. Maheshwari is described as the 'Father of Indian Embryology'.",
          "Embryology is the study of plant reproductive organs.",
          "He developed in-vitro fertilisation in flowering plants by fusing an egg and male gamete in a test tube to create new hybrid plants.",
          "He was among the first scientists to grow plant embryos on artificial nutrient media.",
          "His book, An Introduction to the Embryology of Angiosperms (1950), became a classic."
        ]
      },
      {
        "title": "Plant Breeding Applications",
        "bullets": [
          "Selective breeding: farmers select plants with desirable characters for reproduction.",
          "Artificial hybridisation: remove stamens, cover the flower to prevent self-pollination, then manually transfer pollen carrying desired characters.",
          "Genetic engineering: insert genetic material for desired characters into DNA of selected varieties.",
          "These methods can produce high-yielding and disease-resistant varieties and have greatly influenced crop production."
        ]
      }
    ]
  },
  {
    "title": "11.3–11.4 · Sexual Reproduction in Animals",
    "items": [
      {
        "title": "External vs Internal Fertilisation",
        "table": {
          "headers": ["Feature", "External fertilisation", "Internal fertilisation"],
          "rows": [
            ["Where it occurs", "Outside the female body, usually in water.", "Inside the female body."],
            ["Examples", "Many aquatic animals such as frogs and most fish.", "Reptiles, birds and mammals."],
            ["Eggs", "Usually many eggs are released because many may be destroyed or eaten.", "Generally fewer eggs are needed because the fertilised egg/embryo is more protected."],
            ["Young survival", "Generally lower.", "Generally higher."]
          ]
        }
      },
      {
        "title": "Animal Reproductive Strategies",
        "table": {
          "headers": ["Animal", "Habitat", "Fertilisation", "Eggs produced", "Estimated survival"],
          "rows": [
            ["Fish", "Water", "External", "100s–1000s at a time", "Low"],
            ["Frog", "Water/land", "External", "5,000–50,000 at a time", "Low"],
            ["Lizard", "Land", "Internal", "2–20 at a time", "Moderate"],
            ["Bird", "Water/land", "Internal", "1–15 at a time", "Moderate to High"]
          ]
        }
      },
      {
        "title": "Embryo Nutrition & Development",
        "bullets": [
          "Fish, amphibians and insects may produce hundreds to thousands of yolky eggs.",
          "The yolk supplies nutrients to the developing embryo; in many such species it is enough to produce a larva.",
          "Larvae may feed on organic wastes such as rotten food and manure and grow before transforming into adults; butterfly and frog life cycles illustrate this pattern.",
          "Reptile and bird eggs contain enough yolk to nourish the embryo until hatching.",
          "In mammals, the zygote develops inside the female body.",
          "Some young are independent soon after birth/hatching, while others need extended feeding and care; this depends broadly on the duration and site of embryo development.",
          "Mammals typically feed young ones with breast milk for some time after birth."
        ]
      }
    ]
  },
  {
    "title": "11.5 · Reproduction in Human Beings",
    "items": [
      {
        "title": "Reproductive Maturity",
        "bullets": [
          "During growth into adulthood, reproductive organs mature and begin producing gametes: sperm in males and eggs in females.",
          "Fertilisation inside the female body forms a zygote, which develops into an embryo and eventually a foetus in the uterus."
        ]
      },
      {
        "title": "Male Reproductive System",
        "bullets": [
          "Testes are two oval-shaped organs that produce sperm and are located in the scrotum.",
          "The scrotum keeps the testes slightly cooler than normal body temperature, which is necessary for sperm formation.",
          "Testes also produce hormones that regulate sperm production and cause physical changes during puberty.",
          "Sperm travel from testes through the vas deferens, which opens into the urethra; the urethra is a common passage for urine and sperm.",
          "Seminal vesicles and prostate add fluids that nourish sperm and help them remain active and move.",
          "A sperm has a head containing genetic material and a long tail that helps it swim toward the egg."
        ]
      },
      {
        "title": "Female Reproductive System",
        "bullets": [
          "The female reproductive system includes a pair of ovaries, oviducts/fallopian tubes, uterus and vagina.",
          "Ovaries produce eggs and release hormones.",
          "Oviducts connect each ovary to the uterus.",
          "The uterus is a bag-like organ where the foetus develops.",
          "The uterus opens into the vagina through the narrow cervix."
        ]
      }
    ]
  },
  {
    "title": "Gametogenesis & Gamete Comparison",
    "items": [
      {
        "title": "Gametogenesis",
        "bullets": [
          "Gametogenesis is the formation of gametes and occurs in testes and ovaries.",
          "Gametes are formed by meiosis, which reduces chromosome number by half.",
          "Humans have 46 chromosomes in body cells, but sperm and eggs have 23 each.",
          "When sperm and egg fuse, the zygote returns to 46 chromosomes, maintaining the species chromosome number.",
          "Male gametogenesis produces numerous tiny, motile and active sperm; female gametogenesis produces a single large egg."
        ]
      },
      {
        "title": "Sperm vs Egg",
        "table": {
          "headers": ["Feature", "Sperm", "Egg"],
          "rows": [
            ["Size", "Very small", "Large"],
            ["Number produced", "Millions", "Few"],
            ["Stored nutrients", "Absent", "Present"],
            ["Motility", "Actively motile", "Non-motile"]
          ]
        }
      },
      {
        "title": "Ovulation & Fertilisation",
        "bullets": [
          "At birth, a girl's ovaries contain millions of immature eggs.",
          "From puberty, usually one mature egg is released each month from one ovary; this is called ovulation.",
          "Before ovulation, the uterine lining becomes thick and prepared to receive a developing zygote.",
          "The egg moves from the ovary into the oviduct.",
          "Millions of sperm enter through the vagina during sexual intercourse and may reach the egg in the oviduct.",
          "Fusion of sperm and egg forms a zygote.",
          "The zygote undergoes mitotic divisions while travelling to the uterus and implants in the thick, blood-vessel-rich uterine lining.",
          "Implantation marks the beginning of pregnancy."
        ]
      },
      {
        "title": "In-vitro Fertilisation (IVF)",
        "bullets": [
          "IVF combines an egg and sperm outside the female body, usually in a laboratory culture dish.",
          "The resulting fertilised egg is then implanted in the uterus to begin a possible pregnancy.",
          "The term 'test tube baby' is commonly used, although fertilisation actually occurs in a culture dish, not a test tube.",
          "In 1978, Subhash Mukhopadhyay of Kolkata pioneered India's first test tube baby through experimental IVF work; the baby was Kanupriya Agarwal, nicknamed Durga."
        ]
      }
    ]
  },
  {
    "title": "Menstruation, Sex Chromosomes & Hygiene",
    "items": [
      {
        "title": "Menstruation",
        "bullets": [
          "If the egg is not fertilised, it remains viable for about a day and then degenerates.",
          "The thick uterine lining is no longer needed and sheds with some blood through the vagina.",
          "This process is called menstruation or a period and usually lasts 3–7 days.",
          "The cycle of ovulation, uterine preparation and menstruation typically repeats every 21–35 days, often around 28 days.",
          "It generally begins at puberty, around ages 10–14 in girls, and continues until menopause, around age 50."
        ]
      },
      {
        "title": "Typical 28-Day Cycle",
        "table": {
          "headers": ["Days", "Main event"],
          "rows": [
            ["1–5", "Menstruation: uterine lining is shed."],
            ["6–14", "Uterine lining rebuilds; egg matures in the ovary."],
            ["Around 14", "Ovulation: ovary releases a mature egg."],
            ["15–28", "Uterine lining becomes thicker and rich in blood vessels; if fertilisation does not occur, it begins breaking down and the cycle repeats."]
          ]
        },
        "note": [
          "The textbook asks students to critically examine the claim that ovulation always occurs on day 14.",
          "A 28-day diagram uses day 14 as a typical reference, but the chapter states that cycle length commonly varies from 21–35 days, so ovulation is not guaranteed to occur on day 14 in every person or every cycle."
        ]
      },
      {
        "title": "Biological Sex & Sex Chromosomes",
        "bullets": [
          "Females have XX sex chromosomes; males have XY.",
          "The mother always contributes an X chromosome.",
          "The father contributes either X or Y, producing XX or XY respectively."
        ]
      },
      {
        "title": "Menstrual Hygiene",
        "bullets": [
          "Use menstrual products such as sanitary pads, tampons or menstrual cups.",
          "Clean the genital area regularly with water; the textbook advises avoiding soap because it can disrupt natural bacterial balance.",
          "Wash hands with soap and water before and after changing menstrual products.",
          "Wrap used pads before disposal; do not flush them down the toilet.",
          "Reusable products should be cleaned as directed and dried completely before reuse.",
          "Change pads every 4–6 hours, or more often with heavy flow."
        ]
      }
    ]
  },
  {
    "title": "Pregnancy, Childbirth & Maternal Health",
    "items": [
      {
        "title": "Pregnancy & Trimesters",
        "bullets": [
          "Human pregnancy lasts about nine months and is divided into three trimesters.",
          "First trimester: the fertilised egg develops into an embryo during the first two months; major organs begin forming. From about the ninth week, it is called a foetus.",
          "Second trimester: the foetus grows larger and stronger, and the mother can usually feel movements.",
          "Third trimester: the baby grows rapidly and prepares for life outside the womb.",
          "The uterus protects and nourishes the developing baby."
        ]
      },
      {
        "title": "Childbirth & Newborn Care",
        "bullets": [
          "Strong uterine muscle contractions help push the foetus through the birth canal.",
          "If normal vaginal birth is not possible or safe, medical or surgical procedures may be used to deliver the baby safely.",
          "Breastfeeding is essential because breast milk provides complete nutrition and protects the infant from many diseases.",
          "Newborns should be kept warm, vaccinated on time and handled gently.",
          "The mother also needs nutritious food, adequate rest and avoidance of harmful habits such as smoking and alcohol; medicines should be taken only with medical advice."
        ]
      },
      {
        "title": "Mother's Health During Pregnancy",
        "bullets": [
          "A pregnant woman should eat a balanced diet rich in proteins, vitamins and minerals.",
          "Regular medical check-ups and following medical advice about light exercise and rest are important.",
          "Emotional well-being and family support help maintain health and reduce stress.",
          "More than 10 lakh ASHA workers are described as community health workers promoting hygiene, immunisation and family planning under the National Health Mission, especially in rural areas; they also advise on maternal care, safe deliveries and contraceptive methods."
        ]
      },
      {
        "title": "Postpartum Depression",
        "bullets": [
          "Some mothers experience anxiety and fatigue after delivery; the chapter identifies this as post-partum depression.",
          "It is a recognised and treatable condition.",
          "Mothers who feel low or overwhelmed should be encouraged to seek help from a doctor, nurse or ASHA worker."
        ]
      }
    ]
  },
  {
    "title": "Sexual Maturity, STIs & Pregnancy Prevention",
    "items": [
      {
        "title": "Sexual vs Emotional Maturity",
        "bullets": [
          "Sexual maturation means the body becomes capable of reproduction and occurs gradually during adolescence.",
          "Examples include sperm production in boys and menstrual cycles in girls.",
          "Physical sexual maturity does not mean a person is automatically ready for adult responsibilities.",
          "Emotional maturity develops later and involves handling feelings, communicating clearly and making thoughtful decisions."
        ]
      },
      {
        "title": "Sexually Transmitted Infections (STIs)",
        "bullets": [
          "STIs can pass from an infected person to an uninfected person through close sexual contact.",
          "Examples named in this chapter: gonorrhoea, herpes, syphilis, genital warts and HIV; HIV can eventually lead to AIDS.",
          "Some STIs are not curable yet.",
          "Condoms can help reduce STI transmission and also help prevent pregnancy."
        ]
      },
      {
        "title": "Contraceptive Methods",
        "table": {
          "headers": ["Method", "How it works / key point"],
          "rows": [
            ["Condoms / vaginal covers", "Barrier methods that stop sperm from reaching the egg; condoms also reduce STI transmission."],
            ["Oral pills", "Medicines that alter hormones and the release of eggs; may have side effects."],
            ["IUDs such as Copper-T", "Placed in the uterus to prevent pregnancy; the chapter notes that they may sometimes irritate the uterus."],
            ["Surgical methods", "Vas deferens in males or fallopian tubes in females are blocked so sperm and egg cannot meet."]
          ]
        }
      },
      {
        "title": "Abortion & Legal Protection",
        "bullets": [
          "In some cases, unwanted pregnancies may be removed by surgery, generally within the first trimester when the embryo is very small; this procedure is called abortion.",
          "Self-selective abortion based on preference for a particular sex can cause an imbalance in societal sex ratio.",
          "Prenatal sex determination is strictly prohibited by law in India, as stated in the textbook."
        ]
      },
      {
        "title": "Indian Contraceptive Development",
        "bullets": [
          "Scientists at the Central Drug Research Institute, Lucknow, developed a non-steroidal, non-hormonal oral contraceptive pill.",
          "The textbook describes it as a once-weekly pill and states that it is provided free through the National Family Planning Programme."
        ]
      }
    ]
  },
  {
    "title": "Applications, Experiments & Exam Points",
    "items": [
      {
        "title": "Apple Pollination Investigation",
        "bullets": [
          "Place A: natural pollinators were allowed to pollinate apple flowers.",
          "Place B: beekeeping was added as a mixed-farming practice; farmers also obtained honey.",
          "Graph data: fruit set was about 26% with natural pollination and 40% with bee colonies; fruit drop was about 35% with natural pollination and 8% with bee colonies.",
          "The investigation examines whether adding bee colonies affects fruit set and fruit drop, using fruit set and fruit drop as measured parameters."
        ]
      },
      {
        "title": "Pollen Germination Experiment",
        "bullets": [
          "Suresh prepares slides with pollen grains in sugar concentrations of 0%, 2.5%, 5%, 7.5% and 10%.",
          "Hypothesis examples: sugar concentration affects pollen germination; there may be an optimum concentration for germination.",
          "Important controlled parameters include the pollen source/age, amount of pollen, slide preparation, water/medium volume, temperature, time allowed for germination and microscope/observation conditions."
        ]
      },
      {
        "title": "Flower Clues & Pollination",
        "table": {
          "headers": ["Flower clue", "Likely pollination inference"],
          "rows": [
            ["Tomato: stamens cover the stigma", "Self-pollination is facilitated."],
            ["Wheat: flowers open after pollination", "Pollination occurs before the flowers open; the clue points to self-pollination in the textbook context."],
            ["Papaya: male and female flowers often occur on different trees", "Cross-pollination is required between plants with different sexes."]
          ]
        }
      },
      {
        "title": "Important Applications",
        "bullets": [
          "Asexual propagation helps farmers multiply desirable crops rapidly and uniformly.",
          "Tissue culture can mass-produce healthy plantlets and reduce virus-infected planting material.",
          "Sexual reproduction creates variation and is useful in plant breeding.",
          "Pollination by managed bees can improve fruit set and reduce fruit drop in the apple investigation shown in the chapter.",
          "Fungi have applications in waste degradation, heavy-metal removal and antibiotic production."
        ]
      }
    ]
  },
  {
    "title": "Revise, Reflect, Refine · Answer Points",
    "items": [
      {
        "title": "Questions 1–5",
        "bullets": [
          "1. Cross-pollination — pollen is transferred from another plant of the same type after stamens are removed.",
          "2. Correct order: Pollination → pollen germination on stigma → fertilisation → formation of zygote.",
          "3. Assertion–Reason: A is false and R is false. The zygote does not immediately attach; the uterine lining must be prepared and implantation occurs after mitotic divisions during travel to the uterus.",
          "4. Asexual reproduction produces genetically identical offspring because it involves one parent and the offspring arise through mitotic reproduction without mixing genetic material from two parents.",
          "5. During pregnancy, the uterine lining is maintained to support the developing embryo/foetus, so it is not shed as menstruation."
        ]
      },
      {
        "title": "Questions 6–9",
        "bullets": [
          "6. Night-blooming flowers may be white or light so they are more visible to nocturnal pollinators in low light.",
          "7. Vegetatively propagated plants are genetically very similar/identical, so a disease that affects one can affect many plants similarly; sexual reproduction creates more genetic variation.",
          "8. Exclusive self-pollination limits new genetic combinations and therefore tends to reduce genetic diversity over generations.",
          "9. Suitable methods include cutting, grafting, layering and tissue culture because they use asexual reproduction and can rapidly produce genetically identical plants."
        ]
      },
      {
        "title": "Questions 10–13",
        "bullets": [
          "10. In the pollen experiment, test whether sugar concentration affects germination and whether an optimum concentration gives maximum germination; keep other experimental conditions constant.",
          "11. Tomato: self-pollination is facilitated by stamens covering the stigma. Wheat: the flower opens after pollination. Papaya: different trees bearing male and female flowers favour cross-pollination.",
          "12. The apple investigation compares natural pollination with bee-colony-assisted pollination. Bee colonies show higher fruit set (40% vs ~26%) and lower fruit drop (~8% vs ~35%) in the displayed data.",
          "13. The statement that ovulation always occurs on day 14 is not correct. Day 14 is a typical reference for a 28-day cycle, but the chapter states that cycles commonly range from 21–35 days, so ovulation timing can vary; the chapter also uses 'usually' rather than 'always'."
        ]
      }
    ]
  },
  {
    "title": "Quick Revision · One-Page Core",
    "items": [
      {
        "title": "Must Remember",
        "bullets": [
          "Reproduction → continuity of life.",
          "Asexual → one parent → genetically identical offspring/clones → fast; examples: vegetative propagation, budding, spore formation.",
          "Sexual → two parents → meiosis + gamete formation → fertilisation → variation.",
          "Meiosis: diploid → haploid; human gametes have 23 chromosomes.",
          "Flower: stamen = male; pistil = female; anther produces pollen; ovary contains ovules.",
          "Pollination = anther → stigma; self = same flower/plant; cross = another plant of same type.",
          "Fertilisation → male gamete + egg → zygote; ovule → seed; ovary → fruit.",
          "External fertilisation: many aquatic animals; many eggs, lower survival. Internal: reptiles, birds, mammals; greater protection and generally higher survival.",
          "Humans: testes → sperm; ovaries → eggs; sperm + egg → zygote → embryo → foetus.",
          "Menstrual cycle: typically 21–35 days; often around 28; ovulation is commonly around the middle but not always day 14.",
          "Pregnancy: about nine months; three trimesters; maternal nutrition, check-ups, rest and emotional support are important.",
          "Condoms help prevent pregnancy and reduce STI transmission; other contraceptive methods include pills, IUDs and surgical methods.",
          "Variation helps populations adapt; sexual reproduction and plant breeding use this principle."
        ]
      }
    ]
  }
]
$json$
)
on conflict (chapter_slug) do update
set
  kicker = excluded.kicker,
  subtitle = excluded.subtitle,
  footer = excluded.footer,
  sections = excluded.sections;
