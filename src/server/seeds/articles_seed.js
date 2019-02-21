exports.seed = function(knex, Promise) {
  return knex('articles').del()
    .then(function () {
      return knex('articles').insert([{
        title: 'Title 1',
        body: 'Body 1',
      }, {
        title: 'Title 2',
        body: 'Body 2',
      }, {
        title: 'Title 3',
        body: 'Body 3',
      }]);
    })
};
