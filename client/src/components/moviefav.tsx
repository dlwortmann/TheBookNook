
import React, { useState } from 'react';
import { searchOMDB } from '../api/API'; // Adjust path if needed

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState<any>(null);
  const [favorites, setFavorites] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    const result = await searchOMDB(query.trim());
    if (result && result.Response !== 'False') {
      setMovie(result);
    } else {
      setMovie(null);
    }
  };

  const addToFavorites = () => {
    if (movie && !favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search for a movie..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {movie && (
        <div style={{ marginTop: '20px' }}>
          <h2>{movie.Title} ({movie.Year})</h2>
          <img src={movie.Poster} alt={movie.Title} width="150" />
          <p>{movie.Plot}</p>
          <button onClick={addToFavorites}>
            {favorites.some((fav) => fav.imdbID === movie.imdbID)
              ? 'Already in Favorites'
              : 'Add to Favorites'}
          </button>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3>Favorite Movies</h3>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((fav) => (
              <li key={fav.imdbID}>
                {fav.Title} ({fav.Year})
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
};
export default MovieSearch;