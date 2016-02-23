# eskape

html escaping as an es6 tagged template string in 1k min+gz.

## Installation
```
npm install --save eskape
```

## Usage

eskape escapes all of the interpolated values in the template string, but **assumes all literal content is safe**. This is often a good assumption when performing quick, one-off templating like so:

```js
var eskape = require('eskape');

var userinput = "<script>alert('gotcha')</script>";
document.body.innerHTML = eskape`
  <html>
    <body>
      Hello, ${userinput}
    </body>
  </html>`;
```

This will set the body's html content to the literal html content in the string, but will escape the `userinput` value.

## License
(c) 2016 Will Binns-Smith. Licensed MIT.
