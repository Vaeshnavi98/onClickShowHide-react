import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isStatement1: false,
    isStatement2: false,
  }

  FirstName = () => {
    const {isStatement1} = this.state
    if (isStatement1) {
      this.setState({isStatement1: false})
    } else {
      this.setState({isStatement1: true})
    }
  }

  LastName = () => {
    const {isStatement2} = this.state
    if (isStatement2) {
      this.setState({isStatement2: false})
    } else {
      this.setState({isStatement2: true})
    }
  }

  render() {
    const {isStatement1} = this.state

    const {isStatement2} = this.state

    return (
      <div className="main-div">
        <h1>Show/Hide</h1>
        <div className="small-div">
          <div>
            <button
              type="button"
              className="button-deco"
              onClick={this.FirstName}
            >
              Show/Hide Firstname
            </button>
            {isStatement1 && <p className="para-div">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="button-deco"
              onClick={this.LastName}
            >
              Show/Hide Lastname
            </button>
            {isStatement2 && <p className="para-div">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
