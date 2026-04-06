import { ApiErrors } from "../errors/apiErrors.js";

import { prisma } from "../../lib/prisma.js";

async function getUsers() {
  const users = await prisma.user.findMany();
  return users
}

const logService = async (user) => {
  const life = await 1 < 2;

  if (!life) throw ApiErrors.notFound('I guess life isnt that easy...');

  return getUsers()
  // return 'Base Get is working'
};

export {
  logService,
};
