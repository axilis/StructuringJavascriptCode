(function (App, $) {
    "use strict";

    $(function () {
        var monkeyCalc = App.calculator({containerSel: "#monkey"});
        monkeyCalc.init();
        
        var cowCalc = App.calculator({containerSel: "#cow"});
        cowCalc.init();
    })
    
})(App, jQuery);

