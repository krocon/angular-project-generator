const path = require('path');
const exec = require('child_process').exec;
const fse = require('fs-extra');
const pkg = require('../package.json');

const cmdApg = path.resolve('./bin/apg');
const pathTarget = './test-target';
const pathGeneratedProject = './test-target/click-n-ride';
const filePackageJson = './test-target/click-n-ride/package.json';


beforeAll(async () => {
  await fse.emptyDirSync(pathTarget);
});


test('Version should be ' + pkg.version, async () => {
  let result = await cli(`node ${cmdApg} --version`, '.');
  expect(result.code).toBe(0);

  const extractVersion = (stdout) => {
    const arr = stdout.split('\n');
    return (arr.splice(arr.length - 2).join('')).replace(/ /g, '');
  };
  expect(extractVersion(result.stdout)).toBe(pkg.version);
}, 60 * 1000);


test('Help text should be displayed', async () => {
  let result = await cli(`node ${cmdApg} --help`, '.');
  expect(result.code).toBe(0);
  expect(result.stdout).toContain('Usage: apg');
}, 60 * 1000);


test('Cmd update should be run without errors', async () => {
  let result = await cli(`node ${cmdApg} update`, '.');
  expect(result.code).toBe(0);
  expect(result.stdout).toContain('Updating done.');
}, 6 * 60 * 1000);


test('Project should be generated', async () => {
  const result = await cli(
    `node ${cmdApg} new -a click-n-ride -p app -l deutschebahn -f`,
    pathTarget);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Project successfully generated.');

  let pathExists = fse.pathExistsSync(filePackageJson);
  expect(pathExists).toBe(true);
}, 6 * 60 * 1000);


test('A rest service should be generated', async () => {
  const result = await cli(`node ${cmdApg} generate restservice flight`, pathGeneratedProject);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Rest Service successfully generated.');
}, 10 * 1000);


test('A store service should be generated', async () => {
  const result = await cli(`node ${cmdApg} generate storeservice configuration`, pathGeneratedProject);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Store Service successfully generated.');
}, 10 * 1000);


test('Project should be built', async () => {
  const result = await cli(`ng build`, pathGeneratedProject);
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
