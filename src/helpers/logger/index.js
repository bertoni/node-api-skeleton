const { createLogger, transports, format } = require('winston')
const { ENV } = require('#/config')

let data = {}

exports.set = (key, value) => data[key] = value

exports.default = createLogger({
  colorize: 'true',
  level: 'silly',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(info => {
      const log = [`date[${info.timestamp}]`, `level[${info.level}]`, `cid[${data.CID}]`, `message[${info.message}]`]
      Object.keys(info).map(el => {
        if (!['timestamp', 'level', 'message'].includes(el)) log.push(`${el}[${info[el]}]`)
      })
      return log.join(' ')
    })
  ),
  transports: [
    new transports.Console({ silent: (ENV === 'test') }),
    new transports.File({ filename: 'logfile.log' })
  ]
})
