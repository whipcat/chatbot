import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './style/messages.scss'

class Message extends Component {
  static propTypes = {
    message: PropTypes.string,
    number: PropTypes.number
  }

  constructor (props) {
    super(props)
    this.state = ({
      class: 'bubble'
    })
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        class: 'bubble slidein'
      })
    }, 2000)

    this.getDimensions()
  }

  getDimensions = () => {
    setTimeout(() => {
      const loadingMessages = document.getElementsByClassName('message-wrapper')

      const message = document.getElementById('message-response')
      const messageDimensions = message.getBoundingClientRect()

      // span is "display: none" so no height and width
      // need to figure out a way to calculate dimensions with display: none

      const messages = Array.from(loadingMessages)

      Object.keys(messages).map((key) => {
        const item = messages[key]
        item.style.minHeight = messageDimensions.height + 'px'
        item.style.minWidth = messageDimensions.width + 'px'
        item.classList.add('bubble--fade')

        // timeout for letting animation fade finish before removing class
        setTimeout((e) => {
          item.classList.remove('bubble--typing')
        }, 350)
      })
    }, 2000)
  }

  render () {
    const { message, number } = this.props

    return <div>
      <div className='col-12'>
        <div key={number}
          className={`${this.state.class}`}
          style={this.state.style}
          >
          <p>{ message }</p>
        </div>

        <div>
          <div className='bubble--inview bubble--typing message-wrapper'>
            <span id='message-response'>Groar, groar groaaar!&nbsp;</span>
          </div>
        </div>
      </div>

    </div>
  }
}

export default Message
