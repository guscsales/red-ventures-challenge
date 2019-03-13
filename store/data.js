export default (state = {}, { type, payload }) => {
	switch (type) {
		case 'SET_FULL_DATA':
			return payload;

		default:
			return state;
	}
};
