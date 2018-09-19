const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/sg-ng-element/polyfills.js',
    './dist/sg-ng-element/main.js',
    './dist/sg-ng-element/scripts.js',
    './dist/sg-ng-element/runtime.js'
  ]

  await fs.ensureDir('sgnewsmlettre')

  await concat(files, 'sgnewsmlettre/ng-newslettre-element.js')
  console.info('Angular Elements created successfully!')

})()
