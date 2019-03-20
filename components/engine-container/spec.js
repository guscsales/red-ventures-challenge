jest.mock('next/router');
jest.mock('../../actions/result');
jest.mock('../../actions/step');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import EngineContainer from '.';

import { setEngine, setAccumulatorPrice } from '../../actions/result';
import { setNextPage } from '../../actions/step';

import fixture from '../../test-utils/fixtures/store';

import style from './style.scss';

const items = fixture.data.engine.items;
const currentPrice = fixture.result.currentPrice;

const getWrapper = () =>
	mount(
		<Provider store={__createTestStore__(fixture)}>
			<EngineContainer />
		</Provider>
	).find('EngineContainer');

describe('<EngineContainer />', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('#componentDidMount', () => {
		it('should call `setEngine` and `setNextPage` actions', () => {
			const wrapper = getWrapper();

			wrapper.instance().componentDidMount();

			expect(setEngine).toHaveBeenCalled();
			expect(setNextPage).toHaveBeenCalled();
		});
	});

	describe('#handleChangeEngine', () => {
		it('should call `setEngine` and `setAccumulatorPrice` actions', () => {
			const wrapper = getWrapper();

			wrapper.instance().handleChangeEngine(0);

			expect(setEngine).toHaveBeenCalledWith(items[0]);
			expect(setAccumulatorPrice).toHaveBeenCalledWith({
				currentPrice,
				accumulatorPrice: items[0].price
			});
		});
	});

	describe('#getEngineOptions', () => {
		it('should return a list of engines', () => {
			const wrapper = getWrapper();
			const list = shallow(wrapper.instance().getEngineOptions(items, 0));

			expect(list.find('li')).toHaveLength(items.length);
		});
	});

	describe('#render', () => {
		it('should return price formatted when is greater than zero', () => {
			const wrapper = getWrapper();

			wrapper.setState({ currentIndex: 1 });

			const list = shallow(wrapper.instance().getEngineOptions(items, 0));

			expect(
				list
					.find(`.${style.extraPrice}`)
					.first()
					.text()
			).toBe('+$5,500');
		});
	});

	describe('listeners', () => {
		it('should call `handleChangeEngine` when click on color of list', () => {
			const wrapper = getWrapper();
			const instance = wrapper.instance();
			const spy = jest.spyOn(instance, 'handleChangeEngine');
			const item = shallow(instance.getEngineOptions(items, 0));

			item.find('li')
				.first()
				.simulate('click');

			expect(spy).toHaveBeenCalled();
		});
	});
});
