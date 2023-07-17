
let fetchData = function fetchMovie(movieName){
    return new Promise((resolve, reject) => {
        const title = document.getElementById("movieName").value;
        const apikey = "a3f036ab";
        const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
        data = fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (movieName.length == 0) {
                reject("Please enter a movie name")
            } else if (data.Error) {
                reject("Movie not found");
            } else {
                resolve(data);
            }
        });
    })   
}

function searchResponse(data) {
     document.getElementById("movieTitle").innerHTML = data.Title;
     document.getElementById("rating").innerHTML = data.Rated;
     document.getElementById("plot").innerHTML = data.Plot;
     document.getElementById("imdbRating").innerHTML = `<i class="fa fa-star" aria-hidden="true"></i> ` +  data.imdbRating;
     document.getElementById("img").src = data.Poster;
     document.getElementById("genre").innerHTML = "Genre: " + data.Genre;
     document.getElementById("year").innerHTML = data.Year;
     document.getElementById("cast").innerHTML = "Cast: " + data.Actors; 
     document.getElementById("Runtime").innerHTML = data.Runtime;
     document.getElementById("director").innerHTML = "Director: " + data.Director;
     document.getElementById("writer").innerHTML = "Writer: " + data.Writer;
     document.getElementById("footer").innerHTML = "&copy Hanok Tamang. All rights reserved. Made with omdbapi"
}

function setData(data){
    setTimeout(()=>{
        searchResponse(data);
    }, 1000);
}


async function main() {
  try {
      const movieName = document.querySelector("#movieName").value;
      data = await fetchData(movieName);
      setData(data);
  } catch (error) {
      alert(error);
  }
}
 document.getElementById("Search").addEventListener("click", main);
 document.querySelector("input").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          event.preventDefault();
          main();
      }
  });


