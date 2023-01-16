import React, { Component } from 'react';
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div class='container'>

        <form>
          <input type='text' placeholder='Cidade' />
          <button type='submit'>Pesquisar</button>
        </form>

        <Card />
      </div>
    )
  }
}

export default App;
