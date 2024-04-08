export type OutputFindUserByEmailRepositoryDTO = {
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
}