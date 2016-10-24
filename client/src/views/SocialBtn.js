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
        color: this.state.mouseIn ? '#777' : '#aaa',
        transition: 'border-color, color 0.2s',
        border: '1px solid #e8e8e8',
        borderColor: this.state.mouseIn ? '#aaa' : '#e8e8e8',
        borderRadius: '50%',
        margin: '0 4px',
        fontSize: '23px',
        width: '45px',
        height: '45px',
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
