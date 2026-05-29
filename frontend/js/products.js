const products = [

{
    id:1,
    name:"Premium Headphones",
    price:4999,
    oldPrice:6999,
    rating:5,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200"
},

{
    id:2,
    name:"Gaming Headset",
    price:3999,
    oldPrice:5999,
    rating:4,
    image:"https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1200"
},

{
    id:3,
    name:"Wireless Earbuds",
    price:2999,
    oldPrice:4499,
    rating:5,
    image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?q=80&w=1200"
},

{
    id:4,
    name:"Bluetooth Speaker",
    price:2499,
    oldPrice:3999,
    rating:4,
    image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200"
},

{
    id:5,
    name:"Smart Watch",
    price:5499,
    oldPrice:7999,
    rating:5,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200"
},

{
    id:6,
    name:"Mechanical Keyboard",
    price:4299,
    oldPrice:5999,
    rating:4,
    image:"https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1200"
}

];

const productsContainer =
document.getElementById(
    "productsContainer"
);

products.forEach(product=>{

productsContainer.innerHTML += `

<div class="product-card">

<div class="discount-badge">

SALE

</div>

<div
class="wishlist-icon"
onclick="addToWishlist(${product.id})"
>

<i class="fa fa-heart"></i>

</div>

<img src="${product.image}">

<div class="product-info">

<h3>

${product.name}

</h3>

<div class="stars">

${generateStars(product.rating)}

</div>

<p>

Premium Quality Product

</p>

<div class="price-row">

<div class="price">

₹${product.price}

</div>

<div class="old-price">

₹${product.oldPrice}

</div>

</div>

<button
onclick="addToCart(${product.id})"
>

Add To Cart

</button>

<button
class="details-btn"
onclick="viewDetails(${product.id})"
>

View Details

</button>

</div>

</div>

`;

});

function generateStars(rating){

let stars = "";

for(let i=0;i<rating;i++){

stars += `<i class="fa fa-star"></i>`;

}

return stars;

}

/* ADD TO CART */

function addToCart(id){

const product =
products.find(p=>p.id===id);

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added To Cart");

}

/* ADD TO WISHLIST */

function addToWishlist(id){

const product =
products.find(p=>p.id===id);

let wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert("Added To Wishlist");

}

/* DETAILS */

function viewDetails(id){

localStorage.setItem(
"selectedProduct",
id
);

window.location.href =
"product-details.html";

}