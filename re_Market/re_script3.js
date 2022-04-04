class Product {
    constructor(_sku, _product, _name, _category, _stock, _price) {
        this.sku = _sku,
            this.product = _product,
            this.name = _name,
            this.category = _category,
            this.stock = _stock,
            this.price = _price
    }
};

class Cart extends Product {
    constructor(_sku, _product, _name, _price, _qty) {
        super(_sku, _product, _name, null, null, _price),
            this.qty = _qty,
            this.subTotal = this.qty * _price,
            this.selected = false
    }
};

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ramen_and_Chahan_003.jpg/640px-Ramen_and_Chahan_003.jpg",
        "Ramen", "Food", 5, 55000),
    new Product("SKU-2-123456", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg/640px-Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg",
        "Starbucks", "Drinks", 5, 45000)
];

let selectedIdx = null;

let dbFilter = [];

let dbCart = [
    // new Cart("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ramen_and_Chahan_003.jpg/640px-Ramen_and_Chahan_003.jpg",
    //     "Ramen", 55000, 3)
];

let totalPembayaran = 0;

let dbLedger = [];

let omset = 0;

let discount = 0;

let finalPembayaran = 0;

function printList(db = dbProduct) {
    let tableContent = db.map((value, index) => {
        if (selectedIdx == index) {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.product}" width="120px" alt="img-${value.name}"/></td>
            <td><input id="newName" type="text" value="${value.name}"/></td>
            <td>${value.category}</td>
            <td><input id="newStock" type="number" value="${value.stock}" /></td>
            <td><input id="newPrice" type="number" value="${value.price}" /></td>
            <td>
            <button type="button" onclick="handleSave('${value.sku}')">Save</button>
            <button type="button" onclick="handleCancel()">Cancel</button>
            </td>
            </tr>`
        } else {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.product}" width="120px" alt="img-${value.name}"/></td>
            <td>${value.name}</td>
            <td>${value.category}</td>
            <td>${value.stock.toLocaleString()}</td>
            <td>${value.price.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleEdit('${value.sku}')">Edit</button>
            <button type="button" onclick="handleDelete('${value.sku}')">Delete</button>
            </td>
            <td><button type="button" onclick="handleBuy('${value.sku}')">🛒 Buy</button></td>
            </tr>`
        }
    }).join("")
    document.getElementById("tableList").innerHTML = tableContent
};
printList();

function handleSubmit() {
    let form = document.getElementById("formNewProduct");
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements[2].value;
    let stock = Number(form.elements[3].value);
    let price = Number(form.elements[4].value);

    if (img && name && category != "null" && stock && price) {
        let sku = `SKU-${dbProduct.length + 1}-${Math.round(Math.random() * 1e6)}`;

        dbProduct.push(new Product(sku, img, name, category, stock, price));
        printList()

    } else {
        alert(`Mohon isi lengkap data produk barunya`)
    };

    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "null";
    form.elements[3].value = "";
    form.elements[4].value = "";
};

function handleEdit(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);

    if (dbFilter.length > 0) {
        let idx_dbFilter = dbFilter.findIndex(value => value.sku == sku);
        selectedIdx = idx_dbFilter;
        printList(dbFilter);
    } else {
        selectedIdx = idx_dbProduct;
        printList();
    }
};

function handleSave(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);

    dbProduct[idx_dbProduct].name = document.getElementById("newName").value;
    dbProduct[idx_dbProduct].stock = Number(document.getElementById("newStock").value);
    dbProduct[idx_dbProduct].price = Number(document.getElementById("newPrice").value);

    selectedIdx = null;

    if (dbFilter.length > 0) {
        printList(dbFilter);
    } else {
        printList();
    }

    if (dbCart.length > 0) {
        let idx_dbCart = dbCart.findIndex(value => value.sku == sku);

        if (idx_dbCart != -1) {
            dbCart[idx_dbCart].name = dbProduct[idx_dbProduct].name;
            dbCart[idx_dbCart].price = dbProduct[idx_dbProduct].price;
            dbCart[idx_dbCart].subTotal = dbCart[idx_dbCart].qty * dbCart[idx_dbCart].price;

            printCart()
        }
    }
};

