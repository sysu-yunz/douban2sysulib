chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-click":
            chrome.tabs.create({
                url:'http://www.baidu.com'
            });

            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);

chrome.extension.onRequest.addListener(     //listen to requests
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.put_isbn != null)
      sendResponse({farewell: "got isbn"});  //send response
  });