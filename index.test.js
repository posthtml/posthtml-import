// ------------------------------------
// #POSTHTML - IMPORT - TEST
// ------------------------------------

'use strict'

const test = require('ava')
const plugin = require('./')

const { readFileSync } = require('fs')

function read (path) {
  return readFileSync(path, 'utf8')
}

test('Imports should result as expected', (t) => {
  require('posthtml')([ plugin() ])
    .process(read('test/fixtures/index.html'))
    .then((result) => {
      t.is(result.html, read('test/expect/index.html'))
    })
})
