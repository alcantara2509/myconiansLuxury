const { Router } = require('express');
const { getAll } = require('../models/villasModel');

const routerVillas = Router();

routerVillas.get('/', async (_req, res) => {
  const allPosts = await getAll();
  res.status(200).json(allPosts);
});

// routerVillas.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const postId = await findById(id);
//   res.status(200).json(postId);
// });

// routerVillas.post('/', (req, res) => {
//   const {
//     author, date, cover, text1, text2, text3, image1, image2,
//   } = req.body;
//   const data = {
//     author, date, cover, text1, text2, text3, image1, image2,
//   };
//   const { isertId } = create(data);
//   res.status(201).json(isertId);
// });

// routerVillas.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   const postId = await remove(id);
//   res.status(200).json(postId);
// });

module.exports = routerVillas;
