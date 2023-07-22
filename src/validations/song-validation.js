import Joi from "joi";

export const addSongValidation = Joi.object({
  title: Joi.string().max(100).required(),
  artists: Joi.array().items(Joi.string().required()).required(),
  playedCount: Joi.number().default(0),
});

export const removeSongValidation = Joi.object({
  title: Joi.string().required(),
});
