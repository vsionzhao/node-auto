module.exports = {
  WATCH_WAIT: 10000,  // watch 文件变动后等待多少秒后执行
  WATCH_PATH: 'www', // watch 路径
  WATCH_PATH_TYPE: 0, // watch路径类型，0：相对路径，1绝对路径
  PROJECT_CONF_NAME: 'autoConf.json', // 项目conf的文字
  REPLACE_STRINGS: { // 命令需要替换的变量
    PRIVATE_KEY: '~/.ssh/id_rsa', // 私钥地址
    PRIVATE_KEY_FILE_NAME: 'authentication.pem',  // 生成私钥的文件
    SERVICE_USER: 'root', // 服务器用户
    SERVICE_IP: '122.51.231.67', // 服务器地址
    SERVICE_PROJECT_PATH: '/home/web', // nginx项目存放目录

    // 项目替换字符串
    TEST_STRING: 'success ',
  }
};
