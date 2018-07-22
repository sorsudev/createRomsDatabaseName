const config = require('./config'),
      bookshelf = require('bookshelf')(config.knex);

var GameData = bookshelf.Model.extend({
    tablaName: 'game_datas'
});
