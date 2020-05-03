const replace = require('replace-in-file');
const chalk = require('chalk');
const fse = require('fs-extra');
const {createReplacementsFromOptions} = require("./create-replacements");
const {renameFiles} = require("./rename-files");
const {fixFiles} = require("./fix-files");

const printDone = (r) => {
  console.info(`
  ${chalk.bold('Rest Service successfully generated.')}
  See: src/app/${r.__cp__}-${r.__kebabentity__}-store/

.`);
};

const data = {};

const generateRestService = async (name, options) => {
  data.entity = name;
  const replacements = createReplacementsFromOptions(options, data);

  await fse.copy(__dirname + '/../templates/entity-service/', './src');
  await fixFiles('./src/app/**/*.*', replacements);
  await renameFiles('./src/app/', replacements);

  await replace.sync({
    files: './src/environments/environment.ts',
    from: /export const environment = {/g,
    to: `export const environment = {
    
  __cp____pascalentity__Config: {
    getUrl: 'assets/mock-data/__kebabentity__/get.json',
    getAllUrl: 'assets/mock-data/__kebabentity__/getall.json',
    deleteUrl: 'assets/mock-data/__kebabentity__/delete.json',
    postUrl: 'assets/mock-data/__kebabentity__/post.json',
    putUrl: 'assets/mock-data/__kebabentity__/put.json'
  }    
    `,
  });

  await replace.sync({
    files: './src/environments/environment.prod.ts',
    from: /export const environment = {/g,
    to: `
const backendUrl = '../service';
    
export const environment = {
    
  __cp____pascalentity__Config: {
    getUrl: \`\${backendUrl}/__kebabentity__\`,
    getAllUrl: \`\${backendUrl}/__kebabentity__\`,
    deleteUrl: \`\${backendUrl}/__kebabentity__\`,
    postUrl: \`\${backendUrl}/__kebabentity__\`,
    putUrl: \`\${backendUrl}/__kebabentity__\`
  }    
    `,
  });

  await fixFiles('./src/**/*.*', replacements);
  await renameFiles('./src/', replacements);

  // TODO in der app.component die config setzen!

  printDone(replacements);
}

exports.generateRestService = generateRestService;
