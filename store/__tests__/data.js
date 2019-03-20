import data from '../data';

describe('data', () => {
	it('should return default state value', () => {
		expect(data(undefined, {})).toEqual({});
	});

	describe('SET_FULL_DATA', () => {
		it('should return the payload', () => {
			const payload = Symbol();

			expect(data({}, { type: 'SET_FULL_DATA', payload })).toEqual(
				payload
			);
		});
	});
});
