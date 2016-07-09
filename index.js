// ------------------------------------
// #POSTHTML - IMPORT
// ------------------------------------

'use strict'

const { join } = require('path')
const { readFileSync } = require('fs')

const parse = require('posthtml-parser')

exports = module.exports = function (options) {
  options = options || {}
  options.root = options.root || __dirname
  options.encoding = options.encoding || 'utf8'

  function read (path) {
    return readFileSync(join(process.cwd(), options.root, path), options.encoding)
  }

  return function postHTMLImport (tree) {
    let space

    tree.match({tag: 'import'}, (node) => {
      if (node.attrs.src) {
        space = node.content[0]

        if (node.attrs.src) {
          node = read(node.attrs.src)

          node = node.split('\n')

          node.pop()

          node = node.map((el, i) => {
            if (node[i] === node[0]) {
              return el.concat('\n')
            }

            return space.split('\n')[1].concat('  ', el, '\n')
          })
          node.push(space.split('\n')[1])

          node = node.join('')

          node = parse(node)

          return node
        } else {
          node = read(node.attrs.src)

          node = node.split('\n')

          node.pop()

          node = node.map((el, i) => {
            if (node[i] === node[0]) {
              return el.concat('\n')
            }

            return space.split('\n')[1].concat('  ', el, '\n')
          })
          node.push(space.split('\n')[1])

          node = node.join('')

          node = parse(node)
        }
      }

      return node
    })

    return tree
  }
}
