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
          return writeFileOverwrite(dst, data);
        }
      }
    });
};

// write file, overwrite if exists
const writeFileOverwrite = (dst, data) => {
  return fsPromises.writeFile(dst, data, { encoding: 'utf8' })
    .then(() =>  console.log('DONE!'))
    .catch(err => console.log(err));
};

const writeFileCopy = (dst, data) => {
  return fsPromises.writeFile(dst, data, { encoding: 'utf8', flag: 'wx' })
    .then(() => {
      // console.log('DONE!');
    })
    .catch(err => {
      // console.log(err);
      if(err.code === 'EEXIST') {
        let path = dst.split('/');
        path[path.length - 1] = 'copy of ' + path[path.length - 1];
        path = path.join('/');
        return fsPromises.writeFile(path, data, { encoding: 'utf8' });
      }
    });
};

// read file
const readFile = (path) => {
  return fsPromises.readFile(path, { encoding: 'utf8' })
    .catch(err => console.log(err));
};

// copy a file
const copy = (src, dst) => {
  return readFile(src)
    .then(res => writeFileCopy(dst, res))
    .catch(err => console.log(err));
};

// check if file exists
const exists = (path) => {
  return fsPromises.stat(path)
    .then(res => { return res;
      // console.log(res);
    })
    .catch(err => {
      // console.log(err);
    });
};

// delete file
const deleteFile = (path) => {
  return fsPromises.unlink(path)
    .catch(err => console.log(err));
};

const transform = (path) => {
  return readFile(path)
    .then(res => res = res.replace(/[A-Z]/g, ''))
    .then(res => res = res.toLocaleUpperCase())
    .then(res => res = res.split('').reverse().join(''));
};

module.exports = {
  writeFile,
  readFile,
  copy,
  exists,
  deleteFile,
  transform
};
