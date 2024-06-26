//reloj
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var timeString = hours.toString().padStart(2, '0') + ":" +
                     minutes.toString().padStart(2, '0') + ":" +
                     seconds.toString().padStart(2, '0');
  
    document.getElementById("clock").textContent = timeString;
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);


 var paragraph = document.getElementById("clock");
  paragraph.style.color = "green";
  paragraph.style.fontSize = "35px";


  let lon;
  //creamos varible de longitud
  let lat;
  //creamos variable de latitud
  let temperatura = document.querySelector(".temp")
  //aqui se obtiene el elemento de html temp para asi rellenarlo posteriormente con la api
  let summary = document.querySelector(".summary")
  //aqui trae la descripcion de la api
  let loc = document.querySelector(".location")
  //locacion acutal que tendremos
  const kelvin = 273.15
  //esto sera para tranforma kelvin a celcius
  let iconoAnimado =document.getElementById('iconos')
  
  
  window.addEventListener("load",()=>{
  
  
  if(navigator.geolocation){
  //si navegador que se esta utilizando tiene una locacion
  
  navigator.geolocation.getCurrentPosition((position) =>{
  //metodo para obtener la posicion actual
  // esto es para definir las variables de logitud y latitud
  
  
          console.log(position);
          lon = position.coords.longitude;
          lat = position.coords.latitude;
  
  
  //declarar constante que sera la id de la api
  
  const api ="0b19d7c98a756d3894994a6bf76ba4d4";
  
  const url_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${api}`;
  
  //para hacer peticiones
  fetch(url_api).then((response)=>{
  
      return response.json();
  })
  .then((data)=>{
  
  console.log("esta es la data:");
  console.log(data);
  
  //esto para reemplazar las variables que vienen del html
  temperatura.textContent = Math.floor(data.main.temp - kelvin) +"°C";
  
  summary.textContent = data.weather[0].description;
  loc.textContent =data.name + "," +data.sys.country;
  
  //aqui depende que clima diga en el array se pondra una imagen u otra
  switch (data.weather[0].main) {
      case 'Thunderstorm':
          iconoAnimado.src='static/animated/thunder.svg'
          console.log('TORMENTA');
          break;
        case 'Drizzle':
          iconoAnimado.src='static/animated/rainy-2.svg'
          console.log('LLOVIZNA');
          break;
        case 'Rain':
          iconoAnimado.src='static/animated/rainy-7.svg'
          console.log('LLUVIA');
          break;
        case 'Snow':
          iconoAnimado.src='static/animated/snowy-6.svg'
            console.log('NIEVE');
          break;                        
        case 'Clear':
            iconoAnimado.src='static/animated/day.svg'
            console.log('LIMPIO');
          break;
        case 'Atmosphere':
          iconoAnimado.src='static/animated/weather.svg'
            console.log('ATMOSFERA');
            break;  
        case 'Clouds':
            iconoAnimado.src='static/animated/cloudy-day-1.svg'
            console.log('NUBES');
            break;  
        default:
          iconoAnimado.src='static/animated/cloudy-day-1.svg'
          console.log('por defecto');
  
  }
  
  });
  });
  }
  
  
  });
  //modo claro, modo oscuro
  $(document).ready(function() {
    $("#modeToggle").click(function() {
      $("body").toggleClass("dark-mode");
      if ($("body").hasClass("dark-mode")) {
        $(this).text("Modo Claro");
      } else {
        $(this).text("Modo Oscuro");
      }
    });
  });
  


