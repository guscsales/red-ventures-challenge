export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'SET_SUCCESS':
			return payload;

		default:
			return state;
	}
};
