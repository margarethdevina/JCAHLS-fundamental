//// Day 03 : Array Data Type ////

/**
 * 1. Definisi: sebuah tipe data penampung. Dikarenakan dapat menampung banyak data dan berbagai tipe data yang lain.
 *      setiap data pada array itu memiliki alamat index. Index pada array itu memiliki tipe data angka/number.
 * 2. Tujuan: mempermudah pengelolaan data. 
 * 3. Array bertipe object saat diperiksa pakai typeof
 *      a) kesamaan objek dan array sama2 sebagai penampung
 *      b) beda tipe objek dan array:
 *          - array index berupa number
 *          - objek index berupa properti atau string
 * 4. Array itu ditandai dengan braket kotak ==> [data1, data2, data3, ...]
 */

//// Syntax Array ////

let namaApel = `Apel`; // ❌
let namaJeruk = `Jeruk`; // ❌

// buah2an di mention satu2 dan mengakibatkan banyak pembuatan variabel
//  jadi mending ditampung jadi 1 pakai array

//// cara buat array ////
let namaBuah = [`Apel`, `Jeruk`, `Durian`, `Melon`]; // Cara 1 ✅ ==> paling umum dipakai

let stock = Array(10, 15, 25, 12); // Cara 2 ✅ menggunakan fungsi dari javascript

let harga = []; // cara 3 ✅ mendeklarasi variabel harga adalah tipe data array.
// untuk buat isi dari harga:
harga[0] = 5000;
harga[1] = 2500;
harga[2] = 10000;
harga[3] = 7000;

// real case nya isi array itu data bertipe sejenis ==> string semua atau number semua namun
//  array tetap bisa menampung data dengan tipe berbeda

// setiap data di dalam array punya index number yang pasti dimulai dari 0
/**
 * Jadi variabel namaBuah punya index:
 *  Apel ==> index 0
 *  Jeruk ==> index 1
 *  Durian ==> index 2
 *  Melon ==> index 3
 * 
 * Banyak data pada variabel namaBuah adalah 4
 */

// Cara mengakses data pada array ==> namaVariabel[index]

// misal mau ambil durian
console.log(namaBuah[2]);

// misal mau ambil jeruk
console.log(namaBuah[1]);

// cuma string yg bisa diubah jd array karena string merupakan kumpulan karakter
let toko = `Toko Buah Manis`;

console.log(toko.split(``)); // hasilnya memecah per karakter

console.log(toko.split(` `)); // hasilnya memecah per kata

// misal mau ambil nama buah, stok, dan harga
console.log(`Nama buah: ${namaBuah[1]}`);
console.log(`Stok buah: ${stock[1]}`);
console.log(`Harga buah: ${harga[1]}`);
console.log(`buah ${namaBuah[0]} stoknya ada ${stock[0]} dengan harga Rp${harga[0]} per buah`);

//// intermezzo bahas split kemarin ////
let polin = `Malam`;
let arrPolin = polin.split(``); // mengubah string menjadi array
console.log(arrPolin);
// console.log(arrPolin.reverse()); // membalik urutan data array
polin = arrPolin.reverse().join(``); // habis dibalik, di gabung semua array supaya jd string
console.log(polin);
//// ---- ////

//// Merubah value dari salah satu data pada array //// ==> gunakan reassign ❗❗❗
// misal mau ubah si apel menjadi semangka
//  reassign namaBuah[0] yang tadinya apel jadi semangka
namaBuah[0] = `Semangka`;

console.log(namaBuah);
console.table(namaBuah); // bisa ngeprint data array jadi tabel tapi fungsi .table cuma bisa di data array

//// quick question ////
/**
 * buat print out:
 *  1. Buah semangka stoknya ada 10 dan harganya Rp. 5000;
 *  2. Buah jeruk stoknya ada 15 dan harganya Rp. 2500;
 *  3. Buah durian stoknya ada 25 dan harganya Rp. 10000;
 *  4. Buah melon stoknya ada 12 dan harganya Rp. 7000;
 * 
 * buat pakai loop tanpa console.log di dalam looping hanya boleh 1x console.log di akhir sebagai output
 */

//// cara 1 -- ga efektif ////
let gabung = [];
let gabung2 = ``;

for (let i = 0; i < 4; i++) {
    gabung = [i + 1, namaBuah[i], stock[i], harga[i]];
    gabung2 += `${gabung[0]} Buah ${gabung[1]} stoknya ada ${gabung[2]} dan harganya Rp. ${gabung[3]};\n`;
}

console.log(gabung2);

//// cara 2 --- efektif ////

let listBuah = ``;

for (let j = 0; j < namaBuah.length; j++) {
    listBuah += `${j + 1} Buah ${namaBuah[j]} stoknya ada ${stock[j]} dan harganya Rp. ${harga[j]};\n`
}

console.log(listBuah)

//// ARRAY FUNCTION ////

