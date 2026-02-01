// prisma/seed.ts
import { CURRICULUM } from "./data/curriculum";
import { mathTemplates } from "./data/mathTemplates";
import { englishTemplates } from "./data/englishTemplates";
import { scienceTemplates } from "./data/scienceTemplates";
import { prisma } from "@/lib/prisma";


async function seedCurriculum() {
  console.log("📘 Seeding Grades, Subjects, Categories, Skills...");

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

  console.log("✅ Curriculum seeded.");
}

async function seedTemplates() {
  console.log("🧩 Seeding Question Templates...");

  const allTemplates = [
    ...mathTemplates,
    ...englishTemplates,
    ...scienceTemplates,
  ];

  for (const t of allTemplates) {
    // 1. Upsert Template
    const template = await prisma.questionTemplate.upsert({
      where: { template: t.template },
      update: {},
      create: {
        template: t.template,
        type: t.type,
        difficulty: t.difficulty,
        questionFormat: t.questionFormat,
      },
    });

    // 2. Attach template to all matching categories → skills
    for (const categoryName of t.categories) {
      const categories = await prisma.skillCategory.findMany({
        where: { name: categoryName },
        include: { skills: true },
      });

      for (const category of categories) {
        for (const skill of category.skills) {
          await prisma.skillTemplate.upsert({
            where: {
              skillId_templateId: {
                skillId: skill.id,
                templateId: template.id,
              },
            },
            update: {},
            create: {
              skillId: skill.id,
              templateId: template.id,
            },
          });
        }
      }
    }
  }

  console.log("✅ Templates seeded.");
}

async function main() {
  console.log("🌱 Starting full seeding...");

  await seedCurriculum();
  await seedTemplates();

  console.log("🎉 All seeding completed successfully!");
}

main()
  .catch((err) => {
    console.error("❌ Seed error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
