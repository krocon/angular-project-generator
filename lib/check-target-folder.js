const fs = require('fs-extra');

const checkTargetFolder = async (folder) => {
  return await fs.pathExists(folder);
}

exports.checkTargetFolder = checkTargetFolder;
