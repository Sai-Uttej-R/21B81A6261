async function call()
{
    let city="Hyderabad";
    let response=await fetch("https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
    if(!response.ok)
        throw "Error has occurred"+response.status;
    let data=await response.json();
    console.log(data)
    console.log("End of call")
}
const btn=document.querySelector("button")
btn.addEventListener("click", function(){
    call().catch(error=>{
        console.warn(error);
    });
})