import React, { useState } from 'react'
import { checkGuess } from '../../game-helpers';

const GuessInput = ({ handleSubmitGuess, gameStatus, answer, keyboard, setKeyboard }) => {
  const [tentativeGuess, setTentativeGuess] = useState("");

  // Color key-board based on guesses checked
  const result = checkGuess(tentativeGuess, answer);

  const styleKeyboard = () => {
    const updatedKeyboard = keyboard.map(row =>
      row.map(key => {
        const resultChar = result.find(char => char.letter === key.letter);
        if (resultChar) {
          return { ...key, status: resultChar.status }; // Update only the status
        }
        return key; // Return unchanged key if no match
      })
    );
    return updatedKeyboard;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.classList.contains('guess-input__keyboard-key')) {
      setTentativeGuess(prev => prev + event.target.value)
    }

    if (tentativeGuess.length >= 5) {
      handleSubmitGuess(tentativeGuess);
      setTentativeGuess("");
      setKeyboard(styleKeyboard());
    }
  }



  return <>
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
        required
        type="text"
        minLength={5}
        maxLength={5}
        pattern='^[A-Za-z]{5}$'
        title='5 letter word'
        value={tentativeGuess}
        disabled={gameStatus !== "running"}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())} />
    </form>

    {keyboard.map((row, rowIndex) => (
      <div key={rowIndex} className='guess-input__keyboard-row'>
        {row.map((character, keyIndex) => (
          <button onClick={handleSubmit} value={character.letter} className={`guess-input__keyboard-key ${character.status}`} key={keyIndex}>{character.letter}</button>
        )
        )}
      </div>
    ))};
  </>

}

export default GuessInput