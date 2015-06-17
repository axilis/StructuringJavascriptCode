(function(App, $) {
    "use strict";
    var Calculator = function(options) {
        console.log("calculator constructor");
    };

    Calculator.prototype = (function () {
        var init = function() {
            console.log("calculator init");
        };

        return {
            init: init
        };
    })();

    App.Calculator = Calculator;
})(App, jQuery)