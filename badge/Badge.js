export class Badge {
    static showErrorBadge() {
        chrome.action.setBadgeText({ text: "X" });
        chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
        setTimeout(() => {
            Badge.clearErrorBadge();
        }, 3000);
    }

    static showSuccessBadge() {
        chrome.action.setBadgeText({ text: "✓" });
        chrome.action.setBadgeBackgroundColor({ color: "#4BB543" });
        setTimeout(() => {
            Badge.clearErrorBadge();
        }, 3000);
    }

    static showPendingBadge() {
        chrome.action.setBadgeText({ text: "..." });
        chrome.action.setBadgeBackgroundColor({ color: "#808080" });
    }

    static clearErrorBadge() {
        chrome.action.setBadgeText({ text: "" });
    }
}