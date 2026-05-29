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

/* =========================================
   EMPTY CART
========================================= */

if(cart.length === 0){

cartContainer.innerHTML = `

<h2>

Cart Empty 🛒

</h2>

`;

}

/* =========================================
   DISPLAY CART
========================================= */

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

/* =========================================
   TOTAL
========================================= */

if(cart.length > 0){

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

}

/* =========================================
   REMOVE ITEM
========================================= */

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

/* =========================================
   CHECKOUT
========================================= */

async function checkout(){

    const token =
    localStorage.getItem("token");

    if(!token){

        alert(
            "Please Login First"
        );

        window.location.href =
        "login.html";

        return;

    }

    try{

        for(const product of cart){

            await placeOrder(product);

        }

        localStorage.removeItem("cart");

        alert(
            "Order Placed Successfully 🚀"
        );

        window.location.href =
        "order.html";

    }catch(error){

        console.log(error);

        alert(
            "Checkout Failed"
        );

    }

}

/* =========================================
   PLACE ORDER DATABASE
========================================= */

async function placeOrder(product){

    const token =
    localStorage.getItem("token");

    try{

        await fetch(
            "https://shopx-backend-ricr.onrender.com/api/orders",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json",
                    authorization:token
                },

                body:JSON.stringify({

                    product_name:
                    product.name,

                    product_price:
                    product.price,

                    product_image:
                    product.image

                })

            }
        );

    }catch(error){

        console.log(error);

    }

}