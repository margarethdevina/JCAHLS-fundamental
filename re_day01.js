//// VARIABEL ////
/**
 * struktur variabel ==> keywordVariabel namaVariabel = valueVariabel
 * 
 * keywordVariabel var let const
 * 
 * namaVariabel huruf _ $ camelCase snake_case lowercase UPPERCASE
 * 
 * valueVariabel string("" double quote '' single quote `` backtick) number (integer bulet float desimal)
 * array [string,string,string] atau [number,number,number] object {firstName:`Margareth`,lastName:`Devina`} boolean (TRUE FALSE)
 *  
 */

/**
 * shortcut
 * emoticon windows . ✅
 * new terminal ctrl shift backtick 
 * open current terminal ctrl backtick 
 * comment ctrl /
 * pindahin program ke atas alt up
 * pindahin program ke bawah alt down
 * duplicate program ke bawah shift alt down
 * duplicate program ke atas shift alt up
 * rapiin spasi pada program shift alt f
 * find word ctrl f otomatis kata sebelah kursor akan dicari pertama kali
 * save program ctrl s tiap kali ada perubahan harus save baru run di terminal, dot putih sebelah nama file 
 * berarti file belum di save
 * hapus program dalam 1 row sekaligus shift del
 * 
 */

//// keywordVariabel var ////
/**
 * Sifat redeclare reassign
 */
var nama = `Devina`; // declare
var nama = `Vyn`; // redeclare
nama = `Vynn`; // reassign

console.log(`isi dari variabel nama ==> ${nama}`); // cara paling efektif
// console.log("isi dari variabel nama ==>", nama); cara kedua tapi ga efektif, double quote bisa diganti jadi single quote

//// keywordVariabel let ////
/**
 * sifat non-redeclare reassign
 * karena non-redeclare otomatis pembuatan variabel pakai let paling aman dilakukan
 */
let age = 10; // declare
// let age = 12; // redeclare menghasilkan ==> SyntaxError: Identifier 'age' has already been declared ==> let itu non-redeclare
age = 15; // reassign

console.log(`isi dari variabel age ==> ${age}`); // cara paling efektif

//// keywordVariabel const ////
/**
 * sifat non-redeclare non-reassign
 * biasanya namaVariabel uppercase
 */
const PI = 3.14; // declare
// const PI = 2; // redeclare ==> SyntaxError: Identifier 'PI' has already been declared ==> const itu non-redeclare
// PI = 4; // reassign ==> TypeError: Assignment to constant variable ==> const itu non-reassign

console.log(`isi dari variabel PI ==> ${PI}`); // cara paling efektif

//// TIPE DATA ////

// 1️⃣ string huruf karakter diapit double quote "" single '' backtick ``
let namaToko = "Full 'Metal' \n Panic";
let nama_toko = 'Full \'Metal\' \n Panic';
let namatoko = `Full "Metal" 
Panic`;

console.log(`isi variabel namaToko ==> ${namaToko}`);
// console.log("isi variabel namaToko ==> ", namaToko);
console.log(`isi variabel nama_toko ==> ${nama_toko}`);
// console.log("isi variabel nama_toko ==> ", nama_toko);
console.log(`isi variabel namatoko ==> ${namatoko}`);
// console.log("isi variabel namatoko ==> ", namatoko);

let alamatToko = `Bogor`;

console.log(`isi gabungan variabel namatoko dan alamatToko ==> ${namatoko} 
${alamatToko}`);

/**
 * Fungsi pada tipe data string
 * 1. typeof = untuk cek tipe data
 * 2. string.length = untuk tahu jumlah karakter
 * 3. string.toUpperCase() = string di kapitalin semua
 * 4. string.toLowerCase() = string di kecilin semua
 * 5. string.includes() = string contain string di dalam bracket includes ga
 */
let greeting = `Hello, welcome to Bogor`;

// typeof
console.log(`hasil dari typeof variabel greeting ==> `, typeof greeting);

