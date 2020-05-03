const CFonts = require('cfonts');

const printFiglet = () => {
  const size = require('window-size');
  const text = (!size || size.width) < 227 ? 'APG' : 'Angular Project Generator';

  CFonts.say(text, {
    gradient: ['red', 'blue'],
  });

};

exports.printFiglet = printFiglet;

