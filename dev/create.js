const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function create() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@gmail.com",
      posts: {
        create: [
          { title: "First post", content: "First post content" },
          { title: "Second post", content: "Second post content" },
        ],
      },
    },
  });

  console.log(user);
}

create();
