import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './HomePage.scss';
import './../../normalyze.css';
import Header from '../../components/Header/Header';
import ListPage from '../../pages/List/ListPage';
import LearnPage from '../../pages/Learn/LearnPage';
import TestPage from '../TestPage/TestPage';
import GreetPage from '../Greeting/Greeting';
import Footer from '../../components/Footer/Footer';

function HomePage() {
	const lists = useSelector((state) => state.list);
	const [isLearning, setLearning] = useState(false);
	const [isTesting, setTesting] = useState(false);

	//set lists to local storage
	useEffect(() => {
		const json = JSON.stringify(lists);
		localStorage.setItem('lists', json);
	}, [lists]);

	//function for learning and testing
	const [learnWords, setLearnWords] = useState(
		[].concat(...lists.filter((list) => list.forLearn === true).map((list) => list.words)),
	);
	const [testWords, setTestWords] = useState(
		[].concat(...lists.filter((list) => list.forTest === true).map((list) => list.words)),
	);

	useEffect(() => {
		setLearnWords(
			[].concat(...lists.filter((list) => list.forLearn === true).map((list) => list.words)),
		);
		setTestWords(
			[].concat(...lists.filter((list) => list.forTest === true).map((list) => list.words)),
		);
	}, [lists]);

	return (
		<div className='Home-wrapper'>
			<Header />
			<Routes>
				<Route path='/reaciveEngee/greet' element={<GreetPage lists={lists} />} />
				<Route
					path='/reaciveEngee/learn'
					element={
						<LearnPage
							lists={lists}
							isLearning={isLearning}
							start={() => {
								setLearning(true);
							}}
							end={() => {
								setLearning(false);
							}}
							words={learnWords}
						/>
					}
				/>
				<Route
					path='/reaciveEngee/test'
					element={
						<TestPage
							lists={lists}
							isTesting={isTesting}
							start={() => {
								setTesting(true);
							}}
							end={() => {
								setTesting(false);
							}}
							words={testWords}
						/>
					}
				/>
				<Route path='/reaciveEngee/list' element={<ListPage lists={lists} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default HomePage;
