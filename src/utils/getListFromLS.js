import { defaultLists } from '../redux/defaultLists';

export const getListFromLS = () => {
	const data = localStorage.getItem('lists');
	const lists = data ? JSON.parse(data) : defaultLists;

	return lists;
};
