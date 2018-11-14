const express = require('express')
const router = express.Router()
const Axios = require('axios')
const config = require('../../config/auth.js')

router.post('/github', function (req, res) {
  githubAuth(req, res)
})

router.get('/callback', function (req, res) {
   // todo: relay response to client?
})

function githubAuth(req, res) {
  Axios.post('https://github.com/login/oauth/access_token', {
    client_id: config.auth.github.clientId,
    client_secret: config.auth.github.clientSecret,
    code: req.body.code,
    redirect_uri: req.body.redirectUri,
    state: req.body.state,
    grant_type: 'authorization_code'
  }, {'Content-Type': 'application/json'}).then(function (response) {
    const responseJson = parseQueryString(response.data)
    if (responseJson.error) {
      res.status(500).json({error: responseJson.error})
    } else {
      res.json(responseJson)
    }
  }).catch(function (err) {
    res.status(500).json(err)
  })
}

function parseQueryString(str) {
  let obj = {}
  let key
  let value
  (str || '').split('&').forEach((keyValue) => {
    if (keyValue) {
      value = keyValue.split('=')
      key = decodeURIComponent(value[0])
      obj[key] = (value[1]) ? decodeURIComponent(value[1]) : true
    }
  })
  return obj
}

module.exports = router
