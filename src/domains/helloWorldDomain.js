class HelloWorldDomain {
  constructor({ logger }) {
    this.logger = logger
  }

  hello (name) {
    this.logger.info('Hello World', { name: name })
    return `Hello World, ${name}`
  }
}

module.exports = HelloWorldDomain
