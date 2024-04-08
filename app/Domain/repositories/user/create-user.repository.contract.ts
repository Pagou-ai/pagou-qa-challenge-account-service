import { InputCreateUserRepositoryDTO, OutputCreateUserRepositoryDTO } from './create-user.repository.dto'

export interface CreateUserRepositoryContract {
  create(params: InputCreateUserRepositoryDTO): Promise<OutputCreateUserRepositoryDTO>
}