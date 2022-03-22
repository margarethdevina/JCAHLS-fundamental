//// CLASS OBJECT at JAVASCRIPT ////
/**
 * Sebuah template yg diperuntukkan untuk membuat data object atau sebuah komponen
 * 
 * Class bagaikan cetakan dan saling ga konek
 * 
 * class structure:
 * Class className {
 *      constructor(argumen1,argumen2,...){ // constructor = blueprint sebuah objek, argumen untuk dapat nilai dr luar kelas
 *      this.propertyName = argumen1; // this berarti ingin menyimpan nilai tsb di dalam properti kelas ini
 *      this.propertyName = argumen2;
 *      }
 * 
 *      method=()=>{ // fungsi yg ada di dlm objek disebut method, tidak perlu keywordVariabel lagi
 *          // diisi kode fungsi nya
 *      }
 * };
 * 
 * setiap kali membuat kelas gunakan penamaan diawali huruf Kapital
 * di react front end penamaan kelas diawali huruf kapital adalah wajib kalau tidak, tidak bisa dipanggil
 * 
 * class dapat dilakukan pewarisan / class inheritance yg ditujukkan saat ingin membuat kelas baru tapi memiliki bagian dari kelas lain yang memiliki hubungan dengan kelas utama
 */

class Manusia {
    constructor(_name, _birth, _gender) { // value/argumennya diawali underline biar ga bingung sm propertinya
        this.name = _name;
        this.birth = _birth;
        this.gender = _gender;
    }

    getAge = () => {
        let birthYear = parseInt(this.birth.split(`-`)[2])
        let date = new Date(); // maksudnya diexecute panggil Date
        return date.getFullYear() - birthYear
    }

    introduce = () => {
        return `My name is ${this.name}, I born at ${this.birth}, my age is ${this.getAge()} years old`
    }
}

let dataPenduduk = [];

dataPenduduk.push(new Manusia(`Reynold`, `12-11-1980`, `Male`));
dataPenduduk.push(new Manusia(`Raisa`, `12-10-2000`, `Female`));

console.log(dataPenduduk); // akan ada label kelas Manusia sebagai penanda
console.log(dataPenduduk[0].introduce());
console.log(dataPenduduk[1].introduce());

let list = dataPenduduk.map((value, index) => {
    return `${index + 1}. ${value.introduce()}`
})
console.log(list.join(`\n`))

// Inheritance => pewarisan data dari class utama agar dapat digunakan oleh class turunannya
// manusia pasti punya pekerjaan jadi kita buat turunan dari kelas manusia yaitu kelas pekerjaan
// saat membuat kelas kita buat kelas yang paling general dulu dimiliki oleh item tertentu (contoh kelas manusia: nama, tanggal lahir, gender, ...
//  ... kelas hewan: spesies, makanan hewan, produk: nama, stok, harga).
// Turunan produk bisa kategori: snack ringan, dll
class Pekerjaan extends Manusia {
    constructor(_name, _birth, _gender, _profession, _salary) {
        super(_name, _birth, _gender); // menggunakan property dari class utama
        this.profession = _profession;
        this.salary = _salary;
        this.age = this.getAge();
    }
}

let dbJob = [];
dbJob.push(new Pekerjaan(`Arnold`, `13-10-1985`, `Male`, `Chef`, 30000000))
console.log(dbJob);

// ternyata fungsi introduce() bisa dipanggil juga di dbJob
let listJob = dbJob.map((value, index) => {
    return `${index + 1}. ${value.introduce()}`
})
console.log(listJob.join(`\n`))

// cara memasukkan fungsi saat membuat objek secara literal
let jobDesc = {
    job: `Prepare tools`,
    getStatus: () => {
        return `Done`
    }
}

/**
 * ujian 30 Maret 2022 (Rabu)
 * multiple choice 
 * teori, baca artikel yg dishare di slack
 * 70% teori
 * 30% applied theory 
 */