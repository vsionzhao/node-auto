const config = require('../config');
const utils  = require('../utils');
async function execute(event, path) {
  const buildDir = config.WATCH_PATH;
  const rmFile = `${config.WATCH_PATH}/${config.BUILD_PATH_NAME}`;
  try {
    process.chdir(`${buildDir}`); // 更改执行环境，
    log('green',`new directory: ${process.cwd()}`);
  } catch (err) {
    log('yellow',` ${err}, or in the current dir`);
  }

  const commons = [
    `rm -rf ${rmFile}`,
    `yarn install`,
    `npm run build`,
    `cp -R ${rmFile}/* /home/web`,
  ];

  // 不要用有回调的方法去调用await修饰的方法
  for (const common of commons){
    await utils.execFn(common)
  }

  log('green','success');
}


module.exports = execute;
