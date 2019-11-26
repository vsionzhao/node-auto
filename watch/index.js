const chokidar = require('chokidar');
const debounce = require('lodash/debounce');
const execute = require('./execute');
const config = require('../config');


log('green', 'start listening to files...');
// 初始化watcher
const watcher = chokidar.watch(watchPath,{
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  },
  // 忽略的文件
  ignored: /yarn.lock|node_modules|package-lock.json|build|dist|\.pem|autoConf.json/,
  ignoreInitial: true,
  cwd: '.', // 表示当前目录
});

const executeFnDeb = debounce(execute, config.WATCH_WAIT);

execute();

// 监听文件事件
watcher.on('all',(event, path)=>{
  console.log(`event: ${event}   path: ${path}`);
  executeFnDeb(event, path);
});


module.exports = watcher;
