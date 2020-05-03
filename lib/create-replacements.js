const {unknownToKebab} = require("to-kebab");
const {kebabToPascal} = require("to-kebab");
const {capitalize} = require("to-kebab");


const getComponentPrefixByAppLabel = (s) => {
  if (!s) {
    return 'db';
  }
  let ret = s.match(/([A-Z]+)/g).join('').toLowerCase();
  if (ret.length === 0) {
    return s.split(0, 1);
  }
  return ret;
}

/*
    appLabel         Click&Ride   AppXyz
    app                  mydemo   __app__
    cp (company prefix)      db   __cp__
    entityname   ersatz-konzept   __kebabentity__
    folder:   db-ersatz-konzept   __cp____kebabentity__
    class:       DbEsatzKonzept   __capcp____pascalentity__
*/

const createReplacements = (data) => {
  const ret = {};

  if (data.app) {
    ret.__app__ = unknownToKebab(data.app);
    ret.AppXyz = kebabToPascal(ret.__app__);
  }
  if (!ret.AppXyz && data.appLabel) {
    ret.AppXyz = kebabToPascal(unknownToKebab(data.appLabel));
  }

  //Company prefix:
  ret.__cp__ = data.cp ? data.cp.toLowerCase() : getComponentPrefixByAppLabel(ret.AppXyz);
  ret.__capcp__ = capitalize(ret.__cp__);

  // Entity:
  if (data.entity) {
    ret.__kebabentity__ = unknownToKebab(data.entity);
    ret.__pascalentity__ = kebabToPascal(ret.__kebabentity__);
  }
  // ret.__prefix__ = data.prefix ? data.prefix : 'app';
  return ret;
}

const createReplacementsFromOptions = (options, d) => {
  d.logo = options.logo;
  d.app = options.app;
  d.prefix = options.prefix;
  d.cp = options.componentprefix;
  d.replacements = createReplacements(d);
  return d.replacements;
}


exports.createReplacementsFromOptions = createReplacementsFromOptions;

exports.createReplacements = createReplacements;
