var isbn;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.directive.length == 13)
        {
            isbn = request.directive;
            console.log(isbn);
            sendResponse({});
        }
        else if (request.directive == "popup-click")
        {
            var sysu_lib_query = 'http://202.116.64.108:8991/F/-?func=find-b&find_code=WRD&request='+isbn+"&local_base=ZSU01";
            chrome.tabs.create({
                url:sysu_lib_query
            });
            sendResponse({}); // sending back empty response to sender
        }
        else
        {
            alert("unhandled directive!")
        }
    }
);