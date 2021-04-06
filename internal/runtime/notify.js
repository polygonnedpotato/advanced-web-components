function NormalNotification(Title, BodyText, IconName) {
    if (Notification.permission === 'granted') {
        // show notification here
        var notify = new Notification(Title, {
            body: BodyText,
            icon: IconName,
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
function PersistantNotification() {

}
function RemovePersistantNotification(NotificationID) {

}
function WindowedNotification() {

}