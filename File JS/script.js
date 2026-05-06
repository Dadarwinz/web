document.addEventListener("DOMContentLoaded", function() { // pastikan script dijalankan setelah halaman selesai dimuat

    const form = document.querySelector("form"); // ambil form dengan querySelector

    // TOMBOL SUBMIT
    form.addEventListener("submit", function(event) { // tambahkan event listener untuk submit form

        event.preventDefault(); // supaya tidak reload halaman

        // mengambil nilai input
        const namaDepan = document.getElementById("nama-depan").value;
        const namaBelakang = document.getElementById("nama-belakang").value;
        const agama = document.getElementById("agama").value;
        const nik = document.getElementById("NIK").value;
        const telepon = document.getElementById("no-telepon").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;

        // ambil jenis kelamin yang dipilih
        const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked'); // ambil input yang dipilih dengan name jenis kelamin dan yang checked

        let jkvalue = "Tidak dipilih"; // default
        if (jenisKelamin) {  // jika ada yang dipilih
            jkvalue = jenisKelamin.nextElementSibling.textContent; // ambil teks setelah input
        }

        // ambil bahasa asing yang dicentang
        const bahasa = document.querySelectorAll('input[name="bahasa_asing"]:checked'); // ambil semua input yang dicentang dengan name bahasa asing
        let daftarBahasa = ""; // untuk menyimpan daftar bahasa asing yang dipilih

        bahasa.forEach(function(item) { // untuk setiap yang dicentang
            daftarBahasa += item.nextElementSibling.textContent + ", "; // ambil teks setelah input dan tambahkan ke daftar
        });

        if (daftarBahasa === "") { // jika tidak ada yang dicentang
            daftarBahasa = "Tidak ada";
        }

        // tampilkan hasil dalam alert
        alert(
            "Nama Lengkap: " + namaDepan + " " + namaBelakang + "\n" +
            "Agama: " + agama + "\n" +
            "NIK: " + nik + "\n" +
            "No. Telepon: " + telepon + "\n" +
            "Email: " + email + "\n" +
            "Alamat: " + alamat + "\n" +
            "Jenis Kelamin: " + jkvalue + "\n" +
            "Bahasa Asing: " + daftarBahasa
        );

    });

});