function initMap(){
    let map = new google.maps.Map (document.getElementById('mapa'),{
        center:{
            lat:19.426245,
            lng:-99.167332
        },
        zoom:16,
    })

}
initMap();