/* =========================
   USER SESSION
========================= */

const currentUser =
JSON.parse(
localStorage.getItem("user")
);

/* =========================
   SHOW USER
========================= */

function loadUserAccount(){

    const accountBox =
    document.getElementById("accountArea");

    if(!accountBox) return;

    /* USER LOGGED IN */

    if(currentUser){

        accountBox.innerHTML = `

        <div class="user-box">

            <i class="fa fa-user-circle"></i>

            <span>

                ${currentUser.name || currentUser.email}

            </span>

            <button onclick="logout()">

                Logout

            </button>

        </div>

        `;

    }

    /* USER NOT LOGGED */

    else{

        accountBox.innerHTML = `

        <a href="login.html">

            <i class="fa fa-user"></i>

        </a>

        `;

    }

}

/* =========================
   LOGOUT
========================= */

function logout(){

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    alert("Logged Out");

    window.location.href =
    "login.html";

}

loadUserAccount();