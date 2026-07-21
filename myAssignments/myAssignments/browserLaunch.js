function launchBrowser(browserName) {
    if (browserName == "chrome") {
        console.log("Launching Google Chrome...");
    } else {
        console.log("Launching alternative browser: " + browserName);
    }
}
console.log("--- Testing launchBrowser ---");
//launchBrowser("chrome");
launchBrowser("Firefox");