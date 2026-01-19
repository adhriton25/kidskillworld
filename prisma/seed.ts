import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// High-level curriculum: Grade → Subject → SkillCategory → Skill → Topics[]
const curriculum: {
  [grade: string]: {
    [subject: string]: {
      [category: string]: {
        [skill: string]: string[];
      };
    };
  };
} = {
  "Pre-K": {
    Math: {
      "Early Number Sense": {
        "Counting to 5": ["Count objects", "Match numbers", "Number recognition"],
        "Counting to 10": ["Count aloud", "Identify numerals", "Compare small groups"],
      },
      "Shapes & Spatial Sense": {
        "Basic Shapes": ["Circle", "Square", "Triangle"],
        "Position Words": ["Above/below", "In/out", "Near/far"],
      },
      "Sorting & Patterns": {
        "Sorting Objects": ["Sort by color", "Sort by size"],
        "Simple Patterns": ["AB patterns", "Repeat patterns"],
      },
    },
    "English Language Arts": {
      "Alphabet Awareness": {
        "Letter Recognition": ["Uppercase letters", "Lowercase letters"],
        "Letter Sounds": ["Beginning sounds", "Match sound to letter"],
      },
      "Early Reading": {
        "Rhyming Words": ["Identify rhymes", "Complete rhymes"],
        "Beginning Sounds": ["Initial sound match", "Sound sorting"],
      },
      Vocabulary: {
        "Naming Objects": ["Everyday objects", "Animals", "Food"],
        Opposites: ["Big/small", "Hot/cold"],
      },
    },
    Science: {
      "Senses & Observation": {
        "Five Senses": ["See", "Hear", "Touch", "Taste", "Smell"],
      },
      "Weather": {
        "Weather Types": ["Sunny", "Rainy", "Cloudy", "Snowy"],
      },
      "Plants & Animals": {
        "Living Things": ["Plants", "Animals"],
      },
    },
    "Social Studies": {
      "Community & Helpers": {
        "Community Helpers": ["Doctor", "Firefighter", "Teacher"],
      },
      "Rules & Routines": {
        "Classroom Rules": ["Sharing", "Taking turns"],
      },
    },
  },

  K: {
    Math: {
      "Number Sense": {
        "Counting to 20": ["Number sequences", "Missing numbers"],
        "Comparing Numbers": ["More/less", "Equal groups"],
      },
      "Addition & Subtraction Foundations": {
        "Addition within 10": ["Pictures", "Counters"],
        "Subtraction within 10": ["Taking away", "Number stories"],
      },
      Geometry: {
        "2D Shapes": ["Identify shapes", "Shape attributes"],
        "3D Shapes": ["Cube", "Sphere"],
      },
      Measurement: {
        "Length": ["Longer/shorter"],
        "Weight": ["Heavier/lighter"],
      },
    },
    "English Language Arts": {
      Phonics: {
        "Short Vowels": ["a, e, i, o, u"],
        "Blending Sounds": ["CVC words", "Sound it out"],
      },
      Reading: {
        "Sight Words": ["High-frequency words"],
        "Simple Sentences": ["Read short sentences"],
      },
      Writing: {
        "Writing Letters": ["Forming letters"],
        "Writing Words": ["Labeling pictures"],
      },
    },
    Science: {
      "Living & Nonliving": {
        "Living vs Nonliving": ["Sort living/nonliving"],
      },
      Weather: {
        "Weather Patterns": ["Sunny/rainy", "Seasons (intro)"],
      },
      "Pushes & Pulls": {
        "Forces": ["Push", "Pull"],
      },
    },
    "Social Studies": {
      "Me & My Community": {
        "Myself": ["Identity", "Family"],
        "Community": ["Neighborhood", "School"],
      },
      "Maps & Globes": {
        "Basic Maps": ["Map symbols", "Directions"],
      },
    },
  },

  "1st": {
    Math: {
      "Number Sense & Counting": {
        "Counting to 120": ["Number charts", "Missing numbers"],
        "Place Value": ["Tens & ones", "Expanded form"],
      },
      "Addition & Subtraction": {
        "Addition within 20": ["Making 10", "Doubles"],
        "Subtraction within 20": ["Counting back", "Number bonds"],
      },
      "Measurement & Data": {
        "Telling Time": ["Hour", "Half-hour"],
        Graphs: ["Picture graphs", "Bar graphs"],
      },
      Geometry: {
        Shapes: ["Attributes", "Composing shapes"],
      },
    },
    "English Language Arts": {
      Phonics: {
        "Long & Short Vowels": ["Silent e", "Vowel contrasts"],
        "Consonant Blends": ["bl, cl, st, tr"],
      },
      "Reading Comprehension": {
        "Main Idea": ["Identify main idea"],
        "Story Elements": ["Characters", "Setting", "Events"],
      },
      Writing: {
        "Complete Sentences": ["Capitalization", "Punctuation"],
        "Opinion Writing": ["State opinion", "Give a reason"],
      },
    },
    Science: {
      "Life Science": {
        "Animal Needs": ["Food", "Water", "Shelter"],
      },
      "Physical Science": {
        "Light & Sound": ["Sources of light", "Loud/soft sounds"],
      },
      "Earth Science": {
        "Seasonal Changes": ["Weather by season"],
      },
    },
    "Social Studies": {
      "Families & Traditions": {
        "Family Types": ["Nuclear", "Extended"],
        Traditions: ["Holidays", "Celebrations"],
      },
      "Basic Economics": {
        "Needs & Wants": ["Sort needs/wants"],
        "Goods & Services": ["Examples in community"],
      },
    },
  },

  "2nd": {
    Math: {
      "Number & Place Value": {
        "Place Value to 1000": ["Hundreds/tens/ones"],
        "Comparing Numbers": [">, <, ="],
      },
      "Addition & Subtraction": {
        "Addition within 100": ["Regrouping"],
        "Subtraction within 100": ["Borrowing"],
      },
      Measurement: {
        "Length": ["Inches", "Centimeters"],
        "Time": ["5-minute intervals"],
      },
      Geometry: {
        "Partitioning Shapes": ["Halves", "Thirds", "Fourths"],
      },
    },
    "English Language Arts": {
      Phonics: {
        "Vowel Teams": ["ai, ee, oa, etc."],
        "R-controlled Vowels": ["ar, er, ir, or, ur"],
      },
      Reading: {
        Summarizing: ["Retell key events"],
        "Comparing Stories": ["Compare characters", "Compare settings"],
      },
      Writing: {
        "Paragraph Writing": ["Topic sentence", "Details"],
        "Informative Writing": ["Facts", "Conclusions"],
      },
    },
    Science: {
      "Life Science": {
        Habitats: ["Forest", "Ocean", "Desert"],
      },
      "Physical Science": {
        "Matter Properties": ["Solid", "Liquid", "Gas"],
      },
      "Earth Science": {
        "Earth Materials": ["Rocks", "Soil", "Water"],
      },
    },
    "Social Studies": {
      Government: {
        "Local Government": ["Mayor", "City council"],
      },
      Geography: {
        "Maps & Landforms": ["Mountains", "Rivers", "Plains"],
      },
    },
  },

  "3rd": {
    Math: {
      "Multiplication & Division": {
        "Multiplication Facts": ["Arrays", "Equal groups"],
        "Division Facts": ["Sharing", "Grouping"],
      },
      Fractions: {
        "Fraction Basics": ["Unit fractions", "Number line fractions"],
        "Comparing Fractions": ["Same denominator"],
      },
      Measurement: {
        Perimeter: ["Perimeter of rectangles"],
        Area: ["Area with unit squares"],
      },
      Geometry: {
        Quadrilaterals: ["Types of quadrilaterals"],
        "Angles (Intro)": ["Right, acute, obtuse (intro)"],
      },
    },
    "English Language Arts": {
      Reading: {
        Theme: ["Identify theme"],
        "Point of View": ["First vs third person"],
      },
      Writing: {
        "Narrative Writing": ["Beginning, middle, end"],
        "Opinion Essays": ["Opinion + reasons"],
      },
      Grammar: {
        "Parts of Speech": ["Nouns", "Verbs", "Adjectives"],
        "Complex Sentences": ["Using conjunctions"],
      },
    },
    Science: {
      "Life Science": {
        "Life Cycles": ["Plants", "Animals"],
      },
      "Physical Science": {
        "Forces & Motion": ["Push/pull", "Friction"],
      },
      "Earth Science": {
        "Weather & Climate": ["Weather tools", "Climate patterns"],
      },
    },
    "Social Studies": {
      Communities: {
        "Communities Past & Present": ["Changes over time"],
        Culture: ["Traditions", "Customs"],
      },
    },
  },

  "4th": {
    Math: {
      "Place Value & Operations": {
        "Multi-digit Addition/Subtraction": ["Regrouping"],
        "Multiplying 2-digit Numbers": ["Partial products"],
      },
      Fractions: {
        "Equivalent Fractions": ["Visual models"],
        "Adding/Subtracting Fractions": ["Like denominators"],
        "Mixed Numbers": ["Mixed ↔ improper"],
      },
      Decimals: {
        "Tenths & Hundredths": ["Place value", "Compare decimals"],
      },
      Geometry: {
        "Lines & Angles": ["Parallel", "Perpendicular", "Types of angles"],
        Symmetry: ["Line symmetry"],
      },
    },
    "English Language Arts": {
      Reading: {
        "Text Structure": ["Cause/effect", "Compare/contrast"],
        Inference: ["Use clues + background knowledge"],
      },
      Writing: {
        "Multi-paragraph Essays": ["Intro, body, conclusion"],
        "Research Writing": ["Note-taking", "Sources"],
      },
      Grammar: {
        "Verb Tenses": ["Past, present, future"],
        Prepositions: ["Prepositional phrases"],
      },
    },
    Science: {
      "Physical Science": {
        Energy: ["Forms of energy"],
        Waves: ["Sound & light waves (intro)"],
      },
      "Earth Science": {
        "Earth Processes": ["Weathering", "Erosion"],
      },
    },
    "Social Studies": {
      "State History": {
        "Early History": ["Native peoples", "Explorers"],
      },
      "Regions of the U.S.": {
        Regions: ["Northeast", "South", "Midwest", "West"],
      },
    },
  },

  "5th": {
    Math: {
      "Fractions (Advanced)": {
        "Adding Unlike Denominators": ["Common denominators"],
        "Multiplying Fractions": ["Fraction × whole", "Fraction × fraction"],
        "Dividing Fractions": ["Fraction ÷ whole (intro)"],
      },
      Decimals: {
        "Decimal Place Value": ["Thousandths"],
        "Operations with Decimals": ["Add", "Subtract", "Multiply", "Divide (intro)"],
      },
      Geometry: {
        Volume: ["Volume of rectangular prisms"],
        "Coordinate Plane": ["Plot points", "Quadrant I"],
      },
    },
    "English Language Arts": {
      Reading: {
        "Author’s Purpose": ["Inform, persuade, entertain"],
        "Comparing Texts": ["Compare themes", "Compare structures"],
      },
      Writing: {
        "Argumentative Writing": ["Claim, reasons, evidence"],
        Summaries: ["Summarize informational text"],
      },
      Grammar: {
        Conjunctions: ["Coordinating, subordinating"],
        "Sentence Variety": ["Simple, compound, complex"],
      },
    },
    Science: {
      "Life Science": {
        Ecosystems: ["Food chains", "Food webs"],
      },
      "Earth Science": {
        "Earth Systems": ["Geosphere", "Hydrosphere", "Atmosphere"],
      },
      "Physical Science": {
        "Chemical Changes": ["Reactions (intro)", "Physical vs chemical"],
      },
    },
    "Social Studies": {
      History: {
        "Early American History": ["Colonies", "Revolution (overview)"],
      },
      Government: {
        "U.S. Government": ["Branches of government", "Constitution (intro)"],
      },
    },
  },
};

