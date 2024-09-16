import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import Header from './components/header'

const App = () => {
  const [pdb,setpdb] = useState([])
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=151&limit=20`)
    .then((res) => {
      setpdb(res.data.results)
      console.log(res.data.results)
      console.log(pdb)
    })
  },[]
  )
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const newArray = [...pdb]
  console.log(newArray)
  return (
    
    <div className="App">
      <h1 className="Header">Characters</h1>
      {newArray.map(eachPoke => {
        return(
          <Character data = {eachPoke}/>
        )
      })
    }
      
    </div>
  );
}

export default App;
