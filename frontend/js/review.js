console.log("Review System Loaded");

const reviewForm =
    document.getElementById("reviewForm");

const reviewList =
    document.getElementById("reviewList");

if(reviewForm){

    reviewForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const username =
            document.getElementById("username").value;

        const review =
            document.getElementById("review").value;

        const reviewData = {

            username,
            review

        };

        let reviews =
            JSON.parse(
                localStorage.getItem("reviews")
            ) || [];

        reviews.push(reviewData);

        localStorage.setItem(
            "reviews",
            JSON.stringify(reviews)
        );

        alert("Review Added");

        displayReviews();

        reviewForm.reset();

    });

}

function displayReviews(){

    if(!reviewList) return;

    let reviews =
        JSON.parse(
            localStorage.getItem("reviews")
        ) || [];

    reviewList.innerHTML = "";

    reviews.forEach((item) => {

        reviewList.innerHTML += `

            <div class="review-card">

                <h3>${item.username}</h3>

                <p>${item.review}</p>

            </div>

        `;

    });

}

displayReviews();