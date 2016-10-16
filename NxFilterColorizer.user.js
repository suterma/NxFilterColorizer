// ==UserScript==
// @name         NxFilterColorizer
// @namespace    NxFilterColorizer
// @version      0.101
// @description  Colors lines on NxFilter HTML request reports by whether they are reported as blocked or not (Y/N).
// @copyright    marcel@codeministry.ch, GPLv3 License
// @author       marcel@codeministry.ch
// @match        https://*nxfilter*/logging,request.jsp
// @grant        none
// @downloadURL https://github.com/suterma/NxFilterColorizer/raw/master/NxFilterColorizer.user.js
// @updateURL   https://github.com/suterma/NxFilterColorizer/raw/master/NxFilterColorizer.user.js
// ==/UserScript==

// ---------------------------------------
// Changelog
// 0.101: Fixed URL matching
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
