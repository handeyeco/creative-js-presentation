import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom';
import './reset.css'
import './index.css'
import App from './App'

const Wrapped = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<Wrapped />, document.getElementById('root'))
