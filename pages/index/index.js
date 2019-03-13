import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import HomeContainer from '../../components/home-container';
import carImage from '../../lib/images/model-r.png';

const model = 'R';

class Index extends PureComponent {
	render() {
		return (
			<>
				<Head title={`Build your MODEL ${model}`} />
				<Layout>
					<HomeContainer model={model} carImage={carImage} />
				</Layout>
			</>
		);
	}
}

export default Index;
