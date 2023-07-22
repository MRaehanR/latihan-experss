import { ResponseError } from "../errors/response-error.js";
import { logger } from "../helpers/logger.js";

export const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    next();
    return;
  }

  if (error instanceof ResponseError) {
    res.error(error.message, error.code, error.data, error.errors).end();
  } else {
    logger.error(error);
    res.internalServerError().end();
  }
};
