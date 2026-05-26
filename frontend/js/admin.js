const API_URL =
    "https://shopx-backend.onrender.com";

// SALES CHART

const ctx =
    document.getElementById(
        "salesChart"
    );

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May"
        ],

        datasets: [{

            label: "Sales",

            data: [
                5000,
                8000,
                12000,
                15000,
                25000
            ]

        }]

    }

});

// FETCH PRODUCTS

async function fetchProducts(){

    try{

        const response =
            await fetch(
                API_URL + "/api/products"
            );

        const data =
            await response.json();

        console.log(data);

    }catch(error){

        console.log(error);

    }

}

fetchProducts();