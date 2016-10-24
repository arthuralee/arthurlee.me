import React, { Component } from 'react';
import './ScrollLoader.css';

const STATE_LOADED = 0;
const STATE_LOADING = 1;
const STATE_RANOUT = 2;

const styles = {
  loader: {
    color: '#bbb'
  },
  container: {
    transition: 'transform 0.5s',
    textAlign: 'center'
  }
};

export default class ScrollLoader extends Component {
  defaultProps = {
    scrollThreshold: 100
  }

  constructor(props) {
    super(props);
    this.state = {
      state: STATE_LOADED
    };
  }
  componentDidMount() {
    this.addListener();
  }
  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    const divStyle = {};
    if (this.state.state === STATE_LOADING) {
      divStyle.WebkitAnimation = 'bounceIn 0.5s linear';
      divStyle.MozAnimation = 'bounceIn 0.5s linear';
    } else {
      divStyle.transform = 'scale(0)';
    }
    return (
      <div style={{...styles.container, ...divStyle}}>
        <i style={styles.loader} className={'fa fa-2x fa-circle-o-notch fa-spin'} />
      </div>
    );
  }
  addListener() {
    window.addEventListener('scroll', this.listener);
    window.addEventListener('resize', this.listener);
  }
  removeListener() {
    window.removeEventListener('scroll', this.listener);
    window.removeEventListener('resize', this.listener);
  }
  listener = () => {
    const scrollPos = document.body.scrollTop;
    const height = window.innerHeight;
    const pageHeight = document.body.offsetHeight;

    if ((height + scrollPos + this.props.scrollThreshold) >= pageHeight) {
      this.props.loadAction(this.resetState);
      this.setState({state: STATE_LOADING});
      this.removeListener();
    }
  }
  resetState = (didRunOutOfItems) => {
    if (didRunOutOfItems) {
      this.setState({state: STATE_RANOUT})
    } else {
      this.setState({state: STATE_LOADED});
      this.addListener();
    }
  }
}
