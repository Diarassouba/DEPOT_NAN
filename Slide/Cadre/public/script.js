var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide')
var slidesRight = document.querySelector('#suivant');
var slidesLeft = document.querySelector('#precedant');
console.log(slidesRight);
console.log(slidesLeft);
var decolle ;
var count = 0;



function right()
{
    decolle = 1;
    slider.style.transform = "translate(-300px)"
    nom()
}

function left()
{
    decolle = -1;
    slider.style.transform = "translate(300px)"
    nom()
}

slidesRight.addEventListener('click', left)
slidesLeft.addEventListener('click',right)

function nom()
{
    if(decolle ===-1)
    {
        slider.appendChild(slider.firstElementChild)

    }else
    
    {
        slider.prepend(slider.lastElementChild)
    }
    slider.style.transition ="none"
    slider.style.transition ="translate(0)"

}

// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// var containerWidth = container.offsetWidth;
// console.log(containerWidth)
// console.log(slider)
// window.addEventListener("resize", checkWidth);

// function checkWidth() {
// containerWidth = container.offsetWidth;
// setParams(containerWidth);
// }   
// // window.addEventListener("load", async()=>
// // {
// //   var donne = await fetch("")
// // })
// function setParams(w) {
// if (w < 551) {
//   slidesPerPage = 1;
// } else {
//   if (w < 901) {
//       slidesPerPage = 2;
//   } else {
//       if (w < 1101) {
//           slidesPerPage = 3;
//       } else {
//           slidesPerPage = 4;
//       }
//   }
// }
// slidesCount = slides - slidesPerPage;
// if (currentPosition > slidesCount) {
//   currentPosition -= slidesPerPage;
// };
// currentMargin = - currentPosition * (100 / slidesPerPage);
// slider.style.marginLeft = currentMargin + '%';
// if (currentPosition > 0) {
//   buttons[0].classList.remove('inactive');
// }
// if (currentPosition < slidesCount) {
//   buttons[1].classList.remove('inactive');
// }
// if (currentPosition >= slidesCount) {

//   buttons[1].classList.add('inactive');
// }
// }

// setParams();

// function slideRight() {
// if (currentPosition != 0) {
//   slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//   currentMargin += (100 / slidesPerPage);
//   currentPosition--;
//   console.log(currentMargin)
//   console.log(slidesPerPage)
// };
// if (currentPosition === 0) {
//   buttons[0].classList.add('inactive');
// }
// if (currentPosition < slidesCount) {
//   buttons[1].classList.remove('inactive');
// }
// };
// console.log(slidesCount);
// function slideLeft(){
// if (currentPosition != slidesCount) {

//     slider.style.transform =  currentMargin - (100 / slidesPerPage) + '%';
//     currentMargin -= (100 / slidesPerPage);
//     currentPosition++;
//     console.log(currentMargin)
//     console.log(slidesPerPage)

// };
// if (currentPosition == slidesCount) {
//   buttons[1].classList.add('inactive');
// }
// if (currentPosition > 0) {
//   buttons[0].classList.remove('inactive');
// }
// };