const assert = require('assert')
const UserDomain = require('#domains/user/userDomain')

const logger = {
  info: jest.fn(() => true)
}

describe('User Domain', () => {
  test('should return array of users', async () => {
    const users = [{id: 1}]
    const repository = {
      findAll: jest.fn(async () => users)
    }

    const userDomain = new UserDomain({ userRepository: repository, logger })

    assert.deepStrictEqual(await userDomain.findAll(), users)
    expect(logger.info).toBeCalled()
    expect(repository.findAll).toBeCalled()
  })

  test('should throw NoUsersFoundException no users found', async () => {
    const repository = {
      findAll: jest.fn(async () => null)
    }

    const userDomain = new UserDomain({ userRepository: repository, logger })

    expect.assertions(3)
    try {
      await userDomain.findAll()
    } catch (e) {
      expect(e.name).toBe('NoUsersFoundException')
      expect(logger.info).toBeCalled()
      expect(repository.findAll).toBeCalled()
    }
  })

  test('should throw RepositoryError', async () => {
    const repository = {
      findAll: jest.fn(async () => {
        throw new Error('Connection failed')
      })
    }

    const userDomain = new UserDomain({ userRepository: repository, logger })

    expect.assertions(3)
    try {
      await userDomain.findAll()
    } catch (e) {
      expect(e.message).toBe('Connection failed')
      expect(logger.info).toBeCalled()
      expect(repository.findAll).toBeCalled()
    }
  })
})
