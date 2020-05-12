const path = require('path');
const exec = require('child_process').exec;
const fse = require('fs-extra');
const pkg = require('../package.json');

const testTarget = './test-target';
const apg = path.resolve('./bin/apg');
const generatedProjectPath = path.join(testTarget, 'click-n-ride');
const generatedPackageJson = path.join(generatedProjectPath, 'package.json');


beforeAll(async () => {
  await fse.emptyDirSync(testTarget);
});


test('Version should be ' + pkg.version, async () => {
  let result = await cli(`node ${apg} --version`, '.');
  expect(result.code).toBe(0);

  const extractVersion = (stdout) => {
    const arr = stdout.split('\n');
    return (arr.splice(arr.length - 2).join('')).replace(/ /g, '');
  };
  expect(extractVersion(result.stdout)).toBe(pkg.version);
});


test('Project should be generated', async () => {
  const result = await cli(
    // `node ${apg} new -a click-n-ride -p app -cp cr -f`,
    `node ${apg} new -a click-n-ride -p app -cp cr -l deutschebahn -f`,
    testTarget);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Project successfully generated.');

  let pathExists = fse.pathExistsSync(generatedPackageJson);
  expect(pathExists).toBe(true);
}, 6 * 60 * 1000);


test('A rest service should be generated', async () => {
  const result = await cli(
    // `node ${apg} new -a click-n-ride -p app -cp cr -f`,
    `node ${apg} generate restservice flight`,
    testTarget);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Rest Service successfully generated.');
}, 10 * 1000);


test('A store service should be generated', async () => {
  const result = await cli(
    // `node ${apg} new -a click-n-ride -p app -cp cr -f`,
    `node ${apg} generate storeservice configuration`,
    testTarget);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Store Service successfully generated.');
}, 10 * 1000);


test('Project should be built', async () => {
  const result = await cli(`ng build`, './test-target/click-n-ride/');
  // console.info(result.stdout);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('bundle generation complete.');
}, 6 * 60 * 1000);


function cli(cmd, cwd) {
  return new Promise(resolve => {
    exec(cmd,
      {cwd},
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr
        })
      })
  })
}
