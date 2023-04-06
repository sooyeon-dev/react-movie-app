import { useEffect, useState } from "react";
// import Movie from "./Component/Movie"; 

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
        const json = await response.json();

        setMovies(json.data.movies);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? ( 
                <h1>Loading...</h1>
            ) : 
                <div>
                    {movies.map(movie => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image}></img>
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                <li>
                                    {movie.genres.map(g => (
                                        <li key={g}>{g}</li>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;