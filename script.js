// ==UserScript==
// @name         Lolzteam Midnight Blue
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Lolzteam Midnight Blue style addon
// @author       szyxiii
// @match        https://lolz.guru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    (function() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://i.imgur.com/kad7HAE.png';
        document.getElementsByTagName('head')[0].appendChild(link);
    })();
})();