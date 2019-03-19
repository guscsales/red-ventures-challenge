import {
	assertActionType,
	assertActionPayload,
	assertPassPayload
} from '../../test-utils/assertions';

import { setNextPage, setStartSteps } from '../step';

describe('step', () => {
	describe('#setNextPage', () => {
		assertActionType(setNextPage(''));
		assertActionPayload(setNextPage(''));
		assertPassPayload(setNextPage);
	});

	describe('#setStartSteps', () => {
		assertActionType(setStartSteps());
	});
});
