import { Badge } from "../badge/Badge.js"
import { TinyURL } from "./TinyURL.js";
import { copyToClipboard } from "../utils.js";

chrome.action.onClicked.addListener(async (tab) => {
    Badge.showPendingBadge();

    const tinyURL = await TinyURL.generate(tab);

    if (!tinyURL) {
        Badge.showErrorBadge();
        return;
    };

    await copyToClipboard(tab, tinyURL);
    Badge.showSuccessBadge();
});