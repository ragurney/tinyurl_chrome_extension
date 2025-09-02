export class Notification {
    static showNoTokenNotification() {
        chrome.notifications.create({
            type: "basic",
            iconUrl: '../images/link.png',
            title: "Error",
            message: "No token found",
            requireInteraction: false
        }, (notificationId) => {
            setTimeout(() => {
                chrome.notifications.clear(notificationId);
            }, 5000);
        });
    }
}