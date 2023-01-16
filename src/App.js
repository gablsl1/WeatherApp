import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div class='container'>

        <form>
          <input type='text' placeholder='Cidade' />
          <button type='submit'>Pesquisar</button>
        </form>

      </div>
    )
  }
}

export default App;
