import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { mockComponent } from 'react-dom/test-utils';

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


  render() {

    const filteredPokemons = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.english.toLocaleLowerCase().includes(this.state.searchField)

    })

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Character'
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase()
            this.setState(() => {
              return { searchField }
            })
          }
          }
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
