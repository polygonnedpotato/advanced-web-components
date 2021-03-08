import * as startup from '/internal/runtime/startup.js';

chrome.runtime.onInstalled(function() {
    startup.afterinstall();
    });