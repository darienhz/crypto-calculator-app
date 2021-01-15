import React, { Component } from 'react'

class PortfolioItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="header">Currency:</div>
            <div className="text">{this.props.item.currency.name}</div>
          </div>

          <div className="col">
            <div className="headher">Current Price:</div>
            <div className="text">${this.props.item.current_price}</div>
          </div>

          <div className="col">
            <div className="headher">Amount In Your Portfolio:</div>
            <div className="text">${this.props.item.amount}</div>
          </div>

          <div className="col">
            <div className="headher">Current Value:</div>
            <div className="text">${this.props.item.value}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem