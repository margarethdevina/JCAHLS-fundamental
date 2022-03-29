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
    }
}

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1024px-Oreo-Two-Cookies.png",
        "Oreo", "Food", 25, 7500),
    new Product("SKU-2-123456", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pocari_sweat_500ml.jpg/800px-Pocari_sweat_500ml.jpg",
        "Pocari", "Drinks", 50, 1000),
];

let dbCart = [
    new Cart("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1024px-Oreo-Two-Cookies.png",
        "Oreo", 7500, 3),
];

let selectedIdx = null; // untuk dipakai di fungsi handleEdit()

let dataFilter = [];

let totalBayar = 0;

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
            <button type="button" onclick="handleBuy('${value.sku}')"> 🛒 Buy</button>
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

/** cara lainnya untuk handleSubmit() ❗❗ ✅
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

// handleDelete() ❗❗
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

// handleEdit() ❗❗
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

// handleSave() ❗❗
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

// handleCancel() ❗❗
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
        <td>${index + 1}</td>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="50px"></td>
        <td>${value.name}</td>
        <td>IDR${value.price.toLocaleString()}</td>
        <td>${value.qty.toLocaleString()}</td>
        <td>${value.subTotal.toLocaleString()}</td>
        <td>
        <button type="button" onclick="handleDeleteCart('${value.sku}')">Delete</button>
        </td>
        </tr>`
    })

    totalBayar = 0
    dbCart.map(value => totalBayar += value.subTotal);
    document.getElementById("cart-list").innerHTML = htmlElement.join("");
    document.getElementById("totalBayar").innerHTML = totalBayar.toLocaleString();
}

printKeranjang()

function handleBuy(sku) {

    let index = dbProduct.findIndex(value => value.sku == sku)

    let skudbCart = dbCart.map(value => value.sku)
    console.log(skudbCart)

    if (skudbCart.includes(sku)) {
        console.log("ADA")
        let idxSkuProductBought = dbCart.findIndex(value => value.sku == sku)
        console.log(idxSkuProductBought)
        if (dbProduct[index].stock == 0) { //dbCart[idxSkuProductBought].qty
            alert("Jumlah stok yang ingin dibeli sudah maksimal")
            // dbProduct.splice(index, 1) // ini hard delete
        } else {
            dbCart[idxSkuProductBought].qty += 1
            console.log(dbCart[idxSkuProductBought].qty)

            dbCart[idxSkuProductBought].subTotal = dbCart[idxSkuProductBought].price * dbCart[idxSkuProductBought].qty;

            dbProduct[index].stock -= 1
        }
    } else {
        console.log("GA ADA")
        let newCart = new Cart(
            dbProduct[index].sku,
            dbProduct[index].img,
            dbProduct[index].name,
            dbProduct[index].price,
            1);
        console.log(newCart)

        dbCart.push(newCart);
        console.log(dbCart)

        dbProduct[index].stock -= 1
    }
    printKeranjang()
    printProduct()
}

function handleDeleteCart(sku) {
    console.log(sku)

    let indexCartDeleted = dbCart.findIndex(value => value.sku == sku)
    console.log(indexCartDeleted)

    let indexdbProduct = dbProduct.findIndex(value => value.sku == sku)

    if (dbCart[indexCartDeleted].qty == 1) {
        dbCart.splice(indexCartDeleted, 1)
        dbProduct[indexdbProduct].stock += 1
    } else {
        dbCart[indexCartDeleted].qty -= 1
        dbCart[indexCartDeleted].subTotal = dbCart[indexCartDeleted].price * dbCart[indexCartDeleted].qty;
        console.log(dbCart)

        dbProduct[indexdbProduct].stock += 1
    }
    printKeranjang()
    printProduct()
};

/**
 * buat fieldset berisi total pembayaran, uang masuk, button check out
 * saat pembelian berhasil:
 * - ada kembalian jika uang masuk > total pembayaran
 * - isi cart list hilang
 * 
 * By default semua subtotal produk di cart di sum dan masuk ke totalPembayaran
 * 
 * function handleCheckOut(){
 * INPUT uangMasuk
 * if uangMasuk >= totalBayar
 *  dbCart = []
 *  printCart()
 *  totalKembalian = uangMasuk - totalBayar
 * else
 *  alert uangMasuk kurang
 *  INPUT direset
 * }
 */

let totalPembayaran = 0

function handleCheckOut() {
    console.log(totalBayar);
    
    totalPembayaran += totalBayar;
    console.log(totalPembayaran);

    let uangMasuk = parseInt(document.getElementById("uangMasuk").value);
    console.log(uangMasuk);
    
    let totalKembalian = uangMasuk - totalBayar;
    
    if (uangMasuk < totalBayar) {
        alert(`Uang yang dimasukkan kurang`);
        document.getElementById("uangMasuk").value = "";
        totalPembayaran = 0
    } else if (uangMasuk >= totalBayar) {
        dbCart = [];
        document.getElementById("totalKembalian").innerHTML = totalKembalian.toLocaleString();
        printKeranjang()
        document.getElementById("totalBayar").innerHTML = totalPembayaran.toLocaleString();
    }
}
