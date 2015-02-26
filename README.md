react-global
============

A simple React component for exposing global properties on your page. This library is particularly useful for isomorphic apps, where a set of values must be shared between the server and client (e.g. passing initialization variables to third-party libraries).

## Installation
```sh
npm install react-global
```
## Code Examples

### Setting Global Values

```js
var Global = require('react-global');

<Global values={{
  FOO: this.props.foo,
  BAR: this.props.bar
}} />

```

### Getting Global Values
```js
Global.get('FOO')
```

Note: every Global variable that you declare will actually be available on the window object as a true browser global.
```js
  Global.get('FOO') === window.FOO === window['FOO'] === FOO
    
```

## Use Case
This component is meant to ease the case where your isomorphic app's server has some configuration variable's that need to be shared with the browser that will never change over the course of the user's interaction with your app. Below you will find a reusable pattern for accomplishing this task cleanly and concisely using react-global.

server.js
```js
var React = require('React'),
  App = require('./views/App.jsx');

app.get('/', function(req, res) {
  var markup = React.renderToString(<App clientApiKey={config.client.api.key} />);
  res.send('<!DOCTYPE html>' + markup);
});

```

App.jsx
```js
var React = require('react'),
  Global = require('react-global');

var App = React.createClass({

  componentDidMount: function() {
    ClientLib.init(this.props.clientApiKey);    
  },

  render: function() {
    ...
      <Global values={{
        CLIENT_API_KEY: this.props.clientApiKey
      }} />
    ...
  }
});

// Mount the app if in the browser
if (window && document) {
  React.render(<App clientApiKey={Global.get('CLIENT_API_KEY')} />
}

```

A simple but useful pattern!

## Contributors

Implementation by Captivation Software (@teamcaptivation), overall design by Adam Nalisnick (@theadam4257)

By all means, if you see room for improvement, let us know!

## License

MIT License