// string.length
console.log(`hasil dari greeting.length ==> `, greeting.length);
console.log(`berapa jumlah karakter di dalam variabel greeting ==> `, greeting.length);

// string.toLowerCase()
console.log(`hasil mengecilkan isi variabel greeting ==> `, greeting.toLowerCase());

// string.toUpperCase()
console.log(`hasil mengkapitalkan isi variabel greeting ==> `, greeting.toUpperCase());

// string.includes(`apa yang dicari`)
console.log(`apakah benar ada kata Bogor di dalam variabel greeting? `, greeting.includes(`Bogor`));
console.log(`apakah benar ada kata hello di dalam variabel greeting? `, greeting.includes(`hello`));

// 2️⃣ number integer / angka bulat float / angka desimal in million itu bisa disingkat jadi 1e6 billion 1e9
let jarak = 1500; // integer
let berat = 78.5; // float
let saldoAtm = 25e6; // 25000000 atau 25 juta

console.log(`isi variabel saldoAtm ==> ${saldoAtm}`);

/**
 * Arithmetic operation
 * penjumlahan +
 * pengurangan -
 * perkalian *
 * pembagian /
 * modulus % berarti mencari nilai sisa misal 10 % 3 = 1 , 6 % 3 = 0
 */

let hasil = jarak + 500;
hasil = hasil - 500;
hasil = hasil * 2;
hasil = hasil / 1000;
hasil = hasil % 3;

console.log(`isi dari variabel hasil ==> ${hasil}`);

/**
 * string <-- integer jadi string itu rumahnya integer dan tipe data lain itu kamar2 di dalam rumah
 * begitu tipe data lain di pertemukan ( + ) dengan string otomatis data itu akan berubah menjadi string semua 
 */

console.log(`1 + 2 ==> `, 1 + 2);
console.log(`1 + 2 + "4" ==> `, 1 + 2 + "4");
console.log(`1 + 2 + "4" + 5 + 1 ==> `, 1 + 2 + "4" + 5 + 1);

// increment ++ decrement -- dan shorthand += -=
jarak++; // 1501
jarak++; // 1502
jarak++; // 1503
jarak++; // 1504

jarak += 5; // 1509
jarak += 5; // 1514

jarak--; // 1513
jarak--; // 1512
jarak -= 12 // 1500

console.log(`yuk coba mainin isi variabel jarak ==> ${jarak}`);

// mathematic object
/**
 * tipe mathematic object
 * 1. pi tinggal panggil Math.PI
 * 2. abs absolute Math.abs(nilai yang mau diabsolute)
 * 3. pow pangkat Math.pow(nilai yang mau dipangkat, pangkatnya)
 * 4. sqrt akar 2 Math.sqrt(nilai yang mau diakar 2)
 * 5. cbrt akar 3 Math.cbrt(nilai yang mau diakar 3)
 * 6. round pembulatan ke nilai terdekat Math.round(nilai yang mau diround)
 * 7. ceil pembulatan ke atas Math.ceil(nilai yang mau di round up)
 * 8. floor pembulatan ke bawah Math.floor(nilai yang mau di rounddown)
 * 9. min cari nilai minimum Math.min(nilai1,nilai2,nilai3,dst) ==> mungkin bisa diisi array?
 * 10. max cari nilai maksimum Math.max(nilai1,nilai2,nilai3,dst) ==> mungkin bisa diisi array?
 * 11. random cari nilai random dari 0 - 0.99 Math.random() ==> ga ada isi di dalam bracket!
 */

const PIPakaiObjek = Math.PI; // 3.14 sekian

console.log(`isi dari variabel PIPakaiObjek ==> ${PIPakaiObjek}`);

console.log(`hasil dari Math.abs(-5) ==> `, Math.abs(-5)); // 5
console.log(`hasil dari Math.abs(-5)x-1 ==> `, Math.abs(-5) * -1); // -5
console.log(`hasil dari -Math.abs(-5) ==> `, -Math.abs(-5)); // -5

