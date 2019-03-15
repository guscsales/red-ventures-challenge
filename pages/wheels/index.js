import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import WheelsContainer from '../../components/wheel-container';

class Wheels extends PureComponent {
	render() {
		return (
			<>
				<Head title="Wheels" />
				<Layout>
					<WheelsContainer />
				</Layout>
			</>
		);
	}
}

export default Wheels;
