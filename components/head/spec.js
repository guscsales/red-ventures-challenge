import React from 'react';
import { shallow } from 'enzyme';
import Head from '.';

describe('<Head />', () => {
	it('should render a `title` tag with prop title and default text', () => {
		const wrapper = shallow(<Head title="test" />);
		const title = wrapper.find('title');

		expect(title.length).toBe(1);
		expect(title.text()).toBe('test | Build your MODEL R | Red Ventures');
	});
});
