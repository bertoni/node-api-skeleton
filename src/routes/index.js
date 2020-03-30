const fs = require('fs')
  , path = require('path')
  , routePath = path.resolve(__dirname)

exports.boot = app => {
  fs.readdirSync(routePath).forEach(file => {
    if (file !== 'index.js') {
      const cleanPath = routePath + '/' + file.substr(0, file.indexOf('.'))
      const route = path.resolve(cleanPath)
      require(route)(app)
    }
  })
}
