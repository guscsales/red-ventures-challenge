jest.mock('next/link', () => ({ children }) => children);
jest.mock('../../actions/step');

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import HomeContainer from '.';

import { setStartSteps } from '../../actions/step';

import style from './style.scss';

const getWrapper = () =>
	mount(
		<Provider store={__createTestStore__()}>
			<HomeContainer />
		</Provider>
	).find('HomeContainer');

describe('<HomeContainer />', () => {
	describe('#handleBegin', () => {
		it('should call `setStartSteps` action', () => {
			const wrapper = getWrapper();

			wrapper.instance().handleBegin();

			expect(setStartSteps).toHaveBeenCalled();
		});
	});

	describe('listeners', () => {
		it('should call `handleBegin` when click on begin link', () => {
			const wrapper = getWrapper();

			wrapper.find(`.${style.begin}`).simulate('click');

			expect(setStartSteps).toHaveBeenCalled();
		});
	});
});
