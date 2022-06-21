<<<<<<< HEAD
 /* 
let ques = document.querySelector("#quest1")
let bloc1 = document.querySelector(".block1")
let count = document.querySelector('#countdouwn')
let stocke = [];
let indexdepart = 0
let submit = document.querySelector('#submit');
let score = document.querySelector('#score')
let time = 60;


fetch("./jeux.json")
    .then(response=>{
        return response.json()
    })
    .then(responses=>{
        stocke = responses.questions;
       
        gestdequetion()
    })

    // Generateur de question
    function gestdequetion()
    {
        //if(indexdepart <= stocke.length){
            for(let i = 0; i < stocke.length; i++ )
            {

                bloc1.innerHTML +=` <div id="quest1" class='question'>
                <h2>${stocke[i].text}</h2><br>
                <input type="checkbox" value="${stocke[i].options[0]}" name="question1" type="${stocke[i].type}" id="propos1">
                <label for="propos1">${stocke[i].options[0]} </label><br>
                <input type="checkbox" value="${stocke[i].options[1]}" name="question2" type="${stocke[i].type}" id="propos2">
                <label for="propos2"> ${stocke[i].options[1]} </label><br>
                <input type="checkbox" value=${stocke[i].options[2]}" valid="valid" name="question3" type="${stocke[i].type}" id="propos3">
                <label for="propos3">${stocke[i].options[2]} </label><br>`
                
            }

            //indexdepart +=3

        /* } else
        {
            bloc1.innerHTML = "Le resultats est"

            
        }*/

    
 /* 
// La Fonction decompte
                function temps()
                            {
                                if (time == 0) {
                                   // alert('stop')

                                } else {
                                    time -= 1;
                                }
                                
                                count.innerHTML = time;
                            }



        setInterval(temps,1000)

        // Fonction permettant d'afficher les questions
 /* 
            function nextQuestions()
            {
                bloc1.innerHTML = ""
                suite()
            }
/////////// La condition pour afficher et pour bloquer le temps
 /* 
            function suite()
            {
                if(indexdepart<=9)
                {
                    gestdequetion()
                    clearInterval(setInterval(temps,1000))
                }else
                {
                    bloc1.innerHTML ="<h2>LE Resultat est : </h2><br>"

                    
                }

            }

        submit.addEventListener('click' , nextQuestions)

       submit.addEventListener('click' , () =>
        {
            time = 60
        }) */


         let form = document.querySelector('#Forme')
         let TAbleauresults = [];

         form.addEventListener('submit', (e) =>
         {
             e.defaultPrevented()
             console.log(document.querySelector('input[name="q1":checked').value)
        }) 
=======
let ques = document.querySelector("#quest1")
let bloc1 = document.querySelector(".block1")
let count = document.querySelector('#countdouwn')
let stocke = [];
let indexdepart = 0
let submit = document.querySelector('#submit');
let score = document.querySelector('#score')
let time = 10;


fetch("./jeux.json")
    .then(response=>{
       
        return response.json()
    })
    .then(responses=>{
        stocke = responses.questions;
        gestdequetion()
    })
        // Fonction Temps ecouler  
        function temps()
            {

                if (indexdepart<9) {
                    
                }else{

                    time -= 1;
                    count.innerHTML = time;
        
                    if(time == 0 ){
                        time = 10
                        nextQuestions()
                    }
                
                } 
            }


        setInterval(temps,1000)

        function nextQuestions()
        {
            bloc1.innerHTML = ""
            gestdequetion()
            if (indexdepart<10) {
                clearInterval(setInterval(temps,1000))
            } 
            
        }
        function gestdequetion()
        {
                if (indexdepart<=9) {
                    for(let i = indexdepart; i<= indexdepart+2; i++ )
                    {
                        bloc1.innerHTML +=` <div id="quest1" class='question'>
                        <h2>${stocke[i].text}</h2><br>
                        <input type="checkbox" value="${stocke[i].options[0]}" name="question1" type="${stocke[i].type}" id="propos1">
                        <label for="propos1">${stocke[i].options[0]} </label><br>
                        <input type="checkbox" value="${stocke[i].options[1]}" name="question2" type="${stocke[i].type}" id="propos2">
                        <label for="propos2"> ${stocke[i].options[1]} </label><br>
                        <input type="checkbox" value=${stocke[i].options[2]}" valid="valid" name="question3" type="${stocke[i].type}" id="propos3">
                        <label for="propos1">${stocke[i].options[2]} </label><br>`
                    
                    }
                    indexdepart +=3
                }else{
                    bloc1.innerHTML +=` <h2>Resultat</h2>`
                    count.innerHTML = 0;
                    clearInterval()
                    console.log("fin")
                }
                
        

        }

        submit.addEventListener('click' , nextQuestions

        )
        submit.addEventListener('click' , () =>
        {
            time =60
        })
>>>>>>> 98ed884d9417fdca9e3c11acdd7b8d46757345ed
