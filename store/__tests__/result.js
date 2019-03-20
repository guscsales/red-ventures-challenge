import {
	engine,
	color,
	wheel,
	accumulatorPrice,
	currentPrice
} from '../result';

describe('result', () => {
	describe('#engine', () => {
		it('should return default state value', () => {
			expect(engine(undefined, {})).toBeNull();
		});

		describe('SET_ENGINE', () => {
			it('should return the payload', () => {
				const payload = Symbol();

				expect(engine({}, { type: 'SET_ENGINE', payload })).toBe(
					payload
				);
			});
		});
	});

	describe('#color', () => {
		it('should return default state value', () => {
			expect(color(undefined, {})).toBeNull();
		});

		describe('SET_COLOR', () => {
			it('should return the payload', () => {
				const payload = Symbol();

				expect(color({}, { type: 'SET_COLOR', payload })).toBe(payload);
			});
		});
	});

	describe('#wheel', () => {
		it('should return default state value', () => {
			expect(wheel(undefined, {})).toBeNull();
		});

		describe('SET_WHEEL', () => {
			it('should return the payload', () => {
				const payload = Symbol();

				expect(wheel({}, { type: 'SET_WHEEL', payload })).toBe(payload);
			});
		});
	});

	describe('#accumulatorPrice', () => {
		it('should return default state value', () => {
			expect(accumulatorPrice(undefined, {})).toBe(0);
		});

		describe('SET_ACCUMULATOR_PRICE', () => {
			it('should return the sum of props passed on payload', () => {
				const payload = { currentPrice: 1000, accumulatorPrice: 200 };

				expect(
					accumulatorPrice(
						{},
						{ type: 'SET_ACCUMULATOR_PRICE', payload }
					)
				).toEqual(1200);
			});
		});
	});

	describe('#currentPrice', () => {
		it('should return default state value', () => {
			expect(currentPrice(undefined, {})).toBe(0);
		});

		describe('SET_CURRENT_PRICE', () => {
			it('should return the payload', () => {
				const payload = Symbol();

				expect(
					currentPrice({}, { type: 'SET_CURRENT_PRICE', payload })
				).toBe(payload);
			});
		});
	});
});
