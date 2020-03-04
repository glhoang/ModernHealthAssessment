
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('programs').del()
    .then(function () {
      // Inserts seed entries
      return knex('programs').insert([
        {id: 1, name: 'Leadership Development Program', descriptions: 'Part 1'},
        {id: 2, name: 'Cognitive Behavioral Therapy', descriptions: 'Part 2'},
        {id: 3, name: 'New Parenting', descriptions: 'Part 3'},
        {id: 4, name: 'Mindful Communication', descriptions: 'Part 4'},
      ]);
    });
};
