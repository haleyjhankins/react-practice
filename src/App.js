import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import PersonCard from './PersonCard'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      person: 'Push to get a random name'
    }
  }

  componentDidMount () {

  }

  handleClick (e) {
    e.preventDefault()
    const person = Math.floor(Math.random() * 87) + 1
    axios.get('/api/people?person='+person).then(result => {
      this.setState({person: result.data.name})
    })
  }

  render () {
    const People = [23, 21, 57, 53, 37, 34, 45].map((x, i) => <PersonCard key={i} num={x} />)

    return (
      <div className='App'>
        <p className='App-intro' onClick={this.handleClick.bind(this)}>
          {this.state.person}
        </p>
        { People }
        <PersonCard num={11} />
        <PersonCard num={9} />
      </div>
    )
  }
}

export default App
