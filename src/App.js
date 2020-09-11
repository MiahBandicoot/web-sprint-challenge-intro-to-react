import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  const [pdb,setpdb] = useState('')
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=20`)
    .then((res) =>{
      setpdb(res.data.results)
      console.log(res)
      
    })
  },[]
  )
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character data = {pdb}/>
    </div>
  );
}

export default App;