function handleCancel() {
    selectedIdx = null;

    if (dbFilter.length > 0) {
        printList(dbFilter);
    } else {
        printList();
    }
};

function handleDelete(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);

    if (dbFilter.length > 0) {
        let idx_dbFilter = dbFilter.findIndex(value => value.sku == sku);
        dbFilter.splice(idx_dbFilter, 1)
        dbProduct.splice(idx_dbProduct, 1)
        printList(dbFilter);
    } else {
        dbProduct.splice(idx_dbProduct, 1)
        printList();
    }
};

function handleSearch() {
    let form = document.getElementById("formFilterProduct");
    let name = form.elements[0].value;
    let minPrice = parseInt(form.elements[1].value);
    let maxPrice = parseInt(form.elements[2].value);
    let category = form.elements[3].value;

    dbFilter = dbProduct.filter((value => {
        if (name) {
            return value.name.toLowerCase().includes(name.toLowerCase())
        } else if (minPrice && maxPrice) {
            return value.price >= minPrice && value.price <= maxPrice
        } else if (category != "null") {
            return value.category == category
        }
    }));

    printList(dbFilter);

    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements[3].value = "null";
};

function handleReset() {
    dbFilter = [];
    selectedIdx = null;
    printList()
};

function printCart() {
    document.getElementById("tableCart").innerHTML = dbCart.map((value, index) => {
        return `<tr>
        <td><input id="select-${value.sku}" type="checkbox" ${value.selected ? "checked" : ""} onclick="handleSelect('${value.sku}')" /></td>
        <td>${value.sku}</td>
        <td><img src="${value.product}" width="120px" alt="img-${value.name}"/></td>
        <td>${value.name}</td>
        <td>${value.price.toLocaleString()}</td>
        <td>
        <button type="button" onclick="handleDecrement('${value.sku}')">➖</button>
        ${value.qty.toLocaleString()}
        <button type="button" onclick="handleIncrement('${value.sku}')">➕</button>
        </td>
        <td>${value.subTotal.toLocaleString()}</td>
        <td><button type="button" onclick="handleDeleteCart('${value.sku}')">Delete</button></td>
        </tr>`
    }).join("")
    payment()
};
printCart();

function handleSelect(sku) {
    let idx_dbCart = dbCart.findIndex(value => value.sku == sku);
    dbCart[idx_dbCart].selected = document.getElementById(`select-${sku}`).checked;
    payment()
};

function payment() {
    totalPembayaran = 0;
    dbCart.forEach(value => {
        if (value.selected == true) {
            totalPembayaran += value.subTotal
        }
    })
    document.getElementById("totalPembayaran").innerHTML = `Rp${totalPembayaran.toLocaleString()}`
    
    discount = Number(document.getElementById("discount").value);
    if (discount > 0) {
        finalPembayaran = totalPembayaran * ((100-discount)/100)
    } else {
        finalPembayaran = totalPembayaran
    }
    document.getElementById("finalPembayaran").innerHTML = `Rp${finalPembayaran.toLocaleString()}`
};

function handleClear() {
    dbProduct.forEach((valProduct, idxProduct) => {
        dbCart.forEach((valCart, idxCart) => {
            if (valCart.selected == true) {
                if (valCart.sku == valProduct.sku) {
                    valProduct.stock += valCart.qty;
                }
            }
        })
    })

    dbCart = dbCart.filter(val => val.selected == false);

    printCart();
    printList();
};

