
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, html: '<p>activity 1</p>', selected_option_id: 1},
        {id: 2, html: '<p>activity 2</p>', selected_option_id: 2},
        {id: 3, html: '<p>activity 3</p>', selected_option_id: 3}
      ]);
    });
};
