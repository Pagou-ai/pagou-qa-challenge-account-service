import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserController } from '../controllers/user.controller'
import { CreateUserUseCase } from 'App/Application/user/create-user.usecase'
import { CreateUserRepository } from '../repositories/user/create-user.repository'

export default class MakeCreateUserController {
  async create(ctx: HttpContextContract) {
    return await UserController.create(
      ctx,
      new CreateUserUseCase(
        new CreateUserRepository()
      )
    )
  }
}