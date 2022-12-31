// Write your code here
import './index.css'

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  changeinput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {search} = this.state

    const renderlist = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="inputContainer">
          <input
            type="search"
            className="input"
            value={search}
            onChange={this.changeinput}
            placeholder="Search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>
        <ul className="searchContainer">
          {renderlist.map(each => (
            <DestinationItem destinationsList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
