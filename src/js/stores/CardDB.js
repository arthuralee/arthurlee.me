var React = require('react');

module.exports = (function() {

  var cards = [
    <Card.Name loadOrder={0}/>,

    <Card.Icon img="img/pinterest.png" loadOrder={1}>
      <p>I will be joining <a href="http://www.pinterest.com/" target="_blank">Pinterest</a> as a <em>Software Engineer</em> in 2015</p>
    </Card.Icon>,

    <Card.Image img="img/cmu.png" loadOrder={2}>
      <p>I study <a href="http://hcii.cmu.edu/" target="_blank">HCI</a>, <a href="http://ece.cmu.edu/" target="_blank">ECE</a> and <a href="http://cs.cmu.edu/" target="_blank">CS</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.</p>
    </Card.Image>,

    <Card.Icon img="img/zazzle.png" loadOrder={3}>
      <p>I worked in the <em>UI Engineering</em> team at <a href="http://www.zazzle.com/" target="_blank">Zazzle</a> last summer</p>
    </Card.Icon>
  ];

  var CardDB = {
    getCards: function(index, length) {

    }
  }

  return CardDB;

})();
