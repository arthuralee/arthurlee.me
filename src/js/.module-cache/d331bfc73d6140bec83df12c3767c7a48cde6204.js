(function() {

  var App = React.createClass({displayName: "App",
    render: function() {
      return 'hi';
    }
  });

  React.render(React.createElement(App, null), document.querySelector('#main'));

})();
