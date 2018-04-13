import Joi from 'joi';

export default {
  createUser: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string()
      .min(8)
      .max(20)
      .required()
  }
};
