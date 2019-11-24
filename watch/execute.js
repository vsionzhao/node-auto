const config = require('../config');
const utils  = require('../utils');
const getConf  = require('../config/getConf');
async function execute(event, path) {
  // 获取项目配置
  global.projectConf =  await getConf.getProjectConf(resolve(`${config.WATCH_PATH}/${config.PROJECT_CONF_NAME}`));

  const buildDir = config.WATCH_PATH;
  try {
    process.chdir(`${buildDir}`); // 更改执行环境，
    log('green',`new execution context: ${process.cwd()}`);
  } catch (err) {
    log('yellow',` ${err}, or in the current dir`);
  }

  const commons = global.projectConf.commons;

  // const commons = [
  //   `rm -rf ${rmFile}`,
  //   `yarn install`,
  //   `npm run build`,
  //   // `cp -Rf ${config.BUILD_PATH_NAME}/* /home/web`,
  // ];

  // 不要用有回调的方法去调用await修饰的方法
  for (const common of commons){
    await utils.execFn(common)
  }

  log('green', 'success');
}


module.exports = execute;
