import { ApiErrors } from "../errors/apiErrors.js";

const logService = async (user) => {
  const life = await 1 < 2;

  if (!life) throw ApiErrors.notFound('I guess life isnt that easy...');

  return 'Base Get is working'
};

export {
  logService,
};
