
exports.up = function(knex, Promise) {
    return knex.schema.createTable('game_datas', function (table) {
        table.increments();
        table.string('name');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('game_datas');
};
