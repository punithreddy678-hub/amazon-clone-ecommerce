const products = [

    {
        id:1,
        name:"Lunar ANC Headphone",
        price:299,
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id:2,
        name:"Bluetooth Speaker",
        price:150,
        image:"https://images.unsplash.com/photo-1545454675-3531b543be5d"
    },

    {
        id:3,
        name:"Wireless Earbuds",
        price:99,
        image:"https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },

    {
        id:4,
        name:"Smart Watch",
        price:199,
        image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id:5,
        name:"Gaming Headset",
        price:249,
        image:"https://images.unsplash.com/photo-1599669454699-248893623440"
    }

];

const productGrid =
    document.getElementById("productGrid");

function displayProducts(items){

    if(!productGrid) return;

    productGrid.innerHTML = "";

    items.forEach(product => {

        productGrid.innerHTML += `

        <div class="product-card">

            <img src="${product.image}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>$${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        </div>

        `;

    });

}

/* INITIAL LOAD */

displayProducts(products);

/* SEARCH FUNCTION */

function searchProducts(){

    const searchInput =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredProducts =
        products.filter(product =>

            product.name
            .toLowerCase()
            .includes(searchInput)

        );

    displayProducts(filteredProducts);

}