var React = require('react');
var Card = require('./Card.js');
var ScrollLoader = require('./ScrollLoader.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      currentCard: -1,
      cards: [
        <Card.Name key="0" num="0" cardClicked={this.cardClicked} />,
        <Card.Icon img="img/pinterest.png" key="1" num="1" cardClicked={this.cardClicked}>
          <p>I will be joining <a href="http://www.pinterest.com/" target="_blank">Pinterest</a> as a <em>Software Engineer</em> in 2015</p>
        </Card.Icon>,
        <Card.Image img="img/cmu.png" key="2" num="2" cardClicked={this.cardClicked}>
          <p>I study <a href="http://hcii.cmu.edu/" target="_blank">HCI</a>, <a href="http://ece.cmu.edu/" target="_blank">ECE</a> and <a href="http://cs.cmu.edu/" target="_blank">CS</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.</p>
        </Card.Image>,
        <Card.Icon img="img/zazzle.png" key="3" num="3" cardClicked={this.cardClicked}>
          <p>I worked in the <em>UI Engineering</em> team at <a href="http://www.zazzle.com/" target="_blank">Zazzle</a> last summer</p>
        </Card.Icon>
      ]
    };
  },
  cardClicked: function(i) {
    console.log(i);
    this.setState({
      currentCard: i
    })
  },
  render: function() {
    return <div>
      {this.state.cards}
      <ScrollLoader loadAction={this.loadMoreCards} />
      <div className="footer">
        <p>Copyright &copy; {(new Date()).getFullYear()} Arthur Lee. All Rights Reserved.</p>
      </div>
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
    }.bind(this), 2000);
  }
});

React.render(<App />, document.querySelector('#main'));
