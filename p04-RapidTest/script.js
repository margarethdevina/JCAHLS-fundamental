let dbTest = [];

let dbPositif = [];

let dbNegatif = [];

let hasilTest = ``;

class Warga {
    constructor(_antrian, _nama, _asal, _tujuan) {
        this.antrian = _antrian;
        this.nama = _nama;
        this.asal = _asal;
        this.tujuan = _tujuan;
    }
    getInfo(db = dbWarga) {
        if (db == dbTest) {
            return `<tr>
            <td>${this.antrian}</td>
            <td>${this.nama}</td>
            <td>${this.asal}</td>
            <td>${this.tujuan}</td>
            <td>
            <select id="hasil-test-${this.antrian}" onchange="valueHasilTest('${this.antrian}')">
            <option value="null" selected>Pilih hasil</option>
            <option value="positif">Positif</option>
            <option value="negatif">Negatif</option>
            </select>
            </td>
            </tr>`
        } else if (db == dbPositif) {
            return `<tr>
            <td>${this.antrian}</td>
            <td>${this.nama}</td>
            <td>${this.asal}</td>
            <td>${this.tujuan}</td>
            <td>
            <select id="hasil-pengobatan-${this.antrian}" onchange="valueHasilPengobatan('${this.antrian}')">
            <option value="null" selected>Pilih hasil</option>
            <option value="sembuh">Sembuh</option>
            <option value="meninggal">Meninggal</option>
            </select>
            </td>
            </tr>`
        } else if (db == dbNegatif) {
            return `<tr>
            <td>${this.antrian}</td>
            <td>${this.nama}</td>
            <td>${this.asal}</td>
            <td>${this.tujuan}</td>
            <td><button type="button" onclick="handleNegatif('${this.antrian}')">Kembalikan ke Tabel Warga</button></td>
            </tr>`
        } else {
            return `<tr>
            <td>${this.antrian}</td>
            <td>${this.nama}</td>
            <td>${this.asal}</td>
            <td>${this.tujuan}</td>
            <td><button type="button" onclick="handleTest('${this.antrian}')">Rapid Test</button></td>
            </tr>`
        }
    }
};

////// Warga ////////

let dbWarga = [
    new Warga("A273BN", "Andi Lau", "Bogor", "Jakarta"),
    new Warga("IOA901", "John Wick", "Jakarta", "Bandung")
];
console.log("isi dbWarga", dbWarga)

function printList(db = dbWarga) {
    let tableContent = db.map((value, index) => {
        return value.getInfo(db)
    })

    if (db == dbWarga) {
        tableContent = [...tableContent, ...[`<tr>
        <td></td>
        <td><input id="new-namaWarga" type="text" /></td>
        <td><input id="new-asalWarga" type="text" /></td>
        <td><input id="new-tujuanWarga" type="text" /></td>
        <td><button type="button" onclick="handleAntri()">Antri</button></td>
        </tr>`]]

        document.getElementById("table-warga").innerHTML = tableContent.join("")
    } else if (db == dbTest) {
        document.getElementById("table-test").innerHTML = tableContent.join("")
    } else if (db == dbPositif) {
        document.getElementById("table-positif").innerHTML = tableContent.join("")
    } else if (db == dbNegatif) {
        document.getElementById("table-negatif").innerHTML = tableContent.join("")
    }
};
printList();

function handleAntri() {
    let antrian = Math.random().toString(36).substring(2, 8).toUpperCase();
    console.log("no antrian random?", antrian)

    let nama = document.getElementById("new-namaWarga").value;
    let asal = document.getElementById("new-asalWarga").value;
    let tujuan = document.getElementById("new-tujuanWarga").value;
    console.log("isian warga baru", nama, asal, tujuan);

    dbWarga.push(new Warga(antrian, nama, asal, tujuan))
    printList()
};

//////// Rapid Test ////////

function handleTest(antrian) {
    let indexdbWarga = dbWarga.findIndex(value => value.antrian == antrian);
    console.log("cek idx hsl klik rapidtest", indexdbWarga);

    dbTest.push(
        new Warga(
            dbWarga[indexdbWarga].antrian,
            dbWarga[indexdbWarga].nama,
            dbWarga[indexdbWarga].asal,
            dbWarga[indexdbWarga].tujuan)
    );
    console.log("cek isi dbTest", dbTest);

    dbWarga.splice(indexdbWarga, 1);
    console.log("cek isi dbWarga stlh klik test", dbWarga);

    printList(dbTest);
    printList();

};

//////// Positif ////////

function valueHasilTest(antrian) {
    let indexdbTest = dbTest.findIndex(value => value.antrian == antrian);
    console.log("cek idx hsl klik rapidtest", indexdbTest);

    hasilTest = document.getElementById(`hasil-test-${antrian}`).value
    console.log("hasilTest", hasilTest)

    if (hasilTest == "positif") {
        console.log("cek idx hsl klik rapidtest", indexdbTest);

        dbPositif.push(
            new Warga(
                dbTest[indexdbTest].antrian,
                dbTest[indexdbTest].nama,
                dbTest[indexdbTest].asal,
                dbTest[indexdbTest].tujuan)
        );
        console.log("cek isi dbPositif", dbPositif);

        dbTest.splice(indexdbTest, 1);
        console.log("cek isi dbTest stlh hsl positif", dbTest);

        printList(dbPositif);
        printList(dbTest);
    } else if (hasilTest == "negatif") {
        console.log("cek idx hsl klik rapidtest", indexdbTest);

        dbNegatif.push(
            new Warga(
                dbTest[indexdbTest].antrian,
                dbTest[indexdbTest].nama,
                dbTest[indexdbTest].asal,
                dbTest[indexdbTest].tujuan)
        );
        console.log("cek isi dbNegatif", dbNegatif);

        dbTest.splice(indexdbTest, 1);
        console.log("cek isi dbTest stlh hsl negatif", dbTest);

        printList(dbNegatif);
        printList(dbTest);
    };
};

function valueHasilPengobatan(antrian) {
    let indexdbPositif = dbPositif.findIndex(value => value.antrian == antrian);

    hasilPengobatan = document.getElementById(`hasil-pengobatan-${antrian}`).value

    if (hasilPengobatan == "sembuh") {
        dbWarga.push(
            new Warga(
                dbPositif[indexdbPositif].antrian,
                dbPositif[indexdbPositif].nama,
                dbPositif[indexdbPositif].asal,
                dbPositif[indexdbPositif].tujuan)
        );

        dbPositif.splice(indexdbPositif, 1);

        printList(dbPositif);
        printList();
    } else if (hasilPengobatan == "meninggal") {

        dbPositif.splice(indexdbPositif, 1);

        printList(dbPositif);
        printList();
    };
};

//////// Negatif ////////

function handleNegatif(antrian) {
    let indexdbNegatif = dbNegatif.findIndex(value => value.antrian == antrian);

    dbWarga.push(
        new Warga(
            dbNegatif[indexdbNegatif].antrian,
            dbNegatif[indexdbNegatif].nama,
            dbNegatif[indexdbNegatif].asal,
            dbNegatif[indexdbNegatif].tujuan)
    );

    dbNegatif.splice(indexdbNegatif, 1);

    printList(dbNegatif);
    printList();
};






