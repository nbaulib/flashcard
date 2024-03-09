import { useState } from 'react';
import './App.css';
import Card from './Card';

const App = () => {
  const cardPairs = [
    { question: 'Which apple was named after an Australian?', answer: 'Granny Smith' },
    { question: 'Which apple was trademarked by Cornell scientists?', answer: 'SnapDragon' },
    { question: 'Old norse?', answer: 'Crabapple' },
  ];
  
  return (
    <div className="App">
      <h1>Apple</h1>
      <h2>Learn about the origin of apple names!</h2>
      <p>total number of cards: {cardPairs.length}</p>
      <Card cardPairs={cardPairs} />
    </div>
  )
}

export default App
