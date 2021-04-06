import * as startup from '/internal/runtime/startup.js';
import * as notify from '/internal/runtime/notify.js';
import * as grabput from '/internal/runtime/grabput.js';
import * as wman from '/internal/windowmanager/wmanmain.js';

chrome.runtime.onInstalled.addListener(function () {
    const kAWCActions = {
        'wmanextpage': '[AWC WMan] Open in an external window',
    };
    for (let key of Object.keys(kAWCActions)) {
        chrome.contextMenus.create({
            id: key,
            title: kAWCActions[key],
            type: 'normal',
            contexts: ['all'],
        });
    }

    startup.afterinstall();
});