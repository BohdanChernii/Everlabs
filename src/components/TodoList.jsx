import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';
import './todo.scss';
import {
  fetchTaskList,
  createTask,
  deleteTask,
  updateTask,
} from './todogateway';
import Task from './Task';
const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    fetchTaskList().then((res) => setTaskList(res));
  }, []);

  const onCreate = async (text) => {
    const newTask = {
      text,
      done: false,
    };
    await createTask(newTask);
    await fetchTaskList().then((res) => setTaskList(res));
  };

  const handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => fetchTaskList())
      .then(() => document.location.reload());
  };
  const handleTaskStatusChange = (id) => {
    const { done, text } = taskList.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => fetchTaskList());
  };

  const handleTaskTextChange = (id, newText) => {
    const { done, text } = taskList.find((task) => task.id === id);
    const updatedTask = {
      text: newText,
      done,
    };
    updateTask(id, updatedTask).then(() => fetchTaskList());
  };

  return (
    <div className="todoList">
      <CreateTask onCreate={onCreate} />
      <ul className="todoList__list">
        {taskList
          .sort((x, y) => x.done - y.done)
          .map((item) => (
            <Task
              key={item.id}
              {...item}
              handleTaskStatusChange={handleTaskStatusChange}
              handleDeleteTask={handleDeleteTask}
              handleTaskTextChange={handleTaskTextChange}
            />
          ))}
      </ul>
    </div>
  );
};
export default TodoList;
