const Knex = require('knex');
const Bookshelf = require('bookshelf');

const config = require('../../knexfile');

var env = process.env.NODE_ENV || 'development';

const knex = Knex(config[env]);

const bookshelf = Bookshelf(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
