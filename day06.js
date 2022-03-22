//// ARRAY OF OBJECT ////
/**
 * 1. Merupakan struktur tipe data diperuntukkan untuk output database
 *      Saat data diambil dr database management system seperti mysql akan menghasilkan array of object
 * 2. Digunakan untuk data JSON (Javascript Object Notation) merupakan struktur data dengan tipe data utama objek dan dipergunakan jg
 *      sebagai media penyimpanan data
 * 3. Struktur penulisan:
 *      let arrObj = [
 *          {
 *              id: 1, 
 *              name: `Jaket`,
 *              stock: [
 *                      {
 *                          type: `Red`,
 *                          qty:20
 *                      }
 *              ] 
 *          },
 *          {
 *          }
 *      ];
 */
//// Fungsi yang sering digunakan ////
/**
 * 1️⃣ Array.map() => ditujukan untuk mengolah data array of object sekaligus
 *      butuh diolah sekaligus karena data di database pada saat ditarik berjumlah banyak
 *      dan pengolahannya biasanya sama aja untuk semua data makannya pakai .map()
 *      misalnya diperuntukan untuk membuat struktur tampilan
 *      Output berupa array baru❗
 * 
 * 2️⃣ Array.filter() => output berupa array baru sesuai kondisi yang diapply
 *      biasanya setelah apply .filter() ditambah dengan fungsi .map() => cari data sesuai kondisi dulu baru diproses
 *      Output berupa array baru❗
 * 
 * 3️⃣ Array.findIndex() => untuk cari alamat index dari data yang sesuai kondisi yang diset di dalam fungsi .findIndex()
 *      biasanya dilakukan untuk mengedit data tapi letak datanya yang mau diganti ga tau ada di mana
 *      Output berupa number❗
 */

let dataProduct = [
    {
        name: `Jacket`,
        price: 85000,
        stock: [
            {
                type: `M`,
                qty: 8
            },
            {
                type: `L`,
                qty: 12
            },
            {
                type: `XL`,
                qty: 15
            }
        ]
    },
    {
        name: `Shoes`,
        price: 70000,
        stock: [
            {
                type: `40`,
                qty: 10
            },
            {
                type: `41`,
                qty: 5
            },
            {
                type: `42`,
                qty: 3
            }
        ]
    },
    {
        name: `Hat`,
        price: 35000,
        stock: [
            {
                type: `S`,
                qty: 10
            },
            {
                type: `M`,
                qty: 5
            },
            {
                type: `L`,
                qty: 3
            }
        ]
    }
]
console.table(dataProduct);

let searchData = dataProduct.filter((value) => { // saat pakai filter akan hasilkan array baru sehingga index jg start dr 0
    // parameter untuk fungsi map dan filter bisa cukup satu aja yaitu value
    return value.name == `Hat`
})
console.table(searchData);

/**
 * database adalah data permanen
 * hasil filter akan menghasilkan data temporary baru
 * kalau kita akan ubah data hat harus ubah data dari sumber data yang asli bukan dr data temporer
 * filter itu pure cuma untuk mencari tahu aja bukan untuk menjadi patokan mengubah data
 */

let dataIdx = dataProduct.findIndex(value => { // saat parameter cuma satu bisa dibuat tanpa bracket ()
    return value.name == `Hat`
})
console.table(dataIdx);

dataProduct[dataIdx].name = `Topi`; // ubah isi value.name dari hat jadi topi
console.table(dataProduct);

//// KONSEP CONCATINATION ////
/**
 * Digunakan untuk penggabungan data atau menduplikasi data
 * Cuma berlaku untuk data tipe array dan objek.
 */
let mobil = [`Tesla`, `Ferrari`, `Lamorgini`];
let motor = [`Honda`, `Yamaha`, `Kawasaki`];
// let kendaraan = mobil.concat(motor,[`KTM`,`Wuling`]); // CARA 1 Memakai fungsi bawaan dari javascript

// CARA 2 spread? operator untuk concat array atau object sehingga perlu bracket untuk identify datanya tipe apa
let kendaraan = [...mobil, ...motor, `Harley`];

//❗❗ Spread untuk duplikasi data? how? ❗❗//
// let sepedaMotor = motor;
// console.log(sepedaMotor);
// console.log(motor);

// sepedaMotor[0] = `SUZUKI`;
// console.log(sepedaMotor);
// console.log(motor); // database motor ikut berubah krn sepedaMotor = motor (memanggil variabel motor didalam variabel sepedaMotor)

let sepedaMotor = [...motor];
console.log(sepedaMotor);
console.log(motor);

sepedaMotor[0] = `SUZUKI`;
console.log(sepedaMotor);
console.log(motor); // database motor tidak ikut berubah krn sepedaMotor menduplikasi motor

// duplikasi ini sering dilakukan supaya developer tidak mengubah langsung data dari database

let dbA = {
    name: `Reno`,
    usia: 12,
    alamat: `BSD`
}

let dbB = {
    pekerjaan: `Coder`,
    gaji: 7500000
}

// let dataDB = {...dbA, ...dbB, status: `Aktif`}; 
let dataDB = {...dbA, ...dbB, alamat:`Sudirman Tamrin`, status: `Aktif`}; // ingat saat tambah properti jangan menambah properti yg sama karena value dr properti lama akan ditimpa oleh value properti yg baru
    // otomatis metode ini sama dengan reassign/mengupdate properti alamat di suatu objek
console.log(dataDB);

/**
 * situs untuk latihan fundamental:
 * codewars.com
 *  paling mudah 8kyu
 *  paling sulit 1kyu
 * hackerrank.com (indo biasanya tes masuk dr sini, testgorilla dan codily)
 *  biasanya untuk rekrutment jg
 * testgorilla.com
 */

/**
 * buat aplikasi e-commerce
 * ga berbeda dengan aplikasi tambah kurang kali
 * selamat datang di tokoku
 * 1. tambah produk
 * 2. beli produk
 * 3. cek stok
 * 
 * silahkan pilih barang:
 * 1. jaket, stok xx, harga 25000
 * 
 * 
 */