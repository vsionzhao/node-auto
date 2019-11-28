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
  ignored: /node_modules|build|dist|\.pem|\.sed/,
  ignoreInitial: true, // 初始化不执行文件事件
  cwd: '.', // 表示当前目录
});

// 添加防抖，等所有文件修改完毕后再构建
const executeFnDeb = debounce(execute, config.WATCH_WAIT);

// 监听文件事件
watcher.on('all',(event, path)=>{
  // 当开始工作之后 就算文件变更也不会执行
  if (global.working) return false;
  global.working = true;

  console.log(`event: ${event}   path: ${path}`);
  executeFnDeb(event, path);
});


module.exports = watcher;
