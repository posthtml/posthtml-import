// ------------------------------------
// #POSTHTML - IMPORT
// ------------------------------------

'use strict'

const { resolve } = require('path')
const { readFileSync } = require('fs')

const parse = require('posthtml-parser')

exports = module.exports = function (options) {
  options = options || {}
  options.root = options.root || __dirname
  options.encoding = options.encoding || 'utf8'

  function read (path) {
    return readFileSync(resolve(path), options.encoding)
  }

  function readdir (path) {
    return readFileSync(resolve(options.root, path), options.encoding)
  }

  return function PostHTMLImport (tree) {
    let space

    tree.match({tag: 'import'}, (node) => {
      if (node.attrs.src) {
        space = node.content[0]

        if (/[/]/.test(node.attrs.src)) {
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
          node = readdir(node.attrs.src)

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

    tree.match(/@import/, (node) => {
      space = node.split('@')[0]

      if (/[/]/.test(node)) {
        node = read(node.trim().split(' ')[1])

        node = node.split('\n')

        node.pop()

        node = node.map((el, i) => {
          if (node[i] === node[0]) {
            return '\n'.concat(space.split('\n')[1], el, '\n')
          }

          return space.split('\n')[1].concat('  ', el, '\n')
        })

        node.push(space.split('\n')[1])

        node = node.join('')

        node = parse(node)

        return node
      } else {
        node = readdir(node.trim().split(' ')[1])

        node = node.split('\n')

        node.pop()

        node = node.map((el, i) => {
          if (node[i] === node[0]) {
            return '\n'.concat(space.split('\n')[1], el, '\n')
          }

          return space.split('\n')[1].concat('  ', el, '\n')
        })

        node.push(space.split('\n')[1])

        node = node.join('')

        node = parse(node)
      }

      return node
    })

    return tree
  }
}
