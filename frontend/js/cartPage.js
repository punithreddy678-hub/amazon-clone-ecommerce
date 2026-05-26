const cartItemsDiv =
    document.getElementById("cartItems");

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

async function loadCart(){

    const response = await fetch(
        "http://localhost:5000/api/products"
    );

    const products = await response.json();

    const cartProducts =
        products.filter(product =>
            cart.includes(product.id)
        );

    cartItemsDiv.innerHTML = "";

    let total = 0;

    cartProducts.forEach((product)=>{

        total += Number(product.price);

        cartItemsDiv.innerHTML += `

            <div class="cart-card">

                <img src="${product.image}"/>

                <h3>${product.title}</h3>

                <h2>$${product.price}</h2>

            </div>

        `;

    });

    cartItemsDiv.innerHTML += `

        <h1>Total: $${total}</h1>

    `;

}

function checkout(){

    alert(
        "Redirecting To Payment..."
    );

    window.location.href =
        "payment.html";

}

loadCart();