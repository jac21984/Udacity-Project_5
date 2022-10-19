var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();

const mcURL = "https://api.meaningcloud.com/lang-4.0/identification"
const apiKey = process.env.API_KEY

const app = express()
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('dist'))

console.log(__dirname)
const cloudURL = 'https://api.meaningcloud.com/lang-4.0/identification'
const cloudKey = process.env.API_KEY
let userInput = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

app.post('/api', async function(req, res) {
	urlText = req.body.url;
	console.log(`Testing: ${urlText}`)
	const formdata = new FormData();
	formdata.append("key", process.env.API_KEY);
	formdata.append("url", urlText);

	const requestOptions = {
	  method: 'POST',
	  body: formdata,
	  redirect: 'follow'
	};

	const response = await fetch(cloudURL, requestOptions)
	const cloudData = await response.json()
	console.log('cloud response:')
	console.log(cloudData)
    res.send(cloudData)
})
  
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})