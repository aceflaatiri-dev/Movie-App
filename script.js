const apiKey = '676ee06b19fb36e869de942f542de9fc'; // Ta clé API TMDb ici

const searchInput = document.getElementById('search-input');
const movieGrid = document.getElementById('movie-grid');
const loader = document.getElementById('loader');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query.length > 2) {
    fetchMovies(query);
  } else {
    movieGrid.innerHTML = '';
  }
});

async function fetchMovies(query) {
  showLoader();
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
    movieGrid.innerHTML = '<p style="text-align:center; color: #f44336;">Failed to fetch movies.</p>';
  } finally {
    hideLoader();
  }
}

function displayMovies(movies) {
  movieGrid.innerHTML = '';

  if (!movies || movies.length === 0) {
    movieGrid.innerHTML = '<p style="text-align:center;">No movies found.</p>';
    return;
  }

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const posterPath = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+Image';

    movieCard.innerHTML = `
      <img src="${posterPath}" alt="${movie.title}" class="movie-poster" />
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-rating">⭐ ${movie.vote_average.toFixed(1)}</div>
      </div>
    `;

    movieGrid.appendChild(movieCard);
  });
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
