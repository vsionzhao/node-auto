const {exec}  = require('child_process');
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

module.exports = {
  execFn
};
