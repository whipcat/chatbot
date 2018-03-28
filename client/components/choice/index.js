import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './style/choice.scss'

class Choice extends Component {
  static propTypes = {
    label: PropTypes.string,
    number: PropTypes.number
  }

  constructor (props) {
    super(props)
    this.state = ({
      class: 'choice--response',
      style: {}
    })
  }

  componentDidMount = () => {
    this.setStyle()

    setTimeout(() => {
      this.setState({
        class: 'choice--response slidein'
      })
    }, 1000)
  }

  setStyle = () => {
    const transitionDelay = this.getAnimationDelay()

    this.setState({
      style: {
        transitionDelay: `${transitionDelay}s`
      }
    })
  }

  getAnimationDelay = () => {
    const {number} = this.props

    let delay = 1
    let startDelay = 0.1

    if (number === 0) {
      return startDelay
    }

    return startDelay + (delay * number)
  }

  render () {
    const { label, number } = this.props

    return <div className='col-6'>
      <div key={number}
        className={`${this.state.class}`}
        style={this.state.style}
          >
        <span>
          {
              label
            }
        </span>
      </div>
    </div>
  }
}

export default Choice
