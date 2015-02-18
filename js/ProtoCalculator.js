(function (App, $) {
    "use strict";

    var Calculator = function() {
        console.log("proto calculator");
    };

    Calculator.prototype = {
        init: function () {
            console.log("proto calculator init");
        }
    }

    App.Calculator = Calculator;
})(App, jQuery);

