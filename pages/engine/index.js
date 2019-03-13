import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import EngineContainer from '../../components/engine-container';

class Index extends PureComponent {
	render() {
		return (
			<>
				<Head title="Engine" />
				<Layout>
					<EngineContainer />
				</Layout>
			</>
		);
	}
}

export default Index;
