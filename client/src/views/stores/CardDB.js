import React from 'react';
import * as Card from '../Card';

const withLoadOrder = (Subject, loadOrder) => {
  return (props) => <Subject {...props} loadOrder={loadOrder} />;
};

const cardList = {
  'name': ({loadOrder}) => <Card.Name loadOrder={loadOrder} />,

  'blog': ({loadOrder}) => <Card.Icon loadOrder={loadOrder} icon="fa-code">
    <p>Read posts about tech, travel and more on my <a href="/blog">blog &rarr;</a></p>
  </Card.Icon>,

  'job-pinterest': ({loadOrder}) => <Card.Icon loadOrder={loadOrder} img="img/pinterest.png">
    <p>I work on <em>web infrastructure</em><br/> at <a href="http://www.pinterest.com/" target="_blank">Pinterest</a></p>
  </Card.Icon>,

  'cmu': ({loadOrder}) => <Card.ImageLeft loadOrder={loadOrder} img="img/cmu.png">
    <p>I studied <a href="http://hcii.cmu.edu/" target="_blank">HCI</a>, <a href="http://ece.cmu.edu/" target="_blank">ECE</a> and <a href="http://cs.cmu.edu/" target="_blank">CS</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.</p>
  </Card.ImageLeft>,

  'photography': ({loadOrder}) => <Card.ImageFull loadOrder={loadOrder} img="img/photography.jpg">
    <h1>Natural Bridges State Beach, California</h1>
    <p>I love taking photos, especially of landscape.</p>
    <p><a href="https://500px.com/arthuralee" target="_blank">Visit my 500px profile &rarr;</a></p>
  </Card.ImageFull>
};

const defaultOrdering = [
  'name',
  'blog',
  'job-pinterest',
  'cmu',
  'photography'
];

export default {
  getCard: function(key, order) {
    return withLoadOrder(cardList[key], order);
  },
  getDefaultOrdering: function() {
    return defaultOrdering;
  }
};
