// array
/**
 * ciri:
 * []
 * bisa mix isi tipe nya
 * tiap data pny index unik = number
 * beda sm objek => objek {}, objek itu pakai properti
 * 
 * cara buat array
 * arrVar = [xx,xx,xx]
 * 
 * arrVar = array(xx,xx,xx)
 * 
 * arrVar = []
 * arrVar[0]=xx
 * arrVar[1]=xx
 */

let polin = "APa"

let reversedPolin = polin.toLowerCase().split("").reverse().join("")
console.log(reversedPolin)
if (polin.toLowerCase()==reversedPolin){
    console.log(`true`)
} else {
    console.log(`false`)
}

// array function
/**
 * arrVar.length
 * arrVar.forEach((value,index)=>{})
 *  butuh penampung untuk outputnya
 * arrVar.map((value,index)=>{})
 *  membuat array baru
 * arrVar.push([xxx])
 *  nambah data baru dan akan membentuk index paling akhir
 * arrVar.filter((value,index)=>return {condition})
 *  membuat array baru, output berbentuk array dari data ketemu sm kondisinya
 * arrVar.splice(x,y,z)
 *  .splice(x,y) => untuk delete data ke x sebesar y digit
 *  .splice(x,1,z) => edit data ke x, dengan delete data ke x dulu baru diisi dengan z
 *  .splice(x,0,z) => sisipin data z setelah data ke x
 * arrVar.join(separator)
 *  membentuk string
 * arrVar.findIndex((value,index)=>{})
 *  output number untuk data yg sesuai kondisi
 * arrVar.reverse()
 *  reverse urutan data di array
 * arrVat.includes(x)
 *  mencari data x diantara data2 di array
 * arrVar.indexOf(x)
 *  mencari index atas data yg contain x
 *  similar dengan findIndex bedanya ini ga pake kondisi
 * 
 */