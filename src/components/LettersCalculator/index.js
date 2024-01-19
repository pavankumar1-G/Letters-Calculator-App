// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputText = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="letters-calucltor-app-bg-container">
        <div className="letters-calucltor-app-actual-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-label-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="input-text"
                type="text"
                id="phraseText"
                onChange={this.onChangeInputText}
                value={inputPhrase}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="letters-length">
              No.of letters: {inputPhrase.length}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
