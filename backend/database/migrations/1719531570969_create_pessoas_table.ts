import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').index().primary()
      table.string('nome', 100).notNullable()
      table.integer('idade', 4).notNullable()
      table.string('email', 100).notNullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
