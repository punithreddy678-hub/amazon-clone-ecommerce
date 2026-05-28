function addToCart(id){

    const product =
        products.find(p => p.id === id);

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added To Cart");

}