const helloWorldController = require('#controllers/hello-world')
const helloWorldDomain = require('#domains/hello-world')
const { default: logger } = require('#helpers/logger/')

jest.mock('#helpers/logger/', () => ({
  default: {
    info: jest.fn(() => true)
  }
}))

jest.mock('#domains/hello-world', () => ({
  hello: jest.fn(() => 'abc')
}))

const resp = {
  status: jest.fn(function () { return this }),
  json: jest.fn(function () { return this })
}

describe('Hello World Controller', () => {
  test('should return response with message json', () => {
    expect(helloWorldController.hello({ query: { name: 'abc' } }, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(helloWorldDomain.hello).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp.json).toBeCalled()
  })

  test('should return response message json without name', () => {
    expect(helloWorldController.hello({ query: {} }, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(helloWorldDomain.hello).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp.json).toBeCalled()
  })
})
