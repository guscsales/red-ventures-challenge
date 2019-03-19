jest.mock('next/router');
jest.mock('../../actions/result');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Router from 'next/router';

import ResultBar from '.';

import {
	setColor,
	setAccumulatorPrice,
	setCurrentPrice
} from '../../actions/result';

import fixture from '../../test-utils/fixtures/store';

import style from './style.scss';

const { engine, color, wheel, accumulatorPrice } = fixture.result;

const getWrapper = () =>
	mount(
		<Provider store={__createTestStore__(fixture)}>
			<ResultBar />
		</Provider>
	).find('ResultBar');

describe('<ResultBar />', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('#handleNextStep', () => {
		it('should call `setCurrentPrice` action and `Router.push` method', () => {
			const spy = jest.spyOn(Router, 'push');
			const wrapper = getWrapper();

			wrapper.instance().handleNextStep();

			expect(setCurrentPrice).toHaveBeenCalledWith(accumulatorPrice);
			expect(spy).toHaveBeenCalledWith(fixture.step.nextPage);
		});
	});

	describe('#render', () => {
		it('should render engine info when exists', () => {
			const wrapper = getWrapper();

			expect(wrapper.find(`.${style.engine}`).text()).toBe(
				`${engine.kwh} ${engine.type}`
			);
		});

		it('should render color info when exists', () => {
			const wrapper = getWrapper();

			expect(wrapper.find(`.${style.color}`).props().src).toBe(color.dot);
		});

		it('should render wheel info when exists', () => {
			const wrapper = getWrapper();

			expect(wrapper.find(`.${style.wheel}`).props().src).toBe(
				wheel.image
			);
		});
	});

	describe('listeners', () => {
		const wrapper = getWrapper();
		const instance = wrapper.instance();
		const spy = jest.spyOn(instance, 'handleNextStep');

		shallow(instance.render())
			.find(`.${style.next}`)
			.simulate('click');

		expect(spy).toHaveBeenCalled();
	});
});
