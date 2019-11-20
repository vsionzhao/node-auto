const {exec}  = require('child_process');
function execFn(common) {
  return new Promise((resolve, reject)=>{
    console.log('-------------------');
    log('green',`exec common: ${common}`);
    exec(common,(error, stdout, stderr)=>{
      if (error) {
        log('red',error);
        reject({error});
      }
      console.log(stdout);
      console.log(stderr);

      resolve({stdout, stderr});
    })
  })
}

module.exports = {
  execFn
};
