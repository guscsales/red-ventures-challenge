export const setColor = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));

export const setAccumulatorPrice = jest.fn().mockImplementation(() => ({
	type: Math.random()
}));
