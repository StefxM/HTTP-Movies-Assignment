import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

function UpdateMovie() {
  const [state, setState] = useState({
    id: Date.now(),
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handlechange = event => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      });
    }


  const submit = event => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, state)
      .then(res => {
        history.push("/movies");
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={handlechange}
        placeholder="title"
      />
      <input
        type="text"
        name="director"
        value={state.director}
        onChange={handlechange}
        placeholder="director"
      />
      <input
        type="text"
        name="metascore"
        value={state.metascore}
        onChange={handlechange}
        placeholder="metascore"
      />
      <input 
        type='text'
        name="stars"
        value={state.stars}
        onChange={handlechange}
        placeholder="stars"/>

      <button>Update Movie</button>
    </form>
  );
}

export default UpdateMovie;
