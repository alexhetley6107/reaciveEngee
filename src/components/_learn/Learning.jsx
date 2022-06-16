import React, { useState } from 'react';
import Endorse from '../Endorse/Endorse';
import MyBtn from '../MyBtn/MyBtn';

function Learning(props) {
	const words = props.words;

	const [learnPair, setLearnPair] = useState(words[Math.floor(Math.random() * words.length)]);
	const [isStopLearn, setStopLearn] = useState(false);

	const showNextPair = () => {
		if (words.every((item) => item.isLearned === true) !== true) {
			let item = words[Math.floor(Math.random() * words.length)];

			if (item.isLearned === true) {
				showNextPair();
			} else {
				setLearnPair(item);
				item.isLearned = true;
			}
		} else {
			props.setEndLearn();
			resetLearn();
			props.end();
		}
	};

	const resetLearn = () => {
		words.forEach((item) => (item.isLearned = false));
	};

	function speak(text) {
		const message = new SpeechSynthesisUtterance();
		message.lang = 'ru-RU';
		message.text = text;
		window.speechSynthesis.speak(message);
	}
	return (
		<>
			{!props.isEndLearn && (
				<div className='Learning'>
					<p className='Learning-x'>
						<MyBtn big={true} border={'plum'} back={'black'} method={() => setStopLearn(true)}>
							✖
						</MyBtn>
					</p>
					<div className='Learning-words'>
						{learnPair.engWord} — {learnPair.rusWord}
					</div>

					<div className='Learning-sounds'>
						<MyBtn
							big={true}
							border={'plum'}
							back={'black'}
							method={() => {
								speak(learnPair.engWord);
							}}>
							<i className='bx bxs-megaphone'></i>
						</MyBtn>
						<div className='Learning-sep'></div>
						<MyBtn
							big={true}
							border={'plum'}
							back={'black'}
							method={() => {
								speak(learnPair.rusWord);
							}}>
							<i className='bx bxs-megaphone'></i>
						</MyBtn>
					</div>

					<MyBtn big={true} border={'plum'} back={'darkorange'} method={showNextPair}>
						remember
					</MyBtn>
				</div>
			)}

			{isStopLearn && (
				<Endorse
					title={'Do you want to stop Learning ?'}
					yes={() => {
						setStopLearn(false);
						props.end();
					}}
					no={() => setStopLearn(false)}
				/>
			)}
		</>
	);
}
export default Learning;
