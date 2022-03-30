// Variable: penampung data pada program
/**
 * susunan variable ===> keywordVariable namaVariable = nilaiVariable;
 * 
 * keywordVariable : var, let, const
 * 
 * namaVariable : harus diawali dengan huruf atau symbol "_" atau symbol "$"
 * 
 * valueVariable : berdasarkan tipe data ==> string, number, boolean, array, object
*/

// keyword var : sifatnya Redeclare, Reassign
var nama = "Devina"; // deklarasi variabel : tahap pertama ketika membuat variabel
var nama = "Vynn"; // sifat redeclare : membuat variabel dengan nama variabel sama tapi valuenya beda, disarankan tidak dilakukan terus menerus dan nilainya pasti nilai redeclare terakhir yang akan muncul
nama = "Budi"; // Reassign : variabel dipanggil tapi isinya diganti atau di assign lain
// output akan Budi karena terakhir variabel nama diganti jadi Budi
console.log(nama); // untuk menampilkan nilai pada terminal (fungsi output) ==> console.log(nilai_yang_ingin_dilihat)
// input = variabel, proses & output = console.log()
// keyword let : sifatnya Non-Redeclare, Reassign. sering dipakai untuk mencegah penamaan ganda saat buat variable.
let age = 31; // dekarasi variabel menggunakan let
// let age = 20; // Non-redeclare, kalau dirun akan nunjukkin error karena sudah di declare di awal bervalue 31
age = 30;
console.log(age);

// keyword const : sifatnya berlawanan dengan keyword var, Non-Redeclare, Non-Reassign
const PI = 3.14; // ciri khas const biasanya programmer pakai namaVariable kapital semua
// const PI = 14; // akan muncul error assignment has been declared ==> Non-redeclare
// PI = 22/7; // akan muncul error assignment to constant variable ==> Non-Reassign
console.log(PI);

//////////// ATURAN PENULISAN VARIABLE /////////////
// 1. Harus diawali huruf
// let 1nama; ❌
let pekerjaan; // ✅
var alamat = "Surabaya"; // ✅
// windows + . untuk tambah emo.
// 2. boleh diawali dengan symbol (_ atau $)
let_telp = "081287908000"; // shortcut untuk otomatis rapiin lihat recording.
let $fax = "081287908000";

// 3. variable yang terdiri dari 2 suku kata atau lebih
let fullName = "Devina"; // camelCase ✅
let harga_barang = 1000; // snake_case ✅
let namaproduk = "Air Jordan"; // ✅
// let stok barang; ❌
// let stok-barang; ❌

// shift + alt + f : merapikan program
// windows + . : untuk nambah emo
// ctrl + s : untuk save program
// ctrl + / : untuk membuat comment
// ctrl + f : mencari kata terakhir sebelah kursor aktif
// ctrl + ` : membuka terminal
// alt + arah atas / bawah : untuk mindahin baris program ke atas/bawah
// shift + alt + arah atas/bawah : menduplikat baris program ke atas/bawah

// let bantu banget untuk mencegah redeclare dalam 1 scope yg sama toh itu bisa di reassign

// primitive data type = string, number, boolean, null, undefined
// non-primitive data type = object, array, function

//////////////// DATA TYPE ///////////////
// 1️⃣ string : untuk karakter atau huruf, ditandai dengan quotes
let namaToko = "Gladius 'A' \"Toko\" Olahraga"; // double quotes, bisa untuk nambahin single quote ditengah nama toko, perlu \ untuk tambah double quote dan enter (\n)
let nama_toko = 'Gladius \'B\' Toko \n Olahraga'; // single quotes, perlu \ untuk tambah single quote dan enter
let namatoko = `Gladius 'C' "Toko" 
Olahraga`; // backtick (karakter sebelah angka 1), paling fleksibel, ga perlu \, bisa langsung enter tanpa pakai \n
console.log(namaToko);
console.log(nama_toko);
console.log(namatoko);

let alamatToko = "Jl. Sudirman No 23";

