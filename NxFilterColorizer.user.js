// ==UserScript==
// @name         NxFilterColorizer
// @namespace    http://codeministry.ch
// @version      0.1
// @description  Colors lines on NxFilter HTML request reports by whether they are reported as blocked or not (Y/N)
// @author       marcel@codeministry.ch
// @match        *nxfilter*/logging,request.jsp
// @grant        none
// ==/UserScript==

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
