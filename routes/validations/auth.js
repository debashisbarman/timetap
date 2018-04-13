import Joi from 'joi';

export default {
  createAccessToken: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .max(20)
        .required()
    }
  }
};
