const assert = require('assert')
const UsersController = require('#controllers/usersController')
const NoUsersFoundException = require('#domains/user/noUsersFoundException')

const logger = {
  info: jest.fn(() => true)
}

const resp = {
  _status: '',
  _json: '',
  status: jest.fn(function (sts) {
    this._status = sts
    return this
  }),
  json: jest.fn(function (jsn) {
    this._json = jsn
    return this
  })
}

describe('Users Controller', () => {
  test('should return empty array of users', async () => {
    const userDomain = {
      findAll: jest.fn(async () => [])
    }
    const usersController = new UsersController({ userDomain, logger })

    expect(await usersController.findAll({}, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(userDomain.findAll).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp._status).toBe(200)
    expect(resp.json).toBeCalled()
    assert.deepStrictEqual(resp._json, {message: []})
  })

  test('should return 400 with problem with repository', async () => {
    const userDomain = {
      findAll: jest.fn(async () => {
        throw new Error('foo')
      })
    }
    const usersController = new UsersController({ userDomain, logger })

    expect(await usersController.findAll({}, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(userDomain.findAll).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp._status).toBe(400)
    expect(resp.json).toBeCalled()
    assert.deepStrictEqual(resp._json, {message: "foo"})
  })

  test('should return 204 with no content', async () => {
    const userDomain = {
      findAll: jest.fn(async () => {
        throw new NoUsersFoundException('No users found')
      })
    }
    const usersController = new UsersController({ userDomain, logger })

    expect(await usersController.findAll({}, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(userDomain.findAll).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp._status).toBe(204)
    expect(resp.json).toBeCalled()
    assert.deepStrictEqual(resp._json, {message: "No users found"})
  })
})
