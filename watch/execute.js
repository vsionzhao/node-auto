const config = require('../config');
const utils  = require('../utils');
async function execute(event, path) {
  const buildDir = resolve(`${config.WATCH_PATH}`);
  const rmFile = resolve(`${config.WATCH_PATH}/${config.BUILD_PATH_NAME}`);
  const commons = [`rm -rf ${rmFile}`, `cd ${buildDir} && cnpm install`, `cd ${buildDir} && npm run build`];

  // 不要用有回调的方法去调用await修饰的方法
  for (const common of commons){
    await utils.execFn(common)
  }

  log('green','success');
}


module.exports = execute;
