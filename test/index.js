'use strict'

const { readFileSync, writeFileSync } = require('fs')

function read (path) {
  return readFileSync(path, 'utf8')
}

function write (path, result) {
  return writeFileSync(path, result)
}

const posthtml = require('posthtml')
const plugin = require('../')

posthtml([ plugin({root: './fixtures/imports'}) ])
  .process(read('./fixtures/index.html'))
  .then((result) => {
    write('./fixtures/index.result.html', result.html)
  })
