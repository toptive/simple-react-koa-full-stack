const bookshelf = require('../db');

const Article = bookshelf.Model.extend({
  tableName: 'articles',
});

module.exports = bookshelf.model('Article', Article);
