import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searchInputOnChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const getSearchedFilteredList = () => {
      const filteredList = destinationsList.filter(eachObject =>
        eachObject.name.toLowerCase().includes(searchInput.toLowerCase()),
      )
      return filteredList
    }

    return (
      <div className="main-bg-container">
        <h1 className="destination-search-heading">Destination Search</h1>
        <div className="search-and-lens-image-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={this.searchInputOnChange}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destination-container">
          {getSearchedFilteredList().map(eachObject => (
            <DestinationItem key={eachObject.id} eachUser={eachObject} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
