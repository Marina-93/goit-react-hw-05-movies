import axios from "axios";
import { lazy, Suspense, useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { useParams, Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import "./Film.mod.css";

const Actors = lazy(() =>
  import("../Actors/Actors" /*webpackChunkName: "case" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /*webpackChunkName: "reviews" */)
);

export default function FilmPage() {
    const { filmId } = useParams();
    const [film, setFilm] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=6335ce0a24f472a8f252fc29a6ddd36b&language=en-US`)
      .then((res) => res.data)
      .then((film) => setFilm(film));
    }, [filmId]);
    
    const onGoBack = () => {
        navigate(location?.state?.from ?? '/');
    }

    const { title, name, overview, genres, release_date, poster_path, runtime } = film;
    
    return (
        <>
            <button className="film-btn" type='button' onClick={onGoBack}>Go back</button>
            <div className="film-conteiner">
            <img className="film-img" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div className="film-card">
                <h1>{title ? title : name}<span>{release_date}</span></h1>
                    <p> User Score: <span>{runtime}%</span></p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <ul>
                {genres && genres.map((genre) => { return (<li className="film-genre" key={genre.id}>{genre.name}</li>)})}
                </ul>
            </div>
            </div>
            <ul>
                <li><Link to={`cast`}>Cast</Link></li>
                <li><Link to={`reviews`}>Reviews</Link></li>
            </ul>

            <Suspense fallback={<RingLoader size={120}/>}>
            <Routes>
                <Route path="cast" element={<Actors />} />
                <Route path="reviews" element={<Reviews />} />
            </Routes>
            </Suspense>
        </>
    )
}