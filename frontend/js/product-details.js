const sampleProduct = {

    id: 1,

    name: "iPhone 15",

    price: 999,

    description:
        "Latest Apple flagship mobile.",

    image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"

};

document.getElementById(
    "productImage"
).src = sampleProduct.image;

document.getElementById(
    "productName"
).innerHTML = sampleProduct.name;

document.getElementById(
    "productPrice"
).innerHTML =
    "$" + sampleProduct.price;

document.getElementById(
    "productDescription"
).innerHTML =
    sampleProduct.description;

function addWishlist(){

    let wishlist =
        JSON.parse(
            localStorage.getItem(
                "wishlist"
            )
        ) || [];

    wishlist.push(sampleProduct);

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    alert(
        "Added To Wishlist"
    );

}