async function main() {
  console.log("🌱 Starting seed...");

  // 1. Create Grades
  const gradeCache: Record<string, { id: number }> = {};
  for (const gradeName of Object.keys(curriculum)) {
    const grade = await prisma.grade.upsert({
      where: { name: gradeName },
      update: {},
      create: { name: gradeName },
    });
    gradeCache[gradeName] = grade;
  }

  // 2. Create Subjects
  const subjectNames = [
    "Math",
    "English Language Arts",
    "Science",
    "Social Studies",
  ];
  const subjectCache: Record<string, { id: number }> = {};
  for (const name of subjectNames) {
    const subject = await prisma.subject.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    subjectCache[name] = subject;
  }

  // 3. SkillCategories, Skills, Topics
  for (const [gradeName, subjects] of Object.entries(curriculum)) {
    const grade = gradeCache[gradeName];

    for (const [subjectName, categories] of Object.entries(subjects)) {
      const subject = subjectCache[subjectName];

      for (const [categoryName, skills] of Object.entries(categories)) {
        // Make category name unique across grades/subjects
        const categoryKey = `${gradeName} - ${subjectName} - ${categoryName}`;

        const category = await prisma.skillCategory.upsert({
          where: { name: categoryKey },
          update: {},
          create: { name: categoryKey },
        });

        for (const [skillName, topics] of Object.entries(skills)) {
          const skill = await prisma.skill.upsert({
            where: {
              name_gradeId_subjectId: {
                name: skillName,
                gradeId: grade.id,
                subjectId: subject.id,
              },
            },
            update: {
              categoryId: category.id,
            },
            create: {
              name: skillName,
              gradeId: grade.id,
              subjectId: subject.id,
              categoryId: category.id,
            },
          });

          for (const topicName of topics) {
            await prisma.topic.upsert({
              where: {
                name_skillId: {
                  name: topicName,
                  skillId: skill.id,
                },
              },
              update: {},
              create: {
                name: topicName,
                skillId: skill.id,
              },
            });
          }
        }
      }
    }
  }

  console.log("🌱 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
