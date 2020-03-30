const { default: logger } = require('#helpers/logger/')

exports.hello = name => {
  logger.info('Hello World', { name: name })
  return `Hello World, ${name}`
}
