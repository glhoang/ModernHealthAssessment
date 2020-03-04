
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function () {
      // Inserts seed entries
      return knex('sections').insert([
        {id: 1, name: 'Part 1: Mindfulness', descriptions: 'mind', over_view_image: 'url', order_idx: 1},
        {id: 2, name: 'Part 2: Values', descriptions: 'value', over_view_image: 'url', order_idx: 2},
        {id: 3, name: 'Part 3: Actions', descriptions: 'actions', over_view_image: 'url', order_idx: 3},
        {id: 4, name: 'Part 4: Flexibility', descriptions: 'flexibility', over_view_image: 'url', order_idx: 4}
      ]);
    });
};
