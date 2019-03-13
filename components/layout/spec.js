import React from 'react';
import { shallow } from 'enzyme';

import Layout from './';

const getWrapper = (props = {}) =>
	shallow(
		<Layout {...props}>
			<ul>
				<li>item #1</li>
			</ul>
		</Layout>
	);

describe('<Layout/>', () => {
	it('should render children', () => {
		const wrapper = getWrapper();
		expect(wrapper.find('ul')).toHaveLength(1);
	});
});
