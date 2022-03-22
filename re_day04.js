/**
 * buat fungsi untuk identify ganjil genap
 * ganjilGenap(6) // genap
 * ganjilGenap(7) // ganjil
 */

const ganjilGenap = (i) => {
    if (i % 2 == 0) {
        return `angka ${i} adalah angka genap`;
    } else {
        return `angka ${i} adalah angka ganjil`;
    }
}

console.log(ganjilGenap(10));
console.log(ganjilGenap(11));

let barang = [`mobil`, `motor`, `laptop`];

let list = ``;

barang.forEach((value, index) => {
    list += `${index + 1}. ${value};\n`
})

console.log(list);

let angka = [2, 4, 6, 8, 3, 5, 7, 9];

console.log(
    angka.filter((value, index) => {
        return value % 2 == 0
    })
);