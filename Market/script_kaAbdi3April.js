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
    new Product("SKU-1-126374", "https://cdn1-production-images-kly.akamaized.net/_rs9uvS4NgkmKEzerOrUdbe_QoM=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1170319/original/065589700_1457942078-a99626_kids-911_9-oreo.jpg", "Oreo", "Food", 25, 7500),
    new Product("SKU-2-198374", "https://id-live-05.slatic.net/p/cc79d0a7f3820ad5916a224e02915312.jpg_720x720q80.jpg_.webp", "Pocari", "Drink", 50, 10000)
]

let dbCart = [
    // new Cart("SKU-1-126374", "https://cdn1-production-images-kly.akamaized.net/_rs9uvS4NgkmKEzerOrUdbe_QoM=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1170319/original/065589700_1457942078-a99626_kids-911_9-oreo.jpg", "Oreo", 7500, 3)
]
console.log(dbCart)

let dbTransactions = [];
let username = "";


let selectedIdx = null;
let dataFilter = [];

/**
 * 1. Menyimpan data transaksi, setiap user berhasil bayar
 * 2. Data yang harus disimpan : username, date, totalPayment, change, detail
 * 3. reset ulang username, fieldset checkout
 * 
 */

function handleCustomer() {
    username = document.getElementById("inUsername").value;
}

//////////////////////////////////// Management Product //////////////////////////////////////////
function handleSubmit() {
    // 1. Mengambil data
    let form = document.getElementById("form-product")
    let sku = `SKU-${dbProduct.length + 1}-${Math.round(Math.random() * 1000000)}`;
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements[2].value;
    let stock = form.elements[3].value;
    let price = form.elements[4].value;

    console.log(sku, img, name, price, stock, category)
    // 2. Proteksi
    if (img == "" || name == "" || category == "null" || stock == "" || price == "") {
        alert("Isi semua data dengan benar")
    } else {
        // 3. Data disimpan kedalam dbProduct
        dbProduct.push(new Product(sku, img, name, category, parseInt(stock), parseInt(price)))
        // 4. Reset ulang input element
        form.elements[0].value = "";
        form.elements[1].value = "";
        form.elements[2].value = null;
        form.elements[3].value = "";
        form.elements[4].value = "";
    }

    printProduct();
}

function handleSave(sku) {
    let idx = dbProduct.findIndex(val => val.sku == sku);
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
        dataFilter = dbProduct.filter(val => val.sku == sku);
        printProduct(dataFilter);
    } else {
        printProduct();
    }

}

function printProduct(data = dbProduct) {
    let htmlElement = data.map((val, idx) => {
        if (selectedIdx == idx) {
            return `<tr>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td><input type="text" id="new-name" value="${val.name}"/></td>
            <td>${val.category}</td>
            <td><input type="number" id="new-stock" value="${val.stock}"/></td>
            <td><input type="number" id="new-price" value="${val.price}"/></td>
            <td><button  type="button" onclick="handleSave('${val.sku}')">Save</button>
                <button type="button" >Cancel</button>
            </td>
        </tr>`
        } else {
            return `<tr>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>${val.category}</td>
            <td>${val.stock.toLocaleString()}</td>
            <td>IDR. ${val.price.toLocaleString()}</td>
            <td><button  type="button" onclick="handleEdit(${idx})">Edit</button>
                <button type="button" onclick="handleDelete('${val.sku}')">Delete</button>
            </td>
            <td>
                <button type="button" onclick="handleBuy('${val.sku}')">🛒 Buy</button>
            </td>
        </tr>`
        }
    })
    document.getElementById("table-list").innerHTML = htmlElement.join("")
    // console.log(htmlElement)
}

function handleEdit(idx) {
    selectedIdx = idx;
    if (dataFilter.length > 0) {
        printProduct(dataFilter);
    } else {
        printProduct();
    }
}

