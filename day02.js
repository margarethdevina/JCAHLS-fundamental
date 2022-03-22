//////////// LOOP STATEMENT //////////////
// LOOP : perulangan

/**
 * A. WHILE LOOP : digunakan ketika akhir perulangan tidak pasti
 * 
 * while(condition){
 *  // program yang ingin dijalankan
 * }
 */

// Example:
let nilai = 10;

while (nilai > 0) {
    // console.log(`Angka`, nilai);
    nilai--;
}

// di terminal pencet ctrl + c untuk stop terminalnya

/**
 * B. DO ... WHILE LOOP
 * 
 * do{
 *      // program yang ingin dijalankan
 * }while(condition);
 * 
 */
let count = 1;
do {
    // console.log(`Bus No. ${count}`);
    count++;
} while (count <= 10);

/**
 * C. FOR LOOP STATEMENT digunakan saat tahu batas looping seberapa, untuk tipe data array dan objek
 * 
 * for(statement_1;statement_2;statement_3){
 *      // program yang ingin dijalankan
 * }
 * 
 * statement_1 : variable yang mendefinisikan nilai awal dari batas looping, biasanya 0 atau 1 karena number
 * statement_2 : condition untuk memeriksa variable statement_1 apakah bernilai true kalau true program akan dijalankan
 * statement_3 : berisi perintah increment atau decrement terhadap statement_1
 * 
 * keuntungan pakai loop ini kita dapat membatasi jumlah loop sejak awal
 */

for(let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(`Kereta No. ${i} genap`)
    } else {
        console.log(`Kereta No. ${i} ganjil`)
    }
}

// kelipatan 3 tulisan bizz, kelipatan 5 ditulis buzz, kelipatan 3 dan 5 ditulis bizz buzz, 
// batas loop 30, 15 dan 30 jadi bizz buzz

for(let i = 1; i <= 30; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`bizz buzz ${i}`)
    }else if(i % 3 == 0){
        console.log(`bizz ${i}`)
    }else if(i % 5 == 0){
        console.log(`buzz ${i}`)
    }
}

// homework 6 Mar 2022
// membuat kalkulator 
// mari berhitung
// masukan angka pertama
// masukan angka kedua
// hasil hitung muncul angka pertama dan kedua dengan operator berikut jumlah, kurang, bagi, kali beserta hasil
// semua pakai alert jadi pakai html