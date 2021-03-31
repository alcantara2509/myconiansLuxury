const connection = require('./connection.js');

const getAll = async () => {
  const [villas] = await connection.execute('SELECT * FROM villas;');
  return villas;
};

module.exports = {
  getAll,
};
