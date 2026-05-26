const ctx =
    document.getElementById("salesChart");

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