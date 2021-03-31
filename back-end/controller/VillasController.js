const { Router } = require('express');
const { getAll, findByName } = require('../models/villasModel');

const routerVillas = Router();

routerVillas.get('/', async (_req, res) => {
  const allPosts = await getAll();
  res.status(200).json(allPosts);
});

routerVillas.get('/:name', async (req, res) => {
  const { name } = req.params;
  const villasImages = await findByName(name);
  res.status(200).json(villasImages);
});

module.exports = routerVillas;
