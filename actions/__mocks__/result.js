export const setEngine = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));

export const setColor = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));

export const setWheel = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));

export const setAccumulatorPrice = jest.fn().mockImplementation(() => ({
	type: Math.random()
}));

export const setCurrentPrice = jest.fn().mockImplementation(() => ({
	type: Math.random()
}));

export const resetResult = jest.fn().mockImplementation(() => ({
	type: Math.random()
}));
