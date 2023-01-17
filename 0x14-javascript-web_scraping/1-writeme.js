#!/usr/bin/node

let filename = process.argv[2];
let content = process.argv[3];
const fs = require('fs');

fs.writeFile(filename, content, 'utf-8', (error) => {
  if (error) {
    console.log(error);
  }
});
