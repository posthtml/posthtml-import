// ------------------------------------
// #POSTHTML - IMPORT - TEST
// ------------------------------------

'use strict'

const test = require('ava')

const { join } = require('path')
const { readFileSync } = require('fs')

const fixtures = (file) => readFileSync(join(__dirname, 'fixtures', file), 'utf8')
const expected = (file) => readFileSync(join(__dirname, 'expected', file), 'utf8')

const posthtml = require('posthtml')
const plugin = require('..')

test('Imports should result as expected', (t) => {
  posthtml([ plugin({root: './fixtures/imports'}) ])
    .process(fixtures('./fixtures/index.html'))
    .then((result) => {
      t.is(expected('./expect/index.html'), result.html)
    })
})
