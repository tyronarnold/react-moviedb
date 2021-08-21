import { useEffect, useState } from "react"
import Movie from './Movie'

const Movies = () => {

    const [movieList, setMovieList] = useState([]);

    // useEffect(() => {
    //     fetch()

    // });

    return (
        <div>
            <h1>Movie Db List</h1>
            <Movie />
        </div>
    )
}

export default Movies;