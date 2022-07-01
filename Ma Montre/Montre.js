

setInterval(Temps,1000)


function Temps() {
let div = document.querySelector('div')
let time = new Date()
let Hours = time.getHours()
let Minutes = time.getMinutes()
let secondes = time.getSeconds()

//     if(Hours>12)
// {

//     // Hours -= 12;
   
// }
if(Hours == 0)
{

    Hours = 12;  
   
}
Hours = Hours<10 ? "0"+Hours : Hours;
Minutes = Minutes<10 ? "0"+ Minutes : Minutes;
secondes = secondes<10 ? "0"+ secondes : secondes;


let AfficheTemps = Hours + ':'+Minutes+':'+secondes;

 div.innerHTML= AfficheTemps
}

Temps();
