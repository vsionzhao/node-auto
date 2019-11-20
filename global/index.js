const path = require('path');
global.resolve = (dir)=> {
  return path.join(__dirname, dir);
};
