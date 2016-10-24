var React = require('react');
var Reflux = require('reflux');

var ScrollLoader = require('./ScrollLoader.js');

var CardStore = require('./stores/CardStore.js');
var CardActions = require('./actions/CardActions.js');

var App = React.createClass({
  mixins: [Reflux.connect(CardStore, 'cards')],
  componentDidMount: function() {
    CardActions.load();
  },
  render: function() {
    return <div>
      {this.state.cards}
      <ScrollLoader loadAction={CardActions.loadMore} scrollThreshold={400} />
      {/*<Footer />*/}
    </div>;
  }
});

module.exports = App;
