import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserController } from '../controllers/user.controller'
import { UpdateUserUseCase } from 'App/Application/user/update-user.usecase'
import { UpdateUserLucidRepository } from '../repositories/user/update-user.repository'

export default class MakeUpdateUserController {
  async update(ctx: HttpContextContract) {
    return await UserController.update(
      ctx,
      new UpdateUserUseCase(
        new UpdateUserLucidRepository()
      )
    )
  }
}