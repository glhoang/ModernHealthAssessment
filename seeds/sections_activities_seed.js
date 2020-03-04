
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sections_activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('sections_activities').insert([
        {section_id: 1, activity_id: 1},
        {section_id: 1, activity_id: 2},
        {section_id: 2, activity_id: 3},
        {section_id: 2, activity_id: 4},
        {section_id: 3, activity_id: 1},
        {section_id: 3, activity_id: 2},
        {section_id: 4, activity_id: 2},
        {section_id: 4, activity_id: 3},
      ]);
    });
};
