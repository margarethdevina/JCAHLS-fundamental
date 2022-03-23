// ASYNCRONUS
/**
 * Proses eksekusi program pada javascript ada 2:
 * 1. Syncronus
 *      Set up default pada javascript
 *      Sinkronisasi secara langsung dan berurut per baris
 *      Javascript proses data satu per satu hingga selesai walaupun kita buat fungsi
 * 
 * 2. Asyncronus
 *      Output keluar tidak berurutan
 *      Jadi akan jeda untuk memproses fungsinya
 *      Digunakan bila kita melakukan request ke server
 *          seperti interaksi dari luar untuk meminta data dari server kita (interaksi dari luar ke server)
 *      Ada beberapa fungsi javascript yang menggunakan konsep asyncronus seperti:
 *          - setTimeout
 *          - setInterval
 *          - promise di front end
 *          - asyncwait di front end
 *          - callback di back end
 *      Di real case kita bisa berhadapan dengan konsep ini
 */

// Syncronus

function funcA(){
    console.log("Fungsi A")
}

function funcB(){
    console.log("Fungsi B")
}

function funcC(){
    console.log("Fungsi C")
}

funcA()
funcB()
funcC()

// hasilnya akan berurut ABC

// Asyncronus function Javascript: setTimeout

function funcD(){
    console.log("Fungsi D")
}

function funcE(){
    setTimeout(()=>{ //handler semacam callbacknya, satuan milisecond
        console.log("Fungsi E")
    }, 500) // jeda 500 milisecond membuat fungsi E baru selesai dieksekusi setelah fungsi F meskipun telah dijalankan duluan
}

function funcF(){
    console.log("Fungsi F")
}

funcD()
funcE()
funcF()