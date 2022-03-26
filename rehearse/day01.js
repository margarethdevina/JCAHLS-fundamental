// variabel
/**
 * struktur keywordVariabel namaVariabel = valueVariabel;
 * 
 * macam keywordVariabel: var let const
 * var => redeclare, reassign
 * let => non-redeclare, reassign
 * const => non-redeclare, non-reassign, sesuai nama constant => utk value konstan, atau untuk buat variabel fungsi
 * 
 * aturan pembuatan:
 * diawali huruf / simbol $ atau _
 * camelCase
 * snake_case
 * UPPERCASE
 * lowercase
 * 
 * jenis data yg disimpan:
 * string "" '' ``
 * number integer float
 * array [val1,val2,val3]
 * object {prop1:val1,prop2:val2}
 * boolean true false
 * symbol
 */

/**
 * shortcut yg sering dipk:
 * win . emoticon
 * shift alt f rapikan code
 * shift alt up/down duplicate up/down
 * alt up/down move code up/down
 * ctrl ` open terminal
 * ctrl shift ` open new terminal
 * ctrl / comment, klo mw comment di akhir code hrs manual //
 * ctrl f find word, default word sebelah kursor aktif yg dicari duluan
 * explorer bertanda angka/tab file di vscode editor ada dot putih => file belum disave
 * shift del di akhir baris code => hapus code 1 row
 */

// keyword Var
var nama = "Devina"; // declare
console.log(nama);
var nama = "Margareth"; // redeclare
console.log(nama);
nama = "Vyn"; // reassign
console.log(nama);

// keyword let
let age = 22; // declare
console.log(age);
age = 23; // reassign
console.log(age);

// let age = 25; // non-redeclare

// keyword const
const PI = Math.PI;
console.log(PI);

// String
let namaToko = "Full 'Metal' \nPanic";
console.log(namaToko);
let nama_toko = 'Full \'Metal\' \nPanic';
console.log(nama_toko);
let nama_Toko = `Full "Metal" 
Panic`;
console.log(nama_Toko);

let alamatToko = "Bogor";

console.log(`Toko ${nama_Toko} berada di ${alamatToko}`);

/**
 * variasi fungsi diterapkan pd string:
 * typeof string/number/variableName
 * stringVariable.toLowerCase()
 * stringVariable.toUpperCase()
 * value/variableName.length
 * stringVariable.includes(string)
 * Number(string/stringVariable)
 * ParseInt(string/stringVariable)
 * string/stringVariable.split("")
 */

console.log(typeof alamatToko);

console.log(alamatToko.toLowerCase());
console.log(alamatToko.toUpperCase());
console.log(alamatToko.length);
console.log(nama_Toko.includes("Full"));
console.log(alamatToko.split(""));

// Number
let jarak = 1500;
let berat = 55.5;
let saldoAtm = 1e6;

/**
 * Artihmatic operation
 * Jml
 * Krg
 * Bg
 * Kl
 * Mod
 */

let hasil = 1500;
hasil += 500;
console.log(hasil);

hasil -= 500;
console.log(hasil);

hasil *= 2;
console.log(hasil);

hasil /= 1000;
console.log(hasil);

hasil %= 3;
console.log(hasil);

jarak++;
jarak++;
jarak++;
jarak++;
console.log(jarak);

hasil = 1500;
hasil += 4;
console.log(hasil);

/**
 * Mathematic object
 * Math.PI
 * Math.round(x)
 * Math.ceil(x)
 * Math.floor(x)
 * Math.pow(x,y)
 * Math.sqrt(x)
 * Math.cbrt(x)
 * Math.min(x)
 * Math.max(x)
 * Math.random(x) => 0-0.99
 * Math.random(x)*10 => 0-9.9
 * Math.abs(x)
 */

