const express = require('express');
const router = express.Router();
const ProductsService = require('./../services/products.service');
const service = new ProductsService();

router.get('/', (req, res) => {
  const dataBody = service.find();
  res.json(dataBody);
});

// router.get('filter', (req,res) => {
//   res.send('soy un filter');
// });

// router.get('/:id', (req,res) => {
//   const {id} = req.params;
//   const product = service.findOne(id);
//   res.json(product);
// });

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

// router.patch('/:id', (req, res) => {
//   const {id} = req.params;
//   const body = req.body;
//   const product = service.update(id, body);
//   res.json(product);
// });

// router.delete('/:id', (req, res) => {
//   const {id} = req.params;
//   const product = service.delete(id);
//   res.json(product);

// });

module.exports = router;
