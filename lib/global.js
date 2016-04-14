var React = require('react');

var Global = React.createClass({
  statics: {
    get: function(name) {
      if(typeof global !== 'undefined') {
    	  return global[name];
      } else if(typeof window !== 'undefined') {
          return window[name]  
      } else {
          return null;
      }
    }
  },

  shouldComponentUpdate: function() {
    return false;
  },

  getScript: function() {
    var script = '';
    for (var key in this.props.values || {}) {
      script += 'var ' + key + '=' + JSON.stringify(this.props.values[key]) + ';';
    }
    return script;
  },

  render: function() {
    return React.createElement("script", {
      type: "text/javascript",
      dangerouslySetInnerHTML: {
        __html: this.getScript()
      }
    });
  }
});

module.exports = Global;
