import React from 'react';
import { useHistory } from "react-router-dom";

const MovieCard = props => {
  const history = useHistory();
  const { title, director, metascore, stars } = props.movie;
  return (
    <div> 
      <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <div>
      <h3>Actors</h3>
      <p>{stars}</p>     
      </div>
      <button onClick={() => history.push(`/updateMovie/${props.id}`)}>Delete</button>
      </div>
    </div>
  );
};

export default MovieCard;
