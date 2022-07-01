let nom = document.querySelector("#Nom")
let prenom = document.querySelector("#Prenom")
let date = document.querySelector("#Date")
let lieu = document.querySelector("#lieu")
let email = document.querySelector("#email")
let  tel = document.querySelector("#tel")
let Passe = document.querySelector("#password")

let boutton = document.querySelector("button")
boutton.addEventListener('click', (e) => {
 e.preventDefault()
boutton.style.background = "lime"
 const Users = {
    NOM : nom.value,
    PRENOM:prenom.value,
    DATE:date.value,
    Email : email.value,
    MotPasse : Passe.value,
    TELEPHONE : tel.value
 }
console.log("users")
console.log(Users)

localStorage.setItem("local",JSON.stringify(Users))

})

boutton.style.background = ""