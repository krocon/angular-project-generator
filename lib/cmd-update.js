const chalk = require('chalk');
const {exec} = require("child_process");
const ProgressBar = require('progress');

const pkgs = [
  'npm@latest',
  '@angular/cli@latest',
  'apge'
]

const execAsync = async what => new Promise((resolve, rejected) => {
  exec('npm install -g ' + what, (err, stdout, stderr) => {
    if (err) {
      rejected(err);
   } else {
      resolve(what);
    }
  });
}).catch(console.error);


const cmdUpdate = async () => {
  console.info(chalk.bold('Updating...'));

  const barOpts = {
    width: pkgs.length * 6,
    total: pkgs.length,
    clear: true
  };

  const bar = new ProgressBar(' Updating [:bar] :percent :text', barOpts);
  for (let i = 0; i < pkgs.length; i++) {
    const todo = pkgs[i];
    bar.tick(i, {text: `Updating ${todo}...`});
    await execAsync(todo);
  }
  bar.tick(3, {text: ''});

  console.info(chalk.bold('Updating done.'));
}

exports.update = cmdUpdate;
