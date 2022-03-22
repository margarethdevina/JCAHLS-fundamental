//// FUNCTION ////
/**
 * 1. Function: sekumpulan program, yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali-kali
 *      di dalam input, proses, output maka function merupakan proses nya
 *      contoh input: variabel
 *      contoh proses lainnya: if else atau looping statement
 * 2. Untuk menggunakan function, maka kita dapat membuat function
 *      console.log() sendiri merupakan contoh function bawaan dari javascript
 * 3. Function bersifat reusable
 * 4. Built-in function: function bawaan javascript
 *      contoh: console.log(), alert()
 * 5. User-defined function: function yg kita buat sendiri dengan struktur berikut:
 *      a. Menggunakan keyword function
 *      b. Nama function
 *      c. Parameter/argument: agar function dapat menerima data dari luar function
 *          i. Disimpan di dalam ()
 *          ii. Boleh ada, boleh tidak
 *          iii. Jika argumen lebih dari 1, maka harus dipisah dengan ","
 */

//// CARA 1 MEMBUAT FUNCTION ////
/** Declarative Function
 * 
 * Struktur:
 * keywordFunction namaFunction(argument){
 *      // function code
 * 
 * }
 */

let angka1 = 200;
let angka2 = 25;

// ini baru tahap deklarasi function / pembuatan function dengan tanpa argumen
// kapan bisa tanpa argumen ==> saat kita memakai global data atau statis, dalam 1 file dan data bisa diakses di dalam function
// global data berarti data diluar dari scope manapun, scope = si kurung kurawal {}
// variabel hasil di dalam scope function jadi hasil bukan global data
function penjumlahan() {
    let hasil = angka1 + angka2
    console.log(hasil)
}

// memanggil function
// dipakai saat event on click pas front end nanti alias saat button di click baru fungsi jalan
penjumlahan;

// menggunakan / menjalankan function
penjumlahan();

// deklarasi function dengan argumen, argumen bebas mau pakai wording apa aja
// argumen1 dan argumen2 menjadi variabel tampung kosong saat deklarasi function ini
function pengurangan(argumen1, argumen2) {
    let hasil = argumen1 - argumen2;
    console.log(hasil);
}
// let hasil bisa dibuat ulang terus karena variabel hasil berfungsi di scope function masing2

// menjalankan fungsi pengurangan
pengurangan(100, 35);


//// CARA 2 MEMBUAT FUNCTION ////
/** Function expression
 * 
 * struktur:
 * keywordVariabel namaVariabel = keywordFunction(argumen){
 *      // function code
 * }
 * 
 * biasanya menggunakan keywordVariabel const
 * 
 */

const perkalian = function (argumen1, argumen2) {
    let hasil = argumen1 * argumen2;
    console.log(hasil);
}

perkalian(3, 3);

//// CARA 3 MEMBUAT FUNCTION ////
/** Arrow function
 * 
 * struktur:
 * keywordVariabel namaVariabel = (argumen) => {
 *      // function code
 * }
 * 
 * Merupakan cara penulisan function terbaru
 * 
 * PALING SERING DIGUNAKAN DI REAL CASE NYA
 * 
 */

const pembagian = (argumen1, argumen2) => {
    let hasil = argumen1 / argumen2;
    console.log(hasil);
}

pembagian(12, 5);

//// DEFAULT VALUE ARGUMEN ////

/**
 * apabila tidak memberikan nilai di argumen maka default value yg akan digunakan
 */

// const kelipatan = (numb1, numb2 = 2) => { // 2 menjadi default value dari numb2
//     let hasil = numb1 % numb2;
//     if (hasil == 0) {
//         console.log(`${numb1} adalah kelipatan ${numb2}`);
//     } else {
//         console.log(`${numb1} bukan kelipatan ${numb2}`);
//     }
// }

// kelipatan(10); // karena setelah , ga ada jadi langsung pakai default value
// kelipatan(15, 3); // karena setelah , diisi 3, jadinya numb2 memakai 3 bukan 2

//// return ////
/**
 * return: keyword yg diperuntukkan untuk mengeluarkan nilai dari function
 * 
 * posisi selalu dibagian akhir sebelum function ditutup, setelah ada return jangan ada fungsi di bawahnya
 * 
 * return seolah2 mengeluarkan hasil blenderan tapi hasilnya ga dituang ke gelas
 * 
 * pastikan fungsi menggunakan 1 return kalau ga ada kondisi if statement di dalam fungsi itu
 * 
 * misal kita mau modif fungsi kelipatan
 */
const kelipatan = (numb1, numb2 = 2) => { // 2 menjadi default value dari numb2
    let hasil = numb1 % numb2;
    if (hasil == 0) {
        return `${numb1} adalah kelipatan ${numb2}`;
    } else {
        return `${numb1} bukan kelipatan ${numb2}`;
    }
}

