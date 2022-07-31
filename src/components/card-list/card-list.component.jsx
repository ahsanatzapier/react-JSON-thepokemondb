import { Component } from "react";

class CardList extends Component {

  render() {

    const { pokemons } = this.props

    return (
         <div>
      {pokemons.map(pokemon => (
          <h1 key={pokemon.id}>{pokemon.name.english}</h1>
        ))}
        </div>
    )
  }
}

export default CardList