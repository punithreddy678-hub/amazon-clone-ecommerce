const API_URL =
    "https://shopx-backend-ricr.onrender.com";

async function placeOrder(){

    const token =
        localStorage.getItem("token");

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price * item.quantity,
            0
        );

    try{

        const response =
            await fetch(
                API_URL + "/api/orders/create",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        Authorization:
                            "Bearer " + token

                    },

                    body: JSON.stringify({

                        total,
                        payment_method:
                            "Razorpay"

                    })

                }
            );

        const data =
            await response.json();

        console.log(data);

        alert("Order Placed");

        localStorage.removeItem("cart");

        window.location.href =
            "payment.html";

    }catch(error){

        console.log(error);

    }

}