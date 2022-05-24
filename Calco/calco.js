let input = document.querySelector('#out')
let a = doucument.getElementsByClassName('atang')
let b = doucument.getElementsByClassName('asini')
let c = doucument.getElementsByClassName('hsinh')
let d = doucument.getElementsByClassName('hcosh')
let e = doucument.getElementsByClassName('htanh')
let f = doucument.getElementsByClassName('atan6')
let racine = doucument.getElementsByClassName('racine')
let boutton = doucument.querySelector('#second')

function afficher(nombre)
{
    input.value+=nombre
}
function AC()
{ 
    input.value = " "
} 

function DEL() {
    input.value = input.value.substr(0, input.value.length - 1);
}
function result()
{ 
 let nomb = input.value;
 let resu= eval(nomb);
 input.value = resu;
} 

function tan()
{
    input.value =Math.tan(input.value)
}
function sin() {
    input.value = Math.sin(input.value);
}

function cos() {
    input.value = Math.cos(input.value);
}
function sqrt() {
    input.value = Math.sqrt(input.value, 2);
}
function abs()
{
    input.value = Math.abs(input.value)
}

function log()
{
 input.value = Math.log(input.value)
}
function puis2()
{
    input.value = Math.pow(input.value,2)
}
boutton.addEventListener('click',()=>
{
    
})




