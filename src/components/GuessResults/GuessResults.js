import React from 'react'
import Guess from '../Guess/Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const GuessResults = ({ guesses }) => {

return (
	<div className="guess-results">
		{range(NUM_OF_GUESSES_ALLOWED).map((num, index) =>
				<Guess value={guesses[num]} key={num} />
		)}
	</div>
)
}

export default GuessResults