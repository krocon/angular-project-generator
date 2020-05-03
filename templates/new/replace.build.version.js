/**
 * This helps you to show the build (compile) time in your angular app.
 *
 * Sets a german date string to the 'version' property on
 * your (angular) src/environments/environment.prod.ts file.
 *
 * Be sure to add a version property first:
 *
 *    export const environment = {
 *      production: true,
 *      version: '{BUILD_VERSION}',
 *      commitHash: '{COMMIT_HASH}',
 *
 * Then you can show the verion string in your menu, footer or about component:
 *    public version = environment.version;
 *    public commitHash = environment.commitHash;
 *
 *    <small>Version: {{version}}</small>
 *    <small>Commit: {{commitHash}}</small>
 *
 * Enhance your package.json scripts with
 *   "build": "npm run _update-build-version & ng build --prod",
 *   "_update-build-version": "node replace.build.version.js",
 *
 * npm run build   will now update the version string to the current (german) date.
 */

const replace = require('replace-in-file');
const git = require('git-last-commit');

const dateOptions = {
  timeZone: "Europe/Berlin",
  month: '2-digit',
  year: 'numeric',
  day: '2-digit',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit'
};

const getCommitShorthash = async () => {
  return await new Promise((resolve, reject) => {
    git.getLastCommit((err, commit) => {
      if (err) {
        resolve('');
      } else {
        resolve(commit.shortHash);
      }
    });
  });
}


async function main() {
  const buildVersion = new Date().toLocaleString("de-DE", dateOptions).replace(/,/g, '');
  const commitShorthash = await getCommitShorthash();

  const replacements = [
    {
      success: `> Build version set to ${buildVersion}`,
      regs: [
        /version: '{BUILD_VERSION}'/g,
        /version: '[^']*'/g,
      ],
      to: `version: '${buildVersion}'`
    },
    {
      success: `> Commit hash set to ${commitShorthash}`,
      regs: [
        /commitHash: '{COMMIT_HASH}'/g,
        /commitHash: '[^']*'/g,
      ],
      to: `commitHash: '${commitShorthash}'`
    }
  ]

  const replaceOptions = {
    files: 'src/environments/environment.prod.ts',
    allowEmptyPaths: false,
  };

  for (let i = 0; i < replacements.length; i++) {
    const replacement = replacements[i];
    for (let j = 0; j < replacement.regs.length; j++) {
      const reg = replacement.regs;
      try {
        const ret = replace.sync({
          ...replaceOptions,
          from: reg,
          to: replacement.to
        });
        if (ret.length && ret[0].hasChanged) {
          console.info(replacement.success);
          break
        }
      } catch (error) {
        // ignore
      }
    }
  }
}

main();
