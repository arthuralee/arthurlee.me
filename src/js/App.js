var React = require('react');
var Card = require('./Card.js');
var ScrollLoader = require('./ScrollLoader.js');
var Footer = require('./Footer.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      cards: [
        <Card.Name key="0" loadOrder={0}/>,
        <Card.Icon img="img/pinterest.png" key="1" loadOrder={1}>
          <p>I will be joining <a href="http://www.pinterest.com/" target="_blank">Pinterest</a> as a <em>Software Engineer</em> in 2015</p>
        </Card.Icon>,
        <Card.Image img="img/cmu.png" key="2" loadOrder={2}>
          <p>I study <a href="http://hcii.cmu.edu/" target="_blank">HCI</a>, <a href="http://ece.cmu.edu/" target="_blank">ECE</a> and <a href="http://cs.cmu.edu/" target="_blank">CS</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.</p>
        </Card.Image>,
        <Card.Icon img="img/zazzle.png" key="3" loadOrder={3}>
          <p>I worked in the <em>UI Engineering</em> team at <a href="http://www.zazzle.com/" target="_blank">Zazzle</a> last summer</p>
        </Card.Icon>
      ]
    };
  },
  render: function() {
    return <div>
      {this.state.cards}
      <ScrollLoader loadAction={this.loadMoreCards} />
      <Footer />
    </div>;
  },
  loadMoreCards: function(cb) {
    window.setTimeout(function() {
      var newCards = this.state.cards;
      newCards = newCards.concat([
        <Card />, <Card />, <Card />, <Card />
      ]);
      this.setState({cards: newCards});
      cb();
    }.bind(this), 1000);
  }
});

React.render(<App />, document.querySelector('#main'));
