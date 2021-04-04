const HelloWorldDomain = require('#domains/helloWorldDomain')

const logger = {
  info: jest.fn(() => true)
}

describe('Hello World Domain', () => {
  test('should return message "hello world" concatenated with name', () => {
    const helloWorldDomain = new HelloWorldDomain({ logger })

    expect(helloWorldDomain.hello('Some name')).toBe('Hello World, Some name')
    expect(logger.info).toBeCalled()
  })
})
