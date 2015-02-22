var React = require('react');
var Reflux = require('reflux');
var Card = require('../Card.js');
var CardActions = require('../actions/CardActions.js');
var CardDB = require('./CardDB.js');

module.exports = (function() {

  var CardStore = Reflux.createStore({
    listenables: [CardActions],
    getInitialState: function() {
      this.cards = [
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
      ];
      return this.cards;
    },
    init: function() {

    },
    onLoadMore: function(done) {
      window.setTimeout(function() {
        for (var i=0; i<4; i++) {
          this.cards.push(<Card>Card {~~(Math.random()*50)}</Card>);
        }
        this.trigger(this.cards);
        done();
      }.bind(this), 1000);
    }
  });

  return CardStore;

})();
