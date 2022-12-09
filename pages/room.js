import React from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import TriviaGame from '../components/TriviaGame';
import RoomInfo from '../components/RoomInfo';

const Room = () => {
  const router = useRouter();
  const { roomCode, username } = router.query;

  return (
    <div>
        <NavBar />
      <RoomInfo roomCode={roomCode} username={username}/>

      <TriviaGame/>
    </div>
  );
};

export default Room;