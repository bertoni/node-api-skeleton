const helloWorldController = require('#controllers/hello-world')
const { default: logger } = require('#helpers/logger/')

module.exports = app => {
  app.get(
    '/hello-world',
    (req, res, next) => {
      logger.info('Middleware intercepted')
      next()
    },
    (req, res) => {
      helloWorldController.hello(req, res)
    }
  )
}
