var React = require('react');
var Card = require('../Card.js');

module.exports = (function() {
  var cardList = {
    'name': <Card.Name />,

    'job-pinterest': <Card.Icon img="img/pinterest.png">
      <p>I will be joining <a href="http://www.pinterest.com/" target="_blank">Pinterest</a> as a <em>Software Engineer</em> in 2015</p>
    </Card.Icon>,

    'cmu': <Card.Image img="img/cmu.png">
      <p>I study <a href="http://hcii.cmu.edu/" target="_blank">HCI</a>, <a href="http://ece.cmu.edu/" target="_blank">ECE</a> and <a href="http://cs.cmu.edu/" target="_blank">CS</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.</p>
    </Card.Image>,

    'job-zazzle': <Card.Icon img="img/zazzle.png">
      <p>I worked in the <em>UI Engineering</em> team at <a href="http://www.zazzle.com/" target="_blank">Zazzle</a> last summer</p>
    </Card.Icon>,

    'photography': <Card.Image>
      <p>I take photos!</p>
    </Card.Image>
  };

  var defaultOrdering = [
    'name',
    'job-pinterest',
    'cmu',
    'job-zazzle',
    'photography'
  ];

  var CardDB = {
    getCard: function(key) {
      return cardList[key];
    },
    getDefaultOrdering: function() {
      return defaultOrdering;
    }
  }

  return CardDB;

})();
