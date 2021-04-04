const awilix = require('awilix')
const { default: logger } = require('#helpers/logger/')

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})
container.loadModules([
    __dirname + '/../../domains/**/*.js',
    __dirname + '/../../controllers/**/*.js',
    __dirname + '/../../repositories/**/*.js'
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: awilix.Lifetime.SCOPED,
      injectionMode: awilix.InjectionMode.PROXY,
      register: awilix.asClass
    }
  })

container.register({
  logger: awilix.asValue(logger)
})

if (!container.has('userRepository')) {
  container.register({
    userRepository: awilix.asValue({ findAll: () => [] })
  })
}

module.exports = container
