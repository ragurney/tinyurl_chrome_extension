import { LocalStorage } from '../storage/LocalStorage.js';
import { Notification } from '../notifications/Notification.js';

export class TinyURL {
  static API_URI = "https://api.tinyurl.com";

  static async generate(tab) {
    const token = await LocalStorage.fetchAPIToken();

    if (!token) {
      console.error('You must set the API token in extension settings first.');
      Notification.showNoTokenNotification();
      return null;
    }

    const currentURL = tab.url;

    try {
      const response = await fetch(`${TinyURL.API_URI}/create`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: currentURL,
        })
      });

      const jsonResponse = await response.json();
      const data = jsonResponse.data;

      return data.tiny_url;
    } catch (error) {
      console.error("POST failed:", error);
      return null;
    }
  }
}
