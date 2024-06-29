import NotFoundException from '#exceptions/not_found_exception'
import Pessoa from '#models/pessoa'
import type { HttpContext } from '@adonisjs/core/http'

export default class PessoasController {
  async store({ request, response }: HttpContext) {
    const body = request.only(['nome', 'idade', 'email'])

    const pessoa = await Pessoa.create(body)

    return response.created(pessoa)
  }

  async list({ response }: HttpContext) {
    const pessoas = await Pessoa.query()

    return response.created(pessoas)
  }

  async show({ request, response }: HttpContext) {
    const id = request.param('id')
    const pessoa = await Pessoa.find(id)

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada no sistema!')
    }

    return response.ok(pessoa)
  }

  async destroy({ request, response }: HttpContext) {
    const id = request.param('id')
    const pessoa = await Pessoa.find(id)

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada no sistema!')
    }

    await pessoa.delete()

    return response.noContent()
  }

  async update({ request, response }: HttpContext) {
    const id = request.param('id')
    const body = request.only(['nome', 'idade', 'email'])

    const pessoa = await Pessoa.find(id)

    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada no sistema!')
    }

    return response.ok(await pessoa.merge(body).save())
  }
}
