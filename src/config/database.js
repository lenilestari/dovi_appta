// config ini digunakan untuk koneksi ke database
// connection ke MySQL
const mysql = require("mysql2");

// connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // jumlah maksimal yang bisa connect
  queueLimit: 0,
  enableKeepAlive: true, // koneksi yang memungkinkan koneksi tetap aktif dalam jangka waktu yang lama
  keepAliveInitialDelay: 0, // koneksi yang digunakan untuk menentukan penundaan pengiriman paket pertama setelah koneksi aktif
});

module.exports = pool.promise();
