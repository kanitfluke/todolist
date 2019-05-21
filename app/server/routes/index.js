const todosController = require('../controllers').todos;
const tasksController = require('../controllers').tasks;

module.exports = (app) => {

  /**
   * @api {post} /api/todos/create Create Todo
   * @apiName CreateTodo
   * @apiGroup Todo
   * @apiDescription Create a new Todo.
   *
   * @apiParam {String} title Title of a Todo.
   * 
   * @apiExample Example usage:
   * curl -d "title=todotitle" -X POST http://localhost:8000/api/todos/create
   *
   * @apiSuccess {Number} id The new Todo ID.
   * @apiSuccess {String} title Title of a new Todo.
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "title": "todo title",
   *      "tasks": []
   *    }]
   *
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.post('/api/todos/create', todosController.create);

  /**
   * @api {put} /api/todos/:todo_id Edit a Todo
   * @apiName EditTodo
   * @apiGroup Todo
   * @apiDescription Edit Todo by Todo ID
   * 
   * @apiParam {Number} todo_id Todo ID.
   * 
   * @apiExample Example usage:
   * curl -d "title=todotitle" -X PUT http://localhost:8000/api/todos/1
   * 
   * @apiSuccess {Number} todo.id Todo id.
   * @apiSuccess {String} todo.title Todo title.
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "title": "todotitle",
   *    }]
   * 
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.put('/api/todos/:todo_id', todosController.update);

  /**
   * @api {delete} /api/todos/:todo_id Delete a Todo
   * @apiName DeleteTodo
   * @apiGroup Todo
   * @apiDescription Delete Todo by Todo ID
   * 
   * @apiParam {Number} todo_id Todo ID.
   * 
   * @apiExample Example usage:
   * curl -X DELETE http://localhost:8000/api/todos/1
   * 
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 204 No Return
   * 
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.delete('/api/todos/:todo_id', todosController.delete);
  
  /**
   * @api {get} /api/todos/:todo_id Get Todo
   * @apiName GetTodo
   * @apiGroup Todo
   * @apiDescription Get todo by todo_id.
   * 
   * @apiParam {Number} todo_id Todo ID.
   * 
   * @apiExample Example usage:
   * curl -X GET http://localhost:8000/api/todos/1
   * 
   * @apiSuccess {Number} todo.id Todo id.
   * @apiSuccess {String} todo.title Todo title.
   * @apiSuccess {Object[]} todo.task List of a task.
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "title": "todo title",
   *      "tasks": [
   *        {
   *          "id": 1,
   *          "subject": "subject name2",
   *          "detail": null,
   *          "status": "pending"
   *        },
   *        {
   *          "id": 2,
   *          "subject": "subject name2",
   *          "detail": null,
   *          "status": "pending"
   *        }
   *      ]
   *    }]
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.get('/api/todos/:todo_id', todosController.get);


  /**
   * @api {post} /api/:todo_id/tasks/create Create Task
   * @apiName CreateTask
   * @apiGroup Task
   * @apiDescription Create Task in Todo
   * 
   * @apiParam {Number} todo_id Todo ID.
   * @apiParam {String} task.subject Task subject.
   * @apiParam {String} task.detail Task detail.
   * @apiParam {String} task.status Status of a Task "pending" or "done"
   * 
   * @apiExample Example usage:
   * curl -d "subject=tasksubject&detail=taskdetail&status=pending" -X http://localhost:8000/api/1/tasks/create
   * 
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "subject": "tasksubject",
   *      "detail": "taskdetail",
   *      "status": "pending",
   *      "todo_id": 1
   *    }]
   * 
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.post('/api/:todo_id/tasks/create', tasksController.create);

  /**
   * @api {put} /api/tasks/:task_id Edit Task
   * @apiName EditTask
   * @apiGroup Task
   * @apiDescription Edit a single task in Todo by Task ID
   * 
   * @apiParam {Number} task_id Task ID.
   * @apiParam {String} task.subject Task subject.
   * @apiParam {String} task.detail Task detail.
   * @apiParam {String} task.status Status of a Task "pending" or "done"
   * 
   * @apiExample Example usage:
   * curl -d "subject=tasksubject&detail=taskdetail&status=done" -X PUT http://localhost:8000/api/tasks/1
   * 
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "subject": "tasksubject",
   *      "detail": "taskdetail",
   *      "status": "done",
   *      "todo_id": 1
   *    }]
   * 
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.put('/api/tasks/:task_id', tasksController.update);
  
  /**
   * @api {delete} /api/tasks/:task_id Delete Task
   * @apiName DeleteTask
   * @apiGroup Task
   * @apiDescription Delete Task by Task ID
   * 
   * @apiParam {Number} task_id Task ID.
   * 
   * @apiExample Example usage:
   * curl -X DELETE http://localhost:8000/api/tasks/1
   * 
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 204 No Return
   * 
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.delete('/api/tasks/:task_id', tasksController.delete);
  
  /**
   * @api {get} /api/tasks/:task_id Get Task
   * @apiName GetTask
   * @apiGroup Task
   * @apiDescription Get Task by task_id.
   * 
   * @apiParam {Number} task_id Task ID.
   * 
   * @apiExample Example usage:
   * curl -X GET http://localhost:8000/api/tasks/1
   * 
   * @apiSuccess {Number} task.id Task id.
   * @apiSuccess {String} task.subject Task subject.
   * @apiSuccess {String} task.detail Task detail.
   * @apiSuccess {String} task.status Status of a Task "pending" or "done"
   * @apiSuccess {Number} task.todo_id Todo ID (Owner of this task)
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "subject": "subject name",
   *      "detail": "task detail",
   *      "status": "pending",
   *      "todo_id": 1
   *    }]
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.get('/api/tasks/:task_id', tasksController.get);

  /**
   * @api {put} /api/tasks/:task_id Set Task Status
   * @apiName SetTaskStatus
   * @apiGroup Task
   * @apiDescription Edit status of a Task by Task ID
   * 
   * @apiParam {Number} task_id Task ID.
   * @apiParam {String} status Status of this Task ["pending", "done"]
   * 
   * @apiExample Example usage:
   * curl -d "status=done" -X PUT http://localhost:8000/api/tasks/1
   * 
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "subject": "subject name",
   *      "detail": "task detail",
   *      "status": "done",
   *      "todo_id": 1
   *    }]
   * 
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.put('/api/tasks/:task_id', tasksController.setStatus)
};