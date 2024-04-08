import { OutputFindUserByEmailUseCaseDTO } from './find-user-by-email.usecase.dto'

export interface FindUserByEmailUseCaseContract {
  execute(email: string): Promise<OutputFindUserByEmailUseCaseDTO | null>
}