export const setEngine = payload => ({
	type: 'SET_ENGINE',
	payload
});

export const setColor = payload => ({
	type: 'SET_COLOR',
	payload
});

export const setWheel = payload => ({
	type: 'SET_WHEEL',
	payload
});

export const setAccumulatorPrice = payload => ({
	type: 'SET_ACCUMULATOR_PRICE',
	payload
});

export const setCurrentPrice = payload => ({
	type: 'SET_CURRENT_PRICE',
	payload
});

export const resetResult = ({ initialPrice }) => [
	setEngine(null),
	setColor(null),
	setWheel(null),
	setAccumulatorPrice({
		currentPrice: initialPrice,
		accumulatorPrice: 0
	}),
	setCurrentPrice(initialPrice)
];
