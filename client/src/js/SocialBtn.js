var React = require('react');

module.exports = (function() {
  var SocialBtn = React.createClass({
    getInitialState: function() {
      return {
        mouseIn: false
      }
    },
    render: function() {
      var linkStyle = {
        display: 'inline-block',
        color: '#aaa',
        transition: 'background-color 0.2s',
        backgroundColor: this.state.mouseIn ? '#e4e4e4' : '#eee',
        border: '1px solid #e8e8e8',
        borderRadius: '50%',
        margin: '0 2px',
        fontSize: '28px',
        width: '55px',
        height: '55px',
        textDecoration: 'none'
      }

      return <a href={this.props.href} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} target="_blank">
        <span style={linkStyle}>
          <i style={this.style.span} className={`fa ${this.props.icon}`}></i>
        </span>
      </a>;
    },
    mouseOver: function() {
      this.setState({mouseIn: true});
    },
    mouseOut: function() {
      this.setState({mouseIn: false});
    },
    style: {
      span: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  });

  return SocialBtn;

})();
