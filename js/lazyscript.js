/*=== lazyLoading ===*/
var bLazy;

window.addEventListener('load', function() {
    bLazy = new Blazy({
        success: function(elt) {
            // some stuff
        },
        error: function(elt, msg) {
            console.log("LazyLoad fail.");
            if (msg === 'invalid')
                console.log(elt);
                retry(elt);
                
        }
    });
}, false);

function retry(elt) {
    sleep(1000);
    bLazy.load(elt);
}