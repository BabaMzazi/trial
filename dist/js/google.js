
var bodycover = document.getElementById("drone")
var container1 = document.getElementById("signup_container")
var signin = document.getElementById("signin")
var container2 = document.getElementById("signup_container_content")
var kelbi = document.getElementById("kelbi")
/*same functionality
mama.addEventListener("click",()=>{
    bodycover.style.display = "block"
})
*/
const displayPopup = () => {
    bodycover.style.display = "block"
}

window.onclick = function (event) {
    if (event.target == bodycover) {
        bodycover.style.display = "none"
    }
    if (event.target == container2) {
        container1.style.display = "none"
    }
}


signin.addEventListener("click", () => {
    container1.style.display = "block"
})


var validation = document.getElementById("validation")
validation.addEventListener("click", function () {
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var password = document.getElementById("password")
    var passwordconfirm = document.getElementById("passwordconfirm")
    if (firstname.value == "") {
        alert("enter firstname")
        firstname.placeholder = "Enter firstname"
        firstname.style.borderBottomColor = "red"

    }


    if (lastname.value == "") {
        alert("enter lastname")
        lastname.placeholder = "Enter lastname"
        lastname.style.borderBottomColor = "red"

    }

    if (password.value == "") {
        alert("enter password")
        password.style.borderBottomColor = "red"

    }
    if (passwordconfirm.value == "") {
        alert("enter password confirmation")
        passwordconfirm.style.borderBottomColor = "red"

    }

    if (password.value != passwordconfirm.value) {
        alert("Wrong password confirmation")
        passwordconfirm.style.borderBottomColor = "red"

    }
    else if (firstname.value && lastname.value && password.value && passwordconfirm.value) {
        alert("Account created")
        firstname.value = ""
        lastname.value = ""
        password.value = ""
        passwordconfirm.value = ""
    }

    else {
        alert("Account not created")
        firstname.value = ""
        lastname.value = ""
        password.value = ""
        passwordconfirm.value = ""

    }




})