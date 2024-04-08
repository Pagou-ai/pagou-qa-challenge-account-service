import { OutputListUsersRepositoryDTO } from './list-users.repository.dto'

export interface ListUsersRepositoryContract {
  list(utm_source?: string): Promise<OutputListUsersRepositoryDTO[] | []>
}
