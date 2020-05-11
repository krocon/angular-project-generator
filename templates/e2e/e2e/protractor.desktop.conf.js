const protractor = require("./protractor.conf");
const config = protractor.config;

config.multiCapabilities = [
  {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 5,
    chromeOptions: {
      args: [
        "--headless",
        "--disable-infobars",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--window-size=1920,1080",
      ],
      // args: ['--disable-infobars', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080']
    },
    metadata: {
      device: "Desktop",
      platform: {
        name: "windows",
      },
    },
  },
];

/**
 * @type { import("protractor").Config }
 */
exports.config = config;
