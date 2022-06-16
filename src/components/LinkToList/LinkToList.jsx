import React from 'react';
import MyBtn from '../MyBtn/MyBtn';
import { NavLink } from 'react-router-dom';
import './LinkToList.scss';

function LinkToList(props) {
	return (
		<div className='LinkToList'>
			<h2>No lists!</h2>
			<h3>Create your own</h3>

			<NavLink to='/reaciveEngee/list' className='Menu-btn Menu-learn'>
				<MyBtn big={true} border={props.border} back={'crimson'}>
					create list
				</MyBtn>
			</NavLink>
		</div>
	);
}

export default LinkToList;
