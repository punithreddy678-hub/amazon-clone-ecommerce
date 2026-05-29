console.log("Chatbot Ready"); API_KEY = "AIzaSyDzr9ihrpnw5vC7zH3r6KrlBTsIbjFrQfI";

async function sendMessage(){

    const input =
        document.getElementById("chatInput");

    const messages =
        document.getElementById("chatbotMessages");

    const userMessage =
        input.value.trim();

    if(userMessage === "") return;

    // USER MESSAGE

    messages.innerHTML += `

        <div class="user-message">
            ${userMessage}
        </div>

    `;

    input.value = "";

    try{

        const response =
            await fetch(

                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,

                {
                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body:JSON.stringify({

                        contents:[

                            {
                                parts:[
                                    {
                                        text:userMessage
                                    }
                                ]
                            }

                        ]

                    })

                }

            );

        const data =
            await response.json();

        const botReply =
            data.candidates[0]
            .content.parts[0].text;

        // BOT MESSAGE

        messages.innerHTML += `

            <div class="bot-message">
                ${botReply}
            </div>

        `;

        messages.scrollTop =
            messages.scrollHeight;

    }

    catch(error){

        console.log(error);

        messages.innerHTML += `

            <div class="bot-message">
                Gemini AI Error
            </div>

        `;
    }
}