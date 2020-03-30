const helloWorldDomain = require('#domains/hello-world')
const { default: logger } = require('#helpers/logger/')

exports.hello = (req, res) => {
  logger.info('Request received into controller')
  const resp = helloWorldDomain.hello(req.query.name || 'Anonymous')
  return res.status(200).json({ message: resp })
}
