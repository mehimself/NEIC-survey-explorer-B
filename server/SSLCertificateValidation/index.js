const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const appId = 'w_K2f96cguGVb_s3vob1b4YF5fHkSDslxj4qpP62EUQ'

router.get(appId, function (req, res) {
  console.log('handling ACME SSL challenge')
  res.send('_eRVC0v7yIh9FpqPU8wt90RVuJ2DE2H3jEiHAd-VG1M.162tBrrAiK6XsGwIq1S3ATKg7dVdP15nFGLUUz6pnXA')
})

module.exports = router
