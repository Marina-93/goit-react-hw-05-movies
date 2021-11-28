import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Actors.mod.css';

export default function Actors() {
    const [cast, setCast] = useState('');
    const { filmId } = useParams();
    
    useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=6335ce0a24f472a8f252fc29a6ddd36b&language=en-US`)
      .then((res) => res.data)
      .then((data) => setCast(data.cast));
    }, [filmId]);

    return (
        <ul>
            {cast && cast.map((actor) => {
                return (
                    <li key={actor.id} className="actors-list">
                        <img
                            className="actors-img"
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <p>{actor.name}</p>
                    </li>)
            })}
        </ul>
    )
}