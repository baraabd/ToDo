var username = "Bara"
var password = "13"


function validateForm() {

    var usernameinput = document.getElementById("username").value
    var passwordinput = document.getElementById("password").value

    if (username == usernameinput && password == passwordinput) {

        sessionStorage.setItem("username", usernameinput)
        window.location.replace("./welcome.html");

    }
}