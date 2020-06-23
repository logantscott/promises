const fs = require('fs/promises');

// write file, prompt overwrite if exists
const writeFile = async(dst, data) => {
  return await fs.writeFile(dst, data, { flag: 'wx' });
};

// read file
const readFile = async(path) => {
  return await fs.readFile(path, { encoding: 'utf8' });
};

// copy a file
const copy = async(src, dst) => {
  const fileToCopy = await readFile(src);
  return await writeFile(dst, fileToCopy);
};

// check if file exists
const exists = async(path) => {
  return await fs.stat(path);
};

// delete file
const deleteFile = async(path) => {
  return await fs.unlink(path);
};

const transform = async(path) => {
  let fileContents = await readFile(path);
  fileContents = fileContents.replace(/[A-Z]/g, '');
  fileContents = fileContents.toLocaleUpperCase();
  fileContents = fileContents.split('').reverse().join('');
  return fileContents;
};

module.exports = {
  writeFile,
  readFile,
  copy,
  exists,
  deleteFile,
  transform
};
