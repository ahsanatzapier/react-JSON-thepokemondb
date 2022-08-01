import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  // hooks
  const [searchField, setSearchField] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemon] = useState(pokemons)
  const [isLoading, setIsLoading] = useState(true);


  const handleLoading = () => {
    setIsLoading(false);
  }


  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])



  // setting up pokemons using side effect
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons))
  }, [])

  // only render again if pokemons array changes or the search field changes
  useEffect(() => {
    const newFilteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.english.toLocaleLowerCase().includes(searchField)
    })
    setFilteredPokemon(newFilteredPokemons)
  }, [pokemons, searchField])

  // functions
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (



    <div className='App'>

      {isLoading &&
        <div>
          
        </div>
      }

      {!isLoading &&
        <div>
          <h1>React PokeDex</h1>

          <SearchBox
            className='pokemon-search-box'
            placeholder='Search Pokemon'
            onSearchHandler={onSearchChange} />

          <CardList pokemons={filteredPokemons} />
        </div>
      }


    </div>

  )
}


export default App;
