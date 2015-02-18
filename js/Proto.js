(function ($) {
    "use strict";

    $(function () {
        var monkeyCalc = new App.Calculator({ containerSel: "#monkey" });
        monkeyCalc.init();

        var cowCalc = new App.Calculator({ containerSel: "#cow" });
        cowCalc.init();
    })
    
})(jQuery);

