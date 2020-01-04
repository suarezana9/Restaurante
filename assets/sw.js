const CACHE_NAME = 'STORIES_CACHE-v3';

const files= [
'/assets/index.template.html',
'/dist/javascript/bundle.js',
'/assets/public/images/bar.jpg',

];



self.addEventListener('install', function(event){

    //guardar archivos iniciales
    event.waitUntil(
    caches.open(CACHE_NAME).then( cache =>{
     return cache.addAll(files);
    
    })
    );
});
self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then (function(cacheNames){

            let promises =cacheNames.map(cacheNames=>{
                
                if(CACHE_NAME !== cacheNames) caches.delete(cacheNames);

            });
            return Promise.all(promises);
    
        })
    );
    
});
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return  searchInCacheOrMakeRequest(event.request);
        }) .cache(function(err){
            if(event.request.mode == "navigate")
            return caches.match(event.request);
            
        })
    );
});

 function searchInCacheOrMakeRequest(request){
    const cachePromise =caches.open(CACHE_NAME);
    const matchPromise = cachePromise.then(function(cache){
        return cache.match(request);
    });
    return Promise.all([cachePromise,matchPromise]).then(function([cache,cacheResponse]){

         const fetchPromise= fetch(request).then(function(fetchResponse){
           cache.put(request, fetchResponse.clone());
        return fetchResponse;  
        
    });
        return cacheResponse || fetchPromise;
    });
    
}