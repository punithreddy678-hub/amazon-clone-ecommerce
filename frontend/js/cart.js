let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

console.log("Cart Loaded");

function addToCart(productId){

    const existingProduct =
        cart.find(
            item => item.id === productId
        );

    if(existingProduct){

        existingProduct.quantity += 1;

    }else{

        cart.push({

            id: productId,
            quantity: 1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    console.log(cart);

    alert("Product Added");

}