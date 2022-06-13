
let message = document.querySelector('.message')
let ecran = document.querySelector('.ecran')
let clavier = document.querySelector('.clavier')
let button = document.querySelector('.clavier button')
let input = document.querySelector('.clavier input').value
let MotBanni = ['Mdr','cretin','blabla','demoisi']

function annalyse(motAnalyser)
{
    
    let Liste = motAnalyser.split(' ');
    for(let a=0; a< Liste.length; a++ )
    {
        if(Liste[a] === MotBanni[a])
        {
            ecran.innerHTML ='le message ne peut etre afficher'
        }else
        {
            ecran.innerHTML =`<p>${motAnalyser}</p>`
        }
    }
}


button.addEventListener('click', annalyse(input))




// button.addEventListener('click',() =>
// {
    
    
//     
//     console.log(Liste)
//     let 

//     for (let a = 0; a < 4; a++) {
//         if (MotBanni[a] === Liste[a]) { 

//             ecran.innerHTML =`impossible d'afficher votre message`
            
//         }
//          else
//         {
//             ecran.innerHTML =`<p style="border:3px solid black; font-size:20px;">, ${input}</p>`
            
//         }
    
//     }

    
// }
// )
