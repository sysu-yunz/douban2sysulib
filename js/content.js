console.log("chrome extension party!");

var info_div = document.getElementById("info");
var count = info_div.childNodes.length;
var isbn = info_div.childNodes[count-3].nodeValue.slice(1);
var base_url = "http://202.116.64.108:8991/F/-?func=find-b&request=";
var newURL = base_url+isbn;

console.log(newURL);
