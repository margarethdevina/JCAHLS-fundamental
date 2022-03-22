///// CONDITIONAL STATEMENT /////
/**
 * Aturan :
 * 1. Dia membutuhkan nilai boolean
 * 
 * Jenis :
 * 1. IF STATEMENT untuk 1 kondisi
 * 2. IF ... ELSE ... STATEMENT untuk 2 kondisi saja
 * 3. IF ... ELSE IF ... ELSE STATEMENT untuk >= 3 kondisi
 * 4. SWITCH ... CASE STATEMENT untuk memastikan sebuah nilai dengan case yang ditentukan
 */

// 1. IF STATEMENT
let nama = `Leonardo`;
let usia = 20;
let email = `leo@mail.com`;

// analogi tes pembuatan sim dengan ketentuan usia harus lebih dari 17 tahun. apakah data yg dimiliki menunjukkan boleh membuat sim?
/**
 * Aturan penulisan if statement :
 * if(condition){
 *      // task
 * }
 * note :
 * - condition: kondisi yang diinginkan, bernilai BOOLEAN(COMPARISON / LOGICAL OPERATOR / TRUTHY / FALSY)
 * - task: apa yang ingin dijalankan ketika condition terpenuhi 
 */

// Example case: memverifikasi usia pendaftaran SIM yang harus minimal 17 tahun
if (usia >= 17) {
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa ${email} anda ⚠`) // cara 1, ini lebih recommended krn lebih leluasa
    console.log("Verifikasi usia berhasil ✅", nama) // cara 2 konsep label
}

// 2. IF ... ELSE ... STATEMENT
/**
 * Aturan penulisan if statement :
 * if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * note :
 * - condition: kondisi yang diinginkan, bernilai BOOLEAN(COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task: apa yang ingin dijalankan ketika condition terpenuhi 
 */
if (usia >= 17){
    //task
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa ${email} anda ⚠`);
} else {
    // task
    console.log(`Verifikasi usia ${nama} gagal ❌`);
}

// 3. IF ... ELSE IF ... ELSE STATEMENT untuk >= 3 kondisi
/**
 * Aturan penulisan if statement :
 * if(condition){
 *      // task
 * }else if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * note :
 * - condition: kondisi yang diinginkan, bernilai BOOLEAN(COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task: apa yang ingin dijalankan ketika condition terpenuhi 
 */

let nilai = 80;

if (nilai >= 90){
    console.log(`Grade A`, nilai)
}else if(nilai >= 80 && nilai <= 89) {
    console.log(`Grade B`, nilai)
}else if(nilai >= 70 && nilai < 80) {
    console.log(`Grade C`, nilai)
}else{
    console.log(`Grade D`, nilai)
}

// 4. SWITCH ... CASE STATEMENT untuk memastikan sebuah nilai dengan case yang ditentukan
// switch case jarang digunakan karena butuh break di tiap task untuk menghentikan program terus dijalankan sampai akhir.
let profesi = `Coder`;
switch(profesi){
    case `Coder`:
        // task
        console.log(`Saya suka bikin aplikasi`);
        break; // untuk menghentikan program bawah2 nya kalau sudah ketemu case yang cocok
    case `Doctor`:
        console.log(`Saya suka mengobati orang`);
        break;
    case `Polisi`:
        console.log(`Saya suka nilang`)
        break;
    default:
        console.log(`Gag tau ngapain`)
        break;
}

// Ternary Operator //
// cara pembuatan conditional statement menggunakan simbol ? dan :
// strukturnya ==> condition ? task : task <== condition ? true : false
// nilai struktur perlu ditampung dalam variabel berarti 1 variabel bisa punya 2 nilai.
let validasi_usia = usia > 17 ? `usia cukup` : `usia tidak cukup`

console.log(validasi_usia);
