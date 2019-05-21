const Task = require('../models').Task;

module.exports = {
  create(req, res) {
    return Task
      .create({
        subject: req.body.subject,
        todo_id: req.params.todo_id,
      })
      .then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Task
      .update({
        subject: req.body.subject,
        detail: req.body.detail,
        status: req.body.status,
      }, {
        where: {id: req.params.task_id} 
      })
      .then(task => res.send(200).send(task))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Task
      .destroy({
        where: {id: req.params.task_id} 
      })
      .then(task => res.status(204).send())
      .catch(error => res.status(400).send(error));
  },
  get(req, res) {
    return Task
      .findAll({ 
        where: {
          id: req.params.task_id,
        },
        attributes: {exclude: ['createdAt', 'updatedAt']}
      })
      .then(task => res.status(200).send(task))
      .catch(error => res.status(400).send(error));
  },
  setStatus(req, res) {
    return Task
      .update({
        status: req.body.status,
      }, {
        where: {id: req.params.task_id} 
      })
      .then(task => res.send(204).send(task))
      .catch(error => res.status(400).send(error));
  }
};