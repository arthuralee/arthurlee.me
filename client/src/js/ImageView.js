var React = require('react');

module.exports = (function() {
  var ImageView = React.createClass({
    getInitialState: function() {
      return {
        imageLoaded: false
      }
    },
    componentWillMount: function() {
      // Inherit props
      for (prop in this.props.style) {
        this.style[prop] = this.props.style[prop];
      }

      // preload image
      var img = new Image();
      img.onload = function() {
        // update state when done
        this.setState({imageLoaded: true});
      }.bind(this);
      img.src = this.props.src;
    },
    render: function() {
      if (this.state.imageLoaded) {
        this.style.opacity = 1;
        this.style.backgroundImage = `url(${this.props.src})`;
      }
      return <div style={this.style} ref="image"></div>;
    },
    style: {
      transition: '0.5s opacity',
      opacity: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  });

  return ImageView;

})();
