const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiKey = "bd88b0ad9349a48d14a02c58ee0b539ea407e018"; // Gantilah dengan kunci API Bitly Anda
    var apiUrl = "https://api-ssl.bitly.com/v4/shorten";

    var shortenedUrlTextarea = document.getElementById("shortenedUrl");

    // Periksa apakah input URL kosong
    if (!originalUrl) {
        shortenedUrlTextarea.value = "Error: Input URL is empty!";
        return;
    }

    var requestData = {
        long_url: originalUrl,
    };

    shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    }).then(response => response.json()).then(data => {
        shortenedUrlTextarea.value = data.link;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error: Unable to shorten URL!";
    });
}


reloadBtn.addEventListener('click', () => {
    location.reload();
});