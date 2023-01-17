import React, { useState } from 'react';
import Card from './components/Card'
import Api from './services/api'
import initialData from './helpers/initialData'

function App() {

  console.log(initialData)

  const [cidade, setCidade] = useState('')
  const [data, setData] = useState(initialData)

  const handleSubmit = (event) => {
    event.preventDefault()

    Api(cidade).then((res) => {
      setData(res)
    }) 
  }

  return (
    <div class='container'>

      <form onSubmit={ handleSubmit }>
        <input type='text' placeholder='Cidade' value={cidade} onChange={({ target: {value} }) => setCidade(value)}/>
        <button type='submit'>Pesquisar</button>
      </form>

      <Card data={data}/>
    </div>
  )  
}

export default App;