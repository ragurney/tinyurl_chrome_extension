const form = document.getElementById("tokenForm");
const tokenInput = document.getElementById("apiToken");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const token = tokenInput.value.trim();

    if (!token) return;

    await LocalStorage.storeAPIToken(token);
});