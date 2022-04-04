// function
/**
 * di dlm function bisa untuk membentuk reusable program kemudian mereturn suatu output
 * argumen > 1 dipisah pk ,
 * keyword var yg sering dipake = const krn function tidak ditujukan untuk dapat direassign ataupun redeclare
 * 
 * return untuk menghasilkan output
 *  ditaruh di akhir fungsi program
 * 
 * cara buat:
 * function namaFunction(argumendrluar){program,return}
 * keywordVariabel namaFunction = (argumendrluar) => {program,return}  / arrow function
 * keywordVariabel namaFunction = function (argumendrluar) {program,return}
 */

/**
 * buat fungsi untuk identify ganjil genap
 * ganjilGenap(6) // genap
 * ganjilGenap(7) // ganjil
 */

const ganjilGenap=(numb)=>{
    if (numb%2==0){
        return `genap`
    } else {
        return `ganjil`
    }
};