const blockedSites = ["youtube.com", "reddit.com"];

function shouldClose(url) {
  if (!url) return false;

  return blockedSites.some((site) => url.includes(site));
}

function checkTab(tabId, url) {
  if (shouldClose(url)) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "BOY",
      message: "Lock in!",
    });

    chrome.tabs.remove(tabId);
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    checkTab(tabId, changeInfo.url);
  }
});

chrome.tabs.onCreated.addListener((tab) => {
  if (tab.url && tab.id !== undefined) {
    checkTab(tab.id, tab.url);
  }
});
