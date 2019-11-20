const chokidar = require('chokidar');
const debounce = require('lodash/debounce');
const execute = require('./execute');
const config = require('../config');

const watchPath = config.WATCH_PATH_TYPE ? config.WATCH_PATH : resolve(config.WATCH_PATH);
console.log('start listening to files...');
const watcher = chokidar.watch(watchPath,{
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  },
});

const executeFnDeb = debounce(execute, config.WATCH_WAIT);

watcher.on('all',(event, path)=>{
  executeFnDeb(event, path);
});


module.exports = watcher;
