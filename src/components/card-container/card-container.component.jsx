import { Component } from "react";
import './card-container.styles.css'

class CardContainer extends Component {
 

  render() {

    const { id, name, image } = this.props

    return (
      <div key={id} className='card-container'>
      <img className='card-image' alt={`pokemon ${name}`} src={image} width="150" height="150"/>
      <h2>{name}</h2>
    </div>
    )
  }
}

export default CardContainer
