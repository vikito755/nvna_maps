document.addEventListener("DOMContentLoaded", function(){  

  locations = [ ['planetarium' ,43.21195174937264, 27.931564450263977, 20 ], [ 'center' ,43.21273368963036 ,27.933082580566403, 20 ], [ 'green field' ,43.21325367435148, 27.930850982666016, 20 ] ];

  locations.forEach(

     ( location ) => {
      let container = document.getElementById("container");
      let name = location[0];
      let latitude = location[1]; 
      let longitude = location[2];
      let zoom = location[3];
      let aTag = document.createElement('a');
      aTag.setAttribute('href', `http://www.google.com/maps/place/${latitude},${ longitude }/@${latitude},${ longitude },20z`);
      aTag.innerText = name;
      container.appendChild(aTag);
  
   });
});