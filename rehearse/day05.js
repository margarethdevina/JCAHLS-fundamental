/**
 * tipe data objek
 * 
 * array tiap data punya index []
 * objek tiap data punya properti {}
 * 
 * cara buat array
 * declare arrVar = [x,x,x,x]
 * 
 * array = [];
 * array[0]=x
 * array[1]=x
 * 
 * let arrVar = array(x,x)
 * 
 * let prop3 = "xxx"
 * let objVar = {
 * prop1: val1,
 * prop2:val2
 * prop3
 * }
 * 
 * let objVar = new Object() || let objVar = {}
 * objVar.prop1 = val1
 * objVar.prop2 = val2
 * 
 * 
 */

let d = new Date()
// console.log(d.getFullYear())

 let instructor = {
    name: `Devina`,
    class: `Purwa-01`,
    age: 30,
    materi: [`fundamental`, `front-end`, `back-end`]
};
// console.log(instructor['materi']); 

let manusia = {}
manusia.nama = "Louie"
manusia.age = 22
// console.log (manusia)

let username = "Louie"
let guru = {
    username,
    age: 30,
    pelajaran: "OR"
}
// console.log(guru)

for (property in guru){
    console.log(property)
    console.log("======")
}

for (property in guru){
    console.log(guru[property])
}

const myNum = [11, 18, 100, 25, 30]
console.log(myNum)
myNum.sort(function (a, b) { return a - b }) // ascending
console.log("ascending",myNum) // output -> [ 11, 18, 25, 30, 100 ]
myNum.sort(function (a, b) { return b - a }) // descending
console.log("descending",myNum) // output -> [ 100, 30, 25, 18, 11 ]