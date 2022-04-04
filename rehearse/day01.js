// variabel
/**
 * struktur keywordVariabel namaVariabel = valueVariabel;
 * 
 * var => redeclare, reassign
 * let => non-redeclare, reassign
 * const => non-redeclare, non-reassign, konstan, biasanya untuk buat arrow function / masukkan nilai konstan lain (UPPERCASE)
 * 
 * penamaan:
 * lowercase
 * UPPERCASE
 * $
 * _
 * harus huruf / simbol
 * camelCase
 * snake_case
 * 
 * value variable primitive non-primitive
 * primitive = string number boolean null unidentified
 * non-primitive = objek, array, fungsi
 */

/**
 * win . emo
 * alt shift f rapiin
 * ctrl ` open terminal
 * ctrl shift ` new terminal
 * alt shift up down duplicate atas bawah
 * alt up down move atas bawah
 * shift del delete 1 row
 * ctrl / comment
 */

// string
/**
 * "" '' ``
 * fungsi bawaan javascript untuk tipe data string:
 * 1. string.length / varString.length => number
 * 2. string.toLowerCase() / varString.toLowerCase() => string
 * 3. string.toUpperCase() / varString.toUpperCase() => string
 * 4. varString.includes("string") => case sensitive => boolean
 * 5. varString.split(x) / string.split(x) => array
 * 6. typeof string / typeof varString => string
 * 
 * number => string
 *  varNumber.toString()
 *  varNumber.toLocaleString()
 */

let text = "Purwadhika";
let angka = 2;

console.log("hasil typeof", typeof angka)
console.log("hasil split", text.split(""))
console.log("hasil includes", text.includes("dhika"))

// number
/**
 * integer
 * float
 * string => number
 *  parseInt(varString)
 *  parseFloat(varString)
 *
 * Arithmatic operation:
 * + - / * %
 *
 * Mathematic object
 * Math.PI
 * Math.abs(x)
 * Math.floor(x)
 * Math.ceil(x)
 * Math.round(x) => random dgn min max jarak dekat mending dibulatkan pakai round
 * Math.random()
 * Math.pow(x,y)
 * Math.sqrt(x)
 * Math.cbrt(x)
 * Math.min(x,x,x,x / varNumber)
 * Math.max(x,x,x,x / varNumber)
 *
 * isNaN() => boolean
 * isNaN(2) false
 * isNaN("2") false
 * isNaN("dua") true
 * isNaN("") true
 */

// boolean
/**
 * declare
 *
 * comparisson operator
 * < > <= >= == === != negacy
 * == ga sensitive tipe data
 * === sensitive tipe data
 *
 * logical operator
 * and or not
 * and (true&&true) true
 * or (true||false) (false||true) (true||true) => true
 * not !condition
 *
 * truthy falsy
 * Boolean(x)
 * truthy:
 * object{} array[] function()
 * "null" "false" " "
 * number selain 0 dan -0
 * true
 *
 * falsy:
 * undefined <= declare variabel aja tanpa ada value
 * ""
 * null
 * 0 atau -0
 * false
 * NaN <= Number("" atau empty string)
 */

// conditional statement
/**
 * if (cond) {
 *  task
 * }
 * 
 * if (cond) {
 * task 1
 * } else {
 * task 2
 * }
 * 
 * if (cond) {
 * t1
 * } else if (cond2) {
 * t2
 * } else {
 * t default
 * }
 * 
 * switch case
 * let profesi = "dokter"
 * 
 * switch (profesi) {
 * case dokter:
 * "obati pasien";
 * break;
 * case guru:
 * "mengajar";
 * break;
 * case perenang:
 * "berenang";
 * break;
 * }
 * 
 * ternary operator
 * let temp = cond ? t1 : t2
 */
