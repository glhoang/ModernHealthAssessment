
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('options').del()
    .then(function () {
      // Inserts seed entries
      return knex('options').insert([
        {id: 1, activity_id: 1, description: 'Increase Focus 1'},
        {id: 2, activity_id: 1, description: 'Improve Concentration 1'},
        {id: 3, activity_id: 2, description: 'Increase Focus 2'},
        {id: 4, activity_id: 2, description: 'Improve Concentration 2'},
        {id: 5, activity_id: 2, description: 'Mental Clarity 2'},
        {id: 6, activity_id: 3, description: 'Increase Focus 3'},
        {id: 7, activity_id: 3, description: 'Improve Concentration 3'}
      ]);
    });
};
