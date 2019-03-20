import { toCurrency } from '../money';

describe('money', () => {
	describe('#toCurrency', () => {
		it('should make value formatted', () => {
			expect(toCurrency(1000)).toBe('$1,000');
		});
	});
});
