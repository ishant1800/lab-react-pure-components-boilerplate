import React, { Component } from 'react'
import PureCounter from './components/PureCounter'
import SimpleCounter from './components/SimpleCounter'
import './App.css'
class App extends Component {
  
  render() {
    return (
      <div>
        <SimpleCounter/>
        <hr />
        <PureCounter/>

      </div>
    )
  }
}
export default App