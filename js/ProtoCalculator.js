(function(App, $) {
    "use strict";
    
    var Calculator = function(options) {
        var settings = {
            containerSel: "",
            fstSel: ".fst",
            sndSel: ".snd",
            equalsSel: ".equals",
            resultSel: ".result",
        };
        $.extend(settings, options);
        this.settings = settings;
    };
    
    Calculator.prototype = {
        init: function() {
            var container = $(this.settings.containerSel);
            this.fst = container.find(this.settings.fstSel);
            this.snd = container.find(this.settings.sndSel);
            this.equals = container.find(this.settings.equalsSel);
            this.result = container.find(this.settings.resultSel);
            
            var _this = this;
            this.equals.click(function () {
                _this.calculate();
            });
        },
        calculate: function() {
            var a = +this.fst.val();
            var b = +this.snd.val();
            var c = a + b;
            this.result.text(c);
        }
    }
    
    App.Calculator = Calculator;
})(App, jQuery);

