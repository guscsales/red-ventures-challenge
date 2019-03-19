export const setNextPage = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));

export const setStartSteps = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));
