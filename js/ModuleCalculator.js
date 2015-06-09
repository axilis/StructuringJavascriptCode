(function(App, $) {
    "use strict";
    var Calculator = function(options) {
        // properties
        var settings = {
            containerSel: "",
            fstSel: ".fst",
            sndSel: ".snd",
            equalsSel: ".equals",
            resultSel: ".result",
        };
        var options, fst, snd, equals, result = null;
        
        // constructor
        var construct = function (options) {
            $.extend(settings, options);
        };

        // methods
        var init = function () {
            var container = $(settings.containerSel);
            fst = container.find(settings.fstSel);
            snd = container.find(settings.sndSel);
            equals = container.find(settings.equalsSel);
            result = container.find(settings.resultSel);
            
            // Really??
            equals.click(calculate);
        };

        var calculate = function () {
            var a = +fst.val();
            var b = +snd.val();
            var c = a + b;
            result.text(c);
        };

        // constructor call
        construct(options);
        return {
            init: init
        };
    };
    App.Calculator = Calculator;
})(App, jQuery);

