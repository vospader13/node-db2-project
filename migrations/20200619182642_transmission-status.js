exports.up = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.text("transmission type")
        table.text("status")
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.alterTable("cars", (table) =>{
        table.dropColumn("transmission type")
        table.dropColumn("status")
    })
  };
