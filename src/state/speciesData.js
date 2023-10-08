export const speciesData = [
  {
    //Story 1
    id: "001",
    name: "Hawksbill Turtle",
    subName: "Eretmochelys imbricata",
    endangeredType: "Critically Endangered",
    weight: {
      value: "41-68",
      unit: "kilograms",
    },
    height: {
      value: "61 to 107",
      unit: "centimeters",
    },
    lifeSpan: {
      value: "50 to 60",
      unit: "years",
    },
    numberLeft: {
      value: "8000",
      unit: "turtles",
      info: "from which 1000 females",
    },
    endangeredSince: "1970",
    region: "West Atlantic (Caribbean), Indian, and Indo-Pacific Oceans",
    pngImg: "001.png",
    mainImg: "S1.jpg",
    png: ["01.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1
        title: "Unveiling the Enigma",
        // you could add another key for body has two paragraphs with kye "p2"
        body: {
          p1: `The Hawksbill Sea Turtle, an enigmatic creature, was first unveiled to the world by the curious eyes of the Swedish botanist, zoologist, and physician, Carl Linnaeus, in the year 1766. The name "imbricata" whispered the secrets of its shell, imbricate, referring to the mesmerizing overlapping plates known as scutes that adorned its back.`,
        },
      },
      {
        //Chapter 2
        title: "The Art of Identity",
        body: {
          p1: "The Hawksbill Sea Turtle's unique charm lies in its bird-like beak, its carapace a masterpiece of nature in brown, green, and amber hues, adorned with delicate streaks. Its scutes overlap like ancient tome pages, creating a serrated border.",
          p2: "Its graceful, elongated head and flippers bear scales in shades of green, brown, or yellow, showcasing its majestic form. Mature adult females, symbols of strength, typically weigh around 50 kilograms, sporting an 80-centimeter-long carapace in the ocean.",
        },
      },
      {
        //Chapter 3
        title: "Embracing the Abyss",
        body: {
          p1: "The Hawksbill Sea Turtle finds its sanctuary in the embrace of tropical coastal waters, where coral reefs, rocky shoals, and mangroves intertwine, creating a diverse and dynamic environment. Here, it weaves its existence into the tapestry of underwater life.",
        },
      },
      {
        //Chapter 4 with pics
        title: "Journey Through Oceans",
        body: {
          p1: "The Hawksbill Sea Turtle, a globe-trotter of the oceans, spans the Indian, Pacific, and Atlantic realms. Though the waters around Sydney remain unfamiliar, these majestic travelers find solace along the tropical coasts of Queensland, the Northern Territory, and Western Australia, nesting and foraging with grace.",
        },
        img: "Chapter 4.jpg",
      },
      {
        //chapter 5
        title: "The Palate of the Deep",
        body: {
          p1: "As life unfolds beneath the waves, the Hawksbill Sea Turtle's diet evolves. Juveniles are carnivorous, mastering the art of survival in the depths. But with age comes wisdom, and adults become omnivores, savoring sponges, mollusks, crustaceans, ascidians, marine algae, and even ethereal jellyfish. They are masters of resilience, thriving on prey that could prove toxic to others.",
        },
      },
      {
        //Chapter 6
        title: "The Odyssey of Life",
        body: {
          p1: "Like all marine turtles, Hawksbill Sea Turtles spend their entire lives at sea, except for the sacred pilgrimage made by nesting females. After 25 to 40 years in the ocean, they return to their birth shores. Under the moon's glow, they emerge, laying up to 140 eggs—a gift to the future",
          p2: " Each season, they may lay one to six clutches, breeding every two to four years. Their lifespan is a mystery, believed to take up to 40 years to reach maturity and possibly living over 80 years.",
        },
      },
      {
        //Chapter 7 with pics
        title: "A Fight for Survival",
        body: {
          p1: "But the Hawksbill Sea Turtle's journey is not without peril. Pollution, fishing nets, and egg predation are daunting challenges. The tortoiseshell industry, craving their scutes, once threatened their existence, fashioning buttons, hairpins, jewelry, and trinkets from their shells. Entire turtles became taxidermied wall-hangings, silent witnesses to a changing world. As guardians of the coral reefs, they also face the specter of climate change.",
        },
        img: "Chapter 7.jpg",
      },
      {
        //Chapter 8 with pics
        title: "In the Halls of Conservation",
        body: {
          p1: "In the heart of Australia, the Australian Museum safeguards relics of these ancient mariners. These specimens, treasured for their scientific value, offer glimpses into the Hawksbill Sea Turtle's story. The very first specimen arrived in 1886, a gift from Captain Strachan, a Scottish-born Australian shipmaster and explorer, known for his expeditions into Papua New Guinea.",
        },
        img: "Chapter 8.jpg",
      },
      {
        //Chapter 9
        title: "A Glimpse of the Future",
        body: {
          p1: "Within the Climate Change Gallery of the Australian Museum, a specimen of the Hawksbill Sea Turtle stands as a poignant and heart-wrenching reminder of our profound impact on these magnificent beings and the urgent need for conservation.",
        },
      },
      {
        //Chapter 10
        title: "Guardians of Hope",
        body: {
          p1: `But the story continues with the Australian Centre for Wildlife Genomics at the Australian Museum collaborating with WWF-Australia and Royal Caribbean International in a bold endeavor— "Surrender Your Shell." They extract DNA from surrendered tortoiseshell items, adding it to the ShellBank database, tracing hawksbill products to poaching grounds, and protecting the most at-risk populations.`,
        },
      },
    ],
    rferences: [
      "https://australian.museum/learn/animals/reptiles/hawksbill-sea-turtle/",
      "https://www.onekindplanet.org/animal/sea-turtle-hawksbill/",
      "https://fisheries.noaa.gov/species/hawksbill-turtle",
      "https://fisheries.noaa.gov/species/hawksbill-turtle",
    ],
  },
  {
    //Story 2
    id: "002",
    name: "Vaquita",
    subName: "Phoeocna sinus",
    endangeredType: "Critically Endangered",
    weight: {
      value: "~54",
      unit: "kilograms",
    },
    height: {
      value: "~150",
      unit: "centimeters",
    },
    lifeSpan: {
      value: "21",
      unit: "At least {value} years",
    },
    numberLeft: {
      value: "~10",
      unit: "vaquitas",
    },
    endangeredSince: "1985",
    region: "The Northern Part of the Gulf of California in Mexico",
    pngImg: "002.png",
    mainImg: "S2.jpg",
    png: ["02.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1
        title: "The Shy Guardian of the Gulf",
        body: {
          p1: "In the azure waters of the Gulf of California, a remarkable creature silently glided beneath the surface: the vaquita, a shy member of the porpoise family and the world's most endangered marine mammal, teetering on the edge of extinction with fewer than 20 remaining. Its mysterious presence captivated all who sought to understand and save this precious species, offering a glimmer of hope in the face of immense challenges.",
        },
      },
      {
        //Chapter 2 with pics
        title: "A Precarious Habitat",
        body: {
          p1: "The vaquita's world was confined to the northern part of the Gulf of California, a region abundant with fish and shrimp. Here, fishing was not just an occupation but a way of life for the coastal communities. Gillnets, almost exclusively used, were a source of livelihood and sustenance, but they became the bane of the vaquita's existence.",
        },
        img: "Chapter 2.jpg",
      },
      {
        //Chapter 3
        title: "A Desperate Struggle",
        body: {
          p1: "Scientists united in the belief that the vaquita could only be saved if gillnet fishing ceased within its habitat. The Mexican government joined forces with scientists, NGOs, and foundations to enact bans on most gillnets. These efforts, while commendable, failed to halt the population's decline, despite emergency measures.",
        },
      },
      {
        //Chapter 4
        title: "A Race Against Time",
        body: {
          p1: "The vaquita's population status was a harrowing story. From nearly 600 in 1997, their numbers dwindled to about 200 by 2008 due to legal fishing, primarily for shrimp. The rise of illegal totoaba fishing around 2011 resulted in a catastrophic decline, with close to 50 percent of the population vanishing annually. Today, the vaquita's count could be as low as ten individuals.",
        },
      },
      {
        //Chapter 5
        title: "A Unique Beauty",
        body: {
          p1: "The vaquita was unique in its appearance, measuring about five feet in length, with petite bodies, rounded heads, black patches on their eyes and lips, and distinctive triangle-shaped dorsal fins that graced the azure waters of the Gulf of California.",
        },
      },
      {
        //Chapter 6
        title: "A Life of Mystery",
        body: {
          p1: "Vaquitas preferred solitude or existed in pairs, avoiding boats with active engines, making them elusive and challenging to observe. Their small size, inconspicuous surface rolls, and avoidance of motorized vessels made them enigmatic, leaving scientists and enthusiasts intrigued by their elusive nature.",
          p2: " Their dietary habits, which included dining on small fish, crustaceans like shrimp, and cephalopods, showcased their adaptability to the ever-changing underwater world.",
        },
      },
      {
        //Chapter 7
        title: "A Tiny Kingdom",
        body: {
          p1: "The vaquita's realm was exceptionally small, confined to the northern part of the Gulf of California in Mexico, a region rich in marine diversity. Within this petite kingdom, they shared their home with various fish, birds, marine reptiles, and mammals, creating a delicate tapestry of life.",
        },
      },
      {
        //Chapter 8
        title: "The Circle of Life",
        body: {
          p1: "Vaquitas could live for over 21 years, reaching sexual maturity between 3 to 6 years of age. Pregnancy, a remarkable journey, lasted approximately 10 to 11 months, and females gave birth every other year to a single calf, measuring about 2.5 feet long and weighing 16 pounds, symbolizing the hope of continuity in their fragile population.",
        },
      },
      {
        //Chapter 9
        title: "A Looming Threat",
        body: {
          p1: "The vaquita faced a singular menace—entanglement in fishing gear, especially gillnets, which had plagued them since their discovery. Despite conservation efforts, these silent killers continued to threaten the vaquita's existence, underscoring the urgent need for effective measures to protect this enigmatic species and prevent their tragic demise.",
        },
      },
      {
        //Chapter 10 with pics
        title: "Guardians of Hope",
        body: {
          p1: "Amidst the grim scenario, hope prevailed. NOAA Fisheries, in collaboration with Mexican researchers, had dedicated over 30 years to protect and recover the vaquita.",
          P: "Their efforts encompassed stock assessments, ship-based visual monitoring, acoustic monitoring, and genetic research, as they battled to safeguard this cryptic species, a symbol of the delicate balance between humanity and nature.",
        },
        img: "Chapter 10.jpg",
      },
    ],
    rferences: [
      "https://www.fisheries.noaa.gov/species/vaquita",
      "https://www.worldwildlife.org/species/vaquita",
    ],
  },
  {
    //Story 3
    id: "003",
    name: "Blue Whale",
    subName: "Balaenoptera musculus",
    endangeredType: "Endangered",
    weight: {
      value: "200",
      unit: "Up to {value} tons",
    },
    height: {
      value: "20 to 25",
      unit: "meters",
    },
    lifeSpan: {
      value: "80 to 90",
      unit: "Around {value} years",
    },
    numberLeft: {
      value: "10000 to 25000",
      unit: "Blue whales",
    },
    endangeredSince: "1970",
    region: "All Oceans Except the Arctic",
    pngImg: "003.png",
    mainImg: "S3.jpg",
    png: ["03.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1
        title: "The Titans of the Deep",
        body: {
          p1: "Our odyssey commences by introducing you to the true titans of the deep—blue whales. These magnificent beings are Earth's largest inhabitants, their colossal bodies reaching astonishing lengths of up to 100 feet and weighing more than 200 tons. To put it into perspective, their hearts alone can outweigh an entire automobile.",
        },
      },
      {
        //Chapter 2 with pics
        title: "A Feast for a Giant",
        body: {
          p1: "How does a creature of such immense proportions sustain itself? Here, we dive into the fascinating world of the blue whale's dietary habits. They are veritable krill connoisseurs, consuming up to an astounding 4 tons of these diminutive shrimp-like creatures every day during certain times of the year.",
        },
        img: "Chapter 2.jpg",
      },
      {
        //Chapter 3
        title: "Baleen and the Art of Feeding",
        body: {
          p1: "Intriguingly, blue whales are baleen whales, equipped with fringed plates made of fingernail-like material known as baleen. We delve into the ingenious feeding mechanism that allows them to capture and filter krill from vast quantities of water. It's a ballet of grace and efficiency.",
        },
      },
      {
        //Chapter 4
        title: "Beneath the Blue-Grey Surface",
        body: {
          p1: "While they may appear strikingly blue underwater, blue whales take on a mottled blue-gray complexion on the ocean's surface. Discover the science behind this remarkable transformation, as well as the yellowish hue that adorns their underbellies, courtesy of microorganisms that make their skin their home.",
        },
      },
      {
        //Chapter 5
        title: "A Symphony of Sound",
        body: {
          p1: "Blue whales are not only the largest but also among the loudest animals on Earth. Here, we unveil the auditory world of these marine leviathans. Their repertoire includes pulses, groans, and moans that can travel vast distances, allowing them to communicate and sonar-navigate the lightless depths of the ocean.",
        },
      },
      {
        //Chapter 6
        title: "Nomads of the Oceans",
        body: {
          p1: "Our journey carries us through the nomadic life of blue whales. These solitary beings traverse the world's oceans, with the exception of the Arctic, often journeying alone or in pairs. Summers are spent in polar waters, while winter calls them towards the Equator on lengthy migrations.",
        },
      },
      {
        //Chapter 7
        title: "The Beginning of Giants",
        body: {
          p1: "The miracle of life unfolds as we explore the birth of a blue whale calf. Emerging from its mother's womb after nearly a year of gestation, it is already one of the planet's largest creatures. Witness its rapid growth as it gains an astonishing 200 pounds every day during its first year, nourished solely by mother's milk.",
        },
      },
      {
        //Chapter 8 with pics
        title: "An Age-Old Mystery",
        body: {
          p1: "Unlock the age-old mystery of blue whale longevity. Scientists use the layers of a deceased whale's earplugs to estimate its age, and we reveal the astonishing discovery of the oldest known blue whale—around 110 years old. The average lifespan is estimated to be between 80 to 90 years.",
        },
      },
      {
        //Chapter 9
        title: "A Fragile Recovery",
        body: {
          p1: "The preservation of blue whales has been an ongoing battle. Discover the tragic history of aggressive hunting, where over 360,000 blue whales were slaughtered between 1900 and the mid-1960s in the pursuit of whale oil. The 1966 International Whaling Commission brought protection, but these magnificent creatures are still on the path to recovery.",
        },
      },
      {
        //Chapter 10
        title: "Guardians of the Deep",
        body: {
          p1: "Meet the few predators that dare to challenge the might of blue whales, including sharks and killer whales. We also explore the unfortunate encounters with large ships, which often lead to injury or death. These chapters serve as a poignant reminder of the ongoing struggle for survival faced by these majestic beings in our ever-changing oceans.",
        },
      },
    ],
    rferences: [
      "https://www.fisheries.noaa.gov/species/blue-whale",
      "https://www.nationalgeographic.com/animals/mammals/facts/blue-whale",
    ],
  },
  {
    //Story4
    id: "004",
    name: "Kemp’s Ridley Sea Turtle",
    subName: "Lepidochelys kempii",
    endangeredType: "Endangered",
    weight: {
      value: "32 - 45",
      unit: "Kilograms",
    },
    height: {
      value: "60 - 70",
      unit: "Centimeters",
    },
    lifeSpan: {
      value: "10 - 16",
      unit: "Years",
    },
    numberLeft: {
      value: "8000",
      unit: "Sea turtles",
      info: "5500 females",
    },
    endangeredSince: "1970",
    region: "the Gulf of Mexico",
    pngImg: "004.png",
    mainImg: "S4.jpg",
    png: ["04.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1 with pics
        title: "The Tiny Titans of the Sea",
        body: {
          p1: "The oceans held intriguing secrets, including the Kemp's ridley sea turtle, named after Richard M. Kemp, a Florida fisherman who introduced this species in 1906. These smallest sea turtles primarily inhabited the Gulf of Mexico, with juveniles venturing to the Atlantic, even reaching Nova Scotia.",
          p2: "The Gulf of Mexico once hosted tens of thousands of nesting female Kemp's ridleys at Rancho Nuevo, Mexico, but their numbers plummeted in the mid-20th century to just a few hundred nesting females by the 1980s. The culprit? Perilous bycatch in fishing gear, a looming threat.",
        },
        img: "Chapter 1.jpg",
      },
      {
        //Chapter 2
        title: "Guardians of the Gulf",
        body: {
          p1: "Amidst the crisis, NOAA Fisheries and partners emerged as Kemp's Ridley sea turtle protectors. With unwavering dedication, they employed innovative techniques to study, safeguard, and revive this endangered species. Collaborating and implementing recovery plans, their research, monitoring, and conservation projects prioritized Kemp's ridleys and their habitats.",
        },
      },
      {
        //Chapter 3
        title: "The Rise and Fall",
        body: {
          p1: "Kemp's Ridley sea turtles thrived in the 1940s, with tens of thousands nesting near Rancho Nuevo, Mexico, during an arribada. However, their population declined drastically, hitting a low of 702 nests and fewer than 250 nesting females in 1985. While they started recovering in the 1990s, progress stopped in 2010, emphasizing the need for ongoing protection and conservation.",
        },
      },
      {
        //Chapter 4 with pics
        title: "A Unique Appearance",
        body: {
          p1: "The Kemp's ridley turtle boasted a distinctive triangular-shaped head with a slightly hooked beak. Hatchlings emerged from their eggs with a dark complexion on both sides.",
          p2: " As adults, they displayed a grayish-green hue on their backs, contrasted by a pale, yellowish bottom shell. The top shell, or carapace, was often as wide as it was long. Each front flipper sported a single claw, while the back flippers sometimes had one or two.",
        },
        img: "Chapter 4.jpg",
      },
      {
        //Chapter 5
        title: "A Journey to the Unknown",
        body: {
          p1: "After hatching, young turtles quickly swam to the open sea, some remaining in the Gulf of Mexico, while others drifted into the Atlantic Ocean with the Gulf Stream. During their juvenile phase, they sought refuge in floating Sargassum algae for shelter and food. This phase lasted 1 to 2 years until they reached around 8 inches in length. They then moved to shallower coastal waters, primarily feeding on crabs and scavenging bycatch.",
        },
      },
      {
        //Chapter 6
        title: "A Fight for Survival",
        body: {
          p1: "Male Kemp's ridleys had varying strategies, with some migrating between feeding and breeding grounds while others stayed at feeding grounds, mating as they encountered females.",
          p2: "Females undertook remarkable migrations between nesting beaches in Mexico and south Texas, foraging across a wide region from the Yucatán Peninsula to southern Florida and the north-central Gulf of Mexico, some returning to specific foraging grounds repeatedly.",
        },
      },
      {
        //Chapter 7
        title: "From Coast to Coast",
        body: {
          p1: "Kemp's ridley sea turtles ranged from Florida's sunny shores to New England's rugged coasts, occasionally appearing near the Azores, Morocco, and the Mediterranean. Their primary habitat was the Gulf of Mexico's nearshore coastal areas, with muddy or sandy bottoms abundant in their favorite prey.",
        },
      },
      {
        //Chapter 8
        title: "A Hidden Lifespan",
        body: {
          p1: "The exact lifespan of Kemp's ridleys remained a mystery, but like their sea turtle kin, they were believed to be long-lived. Maturity was reached around the age of 13, with an estimated lifespan of at least 30 years, underscoring the enduring enigma of these remarkable creatures.",
        },
      },
      {
        //Chapter 9
        title: "Synchronized Nesting Miracle",
        body: {
          p1: "Kemp's ridleys had a unique nesting habit—an arribada, where females gathered in northeastern Mexico in large groups during daylight hours from April to July. They laid 2 to 3 clutches of around 100 eggs each season, returning to the beach every 1 to 3 years. Hatchlings emerged and headed to the sea, navigating by the brightest horizon.",
        },
      },
      {
        //Chapter 10 with pics
        title: "The Perils of the Deep",
        body: {
          p1: "Life for Kemp's ridleys was fraught with dangers. The most immediate threat was bycatch in fishing gear. Tragically, these turtles were primarily captured in trawls, gillnets, longlines, hooks and lines, pots/traps, and dredges in the Gulf of Mexico and the northwest Atlantic.",
        },
        img: "Chapter 10.jpg",
      },
      {
        //Chapter 11 with pics
        title: "A Battle Against the Tide",
        body: {
          p1: "Kemp's ridleys faced not only the perils of fishing gear but also the direct harvest of turtles and their eggs. The beaches of the western Gulf of Mexico, primarily in Tamaulipas, Mexico, were the nesting grounds for almost the entire Kemp's ridley population.",
          p2: "Historically, human consumption posed a significant threat through the collection of eggs. Fortunately, the protection of nests and turtles in both Mexico and the United States had diminished this peril.",
        },
        img: "Chapter 11.jpg",
      },
    ],
    rferences: [
      "https://nps.gov/pais/learn/nature/kridley.htm",
      "https://www.fisheries.noaa.gov/species/kemps-ridley-turtle",
    ],
  },
  {
    //Story 5
    id: "005",
    name: "Steller Sea Lion",
    subName: "Eumetopias jubatus",
    endangeredType: "Endangered",
    weight: {
      value: "200-300",
      unit: "kilograms",
    },
    height: {
      value: "2.1-2.4",
      unit: "meters",
    },
    lifeSpan: {
      value: "20",
      unit: "Upto {value} years",
    },
    numberLeft: {
      value: "45000",
      unit: "Sea Lions",
    },
    endangeredSince: "1990",
    region:
      "Coastal Waters in the Northern Pacific Ocean, from Japan to Central California",
    pngImg: "005.png",
    mainImg: "S5.jpg",
    png: ["05.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1
        title: "A Gentle Giant",
        body: {
          p1: "In the cold North Pacific Ocean lived the Steller sea lion, the largest eared seal, named after Georg Wilhelm Steller. They were known for their distinctive roars and shared their habitat with California sea lions and northern fur seals. In the past, these majestic creatures were abundant and crucial for indigenous people and settlers, providing sustenance through their meat, hides, and oil. Today, they remained vital for Alaska Natives.",
        },
      },
      {
        //Chapter 2
        title: "The Tale of Decline",
        body: {
          p1: "A shadow of concern enveloped the Steller sea lions as unexplained population declines darkened their Alaskan home. Listing them under the Endangered Species Act (ESA) in 1990 marked a pivotal moment filled with uncertainty.",
          p2: "Scientists identified two segments: the eastern (threatened) and the western (endangered). While the eastern group showed signs of recovery, the western population continued to decline, painting a complex and emotional picture of their plight.",
        },
      },
      {
        //Chapter 3 with pics
        title: "The Mysterious Puzzle",
        body: {
          p1: "The Steller sea lions' decline baffled scientists due to numerous factors. Climate change, marine heatwaves, and temperature shifts disrupted prey distribution. Ocean acidification and harmful algal blooms threatened their food web.",
          p2: "Toxic substances like mercury and organochlorines harmed their health. Human-caused issues, including illegal feeding, shooting, and vessel strikes, compounded their challenges.",
        },
        img: "Chapter 3.jpg",
      },
      {
        //Chapter 4
        title: "Life in the Cold North",
        body: {
          p1: "Despite hardships, Steller sea lions persevered. Adult males reached 11 feet and 2,500 pounds, towering over smaller females at 7.5 to 9.5 feet and up to 800 pounds. Their striking blonde to reddish-brown coats, with light whiskers for underwater prey detection, remained captivating even when wet.",
          p2: "On land, these adaptable creatures could turn their hind flippers forward for walking and scaling cliffs above water, showcasing their remarkable resilience and versatility.",
        },
      },
      {
        //Chapter 5
        title: "A Life at Sea",
        body: {
          p1: "These magnificent creatures are a skilled ocean predator, dined on a variety of fish and cephalopods, adjusting their diet based on prey availability. They foraged near and off the shore, employing diverse strategies, including long-distance journeys and proximity to breeding sites. Adult females juggled feeding, nursing pups, and potential pregnancies while managing their high energy needs.",
        },
      },
      {
        //Chapter 6
        title: "The Dance of Life",
        body: {
          p1: `Surprisingly Steller sea lions were social creatures, often resting in large groups, overlapping their bodies on land. At sea, they could be seen alone or in smaller groups, occasionally forming large "rafts" at the surface near areas with abundant prey.`,
          p2: "These sea lions had a unique way of thermoregulating by extending their flippers into the air while floating on the water. It helped them absorb heat, which was then circulated throughout their bodies.",
        },
      },
      {
        //Chapter 7 with pics
        title: "The Territories of the Sea",
        body: {
          p1: "Steller sea lions thrived in a wide-ranging habitat, from cold temperate to subarctic North Pacific waters, relying on both land and sea. They used specific sites called rookeries for mating, giving birth, and socializing during the breeding season, with some even resting on sea ice in the Bering Sea and Okhotsk Sea.",
        },
        img: "Chapter 7.jpg",
      },
      {
        //Chapter 8
        title: "A Complex Family Tree",
        body: {
          p1: "According to what we have known so far about them, Steller sea lions were not a monolithic group; they had two distinct population segments: the eastern and western. These segments differ genetically, morphologically, and in their population trends.",
          p2: "While they primarily occupied coastal waters on the continental shelf, they were known to forage in deeper continental slope and pelagic waters, especially during the non-breeding season. The foraging ranges of these segments overlapped, blurring the boundaries that nature had drawn.",
        },
      },
      {
        //Chapter 9
        title: "The Circle of Life",
        body: {
          p1: "These  lions of the sea, have a life cycle closely tied to their surroundings. They practiced colonial breeding, with a few dominant males siring most pups. Adult males staked territorial claims at rookeries, while females arrived later, giving birth at ages 4 to 6. The pupping season, from May to July, was a period of maternal multitasking, involving foraging at sea, nursing pups, and mating shortly after giving birth.",
        },
      },
      {
        //Chapter 10
        title: "Guardians of the Sea",
        body: {
          p1: "Efforts to safeguard and revive Steller sea lions involved NOAA Fisheries, dedicated to enforcing regulations, collaborating with Alaska Native partners, and implementing science-based recovery and monitoring plans. Science played a vital role in understanding their biology, guiding conservation.",
        },
      },
      {
        //Chapter 11
        title: "The Ongoing Quest",
        body: {
          p1: "The story of the Steller sea lions was one of resilience in the face of adversity. They faced challenges from climate change, pollution, human disturbances, and more, but they clung to life in the cold waters of the North Pacific.",
          p2: "As we continue to learn about these remarkable creatures and work to protect their habitat, we hope that one day, their populations will thrive once more. The tale of the Steller sea lions is a reminder of the delicate balance of life in our oceans and the importance of our role as stewards of the sea.",
        },
      },
    ],
    rferences: ["https://www.fisheries.noaa.gov/species/steller-sea-lion"],
  },
  {
    //Story 6
    id: "006",
    name: "Hammerhead Shark",
    subName: "Sphyrna mokarran",
    endangeredType: "Endangered",
    weight: {
      value: "230",
      unit: "kilograms.",
    },
    height: {
      value: "4",
      unit: "meters",
    },
    lifeSpan: {
      value: "20 to 30",
      unit: "Around {value} years",
    },
    numberLeft: {
      value: "200",
      unit: "Sharks",
    },
    endangeredSince: "2011",
    region: "Western Atlantic Ocean",
    pngImg: "006.png",
    mainImg: "S6.jpg",
    png: ["06.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1
        title: "Introduction to the Great Hammerhead",
        body: {
          p1: "In the crystal-clear waters of the Bahamas, a magnificent great hammerhead shark prowls. This extraordinary creature is the largest among the hammerhead family, known as Sphyrnidae.",
          p2: "Its defining feature is its straight, square cephalofoil, coupled with a tall and curved first dorsal fin. With the potential to grow up to 20 feet, the great hammerhead is a true giant of the sea. Join us on a journey into the world of this remarkable predator.",
        },
      },
      {
        //Chapter 2
        title: "Anatomy and Characteristics",
        body: {
          p1: "Let's take a closer look at the great hammerhead's anatomy. Its cephalophoil, resembling a hammer, is unique among sharks, setting it apart instantly. Its dorsal surface sports shades of dusky brown to light gray, which fade into a creamy underside. This coastal shark's physique is a classic representation of shark-shaped bodies. The striking asymmetrical caudal fin adds to its distinct appearance.",
        },
      },
      {
        //Chapter 3
        title: "Habitat and Behavior",
        body: {
          p1: "Explore the great hammerhead's preferred habitats, ranging from deep offshore waters to shallow coastal regions. Discover its seasonal migrations, including journeys to cooler waters during the summer months. Understanding the behavior of this enigmatic predator is key to appreciating its role in the ecosystem.",
        },
      },
      {
        //Chapter 4 with pics
        title: "Ecological Role and Diet",
        body: {
          p1: "The great hammerhead plays a crucial role in maintaining the marine ecosystem. Its diverse diet includes bony fishes, invertebrates, and even other sharks and rays. Dive into the intricate web of interactions that make this species an indispensable part of the underwater world.",
        },
        img: "Chapter 4.jpg",
      },
      {
        //Chapter 5
        title: "Human Interaction and Conservation",
        body: {
          p1: "Humans have a significant impact on great hammerhead populations. Commercial and recreational fishing, primarily driven by the demand for their valuable fins in the Asian market, poses a grave threat.",
          p2: "There are various ways these sharks are utilized, from liver oil to hides and carcasses. Yet, despite their accidental capture, they remain some of the ocean's most fragile creatures.",
        },
      },
      {
        //Chapter 6
        title: "Shark Attacks and Safety",
        body: {
          p1: "Although the great hammerhead is not known for unprovoked attacks, there have been 17 recorded incidents involving hammerhead species. Yet, there are some complexities of identifying the exact species responsible for these events and there are safety precautions for encounters with these majestic predators.",
        },
      },
      {
        //Chapter 7
        title: "Conservation Efforts",
        body: {
          p1: "Passionate conservation efforts drive the protection of endangered hammerhead sharks. This includes marine sanctuaries, fishing rules, and research for their survival. A global call to action spreads awareness about their vital role in marine ecosystems.",
        },
      },
      {
        //Chapter 8
        title: "Global Distribution",
        body: {
          p1: "Hammerhead sharks are renowned for their wide distribution in the world's oceans, inhabiting both coastal and pelagic zones. They can be found in tropical and temperate seas, from the Mediterranean and Atlantic to the Indian and Pacific Oceans.",
          p2: "Their remarkable adaptability allows them to thrive in a variety of habitats, from shallow coastal waters to deeper offshore environments. This extensive distribution underscores their importance as apex predators in marine ecosystems across the globe.",
        },
      },
      {
        //Chapter 9 with pics
        title: "The creation of apex predator",
        body: {
          p1: "Hammerhead sharks have a unique reproduction strategy. Females give birth to live pups with litter sizes varying by species. After a gestation period of 9 to 12 months, the young are born and immediately independent, embarking on solitary journeys through the ocean. They grow quickly, with some reaching sexual maturity in 3 to 4 years, ensuring their continued survival as apex predators.",
        },
        img: "Chapter 9.jpg",
      },
      {
        //Chapter 10
        title: "A lot of Cousins",
        body: {
          p1: "Hammerhead sharks encompass diverse species in terms of size, habitat, and behavior. Ranging from the massive great hammerhead to the smaller bonnethead, they adapt to various environments, from tropical waters to temperate regions, highlighting their remarkable diversity.",
        },
      },
    ],
    rferences: [
      "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/sphyrna-mokarran/",
    ],
  },
  {
    //Story 7
    id: "007",
    name: "Fin Whale",
    subName: "Balaenoptera Physalus",
    endangeredType: "Endangered",
    weight: {
      value: "48000",
      unit: "kilograms",
    },
    height: {
      value: "2.9-3.5",
      unit: "meters",
    },
    lifeSpan: {
      value: "90",
      unit: "Around {value} years.",
    },
    numberLeft: {
      value: "100000 - 119000",
      unit: "Whales",
    },
    endangeredSince: "1970",
    region:
      "Alaska, New England/Mid-Atlantic, Pacific Islands, Southeast, West Coast",
    pngImg: "007.png",
    mainImg: "S7.jpg",
    png: ["07.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1 with pics
        title: "The Mysterious Voyage",
        body: {
          p1: "In the vast expanse of the ocean, beneath the shimmering surface, a world of wonders thrived. Among its inhabitants was a creature known as the fin whale, a majestic giant of the deep. These leviathans roamed the open waters, their immense bodies slicing through the waves with grace.",
          p2: "One particular fin whale, a grand matriarch known as Matilda, bore witness to the ever-changing seascape. She was a survivor, a relic from a time when her kind faced perilous threats from human hunters. Matilda bore scars from her encounters with whalers, a testament to her resilience.",
        },
        img: "Chapter 1.jpg",
      },
      {
        //Chapter 2
        title: "The Legacy of Whaling",
        body: {
          p1: "In her youth, Matilda survived a perilous era when whaling ships dominated the seas. At first, fin whales like her escaped due to their speed and elusiveness. However, advancing technology brought deadlier harpoons and a tragic history of exploitation, with nearly three-quarters of Southern Hemisphere fin whales disappearing during the mid-1900s.",
        },
      },
      {
        //Chapter 3
        title: "A Changing World",
        body: {
          p1: "Though the era of whaling had come to an end, Matilda and her kin faced new challenges. The once-peaceful oceans were now bustling with human activity. Vessel strikes became a grave threat, as ships crisscrossed their habitats with little regard for the giants below.",
          p2: "The gentle giants, known for their sleek bodies and distinctive dorsal fins, were now listed as endangered. Matilda's legacy was at stake, and she knew the survival of her species depended on adapting to this ever-changing world.",
        },
      },
      {
        //Chapter 4 with pics
        title: "The Unseen Threat",
        body: {
          p1: "As Matilda swam with her family through the deep, she couldn't escape the cacophony of ocean noise. Human-made sounds disrupted their underwater world, interfering with their communication and navigation. It was an invisible menace that cast a shadow over their existence.",
        },
        img: "Chapter 4.jpg",
      },
      {
        //Chapter 5
        title: "The Great Migration",
        body: {
          p1: "With the changing seasons, Matilda and her family embarked on their epic journey. They were part of a migration pattern known only to their kind. From the Arctic feeding grounds in the summer to the tropical breeding and calving areas in the winter, they navigated the vastness of the ocean.",
          p2: "The mysteries of their migration held the keys to their survival, and Matilda's kin followed her lead with unwavering trust.",
        },
      },
      {
        //Chapter 6
        title: "Life and Legacy",
        body: {
          p1: "Matilda had seen generations of fin whales come and go. She knew the joys of motherhood, the heartaches of loss, and the triumphs of survival. Her life, like the fin whales', was a testament to resilience and adaptability.",
          p2: "She often wondered about the future of her species, hoping that the legacy she carried would endure. The fin whales, with their unique markings and graceful presence, were a vital thread in the intricate tapestry of the ocean's ecosystem.",
        },
      },
      {
        //Chapter 7
        title: "A Call to Action",
        body: {
          p1: "Far from the depths where Matilda swam, a group of dedicated individuals and organizations worked tirelessly to protect her kind. NOAA Fisheries and its partners were committed to conserving and rebuilding fin whale populations.",
          p2: "They studied these magnificent creatures, developed regulations to ensure their safety, and sought to reduce the threats they faced, from vessel strikes to ocean noise pollution.",
        },
      },
      {
        //Chapter 8
        title: "The Uncharted Regions",
        body: {
          p1: "The mysteries of the ocean still held many secrets. While some fin whale populations were well-studied, others remained elusive, their numbers uncertain. The shifting currents of the sea concealed their movements, leaving scientists with more questions than answers.",
        },
      },
      {
        //Chapter 9
        title: "Hope for the Future",
        body: {
          p1: "Despite the challenges, Matilda carried a glimmer of hope within her immense heart. She had seen the world change, witnessed the highs and lows of her species, and persevered against the odds. She believed in the resilience of the ocean and its inhabitants.",
          p2: "As the sun dipped below the horizon, Matilda and her family continued their journey, a symbol of endurance and the enduring spirit of the fin whales.",
        },
      },
      {
        //Chapter 10
        title: "A Symphony of Life",
        body: {
          p1: "In the depths of the ocean, where the sunlight waned and the currents whispered their secrets, the fin whales swam in harmony with the world around them. They were the guardians of the deep, the keepers of the ocean's mysteries, and the embodiment of nature's resilience.",
          p2: "And as Matilda and her kin moved through the boundless waters, their presence echoed in the symphony of life that enveloped them, a testament to the enduring beauty of the world beneath the waves.",
        },
      },
    ],
    rferences: ["https://www.fisheries.noaa.gov/species/fin-whale"],
  },
  {
    //Story 8
    id: "008",
    name: "Whale shark",
    subName: "Rhincodon typus",
    endangeredType: "Endangered",
    weight: {
      value: "19000",
      unit: "kilograms",
    },
    height: {
      value: "14",
      unit: "meters",
    },
    lifeSpan: {
      value: "100",
      unit: "Over {value} years",
    },
    numberLeft: {
      value: "200000 - 240000",
      unit: "Whales",
    },
    endangeredSince: "2016",
    region:
      "India, the Maldives, South Africa, Belize, Mexico, the Galapagos Islands, Southeast Asia and Indonesia",
    pngImg: "008.png",
    mainImg: "S8.jpg",
    png: ["08.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1
        title: "The Gentle Giant",
        body: {
          p1: "In the vast expanse of the tropical oceans, where the warm waters embraced the secrets of the deep, a magnificent creature ruled the seas. The whale shark, the largest living fish on Earth, soared through the azure waters with an elegance that belied its massive size.",
          p2: "Its body, an astonishing eighteen meters long, was adorned with a checkerboard pattern of light vertical and horizontal stripes against a dark background. These markings, like nature's fingerprint, distinguished it from all others. Light spots adorned its fins and the shadowy recesses of its colossal form.",
        },
      },
      {
        //Chapter 2 with pics
        title: "A Crafted Identity",
        body: {
          p1: "The whale shark's head was a marvel of adaptation, broad and flat, housing a mouth of staggering proportions. With over 300 rows of small, vestigial teeth that played no role in feeding, this gentle giant was a filter-feeding virtuoso.",
          p2: "As it swam gracefully through the ocean, the whale shark's immense mouth captured seawater teeming with plankton, copepods, shrimp, and phytoplankton. The water passed through the gill slits, where spongy tissue acted as a filter, trapping nourishing organisms while allowing pure water to return to the sea.",
        },
        img: "Chapter 2.jpg",
      },
      {
        //Chapter 3
        title: "The Mysteries of Reproduction",
        body: {
          p1: "The whale shark, primarily solitary, occasionally joined schools of its own kind, a spectacle of nature's splendor. Scientists puzzled over their reproductive biology, surmising that they gave birth to fully formed live young, with the tiniest measuring about 55 centimeters long, likely newborns. Litters of about 16 young were common, but astonishingly, some females carried up to 300 embryos.",
        },
      },
      {
        //Chapter 4
        title: "Encounters with Humans",
        body: {
          p1: "Despite their enormous size, whale sharks posed no threat to humans, allowing divers to swim alongside them without aggression. Occasionally, they approached swimmers out of curiosity. Sportfishing boats sometimes felt their curiosity, with minimal commercial value in accidental catches. Some cultures considered them a delicacy, leading to occasional captures for food.",
        },
      },
      {
        //Chapter 5
        title: "The Call for Conservation",
        body: {
          p1: "In 2016, the International Union for Conservation of Nature declared the whale shark endangered, recognizing the need to protect these magnificent creatures. Conservationists rallied to safeguard their habitats and promote responsible practices around them.",
          p2: "The gentle giants of the deep, with their grace and wonder, became ambassadors for the oceans, a reminder of the importance of preserving the fragile balance of marine ecosystems.",
        },
      },
      {
        //Chapter 6 with pics
        title: "The Legacy of the Seas",
        body: {
          p1: "As the sun set on the tranquil waters where the whale shark reigned, its legacy endured. It was a testament to the marvels of the natural world, a gentle giant that defied expectations and captured the hearts of all who encountered it.",
          p2: "In the ever-changing tapestry of Earth's oceans, the whale shark stood as a symbol of resilience, adaptation, and the enduring beauty of the sea.",
        },
        img: "Chapter 6.jpg",
      },
    ],
    rferences: [
      "https://www.britannica.com/animal/saw-shark",
      "https://www.dcceew.gov.au/environment/marine/marine-species/sharks/whale-shark",
    ],
  },
  {
    //Story 9
    id: "009",
    name: "Humphead Warasse",
    subName: "Cheilinus Undulatus",
    endangeredType: "Endangered",
    weight: {
      value: "~180",
      unit: "kilograms",
    },
    height: {
      value: "2",
      unit: "Upto {value} meters",
    },
    lifeSpan: {
      value: "30",
      unit: "around {value} years",
    },
    numberLeft: {
      value: "8000",
      unit: "Fishes",
    },
    endangeredSince: "2004",
    region:
      "Indian Ocean, from the Red Sea to South Africa and the Tuamotu Islands. It also ranges from the Ryukyu Islands to New Caledonia in the Pacific.",
    pngImg: "009.png",
    mainImg: "S9.jpg",
    png: ["09.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1 with pics
        title: "The King of the Coral Reef",
        body: {
          p1: `In the heart of the Indo-Pacific ocean, where the vibrant coral reefs thrived, there ruled a magnificent creature known as the humphead wrasse. These reef giants were true titans, reaching lengths of up to seven feet and weighing over 420 pounds. Their regal presence earned them the moniker "the king of the coral reef."`,
        },
        img: "Chapter 1.jpg",
      },
      {
        //Chapter 2
        title: "A Royal Crown",
        body: {
          p1: "The humphead wrasse derived its name from the prominent bulbous hump adorning its head. As these majestic fish matured, their forehead hump became more pronounced, symbolizing their wisdom and age. Their striking appearance was a sight to behold, with males displaying a dazzling blend of electric blue, green, or light purple hues, while juveniles and females donned vibrant red-orange bodies with white bellies.",
        },
      },
      {
        //Chapter 3
        title: "Guardians of the Reef",
        body: {
          p1: "These regal fish played a vital role in their reef ecosystems. Their diet consisted of hard-shelled invertebrates like mollusks, crustaceans, and echinoderms.",
          p2: "They were the defenders of coral reefs, preventing the unchecked destruction caused by the crown of thorns starfish, which devoured corals at an alarming rate. With their beak-like teeth and unique feeding techniques, humphead wrasse were nature's champions in maintaining the health of the reef.",
        },
      },
      {
        //Chapter 4
        title: "The Royal Habitat",
        body: {
          p1: "Humphead wrasse were inhabitants of the warm waters of the Indo-Pacific Ocean, gracing the coral reefs of American Samoa and other pristine locations. Adults preferred the outer slopes and steep drop-offs near the reef community, while juveniles sought refuge among the living staghorn corals, finding protection from potential predators. These diurnal creatures were active during the day, resting in reef caves and beneath coral ledges at night.",
        },
      },
      {
        //Chapter 5
        title: "A Life of Solitude",
        body: {
          p1: "While humphead wrasse were predominantly solitary, occasional male-female pairs or small social groups formed, consisting of a male, several smaller adults, and juveniles. Their intriguing life history included a unique trait - protogynous hermaphroditism.",
          p2: "Females could transition to males, ensuring a continuous supply of males for mating with sexually mature females. This adaptation was a testament to their resilience and ability to adapt to changing circumstances.",
        },
      },
      {
        //Chapter 6
        title: "The Fragile Legacy",
        body: {
          p1: "Humphead wrasse were long-lived creatures, with lifespans of over 30 years. They reached adulthood and sexual maturity around five to seven years old, once they attained their full size. Spawning events occurred during specific times of the year, involving gatherings of a hundred or more individuals releasing gametes into the water, leading to the birth of the next generation.",
        },
      },
      {
        //Chapter 7
        title: "A Precarious Future",
        body: {
          p1: "Despite their regal status, humphead wrasse faced a perilous future. They were classified as endangered by the IUCN, listed as a Species of Concern by the U.S. National Marine Fisheries Service, and found on CITES' Appendix II. Their population had dwindled by more than 50 percent over the past three decades due to illegal fishing, habitat degradation, spearfishing, and the impacts of climate change.",
        },
      },
      {
        //Chapter 8
        title: "The Call for Conservation",
        body: {
          p1: "Conservationists and scientists rallied to protect these magnificent creatures. Aquarium breeding programs and conservation initiatives sought to prevent further population decline and aid in the recovery of the humphead wrasse. They were not just kings of the coral reef but also ambassadors for the importance of preserving our planet's fragile marine ecosystems.",
        },
      },
      {
        //Chapter 9
        title: "A Royal Legacy",
        body: {
          p1: "As the sun dipped below the horizon, casting a golden glow over the coral reefs, the humphead wrasse continued their ancient dance. Their legacy, one of resilience and grace, would endure in the depths of the ocean, a reminder of the irreplaceable treasures that must be safeguarded for generations to come.",
        },
      },
      {
        //Chapter 10 with pics
        title: "Guardians of the Sea",
        body: {
          p1: "In the ever-changing tapestry of life beneath the waves, the humphead wrasse stood as guardians of the sea, their vibrant colors and majestic presence a testament to the beauty and fragility of the underwater world they called home.",
        },
        img: "Chapter 10.jpg",
      },
    ],
    rferences: [
      "https://www.treehugger.com/humphead-wrasse-endangered-5224452",
    ],
  },
  {
    //Story 10
    id: "010",
    name: "Oceanic Manta Ray",
    subName: "Mobula birostris",
    endangeredType: "Endangered",
    weight: {
      value: "1814",
      unit: "kilograms",
    },
    height: {
      value: "4.5",
      unit: "meters",
    },
    lifeSpan: {
      value: "45",
      unit: "At least {value} years",
    },
    numberLeft: {
      value: "22000",
      unit: "Fishes",
    },
    endangeredSince: "2020",
    region:
      "Coastal areas in tropical and subtropical waters mostly in the Indo-Pacific",
    pngImg: "010.png",
    mainImg: "S10.jpg",
    png: ["10.png"],
    story: [
      // repeat for all chapters
      {
        //Chapter 1 with pics
        title: "The Gentle Giants of the Ocean",
        body: {
          p1: "In the vast expanse of the world's oceans, a magnificent creature known as the giant manta ray glided gracefully through the waters. With wingspans that could stretch up to a remarkable 26 feet, these gentle giants were the world's largest rays. Their presence in the deep blue was nothing short of awe-inspiring.",
        },
        img: "Chapter 1.jpg",
      },
      {
        //Chapter 2
        title: "",
        body: {
          p1: "Giant manta rays were renowned filter feeders, dining on vast quantities of zooplankton. Their feeding habits were a marvel of nature, as they elegantly swept through the water, filtering out their microscopic prey. These slow-growing, migratory creatures were both enigmatic and vital to the delicate balance of marine ecosystems.",
        },
      },
      {
        //Chapter 3
        title: "A Fragile Existence",
        body: {
          p1: "Despite their grandeur, giant manta rays faced a grave threat—commercial fishing. These majestic creatures were not only targeted but also fell victim to bycatch in various global fisheries. Their gill plates, highly prized in international trade, made them a sought-after commodity. In recognition of this danger, NOAA Fisheries listed the species as threatened under the Endangered Species Act in 2018.",
        },
      },
      {
        //Chapter 4
        title: "The Mystery of Population",
        body: {
          p1: "The global giant manta ray population was enigmatic, estimated at 600 to 2,000 individuals in various regions. Ecuador had the largest population of over 22,000 in its protected areas, yet their low reproductive rate left them vulnerable to depletion, raising concerns for recovery.",
        },
      },
      {
        //Chapter 5
        title: "The Elegant Form",
        body: {
          p1: "Giant manta rays were instantly recognizable by their diamond-shaped bodies, adorned with elongated wing-like pectoral fins. Ventrally-placed gill slits, laterally-placed eyes, and wide mouths completed their elegant form. Two cephalic lobes extended in front of their mouths, a unique feature used to channel water for feeding.",
        },
      },
      {
        //Chapter 6
        title: "Two Worlds, Two Species",
        body: {
          p1: "Manta rays came in two distinct color types: chevron and black. Their bellies bore intricate spot patterns that served as individual identifiers. Two species of manta rays existed: the giant manta ray (Manta birostris) and the reef manta ray (Manta alfredi). The giant manta ray was larger, possessed a caudal thorn, and displayed a rough skin appearance, setting it apart from its reef-dwelling counterpart.",
        },
      },
      {
        //Chapter 7 with pics
        title: "The Mysterious Migrations",
        body: {
          p1: "Giant manta rays were enigmatic in their migrations. They were known to be seasonal visitors, appearing along productive coastlines, oceanic island groups, and offshore pinnacles and seamounts. The timing of their visits varied by region, influenced by factors such as zooplankton movement, current patterns, seawater temperature, and mating behaviors.",
        },
        img: "Chapter 7.jpg",
      },
      {
        //Chapter 8 with pics
        title: "Lords of the Plankton",
        body: {
          p1: "Feeding on planktonic organisms such as euphausiids, copepods, mysids, and shrimp, giant manta rays played a crucial role in the ocean's food web. Their unique feeding techniques, including barrel rolling and cooperative feeding with other mantas, maximized their prey intake. Their feeding rituals were a ballet of grace and efficiency.",
        },
        img: "Chapter 8.jpg",
      },
      {
        //Chapter 9
        title: "Guardians of the Depths",
        body: {
          p1: "While giant manta rays often roamed the shallows to feed, they exhibited surprising versatility in their use of depths within their habitat. Tagging studies revealed their capability to dive to depths exceeding 1,000 meters, a behavior influenced by seasonal shifts in prey location and thermocline dynamics.",
        },
      },
      {
        //Chapter 10 with pics
        title: "A Future at Risk",
        body: {
          p1: "The future of giant manta rays hung in the balance. Overfishing and bycatch posed the most significant threats, with inadequate regulatory measures failing to protect them. The international trade in their gill plates fueled their exploitation, resulting in declines of up to 95 percent in some regions.",
        },
        img: "Chapter 10.jpg",
      },
      {
        //Chapter 11
        title: "A Call for Conservation",
        body: {
          p1: "Conservationists rallied to protect these majestic creatures. Efforts to address overutilization and minimize bycatch in industrial fisheries were urgently needed. Monitoring and mitigating threats such as entanglement, vessel strikes, marine pollution, and climate change became imperative to secure the future of giant manta rays.",
        },
      },
      {
        //Chapter 12
        title: "Guardians of the Deep Blue",
        body: {
          p1: "In the vast, mysterious depths of the ocean, giant manta rays remained guardians of the deep blue. Their existence served as a reminder of the delicate balance of marine life and the responsibility to protect the wonders hidden beneath the waves.",
        },
      },
    ],
    rferences: [
      "https://www.fisheries.noaa.gov/species/giant-manta-ray",
      "https://www.discoverwildlife.com/animal-facts/fish/facts-about-manta-rays",
    ],
  },
];
