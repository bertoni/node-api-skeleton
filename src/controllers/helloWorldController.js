class HelloWorldController {
  constructor({ helloWorldDomain, logger }) {
    this.helloWorldDomain = helloWorldDomain
    this.logger = logger
  }

  hello (req, res) {
    this.logger.info('Request received into controller')
    const resp = this.helloWorldDomain.hello(req.query.name || 'Anonymous')
    return res.status(200).json({ message: resp })
  }
}

module.exports = HelloWorldController
