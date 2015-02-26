react-global
============

A simple React component for exposing global properties on your page. This library is particularly useful for isomorphic apps, where a set of values must be shared between the server and client (e.g. passing initialization variables to third-party libraries).

## Installation
```sh
npm install react-global
```

## Code Example

App.jsx
```js
var React = require('react'),
  Global = require('react-global');

var Global = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          ...
          <Global values={{
            FOO: this.props.foo,
            BAR: this.props.bar
          }} />
        </head>
        <body>
          ...
        </body>
      </html>
    );
  },
});

```

## Contributors

Captivation Software (@teamcaptivation), inspired by @theadam

By all means, if you see room for improvement, let us know!

## License

MIT License

