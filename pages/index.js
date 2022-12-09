import React, { useState, useRef } from 'react';
import NavBar from '../components/NavBar';
import SongPlayer from '../components/SongPlayer';
import TriviaGame from '../components/TriviaGame';

const IndexPage = () => {
  const songUrl = 'https://cdn.pixabay.com/download/audio/2022/08/03/audio_a567664e9d.mp3?filename=waiting-music-116216.mp3';

return (
<>
  <NavBar />
  <TriviaGame/>
</>
);
};

export default IndexPage;