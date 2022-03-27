let dbTest = [];
let dbPositif = [];
let dbNegatif = [];

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
            <select id="hasil-tes-${this.antrian}" onchange="valueHasilTes('${this.antrian}')">
            <option value="null" selected>Pilih</option>
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
            <select id="hasil-obat-${this.antrian}" onchange="valueHasilObat('${this.antrian}')">
            <option value="null" selected>Pilih</option>
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
            <td><button type="button" onclick="handleToWarga('${this.antrian}')">To Warga</button></td>
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
    };
};

let dbWarga = [
    new Warga("A273BN", "Tanjiro", "Tokyo", "Jakarta"),
    new Warga("IOA901", "Naofumi", "Jakarta", "Bogor")
];

function printList(db = dbWarga) {
    let tableContent = db.map((value, index) => {
        return value.getInfo(db)
    });

    if (db == dbWarga) {
        tableContent = [...tableContent, ...
            [`<tr>
            <td></td>
            <td><input id="new-namaWarga" type="text" /></td>
            <td><input id="new-asalWarga" type="text" /></td>
            <td><input id="new-tujuanWarga" type="text" /></td>
            <td><button type="button" onclick="handleAntri()">Antri</button></td>
            </tr>`]];

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
    let nama = document.getElementById("new-namaWarga").value;
    let asal = document.getElementById("new-asalWarga").value;
    let tujuan = document.getElementById("new-tujuanWarga").value;
    console.log("cek data warga baru", antrian, nama, asal, tujuan);

    dbWarga.push(new Warga(antrian, nama, asal, tujuan));
    printList()
};

function handleTest(antrian) {
    let indexdbAsal = dbWarga.findIndex(value => value.antrian == antrian);

    dbTest.push(new Warga(
        dbWarga[indexdbAsal].antrian,
        dbWarga[indexdbAsal].nama,
        dbWarga[indexdbAsal].asal,
        dbWarga[indexdbAsal].tujuan
    ));

    dbWarga.splice(indexdbAsal, 1);

    printList();
    printList(dbTest);
};

function valueHasilTes(antrian) {
    let hasil = document.getElementById(`hasil-tes-${antrian}`).value;
    let indexdbAsal = dbTest.findIndex(value => value.antrian == antrian);

    if (hasil == "positif") {
        dbPositif.push(new Warga(
            dbTest[indexdbAsal].antrian,
            dbTest[indexdbAsal].nama,
            dbTest[indexdbAsal].asal,
            dbTest[indexdbAsal].tujuan
        ));
    } else if (hasil == "negatif") {
        dbNegatif.push(new Warga(
            dbTest[indexdbAsal].antrian,
            dbTest[indexdbAsal].nama,
            dbTest[indexdbAsal].asal,
            dbTest[indexdbAsal].tujuan
        ));
    }

    dbTest.splice(indexdbAsal, 1);

    printList(dbPositif);
    printList(dbNegatif);
    printList(dbTest);
};

function valueHasilObat(antrian) {
    let hasil = document.getElementById(`hasil-obat-${antrian}`).value;
    let indexdbAsal = dbPositif.findIndex(value => value.antrian == antrian);

    if (hasil == "sembuh") {
        dbWarga.push(new Warga(
            dbPositif[indexdbAsal].antrian,
            dbPositif[indexdbAsal].nama,
            dbPositif[indexdbAsal].asal,
            dbPositif[indexdbAsal].tujuan
        ));
        dbPositif.splice(indexdbAsal, 1);
    } else if (hasil == "meninggal") {
        dbPositif.splice(indexdbAsal, 1);
    }

    printList();
    printList(dbPositif);
};

function handleToWarga(antrian) {
    let indexdbAsal = dbNegatif.findIndex(value => value.antrian == antrian);

    dbWarga.push(new Warga(
        dbNegatif[indexdbAsal].antrian,
        dbNegatif[indexdbAsal].nama,
        dbNegatif[indexdbAsal].asal,
        dbNegatif[indexdbAsal].tujuan
    ));
    dbNegatif.splice(indexdbAsal, 1);

    printList();
    printList(dbNegatif);
};