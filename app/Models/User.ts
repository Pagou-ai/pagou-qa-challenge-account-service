import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { uuid } from 'uuidv4'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public phone: string

  @column()
  public avatar: string

  @column()
  public document_type: string

  @column()
  public document_number: string

  @column()
  public birthdate: string

  @column()
  public mother_name: string

  @column()
  public terms_accepted: boolean

  @column()
  public active: boolean

  @column()
  public utm_source: string

  @column()
  public is_admin: boolean

  @column()
  public hopy_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async generateUUID(user: User) {
    user.id = uuid()

    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
