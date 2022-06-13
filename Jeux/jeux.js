let ques = document.querySelector("#quest1")
let bloc1 = document.querySelector(".block1")
let count = document.querySelector('#countdouwn')
let stocke = [];
let indexdepart = 0
let submit = document.querySelector('#submit');
let score = document.querySelector('#score')
let time = 10;
console.log(stocke)

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

                if (indexdepart >9) {
                    
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
                    bloc1.innerHTML =` <h2>Resultat</h2>`
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