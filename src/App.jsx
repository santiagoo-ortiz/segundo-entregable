import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cocktail from "./components/Cocktail"




function App() {


  const [ cocktailData, setCocktailData ] = useState( [] )

  const [ name, setName ] = useState(cocktailData.sort())

  useEffect (() => {

    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then( respuesta => {
      setCocktailData( respuesta.data.drinks )
    })
    .catch( error => console.error(error))

  }, [name]) 

  const searchCocktail = (e) => {
    e.preventDefault()

    setName( e.target[0].value.toLowerCase() )
  }

  return (
    <div className="App">

      <form onSubmit={ (e) => searchCocktail(e) } > 
       <input className='input'  type="text" placeholder='Introducir nombre' />
       <button type="submit">Buscar</button>
      </form>

      
      { cocktailData.map((cocktail, index) => 
      <Cocktail 
      key= {`drink-${index}`}
      data = { cocktail }
      /> )}
      
     
     
    </div>
  )
}

export default App