function handleDelete(sku) {
    console.log(sku)
    let idx = dbProduct.findIndex((val) => val.sku == sku)
    console.log(idx)
    if (confirm("Yakin mau menghapus produk ini ?")) {
        dbProduct.splice(idx, 1);
        if (dataFilter.length > 0) {
            dataFilter = dbProduct.filter(val => val.sku == sku);
            printProduct(dataFilter);
        } else {
            printProduct();
        }
    }
}

printProduct();

//////////////////////////// Filter Product ///////////////////////////////

function handleFilter() {
    // 1. get value dari form filter
    let form = document.getElementById("form-filter")
    let filterName = form.elements[0].value;
    let filterMin = parseInt(form.elements[1].value);
    let filterMax = parseInt(form.elements[2].value);
    let filterCategory = form.elements[3].value;
    console.log("Cek input : ", filterName, filterMin, filterMax, filterCategory);
    // 2. proses filter data
    dataFilter = dbProduct.filter((value, index) => {
        if (filterName.length > 0) {
            return value.name.toLowerCase().includes(filterName.toLowerCase())
        } else if (filterMin >= 0 && filterMax >= 0) {
            return value.price >= filterMin && value.price <= filterMax
        } else if (filterCategory != "null") {
            return value.category == filterCategory
        }
    })

    console.log(dataFilter)

    // 3. mencetak data
    printProduct(dataFilter);

    // 4. reset form filter
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements[3].value = "null";
}

function handleReset() {
    printProduct();
    selectedIdx = null
}

////////////////////////// Manage Transaction //////////////////////////////////

function printKeranjang() {
    // total = 0;
    let htmlElement = dbCart.map((val, index) => {
        // total += val.subTotal;
        console.log(val.selected)
        return `
        <tr>
            <td><input type='checkbox' ${val.selected ? "checked" : ""} id="select-${val.sku}" onclick="handleSelect('${val.sku}')"/></td>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>IDR. ${val.price.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleDecrement('${val.sku}')">-</button>
            ${val.qty.toLocaleString()} 
            <button type="button" onclick="handleIncrement('${val.sku}')">+</button>
            </td>
            <td>IDR. ${val.subTotal.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleDeleteCart('${val.sku}')">Delete</button>
            </td>
        </tr>
        `
    })

    document.getElementById("cart-list").innerHTML = htmlElement.join("");
}

function handleSelect(sku) {
    let cartIdx = dbCart.findIndex(val => val.sku == sku);
    dbCart[cartIdx].selected = document.getElementById(`select-${sku}`).checked
    totalPayment();
}

let total = 0;
// fungsi terpisah
function totalPayment() {
    total = 0;
    dbCart.forEach(val => {
        if (val.selected) {
            total += val.subTotal
        }
    })

    document.getElementById("total").innerHTML = `Rp. ${total.toLocaleString()},-`
}

function handlePay() {
    let pay = parseInt(document.getElementById("payment").value)

    let count = pay - total
    if (count < 0) {
        document.getElementById("message").innerHTML = "Maaf, uang anda kurang ⚠️"
    } else {
        if (username) {
            let data = {
                idTransaction: dbTransactions.length + 1,
                username,
                date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
                total,
                change: count,
                detail: dbCart.filter(val => val.selected == true)
            }
            dbTransactions.push(data);
            console.table(dbTransactions);
            printTransactions()
            // menghapus product yang selected = true
            // 1. mencari data yang selectd = false
            let tempCart = dbCart.filter(val => val.selected == false)
            // 2. menyimpan datanya ke dalam cart
            dbCart = [...tempCart];
            printKeranjang();
            document.getElementById("message").innerHTML = `Kembalian anda ${count.toLocaleString()}<br/>Terima kasih ✅`
            document.getElementById("payment").value = ""
        } else {
            alert("Fill username form")
        }
    }
}

