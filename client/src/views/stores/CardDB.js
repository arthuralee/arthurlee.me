import React from 'react';
import * as Card from '../Card';

const cardList = {
  'name': <Card.Name key="name" />,

  'blog': <Card.Icon key="blog" icon="fa-code">
    <p>Read posts about tech, travel and more on my <a href="/blog">blog &rarr;</a></p>
  </Card.Icon>,

  'job-pinterest': <Card.Icon key="job-pinterest" img="img/pinterest.png">
    <p>I work on <em>web infrastructure</em><br/> at <a href="http://www.pinterest.com/" target="_blank">Pinterest</a></p>
  </Card.Icon>,

  'cmu': <Card.ImageLeft key="cmu" img="img/cmu.png">
    <p>I studied <a href="http://hcii.cmu.edu/" target="_blank">HCI</a>, <a href="http://ece.cmu.edu/" target="_blank">ECE</a> and <a href="http://cs.cmu.edu/" target="_blank">CS</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.</p>
  </Card.ImageLeft>,

  'photography': <Card.ImageFull key="photography" img="img/photography.jpg">
    <h1>Natural Bridges State Beach, California</h1>
    <p>I love taking photos, especially of landscape.</p>
    <Card.ImageLink href="https://500px.com/arthuralee" target="_blank" text="Visit my 500px profile &rarr;" />
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
  getCard: function(key) {
    return cardList[key];
  },
  getDefaultOrdering: function() {
    //return ['photography'];
    return defaultOrdering;
  }
};
