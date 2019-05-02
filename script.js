var map
function initMap(){
	var options ={
		center:{lat:43.654,lng:-79.383},
		zoom:5
	};
	map = new google.maps.Map(document.getElementById('map'),options);  // to configure the map we pass options object 
}
  // we can pass objects directly without creating option object , but above is the clean code
  // <script>
  //     var map;
  //     function initMap() {
  //       map = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: -34.397, lng: 150.644},
  //         zoom: 8
  //       });
  //     }
  //   </script>