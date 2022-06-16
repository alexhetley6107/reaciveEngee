import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import MyBtn from '../../components/MyBtn/MyBtn';

function LogIn(props) {
	const navigate = useNavigate();
	const logIn = async () => {
		/* signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result); */
		navigate('/reaciveEngee/greet'); /* 
    })
    .catch((error) => {
      console.log(error);
    }); */
	};

	return (
		<section className='LogIn'>
			<p className='LogIn-engee'>ENGEE</p>
			<p className='LogIn-title'>It`s free App for learning foreign words </p>

			<MyBtn
				big={document.querySelector('body')?.clientWidth > 450 ? true : false}
				border={'deepskyblue'}
				back={'darkblue'}
				method={logIn}>
				login with google
			</MyBtn>
		</section>
	);
}

export default LogIn;
