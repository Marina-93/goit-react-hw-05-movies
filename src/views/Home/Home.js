import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Home.mod.css';

export default function Home() {
    const [films, setFilms] = useState([]);
    
    const location = useLocation();
    
    useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=6335ce0a24f472a8f252fc29a6ddd36b&language=en-US&page=1`)
      .then((res) => res.data)
      .then((data) => setFilms(data.results));
    }, []);
    
    return (
        <div>
            <h2 className="home-title">Tranding Today</h2>
            <ul>
                {films && films.map((film) => {
                    return (
                    <li key={film.id} className="home-list">
                        <Link className="link" to={`/movies/${film.id}`} state={{ from: location }}>{film.title ? film.title : film.name}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}