function handleBuy(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);
    let idx_dbCart = dbCart.findIndex(value => value.sku == sku);

    if (idx_dbCart != -1) {
        if (dbProduct[idx_dbProduct].stock != 0) {
            dbCart[idx_dbCart].qty++
            dbCart[idx_dbCart].subTotal = dbCart[idx_dbCart].qty * dbCart[idx_dbCart].price
            dbProduct[idx_dbProduct].stock--
        } else if (dbProduct[idx_dbProduct].stock == 0) {
            alert(`Stok habis`)
        }
    } else {
        dbCart.push(new Cart(
            dbProduct[idx_dbProduct].sku,
            dbProduct[idx_dbProduct].product,
            dbProduct[idx_dbProduct].name,
            dbProduct[idx_dbProduct].price,
            1
        ));
        dbProduct[idx_dbProduct].stock--
    }
    printCart()
    printList()
    console.table(dbCart)
};


function handleIncrement(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);
    let idx_dbCart = dbCart.findIndex(value => value.sku == sku);

    if (dbProduct[idx_dbProduct].stock != 0) {
        dbCart[idx_dbCart].qty++
        dbCart[idx_dbCart].subTotal = dbCart[idx_dbCart].qty * dbCart[idx_dbCart].price
        dbProduct[idx_dbProduct].stock--
    } else if (dbProduct[idx_dbProduct].stock == 0) {
        alert(`Stok habis`)
    }

    printCart()
    printList()
};

function handleDecrement(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);
    let idx_dbCart = dbCart.findIndex(value => value.sku == sku);

    if (dbCart[idx_dbCart].qty != 1) {
        dbProduct[idx_dbProduct].stock++
        dbCart[idx_dbCart].qty--
        dbCart[idx_dbCart].subTotal = dbCart[idx_dbCart].qty * dbCart[idx_dbCart].price
    } else if (dbCart[idx_dbCart].qty == 1) {
        dbProduct[idx_dbProduct].stock++
        dbCart.splice(idx_dbCart, 1)
    }
    printCart()
    printList()
};

function handleDeleteCart(sku) {
    let idx_dbProduct = dbProduct.findIndex(value => value.sku == sku);
    let idx_dbCart = dbCart.findIndex(value => value.sku == sku);

    dbProduct[idx_dbProduct].stock += dbCart[idx_dbCart].qty
    dbCart.splice(idx_dbCart, 1)

    printCart()
    printList()
};

function handleCheckOut() {
    let username = document.getElementById("username").value;
    let uangMasuk = Number(document.getElementById("uangMasuk").value);

    if (username) {
        if (uangMasuk < finalPembayaran) {
            document.getElementById("message").innerHTML = "Pembayaran belum berhasil, uang yang dimasukkan kurang dari total pembayaran yang tertera ⚠️";
        } else if (uangMasuk >= finalPembayaran) {
            let kembalian = uangMasuk - totalPembayaran;
            document.getElementById("message").innerHTML = `Pembayaran berhasil, kembalian Anda Rp${kembalian.toLocaleString()}`;

            let currentDate = new Date();
            dbLedger = [...dbLedger, ...[{
                username,
                date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
                totalPembayaran,
                discount,
                detail: dbCart.filter(value => value.selected == true)
            }]];
            console.log("isi dbLedger: ", dbLedger);

            omset = 0;
            document.getElementById("tableLedger").innerHTML = dbLedger.map((value, index) => {
                omset += value.totalPembayaran
                return `<tr>
                <td>${index + 1}</td>
                <td>${value.username}</td>
                <td>${value.date}</td>
                <td>${value.totalPembayaran.toLocaleString()}</td>
                <td>${value.discount}%</td>
                </tr>`
            }).join("")
            document.getElementById("omset").innerHTML = `Rp${omset.toLocaleString()}`;

            dbCart = dbCart.filter(value => value.selected == false);

            document.getElementById("username").value = "";
            document.getElementById("uangMasuk").value = "";

            printCart();
        }
    } else {
        alert(`Masukkan username terlebih dahulu`);
    }
};

function handleCancelCheckOut() {
    dbCart.forEach((value, index) => {
        for (i = 0; i < dbProduct.length; i++) {
            if (value.sku == dbProduct[i].sku) {
                dbProduct[i].stock += value.qty
            }
        }
    });
    dbCart = [];
    printCart();
    printList();
};