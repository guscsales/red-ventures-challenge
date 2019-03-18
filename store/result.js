import { combineReducers } from 'redux';

export const engine = (state = null, { type, payload }) => {
	switch (type) {
		case 'SET_ENGINE':
			return payload;

		default:
			return state;
	}
};

export const color = (state = null, { type, payload }) => {
	switch (type) {
		case 'SET_COLOR':
			return payload;

		default:
			return state;
	}
};

export const wheel = (state = null, { type, payload }) => {
	switch (type) {
		case 'SET_WHEEL':
			return payload;

		default:
			return state;
	}
};

export const accumulatorPrice = (state = 0, { type, payload }) => {
	switch (type) {
		case 'SET_ACCUMULATOR_PRICE':
			const { currentPrice, accumulatorPrice } = payload;

			return currentPrice + accumulatorPrice;

		default:
			return state;
	}
};

export const currentPrice = (state = 0, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PRICE':
			return payload;

		default:
			return state;
	}
};

export default combineReducers({
	engine,
	color,
	wheel,
	accumulatorPrice,
	currentPrice
});
