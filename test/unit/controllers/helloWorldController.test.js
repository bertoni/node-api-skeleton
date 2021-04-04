const HelloWorldController = require('#controllers/helloWorldController')

const logger = {
  info: jest.fn(() => true)
}

const resp = {
  status: jest.fn(function () { return this }),
  json: jest.fn(function () { return this })
}

describe('Hello World Controller', () => {
  test('should return response with message json', () => {
    const helloWorldDomain = {
      hello: jest.fn(() => 'abc')
    }
    const helloWorldController = new HelloWorldController({ helloWorldDomain, logger })

    expect(helloWorldController.hello({ query: { name: 'abc' } }, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(helloWorldDomain.hello).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp.json).toBeCalled()
  })

  test('should return response message json without name', () => {
    const helloWorldDomain = {
      hello: jest.fn(() => 'abc')
    }
    const helloWorldController = new HelloWorldController({ helloWorldDomain, logger })

    expect(helloWorldController.hello({ query: {} }, resp)).toBe(resp)
    expect(logger.info).toBeCalled()
    expect(helloWorldDomain.hello).toBeCalled()
    expect(resp.status).toBeCalled()
    expect(resp.json).toBeCalled()
  })
})
