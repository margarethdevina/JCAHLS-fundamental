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

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1024px-Oreo-Two-Cookies.png",
        "Oreo", "Food", 25, 7500),
    new Product("SKU-2-123456", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pocari_sweat_500ml.jpg/800px-Pocari_sweat_500ml.jpg",
        "Pocari", "Drinks", 50, 1000),
];

/** contoh gambar lain untuk tes input
 * https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Delicious_meal_of_Pizza_Hut.jpg/1024px-Delicious_meal_of_Pizza_Hut.jpg
 * Pizza
 */

let selectedIdx = null; // untuk dipakai di fungsi handleEdit()

let dataFilter = [];

////////////////////////// Manajemen Product //////////////////////////////

function handleSubmit() {
    // 1. mengambil data
    let form = document.getElementById("form-product");
    let img = form.elements[0].value;
    let name = form.elements[1].value;
    let category = form.elements["category-product"].value;
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

        console.log(dbProduct)

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
const handleDelete = (index) => {
    if (dataFilter.length > 0) {
        if (confirm("Yakin ingin menghapus produk ini?")) {
            let filteredIdx = dbProduct.findIndex((value) => {
                return value.sku == dataFilter.sku
            })
            dataFilter.splice(index,1);
            dbProduct.splice(filteredIdx,1);

            printProduct(dataFilter); // setiap ada perubahan pada database sebaiknya otomatis panggil fungsi printProduct()
            
        }
    } else {
        if (confirm("Yakin ingin menghapus produk ini?")) {
            dbProduct.splice(index, 1);
            printProduct(); // setiap ada perubahan pada database sebaiknya otomatis panggil fungsi printProduct()
            console.log(dbProduct);
        }
    }
};

// handleEdit() ❗❗
const handleEdit = (index) => {
    selectedIdx = index;
    if (dataFilter.length > 0) {
        printProduct(dataFilter);
    } else {
        printProduct();
    }
};

// handleSave() ❗❗
const handleSave = () => {
    dbProduct[index].name = document.getElementById("new-name").value;
    dbProduct[index].stock = Number(document.getElementById("new-stock").value);
    dbProduct[index].price = Number(document.getElementById("new-price").value);
    selectedIdx = null
    printProduct();
};

// cara lain untuk handleSave()
/**
 * function handleSave() {
 * let name = document.getElementById("new-name").value;
 * let stock = Number(document.getElementById("new-stock").value);
 * let price = Number(document.getElementById("new-price").value);
 * 
 * dbProduct[selectedIdx].name = name; // pakai selectedIdx karena selectedIdx itu global variabel jadi dah ga perlu argumen lagi bisa
 * dbProduct[selectedIdx].stock = stock;
 * dbProduct[selectedIdx].price = price;
 * 
 * selectedIdx = null;
 * 
 * printProduct()
 * }
 */

// handleCancel() ❗❗
const handleCancel = (index) => {
    selectedIdx = index;
    selectedIdx = null;
    printProduct();
};

////////////////////////// Filter Product //////////////////////////////

const handleFilter = () => {
    // 1. get value dari form fiter
    let form = document.getElementById("form-filter");
    let filterName = form.elements[0].value;
    let filterMin = Number(form.elements[1].value);
    let filterMax = Number(form.elements[2].value);
    let filterCategory = form.elements["filter-category"].value;

    console.log("cek input filter:", filterName, filterMin, filterMax, filterCategory); // pastikan input bisa bekerja semua baru lanjut coding

    // 2. proses filter data
    dataFilter = dbProduct.filter((value) => {
        if (filterName.length > 0) { // untuk proteksi return didapat kalau memang ada data di filter
            return value.name.toLowerCase().includes(filterName.toLowerCase()) // supaya berdasarkan contain aja ga perlu sama persis tertulis oreo
        } else if (filterMin >= 0 && filterMax != 0) {
            return value.price >= filterMin && value.price <= filterMax
        }
    })

    printProduct(dataFilter)

    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    form.elements["filter-category"].value = "null";
}

function handleReset() {
    printProduct()
}

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
            <button type="button" onclick="handleSave()">Save</button>
            <button type="button" onclick="handleCancel(${index})">Cancel</button>
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
            <button type="button" onclick="handleEdit(${index})">Edit</button>
            <button type="button" onclick="handleDelete(${index})">Delete</button>
            </td>
            </tr>`
        }
    });

    document.getElementById("table-list").innerHTML = tableContent.join("");
    console.log(tableContent);

}

printProduct();

// cara lainnya untuk printProduct() ❗❗ ✅
// function printProduct() {
//     document.getElementById("table-list").innerHTML = dbProduct.map((val, idx) => {
//         return `<tr>
//             <td>${val.sku}</td>
//             <td><img src="${val.img}" width="50px"></td>
//             <td>${val.name}</td>
//             <td>${val.category}</td>
//             <td>${val.stock.toLocaleString()}</td>
//             <td>IDR${val.price.toLocaleString()}</td>
//             <td>
//             <button type="button">Edit</button>
//             <button type="button">Delete</button>
//             </td>
//             </tr>`
//     }).join("")
// }
//