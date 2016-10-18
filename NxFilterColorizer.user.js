// ==UserScript==
// @name         NxFilterColorizer
// @namespace    https://github.com/suterma/
// @version      0.105
// @description  Colors lines on NxFilter HTML request reports by whether they are reported as blocked or not (Y/N).
// @copyright    marcel@codeministry.ch, GPLv3 License
// @author       marcel@codeministry.ch
// TODO change the include value to your needs. The give value requires a nxfilter subdomain and the typical report path.
// @include      https://*nxfilter*/logging,request.jsp*
// TODO remove when not used: The official demo page from the author.
// @include      http://115.71.232.159/logging,request.jsp*
// @grant        none
// @downloadURL  https://github.com/suterma/NxFilterColorizer/raw/master/NxFilterColorizer.user.js
// @updateURL    https://github.com/suterma/NxFilterColorizer/raw/master/NxFilterColorizer.user.js
// ==/UserScript==

// ---------------------------------------
// Changelog
// 0.105: Fixed URL matching
// ---------------------------------------

(function() {
    'use strict';

    var reportrows = document.getElementsByClassName("row");
    for (var i = 0; i < reportrows.length; i++) {
        var reportrow = reportrows[i];
        if (reportrow.innerHTML.indexOf('<td align="center">Y</td>') != -1) {
                reportrow.style.backgroundColor="#FFCACA";
                reportrow.class = "requestblocked";
            }
        if (reportrow.innerHTML.indexOf('<td align="center">N</td>') != -1) {
                reportrow.style.backgroundColor="#DAF7A6";
                reportrow.class = "requestallowed";
            }
    }
})();
