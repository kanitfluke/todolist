const Todo = require('../models').Todo;
const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Todo
      .update({
        title: req.body.title,
      }, {
        where: {id: req.params.todo_id} 
      })
      .then(todo => res.status(204).send(todo))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Todo
      .destroy({
        where: {id: req.params.todo_id} 
      })
      .then(todo => res.status(204).send(todo))
      .catch(error => res.status(400).send(error));
  },
  get(req, res) {
    return Todo
      .findAll({ 
        include: [ {model: Task, attributes: {exclude: ['createdAt', 'updatedAt', 'todo_id']}} ],
        attributes: {exclude: ['createdAt', 'updatedAt']},
        where: {
          id: req.params.todo_id,
        }
      })
      .then(todos => res.status(201).send(todos))
      .catch(error => res.status(400).send(error));
  },
};