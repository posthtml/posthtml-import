[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Import Plugin</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-import
```

<h2 align="center">Usage</h2>

## Options

**root:** Set base directory, defaults to ```__dirname ```

**encoding:** Set file encoding, defaults to ``` utf8 ```

```html
<import src="file.html">
```

```html
<!DOCTYPE html>
<html>
  <head>
    <import src="file.html">
  </head>
  <body>
    <import src="/path/to/file.html">
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

<h2 align="center">Example</h2>

```js
const { readFileSync } = require('fs')

const posthtml = require('posthtml')
const imports  = require('posthtml-import')

const html = readFileSync('./index.html', 'utf8')

posthtml([ imports({root: './path/to/imports'}) ])
  .process(html)
  .then((result) => console.log(result.html))
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
      <import src="nav.html">
    </nav>
    <header>
      <import src="header.html">
    </header>
    <main>
      <import src="main.html">
    </main>
    <footer>
      <import src="footer.html">
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

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) PostHTML Michael Ciniawsky <michael.ciniawsky@gmail.com>

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

[deps]: https://david-dm.org/posthtml/posthtml-import.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-import

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-import.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-import

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-import/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-import?branch=master
