import { render } from 'react-dom'
import React from 'react'
import Root from 'app'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

render(
  <Root />, document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('app', () => {
    const App = require('app').default

    render(
      <App />, document.getElementById('app')
    )
  })
}
