import React, { useState } from 'react';

import { sample } from '../../utils';
import { keyboardCharacters, WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner/WinBanner';
import LooseBanner from '../LooseBanner/LooseBanner';


function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = useState(()=> sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [keyboard, setKeyboard] = useState(keyboardCharacters);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const restartGame = ()=> {
    setGuesses([]);
    setGameStatus("running");
    setAnswer(sample(WORDS));
    setKeyboard(keyboardCharacters);
  };
  
  const handleSubmitGuess = (tentativeGuess) => {
    setGuesses([
      ...guesses,
      tentativeGuess
    ]);

    // SET WINNER OR GAME OVER
    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
    }
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} answer={answer} keyboard={keyboard} setKeyboard={setKeyboard} />
    {gameStatus === "won" &&      
      <WinBanner restartGame={restartGame} numOfGuesses={guesses.length} />
    }

    {gameStatus === "lost" && 
      <LooseBanner restartGame={restartGame} answer={answer} />
    }
  </>
}

export default Game;
