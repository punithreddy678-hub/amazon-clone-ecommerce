// CHECK LOGIN

const user =
    JSON.parse(
        localStorage.getItem("user")
    );

const userInfo =
    document.getElementById("userInfo");

if(user){

    userInfo.innerHTML = `

        <span class="welcome-text">
            Hi, ${user.name}
        </span>

        <button onclick="logout()"
            class="logout-btn">
            Logout
        </button>

    `;

}else{

    userInfo.innerHTML = `

        <a href="login.html">
            <i class="fa fa-user"></i>
        </a>

    `;

}

// LOGOUT

function logout(){

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href =
        "login.html";

}
console.log("VELA AUDIO Loaded");