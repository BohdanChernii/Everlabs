import React, { useState } from 'react';
const CreateTaskInput = ({ onCreate }) => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };
  const handleCreateTask = (e) => {
    e.preventDefault();
    onCreate(taskText);
  };

  return (
    <form className="todoList__form">
      <input
        type="text"
        className="todoList__form-item"
        placeholder="create your task"
        onChange={(e) => handleChange(e)}
      />
      <button
        className="todoList__form-createTaskButton"
        onClick={(e) => handleCreateTask(e)}
      >
        Create
      </button>
    </form>
  );
};
export default CreateTaskInput;
