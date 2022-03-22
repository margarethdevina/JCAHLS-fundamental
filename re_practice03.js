/**
 * dari 1 simbol #
 * gunakan looping untuk membuat persegi dgn simbol 5 x 5
 */

let simbol = ``

// saat simbol2 # belum ditambah \n
// simbol # dibuat 25 kali ke kanan
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         simbol += `# `
//     }
// }

// for (i=1; i<=5; i++) {
//     for (j=1; j<=5; j++){
//         simbol += `# `
//     }
//     if (i<5){ // untuk tambah \n setelah 5 simbol dibuat
//         simbol += `\n`
//     }
// };

// console.log(simbol);

/**
 * 1 0 0 0 0
 * 0 2 0 0 0
 * 0 0 3 0 0
 * 0 0 0 4 0
 * 0 0 0 0 5
 */

let numb = ``;

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
        if (i == j) {
            numb += `${i}`
        } else {
            numb += `0`
        }
    }
    if (i < 5) {
        numb += `\n`
    }
}

// console.log(numb)

/**
 * #
 * ##
 * ###
 * ####
 * #####
 */

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
        if (i > j - 1) {
            simbol += `# `
        } else {
            simbol += ``
        }
    }
    if (i < 5) {
        simbol += `\n`
    }
}

// console.log(simbol);

let hasil = ``;
// persegi 5x5
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         if (i % 2 != 0) {
//             if (j % 2 == 0) {
//                 hasil += `#`
//             }
//             else {
//                 hasil += `*`
//             }
//         }
//         else {
//             hasil += `#`
//         }
//     }
//     if (i < 5) {
//         hasil += `\n`
//     }
// };

// console.log(hasil);

// segitiga 5x5
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         if (i > j - 1) {
//             if (i % 2 != 0) {
//                 if (j % 2 == 0) {
//                     hasil += `#`
//                 }
//                 else {
//                     hasil += `*`
//                 }
//             }
//             else {
//                 hasil += `#`
//             }
//         } else {
//             hasil += ``
//         }

//     }
//     if (i < 5) {
//         hasil += `\n`
//     }
// };

// console.log(hasil);

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

// console.log(beli)

// let keranjangOnly = [];
// for (i = 0; i < beli.length; i++) {
//     for (j = 0; j < beli[i].keranjang.length; j++) {
//         keranjangOnly.push(beli[i].keranjang[j])
//     }
// }
// // console.log(keranjangOnly)

// let qtyProduct1 = 0;
// let qtyProduct2 = 0;
// for (i = 0; i < keranjangOnly.length; i++) {
//     if (keranjangOnly[i].idproduct == 1) {
//         qtyProduct1 += keranjangOnly[i].qty
//     } else if (keranjangOnly[i].idproduct == 2) {
//         qtyProduct2 += keranjangOnly[i].qty
//     }
// }

// // console.log(qtyProduct1);
// // console.log(qtyProduct2);

// let report = [];

// for (i = 0; i < db.length; i++) {
//     const isiReport = (_salesQty) => {
//         return [{
//             idproduct: db[i].idproduct,
//             name: db[i].name,
//             stock: db[i].stock - _salesQty,
//             price: db[i].price,
//             salesQty: _salesQty,
//             omset: db[i].price * _salesQty,
//             totalStock: db[i].stock
//         }]
//     }

//     if (db[i].idproduct == 1) {
//         report = [...report, ...isiReport(qtyProduct1)]
//     } else if (db[i].idproduct == 2) {
//         report = [... report, ...isiReport(qtyProduct2)]
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

    let report = [];

    for (i = 0; i < database.length; i++) {
        const isiReport = (_salesQty) => {
            return [{
                idproduct: database[i].idproduct,
                name: database[i].name,
                stock: database[i].stock - _salesQty,
                price: database[i].price,
                salesQty: _salesQty,
                omset: database[i].price * _salesQty,
                totalStock: database[i].stock
            }]
        }

        if (database[i].idproduct == 1) {
            report = [...report, ...isiReport(qtyProduct1)]
        } else if (database[i].idproduct == 2) {
            report = [...report, ...isiReport(qtyProduct2)]
        }
    }
    return report
}

console.log(getInfo(db, beli))

let random = ``;
for (i = 1; i <= 6; i++) {
    random += `${Math.floor(Math.random() * 10)}`
}

console.log(random)