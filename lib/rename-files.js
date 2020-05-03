const fs = require('fs').promises;
const {join} = require('path');

const replaceAllKeys = (name, replacements) => {
  for (const key in replacements) {
    name = name.replace(new RegExp(key, 'g'), replacements[key]);
  }
  return name;
}

const hasKeyInName = (name, replacements) => {
  for (const key in replacements) {
    if (name.indexOf(key) > -1) return key;
  }
  return null;
}

const renameFiles = async (dir, replacements) => {
  const files = await fs.readdir(dir);

  let names = files.filter(file => hasKeyInName(file, replacements));
  for (const file of names) {
    const filePath = join(dir, file);
    const newFilePath = join(dir, replaceAllKeys(file, replacements));
    await fs.rename(filePath, newFilePath);
  }

  let potentialDirs = (await fs.readdir(dir)).filter(file => file.indexOf('.') === -1);
  for (let i = 0; i < potentialDirs.length; i++) {
    await renameFiles(join(dir, potentialDirs[i]), replacements);
  }
};

exports.renameFiles = renameFiles;
