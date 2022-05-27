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