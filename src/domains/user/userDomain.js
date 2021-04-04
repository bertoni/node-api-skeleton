const NoUsersFoundException = require('#domains/user/noUsersFoundException')

class UserDomain {
  constructor({ userRepository, logger }) {
    this.repository = userRepository
    this.logger = logger
  }

  async findAll() {
    this.logger.info('Find all users into repository')
    const users = await this.repository.findAll()
    if (users && users.length > 0) {
      return users
    }
    throw new NoUsersFoundException('Users not found')
  }
}

module.exports = UserDomain
