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
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/New_pizza_in_pizza_hut_of_hong_kong.jpg/1200px-New_pizza_in_pizza_hut_of_hong_kong.jpg?20200612162649",
        "Pizza", "Food", 10, 2000),
    new Product("SKU-2-123456", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/NCI_Visuals_Food_Beer_cut.jpg/640px-NCI_Visuals_Food_Beer_cut.jpg",
        "Beer", "Drinks", 10, 3000)
]

function printProduct() {
    let tableContent = dbProduct.map((value, index) => {
        return `<tr>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="90px" /></td>
        <td>${value.name}</td>
        <td>${value.category}</td>
        <td>${value.stock.toLocaleString()}</td>
        <td>IDR${value.price.toLocaleString()}</td>
        <td>
        <button type="button" onclick="handleEdit()">Edit</button>
        <button type="button" onclick="handleDelete()">Edit</button>
        </td>
        </tr>`
    })
    document.getElementById("table-list").innerHTML = tableContent.join("")
}

printProduct()