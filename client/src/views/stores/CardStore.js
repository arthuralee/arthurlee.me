var Reflux = require('reflux');
var CardActions = require('../actions/CardActions.js');
var CardDB = require('./CardDB.js');

const NUMCARDS_PER_LOAD = 3;

module.exports = (function() {

  var CardStore = Reflux.createStore({
    listenables: [CardActions],
    getInitialState: function() {
      this.cards = [];
      return this.cards;
    },
    init: function() {
      this.currentCard = 0;
      this.listenTo(CardActions.load, this.fetchData);
    },
    fetchData: function() {
      this.ordering = CardDB.getDefaultOrdering();
      this.prepareCards(this.cards, this.currentCard, NUMCARDS_PER_LOAD);
      this.trigger(this.cards);
    },
    onLoadMore: function(done) {
      window.setTimeout(function() {
        var didRunOutOfCards = this.prepareCards(this.cards, this.currentCard, NUMCARDS_PER_LOAD);
        this.trigger(this.cards);
        done(didRunOutOfCards);
      }.bind(this), 200);
    },
    prepareCards: function(cards, index, length) {
      var didRunOut = true;
      for (var i=index; i<index+length; i++) {
        var key = this.ordering[i];
        if(key) {
          var nextCard = CardDB.getCard(key);
          cards.push(nextCard);
          this.currentCard++;

          didRunOut = false;
        }
      }
      return didRunOut;
    }
  });

  return CardStore;

})();
