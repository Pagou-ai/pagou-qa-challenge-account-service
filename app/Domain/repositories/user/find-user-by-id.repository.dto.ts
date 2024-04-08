export type OutputFindUserByIdRepositoryDTO = {
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
  is_admin: boolean
  address: Address[]
  bank_account: BankAccount[]
  company: Company[]
}

export type Address = {
  id: string
  user_id: string
  zipcode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  country?: string
}

export type BankAccount = {
  id: string
  user_id: string
  bank_code: string
  agency: string
  account: string
  account_digit: string
  account_type: string
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