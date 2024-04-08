import { FindUserByEmailRepositoryContract } from 'App/Domain/repositories/user/find-user-by-email.repository.contract'
import { FindUserByEmailUseCaseContract } from './find-user-by-email.usecase.contract'
import { OutputFindUserByEmailUseCaseDTO } from './find-user-by-email.usecase.dto'

export class FindUserByEmailUseCase implements FindUserByEmailUseCaseContract {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepositoryContract
  ) {}

  async execute(email: string): Promise<OutputFindUserByEmailUseCaseDTO | null> {
    return await this.findUserByEmailRepository.findUserByEmail(email)  
  }
}