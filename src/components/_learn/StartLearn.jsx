import React from 'react';
import ChooseList from '../ChooseList/ChooseList';
//import './LearnPage.scss';
import MyBtn from '../MyBtn/MyBtn';
import LinkToList from '../LinkToList/LinkToList';

function StartLearn(props) {
	return (
		<div className='StartLearn'>
			{props.lists.length !== 0 ? (
				<>
					<ChooseList
						lists={props.lists}
						choose={props.choose}
						scroll={props.scroll}
						forLearn={true}
						chooseAll={props.chooseAll}
						trans={props.trans}
						makeTrans={props.makeTrans}
					/>
					<MyBtn method={props.start} big={true} border={'plum'} back={'crimson'}>
						start learn
					</MyBtn>
				</>
			) : (
				<LinkToList border={'plum'} />
			)}
		</div>
	);
}

export default StartLearn;
