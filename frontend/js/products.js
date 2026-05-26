const productsContainer =
    document.getElementById("products");

async function fetchProducts(){

    try{

        const response = await fetch(
            "http://localhost:5000/api/products"
        );

        const products = await response.json();

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

    }catch(error){

        console.log(error);

    }

}

fetchProducts();