console.log(kelipatan(15, 3));

//// quick question ////
/**
 * buat fungsi untuk identify ganjil genap
 * ganjilGenap(6) // genap
 * ganjilGenap(7) // ganjil
 */

const ganjilGenap = (a) => {
    if (a % 2 == 0) {
        return `angka ${a} adalah genap`
    } else {
        return `angka ${a} adalah ganjil`
    }
}

console.log(ganjilGenap(6));
console.log(ganjilGenap(5));

//// FUNGSI BAWAAN DARI JAVASCRIPT UNTUK OLAH DATA ARRAY ////
/**
 * fungsi tersebut sudah ada looping di dalamnya
 */

let barang = [`Jaket`, `Sepatu`, `Kaos`];

let list = ``;
for (let i = 0; i < barang.length; i++) {
    list += `${i + 1}. ${barang[i]};\n`
}

console.log(list);

//// .forEach() //// ❗❗
// namaVariabelArray.forEach(): melooping subah data array dan tidak bisa menghasilkan array baru atau tidak menghasilkan return
// cara 1 .forEach() memakai callback function: fungsi yang dipanggil dalam sebuah fungsi

// const cetak = (value, index) => {
//     list += `${index + 1}. ${value};\n` // value mewakili barang[i]
// }

// barang.forEach(cetak); // .forEach() yg akan callback fungsi cetak yang telah diset sebelumnya, jd buat dulu fungsi cetak nya baru di call belakangan

// cara 2 .forEach() ==> membuat fungsi di dalam .forEach() ==> cara 2 paling sering dipakai
barang.forEach((value, index) => {
    list += `${index + 1}. ${value};\n`;
});

console.log(list);

// kelemahan forEach() dia butuh variabel penampung untuk show hasilnya karena fungsi ini tidak bisa return

//// .map() //// ❗❗
// namaVariabelArray.map(): melooping subah data array dan bisa menghasilkan array baru atau menghasilkan return.
// map bisa digunakan dengan callback function atau langsung isi functionnya di dalam
// pasti memerlukan return untuk record hasil function, kalo ga pake return hasil fungsi akan undefined

let numb = [2, 3, 4, 1, 6, 5];

let kali = (value, index) => { // dibentuk untuk memakai cara 1 .map() dibawah
    return value * 2
}

// let numbArr = numb.map(kali) // cara 1

// cara 2 //
let numbArr = numb.map((value, index) => {
    return value * 2;
});

// let numbArr = numb.map((value, index) => {
//     return `ini angka ${value} * 2`; // membuat array baru berisi string tanpa mengurangi jumlah data nya
// });

console.log(numb);
console.log(numbArr);

// memahami lebih dalam ttg callback //
const jumlah = (angka1, angka2) => {
    return angka1 + angka2
};

const jumlahDikali = (cb, pengali) => {
    return cb(2, 5) * pengali;
};

console.log(jumlahDikali(jumlah, 5));

// const jumlahDikali = (cb, pengali) => {
//     return cb * pengali; // angka1 dan angka2 dari fungsi jumlah yang akan di callback menjadi dinamis karena akan di set pas dirun dibawah
//     // case yg ini jarang terjadi krn biasanya value angka1 dan angka2 udah di set di cb(angka1,angka2)
// };
// console.log(jumlahDikali(jumlah(2, 4), 5));

// kapan menggunakan .map()? ❗❗
/** ingin seluruh data array diolah dengan cara yang sama
 * contoh ingin menampilkan list data barang, tampilan konstan sama
 * point pentingnya adalah menghasilkan data baru dengan tampilan konstan (i.e. array berisi string hasil looping misalnya)
 */

// kapan menggunakan .forEach()? ❗❗
/**
 * untuk looping penjumlahan atau menghasilkan string tapi ingat perlu wadah penampung
 */

// barang.forEach((value, index) => {
//     list += `${index + 1}. ${value};\n`;
// });

console.log(`output foreach ==> ${list}`);

let listBarang = barang.map((value, index) => {
    return `${index + 1} ${value}` // yg direturn adalah bentuk hasil yang diinginkan dan dalam tipe array
})
console.log(`output map ==> ${listBarang.join(`\n`)}`); // string di dalam array di enter pakai join(`\n`) saat diprint

//// .filter() //// ❗❗
// namaVariabelArray.filter() : mengolah data array sehingga menghasilkan array baru berdasarkan kondisi yg diberikan

// contoh variabel numb mau diambil angka genapnya aja
let filterGenap = numb.filter((value, index) => {
    return value % 2 == 0 // yg direturn adalah kondisi yang diberikan
});
console.log(numb); [ 2, 3, 4, 1, 6, 5 ]
console.log(filterGenap); // [ 2, 4, 6 ]

