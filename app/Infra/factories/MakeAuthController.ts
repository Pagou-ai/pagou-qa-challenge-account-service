import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserController } from '../controllers/user.controller'
import { FindUserByEmailUseCase } from 'App/Application/user/find-user-by-email.usecase'
import { FindUserByEmailRepository } from '../repositories/user/find-user-by-email.repository'

export default class MakeAuthController {
  async auth(ctx: HttpContextContract) {
    return await UserController.auth(
      ctx,
      new FindUserByEmailUseCase(
        new FindUserByEmailRepository()
      )
    )
  }
}