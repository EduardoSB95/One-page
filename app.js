function initMap () {
     var location = {lat: 38.871857, lng: -77.056267};
     var map = new google.maps.Map(document.getElementById("map"), {
         zoom: 4,
         center: location
     });
}
