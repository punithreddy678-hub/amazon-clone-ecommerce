const chatbotMessages =
    document.getElementById("chatbotMessages");

function sendMessage(){

    const input =
        document.getElementById("chatInput");

    const userMessage =
        input.value;

    chatbotMessages.innerHTML += `

        <div class="user-msg">
            ${userMessage}
        </div>

    `;

    let botReply = "";

    if(
        userMessage.includes("mobile")
    ){

        botReply =
            "Check latest iPhones and Samsung mobiles.";

    }else if(
        userMessage.includes("fashion")
    ){

        botReply =
            "Trending fashion products available.";

    }else{

        botReply =
            "How can I help you today?";

    }

    chatbotMessages.innerHTML += `

        <div class="bot-msg">
            ${botReply}
        </div>

    `;

    input.value = "";

}