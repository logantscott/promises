const fsPromises = require('fs').promises;
const path = './files/';
const file = 'newFile.txt';

describe('read file', () => {
  
  // https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options
  // https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options
  it('can write and read a file', () => {
    return fsPromises.writeFile(`${path}newFile.txt`, 'this is some text in my new file', { encoding: 'utf8' })
      .then(() => console.log('DONE!'))
      .then(() => fsPromises.readFile(`${path}newFile.txt`, { encoding: 'utf8' })
        .then(res => expect(res).toEqual('this is some text in my new file')));
  });

  it('can copy a file', () => {
    return fsPromises.writeFile(`${path}${file}`, 'this is some text in my new file', { encoding: 'utf8' })
      .then(() => fsPromises.readFile(`${path}${file}`, { encoding: 'utf8' })
        .then(res => fsPromises.writeFile(`${path}copy of ${file}`, res, { encoding: 'utf8' })
          .then(() => console.log('DONE!'))));
  });

  it('can copy a file with a copy function', () => {
    
  });

  it('can transform a file with a transform function', () => {
    
  });

});
