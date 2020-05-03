const {exec} = require("child_process");

const execAsync = async (cmd, cwd) => new Promise((resolve, rejected) => {
  exec(cmd, {cwd: cwd}, (err, stdout, stderr) => {
    if (err) {
      rejected(err);
    } else {
      resolve(cmd);
    }
  });
}).catch(console.error);

exports.execAsync = execAsync;
