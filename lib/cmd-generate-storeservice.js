const replace = require('replace-in-file');
const chalk = require('chalk');
const fse = require('fs-extra');
const {createReplacementsFromOptions} = require("./create-replacements");
const {renameFiles} = require("./rename-files");
const {fixFiles} = require("./fix-files");


const printDone = (r) => {
  console.info(`
  ${chalk.bold('Store Service successfully generated.')}
  See: src/app/${r.__cp__}-${r.__kebabentity__}-store/

.`);
};

const data = {};

const generateStoreService = async (name, options) => {
  data.entity = name;
  copyOptions2Data(options, data);
  const replacements = createReplacementsFromOptions(options, data);

  await fse.copy(__dirname + '/../templates/entity-store/', './src/');
  await fixFiles('./src/app/**/*.*', replacements);
  await renameFiles('./src/app/', replacements);

  printDone(replacements);
}

exports.generateStoreService = generateStoreService;
