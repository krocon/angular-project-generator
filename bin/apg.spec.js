const path = require('path');
const exec = require('child_process').exec;
const pkg = require('../package.json');

test('Exit code should be 0', async () => {
  let result = await cli(['-v'], '.');
  expect(result.code).toBe(0);
})

test('Version should be ' + pkg.version, async () => {
  let result = await cli(['--version'], '.');
  expect(result.code).toBe(0);
  expect(extractVersion(result.stdout)).toBe(pkg.version);
})


function extractVersion(stdout) {
  const arr = stdout.split('\n');
  const v = (arr.splice(arr.length-2).join('')).replace(/ /g, '');
  console.info('version: ', v);
  return v;
}

function cli(args, cwd) {
  return new Promise(resolve => {
    exec(`node ${path.resolve('./bin/apge')} ${args.join(' ')}`,
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
