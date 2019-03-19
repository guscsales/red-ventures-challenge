import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

import style from './style.scss';

describe('<Header />', () => {
	describe('#render', () => {
		it('should render a logo', () => {
			const wrapper = shallow(<Header />);

			expect(wrapper.find(`.${style.logo}`)).toHaveLength(1);
		});

		it('should render items on menu', () => {
			const wrapper = shallow(<Header />);

			expect(wrapper.find('li')).toHaveLength(5);
		});
	});
});
