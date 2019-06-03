const authService =  require('../services/auth');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return authService.register('admin', 'admin');
    })
};
