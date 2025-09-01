export async function copyToClipboard(tab, text) {
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
            navigator.clipboard.writeText(text)
                .then(() => console.log('Copied to clipboard!'))
                .catch(err => console.error('Failed to copy: ', err));
        },
        args: [text]
    });
}