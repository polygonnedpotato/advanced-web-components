function afterinstall () {
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
}