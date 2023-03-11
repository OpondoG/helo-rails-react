import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Greeting from '../components/Greeting'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Greeting} />
    </Router>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
})
