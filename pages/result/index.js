import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import ResultContainer from '../../components/result-container';

class Result extends PureComponent {
	render() {
		return (
			<>
				<Head title="Result" />
				<Layout>
					<ResultContainer />
				</Layout>
			</>
		);
	}
}

export default Result;
