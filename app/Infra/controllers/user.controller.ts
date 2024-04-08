import { CreateUserUseCaseContract } from 'App/Application/user/create-user.usecase.contract'
import BaseResponse from './base.response'
import { FindUserByEmailUseCaseContract } from 'App/Application/user/find-user-by-email.usecase.contract'
import { ListUsersUseCaseContract } from 'App/Application/user/list-users.usecase.contract'
import { UpdateUserUseCaseContract } from 'App/Application/user/update-user.usecase.contract'

export class UserController {
  static async create(
    { request, response },
    createUserUseCase: CreateUserUseCaseContract
  ) {
    const payload = request.body()

    const user = await createUserUseCase.execute(payload)

    const responseModel = new BaseResponse(
      200,
      'User created successfully',
      user
    )

    return response.status(responseModel.statusCode).json(responseModel)
  }

  static async auth(
    { auth, request, response },
    findUserByEmailUseCase: FindUserByEmailUseCaseContract
  ) {
    const { email, password } = request.body()
      
    if (email || password) throw new Error('Email or Password is missing')

    const user = await findUserByEmailUseCase.execute(email)

    if (!user?.id) throw new Error('User account not found')

    const res = await auth.use('api').attempt(email, password)

    if (!res) {
      throw new Error('Invalid credentials')
    }
 
    if (user.is_admin) {
      const responseModel = new BaseResponse(
        200,
        'User logged in successfully',
        {
          token: res.token,
          user
        }
      )

      return response.status(responseModel.statusCode).json(responseModel)
    }

    const responseModel = new BaseResponse(
      200,
      'User created successfully',
      {
        user
      }
    )

    return response.status(responseModel.statusCode).json(responseModel)
  }

  static async list(
    { response, params },
    listUsersUseCase: ListUsersUseCaseContract
  ) {
    const { utm_source } = params

    const users = await listUsersUseCase.execute(utm_source)

    const responseModel = new BaseResponse(
      200,
      'Users retrieved successfully',
      users
    )

    return response.status(responseModel.statusCode).json(responseModel)
  }

  static async update(
    { request, response },
    updateUserUseCase: UpdateUserUseCaseContract
  ) {
    const payload = request.body()

    await updateUserUseCase.execute(payload)

    const responseModel = new BaseResponse(200, 'User updated successfully')

    return response.status(responseModel.statusCode).json(responseModel)
  }
}