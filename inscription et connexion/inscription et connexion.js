let connection = document.getElementById("boutton2");
let inscription = document.getElementById("boutton1");


inscription.addEventListener("click", function()
{
    let div1 = document.querySelector(".inscrition")
    let div2 = document.querySelector(".connexion")
    console.log(div1)
    console.log(div2)
    div1.style.display = "block"
    div2.style.display = "none"
}
)


connection.addEventListener("click", function(){
    let div1 = document.querySelector(".inscrition")
    let div2 = document.querySelector(".connexion")
    div1.style.display = "none"
    div2.style.display = "block"
}
)