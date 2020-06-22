const fsPromises = require('fs').promises;

describe('read file', () => {
  
  // https://nodejs.org/api/fs.html#fs_fspromises_writefile_file_data_options
  // https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options
  it('can write and read a file', () => {
    return fsPromises.writeFile('./newFile.txt', 'this is some text in my new file', { encoding: 'utf8' })
      .then(() => console.log('DONE!'))
      .then(() => fsPromises.readFile('./newFile.txt', { encoding: 'utf8' })
        .then(res => expect(res).toEqual('this is some text in my new file')));
  });

  it('can copy a file', () => {
    
  });

  it('can copy a file with a copy function', () => {
    
  });

  it('can transform a file with a transform function', () => {
    
  });

});
