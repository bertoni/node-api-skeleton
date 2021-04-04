class UsersController {
  constructor({ userDomain, logger }) {
    this.userDomain = userDomain
    this.logger = logger
  }

  async findAll(req, res) {
    this.logger.info('Request received into Users controller to findAll users')
    try {
      const resp = await this.userDomain.findAll()
      return res.status(200).json({ message: resp })
    } catch (e) {
      if (e.name === 'NoUsersFoundException') {
        return res.status(204).json({ message: e.message })
      }
      return res.status(400).json({ message: e.message })
    }
  }
}

module.exports = UsersController
