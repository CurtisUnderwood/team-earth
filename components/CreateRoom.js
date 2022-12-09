import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateRoom = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a random room code of 6 characters
    const roomCode = Math.random().toString(36).substr(2, 6);

    // Redirect to the room page with the room code as a query parameter
    router.push({
      pathname: '/room',
      query: {
        roomCode,
        username
      }
    });
  };

  return (
    <div className="mx-auto my-auto max-w-sm">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="username-input"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username:
        </label>
        <input
          id="username-input"
          type="text"
          value={username}
          autocomplete="off"
          onChange={(event) => setUsername(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading"
          ></input>
      <button
  type="submit"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
  Create Room
</button>
      </div>
    </form>
    </div>
  );
};

export default CreateRoom;