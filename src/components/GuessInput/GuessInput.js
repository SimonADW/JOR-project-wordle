import React, { useState } from 'react'

const GuessInput = ({handleSubmitGuess}) => {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (event)=> {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern='^[A-Za-z]{5}$'
        title='5 letter word'
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())} />
    </form>
  )
}

export default GuessInput