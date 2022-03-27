
let imgGunting = `<img src="gunting.png" width="5%"/>`
let imgBatu = `<img src="batu.png" width="5%" />`
let imgKertas = `<img src="kertas.png" width="5%" />`

let pcSkor = 0;
let hasilPlayer = 0;
let hasilImbang = 0;
let hasilMenang = 0;
let hasilKalah = 0;
let totalSkor = 0;
function printHasil(){
    return `Hasil menang ${hasilMenang}, hasil imbang ${hasilImbang}, hasil kalah ${hasilKalah}, total skor ${totalSkor}`
}

//////// buat random pilihan pc ////////
function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(rndInt(1,3))

function hasilPc() {
    if (rndInt(1,3) == 1) {
        document.getElementById("hasil-pc").innerHTML = imgGunting
        pcSkor = 1
    } else if (rndInt(1,3) == 2) {
        document.getElementById("hasil-pc").innerHTML = imgBatu
        pcSkor = 2
    } else if (rndInt(1,3) == 3) {
        document.getElementById("hasil-pc").innerHTML = imgKertas
        pcSkor = 3
    }
    return pcSkor
};

function handleGunting() {
    document.getElementById("hasil-player").innerHTML = imgGunting
    hasilPlayer = 1
    hasilPc()
    if (hasilPlayer == pcSkor) {
        document.getElementById("hasil-vs").innerHTML = "Hasil imbang"
        hasilImbang += 1
    } else if (pcSkor == 2) {
        document.getElementById("hasil-vs").innerHTML = "Player kalah"
        hasilKalah += 1
    } else if (pcSkor == 3) {
        document.getElementById("hasil-vs").innerHTML = "Player menang"
        hasilMenang += 1
        totalSkor += 25
    }
    document.getElementById("skor-vs").innerHTML = printHasil()
};

function handleBatu() {
    document.getElementById("hasil-player").innerHTML = imgBatu
    hasilPlayer = 2
    hasilPc()
    if (hasilPlayer == pcSkor) {
        document.getElementById("hasil-vs").innerHTML = "Hasil imbang"
        hasilImbang += 1
    } else if (pcSkor == 3) {
        document.getElementById("hasil-vs").innerHTML = "Player kalah"
        hasilKalah += 1
    } else if (pcSkor == 1) {
        document.getElementById("hasil-vs").innerHTML = "Player menang"
        hasilMenang += 1
        totalSkor += 25
    }
    document.getElementById("skor-vs").innerHTML = printHasil()
};

function handleKertas() {
    document.getElementById("hasil-player").innerHTML = imgKertas
    hasilPlayer = 3
    hasilPc()
    if (hasilPlayer == pcSkor) {
        document.getElementById("hasil-vs").innerHTML = "Hasil imbang"
        hasilImbang += 1
    } else if (pcSkor == 1) {
        document.getElementById("hasil-vs").innerHTML = "Player kalah"
        hasilKalah += 1
    } else if (pcSkor == 2) {
        document.getElementById("hasil-vs").innerHTML = "Player menang"
        hasilMenang += 1
        totalSkor += 25
    }
    document.getElementById("skor-vs").innerHTML = printHasil()
};

