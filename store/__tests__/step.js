import { nextPage, startSteps } from '../step';

describe('step', () => {
	describe('#nextPage', () => {
		it('should return default state value', () => {
			expect(nextPage(undefined, {})).toBe('');
		});

		describe('SET_NEXT_PAGE', () => {
			it('should return the page according key passed', () => {
				const payload = '/engine';

				expect(nextPage({}, { type: 'SET_NEXT_PAGE', payload })).toBe(
					'/color'
				);
			});
		});
	});

	describe('#startSteps', () => {
		it('should return default state value', () => {
			expect(startSteps(undefined, {})).toBeFalsy();
		});

		describe('SET_START_STEPS', () => {
			it('should return true', () => {
				expect(
					startSteps({}, { type: 'SET_START_STEPS' })
				).toBeTruthy();
			});
		});
	});
});
