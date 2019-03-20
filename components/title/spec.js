import React from 'react';
import { shallow } from 'enzyme';
import Title from '.';

import style from './style.scss';

describe('<Title />', () => {
	describe('#render', () => {
		it('should render center class when `center` prop is passed', () => {
			const wrapper = shallow(<Title center />);

			expect(wrapper.find(`.${style.center}`)).toHaveLength(1);
		});
	});
});
