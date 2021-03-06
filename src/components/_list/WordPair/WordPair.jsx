import React, { useState, useEffect } from 'react';
import './WordPair.scss';
import Endorse from '../../Endorse/Endorse';
import EditWord from '../modals/EditWord';
import MyBtn from '../../MyBtn/MyBtn';
import { useDispatch, useSelector } from 'react-redux';

const WordPair = (props) => {
	const [isEdit, setEdit] = useState(false);
	const [isDeleteWord, setDeleteWord] = useState(false);

	const dispatch = useDispatch();

	const deleteWord = (listName, engWord) => {
		dispatch({ type: 'DELETE_WORD', payload: { list: listName, engWord: engWord } });
	};

	useEffect(() => {
		if (isEdit || isDeleteWord) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	}, [isEdit, isDeleteWord]);

	return (
		<li className='WordPair'>
			<div className='WordPair-words'>
				{props.eng} — {props.rus}
			</div>
			<div className='WordPair-btns'>
				<MyBtn big={false} border={'white'} back={'orange'} method={() => setEdit(true)}>
					<i className='bx bx-edit-alt'></i>
				</MyBtn>
				<div className='WordPair-sep'></div>
				<MyBtn big={false} border={'white'} back={'crimson'} method={() => setDeleteWord(true)}>
					<i className='bx bx-trash'></i>
				</MyBtn>
			</div>

			{isDeleteWord && (
				<Endorse
					title={`Delete "${props.eng}" from the list ?`}
					no={() => setDeleteWord(false)}
					close={() => setDeleteWord(false)}
					yes={() => {
						deleteWord(props.listName, props.eng);
						setDeleteWord(false);
					}}
				/>
			)}

			{isEdit && (
				<EditWord
					close={() => setEdit(false)}
					listName={props.listName}
					eng={props.eng}
					rus={props.rus}
					editWord={props.editWord}
					lists={props.lists}
					list={props.list}
				/>
			)}
		</li>
	);
};

export default WordPair;
