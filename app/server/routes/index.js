const todosController = require('../controllers').todos;
const tasksController = require('../controllers').tasks;

module.exports = (app) => {

  app.post('/api/todos/create',todosController.create);
  app.put('/api/todos/:todo_id',todosController.update);
  app.delete('/api/todos/:todo_id',todosController.delete);
  
  /**
   * @api {get} /get Todo by todo_id
   * @apiGroup Todo
   * @apiSuccess {Object} Todo
   * @apiSuccess {Number} todo.id Todo id
   * @apiSuccess {String} todo.title Todo title
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "title": "Study",
   *      "done": false
   *    }]
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.get('/api/todos/:todo_id',todosController.get);

  // task api
  // add task to the list.
  app.post('/api/:todo_id/tasks/create', tasksController.create);
  // edit existing task.
  app.put('/api/tasks/:task_id', tasksController.update);
  // delete a task from the list
  app.delete('/api/tasks/:task_id', tasksController.delete);
  // view a single task in the list.
  app.get('/api/tasks/:task_id', tasksController.get);
  // set the task status
  app.put('/api/tasks/:task_id', tasksController.setStatus)
};