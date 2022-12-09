import React, { useState, useEffect } from 'react';

const TriviaGame = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState(null);

  const fetchQuestion = () => {
    const url = category ? `https://opentdb.com/api.php?amount=1&category=${category}` : 'https://opentdb.com/api.php?amount=1';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const [trivia] = results;
        const { question, correct_answer, incorrect_answers } = trivia;
        setQuestion(question);
        setAnswer(correct_answer);
        setIncorrectAnswers(incorrect_answers);
        setSelectedOption(null);
      });
  };
  
  useEffect(() => {
    fetchQuestion();
  }, [category]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      fetchQuestion();
    }, 1000);
  };

  if (!question) {
    return <p>Loading...</p>;
  }

  const questionMarkdown = { __html: question };

    // Randomize the order of the answers
    let options = [answer, ...incorrectAnswers];
    options = options.sort(() => Math.random() - 0.5);
  
    return (
      <div className="mx-auto my-auto max-w-sm rounded-lg shadow-lg p-4 bg-state-blue text-white">
        <h1 className="text-2xl font-bold mb-4">Trivia Game</h1>
        <label htmlFor="category-selector" className="block mb-2">
          Select a category:
          <select
            id="category-selector"
            className="text-black"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">All categories</option>
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="13">Musicals & Theatres</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>
            <option value="17">Nature</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>
        </label>
        <p dangerouslySetInnerHTML={questionMarkdown} className="mb-4 text-center" />
        {options.map((option) => (
          <button
            className="bg-marigold text-white font-bold py-2 px-4 rounded block mx-auto my-4 max-w-sm"
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
         {selectedOption && (
          <div>
            {selectedOption === answer ? (
              <p className="text-green-500 text-center">Correct!</p>
            ) : (
              <p className="text-red-500 text-center">
                Incorrect. The correct answer is "{answer}".
              </p>
            )}
          </div>
        )}
        <p className="text-center mt-4">Your score: {score}</p>
      </div>
    );
};

export default TriviaGame;
