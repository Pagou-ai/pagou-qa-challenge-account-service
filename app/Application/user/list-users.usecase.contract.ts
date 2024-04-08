import { OutputListUsersUseCaseDTO } from './list-users.usecase.dto'

export interface ListUsersUseCaseContract {
  execute(utm_source?: string): Promise<OutputListUsersUseCaseDTO[] | []>
}