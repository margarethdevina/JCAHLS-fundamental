let database = [
    {
        name: 'Hoodie',
        stock: 12,
        price: 75000
    },
    {
        name: 'Sepatu',
        stock: 10,
        price: 80000
    },
    {
        name: 'Dasi',
        stock: 12,
        price: 75000
    },
    {
        name: 'Tas',
        stock: 10,
        price: 25000
    }
]

// 1️⃣ tugas menghitung total harga menggunakan forEach
/**
 * fungsi foreach untuk menghitung total data harga dr database
 */

// let total = 0;
// let tempArr = [];
// database.forEach((value, index) => {
//     tempArr.push(value.price)
//     total += value.price
// });
// console.log(`${tempArr.join(` + `)} = ${total}`);

// 2️⃣ buatkan total harga menggunakan fungsi yg menduplikasi dari fungsi forEach
/**
 * structure:
 * const duplicateForEach = (cbfn,array) => {};
 * 
 * duplicateForEach((value,index) => {}, database)
 * 
 */

const duplicateForEach = (cbfn, array) => {
    for (i = 0; i < array.length; i++) {
        cbfn(array[i], i);
    };
};

let total = 0;
duplicateForEach((value, index) => {
    total += value.price
}, database);
console.log(total);

// ❗❗❗ buatkan list barang menggunakan fungsi duplicateForEach()

// cara 1 untuk apply fungsi duplicateForEach() ke barang2 di database ✅ yang ini aja karena lebih simpel

let list = ``;
duplicateForEach((value, index) => {
    list += `${index + 1}. ${value.name}\n`
}, database);
console.log(list);

// 3️⃣ buatkan list barang menggunakan duplikasi dari fungsi .map()

const duplicateMap = (cbfn, array) => {
    let temp = [];
    for (i = 0; i < array.length; i++) {
        temp.push(cbfn(array[i], i));
    };
    return temp
};

console.log(
    duplicateMap((value, index) => {
        return `${index + 1}. ${value.name}`
    }, database).join(`\n`)
);

// 4️⃣ list filter barang menggunakan duplikasi fungsi filter (lihat materi day04.js)
/**
 * inget returnnya kondisi
 * 
 * filter berdasarkan kondisi harga barang di atas 50000
 * yg muncul produk dengan harga sesuai kondisi dalam bentuk array
 * 
 * untuk tes lagi filter berdasarkan spesifik nama barang tertentu
 */

const duplicateFilter = (cbfn, array) => {
    let temp = [];
    for (i = 0; i < array.length; i++) {
        if (cbfn(array[i], i)) {
            temp.push(array[i]);
        }
    };
    return temp
};

console.log(
    duplicateFilter((value, index) => {
        return value.price > 50000
    }, database)
);

console.log(
    duplicateFilter((value, index) => {
        return value.name == `Dasi`
    }, database)
);

//// ❗❗❗ OBJECT FUNCTION ❗❗❗ //// 
let student = {
    nama: `Edo Renaldo`,
    usia: 20,
    kelas: `IPA`
}
console.log(Object.keys(student)); // memanggil nama properties aja dalam bentuk array => [`nama`,`usia`,`kelas`]

// 5️⃣ buat duplikasi fungsi Object.keys() (lihat materi day05.js untuk referensi memanggil properti pakai loop)

const duplicateGetKeys = (obj) => {
    let temp = [];
    for (let property in obj){
        temp.push(property);
    }
    return temp
};

console.log(
    duplicateGetKeys(student)
);

// ❗❗❗ buat fungsi untuk ambil value dari tiap propertinya

const duplicateGetValue = (obj) => {
    let temp = [];
    for (let property in obj){
        temp.push(obj[property]);
    }
    return temp
};

console.log(
    duplicateGetValue(student)
);

// ❗❗❗ buat fungsi untuk membuat array dalam array seperti ini [[`nama`, `Edo Renaldo`], [`usia`,20], [`kelas`,`IPA`]]

const duplicateGetEntries = (obj) => {
    let temp = [];
    for (let property in obj){
        temp.push([property,obj[property]]);
    }
    return temp
};

console.log(
    duplicateGetEntries(student)
);