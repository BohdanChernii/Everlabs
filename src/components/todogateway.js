const baseUrl = 'https://614b503de4cc2900179eb033.mockapi.io/todolist';
export const fetchTaskList = () => fetch(baseUrl).then((res) => res.json());

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then((res) => res.json());

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then((res) => res.json());

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then((res) => res.json());
