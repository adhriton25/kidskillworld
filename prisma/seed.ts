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
  console.log("🧩 Seeding Question Templates (Math, English, Science)...");

  const templateGroups = [
    ...mathTemplates,
    ...englishTemplates,
    ...scienceTemplates,
  ];

  for (const group of templateGroups) {
    const categoryName = group.categories;

    // Find all SkillCategories with this name (Math, English, Science)
    const categories = await prisma.skillCategory.findMany({
      where: { name: categoryName },
      include: { skills: true },
    });

    if (categories.length === 0) {
      console.warn(`⚠ No SkillCategory found for: ${categoryName}`);
      continue;
    }

    // Loop through skill groups inside this category
    for (const skillGroup of group.skills) {
      const skillNames = skillGroup.name;

      // Fetch all matching skills across grades
      const skills = await prisma.skill.findMany({
        where: {
          name: { in: skillNames },
        },
      });

      if (skills.length === 0) {
        console.warn(`⚠ No Skills found for names: ${skillNames.join(", ")}`);
      }

      // Loop through templates inside this skill group
      for (const tmpl of skillGroup.templates) {
        // 1. Upsert QuestionTemplate
        const template = await prisma.questionTemplate.upsert({
          where: { template: tmpl.template },
          update: {},
          create: {
            template: tmpl.template,
            type: tmpl.type,
            difficulty: tmpl.difficulty,
            questionFormat: tmpl.questionFormat,
          },
        });

        // 2. Attach template to all skills in this group
        for (const skill of skills) {
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

  console.log("✅ Templates seeded with new nested structure.");
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
