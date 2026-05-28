const cartItems =
    document.getElementById("cartItems");

const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

let total = 0;

cart.forEach(item => {

    total += item.price;

    cartItems.innerHTML += `

    <div class="cart-item">

        <img src="${item.image}">

        <div>

            <h2>${item.name}</h2>

            <p>$${item.price}</p>

        </div>

    </div>

    `;

});

document.getElementById(
    "cartTotal"
).innerText =
`Total: $${total}`;