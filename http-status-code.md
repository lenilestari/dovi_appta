# HTTP Status Code

**Succesful Responses (2xx)**

- 200 OK (GET, PATCH) // permintaan klien berhasil dilakukan dengan sukses oleh server. GET (untuk mengambil data dari server) dan PATCH (untuk memperbarui sebagian dari sumber daya di server)

- 201 Created (POST< PUT) // permintaan klien berhasil menyebabkan pembuatan sumber daya baru di server. POST (untuk membuat sumber daya baru di server) dan PUT (untuk memperbarui seluruh sumber daya di server)

**Client Error Responses (400x)**

- 400 Bad Request // tidak dapat dipahami atau tidak valid

- 401 Unauthorized // harus autentication dulu untuk bisa masuk misal masukan nama email dan password terlebih dahulu

- 403 Forbidden // server mengenali client yang masuk tetapi client tidak diizinkan untuk mengaksesnya.

- 404 Not Found // server tidak dapat menemukan sumber daya yang sesuai dengan URL atau URI (Uniform Resource Identifier) yang dikirimkan oleh klien dalam permintaannya

- 405 Method Not Allowed // server telah menerima permintaan dari klien, tetapi metode HTTP yang digunakan dalam permintaan tersebut tidak diizinkan untuk aksi yang diminta pada sumber daya tertentu

**Server Error Responses (5xx)**

- 500 Internal Server error // menunjukkan bahwa ada masalah di sisi server yang menyebabkan permintaan klien tidak dapat diproses sepenuhnya. Ini bukan kesalahan yang terjadi pada klien, tetapi merupakan kesalahan yang berasal dari server itu sendiri
