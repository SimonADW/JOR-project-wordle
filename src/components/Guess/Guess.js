import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

const Cell = ({ letter, status }) => {
	return (
		<span className={status ? `${status} cell` : "cell"} >
			{letter}
		</span>
	)
}

const Guess = ({ value, answer }) => {
	const result = checkGuess(value, answer);

	return <>
		<p className="guess">
			{range(5).map((num) =>
				<Cell key={num}
					status={result ? result[num].status : undefined}
					letter={result ? result[num].letter : undefined} />
			)}
		</p>
	</>
}

export default Guess