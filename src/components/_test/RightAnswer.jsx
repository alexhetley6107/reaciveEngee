import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
// import "./TestPage.scss";

function RightAnswer({ showNext }) {
	return (
		<div className='right-wrapper'>
			<h2>Right</h2>
			<MyBtn big={true} border={'palegreen'} back={'seagreen'} method={showNext}>
				next
			</MyBtn>
		</div>
	);
}

export default RightAnswer;
