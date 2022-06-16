import React, { useEffect, useState } from 'react';

import RenameList from './modals/RenameList';
import Endorse from '../Endorse/Endorse';
import AddWord from './modals/AddWord';
import MyBtn from '../MyBtn/MyBtn';
import WordPair from './WordPair/WordPair';

const ListItem = (props) => {
	const [isRename, setRename] = useState(false);
	const [isRemoveList, setRemoveList] = useState(false);
	const [isAddWord, setAddWord] = useState(false);

	const listView = props.currentList.words.map((item) => (
		<WordPair
			listName={props.currentList.name}
			key={item.engWord}
			eng={item.engWord}
			rus={item.rusWord}
			list={props.currentList}
		/>
	));

	useEffect(() => {
		if (isRename || isRemoveList || isAddWord) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	}, [isRename, isRemoveList, isAddWord]);

	return (
		<div className='ListItem'>
			<div className='ListItem-title'>
				{props.currentList.name} List: {props.currentList.words.length} words
			</div>
			<div className='ListItem-head'>
				<MyBtn big={false} border={'white'} back={'crimson'} method={() => setAddWord(true)}>
					<i className='bx bxs-message-square-add'></i>
				</MyBtn>
				<div className='ListItem-edit-btns'>
					<MyBtn big={false} border={'white'} back={'green'} method={() => setRename(true)}>
						<i className='bx bx-edit-alt'></i>
					</MyBtn>
					<div className='ListItem-sep'></div>
					<MyBtn big={false} border={'white'} back={'crimson'} method={() => setRemoveList(true)}>
						<i className='bx bx-trash'></i>
					</MyBtn>
				</div>
			</div>
			<ul className='ListView'>{listView}</ul>

			{isRename && (
				<RenameList
					lists={props.lists}
					listName={`Rename ${props.currentList.name} list to...`}
					rename={props.rename}
					close={() => setRename(false)}
					oldName={props.currentList.name}
				/>
			)}

			{isRemoveList && (
				<Endorse
					title={`Delete ${props.currentList.name} list ?`}
					yes={() => {
						setRemoveList(false);
						props.removeList(props.currentList.name);
					}}
					no={() => setRemoveList(false)}
				/>
			)}

			{isAddWord && (
				<AddWord
					close={() => setAddWord(false)}
					addWord={props.addWord}
					listName={props.currentList.name}
					list={props.currentList}
				/>
			)}
		</div>
	);
};

export default ListItem;
