const protractor = require('./protractor.conf');
const config = protractor.config;

config.multiCapabilities = [
	{
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 5,
		chromeOptions: {
			args: [
				'--disable-infobars',
				'--disable-gpu',
				'--disable-dev-shm-usage',
				'--window-size=1920,1080'
			],
			mobileEmulation: {
				deviceName: 'Galaxy S5'
			}
		},
		metadata: {
			device: 'Galaxy S5',
			platform: {
				name: 'android'
			}
		}
	}
];

/**
 * @type { import("protractor").Config }
 */
exports.config = config;
