const replace = require('replace-in-file');

const fixFiles = async (files, replacements) => {
  for (const key in replacements) {
    await replace.sync({
      files: files,
      from: new RegExp(key, 'g'),
      to: replacements[key],
    });
  }
}

exports.fixFiles = fixFiles;
