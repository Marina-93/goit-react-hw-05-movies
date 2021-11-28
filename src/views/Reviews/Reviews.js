import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Reviews() {
    const [reviews, setReviews] = useState('');
    const { filmId } = useParams();

    useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=6335ce0a24f472a8f252fc29a6ddd36b&language=en-US&page=1`)
      .then((res) => res.data)
      .then((data) => setReviews(data.results));
    }, [filmId]);

    return (
        <>
            {reviews.length === 0 ?
                <h1>Sorry, we haven't reviews for that film.</h1>
                : (<ul>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <h3>
                                    <span>Author: </span>
                                    {author}
                                </h3>
                                <p>
                                    <span>Review: </span>
                                    {content}
                                </p>
                            </li>
                        )
                    })}
                </ul>
                )
            }
        </>
    )
}