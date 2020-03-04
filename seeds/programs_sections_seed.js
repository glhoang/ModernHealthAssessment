
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('programs_sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('programs_sections').insert([
        {program_id: 1, section_id: 1},
        {program_id: 2, section_id: 1},
        {program_id: 2, section_id: 2},
        {program_id: 3, section_id: 1},
        {program_id: 3, section_id: 2},
        {program_id: 3, section_id: 3},
      ]);
    });
};
