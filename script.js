// step1
var map
function initMap(){
	var options ={
		center:{lat:43.654,lng:-79.383},
		zoom:8,

									 //disableDefaultUI:true ,     disables zoomin zoom out buttom, or fullscreen button ,map/satellite thing ( All attributes here , https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.disableDefaultUI)
								 //	draggable:false,      now you can't drag map to other place , it basiaclly sticks to the lat long
							 //	mapTypeId:'hybrid'  	  the default map type will be satellite, you can change SATELLITE to ROADMAP , or Hybrid which combination of both
 };
	map = new google.maps.Map(document.getElementById('map'),options);  // to configure the map we pass options object to the class google.maps.Map 


}

















  // step 1 we can pass objects directly without creating option object , but above is the clean code
  // <script>
  //     var map;
  //     function initMap() {
  //       map = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: -34.397, lng: 150.644},
  //         zoom: 8
  //       });
  //     }
  //   </script>