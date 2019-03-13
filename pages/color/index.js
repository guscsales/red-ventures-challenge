import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import ColorContainer from '../../components/color-container';

class Index extends PureComponent {
	render() {
		return (
			<>
				<Head title="Color" />
				<Layout>
					<ColorContainer />
				</Layout>
			</>
		);
	}
}

export default Index;
