const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/runtime-es5.js',
    './dist/runtime-es2015.js',
    './dist/polyfills-es5.js',
    './dist/polyfills-es2015.js',
    './dist/main-es5.js',
    './dist/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await fs.copyFile('./dist/index.html', 'elements/index.html')
  await concat(files, 'elements/modal.js');
  await fs.copyFile('./dist/styles.css', 'elements/styles.css')
  
})();