import React, { useRef, useState, useEffect } from 'react';

import WrongAnswer from './WrongAnswer';
import Endorse from '../Endorse/Endorse';
import RightAnswer from './RightAnswer';
import MyBtn from '../MyBtn/MyBtn';
import Alert from '../Alert/Alert';

function Testing(props) {
	const words = props.words;
	const engMode = props.engMode;

	const testInput = useRef();

	const [quest, setQuest] = useState(words[Math.floor(Math.random() * words.length)]);
	const [isRightAnswer, setRight] = useState(false);
	const [isWrongAnswer, setWrong] = useState(false);
	const [isStopTest, setStopTest] = useState(false);
	const [isHint, setHint] = useState(false);

	const checkWord = (input, e) => {
		let answer = engMode ? quest.rusWord : quest.engWord;
		if (input === answer) {
			quest.isChecked = true;
			setRight(true);
		} else if (input !== '') {
			setWrong(true);
		} else {
			e.preventDefault();
		}
	};

	const showNextWord = () => {
		if (words.every((item) => item.isChecked === true) !== true) {
			let item = words[Math.floor(Math.random() * words.length)];

			if (item.isChecked === true) {
				showNextWord();
			} else {
				setQuest(item);
				setWrong(false);
			}
		} else {
			props.setEndTest();
			resetCheck();
			props.end();
		}
	};

	const resetCheck = () => {
		words.forEach((item) => (item.isChecked = false));
	};

	useEffect(() => {
		testInput.current?.focus();
	});

	return (
		<>
			{!(isRightAnswer || isWrongAnswer) && (
				<div className='Testing'>
					<p className='Testing-x'>
						<MyBtn big={true} border={'palegreen'} back={'black'} method={() => setStopTest(true)}>
							✖
						</MyBtn>
					</p>
					<div className='Test-quest'>{engMode ? quest.engWord : quest.rusWord} - ...</div>
					<form className='Test-form'>
						<input
							className='Test-input'
							type='text'
							ref={testInput}
							placeholder='translate'
							onSubmit={(e) => {
								e.preventDefault();
								if (testInput.current.value.trim() !== '') {
									checkWord(testInput.current.value.toLowerCase().trim());
								}
							}}
						/>
						<MyBtn
							big={true}
							border={'palegreen'}
							back={'darkorange '}
							method={(e) => {
								e.preventDefault();
								if (testInput.current.value.trim() !== '') {
									checkWord(testInput.current.value.toLowerCase().trim());
								}
							}}>
							check
						</MyBtn>
					</form>
					<div className='Testing-hint-btn'>
						<MyBtn
							big={false}
							border={'palegreen'}
							back={'crimson'}
							method={() => {
								setHint(true);
							}}>
							show
						</MyBtn>
					</div>
					<MyBtn
						big={true}
						border={'palegreen'}
						back={'blue'}
						method={() => {
							showNextWord();
							testInput.current.value = '';
						}}>
						next
					</MyBtn>
				</div>
			)}

			{isRightAnswer && (
				<RightAnswer
					showNext={() => {
						setRight(false);
						showNextWord();
					}}
				/>
			)}

			{isWrongAnswer && (
				<WrongAnswer
					tryAgain={() => {
						setWrong(false);
					}}
				/>
			)}

			{isStopTest && (
				<Endorse
					title={'Do you want to stop testing ?'}
					yes={() => {
						setStopTest(false);
						props.end();
					}}
					no={() => setStopTest(false)}
				/>
			)}

			{isHint && (
				<Alert close={() => setHint(false)}>{engMode ? quest.rusWord : quest.engWord}</Alert>
			)}
		</>
	);
}
export default Testing;
