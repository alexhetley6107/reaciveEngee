import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
// import "./TestPage.scss";

function WrongAnswer({ tryAgain }) {
	return (
		<div className='wrong-wrapper'>
			<h2>Wrong</h2>
			<MyBtn big={true} border={'palegreen'} back={'crimson'} method={tryAgain}>
				Try again
			</MyBtn>
		</div>
	);
}

export default WrongAnswer;
