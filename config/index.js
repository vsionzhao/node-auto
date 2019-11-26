const fs = require('fs');
module.exports = {
  WATCH_WAIT: 10000,  // watch 修改后等待多少秒后执行
  WATCH_PATH: 'www', // watch 路径
  WATCH_PATH_TYPE: 0, // watch路径类型，0：相对路径，1绝对路径
  PROJECT_CONF_NAME: 'autoConf.json', // 项目conf的文字
  REPLACE_STRINGS: {
    PRIVATE_KEY: '~/.ssh/id_rsa' // 私钥地址
  }
};
