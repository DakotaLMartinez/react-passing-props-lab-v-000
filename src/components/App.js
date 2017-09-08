import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruit: [],
      filters: [], 
      currentFilter: null
    };
  }

  componentDidMount() {
    this.getFruitTypes();
    this.getFruit();
  }

  getFruitTypes() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  getFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilterCallback(event) {
    this.setState({
      currentFilter: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <FruitBasket
          fruit={this.state.fruit}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}  
          updateFilterCallback={this.updateFilterCallback.bind(this)}
        />
      </div>
    );
  }
}



export default App;
