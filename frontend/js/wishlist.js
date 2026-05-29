const API =
"https://shopx-backend-ricr.onrender.com";

const wishlistContainer =
document.getElementById(
"wishlistContainer"
);

/* =========================================
   LOAD WISHLIST
========================================= */

async function loadWishlist(){

    const token =
    localStorage.getItem("token");

    if(!token){

        wishlistContainer.innerHTML = `

        <h2 class="empty-text">

        Please Login First ❤️

        </h2>

        `;

        return;
    }

    try{

        const response =
        await fetch(
            `${API}/api/wishlist`,
            {
                headers:{
                    authorization:token
                }
            }
        );

        const wishlist =
        await response.json();

        /* EMPTY */

        if(
            !wishlist ||
            wishlist.length === 0
        ){

            wishlistContainer.innerHTML = `

            <h2 class="empty-text">

            Wishlist Empty ❤️

            </h2>

            `;

            return;
        }

        wishlistContainer.innerHTML = "";

        wishlist.forEach((product)=>{

            wishlistContainer.innerHTML += `

            <div class="product-card">

                <div
                class="wishlist-icon active"
                onclick="removeWishlist(${product.id})"
                >
                    <i class="fa fa-heart"></i>
                </div>

                <img
                src="${product.product_image}"
                alt="${product.product_name}"
                >

                <div class="product-info">

                    <h3>

                    ${product.product_name}

                    </h3>

                    <p>

                    Premium Audio Product

                    </p>

                    <div class="price">

                    ₹${product.product_price}

                    </div>

                    <div class="wishlist-buttons">

                        <button
                        onclick='moveToCart(
                            ${JSON.stringify({
                                id:"${product.product_id}",
                                name:"${product.product_name}",
                                price:"${product.product_price}",
                                image:"${product.product_image}"
                            }).replace(/'/g,"&apos;")}
                        )'
                        >

                        Add To Cart

                        </button>

                        <button
                        class="remove-btn"
                        onclick="removeWishlist(${product.id})"
                        >

                        Remove

                        </button>

                    </div>

                </div>

            </div>

            `;

        });

    }catch(error){

        console.log(error);

        wishlistContainer.innerHTML = `

        <h2 class="empty-text">

        Failed To Load Wishlist

        </h2>

        `;

    }

}

/* =========================================
   MOVE TO CART
========================================= */

function moveToCart(product){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(
        "Added To Cart 🛒"
    );

}

/* =========================================
   REMOVE WISHLIST
========================================= */

async function removeWishlist(id){

    const token =
    localStorage.getItem("token");

    try{

        await fetch(
            `${API}/api/wishlist/${id}`,
            {
                method:"DELETE",

                headers:{
                    authorization:token
                }
            }
        );

        loadWishlist();

    }catch(error){

        console.log(error);

        alert(
            "Failed To Remove"
        );

    }

}

/* =========================================
   START
========================================= */

loadWishlist();