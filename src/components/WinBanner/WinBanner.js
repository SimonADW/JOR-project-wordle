import React from 'react';
import Banner from '../Banner/Banner';

function WinBanner({ numOfGuesses, restartGame }) {
  return <Banner status={"happy"}>
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {numOfGuesses === 1 ? " 1 guess" : ` ${numOfGuesses} guesses`}
      </strong>.
    </p>
    <button className='banner__restart-button' onClick={restartGame}>New Game</button>
  </Banner>
}

export default WinBanner;
