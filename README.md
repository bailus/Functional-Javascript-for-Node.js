[![build status](https://secure.travis-ci.org/bailus/functional-node.png)](http://travis-ci.org/bailus/functional-node)
# functional-node
functional-node is a port of the Functional Javascript library.
 https://github.com/bailus/functional-node

Functional defines higher-order methods and functions for functional
and function-level programming.  It also defines "string lambdas",
that allow strings such as `x+1` and `x -> x+1` to be used in some
contexts as functions.

For more details, see 
 http://osteele.com/javascripts/functional

## Credits
 - Oliver Steele -- original author
 - Samuel Bailey <sam@bailey.geek.nz> -- node.js port
 - Dean Edwards -- Array.slice suggestion
 - henrah -- Function.lambda memoization
 - Raganwald -- Rhino compatibility
 - Jesse Hallett -- Spidermonkey shell compatibiilty
 
## Installation
to install npm (node package manager)
``` bash
$ curl http://npmjs.org/install.sh | sh
```
To download and install using npm:
``` bash
$ npm install functional-node
```

## Usage
load the Functional.* methods into the global namespace:
``` js
global.Functional = require('functional-node').load();
Functional.curry('a/b', 1)(2);
 → 0.5
```

or inject the Functional.* methods directly into the global namespace:
```js
require('functional-node').load().install();
curry('a/b', 1)(2);
 → 0.5
```

or load Functional without touching the global namespace:
```js
var Functional = require('functional-node').load();
Functional.curry('a/b', 1)(2);
 → 0.5
```

## License 

(The MIT License)

Copyright (c) 2006 Oliver Steele

Copyright (c) 2012 Samuel Bailey

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
