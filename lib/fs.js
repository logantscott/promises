const fsPromises = require('fs').promises;
const readline = require('readline-sync');

// write file, prompt overwrite if exists
const writeFile = (dst, data) => {
  return fsPromises.writeFile(dst, data, { encoding: 'utf8', flag: 'wx' })
    .then(() => console.log('DONE!'))
    .catch(err => {
      console.log(err);
      if(err.code === 'EEXIST') {
        const overwrite = readline.keyIn('File exists. Overwrite? (y/n) : ', { 
          limit: 'yn',
          limitMessage: 'yes or no?'
        });
        if(overwrite === 'y'){
          return overwriteFile(dst, data);
        }
      }
    });
};

// write file, overwrite if exists
const overwriteFile = (dst, data) => {
  return fsPromises.writeFile(dst, data, { encoding: 'utf8' })
    .then(() =>  console.log('DONE!'))
    .catch(err => console.log(err));
};

// read file
const readFile = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => console.log(err));
};

// copy file
const copy = (src, dst) => {
  readFile(src)
    .then(res => overwriteFile(dst, res));

};

// check if file exists
const exists = (src) => {
  return fsPromises.stat(src)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

module.exports = {
  writeFile,
  readFile,
  copy,
  exists
};
