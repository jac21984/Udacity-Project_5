var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');

var bodyParser = require('body-parser')
var cors = require('cors')

dotenv.config();

console.log(__dirname)

// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let userInput = [] // const does not work

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('dist'))

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// POST Route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const webData = await response.json()
    console.log(webData)
    res.send(webData)
})