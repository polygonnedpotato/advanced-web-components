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
                Log('NormalNotification','/internal/runtime/notify.js','Error','User blocked notifications.');
            }
        }).catch(function (err) {
            console.error(err);
        });
    }
}
function NormalNotificationWithIcon(Title, BodyText, IconName) {
    if (Notification.permission === 'granted') {
        try {
            var notify = new Notification(Title, {
                body: BodyText,
                icon: IconName
            }
        }, catch(err) {
            Log("NormalNotificationWithIcon(" + Title + ", " + BodyText + ", " + IconName + ")",'/internal/runtime/notify.js','Error','Error returned:' + err)
        };
    } else {
        debug.log()
    }
}
function PersistantNotification() {

}
function RemovePersistantNotification(NotificationID) {

}
function WindowedNotification() {

}
function ProgressNotification(Title,BodyText,Progress) {

}
function SetProgressNotification(NotificationID) {

}