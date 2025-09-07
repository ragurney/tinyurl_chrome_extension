# Privacy Policy

**Effective Date:** 9/4/2025

This Chrome extension ("the Extension") is designed to generate shortened URLs using the TinyURL API. The Extension respects your privacy and is committed to transparency regarding the handling of user data.

---

## Data Collection
The Extension does **not** collect, track, or transmit any personal information, browsing history, or usage data to the developer or to third parties.

The only piece of data you may provide is your **TinyURL API token**. This token is entered manually by you and stored only in your browser’s local storage (`chrome.storage.local`).

---

## Data Usage
- **API Token**:  
  The API token you provide is used exclusively to authenticate requests to the TinyURL API in order to generate shortened URLs.  
  This token is **never transmitted to the developer** and is only sent directly from your browser to the TinyURL service.

- **Active Tab URL** (`activeTab` permission):  
  When you trigger the extension, it may read the URL of your current active tab in order to shorten it.  
  This URL is used only for the purpose of generating a shortened link and is not logged, collected, or transmitted anywhere other than to the TinyURL API at your request.

---

## Data Storage
- The API token you provide is stored locally in your browser’s storage (`chrome.storage.local`).  
- No other information (such as your browsing history, usage metrics, or shortened URLs) is stored by the Extension.  
- All stored data remains entirely on your device and under your control. You may remove it at any time by clearing your extension data in Chrome.

---

## Data Sharing
- The Extension does **not** share any user data with the developer or any third party.  
- The only external communication occurs when you explicitly request to shorten a URL, at which point your provided API token and the current page URL are sent directly to the TinyURL API.  
- The developer has no access to, and does not receive, any of this data.

---

## Permissions Explanation
The Extension requests the following Chrome permissions:

- **`activeTab`**: Used to access the current tab’s URL in order to shorten it.  
- **`scripting`**: Used to execute a small script that copies the shortened URL to your clipboard.  
- **`storage`**: Used to locally store your TinyURL API token on your device.  
- **`notifications`**: Used to show notifications (e.g., errors such as “No token found”).  
- **`clipboardWrite`**: Used to copy the generated shortened URL directly to your clipboard for convenience.  

These permissions are used **solely for the core functionality of the Extension**. No other data is accessed or stored.

---

## User Control
- You can revoke the stored API token at any time by clearing the Extension’s data in Chrome.  
- You may uninstall the Extension at any time, which will permanently delete all locally stored data.  
- The Extension does not provide analytics or usage reporting to the developer.

---

## Contact
If you have any questions or concerns about this Privacy Policy, please contact the developer by opening an issue on this GitHub repo.
