const tugas = document.getElementById("tugas");
const kepentingan = document.getElementById("kepentingan");
const tambah = document.getElementById("tambah");
const tugasList = document.getElementById("tugas-list");

tambah.addEventListener("click", (e) => {
    e.preventDefault();
    const tugasValue = tugas.value.trim();
    const kepentinganValue = kepentingan.value;

    if (tugasValue === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const item = document.createElement("li");
    item.innerText = tugasValue + ' (' + kepentinganValue + ')';
    tugasList.appendChild(item);

    const hapusBtn = document.createElement("button");
    hapusBtn.innerText = "Hapus";
    hapusBtn.style.marginLeft = "10px";
    item.appendChild(hapusBtn);

    hapusBtn.addEventListener("click", () => {
        tugasList.removeChild(item);
    })

    item. addEventListener("click", () => {
        item.classList.toggle("selesai");
    })

    tugas.value = "";

});