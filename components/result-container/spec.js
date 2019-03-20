jest.mock('next/router');
jest.mock('../../actions/result');
jest.mock('../../actions/step');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ResultContainer, { RowInfo } from '.';

import { resetResult } from '../../actions/result';
import { setNextPage } from '../../actions/step';

import fixture from '../../test-utils/fixtures/store';

import style from './style.scss';

const { price: initialPrice } = fixture.data;

const getWrapper = (store = __createTestStore__(fixture)) =>
	mount(
		<Provider store={store}>
			<ResultContainer />
		</Provider>
	).find('ResultContainer');

describe('<ResultContainer />', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('#componentDidMount', () => {
		it('should call `setNextPage` action', () => {
			const wrapper = getWrapper();

			wrapper.instance().componentDidMount();

			expect(setNextPage).toHaveBeenCalled();
		});
	});

	describe('#handleRebuild', () => {
		it('should call `resetResult` action', () => {
			const wrapper = getWrapper();

			wrapper.instance().handleRebuild(0);

			expect(resetResult).toHaveBeenCalledWith({ initialPrice });
		});
	});

	describe('#render', () => {
		it('should return price formatted when is greater than zero for all cases', () => {
			const wrapper = getWrapper();

			expect(
				wrapper
					.find('#engine-info')
					.first()
					.text()
			).toContain('$1,000');
			expect(
				wrapper
					.find('#color-info')
					.first()
					.text()
			).toContain('$1,000');
			expect(
				wrapper
					.find('#wheel-info')
					.first()
					.text()
			).toContain('$1,000');
		});

		it('should return "Included" message when is equals to zero for all cases', () => {
			const store = __createTestStore__({
				...fixture,
				result: {
					currentPrice: 63000,
					engine: {
						price: 0
					},
					color: {
						id: 1,
						price: 0
					},
					wheel: {
						price: 0
					}
				}
			});
			const wrapper = getWrapper(store);

			expect(
				wrapper
					.find('#engine-info')
					.first()
					.text()
			).toContain('Included');
			expect(
				wrapper
					.find('#color-info')
					.first()
					.text()
			).toContain('Included');
			expect(
				wrapper
					.find('#wheel-info')
					.first()
					.text()
			).toContain('Included');
		});
	});

	describe('listeners', () => {
		it('should call `handleChangeColor` when click on color of list', () => {
			const wrapper = getWrapper();
			const instance = wrapper.instance();
			const spy = jest.spyOn(instance, 'handleRebuild');

			mount(instance.render())
				.find(`.${style.rebuild}`)
				.simulate('click');

			expect(spy).toHaveBeenCalled();
		});
	});
});

describe('<RowInfo />', () => {
	describe('#render', () => {
		it('should render the row info big class when `big` prop is passed', () => {
			const wrapper = shallow(<RowInfo big />);

			expect(wrapper.find(`.${style.rowInfoBig}`)).toHaveLength(1);
		});
	});
});
