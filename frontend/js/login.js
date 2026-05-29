async function loginUser(){

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try{

        const response =
            await fetch(
                "https://shopx-backend-ricr.onrender.com/api/auth/login",
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

            localStorage.setItem(
                "token",
                data.token
            );

            alert("Login Successful");

            window.location.href =
                "index.html";

        }else{

            alert(data.message);

        }

    }catch(error){

        console.log(error);

        alert("Login Failed");

    }

}