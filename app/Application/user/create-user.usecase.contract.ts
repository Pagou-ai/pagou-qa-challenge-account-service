import { InputCreateUserUseCaseDTO, OutputCreateUserUseCaseDTO } from './create-user.usecase.dto'

export interface CreateUserUseCaseContract {
  execute(params: InputCreateUserUseCaseDTO): Promise<OutputCreateUserUseCaseDTO>
}