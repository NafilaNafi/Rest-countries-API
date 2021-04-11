//create a request variable and assigning new XMLHttpRequest
var req = new XMLHttpRequest();
// open a new connection
req.open("GET", "https://restcountries.eu/rest/v2/all", true); //using GET request on the URL endpoint

req.send(); //Send the request

req.onload = function () {  //Load response
  var data = JSON.parse(this.response); // Begin accessing JSON data here
  for (var i in data) {
    console.log(data[i].name);
  }
};
