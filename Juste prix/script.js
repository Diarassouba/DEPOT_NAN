let input = document.querySelector('#choix')
let error = document.querySelector('small')
let formulaire = document.querySelector("#formulaire")
let buton =document.querySelector('#boutton')
let coups = 0
let nombreChoisir;

var monTableau =new Array();
monTableau.push("bonjour")

console.log(monTableau)
error.style.display='none'

 //Generateur de nombre aleatoire

let nomnreAleatoire = Math.floor(Math.random()*1001)

console.log(nomnreAleatoire)

    function verifier(nombre)
    {
        let intruction = document.createElement('div')

        if(nombre > nombreChoisir)
        {
            intruction.textContent="#" + coups + " ( " + nombre  + ") c'est moins !" ;

            intruction.className ='intruction plus';

        }else if(nombre < nombreChoisir)
        {
            intruction.textContent="#" + coups + " ( " + nombre  + ") c'est plus !" ;

            intruction.className = 'intruction moins';
        }else
        {
            intruction.textContent="#" + coups + " ( " + nombre  + ") Felicitations ! c'est le juste prix ";

            intruction.className ='intruction fini';

            input.disabled = true;

        }
       document.querySelector("#instructions").prepend(intruction)
    }
///  Verification de la valeur entrer dans le champ
        input.addEventListener('keyup', () =>
        {
            if(isNaN((input.value)))
            {
                error.style.display="block"
            }else
            {
                error.style.display="none"
            }

        })

// Soumettre et verification
    formulaire.addEventListener("submit", (e) =>
    {
        e.preventDefault()
        if(isNaN(input.value) || input.value == '')
        {
            input.style.borderColor ="red"
        }else
        {
            coups++
            input.style.borderColor ="silver"
            nombreChoisir = input.value;
            input.value =''
            verifier(nombreChoisir)
        }
    })

    

















