// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      pokemons: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
      .then(response => response.json())
      .then(pokemons => this.setState(() => {
        return { pokemons }
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {

    const { pokemons, searchField } = this.state
    const { onSearchChange } = this

    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.english.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Character'
          onChange={onSearchChange}
        />

        {filteredPokemons.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <h1>{pokemon.name.english}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
