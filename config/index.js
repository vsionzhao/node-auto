module.exports = {
  WATCH_WAIT: 10000,  // watch 文件变动后等待多少秒后执行
  WATCH_PATH: 'www', // watch 路径
  WATCH_PATH_TYPE: 0, // watch路径类型，0：相对路径，1绝对路径
  PROJECT_CONF_NAME: 'autoConf.json', // 项目conf的文字
  REPLACE_STRINGS: { // 命令需要替换的变量
    PRIVATE_KEY: '~/.ssh/id_rsa', // 私钥地址
    TEST_STRING: 'success ',
    PRIVATE_KEY_FILE_NAME: 'authentication.pem',
    SERVICE_USER: 'root',
    SERVICE_IP: '122.51.231.67',
    SERVICE_PROJECT_PATH: '/home/web'
  }
};
