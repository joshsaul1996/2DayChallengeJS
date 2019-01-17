var requestURL = "http://127.0.0.1:8080/api/film";
var request = new XMLHttpRequest();



request.open("GET", requestURL);
request.responseType = "json"
request.send();
request.onload = function() {
var requestData = request.response;
var mypara = document.createElement("p");
mypara.innerHTML = requestData;

document.getElementsByTagName("BODY")[0].appendChild(mypara);
}
