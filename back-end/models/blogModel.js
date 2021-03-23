const connection = require('./connection.js');

const getAll = async () => {
  const [blog] = await connection.execute('SELECT * FROM blog;');
  return blog;
};

const create = async (data) => {
  const {
    author, date, cover, text1, text2, text3, image1, image2,
  } = data;
  await connection.execute(
    'INSERT INTO blog'
    + '(author, date, cover, text1, text2, text3, image1, image2)'
    + 'VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    [author, date, cover, text1, text2, text3, image1, image2],
  );
};

const findById = async (id) => {
  const [postId] = await connection.execute(
    'SELECT * FROM blog WHERE post_id = ?', [id],
  );
  return postId;
};

const remove = async (id) => {
  await connection.execute(
    'DELETE FROM blog WHERE post_id = ?', [id],
  );
};

module.exports = {
  getAll,
  create,
  findById,
  remove,
};
