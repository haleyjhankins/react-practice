import React, { Component } from 'react'
import axios from 'axios'
// Write a Component that take a number as a param/props
// Based off of that number, the component does an http request to swapi to get people info. i.e., name, height, mass, hair, skin, birth, gender
// display that user info.

export default class PersonCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      person: {
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        skin_color: '',
        eye_color: '',
        birth_year: '',
        gender: ''
      }
    }
  }
  componentDidMount () {
    axios.get('/api/people?person=' + this.props.num)
    .then(person => this.setState({person: person.data}))
    .catch(err => console.log(err))
  }

  render () {
    const { name, height, mass, hair_color: hairColor, gender } = this.state.person
    return (
      <div>
        { name }
        { height }
        { mass }
        { hairColor }
        { gender }
      </div>
    )
  }
}
