const voiceBtn = document.getElementById("voiceBtn");

if(voiceBtn){

    voiceBtn.addEventListener("click", () => {

        const recognition =
            new webkitSpeechRecognition();

        recognition.start();

        recognition.onresult = function(event){

            const command =
                event.results[0][0].transcript;

            alert("You said: " + command);

            if(command.includes("cart")){
                window.location.href = "cart.html";
            }

            if(command.includes("wishlist")){
                window.location.href = "wishlist.html";
            }

            if(command.includes("login")){
                window.location.href = "login.html";
            }

        };

    });

}