// ===============================
// ADD TO CART
// ===============================

function addToCart(name, price, image) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name,
        price,
        image
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}

// ===============================
// ADD TO WISHLIST
// ===============================

function addToWishlist(name, price, image){

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists =
        wishlist.find(item => item.name === name);

    if(alreadyExists){
        alert("Already in wishlist");
        return;
    }

    wishlist.push({
        name,
        price,
        image
    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(name + " added to wishlist!");
}

// ===============================
// LOAD CART ITEMS
// ===============================

function loadCartItems(){

    const cartContainer =
        document.getElementById("cartContainer");

    const totalElement =
        document.getElementById("cartTotal");

    if(!cartContainer) return;

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cartContainer.innerHTML = "";

    cart.forEach((item,index)=>{

        total += item.price;

        cartContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h2>${item.name}</h2>

                <p>$${item.price}</p>

                <button
                    onclick="removeCartItem(${index})"
                    class="remove-btn"
                >
                    Remove
                </button>

            </div>

        </div>

        `;
    });

    if(totalElement){
        totalElement.innerText = total;
    }
}

// ===============================
// REMOVE CART ITEM
// ===============================

function removeCartItem(index){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCartItems();
}

// ===============================
// LOAD WISHLIST
// ===============================

function loadWishlist(){

    const wishlistContainer =
        document.getElementById("wishlistContainer");

    if(!wishlistContainer) return;

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlistContainer.innerHTML = "";

    wishlist.forEach((item,index)=>{

        wishlistContainer.innerHTML += `

        <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="product-info">

                <h3>${item.name}</h3>

                <p>$${item.price}</p>

                <button
                    onclick="moveToCart(${index})"
                >
                    Add To Cart
                </button>

            </div>

        </div>

        `;
    });
}

// ===============================
// MOVE WISHLIST TO CART
// ===============================

function moveToCart(index){

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(wishlist[index]);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    loadWishlist();
}