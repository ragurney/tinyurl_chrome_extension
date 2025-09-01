import { LocalStorage } from "../storage/LocalStorage.js";

const form = document.getElementById("tokenForm");
const tokenInput = document.getElementById("apiToken");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = tokenInput.value.trim();

    if (!token) {
        status.textContent = "Please enter a token.";
        return;
    }

    await LocalStorage.storeAPIToken(token);
    status.textContent = "Token saved!";
    setTimeout(() => (status.textContent = ""), 2000);
});