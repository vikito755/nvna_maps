
document.addEventListener("DOMContentLoaded", function(){  
  
  var mymap = L.map('mapid').setView([43.2115507, 27.9323112], 13);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      minZoom: 1,
      maxZoom: 30,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidmlrLWluZyIsImEiOiJjazVqcjVmMzcwNXRoM29ybTZ2bndlaXA4In0.HUAwyQiXSotQeGEfVykBxQ'
  }).addTo(mymap);
  
  var marker = L.marker([43.2115507, 27.9323112]).addTo(mymap);
  
  var showMapButton = document.getElementById("show-map-button");  
  
  showMapButton.addEventListener("click", showMap );
  
  
   });

   function showMap() {  
    document.getElementById("mapid").classList.toggle('visible');
    console.log('Works');
  }

