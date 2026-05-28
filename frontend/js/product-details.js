const params =
    new URLSearchParams(
        window.location.search
    );

const id =
    params.get("id");

const product =
    products.find(
        p => p.id == id
    );

if(product){

    document.getElementById(
        "productImage"
    ).src = product.image;

    document.getElementById(
        "productName"
    ).innerText = product.name;

    document.getElementById(
        "productPrice"
    ).innerText = "$" + product.price;

}