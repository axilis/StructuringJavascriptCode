(function (App, $) {
    "use strict";

    $(function () {
        var monkeyCalc = App.Calculator({ containerSel: "#monkey" });
        monkeyCalc.init();
        
        var cowCalc = App.Calculator({ containerSel: "#cow" });
        cowCalc.init();
    })
    
})(App, jQuery);

