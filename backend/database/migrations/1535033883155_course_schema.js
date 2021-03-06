"use strict";

const Schema = use("Schema");

class CourseSchema extends Schema {
  up() {
    this.create("courses", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("url").notNullable();
      table.string("author").notNullable();
      table.string("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("courses");
  }
}

module.exports = CourseSchema;
