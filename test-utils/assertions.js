export const assertActionType = action => {
	let describe = 'should return an action object with `type` property';

	const manyActions = Array.isArray(action);

	if (manyActions) {
		describe =
			'should return an array with action objects with `type` property';
	}

	it(describe, () => {
		if (manyActions) {
			action.forEach(cur => expect(cur).toHaveProperty('type'));
		} else {
			expect(action).toHaveProperty('type');
		}
	});
};

export const assertActionPayload = action => {
	let describe = 'should return an action object with `payload` property';

	const manyActions = Array.isArray(action);

	if (manyActions) {
		describe =
			'should return an array with action objects with `payload` property';
	}

	it(describe, () => {
		if (Array.isArray(action)) {
			action.forEach(cur => expect(cur).toHaveProperty('payload'));
		} else {
			expect(action).toHaveProperty('payload');
		}
	});
};

export const assertPassPayload = actionCreator => {
	it('should incorporate the payload value', () => {
		const payload = Symbol();
		const action = actionCreator(payload);
		expect(action.payload).toEqual(payload);
	});
};
