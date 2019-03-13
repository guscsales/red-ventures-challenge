import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import middlewares from './middlewares';
import tests from './tests';

export const initializeStore = (initialState = {}) => {
	return createStore(
		combineReducers({
			tests
		}),
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares()))
	);
};
