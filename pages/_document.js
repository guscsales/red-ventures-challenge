import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head />
				<head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
				</head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
