(function () {
 
    "use strict";

    
    MashupPlatform.prefs.registerCallback(function (new_values) {
        if ('username' in new_values) {
            document.getElementById("username").innerHTML=MashupPlatform.prefs.get('username');
        }
    }.bind(this));

    /*
    var init = function init() {
        // When DOM is ready
    };
    
    window.addEventListener("DOMContentLoaded", init, false);
    */
})();
