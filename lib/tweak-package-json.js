const fs = require('fs-extra');


const changePackageJsonScripts = (file, scriptsObject) => {
  const jsonObject = fs.readJsonSync(file);
  jsonObject.scripts = {...jsonObject.scripts, ...scriptsObject};
  fs.writeJsonSync(file, jsonObject, {spaces: 2});
};


const changePackageJson = (file, o) => {
  let jsonObject = fs.readJsonSync(file);
  jsonObject = {...jsonObject, ...o};
  fs.writeJsonSync(file, jsonObject, {spaces: 2});
};


exports.changePackageJsonScripts = changePackageJsonScripts;
exports.changePackageJson = changePackageJson;
