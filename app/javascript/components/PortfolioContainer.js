import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Axios from 'axios'
import axios from 'axios'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })

    axios.post('https://localhost:3000/search', {
      name: this.state.name
    })
    .then((data) => {
      debugger
    })
    .catch((data) => {
      debugger
    })
  }

  render() {
    return(
      <div>
        <Search handleChange={this.handleChange}/>
        <Calculate/>
      </div>
    )
  }
}

export default PortfolioContainer