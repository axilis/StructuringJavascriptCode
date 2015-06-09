(function(App, $) {
    "use strict";
    var Calculator = function() {
        // variables
        
        // constructor
        var construct = function () {
            console.log("module calculator constructor");
        };

        // methods

        var init = function () {
            console.log("module calculator init");
        };

        // constructor call
        construct();
        return {
            init: init
        };
    };
    App.Calculator = Calculator;
})(App, jQuery);

