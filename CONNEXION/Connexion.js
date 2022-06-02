let MyDiv= document.getElementById("MyDiv");
let Div= document.getElementById("Div");
console.log(MyDiv);

let connect= document.querySelector("#Cconnet")
let inscrip= document.querySelector("#inscrip")

let connection= document.querySelector("#conncete")
let inscription= document.querySelector("#inscription")

connect.addEventListener("click", function()
{
    Div.style.display ="block";
    MyDiv.style.display ="none";
}
)

inscrip.addEventListener("click", function()
{
    Div.style.display ="none";
    MyDiv.style.display ="block";
}
)
connection.addEventListener("click", function()
{
    Div.style.display ="block";
    MyDiv.style.display ="none";
}
)
inscription.addEventListener("click", function()
{
    Div.style.display ="none";
    MyDiv.style.display ="block";
}
)
