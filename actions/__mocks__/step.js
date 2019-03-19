export const setNextPage = jest
	.fn()
	.mockImplementation(() => ({ type: Math.random() }));
