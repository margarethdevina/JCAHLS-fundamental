class Product {
    constructor(_sku, _img, _name, _category, _stock, _price) {
        this.sku = _sku;
        this.img = _img;
        this.name = _name;
        this.category = _category;
        this.stock = _stock;
        this.price = _price;
    }
}

class Cart extends Product {
    constructor(_sku, _img, _name, _price, _qty) {
        super(_sku, _img, _name, null, null, _price)
        this.qty = _qty;
        this.subTotal = _price * _qty;
        this.selected = false;
    }
}

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1024px-Oreo-Two-Cookies.png",
        "Oreo", "Food", 25, 7500),
    new Product("SKU-2-123456", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pocari_sweat_500ml.jpg/800px-Pocari_sweat_500ml.jpg",
        "Pocari", "Drinks", 50, 1000),
];

let dbCart = [
    // new Cart("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1024px-Oreo-Two-Cookies.png",
    //     "Oreo", 7500, 3),
];

let selectedIdx = null; // untuk dipakai di fungsi handleEdit()

let dataFilter = [];

let totalBayar = 0;

let totalAfterDisc = 0;

let discount = 0;

function printProduct(data = dbProduct) {
    let tableContent = data.map((value, index) => {
        if (selectedIdx == index) {
            // handleSave() bisa dibuat tanpa argumen karena selectedIdx didalam fungsinya itu sudah global variabel
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width="50px"></td>
            <td><input type="text" id="new-name" value="${value.name}"/></td>
            <td>${value.category}</td>
            <td><input type="number" id="new-stock" value="${value.stock}"/></td>
            <td><input type="number" id="new-price" value="${value.price}"/></td>
            <td>
            <button type="button" onclick="handleSave('${value.sku}')">Save</button>
            <button type="button" onclick="handleCancel('${value.sku}')">Cancel</button>
            </td>
            </tr>`
        } else {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width="50px"></td>
            <td>${value.name}</td>
            <td>${value.category}</td>
            <td>${value.stock.toLocaleString()}</td>
            <td>IDR${value.price.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleEdit('${value.sku}')">Edit</button>
            <button type="button" onclick="handleDelete('${value.sku}')">Delete</button>
            </td>
            <td>
            <button type="button" onclick="handleBuy('${value.sku}')"> ???? Buy</button>
            </td>
            </tr>`
        }
    });

    document.getElementById("table-list").innerHTML = tableContent.join("");
    // console.log(tableContent);

}

printProduct();

////////////////////////// Manajemen Product //////////////////////////////

function handleSubmit() {
    // 1. mengambil data
    let form = document.getElementById("form-product");
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements[2].value;
    let stock = Number(form.elements[3].value);
    let price = Number(form.elements[4].value);

    // 2. proteksi, jika ada 1 bagian yg kosong, harus ada alert "Isi semua form"

    if (img == "" || name == "" || category == "null" || stock == 0 || price == 0) {
        alert(`Tolong isi lengkap semua form`);
    } else {

        // 3. Data disimpan kedalam dbProduct

        let random = ``;
        for (i = 1; i <= 6; i++) {
            random += `${Math.floor(Math.random() * 10)}`
        }
        console.log(random)

        const sku = () => {
            return `SKU-${dbProduct.length + 1}-${random}`
        }

        dbProduct.push(new Product(sku(), img, name, category, stock, price))

    }

    // 4. Reset ulang input elemen
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements["category-product"].value = null;
    form.elements[3].value = "";
    form.elements[4].value = "";

    printProduct();
}

/** cara lainnya untuk handleSubmit() ?????? ???
 * function handleSubmit() {
 * let form = document.getElementById("form-product");
 * let sku = `SKU-${dbProduct.length+1}-${Math.round(Math.random()*1e6)}`;
 * let img = form.elements[0].value;
 * let name = form.elements[1].value;
 * let category = form.elements[2].value;
 * let stock = form.elements[3].value;
 * let price = form.elements[4].value;
 * 
 * if (img==""||name==""||category=="null"||stock==""||price==""){
 * alert(`Isi semua data dengan benar`)
 * } else {
 * dbProduct.push(new Product(sku,img,name,category,parseInt(stock),parseInt(price)))
 * form.elements[0].value = "";
 * form.elements[1].value = "";
 * form.elements[2].value = null;
 * form.elements[3].value = "";
 * form.elements[4].value = "";
 * }
 * }
 */

