async function signupUser(){

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try{

        const response =
            await fetch(
                "https://shopx-backend-ricr.onrender.com/api/auth/register",
                {
                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body:JSON.stringify({

                        name,
                        email,
                        password

                    })
                }
            );

        const data =
            await response.json();

        alert(data.message);

        if(response.ok){

            window.location.href =
                "login.html";

        }

    }catch(error){

        console.log(error);

        alert("Registration Failed");

    }

}