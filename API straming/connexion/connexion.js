
  // let elementsStock = localStorage.getItem('Users')
  // let elementObjet = JSON.parse(elementsStock)
  // console.log(elementObjet)

  // boutton = document.querySelector('button')

  // function afficher()
  // {
  //     let UserNAME = localStorage.getItem(Users.Email)
  //     let UserMOt = localStorage.getItem(Users.MotPasse)
  //     let   ConnetEmail = document.querySelector("#users")
  //     let ConnectMotDepass = document.querySelector('#passeword')
  //     let formulaire = document.querySelector('form')
  //     if(UserNAME === ConnetEmail.value && UserMOt === ConnectMotDepass.value)
  //     {
  //       formulaire.innerHTML = `<p>Cliquer sur <a href="#">Mon site</a></p>`
  //     }else
  //     {
  //       formulaire.innerHTML = `email ou mot de passe incorrect`
  //     }

  // }

  // boutton.addEventListener('click',afficher())
// let ConnectUser = document.querySelector('#users')
// let ConnectMot = document.querySelector('#passeword')
// let local = JSON.parse(localStorage.getItem("form"))
// console.log(local)

// let formulaire = document.querySelector('button')

// formulaire.addEventListener('submit', () =>
// {
//    let utilisateur = ConnectUser.value
//    let motDePasse = ConnectMot.value
//    let affirme;

//    local.forEach(element => {
//     if(utilisateur == element.nom  && motDePasse == element.password ) {
//         affirme = "Vous serez rediriger sur la page dans quelque instant"
//         location.href('../index.html')
//     }else if (utilisateur != element.nom  || motDePasse != element.password) {

//       affirme = "adresse et mot de passe incorrect  "
//     }
//     alert(affirme)
//    });
     
//   })
let msg = document.querySelector('h1')
let Utilisateur = document.getElementById('users')
let pwd = document.getElementsByClassName('passeword')
let connect = document.querySelector('button')
let informations = JSON.parse(localStorage.getItem("local"))

connect.addEventListener("click" , (e) =>
{
  msg.style.fontSize="25px"
    e.preventDefault()
    if (pwd.value === informations.MotPasse && Utilisateur.value === informations.Email) {
       msg.textContent = "votre incription est prise en compte"
       connect.style.background ="lime"
    } else{
      msg.textContent = "email ou le mot de passe est incorrect"
      connect.style.background ="brown"
    }
    console.log(informations)
})


  
