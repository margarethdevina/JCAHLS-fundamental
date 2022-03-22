/**
 * fungsi foreach untuk menghitung total data harga dr database
 */

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

// cara 1 pakai .forEach ✅
// const total = () => {
//     let hasil = 0;
//     database.forEach((value, index) => {
//         hasil += value.price
//     })
//     return hasil
// };
// console.log(`${database[0].price} + ${database[1].price} = ${total()}`);

// cara 2 pakai .forEach ✅
let totalCaraKedua = 0;
let temp = [];
database.forEach((value, index) => {
    temp.push(value.price)
    totalCaraKedua += value.price
})
console.log(`${temp.join(` + `)} = ${totalCaraKedua}`);


// 2️⃣ buatkan total harga menggunakan fungsi yg menduplikasi dari fungsi forEach
/**
 * structure:
 * const duplicateForEach = (cbfn,array) => {};
 * 
 * duplicateForEach((value,index) => {}, database)
 * 
 */

const duplicateForEach = (cbfn, array) => { // array = database
    for (i = 0; i < array.length; i++) { // jangan diapply const sebelum i, pakai var atau let aja
        cbfn(array[i], i) // array[i] = value buat pas callback di bawah, i = index nya buat pas callback di bawah
    }
};

let total = 0; // penampung karena forEach atau duplicateForEach ga bisa return langsung hasilnya (bukan .map)
duplicateForEach((value, index) => {
    total += value.price
}, database) // si array

console.log(total);

// ❗❗❗ buatkan list barang menggunakan fungsi duplicateForEach()

// cara 1 untuk apply fungsi duplicateForEach() ke barang2 di database ✅ yang ini aja karena lebih simpel
let list = ``;
duplicateForEach((value, index) => {
    list += `${index + 1}. ${value.name}\n`
}, database)

console.log(list);

// cara 2 untuk apply fungsi duplicateForEach() ke barang2 di database ✅
// let list = [];
// duplicateForEach((value, index) => {
//     list.push(`${index + 1}. ${value.name}`)
// }, database)

// console.log(list.join(`\n`));

// 3️⃣ buatkan list barang menggunakan duplikasi dari fungsi .map()

const duplicateMap = (cbfn, array) => {
    let hasil = [];
    for (i = 0; i < array.length; i++) {
        console.log(i, cbfn(array[i], i)) // untuk lihat sementara hasil cbfn
        hasil.push(cbfn(array[i], i))
    };
    console.log(`temporary array / si hasil`, hasil) // untuk lihat sementara hasil kumpulan array yg ditampung setelah looping
    return hasil;// inget .map() hasilnya array jadi butuh return untuk simpen hasil array saat fungsi dijalankan
};

console.log(
    duplicateMap((value, index) => {
        return `${index + 1}. ${value.name}` // return di saat membuat duplicateMap itu hanya menyimpan si hasil sementara untuk ngeprint hasil callback function butuh direturn lagi
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
    let hasil = []; // ada array penampung krn fungsi filter defaultnya mereturn array berisi data2 yg sesuai kondisi callback function
    for (i = 0; i < array.length; i++) {
        if (cbfn(array[i], i)) { // jika data2 memenuhi kondisi callback function maka ...
            hasil.push(array[i]) // maka data2 tsb ditampung di wadah penampung yg diset sebelum for loop statement
        }
    };
    return hasil; // array penampung yg berisi seluruh data2 hasil loop diprint (tapi masih kasat mata karena ini print result dalam function yang belum diisi kondisi & database, saat callback perlu diprint lagi untuk benar2 lihat hasil)
};

console.log(
    duplicateFilter((value, index) => {
        // hasilkan array berisi objek yg pricenya > 50000
        return value.price > 50000 // return untuk print array hasil fungsi filter
    }, database)
);

console.log(
    duplicateFilter((value, index) => {
        // hasilkan array berisi objek yg namanya Dasi
        return value.name == `Dasi`
    }, database)
);

//// ❗❗❗ OBJECT FUNCTION ❗❗❗ //// 
let student = {
    nama: `Edo Renaldo`,
    usia: 20,
    kelas: `IPA`
}

// Object.keys(student); // memanggil nama properties aja dalam bentu array => [`nama`,`usia`,`kelas`]
console.log(Object.keys(student)); // memanggil nama properties aja dalam bentuk array => [`nama`,`usia`,`kelas`]

// 5️⃣ buat duplikasi fungsi Object.keys() (lihat materi day05.js untuk referensi memanggil properti pakai loop)

const duplicateGetKeys = (obj) => {
    let temp = [];
    for (let property in obj) {
        temp.push(property)
        // ATAU:
        // for (i in obj) {
        // temp.push(i)
    }
    return temp
};
console.log(duplicateGetKeys(student)); // outputnya [`nama`,`usia`,`kelas`]

// ❗❗❗ buat fungsi untuk ambil value dari tiap propertinya 

const duplicateGetValue = (obj) => {
    let temp = [];
    for (let property in obj) {
        temp.push(obj[property]) // obj[property] untuk mengambil value berdasarkan perubahan properti yg sedang diproses
        // ATAU:
        // for (i in obj) {
        // temp.push(obj[i])

    }
    return temp
};
console.log(duplicateGetValue(student)); // outputnya [`Edo Renaldo`,20,`IPA`]

// ❗❗❗ buat fungsi untuk membuat array dalam array seperti ini [[`nama`, `Edo Renaldo`], [`usia`,20], [`kelas`,`IPA`]]

const duplicateGetEntries = (obj) => {
    let temp = [];
    for (let property in obj) {
        temp.push([property, obj[property]])
        // ATAU:
        // for (i in obj) {
        // temp.push([i,obj[i]])
    }
    return temp
};

console.log(duplicateGetEntries(student)); // outputnya [[`nama`, `Edo Renaldo`], [`usia`,20], [`kelas`,`IPA`]]