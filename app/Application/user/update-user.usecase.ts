import { UpdateUserRepositoryContract } from 'App/Domain/repositories/user/update-user.repository.contract'
import { UpdateUserUseCaseContract } from './update-user.usecase.contract'
import { InputUpdateUserUseCaseDTO } from './update-user.usecase.dto'

export class UpdateUserUseCase implements UpdateUserUseCaseContract {
  constructor(
    private readonly updateUserRepository: UpdateUserRepositoryContract
  ) {}

  async execute(params: InputUpdateUserUseCaseDTO): Promise<void> {
    await this.updateUserRepository.update(params)
  }
}