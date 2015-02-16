const STATE_LOADED = 0;
const STATE_LOADING = 1;

var React = require('react');

module.exports = (function() {

    var ScrollLoader = React.createClass({
      getDefaultProps: function() {
        return {
          scrollThreshold: 100
        }
      },
      getInitialState: function() {
        return {
          state: STATE_LOADED
        }
      },
      componentDidMount: function() {
        this.addListener();
      },
      componentWillUnmount: function() {
        this.removeListener();
      },
      render: function() {
        var divStyle = {
          textAlign: 'center'
        }
        if (this.state.state === STATE_LOADED) {
          divStyle.transform = 'scale(0)';
        } else {
          divStyle.WebkitAnimation = 'bounceIn 0.5s linear';
          divStyle.MozAnimation = 'bounceIn 0.5s linear';
        }
        return <div style={divStyle}><i style={this.style.loader} className={'fa fa-2x fa-circle-o-notch fa-spin'}></i></div>;
      },
      addListener: function() {
        window.addEventListener('scroll', this.listener);
        window.addEventListener('resize', this.listener);
      },
      removeListener: function() {
        window.removeEventListener('scroll', this.listener);
        window.removeEventListener('resize', this.listener);
      },
      listener: function() {
        var scrollPos = document.body.scrollTop;
        var height = window.innerHeight;
        var pageHeight = document.body.offsetHeight;

        if ((height + scrollPos + this.props.scrollThreshold) >= pageHeight) {
          this.props.loadAction(this.resetState);
          this.setState({state: STATE_LOADING});
          this.removeListener();
        }
      },
      resetState: function() {
        this.setState({state: STATE_LOADED});
        this.addListener();
      },
      style: {
        loader: {
          transition: 'transform 0.5s',
          transform: 'scale(1)',
          color: '#bbb'
        }
      }
    });

    return ScrollLoader;

})();
