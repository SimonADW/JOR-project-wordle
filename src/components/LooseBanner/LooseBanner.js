import React from 'react';
import Banner from '../Banner/Banner';

function LooseBanner({ answer, restartGame={restartGame} }) {
  return <Banner status={"sad"}>
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    <button className='banner__restart-button' onClick={restartGame}>New Game</button>
  </Banner>
}

export default LooseBanner;
