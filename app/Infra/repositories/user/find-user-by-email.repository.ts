import { FindUserByEmailRepositoryContract } from 'App/Domain/repositories/user/find-user-by-email.repository.contract'
import { OutputFindUserByEmailRepositoryDTO } from 'App/Domain/repositories/user/find-user-by-email.repository.dto'
import User from 'App/Models/User'

export class FindUserByEmailRepository implements FindUserByEmailRepositoryContract {
  async findUserByEmail(email: string): Promise<OutputFindUserByEmailRepositoryDTO | null> {
    const user = await User.findBy('email', email)

    if (!user?.id) {
      return null
    }

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      avatar: user?.avatar,
      document_type: user?.document_type,
      document_number: user?.document_number,
      birthdate: user?.birthdate,
      mother_name: user?.mother_name,
      terms_accepted: user?.terms_accepted,
      active: user?.active,
      is_admin: user?.is_admin,
    }
  }
}