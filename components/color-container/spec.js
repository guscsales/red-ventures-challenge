jest.mock('next/router');
jest.mock('../../actions/result');
jest.mock('../../actions/step');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ColorContainer from '.';

import { setColor, setAccumulatorPrice } from '../../actions/result';
import { setNextPage } from '../../actions/step';

import fixture from '../../test-utils/fixtures/store';

import style from './style.scss';

const items = fixture.data.color.items;
const currentPrice = fixture.result.currentPrice;

const getWrapper = () =>
	mount(
		<Provider store={__createTestStore__(fixture)}>
			<ColorContainer />
		</Provider>
	).find('ColorContainer');

describe('<ColorContainer />', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('#componentDidMount', () => {
		it('should call `setColor` and `setNextPage` actions', () => {
			const wrapper = getWrapper();

			wrapper.instance().componentDidMount();

			expect(setColor).toHaveBeenCalled();
			expect(setNextPage).toHaveBeenCalled();
		});
	});

	describe('#handleChangeColor', () => {
		it('should call `setColor` and `setAccumulatorPrice` actions', () => {
			const wrapper = getWrapper();

			wrapper.instance().handleChangeColor(0);

			expect(setColor).toHaveBeenCalledWith(items[0]);
			expect(setAccumulatorPrice).toHaveBeenCalledWith({
				currentPrice,
				accumulatorPrice: items[0].price
			});
		});
	});

	describe('#getColorsOptions', () => {
		it('should return a list of colors', () => {
			const wrapper = getWrapper();
			const actual = shallow(
				wrapper.instance().getColorsOptions(items, 0)
			);

			expect(actual.find('li')).toHaveLength(items.length);
		});
	});

	describe('#render', () => {
		it('should return price formatted when is greather than zero', () => {
			const wrapper = getWrapper();

			wrapper.setState({ currentIndex: 1 });

			expect(wrapper.find(`.${style.extraPrice}`).text()).toBe('+$1,200');
		});

		it('should return "Included" message when is equals to zero', () => {
			const wrapper = getWrapper();

			expect(wrapper.find(`.${style.extraPrice}`).text()).toBe(
				'Included'
			);
		});
	});

	describe('listeners', () => {
		it('should call `handleChangeColor` when click on color of list', () => {
			const wrapper = getWrapper();
			const instance = wrapper.instance();
			const spy = jest.spyOn(instance, 'handleChangeColor');
			const item = shallow(instance.getColorsOptions(items, 0));

			item.find('li')
				.first()
				.simulate('click');

			expect(spy).toHaveBeenCalled();
		});
	});
});
