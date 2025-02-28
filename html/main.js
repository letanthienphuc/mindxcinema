
function fetchMovies() {

    const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=9b7c3ede447b14c5e0e9d33a137ddac9&language=vi-VN';
    fetch(API_URL)
        .then(response => response.json())
        .then(data => { //thay vì console.log thì mình sẽ viết function để hiển thị lên html 
            displayMovies(data.results);
        });
}
function displayMovies (moviesList) {
    const movieContainer = document.getElementById("movies"); 
    movieContainer.innerHTML     =""
    moviesList.forEach(movie => {
        const movieElement = document.createElement("div"); 
        movieElement.classList.add("movie");
        movieElement.innerHTML =`
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}"> 
            <div>
                <h3>${movie.title}</h3>
                <p>${movie.overview.substring(0, 100)}...</p>
                <button onclick="viewMovie(${movie.id})">Xem chi tiết</button>
            </div>
        `;
        movieContainer.appendChild(movieElement);       
    });
}    
function wiewMovie(id) {
    alert(`xem chi tiết phim ID: ${id}`)
}

document.addEventListener("DOMContentLoaded",fetchMovies)
        

