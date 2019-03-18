import { combineReducers } from 'redux';

const pages = {
	engine: '/color',
	color: '/wheel',
	wheel: '/result',
	result: '/'
};

export const nextPage = (state = '', { type, currentPage }) => {
	switch (type) {
		case 'SET_NEXT_PAGE':
			return pages[currentPage.replace('/', '')];

		default:
			return state;
	}
};

export const startSteps = (state = false, { type }) => {
	switch (type) {
		case 'SET_START_STEPS':
			return true;

		default:
			return state;
	}
};

export default combineReducers({
	nextPage,
	startSteps
});
