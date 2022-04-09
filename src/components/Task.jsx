import React, { useState } from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
const Task = ({
  id,
  done,
  text,
  handleTaskStatusChange,
  handleDeleteTask,
  handleTaskTextChange,
}) => {
  const [newText, setNewText] = useState('');
  const [updateInput, setUpdateInput] = useState(false);
  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  const changeTaskText = (e) => {
    e.preventDefault();
    handleTaskTextChange(id, newText);
    setUpdateInput(!updateInput);
  };
  return (
    <>
      <li key={id} className="todoList__list-item">
        <p
          className={
            !done
              ? 'todoList__list-item text '
              : 'todoList__list-item text done'
          }
        >
          <Link to={id}>{text}</Link>
        </p>
        <button
          className="updateTask"
          onClick={() => setUpdateInput(!updateInput)}
        >
          update Task
        </button>
        {updateInput ? (
          <div className="modal">
            <form className="modal__form">
              <input
                type="text"
                placeholder="update your text"
                onChange={(e) => handleChange(e)}
              />

              <button
                onClick={(e) => changeTaskText(e)}
                style={{ width: '300px' }}
              >
                New Text
              </button>
            </form>
          </div>
        ) : null}

        <input
          type="checkbox"
          className="finished"
          defaultChecked={done}
          onChange={() => handleTaskStatusChange(id)}
        />

        <button className="delete" onClick={() => handleDeleteTask(id)}>
          +
        </button>
      </li>

      <Routes>
        <Route path={id} element={<p>{text}</p>}></Route>
      </Routes>
    </>
  );
};
export default Task;
