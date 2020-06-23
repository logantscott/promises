const fsPromises = require('fs').promises;
const path = './files/';
const file = 'newFile.txt';
const { copy, exists, deleteFile, transform } = require('./fileFunctions');

describe('all of the things', () => {
  
  // https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options
  // https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options

  it('can write and read a file', () => {
    return fsPromises.writeFile(`${path}newFile.txt`, 'thIs Is sOmE tExt In my nEw fIlE')
      .then(() => console.log('DONE!'))
      .then(() => fsPromises.readFile(`${path}newFile.txt`, { encoding: 'utf8' }))
      .then(res => expect(res).toEqual('thIs Is sOmE tExt In my nEw fIlE'));
  });

  // it('can copy a file', () => {
  //   return fsPromises.writeFile(`${path}${file}`, 'thIs Is sOmE tExt In my nEw fIlE', { encoding: 'utf8' })
  //     .then(() => fsPromises.readFile(`${path}${file}`, { encoding: 'utf8' }))
  //     .then(res => fsPromises.writeFile(`${path}copy of ${file}`, res, { encoding: 'utf8' }))
  //     .then(() => console.log('DONE!'));
  // });

  it('can copy a file with a copy function', () => {
    deleteFile(`${path}copy of ${file}`);
    return copy(`${path}${file}`, `${path}copy of ${file}`)
      .then(() => fsPromises.readFile(`${path}copy of ${file}`, { encoding: 'utf8' }))
      .then(res => expect(res).toEqual('thIs Is sOmE tExt In my nEw fIlE'));
  });

  it('can transform a file with a transform function', () => {
    return transform(`${path}${file}`)
      .then(res => expect(res).toEqual('LF WN YM N TXT MS S SHT'));
  });

});
