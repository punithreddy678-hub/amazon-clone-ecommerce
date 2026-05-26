console.log("Cart Loaded");

const cartContainer =
    document.getElementById("cartItems");

const totalElement =
    document.getElementById("cartTotal");

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

function loadCart(){

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartContainer.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    width="120"
                >

                <div>

                    <h3>${item.name}</h3>

                    <p>
                        $${item.price}
                    </p>

                    <p>
                        Quantity:
                        ${item.quantity}
                    </p>

                    <button
                        onclick="removeItem(${index})"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;

    });

    totalElement.innerHTML =
        "Total: $" + total;

}

function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();

}

loadCart();