chrome.tabs.onUpdated.addListener(() => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const activeTab = tabs.find(tab => tab.active);

        if (!activeTab) return; // 現在のタブが取得できなかったら return

        const activeTabId = activeTab.id;

        tabs.forEach(tab => {
            if (tab.id === activeTabId) return; // 現在のタブだったら return

            chrome.tabs.remove(tab.id).catch(error => {
                console.log(`Error removing tab ${tab.id}: ${error}`);
            });
        });
    });
});
