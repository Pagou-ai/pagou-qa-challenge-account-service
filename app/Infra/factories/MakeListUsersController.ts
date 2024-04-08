import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserController } from '../controllers/user.controller'
import { ListUsersUseCase } from 'App/Application/user/list-users.usecase'
import { ListUsersLucidRepository } from '../repositories/user/list-users.repository'

export default class MakeListUsersController {
  async list(ctx: HttpContextContract) {
    return await UserController.list(
      ctx,
      new ListUsersUseCase(
        new ListUsersLucidRepository()
      )
    )
  }
}