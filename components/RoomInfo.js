import React from 'react';

const RoomInfo = ({ roomCode, username }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto my-auto max-w-sm">
      <h2 className="text-2xl font-bold mb-2">Room Information</h2>
      <p>
        Room Code: <strong>{roomCode}</strong>
      </p>
      <p>
        Username: <strong>{username}</strong>
      </p>
    </div>
  );
};

export default RoomInfo;