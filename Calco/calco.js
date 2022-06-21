
function afficher(val) 
{ 
    document.querySelector("#output").value +=val 
} 
function eff()
{
    document.querySelector("#output").value = " "
}
function eff1()
{
    document.querySelector("#output").value= document.querySelector("#output").value.substr(0, document.querySelector("#output").value.length - 1)
}
 function egal()
 {
    let x = document.querySelector("#output").value
    let b = eval(x)
    document.querySelector("#output").value = b
 }
function cos()
{
    document.querySelector("#output").value = Math.cos(document.querySelector("#output").value)
}
function sin()
{
    document.querySelector("#output").value = Math.sin(document.querySelector("#output").value)
}
function tan()
{
    document.querySelector("#output").value = Math.tan(document.querySelector("#output").value)
}
function exp()
{
    document.querySelector("#output").value = Math.exp(document.querySelector("#output").value)
}
function absolue()
{
    document.querySelector("#output").value = Math.abs(document.querySelector("#output").value)
}
function racine()
{
    document.querySelector("#output").value = Math.sqrt(document.querySelector("#output").value)
}
function ln()
{
    document.querySelector("#output").value = Math.log10(document.querySelector("#output").value)
}
function log()
{
    document.querySelector("#output").value = Math.log(document.querySelector("#output").value)
}
function puissance()
{
    document.querySelector("#output").value = Math.pow(document.querySelector("#output").value,2)
}

function cosh()
{
    document.querySelector("#output").value = Math.cosh(document.querySelector("#output").value)
}
function sinh()
{
    document.querySelector("#output").value = Math.sinh(document.querySelector("#output").value)
}
function tanh()
{
    document.querySelector("#output").value = Math.tanh(document.querySelector("#output").value)
}
function e()
{
    document.querySelector("#output").value = Math.E
}
function pi()
{
    document.querySelector("#output").value = Math.PI
}
function puis3()
{
    document.querySelector("#output").value = Math.pow(document.querySelector("#output").value,3)
}
function log2()
{
    document.querySelector("#output").value = Math.log2(document.querySelector("#output").value)
}
function log1p()
{
    document.querySelector("#output").value = Math.log1p(document.querySelector("#output").value)
}
function puis4()
{
    document.querySelector("#output").value = Math.pow(document.querySelector("#output").value,4)
}


let second = document.querySelector('#second')
let premier = document.querySelector('#premier')
second.addEventListener('click', () =>
{
    let fonction = document.querySelector('#fonction')
    let fonction2 = document.querySelector('#fonction2')
    fonction2.style.display = "block"
    fonction.style.display ="none"
})

premier.addEventListener('click', () =>
{
    let fonction = document.querySelector('#fonction')
    let fonction2 = document.querySelector('#fonction2')
    fonction2.style.display = "none"
    fonction.style.display ="block"
 }) 
// =======
// let input = document.querySelector('#out')
// let a = doucument.getElementsByClassName('atang')
// let b = doucument.getElementsByClassName('asini')
// let c = doucument.getElementsByClassName('hsinh')
// let d = doucument.getElementsByClassName('hcosh')
// let e = doucument.getElementsByClassName('htanh')
// let f = doucument.getElementsByClassName('atan6')
// let racine = doucument.getElementsByClassName('racine')
// let boutton = doucument.querySelector('#second')

// function afficher(nombre)
// {
//     input.value+=nombre
// }
// function AC()
// { 
//     input.value = " "
// } 

// function DEL() {
//     input.value = input.value.substr(0, input.value.length - 1);
// }
// function result()
// { 
//  let nomb = input.value;
//  let resu= eval(nomb);
//  input.value = resu;
// } 

// function tan()
// {
//     input.value =Math.tan(input.value)
// }
// function sin() {
//     input.value = Math.sin(input.value);
// }

// function cos() {
//     input.value = Math.cos(input.value);
// }
// function sqrt() {
//     input.value = Math.sqrt(input.value, 2);
// }
// function abs()
// {
//     input.value = Math.abs(input.value)
// }

// function log()
// {
//  input.value = Math.log(input.value)
// }
// function puis2()
// {
//     input.value = Math.pow(input.value,2)
// }
// boutton.addEventListener('click',()=>
// {
    
// })





