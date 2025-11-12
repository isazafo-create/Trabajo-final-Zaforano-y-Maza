


document.addEventListener("DOMContentLoaded", function () {
    var user = document.getElementById("username");
    var password = document.getElementById("password");
    var loginBtn = document.getElementById("loginBtn");
    var success = document.getElementById("success");
    var error = document.getElementById("error");
    if (!user || !password || !loginBtn || !success || !error) {
        throw Error("Elementos no encontrados");
    }
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (user.value == "usuario" && password.value == "contraseña") {
            success.style.display = "block";
            error.style.display = "none";
        }
        else {
            success.style.display = "none";
            error.style.display = "block";
        }
    });
});
