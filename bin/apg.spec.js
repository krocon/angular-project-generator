const path = require('path');
const exec = require('child_process').exec;
const fse = require('fs-extra');
const pkg = require('../package.json');

const testTarget = './test-target';
const apg = path.resolve('./bin/apg');
const generatedPAckageJson = path.join(testTarget, 'click-n-ride/package.json');

beforeAll(async () => {
  await fse.emptyDirSync(testTarget);
});

test('Exit code should be 0', async () => {
  let result = await cli(['-v'], '.');
  expect(result.code).toBe(0);
});

test('Version should be ' + pkg.version, async () => {
  let result = await cli(['--version'], '.');
  expect(result.code).toBe(0);
  expect(extractVersion(result.stdout)).toBe(pkg.version);
});

test('Project should be generated', async () => {
  let result = await cli(['new', '-a', 'click-n-ride', '-p', 'app', '-cp', 'cr', '-l', 'deutschebahn', '-f'], testTarget);
  expect(result.code).toBe(0);
  expect(result.stdout).toMatch('Project successfully generated.');

  let pathExists = fse.pathExistsSync(generatedPAckageJson);
  expect(pathExists).toBe(true);

}, 6 * 60 * 10000);


function extractVersion(stdout) {
  const arr = stdout.split('\n');
  const v = (arr.splice(arr.length - 2).join('')).replace(/ /g, '');
  console.info('version: ', v);
  return v;
}

function cli(args, cwd) {
  return new Promise(resolve => {
    exec(`node ${apg} ${args.join(' ')}`,
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
