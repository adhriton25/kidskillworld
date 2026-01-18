import 'dotenv/config'; 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Pass empty object
async function main() {
  console.log('Start seeding...');

  // 1. Create Grades
  const grades = await Promise.all([
    prisma.grade.upsert({ where: { name: 'Pre-K' }, update: {}, create: { name: 'Pre-K' } }),
    prisma.grade.upsert({ where: { name: 'K' }, update: {}, create: { name: 'K' } }),
    prisma.grade.upsert({ where: { name: '1st' }, update: {}, create: { name: '1st' } }),
    prisma.grade.upsert({ where: { name: '2nd' }, update: {}, create: { name: '2nd' } }),
    prisma.grade.upsert({ where: { name: '3rd' }, update: {}, create: { name: '3rd' } }),
    prisma.grade.upsert({ where: { name: '4th' }, update: {}, create: { name: '4th' } }),
    prisma.grade.upsert({ where: { name: '5th' }, update: {}, create: { name: '5th' } }),
  ]);

  // 2. Create Subjects
  const subjects = await Promise.all([
    prisma.subject.upsert({ where: { name: 'Math' }, update: {}, create: { name: 'Math' } }),
    prisma.subject.upsert({ where: { name: 'Science' }, update: {}, create: { name: 'Science' } }),
    prisma.subject.upsert({ where: { name: 'English' }, update: {}, create: { name: 'English' } }),
    prisma.subject.upsert({ where: { name: 'Social Studies' }, update: {}, create: { name: 'Social Studies' } }),
  ]);

  // 3. Create sample Skills for Math + 1st Grade
  const math = subjects.find(s => s.name === 'Math');
  const firstGrade = grades.find(g => g.name === '1st');

  if (math && firstGrade) {
    await prisma.skill.createMany({
      skipDuplicates: true,
      data: [
        { name: 'Addition', subjectId: math.id, gradeId: firstGrade.id },
        { name: 'Subtraction', subjectId: math.id, gradeId: firstGrade.id },
        { name: 'Counting to 100', subjectId: math.id, gradeId: firstGrade.id },
      ],
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });