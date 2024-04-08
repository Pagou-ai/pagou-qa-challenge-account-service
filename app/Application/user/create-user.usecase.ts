import { CreateUserRepositoryContract } from 'App/Domain/repositories/user/create-user.repository.contract'
import { CreateUserUseCaseContract } from './create-user.usecase.contract'
import { InputCreateUserUseCaseDTO, OutputCreateUserUseCaseDTO } from './create-user.usecase.dto'

export class CreateUserUseCase implements CreateUserUseCaseContract {
  constructor(
    private readonly createUserRepository: CreateUserRepositoryContract
  ) {}

  async execute(params: InputCreateUserUseCaseDTO): Promise<OutputCreateUserUseCaseDTO> {
    return await this.createUserRepository.create(params) 
  }
}