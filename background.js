import * as startup from '/internal/runtime/startup.js';

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