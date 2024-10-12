exports.up = function (knex) {
    return knex.schema
        .alterTable("monitor", function (table) {
            table.integer("fail_before_notification").notNullable().defaultTo(0);
        });
};

exports.down = function (knex) {
    return knex.schema.alterTable("monitor", function (table) {
        table.dropColumn("conditions");
    });
};
