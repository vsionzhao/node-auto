const {exec}  = require('child_process');
const config = require('./config');
function execFn(common, options) {
  return new Promise((resolve, reject)=>{
    // log('green', `exec common: ${common}`);
    exec(common, options, (error, stdout, stderr)=>{
      if (error) {
        log('red', error);
        reject({error});
      }
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);

      resolve({stdout, stderr});
    })
  })
}

function commonReplaceString(common){
  const match = common.match(/\$\{(\S*)\}/g);
  if (match){
    match.forEach(o=>{
      const current = o.replace(/\${|\}/g, '');
      const val  = config.REPLACE_STRINGS[current];
      if (val){
        o.replace(current,config.REPLACE_STRINGS[current]);
        common = common.replace(o,config.REPLACE_STRINGS[current]);
      }
    })
  }
  return common;
}

module.exports = {
  execFn,
  commonReplaceString
};
