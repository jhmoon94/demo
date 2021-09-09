import React, { useState, useEffect } from 'react';
import './styles.css';
import YoutubeEmbed from './YoutubeEmbed';

const getEmbedId = (url) => {
  const first = url.split('?v=')[1];
  const second = first.split('&')[0];
  return second;
};

const App = () => {
  const [embedId, setEmbedId] = useState('rokGy0huYEA');
  const [inputValue, setInputValue] = useState('https://www.youtube.com/watch?v=rokGy0huYEA&ab_channel=Google');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setEmbedId(getEmbedId(inputValue));
  };

  useEffect(() => {
    const ytplayer = document.getElementById('movie_player');
    console.log(ytplayer);
  }, []);

  return (
    <div className='App'>
      <h1>Put Url</h1>
      <input
        type='text'
        name='inputValue'
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>Go</button>
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId={embedId} />
    </div>
  );
};

export default App;
