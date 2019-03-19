import {
	assertActionType,
	assertActionPayload,
	assertPassPayload
} from '../../test-utils/assertions';

import {
	setEngine,
	setColor,
	setWheel,
	setAccumulatorPrice,
	setCurrentPrice,
	resetResult
} from '../result';

import * as resultActions from '../result';

describe('result', () => {
	describe('#setEngine', () => {
		assertActionType(setEngine(null));
		assertActionPayload(setEngine(null));
		assertPassPayload(setEngine);
	});

	describe('#setColor', () => {
		assertActionType(setColor(null));
		assertActionPayload(setColor(null));
		assertPassPayload(setColor);
	});

	describe('#setWheel', () => {
		assertActionType(setWheel(null));
		assertActionPayload(setWheel(null));
		assertPassPayload(setWheel);
	});

	describe('#setAccumulatorPrice', () => {
		assertActionType(setAccumulatorPrice(null));
		assertActionPayload(setAccumulatorPrice(null));
		assertPassPayload(setAccumulatorPrice);
	});

	describe('#setCurrentPrice', () => {
		assertActionType(setCurrentPrice(null));
		assertActionPayload(setCurrentPrice(null));
		assertPassPayload(setCurrentPrice);
	});

	describe('#resetResult', () => {
		it('should call all values with default values', () => {
			const initialPrice = 63000;
			const store = __createTestStore__();

			store.dispatch(resetResult({ initialPrice }));

			expect(store.getActions()).toEqual([
				{ type: 'SET_ENGINE', payload: null },
				{ type: 'SET_COLOR', payload: null },
				{ type: 'SET_WHEEL', payload: null },
				{
					type: 'SET_ACCUMULATOR_PRICE',
					payload: { currentPrice: initialPrice, accumulatorPrice: 0 }
				},
				{ type: 'SET_CURRENT_PRICE', payload: initialPrice }
			]);
		});
	});
});
