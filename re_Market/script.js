class Product {
    constructor(_sku, _img, _name, _category, _stock, _price) {
        this.sku = _sku;
        this.img = _img;
        this.name = _name;
        this.category = _category;
        this.stock = _stock;
        this.price = _price;
    }
};

let dbProduct = [
    new Product("SKU-1-123777", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/New_pizza_in_pizza_hut_of_hong_kong.jpg/1200px-New_pizza_in_pizza_hut_of_hong_kong.jpg?20200612162649",
        "Pizza", "Food", 20, 5000),
    new Product("SKU-2-111789", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/NCI_Visuals_Food_Beer_cut.jpg/640px-NCI_Visuals_Food_Beer_cut.jpg",
        "Beer", "Drinks", 15, 7000)
];

let dbFilter = [];

let selectedIndex = null;

console.log("isi awal db", dbProduct);

function printProduct(database = dbProduct) {
    let tableContent = database.map((value, index) => {
        if (selectedIndex == index) {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width="75px" /></td>
            <td><input id="new-name-product" type="text" value="${value.name}" /></td>
            <td>${value.category}</td>
            <td><input id="new-stock-product" type="number" value="${value.stock}" /></td>
            <td><input id="new-price-product" type="number" value="${value.price}" /></td>
            <td>
            <button type="button" onclick="handleSave()">Save</button>
            <button type="button" onclick="handleCancel()">Cancel</button>
            </td>
            </tr>`
        } else {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width="75px" /></td>
            <td>${value.name}</td>
            <td>${value.category}</td>
            <td>${value.stock.toLocaleString()}</td>
            <td>IDR${value.price.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleEdit('${value.sku}')">Edit</button>
            <button type="button" onclick="handleDelete('${value.sku}')">Delete</button>
            </td>
            </tr>`
        }
    })
    document.getElementById("table-list").innerHTML = tableContent.join("")
};

printProduct();

//////// Manajemen Produk ////////

function handleSubmit() {
    // 1. Tampung Elemen
    let form = document.getElementById("form-product");
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements["category-product"].value;
    let stock = Number(form.elements[3].value);
    let price = Number(form.elements[4].value);
    console.log("cek hasil submit", img, name, category, stock, price);
    // 2. Proteksi harus isi lengkap semua input, semua terisi berarti database diupdate
    let sku = `SKU-${dbProduct.length + 1}-${Math.floor(Math.random() * 1000000)}`
    if (img == "" || name == "" || category == "null" || stock == 0 || price == 0) {
        alert(`Tolong isi semua pertanyaan`)
    } else {
        dbProduct.push(new Product(sku, img, name, category, stock, price));
    }
    console.log("isi db setelah tambahan produk", dbProduct);
    printProduct()
    // 3. Reset ulang form setelah submit
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements["category-product"].value = "null";
    form.elements[3].value = "";
    form.elements[4].value = "";
};

function handleDelete(sku) {
    let indexdbProduct = dbProduct.findIndex((value => value.sku == sku));
    console.log("index produk yg di delete", indexdbProduct);

    if (confirm(`Anda yakin ingin menghapus produk ini? 😉`)) {
        dbProduct.splice(indexdbProduct, 1)
    }
    console.log("isi db setelah delete", dbProduct);
    printProduct();
};

function handleEdit(sku) {
    if (dbFilter.length > 0) {
        selectedIndex = dbFilter.findIndex((value => value.sku == sku));
        console.log("index produk yg diedit", selectedIndex);
        printProduct(dbFilter);
    } else {
        selectedIndex = dbProduct.findIndex((value => value.sku == sku));
        console.log("index produk yg diedit", selectedIndex);
        printProduct();
    }
};

function handleSave() {
    dbProduct[selectedIndex].name = document.getElementById("new-name-product").value;
    dbProduct[selectedIndex].stock = Number(document.getElementById("new-stock-product").value);
    dbProduct[selectedIndex].price = Number(document.getElementById("new-price-product").value);
    selectedIndex = null;
    printProduct();
};

function handleCancel() {
    selectedIndex = null;
    printProduct();
};

//////// Fitur Filter ////////

function handleSearch() {
    // 1. Tampung elemen
    let form = document.getElementById("form-filter");
    let name = form.elements[0].value;
    let minPrice = parseInt(form.elements[1].value);
    let maxPrice = parseInt(form.elements[2].value);
    let category = form.elements["category-filter"].value;
    console.log("cek isi filter", name, minPrice, maxPrice, category);

    // 2. Buat filter, untuk name dibuat case insensitive dan bersifat contain
    if (name != "") {
        dbFilter = dbProduct.filter((value) => {
            return value.name.toLowerCase().includes(name.toLowerCase())
        })
    } else if (minPrice >= 0 && maxPrice >= 0) {
        dbFilter = dbProduct.filter((value) => {
            return value.price >= minPrice && value.price <= maxPrice
        })
    } else if (category != "null") {
        dbFilter = dbProduct.filter((value) => {
            return value.category == category
        })
    }
    console.log("isi db filter", dbFilter);
    printProduct(dbFilter);

    // 3. Reset ulang form setelah search
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements["category-filter"].value = "null";
};

function handleReset() {
    printProduct();
};

//////// Manajemen Cart ////////

