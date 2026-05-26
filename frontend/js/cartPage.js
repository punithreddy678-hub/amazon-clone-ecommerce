const cartItemsDiv =
    document.getElementById("cartItems");

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

async function loadCart(){

    const response = await fetch(
        "https://shopx-backend-ricr.onrender.com"
    );

    const products =
        await response.json();

    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach((cartItem)=>{

        const product =
            products.find(
                p => p.id === cartItem.id
            );

        if(product){

            total +=
                Number(product.price)
                * cartItem.quantity;

            cartItemsDiv.innerHTML += `

                <div class="cart-card">

                    <img src="${product.image}"/>

                    <h3>${product.title}</h3>

                    <h2>$${product.price}</h2>

                    <p>
                        Quantity:
                        ${cartItem.quantity}
                    </p>

                </div>

            `;

        }

    });

    cartItemsDiv.innerHTML += `

        <h1>Total: $${total}</h1>

    `;

}

function checkout(){

    window.location.href =
        "payment.html";

}

loadCart();