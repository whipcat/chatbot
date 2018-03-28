import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/app'
import About from './components/about'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const store = createStore(
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

export default () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
            <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNav'>
              <span className='navbar-toggler-icon' />
            </button>

            <a className='navbar-brand' href='#'>
              <Link className='nav-link' to='/'><span className='sr-only' />home</Link>
            </a>

            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'><span className='sr-only' />About</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />

        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>)
