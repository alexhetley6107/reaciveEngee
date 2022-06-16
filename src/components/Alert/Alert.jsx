import React, { useEffect } from 'react';
import MyBtn from '../MyBtn/MyBtn';
import './Alert.scss';

function Alert(props) {
	useEffect(() => {
		document.body.classList.add('lock');

		return () => document.body.classList.remove('lock');
	}, []);

	return (
		<div className='Alert' onClick={props.close}>
			<div className='Alert-wrap' onClick={(e) => e.stopPropagation()}>
				<div className='Alert-title'>{props.children}</div>
				<MyBtn big={true} border={'white'} back={'crimson'} method={props.close}>
					Ok
				</MyBtn>
			</div>
		</div>
	);
}

export default Alert;
