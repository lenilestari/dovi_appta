// models digunakan untuk query ke database
// kirim databasenya

const pool = require("../config/database");

const getAllUsers = () => {
  const SQLquery = "SELECT * FROM users";
  pool.execute("SELECT * FROM users");

  return pool.execute(SQLquery);
};

const createNewUser = (body) => {
  const SQLquery = `INSERT INTO users (nama, email, password)
                    VALUES (?, ?, ?)`;

  const values = [body.nama, body.email, body.password];

  return pool.execute(SQLquery, values);
};

const updateUser = (body, iduser) => {
  const SQLquery = `UPDATE users
                    SET nama=?, email=?, password=?
                    WHERE id=?`;

  const values = [body.nama, body.email, body.password, iduser];

  return pool.execute(SQLquery, values);
};

const deleteUser = (iduser) => {
  const SQLquery = `DELETE FROM users WHERE id=?`;

  const values = [iduser];

  return pool.execute(SQLquery, values);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