console.log(`hasil 2 pangkat 3 ==> `, Math.pow(2, 3)); // 8
console.log(`hasil 16 akar 2 ==> `, Math.sqrt(16)); // 4
console.log(`hasil 8 akar 3 ==> `, Math.cbrt(8)); // 2

console.log(`hasil round 2.8 ==> `, Math.round(2.8)); // 3
console.log(`hasil round up 2.4 ==> `, Math.ceil(2.4)); // 3
console.log(`hasil rounddown 2.8 ==> `, Math.floor(2.8)); // 2

console.log(`nilai minimum dari 1, -2, 3, 5 ==> `, Math.min(1, -2, 3, 5)); // -2
console.log(`nilai maksimum dari 1, -2, 3, 5 ==> `, Math.max(1, -2, 3, 5)); // 5

console.log(`munculkan nilai random antara 0-0.99 ==> `, Math.random()); // 0 - 0.99
console.log(`munculkan nilai random antara 0-9 ==> `, Math.floor(Math.random() * 10)); // 0 - 9
console.log(`munculkan nilai random antara 1-10 ==> `, Math.floor(Math.random() * 10) + 1); // 1 - 10

//// PARSING ////
/**
 * 1. parsing string to number
 * a. parseInt()
 * b. parseFloat()
 * 
 * 2. parsing number to string
 * a. string.toString()
 * b. string.toLocaleString()
 */
let angka = `123.456`;

console.log(`hasil parsing variabel angka memakai parseInt() ==> `, parseInt(angka)); // 123
console.log(`hasil parsing variabel angka memakai parseFloat() ==> `, parseFloat(angka)); // 123.456

let angkaNumber = 16134;

console.log(`hasil parsing variabel angkaNumber memakai .toString() ==> `, angkaNumber.toString()); // `16134`
console.log(`hasil parsing variabel angkaNumber memakai .toLocaleString() ==> `, angkaNumber.toLocaleString()); // `16,134`

//// APAKAH SEBUAH DATA BERUPA NUMBER? ////
/**
 * untuk mengecek data berupa number atau bukan gunakan isNaN()
 * hasil isNaN berupa boolean true false
 * NaN = not a number berarti saat bracket isNaN() diisi number hasilnya akan false
 * begitupula saat bracket isNaN() diisi number di dalam quotes hasilnya akan false
 */

console.log(`apakah benar "Vynn" bukanlah sebuah number? `, isNaN(`Vynn`)); // true
console.log(`apakah benar "123" bukanlah sebuah number? `, isNaN(`123`)); // false
console.log(`apakah benar 123 bukanlah sebuah number? `, isNaN(123)); // false

// 3️⃣ boolean true false

/**
 * 1. declare true false
 * 2. comparison operator > < >= <= != == ===
 * 3. logical operator and && or || not !
 * 4. truthy falsy
 */

let benar = true; // declare
let salah = false; // declare

// comparison operator

let angkaA = 20;
let angkaB = 15;

console.log(`benarkah variabel angkaA > angkaB? `, angkaA > angkaB); // true
console.log(`benarkah variabel angkaA < angkaB? `, angkaA < angkaB); // false
console.log(`benarkah variabel angkaA <= 20? `, angkaA <= 20); // true
console.log(`benarkah variabel angkaB >= 20? `, angkaB >= 20); // false
console.log(`benarkah variabel angkaA == 20? `, angkaA == 20); // true
console.log(`benarkah variabel angkaA == "20"? `, angkaA == "20"); // true
console.log(`benarkah variabel angkaB === "15"? `, angkaB === "15"); // false
console.log(`benarkah variabel angkaA != angkaB? `, angkaA != angkaB); // true

// logical operator

