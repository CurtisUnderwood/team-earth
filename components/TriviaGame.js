import React, { useState, useEffect } from 'react';

const TriviaGame = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState(null);
  const [timer, setTimer] = useState(10);
  let options = [answer, ...incorrectAnswers];

  useEffect(() => {
    let interval;
    if (selectedOption === null) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (timer === 0) {
      clearInterval(interval);
      setTimeout(() => {
        fetchQuestion();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [selectedOption, timer]);

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
        setTimer(10);
        
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
          </select>
        </label>
        <p dangerouslySetInnerHTML={questionMarkdown} className="mb-4 text-center" />

        <div className="flex items-center justify-center mb-4">
  <div className="w-1/2 h-4 bg-marigold rounded-lg overflow-hidden relative">
  <div
  className="absolute inset-0 h-full bg-state-blue transition-all duration-500 ease-linear"
  style={{ transform: `translateX(${(timer / 10) * 100}%)` }}
></div>
  </div>
</div>

        {options.map((option) => (
          <button
            className="bg-marigold text-white font-bold py-2 px-4 rounded block mx-auto my-4 max-w-sm"
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
          >
            <label className="cursor-pointer" dangerouslySetInnerHTML={{ __html: option }}></label>
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
