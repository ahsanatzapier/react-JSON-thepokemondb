import './card-container.styles.css'

const CardContainer = ({ id, name, image }) => (

  <div key={id} className='card-container'>
    <img className='card-image' alt={`pokemon ${name}`} src={image} width="150" height="150" />
    <h2>{name}</h2>
  </div>
)

export default CardContainer
