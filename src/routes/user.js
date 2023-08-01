const express = require("express");

const UserController = require("../controller/users.js");

const router = express.Router();

// Create - Post
router.post("/", UserController.createNewUser);

// Read - Get
router.get("/", UserController.getAllUsers);

// update - Patch
router.patch("/:iduser", UserController.updateUser);

// Delete - Delete
router.delete("/:iduser", UserController.deleteUser);

module.exports = router;
