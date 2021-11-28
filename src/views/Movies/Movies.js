import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from 'react-router-dom';
import Search from "../Search/Search";

export default function Movies() {
    const [value, setValue] = useState('');
    const [films, setFilms] = useState([]);

    const location = useLocation();

    const handleFormSubmit = (value) => {
        setValue(value);
    }

    useEffect(() => {
        if (!value) {
            return;
        }

        axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=6335ce0a24f472a8f252fc29a6ddd36b&language=en-US&page=1&query=${value}&include_adult=false`)
      .then((res) => res.data)
      .then((data) => setFilms(data.results));
    },[value])
    
    return (
        <div>
            <Search onSubmit={handleFormSubmit}></Search>
            {films && films.map((film) => {
                    return (
                    <li key={film.id} >
                            <Link to={`/movies/${film.id}`} state={{ from: location }}>{film.title ? film.title : film.name}</Link>
                    </li>
                )
            })}
        </div>
    )
}