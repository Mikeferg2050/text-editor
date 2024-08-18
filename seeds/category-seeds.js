const { Category } = require("../models");

const categoryData = [
  { category_name: "Electronics" },
  { category_name: "Clothing" },
  // more categories...
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
