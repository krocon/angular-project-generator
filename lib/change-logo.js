const replace = require('replace-in-file');

const logos = {
  deutschebank: '__capcp__DeutscheBankLogoComponent',
  deutschebahn: '__capcp__DeutscheBahnLogoComponent',
  lufthansa: '__capcp__LufthansaLogoComponent'
};

const changeLogo = async (file, logo) => {
  if (logo === 'dummy') {
    return; // skip
  }
  let logoComponent = logos[logo];

  if (!logoComponent) {
    return; // skip
  }

  await replace.sync({
    files: file,
    from: /exports: \[([^]+)]/g,
    to: `exports: [${logoComponent}]`,
  });
}

exports.changeLogo = changeLogo;
