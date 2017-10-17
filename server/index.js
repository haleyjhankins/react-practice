const express = require('express')
const axios = require('axios')
const {json} = require('body-parser')
const cors = require('cors')
const app = express()

// app.use(cors())
app.use(json())
app.get('/api/people', (req, res) => {
  let person = req.query.person

  axios
    .get('https://swapi.co/api/people/' + person)
    .then(data => {
      console.log('data', data.data)

      res.status(200).json(data.data)
    })
    .catch(err => {
      res.status(400).json({err: err.message})
    })
})

app.listen(3001)
