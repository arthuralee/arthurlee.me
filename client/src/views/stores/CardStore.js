import CardDB from './CardDB';

const NUMCARDS_PER_LOAD = 3;

export default class CardStore {
  constructor(trigger) {
    this.cards = [];
    this.currentCard = 0;
    this.trigger = trigger;
  }
  fetchData() {
    this.ordering = CardDB.getDefaultOrdering();
    this.prepareCards(this.cards, this.currentCard, NUMCARDS_PER_LOAD);
    this.trigger(this.cards);
  }
  loadMore = (done) => {
    window.setTimeout(function() {
      var didRunOutOfCards = this.prepareCards(this.cards, this.currentCard, NUMCARDS_PER_LOAD);
      this.trigger(this.cards);
      done(didRunOutOfCards);
    }.bind(this), 200);
  }
  prepareCards(cards, index, length) {
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
}
