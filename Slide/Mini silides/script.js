// let Slide = [["/image/adler.jpg","Aigle"],["/image/code-1839406_1920.jpg","Code"],["/image/workplace-2303851_1920.jpg","Bureau"],["/image/youtuber-2838945_1920.jpg","Youtouber"]]
// let num = 0;
// let next = document.querySelector("#next")
// let precedent = document.querySelector("#next")
// console.log(Slide)
// function Change(sens)
// {
//     num += sens

//     if(num < 0){
//         num = Slide.length - 1;
//     }
//     if(num > Slide.length - 1)
//     {
//         num = 0
//     }
//     document.querySelector("#photo").src = Slide[num][0]
//     document.querySelector("#slide h4").innerHTML = Slide[num][1]
//     console.log(Slide[num][0])
//     console.log(Slide[num][1])
// }


 /********    Avec    ************** */
let num = 0;
let next = document.querySelector("#next")
let precedent = document.querySelector("#next")
function Change(sens)

{
    num += sens

    if(num < 0){
        num = Slides.length - 1;
    }
    if(num > Slides.length - 1)
    {
        num = 0
    }
    document.querySelector("#photo").src = Slides[num].image
    document.querySelector("#slide h4").innerHTML = Slides[num].titre
    console.log(Slides[num][0])
    console.log(Slides[num][1])
}

let Slides = []


console.log(Slides)
 fetch("./datas.json")
 .then(datas => 
    {
        return datas.json()
        
    }
    )
 .then(datas => {
    Slides = datas;
    console.log(Slides[0].titre)
  
    console.log(Slides.length)
 })







