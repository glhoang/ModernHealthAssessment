
exports.up = function(knex) {
    return knex.raw(
    `CREATE TABLE IF NOT EXISTS programs (
        id integer PRIMARY KEY,
        name text NOT NULL,
        descriptions text
    );

    CREATE TABLE IF NOT EXISTS programs_sections (
        program_id integer NOT NULL,
        section_id integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sections (
        id integer PRIMARY KEY,
        name text NOT NULL,
        descriptions text,
        over_view_image text NOT NULL, 
        order_idx integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sections_activities (
        section_id integer NOT NULL,
        activity_id integer NOT NULL
    );

    CREATE TABLE IF NOT EXISTS activities (
        id integer PRIMARY KEY,
        html text,
        selected_option_id integer
    );
    
    CREATE TABLE IF NOT EXISTS options (
        id integer PRIMARY KEY,
        activity_id integer NOT NULL,
        description text
    )`)

};

exports.down = async function(knex) {
    return knex.raw(`DROP TABLE programs, sections, activities, options, programs_sections, sections_activities`)
};
