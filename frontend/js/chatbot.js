const chatbot =
document.getElementById("aiChatbot");

function toggleChatbot(){

    chatbot.classList.toggle("show-chat");
}

async function sendMessage(){

    const input =
    document.getElementById("chatInput");

    const messages =
    document.getElementById("chatbotMessages");

    const userMessage =
    input.value.trim();

    if(!userMessage) return;

    messages.innerHTML += `

        <div class="user-message">
            ${userMessage}
        </div>

    `;

    input.value = "";

    try{

        const response = await fetch(
            "https://shopx-backend-ricr.onrender.com",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    message:userMessage
                })
            }
        );

        const data =
        await response.json();

        messages.innerHTML += `

            <div class="bot-message">
                ${data.reply}
            </div>

        `;

        messages.scrollTop =
        messages.scrollHeight;

    }catch(error){

        messages.innerHTML += `

            <div class="bot-message">
                AI server error
            </div>

        `;
    }
}