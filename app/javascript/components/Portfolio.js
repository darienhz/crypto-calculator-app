import React, { Component } from 'react'
import PortfolioItem from './Portfolio'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">Your Total Portfolio Value Is:</div>
          <div className="portfolio-value--content">TOTAL:</div>
        </div>
        <div className="portfolio-items">

        </div>
      </div>
    )
  }
}

export default Portfolio