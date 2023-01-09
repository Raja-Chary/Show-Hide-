// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="sub-container">
          <div className="name-container1">
            <button type="button" onClick={this.onClickFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Raja</p>}
          </div>
          <div className="name-container2">
            <button type="button" onClick={this.onClickLastName}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Chary</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
