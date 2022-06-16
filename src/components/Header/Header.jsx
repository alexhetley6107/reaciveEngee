import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav/Nav';
import './Header.scss';
import Burger from './Burger/Burger';
import MenuBurger from './MenuBurger/MenuBurger';
import Endorse from '../Endorse/Endorse';
//import { signOut } from "firebase/auth";
//import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Header(props) {
	const [isMenu, setMenu] = useState(false);
	const [isOut, setOut] = useState(false);

	const toggleMenu = () => {
		setMenu(!isMenu);
		document.body.classList.toggle('lock');
	};
	const navigate = useNavigate();
	const logOut = async () => {
		/* signOut(auth); */
		navigate('/reaciveEngee/');
	};

	return (
		<header className='Header'>
			<NavLink
				to='/reaciveEngee/greet'
				className='Header-title'
				onClick={() => {
					setMenu(false);
				}}>
				ENGEE
			</NavLink>
			<Nav />
			<div
				className='Header-logout'
				onClick={() => {
					setOut(true);
				}}>
				Log Out
			</div>
			<Burger isOn={isMenu} toggle={toggleMenu} />

			{isMenu && (
				<MenuBurger
					toggle={toggleMenu}
					logOut={() => {
						setOut(true);
					}}
				/>
			)}

			{isOut && (
				<Endorse
					title={'Log out ?'}
					no={() => {
						setOut(false);
					}}
					yes={() => {
						setOut(false);
						logOut();
					}}
				/>
			)}
		</header>
	);
}

export default Header;
