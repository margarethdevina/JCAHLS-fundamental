// array of object
/**
 * biasanya database saat diekstrak menghasilkan data dlm bentuk array of object
 * digunakan untuk data json javascript object notation
 * 
 * fungsi yg sering digunakan
 * arrayObj.map()
 *      looping data sekaligus karena pengolahan untuk semua data biasanya sama
 *      return berupa array baru
 * arrayObj.filter()
 *      biasanya untuk mengolah sebagian data jadi setelah difilter ditambah .map()
 *      return berupa array baru yg terbentuk krn kondisi tertentu yg diset di dalam fungsi filter
 * arrayObj.findIndex()
 *      untuk mencari index data berdasarkan condisi
 *      return berupa number
 */
let dataProduct = [
    {
        name: `Jacket`,
        price: 25000,
        stock: [
            {
                type: `S`,
                qty: 5
            },
            {
                type: `M`,
                qty: 4
            },
            {
                type: `L`,
                qty: 3
            }
        ]
    },
    {
        name: `Shoes`,
        price: 30000,
        stock: [
            {
                type: `40`,
                qty: 2
            },
            {
                type: `39`,
                qty: 3
            },
            {
                type: `38`,
                qty: 2
            }
        ]
    },
    {
        name: `Hat`,
        price: 10000,
        stock: [
            {
                type: `S`,
                qty: 2
            },
            {
                type: `M`,
                qty: 3
            },
            {
                type: `L`,
                qty: 2
            }
        ]
    }
]

console.log(
    dataProduct.filter((value) => {
        return value.name == `Shoes`
    })
);

let dataIdx = dataProduct.findIndex((value) => {
    return value.name == `Shoes`
});

console.table(dataProduct);

dataProduct[dataIdx].name = `Slippers`

console.table(dataProduct);

let mobil = [`Tesla`, `Honda`, `Toyota`]
let motor = [`Kawasaki`, `Mio`, `Yamaha`]

// 1
// let kendaraan = mobil.concat(motor, [`KWM`,`Supercub`])

// 2
let kendaraan = [...mobil,...motor,...[`KWM`,`Supercub`]]
console.log(kendaraan)

let sepedaMotor = [...motor]
console.log(sepedaMotor)

sepedaMotor[1] = `MaungIndo`
console.log(sepedaMotor)
console.log(motor)

let dbA = {
    name: `Reno`,
    usia: 12,
    alamat: `BSD`
}

let dbB = {
    pekerjaan: `Coder`,
    gaji: 7500000
}

let dataDB = {...dbA,...dbB,status: `Inactive`}
console.table(dataDB)