// let alamatLengkap = namaToko + " " + alamatToko; // cara 1
let alamatLengkap = `Pak Eko, ${namaToko}, ${alamatToko}`; // cara 2

console.log(alamatLengkap);

/////////////// FUNGSI PADA TIPE DATA STRING //////////////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa tipe data
console.log("⚠ output typeof variabel greeting ====>", typeof greeting); // nilai dari variabel
console.log("⚠ output typeof variabel greeting ====>", typeof `hello`); // nilai langsung

// string.length = menghitung panjang data string
console.log("⚠ output dari string.length dari isi variabel greeting ====>", greeting.length);

// string.toLowerCase() : untuk mengubah semua huruf menjadi huruf kecil
console.log("⚠ output dari string.toLowerCase() dari isi variabel greeting ====>", greeting.toLowerCase());

// string.toUpperCase() : untuk mengubah semua huruf menjadi huruf besar
console.log("⚠ output dari string.toUpperCase() dari isi variabel greeting ====>", greeting.toUpperCase());

// string.includes() : untuk memastikan suatu kata ada tidak pada suatu variabel
console.log("⚠ output dari string.includes('Purwadhika') dari isi variabel greeting ====>", greeting.includes("Purwadhika")); // case sensitive jadi harus bener2 persis huruf besar huruf kecilnya
console.log("⚠ output dari string.includes('purwadhika') dari isi variabel greeting ====>", greeting.includes("purwadhika")); // case sensitive jadi harus bener2 persis huruf besar huruf kecilnya

// 2️⃣ Number : berkaitan angka

let jarak = 1500; // nilai INT/INTEGER / nilai bulat
let berat = 90.25; // nilai FLOAT / nilai desimal
let saldoATM = 25e6; // 25e6 = 25000000

// console.log(saldoATM);

// Arithmetic operator : +, -, *, /, % (plus, kurang, kali, bagi, modulus)
let hasil = jarak + 500;
hasil = jarak - 500;
hasil = jarak / 500;
hasil = jarak * 500;

console.log("jarak (1500) + 500 ==>", hasil);

console.log("1 + 2 + `2` + 4 ==>", 1 + 2 + "2" + 4); // tipe data diubah menjadi string karena string prioritas

// Increment
jarak++; // 1501
jarak++; // 1502
jarak++; // 1503
jarak++; // 1504

jarak += 5; // ==> jarak = jarak + 5; // 1509 // += dikenal dengan shorthand arithmetic
jarak += 5; // ==> jarak = jarak + 5; // 1514

console.log("Jarak setelah ++ 4x  dan direassign +5 2x ===>", jarak);

// Decrement
jarak--; // 1513
jarak--; // 1512
jarak--; // 1511
jarak--; // 1510

jarak -= 5; // 1505
jarak -= 5; // 1500
console.log("Jarak setelah -- 4x  dan direassign -5 2x ===>", jarak);

//////// Mathematic Object /////////
const PI_CIRCLE = Math.PI;
console.log("isi PI_CIRCLE berdasarkan math object PI ===>", PI_CIRCLE);

console.log("hasil math object absolute -25.5 ===>", Math.abs(-25.5)); // nilai absolute positif
console.log("nilai abs dibuat negatif dengan dikali 1 ===>", Math.abs(-2) * -1); // nilai abs dibuat negatif dengan dikali 1
console.log("nilai abs dibuat negatif dengan ditambah minus di depan ===>", -Math.abs(-2)); // nilai abs dibuat negatif dengan ditambah minus di depan

console.log(Math.pow(4, 2)); // 4 pangkat 2
console.log(Math.sqrt(4)); // 4 akar pangkat 2
console.log(Math.cbrt(8)); // 8 akar pangkat 3

// Pembulatan
console.log(Math.round(2.5)); // pembulatan ke nilai terdekat
console.log(Math.ceil(2.1)); // pembulatan selalu ke atas
console.log(Math.floor(2.9)); // pembulatan selalu ke bawah

console.log(Math.min(3, 2, 5)); // mencari nilai terkecil
console.log(Math.max(3, 2, 5)); // mencari nilai terbesar

