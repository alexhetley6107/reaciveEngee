import { defaultLists } from './defaultLists';
import * as t from './actionTypes';
import { getListFromLS } from '../utils/getListFromLS';

const initialState = getListFromLS();

export const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.NEW_LIST:
			return [...state, { name: action.payload.name, forTest: true, forLearn: true, words: [] }];

		case t.RENAME_LIST:
			return state.map((list) =>
				list.name === action.payload.oldName ? { ...list, name: action.payload.newName } : list,
			);

		case t.REMOVE_LIST:
			return state.filter((list) => list.name !== action.payload.name);

		case t.GET_DEFAULT:
			return defaultLists;

		case t.ADD_WORD:
			return state.map((list) =>
				list.name === action.payload.list
					? {
							...list,
							words: [
								{
									engWord: action.payload.engWord,
									rusWord: action.payload.rusWord,
									isChecked: false,
									isLearned: false,
								},
								...list.words,
							],
					  }
					: list,
			);

		case t.EDIT_WORD:
			return state.map((list) =>
				list.name === action.payload.list
					? {
							...list,
							words: list.words.map((word) =>
								word.engWord === action.payload.oldEng
									? {
											engWord: action.payload.newEng,
											rusWord: action.payload.newRus,
											isChecked: false,
											isLearned: false,
									  }
									: word,
							),
					  }
					: list,
			);

		case t.DELETE_WORD:
			return state.map((list) =>
				list.name === action.payload.list
					? { ...list, words: list.words.filter((word) => word.engWord !== action.payload.engWord) }
					: list,
			);

		case t.LEARN_CHOOSE:
			return state.map((list) =>
				list.name === action.payload.name ? { ...list, forLearn: !list.forLearn } : list,
			);

		case t.TEST_CHOOSE:
			return state.map((list) =>
				list.name === action.payload.name ? { ...list, forTest: !list.forTest } : list,
			);

		case t.CHOOSE_ALL_LEARN:
			return state.map((list) => (list.forLearn === false ? { ...list, forLearn: true } : list));

		case t.CHOOSE_ALL_TEST:
			return state.map((list) => (list.forTest === false ? { ...list, forTest: true } : list));
		default:
			return state;
	}
};
