let submitButton = document.querySelector('#sign-in')
let email = document.querySelector('input#email')
let password = document.querySelector('input#password')
let fullName = document.querySelector('input#full-name')
const user = {fullname: " ", email:"", password:""}
function Handlingconnexion(e) {
    if (email.value == "" || password.value == "" || fullName.value == "") {
        if (email.value === "") {
            email.style.borderColor = "red"
        } 
        if (password.value == "") {
            password.style.borderColor = "red"
        }
        if (fullName.value == "") {
            password.style.borderColor = "red"
        }
        // e.preventDefault()
    } else{
        user.email = email.value
        user.password = password.value
        user.fullName = fullName.value
        window.localStorage
        sessionStorage.setItem("user", JSON.stringify(user))
        window.location.href = "./Interactivequiz.html";


    }
}

submitButton.addEventListener("click", function(e){
    e.preventDefault()
    Handlingconnexion(e)
})