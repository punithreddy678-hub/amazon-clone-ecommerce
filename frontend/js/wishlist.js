const wishlistContainer =
document.getElementById(
"wishlistContainer"
);

let wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

if(wishlist.length===0){

wishlistContainer.innerHTML = `

<h2>

Wishlist Empty

</h2>

`;

}

wishlist.forEach(product=>{

wishlistContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>

${product.name}

</h3>

<p>

Premium Audio Product

</p>

<div class="price">

₹${product.price}

</div>

<button
onclick="moveToCart(${product.id})"
>

Move To Cart

</button>

<button
class="remove-btn"
onclick="removeWishlist(${product.id})"
>

Remove

</button>

</div>

</div>

`;

});

/* MOVE TO CART */

function moveToCart(id){

const product =
wishlist.find(
item=>item.id===id
);

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

/* REMOVE FROM WISHLIST */

wishlist =
wishlist.filter(
item=>item.id!==id
);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

location.reload();

}

/* REMOVE */

function removeWishlist(id){

wishlist =
wishlist.filter(
item=>item.id!==id
);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

location.reload();

}