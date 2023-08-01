// dijalankan di controllernya

const UsersModel = require("../models/users"); //user model yang diimport dari user model dan user

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "Get all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req; // kita dapat body dari request

  if (!body || !body.nama || !body.email || !body.password) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);

    res.status(201).json({
      message: "Register user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message, // Ubah serverMessage menjadi error.message agar mengembalikan pesan error yang lebih informatif
    });
  }
};

const updateUser = async (req, res) => {
  const { body } = req;

  const { iduser } = req.params;

  try {
    await UsersModel.updateUser(body, iduser);
    res.json({
      message: "Update user success",
      data: {
        id: iduser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { iduser } = req.params;
  try {
    await UsersModel.deleteUser(iduser);
    res.json({
      message: "Delete user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
