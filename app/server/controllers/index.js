const tasks = require('./tasks');
const todos = require('./todos');

//Generate data structure in DB
require('../models').sequelize.sync({ force: true })

module.exports = {
  tasks,
  todos,
};