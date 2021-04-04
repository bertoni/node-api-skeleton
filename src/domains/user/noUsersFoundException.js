class NoUsersFoundException extends Error {
  constructor (message) {
    super(message)
    this.name = 'NoUsersFoundException'
  }
}

module.exports = NoUsersFoundException
