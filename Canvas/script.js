

let canvas = document.querySelector("canvas")
let context = canvas.getContext("2d")
let heightSquare = 25
let widthSquare = 40
let bar = [[4, 9], [5, 9]]
let ball = [5, 8]
let move = "topleft"

let inter = null, backTopInter=null, moveTopInter=null, moveDownInter=null, backDownInter = null

// Fonction qui dessine mon canvas
function draw() {
    // rendre le contenu de notre canvas vide
    context.clearRect(0, 0, canvas.width, canvas.height)


    // dessiner notre 
    for (let i = 0; i < bar.length; i++)
    {
        context.fillStyle = "red"
        context.fillRect(bar[i][0] * widthSquare, bar[i][1] * heightSquare, widthSquare, heightSquare)

    }

    // la couleur de la balle

    context.fillStyle = "lime"

    ///////////////////////

    context.beginPath()

    // la balle 
    context.arc(ball[0] * widthSquare, ball[1] * heightSquare, 10, 0, Math.PI * 2, false)

    context.fill()
}


// function backTop()
// {
//     console.log("backTop")

//     console.log(ball)


//     clearInterval(inter)


//     inter = setInterval(() => {
        
//         ball = [ball[0] - 1, ball[1] - 1]
      
//         if (ball[0] === 0)
//         {
//             moveTop()
//         }

//         draw()

//     }, 300);
   
//     console.log("demi",inter)
// }


// function moveTop()
// {
//     console.log("moveTop")

//     console.log(ball)


//     clearInterval(inter)


//     inter = setInterval(() => {

//             ball = [ball[0] + 1, ball[1] - 1]

//             if (ball[1] === 0){
                
//                 moveDown()
//             }

//             draw()
//     }, 300);
// }


// function moveDown()
// {
//     console.log("moveDown")

//     console.log(ball)


//     clearInterval(inter)

//     inter = setInterval(() => {


//         ball = [ball[0] + 1, ball[1] + 1]


//         if (ball[0] === 10)
//         {
//             backDown()
//         }

//         draw()

//     }, 300)
// }



// function backDown()
// {
//     console.log("backDown")

//     console.log(ball)

//     clearInterval(inter)

//     inter = setInterval(() => {
//         ball = [ball[0] - 1, ball[1] + 1]

//         if (ball[1] === 10)
//         {
//             interceptBall()
        
//         }

//         draw()
//     }, 300)
// }


function moveBall()
{

    inter = setInterval(() => {
        let [x,y] = ball
        if (x === 0) {
            move = "topright"

        }else if(y === 0)
        {
            move = "bottomright"

        }else if(x === 10)
        {
            move = "bottomleft"
        }else if(y === 10)
        {
            clearInterval(inter)
            alert("GAME OVER")
        }else if (y === 9 && (x === bar[0][0] || x === bar[1][0]) )
        {   
            if (y === 9 && (x === bar[0][0] || x === bar[1][0]) )
            {
                move = "topleft"
            }else
            {
                move = "topright"
            }


        }

        switch (move) {

            case "topleft": ball =[x-1,y-1]
            break;

            case "topright": ball = [x + 1,y-1]
            break;

            case "bottomright": ball = [x + 1,y+1]
            break;

            case "bottomleft": ball = [x - 1,y + 1]
            break;
        }

        draw();

    }, 150);

}

// function interceptBall()
// {
//     if (ball[0] === bar[0][0] || ball[0] === bar[1][0])
//     {
//         console.log(ball)
//         let r = ball[0] === bar[0][0] ? -1 : 1 /*get appropriate value or r*/

//         ball = [ball[0] + r, ball[1] - 1]
//         console.log(bar)
//         console.log("ball after", ball)
//         backTop()
//     }
//     else
//     {
//         alert("GAME OVER")
//         clearInterval(inter)
//     }
// }





window.addEventListener("load", () => {
    draw()
    moveBall()
})



window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" &&  bar[1][0] < 9)
    {
        bar.shift()
        bar.push([bar[0][0] + 1, bar[0][1]])
        // console.log(bar)
        draw()
    }


    else if (e.key === "ArrowLeft" && bar[0][0] > 0)
    {
        bar.pop()
        bar.unshift([bar[0][0] - 1, bar[0][1]])
        // console.log(bar)
        draw()
    }

})


