async function sendMessage(){

    const input =
        document.getElementById(
            "chatInput"
        );

    const message = input.value;

    if(message === "") return;

    const chatbot =
        document.getElementById(
            "chatbotMessages"
        );

    chatbot.innerHTML += `
        <div>
            <strong>You:</strong>
            ${message}
        </div>
    `;

    input.value = "";

    chatbot.innerHTML += `
        <div>
            <strong>AI:</strong>
            This feature will connect with Gemini/OpenAI API.
        </div>
    `;

}