console.log(Math.abs(-5)); // 5
console.log(Math.floor(Math.random() * 1e6)); // 666666
console.log(Math.round(2.56)) // 3
console.log(Math.floor(2.9)) // 2
console.log(Math.ceil(2.1)) // 3
console.log(Math.pow(2, 3)) // 8
console.log(Math.sqrt(16)) // 4
console.log(Math.cbrt(27)) // 3
console.log(Math.min(2, 5, 6)) // 2
console.log(Math.max(2, 5, 6)) // 6

/**
 * parsing
 * string => number
 * ParseInt(x)
 *  string => angka bulat
 *  empty string => NaN
 * ParseFloat(x)
 *  string => angka desimal
 * Number(x)
 *  empty string => 0
 * 
 * number => string
 * string/stringVariable.toString()
 *  ubah jd string biasa tanpa punctuation
 * string/stringVariable.toLocaleString()
 *  ubah jd string dan ada punctuation sesuai format msg2 pc (misal untuk memecah ribuan pk titik/koma)
 */

/**
 * isNaN(x) => boolean
 */

console.log(isNaN("2")) // false
console.log(isNaN(2)) // false
console.log(isNaN("")) // false krn Number(empty string) => 0
console.log(isNaN("dor")) // true

// boolean
/**
 * didapat dari?
 * declare
 * comparison > < >= <= != == ===
 *  === exact same type & data => true
 *  == same data
 * logical
 *  && and
 *  || or
 *  ! not
 * truthy falsy
 */

let angka1 = 20;
let angka2 = 30;
console.log(`----------`)
console.log(angka1 == "20") // true
console.log(angka1 === "20") // false
console.log(angka1 > 20 && angka2 >= 30) //  false
console.log(angka1 > 20 || angka2 >= 30) //  true

/**
 * jenis truthy:
 * " "
 * true
 * number != 0
 * []
 * {}
 * function()
 * 
 * jenis falsy:
 * NaN
 * null
 * 0 -0
 * false
 * ""
 * undefined
 */

/**
 * Conditional statement
 * 1. if statement
 * 2. if else statement
 * 3. if else if else if else statement
 * 4. switch case
 * 5. ternary operator
 */

/**
 * verif umur, >= 17 => terverif
 */

let umur = 15;
let email = "anonim@gmail.com"

// if statement
if (umur >= 17) {
    console.log(`Usia terverifikasi, cek bukti di email ${email}`)
}
// if else
if (umur >= 17) {
    console.log(`Usia terverifikasi, cek bukti di email ${email}`)
} else {
    console.log(`Usia gagal diverifikasi, Anda masih terlalu muda utk mengemudi`)
}

let nilai = 88;
/**
 * misal grade a bernilai 80 - 100
 * grade b = 70 - 79
 * grade c = 60 - 69
 * grade d = 50 - 59
 * sisanya grade e
 */

let grade = Number(nilai) >= 50 && Number(nilai) <= 100 ? `Anda lulus` : `Anda tidak lulus`
console.log(grade);

// if else if
if (Number(nilai) >= 80 && Number(nilai) <= 100) {
    console.log(`Nilai ${nilai} grade A`);
} else if (Number(nilai) >= 70 && Number(nilai) <= 79) {
    console.log(`Nilai ${nilai} grade B`);
} else if (Number(nilai) >= 60 && Number(nilai) <= 69) {
    console.log(`Nilai ${nilai} grade C`);
} else if (Number(nilai) >= 50 && Number(nilai) <= 59) {
    console.log(`Nilai ${nilai} grade D`);
} else if (Number(nilai) >= 0 && Number(nilai) <= 49) {
    console.log(`Nilai ${nilai} grade E`);
} else {
    console.log(`Mohon masukkan nilai antara 0 - 100`)
};

let profesi = "Gamer"

switch (profesi) {
    case "Pengacara":
        console.log(`Pengangguran banyak acara`)
        break;
    case "Gamer":
        console.log(`Ga banyak omong yg penting Meraih juara`)
        break;
}






