const allProducts = [

{
    id:1,
    name:"Sony WH-1000XM5",
    category:"Headphones",
    price:"₹29,999",

    image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
    id:2,
    name:"JBL Flip 6",
    category:"Speakers",
    price:"₹8,999",

    image:
    "https://images.unsplash.com/photo-1545454675-3531b543be5d"
},

{
    id:3,
    name:"Apple AirPods Pro",
    category:"Earbuds",
    price:"₹24,999",

    image:
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46"
},

{
    id:4,
    name:"Apple Watch Ultra",
    category:"Smart Watches",
    price:"₹89,999",

    image:
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
}

];

const productsContainer =
document.getElementById("products");

function displayProducts(items){

    if(!productsContainer) return;

    productsContainer.innerHTML = "";

    items.forEach(product=>{

        productsContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" />

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <div class="price">
                    ${product.price}
                </div>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        </div>

        `;
    });
}

displayProducts(allProducts);