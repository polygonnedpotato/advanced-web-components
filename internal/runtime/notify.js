import * as debug from 'debug.js'
function NormalNotification(Title, BodyText) {
    if (Notification.permission === 'granted') {
        // show notification here
        var notify = new Notification(Title, {
            body: BodyText,
        });
    } else {
        // request permission from user
        Notification.requestPermission().then(function (p) {
            if (p === 'granted') {
                // show notification here
                var notify = new Notification(Title, {
                    body: BodyText,
                    icon: IconName,
                });
            } else {
                console.log('User blocked notifications.');
            }
        }).catch(function (err) {
            console.error(err);
        });
    }
}
function NormalNotificationWithIcon(Title, BodyText, IconName) {
    if (Notification.permission === 'granted') {
        // show notification here
        var notify = new Notification(Title, {
            body: BodyText,
            icon: IconName
        });
    } else {
        debug.log()
}
function PersistantNotification() {

}
function RemovePersistantNotification(NotificationID) {

}
function WindowedNotification() {

}