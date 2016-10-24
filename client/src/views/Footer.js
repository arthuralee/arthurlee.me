var React = require('react');

module.exports = (function() {
  var Footer = React.createClass({
    render: function() {
      return <div style={this.style}>
        <p>Copyright &copy; {(new Date()).getFullYear()} Arthur Lee. All Rights Reserved.</p>
      </div>;
    },
    style: {
      height: 90,
      padding: 5,
      color: '#bbb',
      fontWeight: 100,
      fontSize: 13,
      textAlign: 'center'
    }
  });

  return Footer;

})();
