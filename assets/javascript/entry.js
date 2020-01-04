import '../css/app.scss';
import './slider/sliderDOM';

import './maps';
import './menu';


if ('serviceWorker' in navigator) {
        window.addEventListener('load', function(){
            navigator.serviceWorker.register('assets/sw.js').then (function(){
                console.log('ServiceWorker registered');
            })
            .catch(function(err){
                console.log('ServiceWorker failed', err);
            });

    });

}
