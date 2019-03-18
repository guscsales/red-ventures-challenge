import { combineReducers } from 'redux';

const pages = {
	engine: '/color',
	color: '/wheel',
	wheel: '/result',
	result: '/'
};

export default (state = '', { type, currentPage }) => {
	switch (type) {
		case 'SET_NEXT_PAGE':
			return pages[currentPage.replace('/', '')];

		default:
			return state;
	}
};
