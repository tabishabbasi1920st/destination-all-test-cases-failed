import './index.css'

const DestinationItem = props => {
  const {eachUser} = props
  const {id, name, imgUrl} = eachUser
  return (
    <li className="item-bg-container">
      <img src={imgUrl} alt={name} className="destination-image" id={id} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
