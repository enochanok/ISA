
// const url = `studentDetails.json`;
// data = fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//     console.log(data);
//         data.forEach((student) =>{
//             document.getElementById("displayRequest").innerHTML += `${student.name}<br>`;
//         })
   
// });

let xhr = new XMLHttpRequest();
let result = document.getElementById("displayRequest");
let method = "Get";
let url = "studentDetails.json";

xhr.open(method, url, true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
        let response = JSON.parse(xhr.responseText);
        response.forEach((student) => {
            document.getElementById("displayRequest").innerHTML += `${student.name}<br>`
        })
    } else {
        console.log("Error: " + xhr.status)
    }
}

    xhr.onerror = function () {
        console.log("Request failed");
    }

    xhr.send();