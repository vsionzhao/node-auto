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
  ignored: /(dist)|(node_modules)/
});

const executeFnDeb = debounce(execute, config.WATCH_WAIT);

// 监听文件事件
watcher.on('all',(event, path)=>{
  executeFnDeb(event, path);
});


module.exports = watcher;
