const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// Movie Titles and corresponding elements
const movies = [
    { title: 'deadpool and wolverine', id: 'movie-slide-1', url: 'https://ww4.123moviesfree.net/movie/deadpool-wolverine-1630857355/' },
    { title: 'avengers: endgame', id: 'movie-slide-2', url: 'https://ww4.123moviesfree.net/movie/avengers-endgame-28501/' },
    { title: 'war of the worlds', id: 'movie-slide-3', url: 'https://ww4.123moviesfree.net/movie/war-of-the-worlds-3695/' },
    { title: 'independence day', id: 'movie-slide-4', url: 'https://ww4.123moviesfree.net/movie/independence-day-4701/' },
    { title: 'no escape', id: 'movie-slide-5', url: 'https://ww4.123moviesfree.net/movie/no-escape-5236/' },
    { title: 'battle los angeles', id: 'movie-slide-6', url: 'https://ww4.123moviesfree.net/movie/battle-los-angeles-5517/' },
    { title: 'the tomorrow war', id: 'movie-slide-7', url: 'https://ww4.123moviesfree.net/movie/the-tomorrow-war-1622988602/' },
    { title: 'battleship', id: 'movie-slide-8', url: 'https://ww4.123moviesfree.net/movie/battleship-4388/' },
    { title: 'central intelligence', id: 'movie-slide-9', url: 'https://ww4.123moviesfree.net/movie/central-intelligence-13381/' },
    { title: 'avengers: infinity war', id: 'movie-slide-10', url: 'https://ww4.123moviesfree.net/movie/avengers-infinity-war-24689/' },
    { title: 'avengers: age of ultron', id: 'movie-slide-11', url: 'https://ww4.123moviesfree.net/movie/avengers-age-of-ultron-4632/' },
    { title: 'the avengers', id: 'movie-slide-12', url: 'https://ww4.123moviesfree.net/movie/the-avengers-1717/' },
    { title: 'thor: ragnarok', id: 'movie-slide-13', url: 'https://ww4.123moviesfree.net/movie/thor-ragnarok-22466/' },
    { title: 'jurassic world', id: 'movie-slide-14', url: 'https://ww4.123moviesfree.net/movie/jurassic-world-2015-3765/' },
    { title: 'jurassic park', id: 'movie-slide-15', url: 'https://ww4.123moviesfree.net/movie/jurassic-park-2058/' }
];



// Function to search for movies
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let found = false;

    // Loop through all movies and determine visibility
    movies.forEach(movie => {
        const movieElement = document.getElementById(movie.id);
        if (movie.title.includes(searchTerm)) {
            movieElement.style.display = 'block'; // Show if matches
            found = true;
        } else {
            movieElement.style.display = 'none'; // Hide if no match
        }
    });

    if (!found) {
        alert('No matching movie found!');
    }
});

// Reset movies to show all if the search field is cleared
searchInput.addEventListener('input', function () {
    if (searchInput.value.trim() === '') {
        movies.forEach(movie => {
            document.getElementById(movie.id).style.display = 'block';
        });
    }
});

// Add click event to movie images to open the corresponding movie link
document.querySelectorAll('.movie-slide img').forEach((img, index) => {
    img.addEventListener('click', function () {
        window.open(movies[index].url, '_blank');
    });
});
