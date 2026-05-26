console.log("E-Commerce Website Loaded");

const API_URL =
    "https://shopx-backend.onrender.com";

// PRODUCTS

const products = [

    {
        id: 1,
        name: "iPhone 15",
        price: 999,
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 299,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "Nike Shoes",
        price: 199,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }

];

// BUTTONS

const buttons =
    document.querySelectorAll(
        ".product-card button"
    );

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        addToCart(products[index]);

    });

});

// ADD TO CART

function addToCart(product){

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const existingProduct =
        cart.find(
            item => item.id === product.id
        );

    if(existingProduct){

        existingProduct.quantity += 1;

    }else{

        cart.push({

            ...product,
            quantity: 1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(product.name + " Added To Cart");

    console.log(cart);

}