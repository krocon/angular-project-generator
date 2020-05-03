// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// const {SpecReporter} = require('jasmine-spec-reporter');

const fse = require('fs-extra');
const path = require('path');

const testOuptutDir = 'e2e-target';

fse.emptyDirSync(testOuptutDir);


/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  // specs: [
  //   './src/**/*.e2e-spec.ts'
  // ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4201/',

  // framework: 'jasmine',
  // set to "custom" instead of cucumber.
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    './src/features/**/*.feature' // accepts a glob
    // './src/features/**/login.feature'
  ],
  cucumberOpts: {
    // require step definitions
    require: [
      './src/steps/**/*.steps.ts' // accepts a glob
    ],
    // format: ['progress', 'pretty:output.txt'],
    format: 'json:' + testOuptutDir + '/results.json',
    tags: [
      // hier kann man angeben, welche Scenarios man testen möchte
      //'@login'
    ]
  },


  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: path.join(__dirname, './tsconfig.json')
    });
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }]
};
