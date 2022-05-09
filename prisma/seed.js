const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const promo = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });
    const student = await prisma.student.upsert({
        where: {name: 'Student' },
        update: {},
        create: {
            name: 'Student',
            lang: ["javascript", "java"],
            missionCommander: "Carlo",
            enrollments: 1,
            hasCertification: false
        },
    });
    const student2 = await prisma.student.upsert({
        where: {name: 'Student2' },
        update: {},
        create: {
            name: 'Student2',
            lang: ["javascript", "java", "elixir"],
            missionCommander: "Carlo",
            enrollments: 1,
            hasCertification: false
        },
    });
    const student3 = await prisma.student.upsert({
        where: {name: 'Student3' },
        update: {},
        create: {
            name: 'Student3',
            lang: ["javascript"],
            missionCommander: "Carlo",
            enrollments: 1,
            hasCertification: false
        },
    });
    const student4 = await prisma.student.upsert({
        where: {name: 'Student4' },
        update: {},
        create: {
            name: 'Student4',
            lang: ["java"],
            missionCommander: "Carlo",
            enrollments: 1,
            hasCertification: false
        },
    });

    console.log('Create 4 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

  
