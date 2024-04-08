import { OutputFindUserByIdRepositoryDTO } from './find-user-by-id.repository.dto'

export interface FindUserByIdRepositoryContract {
  findUserById(id: string): Promise<OutputFindUserByIdRepositoryDTO | null>
}