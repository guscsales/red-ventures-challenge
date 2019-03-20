jest.mock('next/router');
jest.mock('../../actions/result');
jest.mock('../../actions/step');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import WheelContainer from '.';

import { setWheel, setAccumulatorPrice } from '../../actions/result';
import { setNextPage } from '../../actions/step';

import fixture from '../../test-utils/fixtures/store';

import style from './style.scss';

const items = fixture.data.wheels.items;
const currentPrice = fixture.result.currentPrice;

const getWrapper = () =>
	mount(
		<Provider store={__createTestStore__(fixture)}>
			<WheelContainer />
		</Provider>
	).find('WheelContainer');

describe('<WheelContainer />', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('#componentDidMount', () => {
		it('should call `setWheel` and `setNextPage` actions', () => {
			const wrapper = getWrapper();

			wrapper.instance().componentDidMount();

			expect(setWheel).toHaveBeenCalled();
			expect(setNextPage).toHaveBeenCalled();
		});
	});

	describe('#handleChangeWhell', () => {
		it('should call `setWheel` and `setAccumulatorPrice` actions', () => {
			const wrapper = getWrapper();

			wrapper.instance().handleChangeWhell(0);

			expect(setWheel).toHaveBeenCalledWith(items[0]);
			expect(setAccumulatorPrice).toHaveBeenCalledWith({
				currentPrice,
				accumulatorPrice: items[0].price
			});
		});
	});

	describe('#getWheelsOptions', () => {
		it('should return a list of wheels', () => {
			const wrapper = getWrapper();
			const actual = shallow(
				wrapper.instance().getWheelsOptions(items, 0)
			);

			expect(actual.find('li')).toHaveLength(items.length);
		});

		it('should render formatted value when price is greater than zero', () => {
			const wrapper = getWrapper();
			const actual = shallow(
				wrapper.instance().getWheelsOptions([{ price: 1000 }], 0)
			);

			expect(actual.find(`.${style.extraPrice}`).text()).toBe('+$1,000');
		});

		it('should render included when price is equals to zero', () => {
			const wrapper = getWrapper();
			const actual = shallow(
				wrapper.instance().getWheelsOptions([{ price: 0 }], 0)
			);

			expect(actual.find(`.${style.extraPrice}`).text()).toBe('Included');
		});
	});

	describe('listeners', () => {
		it('should call `handleChangeWhell` when click on wheel of list', () => {
			const wrapper = getWrapper();
			const instance = wrapper.instance();
			const spy = jest.spyOn(instance, 'handleChangeWhell');
			const item = shallow(instance.getWheelsOptions(items, 0));

			item.find('li')
				.first()
				.simulate('click');

			expect(spy).toHaveBeenCalled();
		});
	});
});
