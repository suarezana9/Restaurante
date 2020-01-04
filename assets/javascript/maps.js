import styles from './maps/styles';


function initMap(){
    const coords = {
        lat:-34.628293,
            lng:-58.462218
    };
    let map = new google.maps.Map (document.getElementById('mapa'),{
        center:coords,
        zoom:15,
        styles: styles
       
    });
    let marker = new google.maps.Marker({
        position:coords,
        map:map,
        title:'Resto, Bar & Pizzas'
    });

}
initMap();