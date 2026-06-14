const Organismsandpopulations = [
  // ─── ORGANISM AND ITS ENVIRONMENT (ABIOTIC FACTORS & RESPONSES) ─────────────
  {
    id: 1,
    question: "What are the four major abiotic factors discussed ?",
    answer: "Temperature, water, light and soil."
  },
  {
    id: 2,
    question: "What is eurythermal?",
    answer: "Organisms that can tolerate and thrive in a wide range of temperatures."
  },
  {
    id: 3,
    question: "What is stenothermal?",
    answer: "Organisms restricted to a narrow range of temperatures."
  },
  {
    id: 4,
    question: "What is euryhaline?",
    answer: "Organisms that can tolerate a wide range of salinities."
  },
  {
    id: 5,
    question: "What is stenohaline?",
    answer: "Organisms restricted to a narrow range of salinities."
  },
  {
    id: 6,
    question: "What are the four major responses of organisms to abiotic stress?",
    answer: "Regulate, conform, migrate and suspend."
  },
  {
    id: 7,
    question: "What is regulation?",
    answer: "Maintaining constant body temperature, osmotic concentration, etc., despite environmental changes."
  },
  {
    id: 8,
    question: "What is conforming?",
    answer: "Allowing body functions to change according to environmental conditions."
  },
  {
    id: 9,
    question: "What is migration?",
    answer: "Moving temporarily to a more hospitable area during stressful periods."
  },
  {
    id: 10,
    question: "What is suspension?",
    answer: "Reducing metabolic activity and entering a dormant state during unfavorable conditions."
  },
  {
    id: 11,
    question: "What are the major forms of suspension in organisms?",
    answer: "Spores, dormancy, hibernation, estivation and diapause."
  },
  {
    id: 12,
    question: "What is hibernation?",
    answer: "Winter dormancy seen in animals such as bears."
  },
  {
    id: 13,
    question: "What is estivation?",
    answer: "Summer dormancy adopted by some animals like snails and fishes to avoid heat and desiccation."
  },
  {
    id: 14,
    question: "What is diapause?",
    answer: "A stage of suspended development seen in many zooplankton species."
  },
  {
    id: 15,
    question: "Why are small animals rarely found in polar regions?",
    answer: "Because they have a larger surface area relative to body volume and lose body heat very fast."
  },
  {
    id: 16,
    question: "How does the kangaroo rat survive in desert conditions?",
    answer: "It fulfills its water requirements through internal fat oxidation and can survive without drinking water."
  },
  {
    id: 17,
    question: "How do desert plants reduce water loss?",
    answer: "By having thick cuticles and sunken stomata."
  },

  // ─── POPULATION ATTRIBUTES ───────────────────────────────────────────────────
  {
    id: 18,
    question: "What is population density?",
    answer: "The number of individuals of a species per unit area or volume."
  },
  {
    id: 19,
    question: "How are birth and death rates expressed in a population?",
    answer: "As per capita births and deaths (rates of change with respect to members of the population)."
  },
  {
    id: 20,
    question: "What does the sex ratio of a population indicate?",
    answer: "The ratio or percentage of males and females in a population (e.g., 60 percent females, 40 percent males)."
  },
  {
    id: 21,
    question: "What are the three age groups used to represent the age distribution of a population?",
    answer: "Pre-reproductive, reproductive, and post-reproductive."
  },
  {
    id: 22,
    question: "What are the three shapes of age pyramids and what growth status do they indicate?",
    answer: "Expanding (Broad base/Triangular), stable (Bell-shaped), and declining (Urn-shaped)."
  },
  {
    id: 23,
    question: "In what situation is measuring population density by 'percent cover' or 'biomass' more meaningful than counting total numbers?",
    answer: "When evaluating the ecological role of a massive organism (like a single large banyan tree) surrounded by numerous smaller organisms (like 200 Parthenium plants)."
  },
  {
    id: 24,
    question: "How is the tiger census in our national parks and tiger reserves often estimated indirectly?",
    answer: "Based on pug marks and fecal pellets."
  },

  // ─── POPULATION GROWTH ───────────────────────────────────────────────────────
  {
    id: 25,
    question: "What are the four basic processes that fluctuate population density?",
    answer: "Natality (B) and Immigration (I) increase it; Mortality (D) and Emigration (E) decrease it."
  },
  {
    id: 26,
    question: "What is the mathematical equation for population density at time t+1 (Nt+1)?",
    answer: "Nt+1 = Nt + [(B + I) - (D + E)]"
  },
  {
    id: 27,
    question: "What type of growth curve is plotted when resources in the habitat are unlimited?",
    answer: "An exponential or geometric growth curve (J-shaped curve)."
  },
  {
    id: 28,
    question: "What is the differential equation for exponential growth?",
    answer: "dN/dt = rN (where r is the intrinsic rate of natural increase)."
  },
  {
    id: 29,
    question: "What is the integral form of the exponential growth equation?",
    answer: "Nt = N0 e^(rt)"
  },
  {
    id: 30,
    question: "What is the term for the maximum possible number of individuals a habitat's resources can support?",
    answer: "Carrying capacity (K)."
  },
  {
    id: 31,
    question: "What type of growth curve is plotted when resources in the habitat are limited?",
    answer: "A logistic growth curve (Sigmoid or S-shaped curve)."
  },
  {
    id: 32,
    question: "What is the mathematical equation for logistic growth?",
    answer: "dN/dt = rN [(K - N) / K]"
  },
  {
    id: 33,
    question: "What is the specific name given to the logistic growth model in NCERT?",
    answer: "Verhulst-Pearl Logistic Growth."
  },

  // ─── LIFE HISTORY VARIATION ──────────────────────────────────────────────────
  {
    id: 34,
    question: "What is Darwinian fitness in the context of population growth?",
    answer: "Populations evolving to maximise their reproductive fitness, also called high 'r' value."
  },
  {
    id: 35,
    question: "Give two NCERT examples of organisms that breed only once in their lifetime.",
    answer: "Pacific salmon fish and bamboo."
  },
  {
    id: 36,
    question: "Give two NCERT examples of organisms that produce a large number of small-sized offspring.",
    answer: "Oysters and pelagic fishes."
  },
  {
    id: 37,
    question: "Give two NCERT examples of organisms that produce a small number of large-sized offspring.",
    answer: "Birds and mammals."
  },

  // ─── POPULATION INTERACTIONS ─────────────────────────────────────────────────
  {
    id: 38,
    question: "What are the symbols used for population interactions?",
    answer: "+ indicates benefit, - indicates harm, and 0 indicates no effect."
  },
  {
    id: 39,
    question: "Define amensalism.",
    answer: "An interaction where one species is harmed whereas the other is unaffected (-, 0)."
  },
  {
    id: 40,
    question: "What are the three population interactions where one species benefits and the other is harmed (+, -)?",
    answer: "Predation, Parasitism, and Herbivory."
  },
  {
    id: 41,
    question: "How was the invasive prickly pear cactus brought under control in Australia in the 1920s?",
    answer: "By introducing a cactus-feeding predator (a moth) from its natural habitat."
  },
  {
    id: 42,
    question: "What happened when the starfish Pisaster was experimentally removed from an enclosed intertidal area on the American Pacific coast?",
    answer: "More than 10 species of invertebrates became extinct within a year due to increased interspecific competition."
  },
  {
    id: 43,
    question: "Why is the Monarch butterfly highly distasteful to its predators (birds)?",
    answer: "Because of a special chemical acquired in its body by feeding on a poisonous weed during its caterpillar stage."
  },
  {
    id: 44,
    question: "Give an example of a morphological means of defense in plants against herbivores.",
    answer: "Thorns in Acacia and Cactus."
  },
  {
    id: 45,
    question: "Why do cattle and goats never browse on the Calotropis weed?",
    answer: "Because the plant produces highly poisonous cardiac glycosides."
  },
  {
    id: 46,
    question: "What is interference competition?",
    answer: "When the feeding efficiency of one species is reduced due to the interfering presence of another species, even if resources are abundant."
  },
  {
    id: 47,
    question: "What happened to the Abingdon tortoise in the Galapagos Islands after goats were introduced?",
    answer: "They became extinct within a decade due to the greater browsing efficiency of the goats."
  },
  {
    id: 48,
    question: "What is competitive release?",
    answer: "A phenomenon where a species expands its distributional range dramatically when a superior competing species is experimentally removed."
  },
  {
    id: 49,
    question: "Which barnacle species dominated and excluded the smaller Chthamalus in Connell's elegant field experiments in Scotland?",
    answer: "The competitively superior barnacle Balanus."
  },
  {
    id: 50,
    question: "State Gause's Competitive Exclusion Principle.",
    answer: "Two closely related species competing for the same limiting resources cannot co-exist indefinitely, and the competitively inferior one will be eliminated."
  },
  {
    id: 51,
    question: "What is resource partitioning?",
    answer: "A mechanism to avoid competition where competing species choose different times for feeding or different foraging patterns."
  },
  {
    id: 52,
    question: "Who showed that five closely related species of warblers could co-exist on the same tree through resource partitioning?",
    answer: "MacArthur."
  },
  {
    id: 53,
    question: "List four evolutionary adaptations typically seen in parasites.",
    answer: "Loss of unnecessary sense organs, presence of adhesive organs/suckers, loss of digestive system, and high reproductive capacity."
  },
  {
    id: 54,
    question: "Which two intermediate hosts/vectors are required by the human liver fluke to complete its complex life cycle?",
    answer: "A snail and a fish."
  },
  {
    id: 55,
    question: "Give an NCERT example of a parasitic plant that has lost its chlorophyll and leaves in the course of evolution.",
    answer: "Cuscuta, growing on hedge plants."
  },
  {
    id: 56,
    question: "What is brood parasitism?",
    answer: "A phenomenon where a parasitic bird lays its eggs in the nest of its host and lets the host incubate them."
  },
  {
    id: 57,
    question: "Give a classic NCERT example of brood parasitism.",
    answer: "The cuckoo (koel) laying its eggs in the crow's nest."
  },
  {
    id: 58,
    question: "Define commensalism.",
    answer: "An interaction where one species benefits and the other is neither harmed nor benefited (+, 0)."
  },
  {
    id: 59,
    question: "Give two NCERT examples of commensalism where one organism lives on another.",
    answer: "An orchid growing as an epiphyte on a mango branch, and barnacles growing on the back of a whale."
  },
  {
    id: 60,
    question: "Explain the commensal relationship between the cattle egret and grazing cattle.",
    answer: "The egrets forage close to the cattle, catching insects that are stirred up and flushed out of the vegetation by the grazing cattle."
  },
  {
    id: 61,
    question: "How does the clown fish benefit from its commensal relationship with the sea anemone?",
    answer: "The clown fish gets protection from predators by living among the sea anemone's stinging tentacles."
  },
  {
    id: 62,
    question: "What are lichens and mycorrhizae examples of?",
    answer: "Mutualism. Lichens (fungus + photosynthesising algae/cyanobacteria) and Mycorrhizae (fungi + roots of higher plants)."
  },
  {
    id: 63,
    question: "Describe the mutualistic co-evolutionary relationship between fig trees and wasps.",
    answer: "The wasp pollinates the fig inflorescence, and in return, the fig offers the wasp safe egg-laying sites and developing seeds as food for its larvae."
  },
  {
    id: 64,
    question: "What fascinating mechanism does the Mediterranean orchid Ophrys employ to ensure pollination?",
    answer: "Sexual deceit."
  },
  {
    id: 65,
    question: "How does 'sexual deceit' work in the Ophrys orchid?",
    answer: "One petal resembles the female bee in size, colour, and markings, attracting the male bee to 'pseudocopulate' with the flower, transferring pollen in the process."
  }
];

export default Organismsandpopulations;