/**
 * shape # di looping 5x5 ❗❗1️⃣
 * # # # # #
 * # # # # #
 * # # # # #
 * # # # # #
 * # # # # #
 */

// let simbol = `# # # # #`;

// for (i = 0; i < 5; i++) {
// console.log(simbol)
// }

// console.log(`-----`)

var symc = ``; // menampung string❗❗1️⃣

for (let i = 1; i <= 5; i++) { // untuk generate baris sampai baris 5
    for (let j = 1; j <= 5; j++) { // untuk generate kolom sampai kolom 5
        symc += `# ` // `` + `# `
    }
    if (i < 5) { // untuk memotong/mengenter gabungan string hasil loop diatas 
        symc += `\n`
    }
}

// j = 1 => # # # # # 
/**
 * i = 1
 * symc = # # # # # \n
 * i = 2
 * symc = # # # # # \n # # # # # \n
 */
// console.log(symc)

/**❗❗2️⃣
 * 1 0 0 0 0
 * 0 2 0 0 0
 * 0 0 3 0 0
 * 0 0 0 4 0
 * 0 0 0 0 5
 */

let diagonal = ``; //❗❗2️⃣

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == j) { // karena persegi, saat baris dan kolom berindex sama berarti variabel diagonal berisi nomor index
            diagonal += `${i}`
        } else {
            diagonal += `0`
        }
    }
    if (i < 5) {
        diagonal += `\n`
    }
}

// console.log(diagonal)

/** ❗❗3️⃣
 * #
 * ##
 * ###
 * ####
 * #####
 */

let simbol = ``; // ❗❗3️⃣

