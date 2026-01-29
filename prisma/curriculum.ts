// curriculum.ts

export type SkillSeed = {
  name: string;
  description?: string;
};

export type CategorySeed = {
  name: string;
  skills: SkillSeed[];
};

export type SubjectSeed = {
  name: string;
  categories: CategorySeed[];
};

export type GradeSeed = {
  name: string;
  subjects: SubjectSeed[];
};

// -----------------------------------------------------------------------------
// COMBINED MATH + ENGLISH CURRICULUM (Pre-K → Grade 5)
// Medium-detail, grade-specific categories
// -----------------------------------------------------------------------------

export const CURRICULUM: GradeSeed[] = [
  // ---------------------------------------------------------------------------
  // Pre-K
  // ---------------------------------------------------------------------------
  {
    name: "Pre-K",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Counting and number sense",
            skills: [
              { name: "Count to 3" },
              { name: "Count to 5" },
              { name: "Count to 10" },
              { name: "Count objects in a line" },
              { name: "Count objects in a scattered set" },
              { name: "Identify numbers 0 to 5" },
              { name: "Identify numbers 0 to 10" },
              { name: "Match numbers to quantities" },
            ],
          },
          {
            name: "Comparing",
            skills: [
              { name: "More and fewer" },
              { name: "Same number of objects" },
              { name: "Compare up to 5 objects" },
              { name: "Compare up to 10 objects" },
            ],
          },
          {
            name: "Patterns",
            skills: [
              { name: "AB patterns with shapes" },
              { name: "Color patterns" },
              { name: "Size patterns" },
              { name: "Finish a pattern" },
            ],
          },
          {
            name: "Geometry",
            skills: [
              { name: "Identify circles, squares, and triangles" },
              { name: "Sort shapes" },
              { name: "Identify shapes in real life" },
            ],
          },
          {
            name: "Measurement",
            skills: [
              { name: "Big and small" },
              { name: "Tall and short" },
              { name: "Long and short" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Alphabet and letter recognition",
            skills: [
              { name: "Identify uppercase letters" },
              { name: "Identify lowercase letters" },
              { name: "Match uppercase and lowercase letters" },
              { name: "Letter sounds: beginning sounds" },
            ],
          },
          {
            name: "Phonological awareness",
            skills: [
              { name: "Rhyming words" },
              { name: "Identify beginning sounds" },
              { name: "Identify ending sounds" },
            ],
          },
          {
            name: "Vocabulary",
            skills: [
              { name: "Identify common objects" },
              { name: "Sort objects into categories" },
            ],
          },
          {
            name: "Reading readiness",
            skills: [
              { name: "Follow simple directions" },
              { name: "Identify parts of a book" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Living things",
            skills: [
              { name: "Identify plants and animals" },
              { name: "Basic needs of living things" },
              { name: "Sort living and nonliving things" },
            ],
          },
          {
            name: "Weather and seasons",
            skills: [
              { name: "Identify weather types" },
              { name: "Identify four seasons" },
            ],
          },
          {
            name: "Earth and environment",
            skills: [
              { name: "Identify land, water, and sky" },
              { name: "Recycle and take care of Earth" },
            ],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Community and helpers",
            skills: [
              { name: "Identify community helpers" },
              { name: "Roles of helpers" },
            ],
          },
          {
            name: "Rules and responsibilities",
            skills: [
              { name: "Classroom rules" },
              { name: "Taking turns and sharing" },
            ],
          },
          {
            name: "Geography basics",
            skills: [{ name: "Identify home, school, and neighborhood" }],
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Kindergarten
  // ---------------------------------------------------------------------------
  {
    name: "Kindergarten",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Counting and number patterns",
            skills: [
              { name: "Count to 20" },
              { name: "Count to 50" },
              { name: "Count to 100" },
              { name: "Count by tens to 100" },
              { name: "Write numbers 0 to 20" },
              { name: "Number lines to 20" },
            ],
          },
          {
            name: "Addition",
            skills: [
              { name: "Add with pictures up to 5" },
              { name: "Add with pictures up to 10" },
              { name: "Addition sentences up to 10" },
              { name: "Add using number lines to 10" },
              { name: "Make 10" },
            ],
          },
          {
            name: "Subtraction",
            skills: [
              { name: "Subtract with pictures up to 5" },
              { name: "Subtract with pictures up to 10" },
              { name: "Subtraction sentences up to 10" },
              { name: "Subtract using number lines to 10" },
            ],
          },
          {
            name: "Place value",
            skills: [
              { name: "Teen numbers as ten and ones" },
              { name: "Compose and decompose numbers 11–19" },
              { name: "Compare numbers to 20" },
            ],
          },
          {
            name: "Measurement and data",
            skills: [
              { name: "Compare length" },
              { name: "Compare weight" },
              { name: "Compare capacity" },
              { name: "Sort and classify objects" },
            ],
          },
          {
            name: "Geometry",
            skills: [
              { name: "Identify 2D shapes" },
              { name: "Compose simple shapes" },
              { name: "Position words" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Phonics and word recognition",
            skills: [
              { name: "Letter sounds" },
              { name: "Blend sounds to make words" },
              { name: "CVC words" },
              { name: "Identify beginning and ending sounds" },
            ],
          },
          {
            name: "Reading comprehension",
            skills: [
              { name: "Identify main idea in a picture" },
              { name: "Sequence pictures" },
              { name: "Identify characters and settings" },
            ],
          },
          {
            name: "Grammar and mechanics",
            skills: [
              { name: "Capitalization of names and sentences" },
              { name: "End punctuation" },
              { name: "Nouns and verbs" },
            ],
          },
          {
            name: "Vocabulary",
            skills: [
              { name: "Sort words into categories" },
              { name: "Use context clues with pictures" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Living things",
            skills: [
              { name: "Parts of plants" },
              { name: "Animal characteristics" },
              { name: "Sort animals by habitat" },
            ],
          },
          {
            name: "Weather and climate",
            skills: [
              { name: "Observe daily weather" },
              { name: "Weather tools" },
            ],
          },
          {
            name: "Matter",
            skills: [
              { name: "Identify solids and liquids" },
              { name: "Sort objects by properties" },
            ],
          },
          {
            name: "Earth and space",
            skills: [
              { name: "Day and night" },
              { name: "Sun, moon, and stars" },
            ],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Civics",
            skills: [
              { name: "Rules and laws" },
              { name: "Leaders at school and home" },
            ],
          },
          {
            name: "Geography",
            skills: [
              { name: "Maps and globes" },
              { name: "Land and water forms" },
            ],
          },
          {
            name: "Economics",
            skills: [
              { name: "Needs and wants" },
              { name: "Goods and services" },
            ],
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Grade 1
  // ---------------------------------------------------------------------------
  {
    name: "Grade 1",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Counting and number patterns",
            skills: [
              { name: "Count to 120" },
              { name: "Skip-count by 2s, 5s, and 10s" },
              { name: "Number lines to 120" },
              { name: "Even and odd numbers" },
            ],
          },
          {
            name: "Place value",
            skills: [
              { name: "Tens and ones" },
              { name: "Model numbers with base-ten blocks" },
              { name: "Compare two-digit numbers" },
            ],
          },
          {
            name: "Addition",
            skills: [
              { name: "Add within 20" },
              { name: "Add three numbers" },
              { name: "Addition word problems within 20" },
              { name: "Use number lines to add within 20" },
            ],
          },
          {
            name: "Subtraction",
            skills: [
              { name: "Subtract within 20" },
              { name: "Subtraction word problems within 20" },
              { name: "Use number lines to subtract within 20" },
            ],
          },
          {
            name: "Mixed operations",
            skills: [
              { name: "Addition and subtraction facts" },
              { name: "Missing addends" },
              { name: "True or false equations" },
            ],
          },
          {
            name: "Measurement and data",
            skills: [
              { name: "Measure length with nonstandard units" },
              { name: "Tell time to the hour and half hour" },
              { name: "Read picture graphs" },
              { name: "Read bar graphs" },
            ],
          },
          {
            name: "Money",
            skills: [
              { name: "Identify coins and their values" },
              { name: "Count collections of coins" },
            ],
          },
          {
            name: "Geometry",
            skills: [
              { name: "Identify 2D and 3D shapes" },
              { name: "Partition shapes into halves and fourths" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Phonics and decoding",
            skills: [
              { name: "Long and short vowels" },
              { name: "Digraphs (sh, ch, th, wh)" },
              { name: "Blends (bl, st, cr)" },
              { name: "CVCe words" },
            ],
          },
          {
            name: "Reading comprehension",
            skills: [
              { name: "Identify main idea" },
              { name: "Identify key details" },
              { name: "Sequence events" },
              { name: "Make predictions" },
            ],
          },
          {
            name: "Grammar and mechanics",
            skills: [
              { name: "Nouns, verbs, and adjectives" },
              { name: "Complete sentences" },
              { name: "Capitalization and punctuation" },
            ],
          },
          {
            name: "Writing skills",
            skills: [
              { name: "Write complete sentences" },
              { name: "Use descriptive words" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Life science",
            skills: [
              { name: "Animal life cycles" },
              { name: "Plant life cycles" },
              { name: "Habitats and ecosystems" },
            ],
          },
          {
            name: "Physical science",
            skills: [
              { name: "Properties of matter" },
              { name: "Pushes and pulls" },
            ],
          },
          {
            name: "Earth science",
            skills: [
              { name: "Patterns in the sky" },
              { name: "Seasonal changes" },
            ],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Civics",
            skills: [
              { name: "Rights and responsibilities" },
              { name: "Local leaders" },
            ],
          },
          {
            name: "History",
            skills: [
              { name: "Timelines" },
              { name: "Important national holidays" },
            ],
          },
          {
            name: "Geography",
            skills: [
              { name: "Reading simple maps" },
              { name: "Cardinal directions" },
            ],
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Grade 2
  // ---------------------------------------------------------------------------
  {
    name: "Grade 2",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Place value and number sense",
            skills: [
              { name: "Place value to 1,000" },
              { name: "Skip-count within 1,000" },
              { name: "Compare three-digit numbers" },
            ],
          },
          {
            name: "Addition",
            skills: [
              { name: "Add within 100 without regrouping" },
              { name: "Add within 100 with regrouping" },
              { name: "Add within 1,000" },
              { name: "Addition word problems within 100" },
            ],
          },
          {
            name: "Subtraction",
            skills: [
              { name: "Subtract within 100 without regrouping" },
              { name: "Subtract within 100 with regrouping" },
              { name: "Subtract within 1,000" },
              { name: "Subtraction word problems within 100" },
            ],
          },
          {
            name: "Mixed operations",
            skills: [
              { name: "Two-step word problems" },
              { name: "Balance equations" },
            ],
          },
          {
            name: "Measurement and time",
            skills: [
              { name: "Measure length in inches and centimeters" },
              { name: "Solve measurement word problems" },
              { name: "Tell time to the nearest five minutes" },
            ],
          },
          {
            name: "Money and data",
            skills: [
              { name: "Count mixed coins and bills" },
              { name: "Solve money word problems" },
              { name: "Read and interpret bar graphs" },
            ],
          },
          {
            name: "Geometry and fractions",
            skills: [
              { name: "Identify and draw shapes" },
              { name: "Partition shapes into equal parts" },
              { name: "Unit fractions of shapes" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Phonics and word analysis",
            skills: [
              { name: "Prefixes and suffixes" },
              { name: "Vowel teams (ea, ai, oa)" },
              { name: "R-controlled vowels" },
            ],
          },
          {
            name: "Reading comprehension",
            skills: [
              { name: "Identify main idea and details" },
              { name: "Compare and contrast" },
              { name: "Author’s purpose" },
            ],
          },
          {
            name: "Grammar and mechanics",
            skills: [
              { name: "Compound sentences" },
              { name: "Irregular verbs" },
              { name: "Plural nouns" },
            ],
          },
          {
            name: "Writing skills",
            skills: [
              { name: "Write paragraphs" },
              { name: "Use transition words" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Life science",
            skills: [{ name: "Animal adaptations" }, { name: "Food chains" }],
          },
          {
            name: "Physical science",
            skills: [
              { name: "States of matter" },
              { name: "Changes in matter" },
            ],
          },
          {
            name: "Earth science",
            skills: [
              { name: "Earth materials" },
              { name: "Slow and fast Earth changes" },
            ],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Civics",
            skills: [
              { name: "Government roles" },
              { name: "Community decision-making" },
            ],
          },
          {
            name: "History",
            skills: [{ name: "Historical figures" }, { name: "Local history" }],
          },
          {
            name: "Geography",
            skills: [
              { name: "Map symbols and keys" },
              { name: "Continents and oceans" },
            ],
          },
          {
            name: "Economics",
            skills: [
              { name: "Producers and consumers" },
              { name: "Saving and spending" },
            ],
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Grade 3
  // ---------------------------------------------------------------------------
  {
    name: "Grade 3",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Place value and rounding",
            skills: [
              { name: "Place value to 10,000" },
              { name: "Round to the nearest 10" },
              { name: "Round to the nearest 100" },
            ],
          },
          {
            name: "Multiplication",
            skills: [
              { name: "Understand multiplication as repeated addition" },
              { name: "Multiplication facts up to 10 × 10" },
              { name: "Multiply with arrays" },
              { name: "Multiplication word problems" },
            ],
          },
          {
            name: "Division",
            skills: [
              { name: "Understand division as equal sharing" },
              { name: "Division facts up to 100" },
              { name: "Relate multiplication and division" },
              { name: "Division word problems" },
            ],
          },
          {
            name: "Fractions",
            skills: [
              { name: "Unit fractions on a number line" },
              { name: "Fractions as parts of a whole" },
              { name: "Equivalent fractions" },
              { name: "Compare fractions with like denominators" },
            ],
          },
          {
            name: "Measurement and data",
            skills: [
              { name: "Measure length to the nearest quarter inch" },
              { name: "Solve elapsed time problems" },
              { name: "Interpret bar graphs and line plots" },
            ],
          },
          {
            name: "Geometry",
            skills: [
              { name: "Identify quadrilaterals" },
              { name: "Perimeter of polygons" },
              { name: "Area of rectangles" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Word study",
            skills: [
              { name: "Prefixes and suffixes" },
              { name: "Greek and Latin roots" },
              { name: "Homophones" },
            ],
          },
          {
            name: "Reading comprehension",
            skills: [
              { name: "Determine main idea" },
              { name: "Cause and effect" },
              { name: "Inferencing" },
              { name: "Summarizing" },
            ],
          },
          {
            name: "Grammar and mechanics",
            skills: [
              { name: "Parts of speech" },
              { name: "Pronoun-antecedent agreement" },
              { name: "Complex sentences" },
            ],
          },
          {
            name: "Writing skills",
            skills: [
              { name: "Write informative paragraphs" },
              { name: "Opinion writing" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Life science",
            skills: [
              { name: "Inherited traits" },
              { name: "Life cycles of plants and animals" },
              { name: "Ecosystems and food webs" },
            ],
          },
          {
            name: "Physical science",
            skills: [
              { name: "Forces and motion" },
              { name: "Simple machines" },
            ],
          },
          {
            name: "Earth science",
            skills: [{ name: "Weather and climate" }, { name: "Water cycle" }],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Civics",
            skills: [
              { name: "Branches of government" },
              { name: "Voting and citizenship" },
            ],
          },
          {
            name: "History",
            skills: [
              { name: "Early American history" },
              { name: "Cultural traditions" },
            ],
          },
          {
            name: "Geography",
            skills: [
              { name: "Regions of the United States" },
              { name: "Natural resources" },
            ],
          },
          {
            name: "Economics",
            skills: [
              { name: "Supply and demand" },
              { name: "Producers and consumers" },
            ],
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Grade 4
  // ---------------------------------------------------------------------------
  {
    name: "Grade 4",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Place value and multi-digit operations",
            skills: [
              { name: "Place value to 1,000,000" },
              { name: "Add and subtract multi-digit numbers" },
              { name: "Multiply multi-digit numbers by one-digit numbers" },
            ],
          },
          {
            name: "Multiplication and division",
            skills: [
              { name: "Multiply two-digit numbers" },
              { name: "Divide with remainders" },
              { name: "Multi-step word problems" },
            ],
          },
          {
            name: "Fractions and mixed numbers",
            skills: [
              { name: "Equivalent fractions" },
              { name: "Compare fractions with different denominators" },
              { name: "Add and subtract fractions with like denominators" },
              { name: "Mixed numbers and improper fractions" },
            ],
          },
          {
            name: "Decimals",
            skills: [
              { name: "Decimals to tenths and hundredths" },
              { name: "Compare decimals" },
              { name: "Decimals on number lines" },
            ],
          },
          {
            name: "Measurement and data",
            skills: [
              { name: "Convert units of length, weight, and capacity" },
              { name: "Solve measurement word problems" },
              { name: "Interpret line plots with fractions" },
            ],
          },
          {
            name: "Geometry",
            skills: [
              { name: "Classify triangles and quadrilaterals" },
              { name: "Lines, rays, and angles" },
              { name: "Symmetry" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Word study",
            skills: [
              { name: "Greek and Latin roots" },
              { name: "Synonyms and antonyms" },
              { name: "Context clues" },
            ],
          },
          {
            name: "Reading comprehension",
            skills: [
              { name: "Theme" },
              { name: "Point of view" },
              { name: "Compare texts" },
            ],
          },
          {
            name: "Grammar and mechanics",
            skills: [
              { name: "Prepositions and prepositional phrases" },
              { name: "Progressive verb tenses" },
              { name: "Correct sentence fragments" },
            ],
          },
          {
            name: "Writing skills",
            skills: [
              { name: "Write multi-paragraph essays" },
              { name: "Use evidence from text" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Life science",
            skills: [
              { name: "Structures and functions of organisms" },
              { name: "Energy transfer in ecosystems" },
            ],
          },
          {
            name: "Physical science",
            skills: [
              { name: "Forms of energy" },
              { name: "Electricity and circuits" },
            ],
          },
          {
            name: "Earth science",
            skills: [
              { name: "Rocks, minerals, and fossils" },
              { name: "Earth’s processes" },
            ],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Civics",
            skills: [
              { name: "Constitution and rights" },
              { name: "Government responsibilities" },
            ],
          },
          {
            name: "History",
            skills: [
              { name: "State history" },
              { name: "Native American cultures" },
            ],
          },
          {
            name: "Geography",
            skills: [
              { name: "U.S. regions and states" },
              { name: "Human-environment interaction" },
            ],
          },
          {
            name: "Economics",
            skills: [
              { name: "Trade and resources" },
              { name: "Economic choices" },
            ],
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Grade 5
  // ---------------------------------------------------------------------------
  {
    name: "Grade 5",
    subjects: [
      {
        name: "Math",
        categories: [
          {
            name: "Place value and powers of ten",
            skills: [
              { name: "Place value to billions" },
              { name: "Powers of ten" },
              { name: "Round decimals" },
            ],
          },
          {
            name: "Operations with multi-digit numbers",
            skills: [
              { name: "Multiply multi-digit whole numbers" },
              { name: "Divide multi-digit whole numbers" },
              { name: "Multi-step word problems with whole numbers" },
            ],
          },
          {
            name: "Fractions",
            skills: [
              { name: "Add and subtract fractions with unlike denominators" },
              { name: "Multiply fractions and whole numbers" },
              { name: "Multiply fractions by fractions" },
              { name: "Divide unit fractions and whole numbers" },
            ],
          },
          {
            name: "Decimals",
            skills: [
              { name: "Add and subtract decimals" },
              { name: "Multiply decimals" },
              { name: "Divide decimals by whole numbers" },
            ],
          },
          {
            name: "Measurement and data",
            skills: [
              { name: "Convert measurement units" },
              { name: "Volume of rectangular prisms" },
              { name: "Interpret line plots with fractions" },
            ],
          },
          {
            name: "Geometry and coordinate planes",
            skills: [
              { name: "Coordinate plane: first quadrant" },
              { name: "Classify two-dimensional figures" },
            ],
          },
        ],
      },
      {
        name: "English",
        categories: [
          {
            name: "Word study",
            skills: [
              { name: "Greek and Latin roots" },
              { name: "Figurative language" },
              { name: "Multiple-meaning words" },
            ],
          },
          {
            name: "Reading comprehension",
            skills: [
              { name: "Theme and summary" },
              { name: "Text structure" },
              { name: "Analyze characters" },
            ],
          },
          {
            name: "Grammar and mechanics",
            skills: [
              { name: "Conjunctions and clauses" },
              { name: "Verb tense consistency" },
              { name: "Commas in complex sentences" },
            ],
          },
          {
            name: "Writing skills",
            skills: [
              { name: "Write research reports" },
              { name: "Cite sources" },
            ],
          },
        ],
      },
      {
        name: "Science",
        categories: [
          {
            name: "Life science",
            skills: [
              { name: "Human body systems" },
              { name: "Photosynthesis" },
              { name: "Adaptations and survival" },
            ],
          },
          {
            name: "Physical science",
            skills: [
              { name: "Matter and its interactions" },
              { name: "Chemical vs physical changes" },
            ],
          },
          {
            name: "Earth science",
            skills: [
              { name: "Earth’s spheres" },
              { name: "Earth, moon, and sun system" },
            ],
          },
        ],
      },
      {
        name: "Social Studies",
        categories: [
          {
            name: "Civics",
            skills: [
              { name: "Foundations of American government" },
              { name: "Rights and responsibilities of citizens" },
            ],
          },
          {
            name: "History",
            skills: [
              { name: "Colonial America" },
              { name: "American Revolution" },
            ],
          },
          {
            name: "Geography",
            skills: [
              { name: "Latitude and longitude" },
              { name: "Maps and spatial thinking" },
            ],
          },
          {
            name: "Economics",
            skills: [
              { name: "Markets and trade" },
              { name: "Budgeting and saving" },
            ],
          },
        ],
      },
    ],
  },
];
