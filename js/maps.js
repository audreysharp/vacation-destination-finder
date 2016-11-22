function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('top'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 10
        });

        

        //if(navigator.location){
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

              //infoWindow.setPosition(pos);
              //infoWindow.setContent('Location found.');
              map.setCenter(pos);

              // Create a marker and set its position.
            var marker = new google.maps.Marker({
              map: map,
              position: pos,
              title: 'Vacation Destination'
            });
            });


         // }
          // else{
          //   console.log("no location");
          // }
        }