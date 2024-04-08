export type OutputListUsersRepositoryDTO = {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  document_type: string
  document_number: string
  birthdate: string
  mother_name: string
  terms_accepted: boolean
  active: boolean
  utm_source?: string
  hopy_id: string
  company: Company[]
}

export type Company = {
  id: string
  user_id: string
  legal_name: string
  fantasy_name: string
  document_type: string
  document_number: string
  phone: string
  email: string
  average_ticket: number
  logo: string
  monthly_billing: number
  is_physical_products: boolean
  products_description: string
  store_url: string
  invoice_description: string
}