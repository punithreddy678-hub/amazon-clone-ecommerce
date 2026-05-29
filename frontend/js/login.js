const API =
"https://shopx-backend-ricr.onrender.com";

async function login(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try{

        const response =
        await fetch(
            `${API}/api/auth/login`,
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data =
        await response.json();

        if(response.ok){

            /* SAVE USER */

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            alert(
                "Login Successful"
            );

            window.location.href =
            "index.html";

        }else{

            alert(
                data.message
            );

        }

    }catch(error){

        console.log(error);

        alert(
            "Server Error"
        );

    }

}