console.log(Math.random()); // mencari nilai random dari 0.xx s/d 1, kalau mau tambah kelipatan tinggal dikali 10 atau 100 atau 1000

// Parsing data string to number
let angka = "123.456"

console.log(typeof angka);
console.log(parseInt(angka)); // string diubah jadi integer tapi dibulatkan jadi 123
console.log(parseFloat(angka)); // string diubah jadi float 123.456

// Parsing data number to string
let angkaB = 150050

console.log(angkaB.toString()); // ubah 150050 jadi string
console.log(angkaB.toLocaleString()); // ubah 150050 jadi 150.050 tergantung local pc kita simpen ribuan jadi apa (pakai koma atau titik)

// untuk memeriksa data apakah sebuah angka atau tidak
console.log(isNaN(2)); // NaN = Not a Number, hasilnya nanti false
console.log(isNaN("ABC")); // output true
console.log(isNaN("12")); // output false karena meskipun string didalamnya berupa angka

// 3️⃣ Boolean : nilai benar ==> TRUE atau salah ==> FALSE
let benar = true;
let salah = false;

// comparison operator : >, <, >=, <=, ==, ===, != negacy
let angka_A = 20;
let angka_B = 15;
console.log("Comparison : ", angka_A > angka_B); // output harusnya true
console.log("Comparison : ", angka_A < angka_B); // output harusnya false
console.log("Comparison : ", angka_A == angka_A); // output harusnya true
console.log("Comparison : ", angka_A == angka_B); // output harusnya false
console.log("Comparison : ", angka_A != angka_B); // output harusnya true
console.log("Comparison : ", angka_A = 20); // output harusnya true
console.log("Comparison : ", angka_A == `20`); // output harusnya true kalo dobel equal selama nilainya sama meskipun tipe data berbeda tetap akan menghasilkan true
console.log("Comparison : ", angka_A === `20`); // output harusnya false karena nilai dan tipe data harus sama, paling direkomen supaya lebih akurat

// Logical Operator : AND, OR, NOT

// AND : akan menghasilkan nilai TRUE apabila kedua perbandingan bernilai TRUE ✅✅
console.log(`logical AND:`, true && true); // output akan true
console.log(`logical AND:`, true && false); // output akan false
console.log(`logical AND:`, false && false); // output akan false
console.log(`logical AND:`, angka_A > 19 && angka_B < 19); // output akan true karena angka_A 20 > 19 dan angka_B 15 < 19
console.log(`logical AND:`, angka_A < 19 && angka_B < 19); // output akan false karena angka_A 20 > 19 bukan < 19 dan angka_B 15 < 19

// OR : selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log(`logical OR:`, true || true); // output akan true
console.log(`logical OR:`, true || false); // output akan true
console.log(`logical OR:`, false || true); // output akan true
console.log(`logical OR:`, false || false); // output akan false
console.log(`logical OR:`, angka_A >= 15 || angka_B <= 15); // output akan true
console.log(`logical OR:`, angka_A >= 15 || angka_B > 15); // output akan true

// NOT : membalik logika
console.log(`logical NOT:`, !true); // output akan false 
console.log(`logical NOT:`, !false); // output akan true

// Tipe data Truthy dan Falsy
// Truthy ✅ tipe data pada javascript yang diperiksa di boolean bernilai true, number > 0 atau < 0, string tidak kosong akan hasilkan truthly
console.log(Boolean(2)); // hasilnya true
console.log(Boolean(-2)); // hasilnya true
console.log(Boolean(`false`)); // hasilnya true
console.log(Boolean(` `)); // hasilnya true
console.log(Boolean(`ABCD`)); // hasilnya true
console.log(Boolean(true)); // hasilnya true
// empty array, empty object, empty argument in function

// Falsy ❌ : nilai pada tipe data yang bernilai false
console.log(Boolean(false)); // hasilnya false
console.log(Boolean(0)); // hasilnya false
console.log(Boolean(``)); // hasilnya false
console.log(Boolean(undefined)); // hasilnya false
console.log(Boolean(null)); // hasilnya false