const loadTemparature = (cityname) => {
    const APIKEY = "8edd102d666e9dde69fc23479d134cdf";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
loadTemparature("Barishal");


const displayTemperature =(tempDetails)=>{
    console.log(tempDetails);


    // const celcious = document.getElementById('celcious');
    // celcious.innerHTML = tempDetails.main.temp; 

    // const clouds = document.getElementById('clouds');
    // clouds.innerHTML = tempDetails.weather[0].main;

    common("celcious",tempDetails.main.temp);
    common("clouds",tempDetails.weather[0].main);

}

const common = (id,text)=>{
    const celcious = document.getElementById(id);
    celcious.innerHTML = text; 
}


document.getElementById('searchBtn').addEventListener('click',function(e){
        
    e.preventDefault();
    // console.log(tempDetails);

    const inputvalue = document.getElementById('inputvalue');
    const searchValue = inputvalue.value;

    loadTemparature(searchValue);

    const cityName = document.getElementById('city-name');
    cityName.innerHTML = searchValue;
    
    inputvalue.value = "";
})