import { CreateUserRepositoryContract } from 'App/Domain/repositories/user/create-user.repository.contract'
import { InputCreateUserRepositoryDTO, OutputCreateUserRepositoryDTO } from 'App/Domain/repositories/user/create-user.repository.dto'
import User from 'App/Models/User'

export class CreateUserRepository implements CreateUserRepositoryContract {
  async create(params: InputCreateUserRepositoryDTO): Promise<OutputCreateUserRepositoryDTO> {
    const user = await User.create(params)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: '',
      avatar: user.avatar,
      document_type: user.document_type,
      document_number: user.document_number,
      birthdate: user.birthdate,
      mother_name: user.mother_name,
      terms_accepted: user.terms_accepted,
      active: user.active
    }
  }
}