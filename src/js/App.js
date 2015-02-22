var React = require('react');
var Reflux = require('reflux');

var Card = require('./Card.js');
var ScrollLoader = require('./ScrollLoader.js');
var Footer = require('./Footer.js');

var CardStore = require('./stores/CardStore.js');
var CardActions = require('./actions/CardActions.js');

var App = React.createClass({
  mixins: [Reflux.connect(CardStore, 'cards')],
  render: function() {
    return <div>
      {this.state.cards}
      <ScrollLoader loadAction={CardActions.loadMore} scrollThreshold={400} />
      <Footer />
    </div>;
  }
});

React.render(<App />, document.querySelector('#main'));
