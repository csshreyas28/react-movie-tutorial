import '../css/Favorites.css';
import { useFavorites } from "../context/FavoriteContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No favorite movies yet...</h2>
                <p>Start adding movies to your favorites and they will appear here</p>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
