let button=document.querySelector("#button")
let title=document.querySelector("#title")
let temp=document.querySelector("#temp")
let sky=document.querySelector("#sky")
let humidity=document.querySelector("#humidity")
let img=document.querySelector("#img")
const key="6ed3105c2683a7a9af9a632beae1b762"

button.addEventListener("click",(evt)=>{
    let input=document.querySelector("#input")
    input=input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&lang=pt_br&appid=${key}`)
    .then((res)=>res.json())
    .then((res)=>{
        title.innerHTML="Tempo em "+res.name
        humidity.innerHTML="Humidade "+res.main.humidity+"%"
        sky.innerHTML=res.weather[0].description
        temp.innerHTML=res.main.temp+"°C"
        img.setAttribute("src",`https://openweathermap.org/img/wn/${res.weather[0].icon}.png`)
    })
})