function printTransactions() {
    let omset = 0;
    document.getElementById("report").innerHTML = dbTransactions.map((val, index) => {
        omset += total;
        return `
        <tr>
        <td>${index + 1}</td>
        <td>${val.date}</td>
        <td>${val.username}</td>
        <td>${val.total}</td>
        </tr>
        `
    });
    document.getElementById("inUsername").value = "";
    document.getElementById("omset").innerHTML = "Rp." + omset.toLocaleString()
}

function handleBuy(sku) {
    console.log(sku)
    let cartIdx = dbCart.findIndex(val => val.sku == sku);
    console.log(cartIdx)
    let dataIdx = dbProduct.findIndex(val => val.sku == sku);
    if (cartIdx >= 0) {
        if (dbProduct[dataIdx].stock > 0) {
            dbCart[cartIdx].qty += 1
            dbProduct[dataIdx].stock -= 1
        } else {
            // dbProduct.splice(dataIdx, 1)
            alert("Out Of Stock")
        }
        dbCart[cartIdx].subTotal = dbCart[cartIdx].qty * dbCart[cartIdx].price
    } else {
        dbCart.push(new Cart(dbProduct[dataIdx].sku, dbProduct[dataIdx].img, dbProduct[dataIdx].name, dbProduct[dataIdx].price, 1))
        dbProduct[dataIdx].stock -= 1
    }
    printProduct()
    printKeranjang()
}

const handleIncrement = (sku) => {
    let cartIdx = dbCart.findIndex(val => val.sku == sku);
    let dataIdx = dbProduct.findIndex(val => val.sku == sku);
    if (dbProduct[dataIdx].stock > 0) {
        dbCart[cartIdx].qty += 1
        dbProduct[dataIdx].stock -= 1
    } else {
        // dbProduct.splice(dataIdx, 1)
        alert("Out Of Stock")
    }
    dbCart[cartIdx].subTotal = dbCart[cartIdx].qty * dbCart[cartIdx].price
    totalPayment();
    printProduct()
    printKeranjang()
}

const handleDecrement = (sku) => {
    let cartIdx = dbCart.findIndex(val => val.sku == sku);
    let dataIdx = dbProduct.findIndex(val => val.sku == sku);

    dbProduct[dataIdx].stock += 1
    if (dbCart[cartIdx].qty > 1) {
        dbCart[cartIdx].qty -= 1
        dbCart[cartIdx].subTotal = dbCart[cartIdx].qty * dbCart[cartIdx].price
    } else {
        dbCart.splice(cartIdx, 1)
    }
    totalPayment();
    printProduct()
    printKeranjang()
}

const handleDeleteCart = (sku) => {
    // 1. Cari index product pada keranjang
    let cartIdx = dbCart.findIndex(val => val.sku == sku);
    // 2. Cari index product pada dbProduct
    let dataIdx = dbProduct.findIndex(val => val.sku == sku);

    // 3. mengembalikan stok barang dari keranjang ke dbProduct
    dbProduct[dataIdx].stock += dbCart[cartIdx].qty;

    // 4. menghapus data product pada keranjang
    dbCart.splice(cartIdx, 1);

    printProduct();
    printKeranjang();
}

const handleClearCart = () => {
    // 1. cari sku product yang akan dihapus
    let filter = dbCart.filter(val => val.selected == true)
    // 2. hapus data pada dbcart
    filter.forEach((val) => {
        // mengembalikan qty ke stock product
        let dataIdx = dbProduct.findIndex(valProduct => valProduct.sku == val.sku)

        dbProduct[dataIdx].stock += val.qty
        // Cara 1
        dbCart.forEach((valCart, index) => {
            if (val.sku == valCart.sku) {
                dbCart.splice(index, 1)
            }
        })
        // Cara 2
        // let cartIdx = dbCart.findIndex(valCart => valCart.sku == val.sku)
        // dbCart.splice(cartIdx, 1);
    })
    printKeranjang()
    printProduct()
}

printKeranjang()