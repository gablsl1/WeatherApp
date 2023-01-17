import React, { useState } from 'react';
import Card from './components/Card'
import Api from './services/api'

function App() {

  const [cidade, setCidade] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    Api(cidade).then((res) => {
      console.log(res)
    }) 
  }

  return (
    <div class='container'>

      <form onSubmit={ handleSubmit }>
        <input type='text' placeholder='Cidade' value={cidade} onChange={({ target: {value} }) => setCidade(value)}/>
        <button type='submit'>Pesquisar</button>
      </form>

      <Card />
    </div>
  )  
}

export default App;
