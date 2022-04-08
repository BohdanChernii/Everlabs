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

  const onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };
    console.log(newTask);
    createTask(newTask).then(() => fetchTaskList);
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
              {!item.done ? (
                <button className="finished" onClick={() => setDone(!done)}>
                  Finished?
                </button>
              ) : null}
              <button className="delete">+</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default TodoList;
