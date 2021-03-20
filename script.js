mapboxgl.accessToken = 
'pk.eyJ1Ijoic3RhZmZmcm9tYWZyaWNhIiwiYSI6ImNrbWgyeTJsdTAzZjUydm52M3l4emF3MmcifQ.BS-ZYWk-adtPXplOydgJ0g'

navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, { 
    enableHighAccuracy: true
})
function successLocation(position) {
console.log(position)
setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
        });
}


