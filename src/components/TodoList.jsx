import React, { useEffect } from 'react';
import CreateTask from './CreateTask';
import './todo.scss';
import Task from './Task';
import { connect } from 'react-redux';
import { sortedTaskListSelector } from './todos/todos.selector';
import * as Actions from './todos/todos.actions';
const TodoList = ({
  fetchTaskListData,
  tasks,
  removeTask,
  updateTaskStatus,
  updateTaskText,
  onCreate,
}) => {
  useEffect(() => {
    fetchTaskListData();
  }, []);
  return (
    <div className="todoList">
      <CreateTask onCreate={onCreate} />
      <ul className="todoList__list">
        {tasks.map((item) => (
          <Task
            key={item.id}
            {...item}
            handleTaskStatusChange={updateTaskStatus}
            handleDeleteTask={removeTask}
            handleTaskTextChange={updateTaskText}
          />
        ))}
      </ul>
    </div>
  );
};
const mapState = (state) => {
  return {
    tasks: sortedTaskListSelector(state),
  };
};
const mapDispatch = {
  fetchTaskListData: Actions.fetchTaskListData,
  createTask: Actions.createNewTask,
  updateTaskStatus: Actions.updateTaskStatus,
  updateTaskText: Actions.updateTaskText,
  removeTask: Actions.removeTask,
  onCreate: Actions.createNewTask,
};
export default connect(mapState, mapDispatch)(TodoList);