/**
 * 1️⃣ namaVariabelArray.length: untuk mengetahui jumlah data yang ada didalam array
 *      output dari length adalah number integer
 */

console.log(`banyak data array namaBuah = ${namaBuah.length}`);
console.log(`value terakhir array namaBuah = ${namaBuah[namaBuah.length - 1]}`);

/**
 * 2️⃣ namaVariabelArray.push(data): untuk menambah data baru di akhir array
 *      cukup sering digunakan karena bertujuan untuk menambahkan data
 */

namaBuah.push(`Alpukat`);
stock.push(20);
harga.push(6500);
console.table(namaBuah);
console.table(stock);
console.table(harga);

/**
 * 3️⃣ namaVariabelArray.pop() : digunakan untuk menghapus data terakhir dari array
 */

namaBuah.pop();
stock.pop();
harga.pop();

console.table(namaBuah);

/**
 * 4️⃣ namaVariabelArray.unshift(data) : digunakan untuk menambah data baru di awal array
 */

namaBuah.unshift(`Nangka`);
stock.unshift(10);
harga.unshift(2500);

/**
 * 5️⃣ namaVariabelArray.shift() : untuk menghapus data pertama
 */

namaBuah.shift();
stock.shift();
harga.shift();

/**
 * 6️⃣ namaVariabelArray.reverse() : untuk membalik urutan data array
 */

let motor = [`yamaha`, `honda`, `triumph`, `ducati`];
console.log(`sebelum di reverse: ${motor}`);
motor.reverse();
console.log(`sesudah di reverse: ${motor}`);

/**
 * 7️⃣ namaVariabelArray.join(`separator`) : menggabungkan semua data array menjadi data string
 *      separator = pemisah antar datanya apa misal empty string `` atau spasi ` `
 */

console.log(motor.join()); // hasilnya ducati,triumph,honda,yamaha
console.log(motor.join(` `)); // hasilnya ducati triumph honda yamaha
console.log(motor.join(` / `)); // hasilnya ducati / triumph / honda / yamaha

/**
 * 8️⃣ namaVariabelArray.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : untuk menghapus data array pada index tertentu
 */
// Fungsi 1. menghapus data array pada index tertentu ==> paling sering dipakai

let mobil = [`daihatsu`, `toyota`, `lexus`, `bmw`];

console.log(`❌sebelum dihapus: ${mobil}`);
mobil.splice(2, 1); // untuk hapus data lexus
console.log(`✅sesudah dihapus: ${mobil}`);

// Fungsi 2. menyisipkan data baru
console.log(`❌sebelum disisipkan: ${mobil}`);
mobil.splice(2, 0, `lexus`, `mazda`, `wuling`); // sisipkan setelah toyota, tengah pakai 0 karena splice kali ini bukan untuk menghapus
console.log(`✅sesudah disisipkan: ${mobil}`);

// Fungsi 3. mengganti data
console.log(`❌sebelum diganti: ${mobil}`);
mobil.splice(1, 1, `ferrari`); // mau ganti toyota dengan ferrari
console.log(`✅sesudah diganti: ${mobil}`);

/**
 * 9️⃣ namaVariabelArray.slice(startIndex, endIndex) : untuk mensubset beberapa data
 *      endIndex yg ditaruh ada setelah index yang diinginkan untuk ikut di subset
 */
// misal butuh ferrari hingga mazda berarti data index 1,2,3 jadi endIndex = 4
console.log(mobil.slice(1, 4)); //

/**
 * 🔟 namaVariabelArray.includes(`data`) : untuk memastikan data ada atau tidak di dalam array tsb
 */
console.log(mobil.includes(`lexus`)); // hasilnya true
console.log(mobil.includes(`isuzu`)); // hasilnya false

/**
 * 1️⃣1️⃣ namaVariabelArray.indexOf() : mencari alamat index karena kita tahu datanya tapi ga tahu index ke berapa
 */
console.log(mobil.indexOf(`bmw`)); // hasilnya 5
console.log(mobil.indexOf(`isuzu`)); // hasilnya -1 karena datanya tidak ditemukan

// misal di dlm variabelArray ada duplikasi data
//  index apa yg muncul sama data berduplikasi tsb di .indexOf() kan?
let nama = [`Budi`, `Edo`, `Budi`];
console.log(nama.indexOf(`Budi`)); // hasilnya akan tunjukkan index pertama yang menemukan string yang dicari, berarti 0

/**
 * //// IMPORTANT //// ==> paling sering digunakan length untuk hitung banyak data,
 *      push untuk tambah data di akhir array, splice untuk menghapus
 */

//// quick question --- cek day03.html////
/**
     * buat aplikasi untuk data barang:
     * 1. lihat data dulu
     * 2. tambah data dulu
     * 3. hapus data berdasarkan nomor urut
     * 4. edit data ==> pilih data nomor berapa, edit data lalu di reassign
     */
