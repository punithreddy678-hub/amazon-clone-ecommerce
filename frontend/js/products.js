const productsContainer =
    document.getElementById("products");

let allProducts = [];

async function fetchProducts(){

    try{

        const response = await fetch(
            "https://shopx-backend-ricr.onrender.com"
        );

        const products =
            await response.json();

        allProducts = products;

        displayProducts(products);

    }catch(error){

        console.log(error);

    }

}

function displayProducts(products){

    productsContainer.innerHTML = "";

    products.forEach((product)=>{

        productsContainer.innerHTML += `

            <div class="product-card">

                <img
                    src="${product.image}"
                />

                <h3>${product.title}</h3>

                <p>${product.description}</p>

                <h2>$${product.price}</h2>

                <button
                    onclick="addToCart(${product.id})"
                >
                    Add To Cart
                </button>

            </div>

        `;

    });

}

function searchProducts(){

    const searchValue =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredProducts =
        allProducts.filter(product =>

            product.title
            .toLowerCase()
            .includes(searchValue)

        );

    displayProducts(filteredProducts);

}

fetchProducts();
function startVoiceSearch(){

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event)=>{

        const transcript =
            event.results[0][0].transcript;

        document
        .getElementById("searchInput")
        .value = transcript;

        searchProducts();

    };

}