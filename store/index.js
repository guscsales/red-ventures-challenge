import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import middlewares from './middlewares';
import data from './data';

export const initializeStore = (initialState = {}) => {
	return createStore(
		combineReducers({
			data
		}),
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares()))
	);
};
