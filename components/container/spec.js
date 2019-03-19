import React from 'react';
import { shallow } from 'enzyme';
import Container from '.';

import style from './style.scss';

const getWrapper = (props = {}) => shallow(<Container {...props} />);

describe('<Container />', () => {
	describe('#render', () => {
		it('should add grid class when pass `withGrid` prop', () => {
			const wrapper = getWrapper({
				withGrid: true
			});

			expect(wrapper.find(`.${style.withGrid}`)).toHaveLength(1);
		});

		it('should add bottom space class when pass `bottomSpace` prop', () => {
			const wrapper = getWrapper({
				withBottomSpace: true
			});

			expect(wrapper.find(`.${style.bottomSpace}`)).toHaveLength(1);
		});
	});
});
