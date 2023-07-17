let xhr = new XMLHttpRequest();
let result = document.getElementById("displayresult");

let method = "Get";
let url = "https://www.omdbapi.com/?t=Avatar&apikey=b4cdfba7";
xhr.open(method, url, true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 400) {
    let response = JSON.parse(xhr.responseText);
    console.log(response);
    result.innerHTML = `<p style="font-size:10px">Movie Title: ${response.Title}<br>imdbRating: ${response.imdbRating}<br>Description: ${response.Plot}</p><br><img src=${response.Poster} style="max-height:200px">`;
  } else {
    console.log("Error: " + xhr.status);
  }
};

xhr.onerror = function () {
  console.log("Request Failed");
};

xhr.send();