import {
	assertActionType,
	assertActionPayload,
	assertPassPayload
} from '../../test-utils/assertions';

import { setFullData } from '../data';

describe('data', () => {
	describe('#setFullData', () => {
		assertActionType(setFullData(null));
		assertActionPayload(setFullData(null));
		assertPassPayload(setFullData);
	});
});
