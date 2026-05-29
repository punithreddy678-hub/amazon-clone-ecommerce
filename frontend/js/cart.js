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
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name,
        price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}