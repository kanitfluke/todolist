'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
  }); 
  
  Todo.associate = function(models) {
    Todo.hasMany(models.Task,{foreignKey: 'todo_id'})
  };

  return Todo;
};