// handleDelete() ??????
function handleDelete(sku) {
    console.log(sku)
    let idx = dbProduct.findIndex((value) => value.sku == sku)
    console.log(idx)
    if (confirm("Yakin mau menghapus produk ini ?")) {
        dbProduct.splice(idx, 1);
        if (dataFilter.length > 0) {
            dataFilter = dbProduct.filter(value => value.sku == sku);
            printProduct(dataFilter);
        } else {
            printProduct();
        }
    }
}

// handleEdit() ??????
const handleEdit = (sku) => {
    if (dataFilter.length > 0) {
        selectedIdx = dataFilter.findIndex(value => value.sku == sku);
        console.log("index produk yg diedit", selectedIdx);
        printProduct(dataFilter);
    } else {
        selectedIdx = dbProduct.findIndex(value => value.sku == sku);
        console.log("index produk yg diedit", selectedIdx);
        printProduct();
    }
};

// handleSave() ??????
function handleSave(sku) {
    let idx = dbProduct.findIndex(value => value.sku == sku);
    // 1. ambil value dari form
    let name = document.getElementById("new-name").value;
    let stock = parseInt(document.getElementById("new-stock").value);
    let price = parseInt(document.getElementById("new-price").value);

    // 2. menyimpan data ke dbProduct berdasarkan selectedIdx
    dbProduct[idx].name = name;
    dbProduct[idx].stock = stock;
    dbProduct[idx].price = price;

    // 3. selectedIdx di reset
    selectedIdx = null;

    // 4. mencetak ulang table datanya
    if (dataFilter.length > 0) {
        dataFilter = dbProduct.filter(value => value.sku == sku);
        printProduct(dataFilter);
    } else {
        printProduct();
    }

    let skudbCart = dbCart.map(value => value.sku);
    let indexdbCart = dbCart.findIndex(value => value.sku == sku);
    if (skudbCart.includes(sku)) {
        dbCart[indexdbCart].name = dbProduct[idx].name;
        dbCart[indexdbCart].price = dbProduct[idx].price;
        dbCart[indexdbCart].subTotal = dbCart[indexdbCart].price * dbCart[indexdbCart].qty;
        printKeranjang()
    }
}

// handleCancel() ??????
const handleCancel = (sku) => {
    selectedIdx = dataFilter.findIndex(value => value.sku == sku);
    console.log("index saat klik cancel", selectedIdx);

    if (selectedIdx == -1) {
        printProduct();
    } else {
        selectedIdx = null;
        printProduct(dataFilter);
    }
};

////////////////////////// Filter Product //////////////////////////////

const handleFilter = () => {
    // 1. get value dari form fiter
    let form = document.getElementById("form-filter");
    let filterName = form.elements[0].value;
    let filterMin = Number(form.elements[1].value); // parseInt akan ubah false jadi NaN yang berarti false
    let filterMax = Number(form.elements[2].value);
    let filterCategory = form.elements[3].value;

    console.log("cek input filter:", filterName, filterMin, filterMax, filterCategory); // pastikan input bisa bekerja semua baru lanjut coding

    // 2. proses filter data
    dataFilter = dbProduct.filter((value) => {
        if (filterName.length > 0) { // untuk proteksi return didapat kalau memang ada data di filter
            return value.name.toLowerCase().includes(filterName.toLowerCase()) // supaya berdasarkan contain aja ga perlu sama persis tertulis oreo
        } else if (filterMin > 0 && filterMax > 0) {
            return value.price >= filterMin && value.price <= filterMax
        } else if (filterCategory != "null") {
            return value.category == filterCategory
        }
    })

    printProduct(dataFilter)

    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements["filter-category"].value = "null";
}

