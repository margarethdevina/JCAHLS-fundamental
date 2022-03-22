//// LOOP STATEMENT ////

/**
 * important pas looping dan ga sengaja infinite loop di terminal, gunakan ctrl c untuk menstop run di terminal
 * 
 * ada 3 loop statement:
 * 1. while loop statement
 *      struktur:
 *      while (condition) {
 *          program yang akan dijalankan saat condition met
 *      }
 * 2. do ... while ... loop statement
 *      struktur:
 *      do {program yang akan dijalankan saat condition met}
 *      while (condition)
 * 
 * while loop statement dan do ... while ... loop statement digunakan saat batasan looping tidak diketahui. kedua statement ini
 * paling jarang digunakan.
 * 
 * 3. for loop statement
 *      paling sering dipakai karena limit looping telah ditentukan di awal.
 *      strukur:
 *      for (statement1; statement2; statement3){
 *          program yang akan dijalankan dimulai dari statement1 hingga mencapai condition di statement2
 *      }
 * 
 *      statement1 biasanya berupa number ==> i = 0 atau i = 1, merupakan awal mula looping
 *      statement2 condition yg menghasilkan boolean, kalau condition met atau true maka program akan dijalankan
 *      statement3 merupakan increment / decrement untuk mencapai condition di statement2 
 * 
 */

// while loop statement //

/**
 * print loop menurun dari 10 sd 1
 */

let nilai = 10;

// while (nilai > 0) {
//     console.log(nilai);
//     nilai--;
// }

// do ... while ... loop statement //

/**
 * print loop menaik dari 1 sd 15
 */

let count = 1

// do {
//     console.log(count);
//     count++;
// } while (count <= 15)

// for loop statement //

/**
 * print loop menaik dari 1 sd 10 dengan
 * menambahkan label `gerbong no.` di depannya lalu
 * tambahkan label `ganjil` atau `genap` berdasarkan number yang diloop itu
 */

// for (i = 1; i <= 10; i++) {
//     if (i % 2 == 0){
//         console.log(`gerbong no. ${i} genap ✅`);
//     } else {
//         console.log(`gerbong no. ${i} ganjil ❌`);
//     }
// }

/**
 * print loop menaik dari 1 sd 30 dengan
 * menambahkan label di depan berikut:
 *      bizz buzz untuk number yang kelipatan 3 dan kelipatan 5 ==> bizz buzz 15 bizz buzz 30
 *      bizz untuk number kelipatan 3 aja ==> bizz 3 bizz 6 bizz 9
 *      buzz untuk number kelipatan 5 aja ==> buzz 5 buzz 10
 * number lainnya yang bukan kelipatan 3, 5, 3 dan 5 tidak diprint
 */

for (i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`bizz buzz ${i} ✅❌`);
    } else if (i % 3 == 0){
        console.log(`bizz ${i} ✅`);
    } else if (i % 5 == 0){
        console.log(`buzz ${i} ❌`);
    }
}

//// homework untuk minggu 6 Mar 2022 ////

/**
 * membuat kalkulator di html
 * step:
 * 1. alert mari berhitung
 * 2. prompt masukkan angka pertama
 * 3. prompt masukkan angka kedua
 * 4. alert berisi:
 *      hasil perhitungan
 *      `penjumlahan angka pertama + angka kedua =` hasil penjumlahan
 *      `pengurangan angka pertama - angka kedua =` hasil pengurangan
 *      `perkalian angka pertama x angka kedua =` hasil perkalian
 *      `pembagian angka pertama : angka kedua =` hasil pembagian
 */