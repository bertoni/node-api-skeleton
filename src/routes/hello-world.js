module.exports = app => {
  /**
   * @swagger
   * tags:
   *   name: HelloWorld
   *   description: Tag to try our API
   */

  /**
   * @swagger
   *  components:
   *    schemas:
   *      HelloWorld:
   *        type: object
   *        required:
   *          - message
   *        properties:
   *          message:
   *            type: string
   *        example:
   *           message: Hello World, Node.js
   */

   /**
    * @swagger
    * path:
    *  /hello-world:
    *    get:
    *      summary: Test one route of our api
    *      description: Some description about this route
    *      tags: [HelloWorld]
    *      parameters:
    *        - $ref: '#/parameters/correlationId'
    *        - in: query
    *          name: name
    *          required: false
    *          description: The name used to give message
    *          schema:
    *            type: string
    *      responses:
    *        "200":
    *          description: Hello World response
    *          content:
    *            application/json:
    *              schema:
    *                $ref: '#/components/schemas/HelloWorld'
    */
  app.get(
    '/hello-world',
    (req, res, next) => {
      req.container.cradle.logger.info('Middleware intercepted')
      next()
    },
    (req, res) => {
      req.container.cradle.helloWorldController.hello(req, res)
    }
  )
}
