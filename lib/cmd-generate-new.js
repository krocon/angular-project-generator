const chalk = require('chalk');
const fse = require('fs-extra');
const prompts = require('prompts');
const ProgressBar = require('progress');
const {createReplacementsFromOptions} = require("./create-replacements");

const {changeLogo} = require("./change-logo");
const {fixFiles} = require("./fix-files");
const {execAsync} = require("./exec-async");
const {printInfo} = require("./print-info");
const {renameFiles} = require("./rename-files");
const {checkTargetFolder} = require("./check-target-folder");
const {changePackageJsonScripts} = require("./tweak-package-json");


const callExit = (d) => {
  console.warn(chalk.bold.red('\n\nTarget folder already exists: ', './' + d.app));
  console.warn('Choose another target folder ('
    + chalk.bold.green('apge -p ' + d.app + '2')
    + ') or delete target folder first ('
    + chalk.bold.green('rmdir ' + d.app + ' /s /q')
    + ' or '
    + chalk.bold.green('rm -rf ' + d.app + '/') + ').');
  console.warn(chalk.bold.red('Abort.'));
  process.exit(-1);
};

async function sleep(ms) {
  return await new Promise(resolve => setTimeout(resolve, ms));
}


const printDone = (appFolder) => {
  console.info(`
  
 ${chalk.bold('Project successfully generated.')}
 Type:
   cd ${appFolder}
   ng serve

.`);
};

const generateNewProject = async (options) => {
  let cwd = './';
  const data = {
    app: 'demo', // Basepath and "name" in package.json
    appLabel: 'DemoApp', // Label
    cp: 'db' // Company Prefix
  };
  const replacements = createReplacementsFromOptions(options, data);
  const appFolder = replacements.__app__;

  const e2eCmds = data.e2e ?[
    'npm i --save-dev chai',
    'npm i --save-dev cucumber',
    'npm i --save-dev jasmine',
    'npm i --save-dev protractor-beautiful-reporter',
    'npm i --save-dev protractor-cucumber-framework',
    'npm i --save-dev protractor-multiple-cucumber-html-reporter-plugin',
    'npm i --save-dev fs-extra',
    'copy e2e config',
  ]: [];


  const initCmds = [
    'pre check',
    `ng new ${replacements.__app__} --routing=true --style=scss --routing=true --interactive=false --prefix=${data.prefix}`,
    `cd ${replacements.__app__}`,
    `ng add @angular/material --defaults=true`,
    `ng add @angular/pwa --project ${replacements.__app__}`,
    'npm i @angular/flex-layout -s',
    'npm i replace-in-file --save-dev',
    'npm i git-last-commit --save-dev',
    'npm i prettier --save-dev --save-exact',
    `copy templates`,
    'extend package.json',
    'change logo',
    `fix files`,
    `rename files`
  ];

  const endCmds = [
    `npm install`,
    'done'
  ];

  const cmds = [...initCmds, ...e2eCmds, ...endCmds];

  printInfo(cmds, data);

  let confirmed = options.force;
  if (!confirmed) {
    const res = await prompts({
      type: 'confirm',
      name: 'value',
      message: 'Can you confirm?',
      initial: true
    });
    confirmed = res.value;
  }

  if (confirmed) {
    console.info('');

    const barOpts = {
      width: cmds.length,
      total: cmds.length,
      clear: true,
      cmd: 'init',
      complete: '\u2588',
      incomplete: '.'
    };
    const step = chalk.bold.green('Step');
    const bar = new ProgressBar(' Generating... [:bar] (:percent) ' + step + ': :n', barOpts);


    // execute step by step:
    for (let i = 0; i < cmds.length; i++) {
      const cmd = cmds[i];
      bar.tick(1, {cmd: cmd, n: (i + 1)});
      await sleep(500);

      if (cmd === 'pre check') {
        const exists = await checkTargetFolder('./' + appFolder);
        if (exists) {
          callExit(data);
          return; // exit program
        }

      } else if (cmd === 'change logo') {
        await changeLogo('./' + appFolder + '/src/app/__cp__-logo/__cp__-logo.module.ts', data.logo);

      } else if (cmd === 'copy templates') {
        await fse.copy(__dirname + '/../templates/new', './' + appFolder);

      } else if (cmd === 'copy e2e config') {
        await fse.copy(__dirname + '/../templates/e2e', './' + appFolder);

      } else if (cmd === 'fix files') {
        await fixFiles('./' + appFolder + '/src/**/*.*', replacements);
        await fixFiles('./' + appFolder + '/package.json', replacements);

      } else if (cmd === 'extend package.json') {
        changePackageJsonScripts(
          './' + appFolder + '/package.json',
          {
            "build": "npm run _update-build-version & ng build --deleteOutputPath=true --prod --build-optimizer --serviceWorker=true --aot=true  --base-href /" + appFolder + "/",
            "lint-fix": "ng lint --fix=true",
            "e2e": "ng e2e --port 4202",
            "e2e-desktop": "npm run e2e-clear-target & ng e2e --port=4203 --protractor-config=./e2e/protractor.desktop.conf.js",
            "e2e-galaxy-s5": "npm run e2e-clear-target & ng e2e --port=4204 --protractor-config=./e2e/protractor.galaxy-s5.conf.js",
            "_update-build-version": "node replace.build.version.js",
            "prettier": "prettier --write \"./{src,e2e}/**/*.{ts,js,html,scss}\"",
            "prettier-check": "prettier --list-different \"./{src,e2e}/**/*.{ts,js,html,scss}\"",
            "postinstall": "npm run prettier & ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points"
          }
        );

      } else if (cmd === 'copy e2e files') {
        await fse.copy(__dirname + '/../templates/e2e', './' + appFolder);

      } else if (cmd === 'rename files') {
        await renameFiles('./' + appFolder + '/src', replacements);

      } else if (cmd.indexOf('cd ') === 0) {
        cwd = './' + appFolder;

      } else if (cmd.indexOf('done') === 0) {
        await fse.writeJsonSync('./' + appFolder + '/apg.json', options, {spaces: 2});
        printDone(appFolder);

      } else {
        await execAsync(cmd, cwd);
      }
    } // for

  } // if

};

exports.generateNewProject = generateNewProject;

