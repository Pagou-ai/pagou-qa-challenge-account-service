/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseResponse from 'App/Infra/controllers/base.response'
import LoggerService from 'App/Infra/services/logger/logger.service'

export default class ExceptionHandler extends HttpExceptionHandler {
  protected statusPages = {
    '404': 'errors/not-found',
    '401': 'errors/unauthorized',
    '403': 'errors/forbidden',
    '422': 'errors/validation-error',
    '400..499': 'errors/client-error',
    '500..599': 'errors/server-error',
  }

  constructor() {
    super(Logger)
  }

  async handle(error: any, ctx: HttpContextContract): Promise<any> {
    const logger = new LoggerService()

    logger.error(`Error ${error}`)

    if (error.code === 'E_VALIDATION_FAILURE') {
      const responseBody = new BaseResponse(
        422,
        'Validation error',
        error.messages
      )

      return ctx.response.status(responseBody.statusCode).send(responseBody)
    }
    
    if (error.code === 'E_INVALID_AUTH_PASSWORD') {
      const responseBody = new BaseResponse(
        401,
        'The password is incorrect',
        error.messages
      )

      return ctx.response.status(responseBody.statusCode).send(responseBody)
    }

    if (error.code === 'E_INVALID_AUTH_UID') {
      const responseBody = new BaseResponse(
        401,
        'Password was not provided',
        error.messages
      )

      return ctx.response.status(responseBody.statusCode).send(responseBody)
    }

    if (error.code === 'E_UNAUTHORIZED') {
      const responseBody = new BaseResponse(
        401,
        'User account not found',
        error.messages
      )

      return ctx.response.status(responseBody.statusCode).send(responseBody)
    }

    const responseBody = new BaseResponse(
      500,
      'Internal server error',
      error.messages
    )
    
    return ctx.response.status(responseBody.statusCode).send(responseBody)
  }
}
