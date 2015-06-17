(function(App, $) {
    "use strict";
    var Calculator = function(options) {
        this.options = options;
    };

    Calculator.prototype = (function () {
        var defaultSettings = {
            containerSel: "",
            fstSel: ".fst",
            sndSel: ".snd",
            equalsSel: ".equals",
            resultSel: ".result",
        };
        var fst, snd, equals, result;

        var init = function() {
            var _this = this;

            _this.settings = {};
            $.extend(_this.settings, defaultSettings, this.options);

            var container = $(_this.settings.containerSel);
            _this.fst = container.find(_this.settings.fstSel);
            _this.snd = container.find(_this.settings.sndSel);
            _this.equals = container.find(_this.settings.equalsSel);
            _this.result = container.find(_this.settings.resultSel);
            
            _this.equals.click(function () {
                calculate(_this);
            });
        };

        var calculate = function(_this) {
            var a = +_this.fst.val();
            var b = +_this.snd.val();
            var c = a + b;
            _this.result.text(c);
        }

        return {
            init: init
        };
    })();

    App.Calculator = Calculator;
})(App, jQuery)