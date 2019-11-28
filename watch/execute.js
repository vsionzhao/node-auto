const config = require('../config/index.js');
const utils  = require('../utils');
const getConf  = require('../config/getConf');
async function execute(event, path) {
 const cwd = process.cwd();
 try {
   // 获取项目配置
   global.projectConf =  await getConf.getProjectConf(`${config.WATCH_PATH}/${config.PROJECT_CONF_NAME}`);

   const buildDir = config.WATCH_PATH;
   try {
     process.chdir(`${buildDir}`); // 更改执行环境，构建目录环境
     log('green',`new execution context: ${process.cwd()}`);
   } catch (err) {
     log('yellow',` ${err}, or in the current dir`);
   }

   const commons = global.projectConf.commons;

   // 不要用forEach 配合await执行命令，这样执行顺序不会如你所愿
   for (const common of commons){
     await utils.execFn(utils.commonReplaceString(common))
   }
   global.working = false;
   process.chdir(cwd); // 更改为node运行环境
   log('green', 'success');
 } catch (e) {
   utils.execFn(`rm -rf ${config.REPLACE_STRINGS.PRIVATE_KEY_FILE_NAME}`); // 为了安全起见，操作命令失败的时候，把私钥删除
   process.chdir(cwd); // 更改为node运行环境
   global.working = false;
 }
}


module.exports = execute;