function handleReset() {
    dataFilter = [];
    selectedIdx = null;
    printProduct();
};

/////////////////////// Manage Transaction ///////////////////////

function printKeranjang() {
    let htmlElement = dbCart.map((value, index) => {
        return `<tr>
        <td><input id="select-${value.sku}" ${value.selected ? "checked" : ""} type="checkbox" onclick="handleSelect('${value.sku}')"/></td>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="50px"></td>
        <td>${value.name}</td>
        <td>IDR${value.price.toLocaleString()}</td>
        <td>
        <button type="button" onclick="handleDecrement('${value.sku}')">???</button>
        ${value.qty.toLocaleString()}
        <button type="button" onclick="handleIncrement('${value.sku}')">???</button>
        </td>
        <td>${value.subTotal.toLocaleString()}</td>
        <td>
        <button type="button" onclick="handleDeleteCart('${value.sku}')">Delete</button>
        </td>
        </tr>`
    })

    totalPayment();
    document.getElementById("cart-list").innerHTML = htmlElement.join("");
};
printKeranjang();

function handleBuy(sku) {

    let index = dbProduct.findIndex(value => value.sku == sku)

    let skudbCart = dbCart.map(value => value.sku)
    // console.log(skudbCart)

    if (skudbCart.includes(sku)) {
        // console.log("ADA")
        let idxSkuProductBought = dbCart.findIndex(value => value.sku == sku)
        // console.log(idxSkuProductBought)
        if (dbProduct[index].stock == 0) { //dbCart[idxSkuProductBought].qty
            alert("Jumlah stok yang ingin dibeli sudah maksimal")
            // dbProduct.splice(index, 1) // ini hard delete
        } else {
            dbCart[idxSkuProductBought].qty += 1
            // console.log(dbCart[idxSkuProductBought].qty)

            dbCart[idxSkuProductBought].subTotal = dbCart[idxSkuProductBought].price * dbCart[idxSkuProductBought].qty;

            dbProduct[index].stock -= 1
        }
    } else {
        // console.log("GA ADA")
        let newCart = new Cart(
            dbProduct[index].sku,
            dbProduct[index].img,
            dbProduct[index].name,
            dbProduct[index].price,
            1);
        // console.log(newCart)

        dbCart.push(newCart);
        // console.log(dbCart)

        dbProduct[index].stock -= 1
    }
    printKeranjang()
    printProduct()
}

function handleIncrement(sku) {
    let index = dbProduct.findIndex(value => value.sku == sku)

    let skudbCart = dbCart.map(value => value.sku)

    if (skudbCart.includes(sku)) {
        let idxSkuProductBought = dbCart.findIndex(value => value.sku == sku)
        if (dbProduct[index].stock == 0) {
            alert("Jumlah stok yang ingin dibeli sudah maksimal")
            // dbProduct.splice(index, 1) // ini hard delete
        } else {
            dbCart[idxSkuProductBought].qty += 1

            dbCart[idxSkuProductBought].subTotal = dbCart[idxSkuProductBought].price * dbCart[idxSkuProductBought].qty;

            dbProduct[index].stock -= 1
        }
    }
    printKeranjang()
    printProduct()
};

function handleDecrement(sku) {
    let indexCartDeleted = dbCart.findIndex(value => value.sku == sku)

    let indexdbProduct = dbProduct.findIndex(value => value.sku == sku)

    if (dbCart[indexCartDeleted].qty == 1) {
        dbCart.splice(indexCartDeleted, 1)
        dbProduct[indexdbProduct].stock += 1
    } else {
        dbCart[indexCartDeleted].qty -= 1
        dbCart[indexCartDeleted].subTotal = dbCart[indexCartDeleted].price * dbCart[indexCartDeleted].qty;

        dbProduct[indexdbProduct].stock += 1
    }
    printKeranjang()
    printProduct()
};

function handleDeleteCart(sku) {

    let indexCartDeleted = dbCart.findIndex(value => value.sku == sku)

    let indexdbProduct = dbProduct.findIndex(value => value.sku == sku)

    dbProduct[indexdbProduct].stock += dbCart[indexCartDeleted].qty
    dbCart.splice(indexCartDeleted, 1)

    printKeranjang()
    printProduct()
};

