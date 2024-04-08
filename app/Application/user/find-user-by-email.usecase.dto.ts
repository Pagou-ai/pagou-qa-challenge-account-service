export type OutputFindUserByEmailUseCaseDTO = {
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
  is_admin: boolean
  utm_source?: string
}