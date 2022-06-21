let div1 = document.getElementById('container')
let image_url = "https://image.tmdb.org/t/p/w500/"
let datas

// fetch('https://api.themoviedb.org/3/movie/550?api_key=6586550044958c0328a337388a9be74a')
// .then(response => response.json())
// .then(datas => 
//         console.log(datas)
//  )

const repot = function(datas)
{
   for(var key in datas.results){
    let tab = datas.results[key] 
    console.log(tab);
    let demo = ` <div class="image"><img class="img" src="${image_url+tab.poster_path}" alt="">
             <p>${tab.title}</p></div>`
    console.log(tab)

    div1.innerHTML += demo
}

}

window.addEventListener("load",async()=>
{
    var donne = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=6586550044958c0328a337388a9be74a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    donne = await donne.json()
    console.log('test',donne.results)
    repot(donne)
})
