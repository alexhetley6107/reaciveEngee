import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
	return (
		<nav className='Nav'>
			<NavLink
				to='/reaciveEngee/learn'
				className={({ isActive }) => (isActive ? 'active Nav-btn' : 'Nav-btn')}>
				<p>Learn</p>
			</NavLink>
			<NavLink
				to='/reaciveEngee/test'
				className={({ isActive }) => (isActive ? 'active Nav-btn' : 'Nav-btn')}>
				<p>Test</p>
			</NavLink>
			<NavLink
				to='/reaciveEngee/list'
				className={({ isActive }) => (isActive ? 'active Nav-btn' : 'Nav-btn')}>
				<p>Lists</p>
			</NavLink>
		</nav>
	);
}

export default Nav;
