[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]

# PostHTML Import <img align="right" width="200" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
$ npm i -D posthtml-import
```

## Status

| Branch               | Build                     | Coverage                 |
|:--------------------:|:-------------------------:|:------------------------:|
|  Master              | ![travis]                 | ![cover]                 |
|  Develop             | ![travis-dev]             | ![cover-dev]             |

## Usage

Use the import tag
```html
<import src="file.html">
```
or @-rule syntax
```css
@import file.html
```
```html
<!DOCTYPE html>
<html>
  <head>
    <import src="file.html">
  </head>
  <body>
    <import src="./path/to/file.html">
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    @import file.html
  </head>
  <body>
    @import ./path/to/file.html
  </body>
</html>
```

Note that it's necessary to declare the import on its own line for whitespace
detection and there could be only one import statement per tag.


```html
<!-- Do -->
<div>
  <import src="file.html">
</div>

<!-- Don't -->
<div><import src="./path/to/file.html"></div>
```

```html
<!-- Do -->
<header>
  <import src="file.html">
</header>
<main>
  <import src="file2.html">
</main>

<!-- Don't -->
<div>
  <import src="file.html">
  <import src="file2.html">
</div>
```

## Options

**root:** Set base directory, defaults to ```__dirname ```

**encoding:** Set file encoding, defaults to ``` utf8 ```

## Example
```js
'use strict'

const posthtml = require('posthtml')

const imports  = require('posthtml-import')

const index = require('fs').readFileSync('./index.html', 'utf8')

posthtml([ imports({root: './your/html/imports'}) ])
  .process(index)
  .then((result) => require('fs').writeFileSync('./result.html', result.html))
```
**index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Import</title>
  </head>
  <body>
    <nav>
      @import nav.html
    </nav>
    <header>
      <import src="header.html">
    </header>
    <main>
      <import src="main.html">
    </main>
    <footer>
     @import footer.html
    </footer>
  </body>
</html>
```
**nav.html**
```html
<ul class="nav">
  <li class="nav__link">
    <a href="#">Home</a>
  </li>
  <li class="nav__link">
    <a href="#">About</a>
  </li>
  <li class="nav__link">
    <a href="#">Contact</a>
  </li>
</ul>
```
**header.html**
```html
<h1>Hello World</h1>
```
**main.html**
```html
<section class="intro">...</section>
<section class="about">...</section>
<section class="outro">...</section>
```
**footer.html**
```html
<div class="col-md-3">...</div>
<div class="col-md-3">...</div>
<div class="col-md-3">...</div>
```
**result.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PostHTML Import</title>
  </head>
  <body>
    <nav>
      <ul class="nav">
        <li class="nav__link">
          <a href="#">Home</a>
        </li>
        <li class="nav__link">
          <a href="#">About</a>
        </li>
        <li class="nav__link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <header>
      <h1>Hello World</h1>
    </header>
    <main>
      <section class="intro">...</section>
      <section class="about">...</section>
      <section class="outro">...</section>
    </main>
    <footer>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
    </footer>
  </body>
</html>
```
## LICENSE [![MIT][license]][license-url]

> MIT License (MIT)

>Copyright (c) Michael Ciniawsky

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-import.svg
[npm-url]: https://npmjs.com/package/posthtml-import

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/posthtml-import.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-import

[devdeps]: https://david-dm.org/posthtml/posthtml-import/dev-status.svg
[devdeps-url]: https://david-dm.org/posthtml/posthtml-import#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-import.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-import

[travis-rel]: http://img.shields.io/travis/posthtml/posthtml-import.svg?branch=release/1.0.0
[travis-rel-url]:https://travis-ci.org/posthtml/posthtml-import?branch=release/1.0.0

[travis-dev]: http://img.shields.io/travis/posthtml/posthtml-import.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/posthtml/posthtml-import?branch=develop

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-import/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-import?branch=master

[cover-rel]: https://coveralls.io/repos/github/posthtml/posthtml-import/badge.svg?branch=release<ver>
[cover-rel-url]: https://coveralls.io/github/posthtml/posthtml-import?branch=release<ver>

[cover-dev]: https://coveralls.io/repos/github/posthtml/posthtml-import/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/posthtml/posthtml-import?branch=develop

[license]: https://img.shields.io/github/license/posthtml/posthtml-import.svg
[license-url]: https://raw.githubusercontent.com/posthtml/posthtml-import/master/LICENSE
