const express = require('express')
const { v4: uuidv4 } = require('uuid')
const { default: logger, set: loggerSet } = require('#helpers/logger/')
const { PORT, CID_HEADER } = require('#/config')
const app = express()

app.use(express.json())
app.use((req, res, next) => {
  if (!req.headers[CID_HEADER]) req.headers[CID_HEADER] = uuidv4()
  loggerSet('CID', req.headers[CID_HEADER])
  logger.info(
    'Receive request',
    {
      url: req.url,
      method: req.method,
      header: JSON.stringify(req.headers),
      query: JSON.stringify(req.query),
      body: JSON.stringify(req.body)
    }
  )
  next()
})
require('#routes').boot(app)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
