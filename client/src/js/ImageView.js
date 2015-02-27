var React = require('react');

module.exports = (function() {
  var ImageView = React.createClass({
    getInitialState: function() {
      return {
        imageLoaded: false
      }
    },
    componentWillMount: function() {
      // preload image
      var img = new Image();
      img.onload = function() {
        // update state when done
        this.setState({imageLoaded: true});
      }.bind(this);
      img.src = this.props.src;
    },
    render: function() {
      var style = {};
      Object.assign(style, this._style, this.props.style); // Inherit prop styles

      if (this.state.imageLoaded) {
        style.opacity = 1;
        style.backgroundImage = `url(${this.props.src})`;
      }
      return <div style={style} ref="image"></div>;
    },
    _style: {
      transition: '0.5s opacity',
      opacity: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  });

  return ImageView;

})();
