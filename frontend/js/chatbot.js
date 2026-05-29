const API_KEY = "AIzaSyDzr9ihrpnw5vC7zH3r6KrlBTsIbjFrQfI";

// =======================
// OPEN / CLOSE CHATBOT
// =======================

function toggleChatbot(){

    const chatbot =
        document.getElementById("aiChatbot");

    chatbot.classList.toggle("show-chat");
}

// =======================
// SEND MESSAGE
// =======================

async function sendMessage(){

    const input =
        document.getElementById("chatInput");

    const messages =
        document.getElementById("chatbotMessages");

    const text =
        input.value.trim();

    if(text === "") return;

    // USER MESSAGE

    messages.innerHTML += `

        <div class="user-message">
            ${text}
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
                                        text:text
                                    }
                                ]
                            }

                        ]

                    })

                }

            );

        const data =
            await response.json();

        const reply =
            data.candidates[0]
            .content.parts[0].text;

        // BOT MESSAGE

        messages.innerHTML += `

            <div class="bot-message">
                ${reply}
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