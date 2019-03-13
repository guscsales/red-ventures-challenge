/* istanbul ignore file */

module.exports = {
	verbose: true,
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
			'<rootDir>/__mocks__/file-mock.js',
		'\\.(s?css)$': 'identity-obj-proxy'
	},
	setupFiles: ['<rootDir>/enzyme.setup.js', './test-utils/setup-jest.js'],
	coveragePathIgnorePatterns: [
		'test-utils',
		'.json',
		'server/routes',
		'lib/fixtures',
		'lib/constants',
		'lib/next-utils',
		'server/www.js',
		'types',
		'config',
		'pages'
	],
	collectCoverage: true
};
