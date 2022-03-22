/**
 * class of object
 * 
 * merupakan cetakan
 * cetakan utama cetakan turunan (class inheritance)
 * class utama untuk hal paling general
 * class turunan spesifik
 * 
 * struktur
 * class className {
 *      constructor (_variabel1, _variabel2) {
 *      this.variabel1 = _variabel1;
 *      this.variabel2 = _variabel2;
 *      }
 *      method = () => {
 *          return xxx
 *      }
 * }
 * 
 * untuk class inheritance ada perbedaan struktur
 * class classNameInheritance extends className {
 *      constructor (_variabel1,_variabel2,_variabel3,_variabel4) {
 *      super (_variabel1,_variabel2);
 *      this.variabel3 = _variabel3;
 *      this.variabel4 = _variabel4;
 *      }
 * }
 * className diawali huruf kapital
 * 
 */

class Manusia {
    constructor (_name,_gender,_birth){
        this.name = _name;
        this.gender = _gender;
        this.birth = _birth; // dd-mm-yyyy
    }
    getAge = () => {
        let birthYear = Number(this.birth.split(`-`)[2]);
        let currentDate = new Date();
        return currentDate.getFullYear() - birthYear
    }
    introduce = () => {
        return `My name ${this.name}, I'm a ${this.gender}, I was born on ${this.birth} and I'm ${this.getAge()} years old now`
    }
}

let dataPenduduk = [];
dataPenduduk.push(new Manusia(`Reynold`, `Male`, `12-11-1980`));
dataPenduduk.push(new Manusia(`Raisa`, `Female`, `12-10-2000`));
console.log(dataPenduduk);

let printList = () => {
    return dataPenduduk.map((value,index)=>{
        return `${index+1}. ${value.introduce()}`
    }).join(`\n`)
}

console.log(printList())

class Pekerjaan extends Manusia {
    constructor (_name,_gender,_birth,_profession,_salary){
        super(_name,_gender,_birth);
        this.profession = _profession;
        this.salary = _salary;
    }    
}

let dbJob = [];
dbJob.push(new Pekerjaan(`Vyn`,`09-07-1991`,`Female`,`Consultant`,2000))
dbJob.push(new Pekerjaan(`Buono`,`10-07-1991`,`Male`,`Technician`,2000))
console.log(dbJob)

let temp = {
    Kerjaan: `Cuci piring`,
    getHasil: () => {
        return `Done`
    }
}

console.log(temp)