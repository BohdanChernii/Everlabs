import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';
import './todo.scss';
import {
  fetchTaskList,
  createTask,
  deleteTask,
  updateTask,
} from './todogateway';
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
    console.log(newTask);
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
  return (
    <div className="todoList">
      <CreateTask onCreate={onCreate} />
      <ul className="todoList__list">
        {taskList
          .sort((x, y) => x.done - y.done)
          .map((item) => (
            <li key={item.id} className="todoList__list-item">
              <p
                className={
                  !item.done
                    ? 'todoList__list-item text '
                    : 'todoList__list-item text done'
                }
              >
                {' '}
                {item.text}
              </p>

              <input
                type="checkbox"
                className="finished"
                defaultChecked={item.done}
                onChange={() => handleTaskStatusChange(item.id)}
              />

              <button
                className="delete"
                onClick={() => handleDeleteTask(item.id)}
              >
                +
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default TodoList;