// ❗❗3️⃣
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i > j - 1) { 
//             // saat (baris > kolom - 1), berarti baris 1 kolom 1 akan diisi # karena (baris = 1 > kolom = 1-1 = 0 ) ...
//             // ... baris 1 kolom 2 akan tidak diisi karena (baris = 1, kolom = 2-1 = 1) berarti (baris = 1 == kolom = 1) ...
//             // ... baris 2 kolom 2 akan diisi # karena (baris = 2, kolom = 2-1 = 1) dan sebelumnya simbol sudah simpan `#` jadi saat #+# maka ## ...
//             // ... di baris 2 kolom 3 tidak diisi karena (baris = 2, kolom = 3-1 = 2), seterusnya sampai batas loop
//             simbol += `# `
//         } else {
//             simbol += ``
//         }
//     }
//     if (i < 5) {
//         simbol += `\n`
//     }
// }

// console.log(simbol)

// ❗❗ UNTUK PRACTICE03.HTML PERSEGI
// *#*#*
// #####
// *#*#*
// #####
// *#*#*
// for (let i = 1; i <= 5; i++) { 
//     for (let j = 1; j <= 5; j++) {
//         if (i % 2 != 0) { // saat baris tidak genap akan diisi simbol #*
//             if (j % 2 == 0) { // saat kolom genap akan diisi #
//                 simbol += `#`
//             } else { // saat kolom ganjil akan diisi *
//                 simbol += `*`
//             }
//         } else { // saat baris genap akan diisi simbol # semua
//             simbol += `#`
//         }
//     }
//     if (i < 5) {
//         simbol += `\n`
//     }
// }
// console.log(simbol)

// ❗❗ UNTUK PRACTICE03.HTML SEGITIGA
// *
// ##
// *#*
// ####
// *#*#*
// menggunakan prinsip sama dengan persegi tinggal tambah if statement untuk hapus data di index kolom yang tidak lebih kecil dari index baris
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i > j - 1) { // saat index kolom lebih kecil dari index baris baru index kolom tsb akan diisi simbol
//             if (i % 2 != 0) {
//                 if (j % 2 == 0) {
//                     simbol += `#`
//                 } else {
//                     simbol += `*`
//                 }
//             } else {
//                 simbol += `#`
//             }
//         } else { // saat index kolom lebih besar dari atau sama dengan index baris, kolom tsb tidak diisi apa2 (empty string)
//             simbol += ``
//         }
//     }
//     if (i < 5) {
//         simbol += `\n`
//     }
// }

// console.log(simbol)

/**
 * dbProduct array of object
 * isi tiap object
 * idproduct
 * name
 * stock
 * price
 * 
 * beli
 * iduser
 * user
 * keranjang
 * 
 * buat fungsi untuk dapat report penjualan
 * gunakan looping statement bukan .map, .filter, .forEach
 */

// Data Product dan Pembeli
let db = [
    {
        idproduct: 1,
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        idproduct: 2,
        name: "Sepatu",
        stock: 10,
        price: 80000
    }
];

let beli = [
    {
        iduser: 1,
        user: "budi",
        keranjang: [
            {
                idproduct: 2,
                qty: 2,
                subtotal: 160000
            },
            {
                idproduct: 1,
                qty: 2,
                subtotal: 150000
            },
        ]
    },
    {
        iduser: 2,
        user: "Edo",
        keranjang: [
            {
                idproduct: 1,
                qty: 1,
                subtotal: 75000
            },
        ]
    },
    {
        iduser: 3,
        user: "Edi",
        keranjang: [
            {
                idproduct: 2,
                qty: 5,
                subtotal: 400000
            },
        ]
    }
]

// beli = cart
// let keranjangOnly = [];
// for (i = 0; i < beli.length; i++) {
//     for (j = 0; j < beli[i].keranjang.length; j++) {
//         keranjangOnly.push(beli[i].keranjang[j])
//     }
// }
// console.log(keranjangOnly)
// console.log(db)

// let qtyProduct1 = 0;
// let qtyProduct2 = 0;
// for (i = 0; i < keranjangOnly.length; i++) {
//     if (keranjangOnly[i].idproduct == 1) {
//         qtyProduct1 += keranjangOnly[i].qty
//     } else if (keranjangOnly[i].idproduct == 2) {
//         qtyProduct2 += keranjangOnly[i].qty
//     }
// }
// console.log(qtyProduct1)
// console.log(qtyProduct2)

// class Report {
//     constructor(_idproduct, _productName, _stock, _price, _salesQty, _omset, _totalStock) {
//         this.idproduct = _idproduct;
//         this.productName = _productName;
//         this.stock = _stock;
//         this.price = _price;
//         this.salesQty = _salesQty;
//         this.omset = _omset;
//         this.totalStock = _totalStock;
//     }
// }

// let report = [];

// for (i = 0; i < db.length; i++) {
//     let idproduct = 0
//     let productName = ``
//     let stock = 0
//     let price = 0
//     let omset = 0
//     let totalStock = 0
//     if (db[i].idproduct == 1) {
//         idproduct = db[i].idproduct
//         productName = db[i].name
//         price = db[i].price
//         qtyProduct1
//         omset = qtyProduct1 * price
//         totalStock = db[i].stock
//         stock = totalStock - qtyProduct1
//         report.push(new Report(idproduct, productName, stock, price, qtyProduct1, omset, totalStock))
//     } else if (db[i].idproduct == 2) {
//         idproduct = db[i].idproduct
//         productName = db[i].name
//         price = db[i].price
//         qtyProduct2
//         omset = qtyProduct2 * price
//         totalStock = db[i].stock
//         stock = totalStock - qtyProduct2
//         report.push(new Report(idproduct, productName, stock, price, qtyProduct2, omset, totalStock))
//     }
// }

// console.log(report)

const getInfo = (database, cart) => {
    let keranjangOnly = [];
    for (i = 0; i < cart.length; i++) {
        for (j = 0; j < cart[i].keranjang.length; j++) {
            keranjangOnly.push(cart[i].keranjang[j])
        }
    }

    let qtyProduct1 = 0;
    let qtyProduct2 = 0;
    for (i = 0; i < keranjangOnly.length; i++) {
        if (keranjangOnly[i].idproduct == 1) {
            qtyProduct1 += keranjangOnly[i].qty
        } else if (keranjangOnly[i].idproduct == 2) {
            qtyProduct2 += keranjangOnly[i].qty
        }
    }

    class Report {
        constructor(_idproduct, _productName, _stock, _price, _salesQty, _omset, _totalStock) {
            this.idproduct = _idproduct;
            this.productName = _productName;
            this.stock = _stock;
            this.price = _price;
            this.salesQty = _salesQty;
            this.omset = _omset;
            this.totalStock = _totalStock;
        }
    }

    let report = [];

    for (i = 0; i < database.length; i++) {
        let idproduct = database[i].idproduct
        let productName = database[i].name
        let stock = 0
        let price = database[i].price
        let omset = 0
        let totalStock = database[i].stock
        if (database[i].idproduct == 1) {
            omset = qtyProduct1 * price
            stock = totalStock - qtyProduct1
            report.push(new Report(idproduct, productName, stock, price, qtyProduct1, omset, totalStock))
        } else if (database[i].idproduct == 2) {
            omset = qtyProduct2 * price
            stock = totalStock - qtyProduct2
            report.push(new Report(idproduct, productName, stock, price, qtyProduct2, omset, totalStock))
        }
    }
    return report
}

console.log(getInfo(db, beli))