module.exports = app => {
  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: Tag to try our API
   */

  /**
   * @swagger
   *  components:
   *    schemas:
   *      Users:
   *        type: object
   *        properties:
   *          id:
   *            type: string
   *        example:
   *           id: qwertyuiop
   */

  /**
   * @swagger
   * path:
   *  /users:
   *    get:
   *      summary: Test one route of our api
   *      description: Some description about this route
   *      tags: [Users]
   *      parameters:
   *        - $ref: '#/parameters/correlationId'
   *      responses:
   *        "200":
   *          description: Users response
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/Users'
   */
  app.get(
    '/users',
    (req, res, next) => {
      req.container.cradle.logger.info('Middleware intercepted')
      next()
    },
    (req, res) => {
      req.container.cradle.usersController.findAll(req, res)
    }
  )
}
