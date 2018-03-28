import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Message from './message'
import Choice from './choice'

class App extends Component {

  static propTypes = {
    startProject: PropTypes.any
  }
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  getJson = () => {
    return [
      {
        'path': '100',
        'messages': [
          {
            'text': 'Hey, welcome back! \ud83d\ude4c',
            'author': 'Johnny'
          }, {
            'author': 'Johnny',
            'text': '\u201cGreat stories move the world forward.\u201d'
          }, {
            'author': 'Johnny',
            'text': "That's what's written\u00a0in large letters along the wall of Flipboard's office in Palo Alto.\u00a0"
          }, {
            'author': 'Johnny',
            'text': 'The company aims at giving people a place to find and engage with these kinds of stories.'
          }, {
            'author': 'Johnny',
            'text': 'In order to best do so, they reimagined and redesigned their entire app experience. \ud83c\udfa8'
          }
        ],
        'choices': [
          {
            'path': '100/tell-me-more',
            'text': 'Tell me more \ud83d\udc4d',
            'write': false
          }, {
            'path': '90',
            'text': 'Something else',
            'write': false
          }
        ]
      },
      {
        'path': '100/tell-me-more',
        'messages': [
          {
            'author': 'Johnny',
            'text': 'OK!'
          }, {
            'author': 'Johnny',
            'text': 'Here you go!'
          }, {
            'author': 'Johnny',
            'type': 'link',
            'href': 'https://medium.com/flipboard-design/designing-the-new-flipboard-9e4eca6705d0#.tnlhfthrj',
            'src': 'http://uxchat.me/wp-content/uploads/1vUAxZov624YkvpO0na4q7g.png',
            'title': 'Designing the new Flipboard'
          }
        ],
        'choices': [
          {
            'path': '90',
            'text': 'What else?',
            'write': false
          }
        ]
      },
      {
        'path': '90',
        'messages': [
          {
            'author': 'Johnny',
            'text': 'Products like Nest, Netflix and Amazon\u2019s Echo are good examples of how products learn, adjust and anticipates on given data of the user.'
          }, {
            'author': 'Johnny',
            'text': 'They all embrace a pattern called "Anticipatory Design".'
          }
        ],
        'choices': [
          {
            'path': '90/tell-me-more',
            'text': 'Tell me more',
            'write': false
          }, {
            'path': '80',
            'text': 'Something else',
            'write': false
          }
        ]
      },
      {
        'path': '90/tell-me-more',
        'messages': [
          {
            'author': 'Johnny',
            'text': 'Of course!'
          }, {
            'author': 'Johnny',
            'text': 'I anticipated you would say so \ud83d\ude09!'
          }, {
            'author': 'Johnny',
            'text': 'Anticipatory Design is a design pattern that moves around learning (Internet of Things), predicting (Machine Learning) and anticipation (UX Design).'
          }, {
            'author': 'Johnny',
            'text': 'If you are involved in designing smart technology you should consider these five principles'
          }, {
            'author': 'Johnny',
            'type': 'link',
            'href': 'https://google.com',
            'src': 'http://i0.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg',
            'title': 'Designing Anticipated User Experiences'
          }
        ],
        'choices': [
          {
            'path': '80',
            'text': 'What else?',
            'write': false
          }
        ]
      }
    ]
  }

  showWelcomeMessage = () => {
    const data = this.getJson()
    const welcomeMessages = data[0].messages

    return welcomeMessages.map((message, index) => {
      return <Message key={index} number={index} message={message.text} />
    })
  }

  showChoice = () => {
    const data = this.getJson()
    const choices = data[0].choices

    return choices.map((choice, index) => {
      return <Choice key={index} number={index} label={choice.text} />
    })
  }

  render () {
    return (
      <div className='App container pt-4'>
        <div className='row'>
          {
            this.showWelcomeMessage()
          }
        </div>

        <div className='choice--wrapper'>
          <div className='row'>
            {
            this.showChoice()
          }
          </div>
        </div>
      </div>
    )
  }
}

// map state to props function
// update redux state with our action and recognize it in our user interface
// listen to a state as an arguments with our passed function
function mapStateToProps (state) {
  return {
    startProject: state
  }
}
// bind the action creator (in reducer) to this app
export default connect(mapStateToProps, { })(App)
