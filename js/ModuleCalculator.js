(function(App, $) {
    "use strict";
    var Calculator = function() {
        console.log("module calculator constructor");
        
        var init = function () {
            console.log("module calculator init");
        }

        return {
            init: init
        }
    };
    App.Calculator = Calculator;
})(App, jQuery);

