import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import middlewares from './middlewares';

import data from './data';
import result from './result';
import nextPage from './next-page';

export const initializeStore = (initialState = {}) => {
	return createStore(
		combineReducers({
			data,
			result,
			nextPage
		}),
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares()))
	);
};