dbUser = [];

let dateNow = new Date();

class User {
    constructor(_username, _totalBayar, _discount) {
        this.username = _username
        this.date = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`
        this.totalBayar = _totalBayar
        this.discount = _discount
        this.detail = dbCart.filter(val => val.selected == true);
    }
};

function handleSelect(sku) {
    let cartIdx = dbCart.findIndex(val => val.sku == sku);
    dbCart[cartIdx].selected = document.getElementById(`select-${sku}`).checked;

    totalPayment()
};

function totalPayment() {
    discount = Number(document.getElementById("discount").value);
    totalBayar = 0;
    totalAfterDisc = 0;
    
    dbCart.forEach(val => {
        if (val.selected) {
            totalBayar += val.subTotal
        }
    })
    document.getElementById("totalBayar").innerHTML = `Rp${totalBayar.toLocaleString()}`;
    
    if (discount>0){
        totalAfterDisc = totalBayar * ((100-discount)/100)
    } else {
        totalAfterDisc = totalBayar
    }
    document.getElementById("totalAfterDisc").innerHTML = `Rp${totalAfterDisc.toLocaleString()}`;
};

let omset = 0;

function handleCheckOut() {
    omset = 0;
    let username = document.getElementById("username").value;
    let uangMasuk = parseInt(document.getElementById("uangMasuk").value);
    let totalKembalian = uangMasuk - totalAfterDisc;

    if (username) {
        if (uangMasuk < totalAfterDisc) {
            document.getElementById("uangMasuk").value = "";
            document.getElementById("message").innerHTML = "Maaf, uang anda kurang ??????"
        } else if (uangMasuk >= totalAfterDisc) {
            dbUser.push(new User(username, totalBayar, discount))
            console.table(dbUser)

            // menghapus product yg selected = true
            // 1. mencari data yang selected == false
            let tempCart = dbCart.filter(val => val.selected == false);
            // 2. menyimpan datanya ke dalam cart
            dbCart = [...tempCart];

            printKeranjang()
            document.getElementById("discount").value = "";
            document.getElementById("uangMasuk").value = "";
            document.getElementById("message").innerHTML = `Kembalian anda ${totalKembalian.toLocaleString()}<br/>Terima kasih ???`;
        }
    } else {
        alert(`Checkout gagal, masukkan username terlebih dahulu`)
    }

    document.getElementById("username").value = "";

    document.getElementById("ledger").innerHTML = dbUser.map((value, index) => {
        omset += value.totalBayar
        return `<tr>
        <td>${index + 1}</td>
        <td>${value.username}</td>
        <td>${value.date}</td>
        <td>${value.totalBayar.toLocaleString()}</td>
        <td>${value.discount.toString()}%</td>
        </tr>`
    }).join("")

    document.getElementById("omset").innerHTML = omset.toLocaleString();
}

function handleReject() {

    dbCart.map((value) => {
        let sku = value.sku
        let indexdbProduct = dbProduct.findIndex(val => val.sku == sku)

        dbProduct[indexdbProduct].stock += value.qty
    })

    dbCart = [];
    printKeranjang()
    printProduct()
}

function handleClearCart() {
    // 1. cari sku product yg akan dihapus
    let filter = dbCart.filter(val => val.selected == true);
    // 2. hapus data pada dbCart
    filter.forEach((val) => {
        // mengembalikan quantity ke stok product
        let idx_dbProduct = dbProduct.findIndex(valProduct => valProduct.sku == val.sku);

        dbProduct[idx_dbProduct].stock += val.qty

        // cara pertama
        dbCart.forEach((valCart, indexCart) => {
            if (val.sku == valCart.sku) {
                dbCart.splice(indexCart, 1)
            }
        })
    })

    // cara kedua
    // let cartIdx = dbCart.findIndex(valCart => valCart.sku == val.sku)
    // dbCart.splice(cartIdx, 1)
    // })
    printKeranjang()
    printProduct()
};