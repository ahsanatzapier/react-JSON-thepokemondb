import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <p><img src="https://fontmeme.com/permalink/220801/cd6adc6038b8d745ebf5e778582bbcf4.png" alt="pokemon-font" width="600" height="104"/></p>
        <SearchBox
          className='pokemon-search-box'
          placeholder='Search Pokemon'
          onSearchHandler={onSearchChange} />
        <CardList pokemons={filteredPokemons} />
      </div>
    )
  }
}

export default App;
