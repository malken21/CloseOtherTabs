chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const activeTabId = tabs.find(tab => tab.active).id;

        tabs.forEach(tab => {
            if (tab.id !== activeTabId) {
                chrome.tabs.remove(tab.id).catch(error => {
                    console.log(`Error removing tab ${tab.id}: ${error}`);
                });
            }
        });
    });
});
