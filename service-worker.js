chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      window.alert('Hello from my extension!!');
    }
  });
});
