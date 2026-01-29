// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { CURRICULUM } from "./curriculum";

const prisma = new PrismaClient();

async function main() {
  for (const gradeData of CURRICULUM) {
    // 1. Upsert Grade
    const grade = await prisma.grade.upsert({
      where: { name: gradeData.name },
      update: {},
      create: { name: gradeData.name },
    });

    for (const subjectData of gradeData.subjects) {
      // 2. Upsert Subject
      const subject = await prisma.subject.upsert({
        where: { name: subjectData.name },
        update: {},
        create: { name: subjectData.name },
      });

      for (const categoryData of subjectData.categories) {
        // 3. Upsert SkillCategory
        const category = await prisma.skillCategory.upsert({
          where: {
            name_subjectId: {
              name: categoryData.name,
              subjectId: subject.id,
            },
          },
          update: {},
          create: {
            name: categoryData.name,
            subjectId: subject.id,
          },
        });

        // 4. Upsert Skills
        for (const skillData of categoryData.skills) {
          await prisma.skill.upsert({
            where: {
              name_gradeId_categoryId: {
                name: skillData.name,
                gradeId: grade.id,
                categoryId: category.id,
              },
            },
            update: {
              description: skillData.description ?? null,
            },
            create: {
              name: skillData.name,
              description: skillData.description ?? null,
              gradeId: grade.id,
              categoryId: category.id,
            },
          });
        }
      }
    }
  }

  console.log("Math + English + science + social science curriculum seeded successfully.");
}

main()
  .catch((err) => {
    console.error("Seed error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
