const fsPromises = require('fs').promises;
const { writeFile, readFile, copy, exists } = require('./lib/fs');

// writeFile('./files/secondFile.txt', 'this is a test function for write');
// readFile('./files/secondFile.txt');

copy('./files/secondFile.txt', './files/thirdFile.txt');
exists('./files/secondFile.txt');
exists('./files/secondFile2.txt');
