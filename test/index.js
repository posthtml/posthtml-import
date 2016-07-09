// ------------------------------------
// #POSTHTML - IMPORT - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const { join } = require('path')
const { readFileSync } = require('fs')

const fixtures = (file) => readFileSync(join(__dirname, 'fixtures', file), 'utf8')
const expected = (file) => readFileSync(join(__dirname, 'expects', file), 'utf8')

const posthtml = require('posthtml')
const plugin = require('..')

test('imports should work as expected', (t) => {
  posthtml([ plugin({root: 'fixtures/imports'}) ])
    .process(fixtures('index.html'))
    .then((result) => {
      console.log(result.html)
      t.is(expected('index.html'), result.html)
    })
})
