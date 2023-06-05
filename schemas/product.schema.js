const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductsScheme = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductsScheme = Joi.object({
  name: name,
  price: price,
});

const getProductsScheme = Joi.object({
  id: id.required(),
});


module.exports = {createProductsScheme, updateProductsScheme, getProductsScheme}
