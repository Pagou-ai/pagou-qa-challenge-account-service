import { OutputFindUserByEmailRepositoryDTO } from './find-user-by-email.repository.dto'

export interface FindUserByEmailRepositoryContract {
  findUserByEmail(email: string): Promise<OutputFindUserByEmailRepositoryDTO | null>
}