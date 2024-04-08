import { ListUsersRepositoryContract } from 'App/Domain/repositories/user/list-users.repository.contract'
import { OutputListUsersRepositoryDTO } from 'App/Domain/repositories/user/list-users.repository.dto'
import User from 'App/Models/User'

export class ListUsersLucidRepository implements ListUsersRepositoryContract {
  async list(utm_source?: string): Promise<OutputListUsersRepositoryDTO[] | []> {
    const query =  User.query()

    if (utm_source) {
      query.where('utm_source', utm_source)
    }

    const users = await query.preload('company').orderBy('created_at', 'desc')

    return users.map((user) => ({
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
      utm_source: user.utm_source,
      hopy_id: user.hopy_id,
      company: user.company.map((company) => ({
        id: company.id,
        user_id: company.user_id,
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
        hopy_id: company.hopy_id
      }))
    }))
  }
}