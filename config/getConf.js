const fs = require('fs');
const config = require('./index');

const getProjectConf = (path)=>{
  return new Promise((resolve, reject)=>{
    fs.readFile(path,(err, data)=>{
      let conf = {};
      if (err){
        log('yellow', `${path} file not find, use default conf`);
      }else {
        conf = JSON.parse(data);
      }
      resolve(conf);
    })
  })
};

module.exports = {
  getProjectConf
};
