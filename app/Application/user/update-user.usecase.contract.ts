import { InputUpdateUserUseCaseDTO } from './update-user.usecase.dto'

export interface UpdateUserUseCaseContract {
  execute(params: InputUpdateUserUseCaseDTO): Promise<void>
}