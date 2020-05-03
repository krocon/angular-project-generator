const fs = require('fs-extra');


const changePackageJsonScripts = (file, scriptsObject) => {
  const jsonObject = fs.readJsonSync(file);
  jsonObject.scripts = {...jsonObject.scripts, ...scriptsObject};
  fs.writeJsonSync(file, jsonObject, {spaces: 2});
};


exports.changePackageJsonScripts = changePackageJsonScripts;
