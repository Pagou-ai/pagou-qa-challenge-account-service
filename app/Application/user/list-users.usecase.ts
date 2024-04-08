import { ListUsersRepositoryContract } from 'App/Domain/repositories/user/list-users.repository.contract'
import { ListUsersUseCaseContract } from './list-users.usecase.contract'
import { OutputListUsersUseCaseDTO } from './list-users.usecase.dto'

export class ListUsersUseCase implements ListUsersUseCaseContract {
  constructor(
    private readonly listUsersRepositoryContract: ListUsersRepositoryContract
  ) {}

  async execute(utm_source?: string): Promise<OutputListUsersUseCaseDTO[] | []> {
    return await this.listUsersRepositoryContract.list(utm_source)
  }
}