//  and && kedua kondisi harus true
console.log(`benarkah angkaA >= 20 dan angkaB <= 15? `, angkaA >= 20 && angkaB <= 15); // true && true = true
console.log(`benarkah angkaA == "20" dan angkaB === "15"? `, angkaA == "20" && angkaB === "15"); // true && false = false
console.log(`benarkah angkaA < 20 dan angkaB == "15"? `, angkaA < 20 && angkaB == "15"); // false && true = false
console.log(`benarkah angkaA < 15 dan angkaB > 20? `, angkaA < 15 && angkaB > 20); // false && false = false

// or || minimal satu kondisi true
console.log(`benarkah angkaA >= 20 atau angkaB <= 15? `, angkaA >= 20 || angkaB <= 15); // true && true = true
console.log(`benarkah angkaA == "20" atau angkaB === "15"? `, angkaA == "20" || angkaB === "15"); // true && false = true
console.log(`benarkah angkaA < 20 atau angkaB == "15"? `, angkaA < 20 || angkaB == "15"); // false && true = true
console.log(`benarkah angkaA < 15 atau angkaB > 20? `, angkaA < 15 || angkaB > 20); // false && false = false

// not ! kebalikan dari kondisi yang dibuat
console.log(`salahkah angkaA < 20? `, !angkaA < 20); // true
console.log(`salahkah angkaB == "15"? `, !angkaB == "15"); // false

// truthy & falsy
/**
 * truthy falsy = inherent boolean value
 * struktur Boolean(xx)
 * truthy or pasti menghasilkan true:
 * number selain 0
 * string `false` `0` `abc`
 * spasi di dalam quotes " " ' ' ` `
 * true
 * array kosong []
 * object kosong {}
 * fungsi kosong function() function{}
 * 
 * falsy or pasti menghasilkan false:
 * number 0 -0
 * tulisan undefined
 * tulisan NaN
 * tulisan null
 * empty string `` "" ''
 * false
 */

console.log(`apa nilai dari Boolean(NaN)? `, Boolean(NaN)); // false
console.log(`apa nilai dari Boolean(" ")? `, Boolean(" ")); // true
console.log(`apa nilai dari Boolean("")? `, Boolean("")); // false
console.log(`apa nilai dari Boolean(true)? `, Boolean(true)); // true
console.log(`apa nilai dari Boolean(false)? `, Boolean(false)); // false
console.log(`apa nilai dari Boolean("false")? `, Boolean("false")); // true
console.log(`apa nilai dari Boolean(undefined)? `, Boolean(undefined)); // false
console.log(`apa nilai dari Boolean(null)? `, Boolean(null)); // false
console.log(`apa nilai dari Boolean(97)? `, Boolean(97)); // true
console.log(`apa nilai dari Boolean(-0)? `, Boolean(-0)); // false

//// CONDITIONAL STATEMENT ////
/**
 * pasti melibatkan boolean value karena hasil condition nya adalah boolean
 * ingat untuk memunculkan boolean value bisa dari comparison operator, logical operator, truthy, falsy
 * 
 * 5 jenis:
 * 1. If statement (1 kondisi dan 1 tugas/hasil)
 *  strukturnya: 
 *  If (condition){
 *      task saat condition met;
 *  }
 * 
 * 2. If ... else ... statement (2 kondisi di mana 1 ditentukan dan 1 lagi sisa jadi ada 2 task)
 *  strukturnya:
 *  If (condition){
 *      task saat condition met;
 *  } else {
 *      task saat condition tidak met;
 *  }
 * 
 * 3. If ... else if ... else if ... statement (biasanya untuk lebih dari 2 kondisi, hasilnya 
 *      akan terlimit ke kondisi dan task yang ditentukan)
 *  strukturnya:
 *  If (condition 1){
 *      task saat condition 1 met;
 *  } else if (condition 2){
 *      task saat condition 2 met;
 *  } else if (condition 3){
 *      task saat condition 3 met;
 *  }
 * }
 * 
 * 4. switch ... case ... statement (switch untuk menentukan variabel yang mau dilacak isinya, case 
 *      menunjukkan kemungkinan value yang bisa dihasilkan variabel tersebut, case bisa dibuat multiple)
 *      kelemahan: setiap case dan task yang dibuat akan terus dijalankan atau diperlihatkan jadi perlu distop saat salah 1 case
 *                  ditemukan. cara stopnya dengan tambah break setelah setiap task dibuat.
 *  strukturnya:
 *  switch (variabel){
 *      case value1:
 *      task1;
 *      break; // sebagai stopper
 *      case value2:
 *      task2;
 *      break; // sebagai stopper
 *      default:
 *      task3;
 *      break; // sebagai stopper
 *  } 
 * 
 * 5. ternary operator
 *  hasil task harus disimpan di variabel makannya 1 variabel bisa menghasilkan 2 task
 *  strukturnya:
 *  keywordVariabel namaVariabel = condition ? task saat condition met : task saat condition ga met
 *  in summary strukturnya sama dengan if ... else ... statement bedanya adalah harus ditampung di variabel
 */

