exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.string("VIN", 17).notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};