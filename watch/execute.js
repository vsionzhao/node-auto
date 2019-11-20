const config = require('../config');
const utils  = require('../utils');
async function execute(event, path) {
  const buildDir = resolve(`${config.WATCH_PATH}`);
  const rmFile = resolve(`${config.WATCH_PATH}/${config.BUILD_PATH_NAME}`);
  await utils.execFn(`rm -rf ${rmFile}`);
  await utils.execFn(`cd ${buildDir} && cnpm install`);
  await utils.execFn(`cd ${buildDir} && npm run build`);

  log('green','success');
}


module.exports = execute;
