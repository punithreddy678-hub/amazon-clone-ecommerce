const chatBtn = document.getElementById("chatBtn");

if(chatBtn){

    chatBtn.addEventListener("click", () => {

        const question = prompt(
            "Ask ShopX AI Assistant:"
        );

        if(question){

            let answer = "Sorry, I don't understand.";

            if(question.includes("order")){
                answer = "You can track orders in Orders Page.";
            }

            if(question.includes("cart")){
                answer = "Your cart items are saved.";
            }

            if(question.includes("mobile")){
                answer = "Latest mobiles available with discounts.";
            }

            alert(answer);

        }

    });

}