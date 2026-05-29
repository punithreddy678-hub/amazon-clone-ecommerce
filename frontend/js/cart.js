const cartContainer =
document.getElementById(
"cartContainer"
);

const cartTotal =
document.getElementById(
"cartTotal"
);

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

if(cart.length===0){

cartContainer.innerHTML = `

<h2>

Cart Empty

</h2>

`;

}

let total = 0;

cart.forEach(product=>{

total += product.price;

cartContainer.innerHTML += `

<div class="cart-item">

<img src="${product.image}">

<div>

<h2>

${product.name}

</h2>

<p>

Premium Audio Product

</p>

<h3>

₹${product.price}

</h3>

<button
onclick="removeCart(${product.id})"
>

Remove

</button>

</div>

</div>

`;

});

cartTotal.innerHTML = `

<h2>

Total : ₹${total}

</h2>

<button
class="checkout-btn"
onclick="checkout()"
>

Proceed To Checkout

</button>

`;

/* REMOVE */

function removeCart(id){

cart =
cart.filter(
item=>item.id!==id
);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

location.reload();

}

/* CHECKOUT */

function checkout(){

window.location.href =
"checkout.html";

}