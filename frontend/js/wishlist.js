console.log("Wishlist Loaded");

const wishlistContainer =
    document.getElementById("wishlistContainer");

let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

function displayWishlist(){

    if(!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    wishlist.forEach((product, index) => {

        wishlistContainer.innerHTML += `

            <div class="wishlist-item">

                <img src="${product.image}" width="150"/>

                <h3>${product.name}</h3>

                <p>$${product.price}</p>

                <button onclick="removeWishlist(${index})">
                    Remove
                </button>

            </div>

        `;

    });

}

function removeWishlist(index){

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();

}

displayWishlist();