import { FindUserByIdRepositoryContract } from 'App/Domain/repositories/user/find-user-by-id.repository.contract'
import { OutputFindUserByIdRepositoryDTO } from 'App/Domain/repositories/user/find-user-by-id.repository.dto'
import User from 'App/Models/User'

export class FindUserByIdRepository implements FindUserByIdRepositoryContract {
  async findUserById(id: string): Promise<OutputFindUserByIdRepositoryDTO | null> {
    const user = await User.query().where('id', id).preload('address').preload('bankAccount').preload('company').first()

    if (!user) {
      return null
    }

    const address = user.address.map(address => ({
      id: address.id,
      street: address.street,
      number: address.number,
      complement: address.complement,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      zipcode: address.zipcode,
      country: address.country,
      user_id: user.id,
    }))

    const bank_account = user.bankAccount.map(bank => ({
      id: bank.id,
      bank_code: bank.bank_code,
      agency: bank.agency,
      account: bank.account,
      account_digit: bank.account_digit,
      account_type: bank.account_type,
      user_id: user.id,
    }))

    const company = user.company.map(company => ({
      id: company.id,
      legal_name: company.legal_name,
      fantasy_name: company.fantasy_name,
      document_type: company.document_type,
      document_number: company.document_number,
      phone: company.phone,
      email: company.email,
      average_ticket: company.average_ticket,
      logo: company.logo,
      monthly_billing: company.monthly_billing,
      is_physical_products: company.is_physical_products,
      products_description: company.products_description,
      store_url: company.store_url,
      invoice_description: company.invoice_description,
      user_id: user.id,
    }))

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
      document_type: user.document_type,
      document_number: user.document_number,
      birthdate: user.birthdate,
      mother_name: user.mother_name,
      terms_accepted: user.terms_accepted,
      active: user.active,
      is_admin: user.is_admin,
      address,
      bank_account,
      company
    }
  }
}