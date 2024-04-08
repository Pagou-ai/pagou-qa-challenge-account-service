import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').unique()
      table.string('name')
      table.string('email').unique()
      table.string('password')
      table.string('phone')
      table.string('avatar')
      table.string('document_type').defaultTo('cpf')
      table.string('document_number')
      table.string('birthdate')
      table.string('mother_name')
      table.boolean('terms_accepted').defaultTo(false)
      table.boolean('active').defaultTo(false)
      table.string('utm_source')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
