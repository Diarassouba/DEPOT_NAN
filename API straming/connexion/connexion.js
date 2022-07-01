let msg = document.querySelector('h1')
let Utilisateur = document.querySelector('#users')
let pwd = document.querySelector('#passeword')
let connect = document.querySelector('button')


connect.addEventListener("click" , (e) =>
{
  e.preventDefault()
  let informations = JSON.parse(localStorage.getItem("local"))
  msg.style.fontSize="25px"
  
  console.log("mdp", pwd.value);
  console.log("nom", Utilisateur.value)
  console.log("Udp", informations.MotPasse);
  console.log("Users", informations.Email)
    if (pwd.value == informations.MotPasse && Utilisateur.value == informations.Email) {
       msg.textContent = "votre incription est prise en compte"
       connect.style.background ="lime"
       console.log(msg)
       
    } else{
      msg.textContent = "email ou le mot de passe est incorrect"
      connect.style.background ="brown"
      console.log(msg)
    }


})
