import { logService } from "../services/baseService.js";

const logController = async (req, res, next) => {
  try {
    const msg = await logService(req.body)

    return res.status(200).json({ msg });
  } catch (err) {
    next(err);
  }
};
export {
  logController,
};