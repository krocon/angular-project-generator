#!/usr/bin/env node

const {Command} = require('commander');
const fs = require('fs-extra');
const apg = require('../lib/cmd-generate-new.js');
const update = require('../lib/cmd-update.js');
const pkg = require('../package.json');
const chalk = require('chalk');
const {generateStoreService} = require("../lib/cmd-generate-storeservice");
const {generateRestService} = require("../lib/cmd-generate-restservice");
const {printFiglet} = require("../lib/print-figlet");

const program = new Command();

printFiglet()

program
  .name('apg')
  .usage('<cmd> [options]')
  .version(pkg.version, '-v, --version', 'Output the current version');

program
  .on('--help', () => {
  });

program
  .command('update')
  .description('Update of npm, angular cli and apg')
  .action(async () => {
    await update.update();
  });

program
  .command('new')
  .description('Generate a new angular project')
  .option('-f, --force', 'No confirm dialog / no prompts.', false)
  .option('-a, --app <app>', 'The app name', 'demo')
  .option('-l, --logo <logo>', 'A predefined logo [dummy, deutschebank, deutschebahn]', 'dummy')
  .option('-p, --prefix <prefix>', 'The app prefix', 'app')
  .option('-cp, --componentprefix <componentprefix>', 'The component prefix', '') // no default
  .action(async (options) => {
      const opts = {
        force: options.force,
        app: options.app,
        prefix: options.prefix,
        componentprefix: options.componentprefix,
        logo: options.logo
      };
      await apg.generateNewProject(opts);
    }
  )
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ apg new -a GuiExpert');
    console.log('  $ apg new -a TradeFinder -p app -cp xy -l deutschebank');
    console.log('  $ apg new -a click-n-ride -p app -cp cr -l deutschebahn -f ');
  });


program
  .command('generate')
  .usage('<schematic> <name> [options]')
  .description('Generate a new schematic [restservice, storeservice]', 'storeservice')
  .option('-f, --force', 'No confirm dialog / no prompts.', false)
  .action(async (p1, p2) => {
      let jsonObject;
      try {
        jsonObject = fs.readJsonSync('apg.json');
      } catch (e) {
        console.error(chalk.bold.red('The generate command requires to be run in an Angular project, but a project definition (apg.json) could not be found.'));
        console.error(e);
        process.exit(-1);
      }

      if (p1 && p2 && p2.length > 1) {
        jsonObject.force = p1.force;
        const schematic = p2[0];
        const name = p2[1];

        if (!name) {
          console.error(chalk.bold.red('Name is missing.'));
          console.error(chalk.bold.red('Try:  apg generate --help'));

        } else if (schematic === 'storeservice') {
          await generateStoreService(name, jsonObject);

        } else if (schematic === 'restservice') {
          await generateRestService(name, jsonObject);

        } else {
          console.error(chalk.bold.red('The generate command requires a type [restservice, storeservice] and a name.'));
          console.error(chalk.bold.red('Try:  apg generate --help'));
        }

      } else {
        console.error(chalk.bold.red('Try:  apg generate --help'));
      }
    }
  )
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ apg generate restservice flight');
    console.log('  $ apg generate storeservice configuration');
  });

program.parse(process.argv);
