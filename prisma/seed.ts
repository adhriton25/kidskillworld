import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // ---------------------------------------------
  // 1. Grades
  // ---------------------------------------------
  const gradeNames = ["Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th"];

  const gradeCache: Record<string, { id: number }> = {};
  for (const name of gradeNames) {
    const grade = await prisma.grade.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    gradeCache[name] = grade;
  }

  // ---------------------------------------------
  // 2. Subjects
  // ---------------------------------------------
  const subjectNames = ["Math", "English", "Science"];

  const subjectCache: Record<string, { id: number }> = {};
  for (const name of subjectNames) {
    const subject = await prisma.subject.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    subjectCache[name] = subject;
  }

  // ---------------------------------------------
  // 3. Skill Categories (Grouped by Subject)
  // ---------------------------------------------
  const skillCategoryMap: Record<string, string[]> = {
    Math: [
      "Numbers & Counting",
      "Number Patterns",
      "Comparing Numbers",
      "Base Ten Blocks",
      "Place Value",
      "Addition",
      "Subtraction",
      "Fractions",
      "Measurement",
      "Counting Money",
      "Time",
      "Geometry",
      "Data & Graphing",
      "Word Problems",
      "Skip Counting",
      "Place Value & Rounding",
      "Multiplication",
      "Division",
      "Order of Operations",
      "Roman Numerals",
      "Fractions & Decimals",
      "Time & Calendar",
      "Mental Multiplication",
      "Multiply in Columns",
      "Mental Division",
      "Long Division",
      "Decimals",
      "Factoring",
      "Addition & Subtraction",
      "Multiplication & Division",
      "Fractions - Add/Subtract",
      "Fractions - Multiply/Divide",
      "Fractions - Converting",
      "Fractions vs Decimals",
      "Decimals - Add/Subtract",
      "Decimals - Multiplication",
      "Decimals - Division",
      "Exponents",
      "Integers",
      "Algebra",
    ],
    English: [
      "Reading Foundations",
      "Reading Strategies",
      "Vocabulary",
      "Grammar and Mechanics",
      "Writing Strategies",
    ],
    Science: [
      "Shapes & Colors",
      "Materials",
      "Comparing",
      "States of Matter",
      "Light & Sound",
      "Force & Motion",
      "Animals",
      "Plants",
      "Living Things",
      "Earth Resources",
      "Engineering Practices",
      "Ecosystems",
      "Units and Measurement",
      "Mixtures",
      "Heat",
      "Light",
      "Electricity",
      "Rocks and Minerals",
      "Classification",
      "Conservation and Natural Resources",
    ],
  };

  const categoryCache: Record<string, { id: number }> = {};

  for (const subjectName of Object.keys(skillCategoryMap)) {
    const subject = subjectCache[subjectName];

    for (const categoryName of skillCategoryMap[subjectName]) {
      const category = await prisma.skillCategory.upsert({
        where: {
          name_subjectId: {
            name: categoryName,
            subjectId: subject.id,
          },
        },
        update: {},
        create: {
          name: categoryName,
          subjectId: subject.id,
        },
      });

      categoryCache[`${subjectName}:${categoryName}`] = category;
    }
  }

  console.log("🌱 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
