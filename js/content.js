console.log("chrome extension party!");

var info_div = document.getElementById("info");
var count = info_div.childNodes.length;
var isbn = info_div.childNodes[count-3].nodeValue.slice(1);

chrome.runtime.sendMessage({directive: isbn}, function(response) {
    console.log("sent isbn to background")
});