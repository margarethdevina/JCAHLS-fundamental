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

let selectedIdx = null;

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ramen_and_Chahan_003.jpg/640px-Ramen_and_Chahan_003.jpg",
        "Ramen", "Food", 5, 75000),
    new Product("SKU-2-123456", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg/640px-Irish_Cream_Cold_Brew_at_Starbucks_-_2021-11-15_-_Sarah_Stierch.jpg",
        "Starbucks", "Drinks", 5, 55000),
];


function handleSubmit() {
    let form = document.getElementById("form-product");
    let sku = `SKU-${dbProduct.length + 1}-${Math.floor(Math.random() * 1000000)}`
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements["category-product"].value;
    let stock = Number(form.elements[3].value);
    let price = Number(form.elements[4].value);

    if (img == "" || name == "" || category == "null" || stock == 0 || price == 0) {
        alert(`Tolong isi form dengan lengkap`)
    } else {
        dbProduct.push(new Product(sku, img, name, category, stock, price))
    }

    printProduct();

    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements["category-product"].value = "null";
    form.elements[3].value = "";
    form.elements[4].value = "";
};

function handleDelete(index) {
    if (confirm("Yakin ingin menghapus produk ini?")) {
        dbProduct.splice(index, 1)
    };
    printProduct();
}

function handleEdit(index) {
    selectedIdx = index;
    printProduct();
}

function printProduct() {
    let tableContent = dbProduct.map((value, index) => {
        if (selectedIdx == index) {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width="120px" /></td>
            <td><input type="text" id="new-name-product" value="${value.name}" /></td>
            <td>${value.category}</td>
            <td><input type="number" id="new-stock-product" value="${value.stock}" /></td>
            <td><input type="number" id="new-price-product" value="${value.price}" /></td>
            <td>
            <button type="button" onclick="handleSave(${index})">Save</button>
            <button type="button" onclick="handleCancel(${index})">Cancel</button></td>
            </tr>`
        } else {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width="120px" /></td>
            <td>${value.name}</td>
            <td>${value.category}</td>
            <td>${value.stock.toLocaleString()}</td>
            <td>IDR${value.price.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleEdit(${index})">Edit</button>
            <button type="button" onclick="handleDelete(${index})">Delete</button></td>
            </tr>`
        }
    })
    document.getElementById("table-list").innerHTML = tableContent.join("")
};

printProduct();

