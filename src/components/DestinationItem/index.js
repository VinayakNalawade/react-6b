// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <li className="li">
        <img
          alt={destinationsList.name}
          src={destinationsList.imgUrl}
          className="img"
        />
        <p className="imgHeading">{destinationsList.name}</p>
      </li>
    )
  }
}
export default DestinationItem
