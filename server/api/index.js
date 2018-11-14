const express = require('express')
const router = express.Router()
const WebsocketManager = require('../WebSocketService')
const ws = new WebsocketManager()

const debug = {
  CRUD: true
}

module.exports = router
