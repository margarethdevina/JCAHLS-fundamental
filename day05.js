//// TIPE DATA OBJECT ////
/**
 * Object: data penampung seperti array, tetapi tidak harus berurutan
 *  Alamat index menggunakan properti.
 * 
 * Array => penampung data yg berdasarkan alamat index (number)
 * Object => penampung data yg berdasarkan alamat nama property (atau string)
 *  
 * let variabelArray = [data1, data2, data3];
 *      tipe data bisa sama atau beda, di real case lazimnya sama semua.
 * 
 * let variabelObject = {
 *      namaProperty1: data,
 *      namaProperty2: data,
 * }
 *      tipe data di dalam 1 object bervariasi
 * 
 * Misal:
 * let variabelObject = {
 *      namaProduct: `Sepatu Air Jordan`,
 *      price: 250000,
 *      isReady: true,
 *      size: [42,43,45],
 *      total:(parameter)=>{block code} // object di real case jarang diisi function meskipun bisa
 * }
 * 
 * Ciri-ciri object ada titiknya dibelakang object, misal console.log ==> console adalah sebuah object
 * 
 */

//// Cara menulis data object ////
/**
 * Cara 1️⃣ Syntax object literal ==> PALING SERING DIPAKAI
 */

let instructor = {
    name: `Devina`,
    class: `Purwa-01`,
    age: 30,
    materi: [`fundamental`, `front-end`, `back-end`]
};

console.log(instructor.name);
console.log(instructor.materi[1]);
console.log(instructor[`materi`]); // biasanya diapply untuk properti yang dinamis
console.log(instructor.name, instructor.age);
console.log(`${instructor.name} berumur ${instructor.age}`);

/**
 * Cara 2️⃣ Syntax object `new` keyword
 */

let student = new Object(); // atau let student = {};

student.name = `Andrew`;
student.age = 23;
student.classes = `full stack`;
// setiap membuat namaVariabel pastikan merepresentasikan nilaiVariabel nya
// .class tidak bisa dipakai karena ada fungsi javascript yang memakai .class makannya diganti jadi .classes

//// OBJECT DESTRUCTURING ////
/**
 * memanggil objek di mana properti suatu objek menjadi variabel baru
 * 
 * biasanya dilakukan untuk keperluan membaca aja
 * 
 * kalau ingin mengubah content dari properti harus ubah dari object.property nya langsung bukan dari variabel yg terbentuk setelah destructuring
 */

let { name, age, classes } = student; // properti name, age, classes di objek student dijadiin variabel2 baru
// biasanya ditujukkan untuk mempermudah pemanggilan properti dari suatu objek karena biasanya objek dari server itu biasanya memiliki banyak properti

console.log(age); // variabel age dipanggil setelah dipecah pakai object destructuring
console.log(classes);

// let {name, age} = instructor; // akan menghasilkan error karena keywordVariabel let cuma bisa declare variabel unik sementara student sudah di destructuring dan di dalam student sudah ada name dan age

/** untuk ubah value age harus reassign melalui propertinya jadi student.age = 18 misalnya.
 * kalau ubahnya cuma age = 18, saat console.log(student) age akan tetap 23.
 */

//// ARRAY OF OBJECT ////
let product = [
    {
        name: `Hoodie`,
        stock: 12,
        price: 75000
    },
    {
        name: `Sepatu`,
        stock: 10,
        price: 80000
    }
];

console.log(product[0].name); // hasilnya hoodie

//// Object destructuring array ////
let data = [`Edo`, `Jr`, 27];
let [namaDepan, namaBelakang, usia] = data; // namaDepan namaBelakang merupakan variabel baru yang terbentuk
// pembentukkan variabel baru itu cuma bisa dilakukan pas destructure data array

console.log(namaDepan);
console.log(namaBelakang);
console.log(usia);

//// LOOPING PADA OBJECT ////
/**
 * bertujuan untuk 
 *  1. mengetahui properti apa saja yg ada di dalam object tsb
 *  2. menambah kondisi misal jika properti A maka xxx, jika properti B maka xxx.
 */

// untuk looping propertinya
for (let property in instructor) { // batasan akan otomatis menyesuaikan dengan banyak properti di objek itu
    console.log(property);
}

// untuk looping isi dari tiap properti
for (let property in instructor) {
    console.log(instructor[property]);
}
