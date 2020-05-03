const {unknownToKebab} = require("to-kebab");
const {kebabToSnake} = require("to-kebab");
const {kebabToPascal} = require("to-kebab");
const {kebabToCamel} = require("to-kebab");


const demo = () => {
  /*
    camelCase2
    PascalCase2
    snake_case_2
    kebab-case-2
   */
  const kebab = 'ersatz-konzept-12';
  const inputs = [
    'ersatzKonzept',
    'ErsatzKonzept',
    'ersatz-Konzept',
    'ersatz-konzept',
    'ERSATZ-KONZEPT',
    'ersatz_Konzept',
    'ersatz_konzept',
    'ERSATZ_KONZEPT',
    'ersatz Konzept',

    'ersatz-KonzeptDialog',
    'ersatz_KonzeptDialog',

    'ersatzKonzept12',
    'ersatzKonzept-12',
    'ERSATZ-KONZEPT12',
    'ersatzKonzept12',
    'ERSATZ_KONZEPT12',
  ];

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    console.info('unkownToKebab(' + input + ') -> ' + unknownToKebab(input));
  }
  console.info();
  console.info('kebabToCamel (' + kebab + ') -> ' + kebabToCamel(kebab));
  console.info('kebabToPascal(' + kebab + ') -> ' + kebabToPascal(kebab));
  console.info('kebabToSnake (' + kebab + ') -> ' + kebabToSnake(kebab));
};

demo();
