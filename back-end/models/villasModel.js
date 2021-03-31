const connection = require('./connection.js');

const getAll = async () => {
  const [villas] = await connection.execute('SELECT * FROM villas;');
  return villas;
};

const findByName = async (name) => {
  const [villas] = await connection.execute('SELECT * FROM villas_imgs WHERE villas_name = ?;', [name]);
  return villas;
};

module.exports = {
  getAll,
  findByName,
};
