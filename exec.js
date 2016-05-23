'use strict'

const { readFileSync, writeFile } = require('fs')

function read (path, file) {
  return readFileSync(path, 'utf8')
}

function write (path, file) {
  return writeFile(path, file, 'utf8', (err, data) => {
    if (err) throw err
    return data
  })
}

const posthtml = require('posthtml')
const plugin = require('./')

posthtml([ plugin({root: './test/fixtures/imports'}) ])
  .process(read('./test/fixtures/index.html'))
  .then((result) => {
    console.log(result.tree)
    console.log(result.html)
    write('./test/results/index.html', result.html)
  })
