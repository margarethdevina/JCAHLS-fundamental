let namaBuah = [`Semangka`, `Jeruk`, `Durian`, `Melon`, `Alpukat`];

let stock = [10, 15, 25, 12, 20];

let harga = [5000, 2500, 10000, 7000, 6500];

let kalimatBuah = ``;

for (let i = 0; i < namaBuah.length; i++) {
    kalimatBuah += `${i + 1}. Buah ${namaBuah[i]} stoknya ada ${stock[i]} dan harganya Rp.${harga[i]};\n`
}

console.log(kalimatBuah);

/**
 * dari banyak fungsi untuk variabel array, yg paling sering dipakai adalah:
 *  1. namaVariabelArray.length untuk mengetahui jumlah data di dalam suatu variabel array
 *  2. namaVariabelArray.push(dataBaru) untuk menambah data baru (dataBaru) di akhir array
 *  3. namaVariabel.splice(indexAwal, jumlahDataYangDihapus, dataBaru)
 *      splice itu multifungsi:
 *      a) menghapus
 *      b) menyisipkan
 *      c) mengganti
 */

// fungsi splice menghapus
// ingin menghapus jeruk dan durian

console.log(`sebelum dihapus si jeruk dan durian ==> ${namaBuah}`);
namaBuah.splice(1, 2);
console.log(`sesudah dihapus si jeruk dan durian ==> ${namaBuah}`);

// fungsi splice menyisipkan
// ingin tambah nangka dan anggur setelah melon

console.log(`sebelum sisipin si nangka dan anggur setelah melon ==> ${namaBuah}`);
namaBuah.splice(2, 0, `Nangka`, `Anggur`);
console.log(`sesudah sisipin si nangka dan anggur setelah melon ==> ${namaBuah}`);

// fungsi splice mengganti
// ganti anggur jadi pir

console.log(`sebelum ganti anggur jadi pir ==> ${namaBuah}`);
namaBuah.splice(3, 1, `Pir`);
console.log(`setelah ganti anggur jadi pir ==> ${namaBuah}`);

