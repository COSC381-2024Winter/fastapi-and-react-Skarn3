import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './App.css'; // Import your CSS file


function App() {
  const [movieId, setMovieId] = useState('');


  const handleMovieIdChange = (event) => {
    setMovieId(event.target.value);
  };



  return (
    <div className="App">
      <div className="TextField-container">
        <TextField
          id="movieId"
          label="Enter Movie ID"
          value={movieId}
          onChange={handleMovieIdChange}
          className="TextField"
        />
      </div>
    </div>
  );
}


export default App;