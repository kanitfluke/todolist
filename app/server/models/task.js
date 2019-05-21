'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('pending', 'done'),
      allowNull: false,
      defaultValue: 'pending',
    },
    todo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    name: {
      singular: "task",
      plural: "tasks"
    }
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Todo, {foreignKey: 'todo_id'})
  };
  return Task;
};