require("dotenv").config(); // requeri installan dotenv-nya
const express = require("express");

const PORT = process.env.PORT; // untuk envnya

// bikin data usersRoutenya
const usersRoute = require("./routes/user.js");

// panggil middleware
const middlewareLogRequest = require("./middleware/log.js");
const upload = require("./middleware/multer.js"); // sumber multernya di multer.js

const app = express();

// ambil data dari panggil middleware log.js
app.use(middlewareLogRequest);

// middleware untuk mengizinkan request body berupa json
app.use(express.json());

// panggil sumber public seperti foto dkk
app.use("/asset", express.static("public/image"));

// ambil data usersRoutenya
app.use("/users", usersRoute);

// Route untuk mengunggah file
app.post("/upload", upload, (req, res) => {
  res.json({
    message: "Upload Berhasil",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message, // Perhatikan penulisan variabel "err" yang benar, bukan "er"
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil dijalankan di port ${PORT}`);
});
