import React, { useState } from 'react';
import './Card.css';

const Card = ({ cardPairs }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleNextClick = () => {
    const newIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(newIndex);
    setShowQuestion(true); // Reset to show question when next card is displayed
  };

  const handleClick = () => {
    setShowQuestion(!showQuestion);
  };

  return (
    <div className="card-set">
      <button onClick={handleNextClick}>Next</button>
      <div className="card" onClick={handleClick}>
        <div className="card-content">
          {showQuestion ? <p>{cardPairs[currentCardIndex].question}</p> : <p>{cardPairs[currentCardIndex].answer}</p>}
        </div>
      </div>
      <div className='guessing'>
        <input type="text" name="answer" placeholder="Enter Guess Here" class="" value=""/>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Card;
