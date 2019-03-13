'use strict';

module.exports = (nextConf = {}) =>
	Object.assign({}, nextConf, {
		webpack(config, options) {
			if (Array.isArray(nextConf.customLoaders)) {
				config.module.rules.push(...nextConf.customLoaders);
			}

			if (typeof nextConf.webpack === 'function') {
				return nextConf.webpack(config, options);
			}

			return config;
		}
	});
