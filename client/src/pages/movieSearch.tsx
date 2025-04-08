import { useState } from "react";
import type { Movie } from "../interfaces/movieSearch";
import { searchOMDB } from "../api/API";


// handles user input and displays the result they WANT
const MovieSearch: React.FC = () => {
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


// handles the SEARCH 
    const handleSearch = async () => {
        setLoading(true);
        setError("");
        setMovie(null);

        const data = await searchOMDB(query);
// matches up the input with the movie 
        if (data && data.Title) {
            try {
                const mappedMovie: Movie = {
                    id: data.imdbID,
                    title: data.Title,
                    releaseYear: parseInt(data.Year),
                    rottenTomatoes: extractRottenTomatoesRating(data.Ratings),
                };
                setMovie(mappedMovie);
            } catch (err) {
                setError("Failed to get movie data.");
            }
        } else {
            setError("Movie not found.");
        }
        setLoading(false);
    };

// basically gets the tomatoes 
//returns 0 if no tomatoes 
    const extractRottenTomatoesRating = (ratings: any[]): number => {
        const rt = ratings?.find((r) => r.Source === "Rotten Tomatoes");
        if (rt && rt.Value.includes("%")) {
            return parseInt(rt.value.replace("%", ""));
        }
        return 0;
    };


// what will show up on the live server 
    return (
        <div>
            <h1> Movie Search </h1>

            <input
            type="text"
            placeholder="Enter movie title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={handleSearch}>Search</button>

            {loading && <p> Loading.. </p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {movie && (
                <div>
                    <h2>{movie.title} ({movie.releaseYear})</h2>
                    <p><strong>Rotten Tomatoes:</strong>{movie.rottenTomatoes}%</p>
                    <p><strong>ID:</strong>{movie.id}</p>
                    </div>
            )}
        </div>
    );
};

export default MovieSearch;