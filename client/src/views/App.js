import React, { Component } from 'react';
import CardStore from './stores/CardStore';
import ScrollLoader from './ScrollLoader';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.cardStore = new CardStore(this.onNewData);
  }
  onNewData = (cards) => {
    this.setState({ cards });
  }
  componentDidMount() {
    this.cardStore.fetchData();
  }
  render() {
    return <div>
      {this.state.cards}
      <ScrollLoader loadAction={this.cardStore.loadMore} scrollThreshold={400} />
      {/*<Footer />*/}
    </div>;
  }
}
