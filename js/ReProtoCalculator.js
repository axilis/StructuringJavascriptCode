(function(App, $) {
    "use strict";
    var Calculator = function(options) {
        this.options = options;
    };

    Calculator.prototype = (function () {
        var settings = {
            containerSel: "",
            fstSel: ".fst",
            sndSel: ".snd",
            equalsSel: ".equals",
            resultSel: ".result",
        };

        var init = function() {
            console.log("calculator init");

            $.extend(settings, this.options);

            console.log(settings);
        };

        return {
            init: init
        };
    })();

    App.Calculator = Calculator;
})(App, jQuery)