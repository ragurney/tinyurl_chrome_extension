export class LocalStorage {
    static async storeAPIToken(token) {
        await chrome.storage.local.set({ tinyURLToken: token });
    }

    static async fetchAPIToken() {
        const result = await chrome.storage.local.get("tinyURLToken");
        return result.tinyURLToken || null;
    }
}