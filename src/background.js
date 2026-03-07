chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === "run_readability") {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            const currentTabId = tabs[0].id;

            chrome.action.setBadgeText({
                text: "...",
                tabId: currentTabId
            });
            chrome.action.setBadgeBackgroundColor({color: "#FBBF24"});
            chrome.scripting.executeScript({
                target: { tabId: currentTabId },
                files: [
                    "lib/Readability.js", 
                    "src/content.js"
                ]
            });

        })
    }
})