// if statement //

// ingin memverifikasi umur, diatas 17 tahun berarti verif berhasil

nama = `Vynn`;
let usia = 20;
let email = `vynn@gmail.com`;

if (usia >= 17) {
    console.log(`usia berhasil diverifikasi, cek email ${email}`);
}

// if ... else ... statement //

if (usia >= 17) {
    console.log(`usia berhasil diverifikasi, cek email ${email}`);
} else {
    console.log(`usia gagal diverifikasi`);
}

// if ... else if ... statement //

let nilai = 0;

/**
 * misal grade a bernilai 80 - 100
 * grade b = 70 - 79
 * grade c = 60 - 69
 * grade d = 50 - 59
 * sisanya grade e
 */

if (nilai >= 80 && nilai <= 100) {
    console.log(`nilai anda ${nilai}, anda masuk grade A`);
} else if (nilai >= 70 && nilai <= 79) {
    console.log(`nilai anda ${nilai}, anda masuk grade B`);
} else if (nilai >= 60 && nilai <= 69) {
    console.log(`nilai anda ${nilai}, anda masuk grade C`);
} else if (nilai >= 50 && nilai <= 59) {
    console.log(`nilai anda ${nilai}, anda masuk grade D`);
} else if (nilai >= 0 && nilai <= 49) {
    console.log(`nilai anda ${nilai}, anda masuk grade E`);
}

// switch ... case ... //

let profesi = `presiden`;

switch (profesi) {
    case `programmer`:
        console.log(`sebagai ${profesi}, saya dapat membuat game`);
        break;
    case `dokter`:
        console.log(`sebagai ${profesi}, saya dapat memeriksa pasien`);
        break;
    case `presiden`:
        console.log(`sebagai ${profesi}, saya dapat memindahkan ibu kota negara`);
        break;
    default:
        console.log(`profesi apa pun, saya bahagia`);
        break;
}

// ternary operator //

/**
 * hasil verif usia masuk ke dalam variabel verifikasiUsia
 * usia >= 17 berarti verif berhasil, cek email. selain itu verif gagal
 */

let verifikasiUsia = usia >= 17 ? `verifikasi berhasil, cek email ${email}` : `verifikasi gagal`;

console.log(verifikasiUsia);

//// latihan membuat javascript di dalam html ////

// <script> </script> digunakan untuk menjalankan javascript di dalam format html file
// prompt digunakan untuk meminta input dan semua input pasti diconvert menjadi tipe string
// alert digunakan untuk menampilkan pop up
// console.log() digunakan untuk menunjukkan isi dari bracket () di dalam console saat ctrl shift i (inspect element) dilakukan

/**
 * buat web html untuk verifikasi usia pembuatan sim
 * step:
 * 1. input usia pakai prompt (ingat data yg diinput pasti jadi string!)
 * 2. usia diperiksa menggunakan comparison operator (isian variabel usia harus diubah jadi number)
 * 3. munculkan pop up alert
 *      a) usia >= 17 maka verifikasi berhasil
 *      b) usia < 17 maka verifikasi gagal
 */

