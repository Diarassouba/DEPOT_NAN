//   breenmarkemoji pour les emoji 
const form = document.querySelector('.form-quiz');
let tabResultas = []; // tableau des reponse choisies
const reponse = ['a','a','c','b','a']; // les bonnes réponses
const titreResultats = document.querySelector('.result h2')
const textREsultas = document.querySelector('.note')
const aideResultats = document.querySelector('.aide')
const toutesLesResultats = document.querySelectorAll('.Question')
let count = document.querySelector('#count')
let temps = 10
let verifTableau = [];  //Le tableau Verifcateur
let stocke = []
 console.log(stocke)       



fetch("./datas.json").then(question=>
    {
        return question.json()
    }).then(question=>
        {
            stocke=question.questions
            console.log(stocke)
        })

form.addEventListener('submit',(e)=>
{
    e.preventDefault()
    // console.log( document.querySelector("input[name='q1']:checked").value);
     for (let i = 1; i < 6 ; i++) {
         tabResultas.push(document.querySelector(`input[name="q${i}"]:checked`).value) // Ajoue des reponses
     }
     console.log(tabResultas)
     verifunct(tabResultas); // la fonction verifateur de reponse // Cette fonction aura pour but de comparer les reponses choisir à celles des bonnes reponses
     tabResultas = [];
  
})

function verifunct(ArrResultas) // Parametres de Verifcation
{
    for (let a = 0; a < 5; a++) {
        if(ArrResultas[a] === reponse[a]){
            verifTableau.push(true)
        }else{
            verifTableau.push(false)
        }
        
    }
    couleurTableau(verifTableau)
    afficherResultats(verifTableau)
    // console.log(verifTableau);
    verifTableau = []
}



// Fonction qui affiche les resultats et les observations

function afficherResultats(tabCheck)
{
    const nombreDeFautes = tabCheck.filter(faux => faux !== true).length;
    console.log(nombreDeFautes);

    switch (nombreDeFautes) {
        case 0:
            titreResultats.innerText ="bravo, C'est un sans faute"
            aideResultats.innerText =""
            textREsultas.innerText ="5/5"
            
        break;
        case 1:
            titreResultats.innerText ="Vous y est presque ! "
            aideResultats.innerText ="retentez une autre reponse dans la case rouge, puis re-validez ! "
            textREsultas.innerText ="4/5"
        break;
        case 2:
            titreResultats.innerText ="Encore une effort ! "
            aideResultats.innerText ="retentez une autre reponse dans la case rouge, puis re-validez ! "
            textREsultas.innerText ="3/5"
        break;
        case 3:
            titreResultats.innerText =" Il reste quelques erreurs ! "
            aideResultats.innerText ="retentez une autre reponse dans la case rouge, puis re-validez ! "
            textREsultas.innerText ="2/5"
        break;
        case 4:
            titreResultats.innerText =" Peux mieux faire! "
            aideResultats.innerText ="retentez une autre reponse dans la case rouge, puis re-validez ! "
            textREsultas.innerText ="1/5"
        break;
        case 5:
            titreResultats.innerText =" Peux mieux faire! "
            aideResultats.innerText ="retentez une autre reponse dans la case rouge, puis re-validez ! "
            textREsultas.innerText ="0/5"
        break;
        default:
            'wops, cas innatendu'
    }
}


function couleurTableau(tabvalBool)
{
      for (let j = 0; j < tabvalBool.length; j++) {
        if (tabvalBool[j] === true) {
            toutesLesResultats[j].style.background ='lightgreen'

        } else {
            toutesLesResultats[j].style.background ='#ff2828'
            toutesLesResultats[j].classList.add('echec')
             setTimeout( () => {
                toutesLesResultats[j].classList.remove('echecc')
            }, 500);
        }
          
      }
}

// Le forEchec
toutesLesResultats.forEach(item  =>
    {
        item.addEventListener('click', () => {
            item.style.background ="white"
        }
        )
    })

    function time() {
        temps -= 1
        count.innerHTML = temps  
    }
    setInterval(time,1000)


