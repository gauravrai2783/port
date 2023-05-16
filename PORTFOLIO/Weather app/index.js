// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let key="a3f9b8757b1c4b640c45b9649e142edd"

let container=document.getElementById("container")

let map=document.getElementById("gmap_canvas")

async function getWeather(){
try{

    let city=document.getElementById("city").value;


   let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

let data=await res.json();
console.log('data:', data);

appendData(data)
}
catch(err){
    console.log('err:', err)
}



}

function appendData(data){
    container.innerHTML=""
    let name=document.createElement("p");
     name.innerText=`Name -${data.name}`

     let tmp=document.createElement("p");
     tmp.innerText=`Temp -${data.main.temp}`

     let humidity=document.createElement("p");
     humidity.innerText=`Humidity -${data.main.humidity}`

     let pressure=document.createElement("p");
     pressure.innerText=`Pressure -${data.main.pressure}`

     container.append(name,tmp,humidity,pressure)

}

