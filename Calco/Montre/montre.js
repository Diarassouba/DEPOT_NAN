setInterval(Shotime,1000)

function Shotime()
{
    let temps = new Date()
    hours = temps.getHours()
    minutes = temps.getMinutes()
    secondes = temps.getSeconds()
    // am_pm ="AM"
    // if(hours > 12)
    // {
    //     hours -= 12;
    //     am_pm ="PM"
    // }
    // if(hours == 0)
    // {
    //     hours = 12;
    //     am_pm ="AM"
    // }
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0"+ minutes : minutes
    secondes = secondes < 10 ? "0"+ secondes : secondes;

    let time = hours + ':' + minutes + ':' + secondes
    document.querySelector('#montre').innerHTML = time
}

Shotime()
