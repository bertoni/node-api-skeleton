# Node API Skeleton

This project was thought to create the ground to build REST APIs with Node.js.

To this, was used the Express framework, Winston to logger, Jest to tests and other tools.

### Features

Already was wrote some features:

- Segregation structure folders to give more independence to your modules.
- Load routes dynamically only adding the route file in your folder.
- Logger structure to use in whole project.
- Dynamic Dependency Injection (DI) for Models, Repositories and Controllers with [awilix](https://github.com/jeffijoe/awilix)
- Implemented CorrelationID inside logger to allow track back the request inside modules.
- Implementing test structure to facilitate other modules that you will build
- Using `link-module-alias` to easily call other modules without need know all structure and lose control of paths
- Hot reload to development faster
- Documenting API with swagger using @notation

### How Use
Start application
````
npm run dev
````

Run tests
````
npm run test
````

Run tests with coverage
````
npm run coverage
````
