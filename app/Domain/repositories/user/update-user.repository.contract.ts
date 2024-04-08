import { InputUpdateUserRepositoryDTO } from './update-user.repository.dto'

export interface UpdateUserRepositoryContract {
  update(params: InputUpdateUserRepositoryDTO): Promise<void>
}