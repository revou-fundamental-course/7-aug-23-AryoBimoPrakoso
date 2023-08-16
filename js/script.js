
// Untuk Menghitung Keliling
function hitungKeliling () {
    const sisiA = parseFloat(document.getElementById("sisi-a").value);
    const sisiB = parseFloat(document.getElementById("sisi-b").value);
    const sisiC = parseFloat(document.getElementById("sisi-c").value);

if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    const hasilKeliling = document.getElementById("hasil-keliling");
    alert("Masukkan nilai terlebih dahulu");
    } 

else{
    const keliling = sisiA + sisiB + sisiC;
    const hasilKeliling = document.getElementById("hasil-keliling");
    hasilKeliling.textContent = `Hasil Keliling = ${keliling} Cm`;
    }
}

function resetInputKeliling () {
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
    document.getElementById("hasil-keliling").textContent = "";
}

document.getElementById("hitung-keliling").addEventListener("click", hitungKeliling);
document.getElementById("reset-keliling").addEventListener("click", resetInputKeliling);
    


// Untuk Menghitung Luas
function hitungLuas () {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    
if (isNaN(alas) || isNaN(tinggi)) {
        const hasilLuas = document.getElementById("hasil-luas");
        alert("Masukkan nilai terlebih dahulu!")
        }

else {
    const luas = 0.5 * alas *tinggi;
    const hasilLuas = document.getElementById("hasil-luas");
    hasilLuas.textContent = `Hasil Luas = ${luas} cm²`;
    } 
}

function resetInputLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil-luas").textContent = "";
}

document.getElementById("hitung-luas").addEventListener("click", hitungLuas);
document.getElementById("reset-luas").addEventListener("click", resetInputLuas);




