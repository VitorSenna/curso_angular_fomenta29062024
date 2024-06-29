import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export default class NotFoundException extends Exception {
  static status = 400
  static code = 'E_NOTFOUND'

  async handle(error: this, ctx: HttpContext) {
    ctx.response.status(error.status).send({ message: error.message })
  }
}
