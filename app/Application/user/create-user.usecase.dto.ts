export type InputCreateUserUseCaseDTO = {
  name: string
  email: string
  password: string
  phone: string
  avatar?: string
  document_type?: string
  document_number: string
  birthdate: string
  mother_name: string
  terms_accepted: boolean
  utm_source?: string
}

export type OutputCreateUserUseCaseDTO = {
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
}