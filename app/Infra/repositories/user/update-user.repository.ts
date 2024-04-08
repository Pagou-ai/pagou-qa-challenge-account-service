import { UpdateUserRepositoryContract } from 'App/Domain/repositories/user/update-user.repository.contract'
import { InputUpdateUserRepositoryDTO } from 'App/Domain/repositories/user/update-user.repository.dto'
import User from 'App/Models/User'

export class UpdateUserLucidRepository implements UpdateUserRepositoryContract {
  async update(params: InputUpdateUserRepositoryDTO): Promise<void> {
    await User.query().where('id', params.id).update(params)
  }
}