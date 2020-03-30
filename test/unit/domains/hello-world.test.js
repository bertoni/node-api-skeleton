const helloWorldDomain = require('#domains/hello-world')
const { default: logger } = require('#helpers/logger/')

jest.mock('#helpers/logger/', () => ({
  default: {
    info: jest.fn(() => true)
  }
}))

describe('Hello World Domain', () => {
  test('should return message "hello world" concatenated with name', () => {
    expect(helloWorldDomain.hello('Some name')).toBe('Hello World, Some name')
    expect(logger.info).toBeCalled()
  })
})
