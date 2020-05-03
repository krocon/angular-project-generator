const chalk = require('chalk');
const pkg = require('../package.json');

const printInfo = (cmds, data) => {

  const a = chalk.bold.green('A');
  const p = chalk.bold.green('P');
  const ge = chalk.bold.green('Ge');

  console.info('');
  console.info(a + 'ngular ' + p + 'roject ' + ge + 'nerator   \n');
  console.info('APGe version     :', chalk.bold.green(pkg.version));
  console.info('app name         :', chalk.bold.cyan(data.replacements.__app__));
  console.info('app label        :', chalk.bold.cyan(data.replacements.AppXyz));
  console.info('app prefix       :', chalk.bold.cyan(data.prefix));
  console.info('component prefix :', chalk.bold.cyan(data.replacements.__cp__));
  console.info('predefined logo  :', chalk.bold.cyan(data.logo));
  console.info('\n' + chalk.bold('G e n e r a t i n g'));
  console.info('\nSteps:');
  for (let i = 0; i < cmds.length; i++) {
    const nr = i + 1;
    console.info(chalk.bold.green((nr < 10 ? '  ' : ' ') + nr) + ') ' + cmds[i]);
  }
  console.info('');
};

exports.printInfo = printInfo;

